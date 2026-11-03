// Dump the current hand-made answer lists (raw text) to build/existing.json
const fs=require('fs');const s=fs.readFileSync(__dirname+'/../index.html','utf8');
const js=[...s.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n');
const start=js.indexOf('const PROMPTS'), end=js.indexOf('PROMPTS.push(...MORE)');
eval(js.slice(start,end).replace('const PROMPTS','globalThis.PROMPTS').replace('const MORE','globalThis.MORE'));
const all=PROMPTS.concat(MORE), out={};
for(const p of all){ if(out[p.q]) continue; out[p.q]={q:p.q,s:p.s,entries:p.a.split('\n').map(l=>l.match(/^(\d) ([^|]+?)\s*(?:\|\s*(.*))?$/)).filter(Boolean).map(m=>({tier:+m[1],alts:m[2].split('/').map(x=>x.trim()),def:m[3]||''}))};}
fs.writeFileSync(__dirname+'/build/existing.json',JSON.stringify(out,null,0));
console.log(Object.keys(out).length,'prompts');
