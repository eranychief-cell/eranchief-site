# NOTE (6.11.2026): from draft 6 (numbers scene, pops, faster autoplay) on, the page is edited directly in
# jaffa-15-years/journey-he.html. This generator produced drafts 1-5 and no longer matches the page; don't rerun it.
import json, os, html, re

ROOT = '/home/claude/eranchief-site'
data = json.load(open('/tmp/claude-0/-home-claude/12f22fc1-b51f-597a-810e-e1460bbb3535/scratchpad/jaffa.json'))
he = [o for o in data if o['lang'] == 'he']
E = html.escape

def webp(item):
    name = os.path.basename(item['full']).replace('.jpg', '.webp')
    return f"/jaffa-15-years/img/scroll/{'m' if item['main'] else 'x'}-{name}"

def size(item):
    from PIL import Image
    p = ROOT + webp(item)
    return Image.open(p).size

def clean_title(t):
    return re.sub(r'\s*\(יפו \d{4}\)\s*$', '', t)

def date_of(cap):
    # cap like "⁨name⁩ · ⁨16/12/2012⁩ · ⁨15:47⁩ · ⁨iPhone 4S⁩"
    parts = [p.strip('⁨⁩ ') for p in cap.split('·')]
    for p in parts:
        if re.match(r'\d{2}/\d{2}/\d{4}$', p):
            return p
    return ''

years = []
extras = []
for o in he:
    main = [i for i in o['items'] if i['main']][0]
    w, h = size(main)
    years.append(dict(year=o['year'], title=o['title'], date=date_of(main['cap']), model=main['model'],
                      src=webp(main), alt=main['alt'], w=w, h=h))
    for it in o['items']:
        if it['main']:
            continue
        w, h = size(it)
        extras.append(dict(year=o['year'], title=clean_title(it['title']), date=date_of(it['cap']), model=it['model'],
                           src=webp(it), alt=it['alt'], w=w, h=h))

first, last = years[0], years[-1]
N = len(years)

# ---------- markup ----------
layers = '\n'.join(
    f'<img class="layer" data-i="{i}" src="{y["src"]}" width="{y["w"]}" height="{y["h"]}" alt="{E(y["alt"])}" '
    f'{"loading=\"eager\"" if i < 2 else "loading=\"lazy\""} decoding="async">'
    for i, y in enumerate(years))
roll = ''.join(f'<span>{y["year"]}</span>' for y in years)
ticks = ''.join(f'<i style="--t:{i/(N-1):.4f}"></i>' for i in range(N))
meta_json = json.dumps([dict(y=y['year'], t=y['title'], d=y['date'], m=y['model']) for y in years], ensure_ascii=False)

cards = '\n'.join(
    f'<figure class="card"><img src="{x["src"]}" width="{x["w"]}" height="{x["h"]}" alt="{E(x["alt"])}" loading="lazy" decoding="async">'
    f'<figcaption><span class="c-t" dir="auto">{E(x["title"])}</span><span class="c-y">{x["year"]}</span></figcaption></figure>'
    for x in extras)

