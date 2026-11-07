"""Make the English scroll journey (jaffa-15-years/journey-en.html) from the Hebrew one.
Run after any change to journey-he.html:  python3 tools/make_journey_en.py
English titles, captions and alt texts come from tools/jaffa_journey_en_data.json
(extracted from the English series page jaffa-15-years/index.html)."""
import json, re, html, sys
ROOT = __file__.rsplit('/tools/', 1)[0]
he = open(ROOT + '/jaffa-15-years/journey-he.html', encoding='utf-8').read()
D = json.load(open(ROOT + '/tools/jaffa_journey_en_data.json', encoding='utf-8'))
E = lambda s: html.escape(s, quote=True)

def en_date(cap):
    for p in cap.split(' · '):
        if re.fullmatch(r'\d{1,2} [A-Z][a-z]{2} \d{4}', p.strip()):
            return p.strip()
    return ''

s = he

# images: English alt text, matched by file name
def alt_fix(m):
    tag = m.group(0)
    name = re.search(r'/img/scroll/[mx]-([^"]+)\.webp', tag).group(1)
    return re.sub(r'alt="[^"]*"', 'alt="' + E(D[name]['alt']) + '"', tag)
s = re.sub(r'<img [^>]*src="/jaffa-15-years/img/scroll/[mx]-[^"]+\.webp"[^>]*>', alt_fix, s)

# cards: English titles
def card_fix(m):
    name = m.group(1)
    return m.group(0).rsplit('<span class="c-t" dir="auto">', 1)[0] + '<span class="c-t" dir="auto">' + E(D[name]['t']) + '</span>'
s = re.sub(r'<figure class="card"><img src="/jaffa-15-years/img/scroll/x-([^"]+)\.webp".*?<span class="c-t" dir="auto">[^<]*</span>', card_fix, s)

# META: English title and date per year (main photo of each year, in layer order)
mains = re.findall(r'<img class="layer" data-i="\d+" src="/jaffa-15-years/img/scroll/m-([^"]+)\.webp"', s)
meta = json.loads(re.search(r'const META=(\[.*?\]);', s).group(1))
assert len(meta) == len(mains)
for row, name in zip(meta, mains):
    row['t'] = D[name]['t']; row['d'] = en_date(D[name]['cap']); row['m'] = D[name]['m'] or row['m']
s = re.sub(r'const META=\[.*?\];', lambda m: 'const META=' + json.dumps(meta, ensure_ascii=False) + ';', s, count=1)
first = D[mains[0]]

