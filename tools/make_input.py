# Build build/input.json: config + trusted entries (hand-made answers already in the game, plus hand lists)
import json, os
D=os.path.dirname(os.path.abspath(__file__))
ex=json.load(open(D+'/build/existing.json')); cfg=json.load(open(D+'/config.json'))
out={}
for slug,c in cfg.items():
    old=ex.get(c['q'],{'entries':[],'s':[]})
    trusted=[{'alts':e['alts'],'title':'','def':e['def'],'old':e['tier']} for e in old['entries'] if e['tier']>0]
    seen={t['alts'][0].lower() for t in trusted}
    if c.get('hand'):
        for line in open(D+'/lists/'+c['hand']+'.txt'):
            line=line.strip()
            if not line or line.startswith('#'): continue
            name,_,title=line.partition(' = ')
            alts=[a.strip() for a in name.split('/') if a.strip()]
            if alts[0].lower() in seen: continue
            seen.add(alts[0].lower()); trusted.append({'alts':alts,'title':title.strip(),'def':'','old':0})
    out[slug]=dict(c, s=old.get('s') or c.get('s') or [], trusted=trusted)
json.dump(out,open(D+'/build/input.json','w'),ensure_ascii=False)
print(len(out),'prompts', sum(len(v['trusted']) for v in out.values()),'trusted entries')