page = f'''<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>15 שנה, חוף אחד · מסע בגלילה | ערן ירושלמי (CHIEF)</title>
<meta name="description" content="יפו העתיקה מאותו חוף בתל אביב, בכל שנה מ־2012 ועד 2026. מסע בגלילה דרך 15 שנה של צילום באייפון, מאת ערן ירושלמי (CHIEF).">
<meta name="robots" content="noindex,follow">
<link rel="canonical" href="https://eranchief.com/he/jaffa-15-years/">
<meta name="theme-color" content="#fbfaf7">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700&family=Heebo:wght@300;400;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="preload" as="image" href="{first["src"]}">
<style>
:root{{
  --canvas:#fbfaf7; --surface:#f1ede6; --ink:#1c1915; --ink-soft:#6e665d; --gold:#b0731c; --line:rgba(28,25,21,.14);
  --display:"Frank Ruhl Libre",Georgia,serif; --text:"Heebo",system-ui,sans-serif; --mono:"IBM Plex Mono",ui-monospace,monospace;
  --vh:100vh;
}}
@supports(height:100svh){{:root{{--vh:100svh}}}}
*{{box-sizing:border-box;margin:0;padding:0}}
html{{background:var(--canvas);color:var(--ink);-webkit-text-size-adjust:100%}}
body{{font-family:var(--text);font-weight:300;line-height:1.6;overflow-x:clip}}
a{{color:inherit}}
img{{display:block}}
.bar{{position:fixed;inset:0 0 auto 0;z-index:20;display:flex;justify-content:space-between;align-items:center;padding:14px 18px;padding-top:max(14px,env(safe-area-inset-top));
  font-size:13px;letter-spacing:.02em;background:linear-gradient(rgba(251,250,247,.9),rgba(251,250,247,0));pointer-events:none}}
.bar a{{pointer-events:auto;text-decoration:none}}
.logo{{font-family:var(--display);font-weight:700;letter-spacing:.18em;font-size:15px}}
.bar .back{{color:var(--ink-soft)}}
.pin{{position:relative;height:calc(var(--span) * var(--vh))}}
.stick{{position:sticky;top:0;height:var(--vh);overflow:hidden}}
/* glowing sunset line through the whole page, in the right third; JS cuts gaps wherever a photo or text crosses it */
.glow{{position:fixed;top:0;height:100%;right:calc(33.3% - 20px);width:40px;z-index:15;pointer-events:none;
  background:linear-gradient(90deg,rgba(255,138,42,0) 0%,rgba(255,138,42,.10) 25%,rgba(255,150,70,.45) 44%,#ff8a2a 48%,#ff8a2a 52%,rgba(255,150,70,.45) 56%,rgba(255,138,42,.10) 75%,rgba(255,138,42,0) 100%)}}

/* 1. hero: layered photo */
.hero{{--span:1.7}}
.hero .bg{{position:absolute;inset:-12%;background:center/cover no-repeat;filter:blur(44px) saturate(1.1);opacity:.28;will-change:transform}}
.hero .shade{{position:absolute;inset:0;background:radial-gradient(120% 80% at 50% 40%,rgba(251,250,247,0) 0%,rgba(251,250,247,.6) 68%,rgba(251,250,247,.95) 100%)}}
.hero .photo{{position:absolute;left:50%;top:50%;width:min(88vw,1100px);transform:translate(-50%,-46%);will-change:transform;box-shadow:0 24px 60px rgba(28,25,21,.22)}}
.hero .photo img{{width:100%;height:auto}}
.hero .copy{{position:absolute;inset-inline:22px;bottom:max(46px,calc(env(safe-area-inset-bottom) + 30px));will-change:transform,opacity}}
.hero h1{{font-family:var(--display);font-weight:500;font-size:clamp(46px,11vw,128px);line-height:.98;letter-spacing:-.01em}}
.hero p{{margin-top:14px;max-width:34ch;font-size:clamp(15px,3.8vw,19px);color:var(--ink-soft)}}

/* 2. statement: lines assemble */
.say{{--span:1.5}}
.say .stick{{display:grid;place-items:center;padding:0 24px}}
.say .lines{{font-family:var(--display);font-size:clamp(34px,8.5vw,84px);line-height:1.15;text-align:start;width:min(100%,900px)}}
.say .lines span{{display:block;opacity:0;transform:translateY(.35em);will-change:transform,opacity}}
.say .lines .soft{{color:var(--gold);font-style:normal}}

/* 3. peak: fifteen years under the hand */
.peak{{--span:{N*0.62:.2f}}}
.peak .stick{{background:linear-gradient(180deg,#fbfaf7 0%,#fde9cf 40%,#f8c99a 70%,#efa27a 100%);display:grid;grid-template-rows:auto 1fr auto;padding:calc(64px + env(safe-area-inset-top)) 20px max(22px,env(safe-area-inset-bottom))}}
.yearbox{{display:flex;align-items:baseline;gap:14px;justify-content:space-between}}
.roll{{height:1.08em;overflow:hidden;font-family:var(--mono);font-weight:500;font-size:clamp(64px,19vw,170px);line-height:1.08;letter-spacing:-.04em;direction:ltr}}
.roll .strip{{display:flex;flex-direction:column;will-change:transform}}
.roll span{{height:1.08em}}
.model{{font-family:var(--mono);font-size:clamp(12px,3.2vw,15px);color:var(--ink-soft);direction:ltr;text-align:end;min-height:1.4em}}
.stage{{position:relative;margin:14px 0}}
.stage .layer{{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:0;will-change:opacity,transform}}
.stage .layer[data-i="0"]{{opacity:1}}
.caption{{display:flex;flex-direction:column;gap:4px;min-height:5.2em}}
.caption .t{{font-family:var(--display);font-size:clamp(26px,6.6vw,44px);line-height:1.15;transition:opacity .25s}}
.caption .d{{font-family:var(--mono);font-size:13px;color:var(--ink-soft);direction:ltr;text-align:end;transition:opacity .25s}}
.rail{{position:relative;height:18px;margin-top:10px}}
.rail::before{{content:"";position:absolute;inset:8px 0 auto;height:1px;background:var(--line)}}
.rail .fill{{position:absolute;inset-inline-start:0;top:8px;height:1px;width:calc(var(--p,0) * 100%);background:var(--gold)}}
.rail i{{position:absolute;top:5px;inset-inline-start:calc(var(--t) * 100%);width:1px;height:7px;background:var(--line)}}
.rail .ends{{position:absolute;inset:14px 0 auto;display:flex;justify-content:space-between;font-family:var(--mono);font-size:11px;color:var(--ink-soft)}}

/* 4. between the years: lateral travel */
.between{{--span:3.2}}
.between .stick{{display:flex;flex-direction:column;justify-content:center;gap:22px}}
.between h2{{font-family:var(--display);font-weight:500;font-size:clamp(30px,7.5vw,64px);line-height:1.05;padding:0 22px}}
.between h2 small{{display:block;margin-top:8px;font-family:var(--text);font-weight:300;font-size:clamp(14px,3.6vw,18px);color:var(--ink-soft)}}
.track{{display:flex;gap:14px;padding:0 22px;width:max-content;align-self:flex-start;will-change:transform}}
.card{{flex:none;height:min(46vh,420px);display:flex;flex-direction:column;gap:8px}}
.card img{{height:calc(100% - 3.2em);width:auto;max-width:none;border-radius:2px}}
.card figcaption{{display:flex;justify-content:space-between;gap:12px;font-size:14px;max-width:100%}}
.card .c-t{{font-family:var(--display);font-size:17px}}
.card .c-y{{font-family:var(--mono);font-size:12px;color:var(--ink-soft);padding-top:3px}}

/* 5. close: the horizon opens */
.close{{--span:1.9}}
.close .stick{{display:grid;grid-template-rows:1fr auto;padding:calc(70px + env(safe-area-inset-top)) 22px max(26px,env(safe-area-inset-bottom))}}
.close .frame{{position:relative;align-self:center}}
.close .frame img{{width:100%;height:auto;max-height:52vh;object-fit:contain;clip-path:inset(50% 0 50% 0);will-change:clip-path}}
.close .horizon{{position:absolute;inset-inline:0;top:50%;height:1px;background:var(--gold);transform-origin:center;will-change:transform,opacity}}
.close .end{{opacity:0;transform:translateY(16px);will-change:opacity,transform}}
.close h2{{font-family:var(--display);font-weight:500;font-size:clamp(32px,8vw,70px);line-height:1.05}}
.close .who{{margin-top:8px;color:var(--ink-soft);font-size:15px}}
.cta{{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}}
.cta a{{display:inline-flex;align-items:center;min-height:48px;padding:0 20px;text-decoration:none;font-weight:400;font-size:16px;border:1px solid var(--ink)}}
.cta .main{{background:var(--ink);color:var(--canvas)}}
footer{{padding:28px 22px calc(28px + env(safe-area-inset-bottom));border-top:1px solid var(--line);color:var(--ink-soft);font-size:13px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}}

.play{{position:fixed;left:16px;bottom:max(16px,env(safe-area-inset-bottom));z-index:30;display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 16px;
  border:1px solid rgba(28,25,21,.18);border-radius:999px;background:rgba(251,250,247,.88);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);
  color:var(--ink);font:400 15px/1 var(--text);box-shadow:0 6px 18px rgba(28,25,21,.12);opacity:0;transition:opacity .4s}}
.play.on{{opacity:1}}
.play .ic{{font-size:13px;width:1em;text-align:center}}
@media (min-width:900px){{
  .peak .stick{{grid-template-columns:1fr 2.2fr;grid-template-rows:1fr auto;column-gap:48px;padding:96px 56px 40px}}
  .yearbox{{grid-column:1;grid-row:1;flex-direction:column;align-items:flex-start;justify-content:flex-end}}
  .model{{text-align:start}}
  .stage{{grid-column:2;grid-row:1 / span 2;margin:0}}
  .caption{{grid-column:1;grid-row:2}}
  .caption .d{{text-align:start}}
  .rail{{display:none}}
  .hero .copy{{inset-inline:56px}}
  .close .stick{{grid-template-columns:2fr 1fr;grid-template-rows:1fr;align-items:center;column-gap:48px;padding:90px 56px 40px}}
  .close .frame img{{max-height:72vh}}
}}

/* reduced motion: everything visible, nothing pinned */
@media (prefers-reduced-motion:reduce){{
  .glow{{display:none}} .play{{display:none}}
  .pin{{height:auto}}
  .stick{{position:relative;height:auto;min-height:0;overflow:visible;padding-top:90px;padding-bottom:40px}}
  .hero .stick{{height:var(--vh)}}
  .say .lines span,.close .end{{opacity:1;transform:none}}
  .peak .stick{{display:block}}
  .peak .yearbox,.peak .caption,.peak .rail{{display:none}}
  .stage{{display:grid;gap:28px}}
  .stage .layer{{position:static;opacity:1;height:auto}}
  .track{{flex-wrap:wrap;width:auto}}
  .card{{height:auto;width:min(100%,360px)}} .card img{{width:100%;height:auto}}
  .close .frame img{{clip-path:none}} .close .horizon{{display:none}}
}}
</style>
</head>
<body>
<div class="glow" aria-hidden="true"></div>
<button class="play" type="button" aria-label="עצירת המצגת"><span class="ic">⏸</span><span class="lb">עצירה</span></button>
<header class="bar"><a class="logo" href="/he/">CHIEF</a><a class="back" href="/he/jaffa-15-years/">לסדרה המלאה</a></header>
<main>

<section class="pin hero" aria-label="פתיחה">
  <div class="stick">
    <div class="bg" style="background-image:url('{first["src"]}')"></div>
    <div class="shade"></div>
    <figure class="photo"><img src="{first["src"]}" width="{first["w"]}" height="{first["h"]}" alt="{E(first["alt"])}" fetchpriority="high"></figure>
    <div class="copy">
      <h1>15 שנה.<br>חוף אחד.</h1>
      <p>יפו העתיקה, מאותו חוף בתל אביב. בכל שנה מ־2012 ועד 2026. הכול באייפון.</p>
    </div>
  </div>
</section>

<section class="pin say" aria-label="אותו חוף">
  <div class="stick">
    <p class="lines"><span>אותו חוף.</span><span>אותו צריח.</span><span class="soft">אור אחר בכל פעם.</span></p>
  </div>
</section>

<section class="pin peak" aria-label="15 שנה, שנה אחרי שנה">
  <div class="stick">
    <div class="yearbox">
      <div class="roll" aria-hidden="true"><div class="strip">{roll}</div></div>
      <div class="model" aria-live="polite">{E(first["model"])}</div>
    </div>
    <div class="stage">
{layers}
    </div>
    <div class="caption" aria-live="polite">
      <span class="t" dir="auto">{E(first["title"])}</span>
      <span class="d">{E(first["date"])}</span>
      <div class="rail" aria-hidden="true"><div class="fill"></div>{ticks}<div class="ends"><span>2012</span><span>2026</span></div></div>
    </div>
  </div>
</section>

<section class="pin between" aria-label="בין השנים">
  <div class="stick">
    <h2>ובין השנים<small>עוד {len(extras)} רגעים מאותו חוף, וכל אחד עם שם משלו.</small></h2>
    <div class="track">
{cards}
    </div>
  </div>
</section>

<section class="pin close" aria-label="סיום">
  <div class="stick">
    <div class="frame"><img src="{last["src"]}" width="{last["w"]}" height="{last["h"]}" alt="{E(last["alt"])}" loading="lazy" decoding="async"><div class="horizon"></div></div>
    <div class="end">
      <h2>החוף לא זז.<br>האור תמיד חדש.</h2>
      <p class="who">ערן ירושלמי (CHIEF) · צילום באייפון בלבד</p>
      <div class="cta"><a class="main" href="/he/jaffa-wall-art/">לתמונות של יפו להזמנה</a><a href="/he/jaffa-15-years/">לסדרה המלאה</a></div>
    </div>
  </div>
</section>

</main>
<footer><span>© ערן ירושלמי (CHIEF)</span><a href="/he/">eranchief.com</a></footer>

<script>
(()=>{{
const META={meta_json};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce) return;
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const ease=t=>t*t*(3-2*t);
const prog=el=>{{const r=el.getBoundingClientRect();const run=r.height-innerHeight;return clamp(-r.top/(run>0?run:1));}};
const vis=el=>{{const r=el.getBoundingClientRect();return r.bottom>-50&&r.top<innerHeight+50;}};

const hero=document.querySelector('.hero'),hBg=hero.querySelector('.bg'),hPh=hero.querySelector('.photo'),hCopy=hero.querySelector('.copy');
const say=document.querySelector('.say'),lines=[...say.querySelectorAll('.lines span')];
const peak=document.querySelector('.peak'),layers=[...peak.querySelectorAll('.layer')],strip=peak.querySelector('.strip'),
      model=peak.querySelector('.model'),tEl=peak.querySelector('.caption .t'),dEl=peak.querySelector('.caption .d'),rail=peak.querySelector('.rail');
const stage=peak.querySelector('.stage');
const btw=document.querySelector('.between'),track=btw.querySelector('.track');
const cls=document.querySelector('.close'),cImg=cls.querySelector('.frame img'),hz=cls.querySelector('.horizon'),end=cls.querySelector('.end');
const N=layers.length, W=0.38; let shown=-1;

function fitStage(){{
  // the stage gets the room that is left; photos keep their full frame (object-fit: contain)
  const st=peak.querySelector('.stick');const cs=getComputedStyle(st);
  if(innerWidth>=900){{stage.style.height='';return;}}
  const used=[...st.children].filter(c=>c!==stage).reduce((s,c)=>s+c.getBoundingClientRect().height,0);
  const pad=parseFloat(cs.paddingTop)+parseFloat(cs.paddingBottom)+28;
  stage.style.height=Math.max(180,innerHeight-used-pad)+'px';
}}

function frame(){{
  if(vis(hero)){{const p=prog(hero);
    hBg.style.transform=`translate3d(0,${{p*8}}%,0) scale(1.05)`;
    hPh.style.transform=`translate(-50%,calc(-46% - ${{p*7}}vh)) scale(${{1-p*.06}})`;
    hCopy.style.transform=`translate3d(0,${{-p*22}}vh,0)`;hCopy.style.opacity=1-ease(clamp(p*1.6-.35));}}
  if(vis(say)){{const p=prog(say);
    lines.forEach((l,i)=>{{const a=ease(clamp((p-.08-i*.24)/.2));l.style.opacity=a;l.style.transform=`translateY(${{(1-a)*.35}}em)`;}});}}
  if(vis(peak)){{const p=prog(peak),idx=p*(N-1),f=Math.min(N-2,Math.floor(idx)),t=idx-f;
    const s=ease(clamp((t-(1-W))/W));
    layers.forEach((L,i)=>{{let o=0,z=1;
      if(i===f){{o=1-ease(clamp((s-.55)/.45));z=1;}} else if(i===f+1){{o=s;z=2;}} else if(i<f&&p>=1){{o=0;}}
      if(p>=1&&i===N-1){{o=1;}}
      L.style.opacity=o;L.style.zIndex=z;
      if(i===f) L.style.transform=`scale(${{1.0+t*.025}})`; else if(i===f+1) L.style.transform=`scale(${{1.0+s*.0}})`;
    }});
    const roll=f+s; strip.style.transform=`translate3d(0,${{-roll*1.08}}em,0)`;
    rail.style.setProperty('--p',(roll/(N-1)).toFixed(4));
    const k=s>.5?f+1:f;
    if(k!==shown){{shown=k;const m=META[k];tEl.textContent=m.t;dEl.textContent=m.d;model.textContent=m.m;}}
  }}
  if(vis(btw)){{const p=prog(btw);const dist=Math.max(0,track.scrollWidth-innerWidth);
    track.style.transform=`translate3d(${{ease(p)*dist}}px,0,0)`;}}
  if(vis(cls)){{const p=prog(cls);const o=ease(clamp(p/.55));
    cImg.style.clipPath=`inset(${{(1-o)*50}}% 0 ${{(1-o)*50}}% 0)`;
    hz.style.transform=`scaleX(${{ease(clamp(p/.18))}})`;hz.style.opacity=1-o;
    const e=ease(clamp((p-.5)/.25));end.style.opacity=e;end.style.transform=`translateY(${{(1-e)*16}}px)`;}}
}}

const glow=document.querySelector('.glow');
const avoid=[...document.querySelectorAll('footer span,footer a,.bar a,h1,h2,.hero p,.say .lines span,.roll,.model,.caption .t,.caption .d,.rail,.card,.close .who,.cta a,.hero .photo img,.close .frame img,.stage .layer')];
function seenRect(el){{
  if(el.classList.contains('layer')){{
    if(+getComputedStyle(el).opacity<0.02) return null;
    const r=el.getBoundingClientRect(),nw=el.naturalWidth||el.width,nh=el.naturalHeight||el.height,k=Math.min(r.width/nw,r.height/nh),w=nw*k,h=nh*k;
    return {{left:r.left+(r.width-w)/2,right:r.left+(r.width+w)/2,top:r.top+(r.height-h)/2,bottom:r.top+(r.height+h)/2}};
  }}
  const o=+getComputedStyle(el).opacity; if(o<0.02) return null;
  if(el.tagName==='IMG'&&el.closest('.frame')){{const r=el.getBoundingClientRect();const cp=getComputedStyle(el).clipPath.match(/inset\(([\d.]+)%/);const f=cp?+cp[1]/100:0;return {{left:r.left,right:r.right,top:r.top+r.height*f,bottom:r.bottom-r.height*f}};}}
  return el.getBoundingClientRect();
}}
function cutGlow(){{
  const g=glow.getBoundingClientRect(),cx=g.left+g.width/2,H=innerHeight,gaps=[];
  for(const el of avoid){{const r=seenRect(el); if(!r||r.bottom<0||r.top>H||r.right<cx-14||r.left>cx+14||r.bottom-r.top<2) continue;
    gaps.push([Math.max(0,r.top-10),Math.min(H,r.bottom+10)]);}}
  gaps.sort((a,b)=>a[0]-b[0]); const m=[]; for(const q of gaps){{if(m.length&&q[0]<=m[m.length-1][1]) m[m.length-1][1]=Math.max(m[m.length-1][1],q[1]); else m.push(q.slice());}}
  if(!m.length){{glow.style.webkitMaskImage=glow.style.maskImage='none';return;}}
  const st=['#000 0px']; for(const [a,b] of m){{st.push(`#000 ${{a}}px`,`transparent ${{a+6}}px`,`transparent ${{b-6}}px`,`#000 ${{b}}px`);}} st.push('#000 100%');
  const v=`linear-gradient(to bottom,${{st.join(',')}})`; glow.style.webkitMaskImage=v; glow.style.maskImage=v;
}}

// the presentation plays by itself; any touch or scroll by the visitor takes over, the button pauses and resumes
const btn=document.querySelector('.play'),ic=btn.querySelector('.ic'),lb=btn.querySelector('.lb');
let playing=false,last=0,pos=scrollY,started=false,ended=false;
const endY=()=>{{const r=cls.getBoundingClientRect();return scrollY+r.bottom-innerHeight;}};
function ui(){{ic.textContent=playing?'⏸':'▶';lb.textContent=playing?'עצירה':(ended?'מההתחלה':'המשך');btn.setAttribute('aria-label',playing?'עצירת המצגת':'המשך המצגת');}}
function speed(){{
  const base=innerHeight*0.36; // about 2.8 seconds per screen
  const r=peak.getBoundingClientRect(); const inPeak=r.top<=0&&r.bottom>=innerHeight;
  const b=btw.getBoundingClientRect(); const inPan=b.top<=0&&b.bottom>=innerHeight;
  return base*(inPeak?0.8:inPan?1.1:1.25);
}}
function tick(t){{
  if(!playing) return;
  const dt=Math.min(0.05,(t-last)/1000||0); last=t;
  const ramp=Math.min(1,(t-rampStart)/900);
  pos=Math.min(endY(),pos+speed()*dt*ramp); scrollTo(0,pos);
  if(pos>=endY()-1){{playing=false;ended=true;ui();return;}}
  requestAnimationFrame(tick);
}}
let rampStart=0;
function play(){{ if(ended){{scrollTo(0,0);ended=false;}} pos=scrollY;playing=true;last=performance.now();rampStart=last;ui();requestAnimationFrame(tick);}}
function pause(){{ if(!playing) return; playing=false;ui();}}
btn.addEventListener('click',e=>{{e.stopPropagation();playing?pause():play();}});
['touchstart','wheel','keydown','mousedown'].forEach(ev=>addEventListener(ev,e=>{{if(e.target.closest&&e.target.closest('.play'))return;pause();}},{{passive:true}}));
document.addEventListener('visibilitychange',()=>{{if(document.hidden)pause();}});
setTimeout(()=>{{btn.classList.add('on');if(!started&&scrollY<10){{started=true;play();}}else ui();}},1500);
let raf=0;const req=()=>{{if(!raf)raf=requestAnimationFrame(()=>{{raf=0;frame();cutGlow();}});}};
addEventListener('scroll',req,{{passive:true}});
addEventListener('resize',()=>{{fitStage();req();}});
fitStage();frame();cutGlow();
if(document.fonts) document.fonts.ready.then(()=>{{fitStage();frame();cutGlow();}});
addEventListener('load',()=>{{frame();cutGlow();}});
}})();
</script>
</body>
</html>
'''
open(ROOT + '/jaffa-15-years/journey-he.html', 'w').write(page)
print(len(page), 'bytes', N, 'years', len(extras), 'extras')
print('em-dash count:', page.count('—'))
