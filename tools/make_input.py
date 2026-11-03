# Combine hand-made answers with the new candidate lists into build/input.json
import json, os, re, sys
D=os.path.dirname(os.path.abspath(__file__))
ex=json.load(open(D+'/build/existing.json'))
cfg=json.load(open(D+'/prompts.json'))   # slug -> {q, hint, s?}
out={}
for slug,c in cfg.items():
    path=D+'/lists/'+slug+'.txt'
    if not os.path.exists(path): continue
    entries=[]; seen=set()
    def add(alts,title='',def_='',tier=None):
        k=alts[0].lower()
        if k in seen: return
        seen.add(k); entries.append({'alts':alts,'title':title,'def':def_,'old':tier})
    old=ex.get(c['q'],{'entries':[],'s':c.get('s',[])})
    for e in old['entries']:
        if e['tier']>0: add(e['alts'],'',e['def'],e['tier'])
    for line in open(path):
        line=line.strip()
        if not line or line.startswith('#'): continue
        name,_,title=line.partition(' = ')
        add([a.strip() for a in name.split('/') if a.strip()], title.strip())
    out[slug]={'q':c['q'],'hint':c.get('hint',''),'s':c.get('s') or old.get('s') or [],'entries':entries}
json.dump(out,open(D+'/build/input.json','w'),ensure_ascii=False)
for k,v in out.items(): print(k,len(v['entries']))
