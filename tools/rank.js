// Paste into the console of any en.wikipedia.org page (or run through browser automation).
// Reads tools/build/input.json from GitHub, looks up every answer on Wikipedia,
// and returns {slug: [[entryIndex, resolvedTitle, views60d, status], ...]}.
// status: ok | missing | disambig
async function rankAll(url, only){
  const inp = await fetch(url).then(r=>r.json());
  const API = "/w/api.php?action=query&format=json&formatversion=2&redirects=1&prop=pageviews|pageprops&ppprop=disambiguation&pvipdays=60&titles=";
  const info = {};   // requested title -> {title, views, status}
  async function lookup(titles){
    titles = [...new Set(titles.filter(t => t && !(t in info)))];
    for (let i = 0; i < titles.length; i += 50){
      const batch = titles.slice(i, i+50);
      let cont = "", pages = {}, norm = {}, redir = {};
      for (let guard = 0; guard < 20; guard++){
        const r = await fetch(API + encodeURIComponent(batch.join("|")) + cont).then(r=>r.json());
        const q = r.query || {};
        (q.normalized||[]).forEach(n => norm[n.from] = n.to);
        (q.redirects||[]).forEach(n => redir[n.from] = n.to);
        (q.pages||[]).forEach(p => {
          const old = pages[p.title] || {};
          pages[p.title] = Object.assign(old, p, {pageviews: Object.assign(old.pageviews||{}, p.pageviews||{})});
        });
        if (r.continue){ cont = "&" + Object.entries(r.continue).map(([k,v]) => k+"="+encodeURIComponent(v)).join("&"); }
        else break;
      }
      for (const t of batch){
        let f = norm[t] || t; f = redir[f] || f; f = norm[f] || f;
        const p = pages[f];
        if (!p || p.missing || p.invalid) { info[t] = {title: f, views: 0, status: "missing"}; continue; }
        const views = Object.values(p.pageviews||{}).reduce((s,x) => s + (x||0), 0);
        info[t] = {title: p.title, views, status: p.pageprops && "disambiguation" in p.pageprops ? "disambig" : "ok"};
      }
    }
  }
  const out = {};
  for (const [slug, c] of Object.entries(inp)){
    if (only && !only.includes(slug)) continue;
    const cands = c.entries.map(e => e.title ? [e.title] : [e.alts[0] + " " + c.hint, ...e.alts]);
    await lookup(cands.flat());
    out[slug] = c.entries.map((e, i) => {
      let best = null;
      for (const t of cands[i]){ const x = info[t]; if (x && x.status === "ok"){ best = x; break; } }
      if (!best) best = info[cands[i][0]] && info[cands[i][0]].status === "disambig" ? info[cands[i][0]] : (cands[i].map(t=>info[t]).find(x=>x && x.status==="disambig") || {title:"", views:0, status:"missing"});
      return [i, best.title, best.views, best.status];
    });
  }
  return out;
}