rep = [
 ('<html lang="he" dir="rtl">', '<html lang="en" dir="ltr">'),
 ('<title>15 שנה, חוף אחד · מסע בגלילה | ערן ירושלמי (CHIEF)</title>', '<title>15 Years, One Beach · The Journey | Eran Yerushalmi (CHIEF)</title>'),
 (re.search(r'<meta name="description" content="[^"]*">', s).group(0),
  '<meta name="description" content="Old Jaffa from the same Tel Aviv beach, every year from 2012 to 2026. A 30-second journey through 15 years of iPhone photography by Eran Yerushalmi (CHIEF).">'),
 ('<link rel="canonical" href="https://eranchief.com/he/jaffa-15-years/">', '<link rel="canonical" href="https://eranchief.com/jaffa-15-years/">'),
 ('.roll.pop{animation:yearpop .5s cubic-bezier(.3,1.6,.5,1);transform-origin:right center}', '.roll.pop{animation:yearpop .5s cubic-bezier(.3,1.6,.5,1);transform-origin:left center}'),
 ('transform:scaleX(0);transform-origin:right;', 'transform:scaleX(0);transform-origin:left;'),
 ('.caption .d{font-family:var(--mono);font-size:13px;color:var(--ink-soft);direction:ltr;text-align:end}', '.caption .d{font-family:var(--mono);font-size:13px;color:var(--ink-soft);direction:ltr;text-align:start}'),
 ('<button class="play" type="button" aria-label="עצירת המצגת"><span class="ic">⏸</span><span class="lb">עצירה</span></button>',
  '<button class="play" type="button" aria-label="Pause the journey"><span class="ic">⏸</span><span class="lb">Pause</span></button>'),
 ('<a class="logo" href="/he/">CHIEF</a><a class="back" href="/he/jaffa-15-years/">לסדרה המלאה</a>', '<a class="logo" href="/">CHIEF</a><a class="back" href="/jaffa-15-years/">The full series</a>'),
 ('aria-label="פתיחה"', 'aria-label="Opening"'),
 ('<h1><span class="ln">15 שנה.</span><span class="ln">חוף אחד.</span></h1>', '<h1><span class="ln">15 years.</span><span class="ln">One beach.</span></h1>'),
 ('<p>יפו העתיקה, מאותו חוף בתל אביב. בכל שנה מ־2012 ועד 2026. הכול באייפון.</p>', '<p>Old Jaffa, from the same beach in Tel Aviv. Every year from 2012 to 2026. All on iPhone.</p>'),
 ('aria-label="אותו חוף"', 'aria-label="Same beach"'),
 ('<span>אותו חוף.</span><span>אותו צריח.</span><span class="soft">אור אחר בכל פעם.</span>', '<span>Same beach.</span><span>Same tower.</span><span class="soft">Different light every time.</span>'),
 ('aria-label="במספרים"', 'aria-label="In numbers"'),
 ('<b data-to="15">15</b><span>שנה</span>', '<b data-to="15">15</b><span>years</span>'),
 ('<b data-to="46">46</b><span>צילומים</span>', '<b data-to="46">46</b><span>photographs</span>'),
 ('<b data-to="1">1</b><span>חוף</span>', '<b data-to="1">1</b><span>beach</span>'),
 ('aria-label="15 שנה, שנה אחרי שנה"', 'aria-label="15 years, year by year"'),
 ('aria-label="בין השנים"', 'aria-label="Between the years"'),
 ('<h2>ובין השנים<small>עוד 31 רגעים מאותו חוף, וכל אחד עם שם משלו.</small></h2>', '<h2>Between the years<small>31 more moments from the same beach, each with its own name.</small></h2>'),
 ('aria-label="סיום"', 'aria-label="Ending"'),
 ('<h2>החוף לא זז.<br>האור תמיד חדש.</h2>', '<h2>The beach doesn\'t move.<br>The light is always new.</h2>'),
 ('<p class="who">ערן ירושלמי (CHIEF) · צילום באייפון בלבד</p>', '<p class="who">Eran Yerushalmi (CHIEF) · shot only on iPhone</p>'),
 ('<a class="main" href="/he/jaffa-wall-art/">לתמונות של יפו להזמנה</a><a href="/he/jaffa-15-years/">לסדרה המלאה</a>', '<a class="main" href="/jaffa-wall-art/">Jaffa prints to order</a><a href="/jaffa-15-years/">The full series</a>'),
 ('<footer><span>© ערן ירושלמי (CHIEF)</span><a href="/he/">eranchief.com</a></footer>', '<footer><span>© Eran Yerushalmi (CHIEF)</span><a href="/">eranchief.com</a></footer>'),
 ('.play{position:fixed;left:16px;', '.play{position:fixed;right:16px;'),
 ('.card .c-t{font-family:var(--display);font-size:17px}', '.card .c-t{font-family:var(--display);font-size:16px;line-height:1.25}'),
 ("track.style.transform=`translate3d(${ease(p)*dist}px,0,0)`;", "track.style.transform=`translate3d(${-ease(p)*dist}px,0,0)`;"),
 ("function ui(){ic.textContent=playing?'⏸':'▶';lb.textContent=playing?'עצירה':(ended?'מההתחלה':'המשך');btn.setAttribute('aria-label',playing?'עצירת המצגת':'המשך המצגת');}",
  "function ui(){ic.textContent=playing?'⏸':'▶';lb.textContent=playing?'Pause':(ended?'Replay':'Play');btn.setAttribute('aria-label',playing?'Pause the journey':'Play the journey');}"),
]
for a, b in rep:
    if s.count(a) != 1:
        sys.exit('not found once: ' + a[:80])
    s = s.replace(a, b)

# first caption shown before the script runs
s = re.sub(r'<span class="t" dir="auto">[^<]*</span>\s*<span class="d">[^<]*</span>',
           '<span class="t" dir="auto">' + E(first['t']) + '</span>\n      <span class="d">' + en_date(first['cap']) + '</span>', s, count=1)

left = sorted(set(re.findall(r'[֐-׿][֐-׿\s־־.,]*', s)))
if left:
    sys.exit('Hebrew left: ' + ' | '.join(left[:20]))
open(ROOT + '/jaffa-15-years/journey-en.html', 'w', encoding='utf-8').write(s)
print('ok', len(s), 'bytes')
