// Grow (Meshulam) online payment for orders whose total is final: Israel delivery, Premium / Super Premium only
// (shipping included). Everything else keeps the WhatsApp quote flow.
// Secrets (Cloudflare → Worker → Settings → Variables, type Secret): GROW_USER_ID, GROW_PAGE_CODE.
// Optional plain variable GROW_API_BASE (defaults to the sandbox). Payments are OFF until both secrets exist.
import { catalog } from './grow-catalog.js';
import { owner } from './collector-stories-worker.js';

const SANDBOX = 'https://sandbox.meshulam.co.il/api/light/server/1.0';
const SITE = 'https://eranchief.com';
const COUPONS = { CHIEF10: 10, CHIEF20: 20, CHIEF30: 30 };
const json = (value, status = 200) => Response.json(value, { status, headers: { 'cache-control': 'no-store' } });
const enabled = env => Boolean(env.GROW_USER_ID && env.GROW_PAGE_CODE && env.DB);
const base = env => (env.GROW_API_BASE || SANDBOX).replace(/\/$/, '');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// Grow asks for no special characters in parameters.
const plain = (s, max = 120) => String(s ?? '').replace(/[^\p{L}\p{N} .,@+\-]/gu, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
// Accepts common spellings and small typos ("Isarel", "Isreal", "מדינת ישראל").
// Buyer audit 31.10.2026: US orders need a state and a ZIP code.
function unitedStates(country){const c=String(country||'').trim().toLowerCase().replace(/[.\s]+/g,' ').replace(/^the /,'').trim();return ['us','usa','u s','u s a','united states','united states of america','america','ארצות הברית','ארה״ב','ארה"ב','ארהב'].includes(c)}
function israel(country){const c=String(country||'').trim().toLowerCase().replace(/[.\s]+/g,' ').replace(/^(the )?(state of )?/,'');if(['il','isr'].includes(c)||c.includes('ישראל'))return true;const w=c.replace(/ /g,'');if(w.length<4||w.length>9)return false;const t='israel',d=[...Array(t.length+1).keys()];for(let i=1;i<=w.length;i++){let p=d[0];d[0]=i;for(let j=1;j<=t.length;j++){const q=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(w[i-1]===t[j-1]?0:1));p=q}}return d[t.length]<=2}

const FUNNEL_STEPS = ['landing', 'product', 'add', 'checkout', 'pay'];
// Artwork pages (every work, not only the Paper Edition): page visit and buy-button click per work, then bag, checkout, pay.
const ART_STEPS = ['art_landing', 'art_cta', 'art_u1000', 'art_add', 'art_checkout', 'art_pay'];
const ART_WORK_STEPS = ['art_landing', 'art_cta', 'art_u1000'];
const israelDay = (d = new Date()) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jerusalem' }).format(d);
async function ensureFunnel(env) {
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS funnel_daily (day text NOT NULL, event text NOT NULL, src text NOT NULL, lang text NOT NULL, count integer NOT NULL DEFAULT 0, PRIMARY KEY (day, event, src, lang))').run();
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS funnel_work_daily (day text NOT NULL, work text NOT NULL, event text NOT NULL, src text NOT NULL, count integer NOT NULL DEFAULT 0, PRIMARY KEY (day, work, event, src))').run();
}
const workTitle = slug => { const id = Number((slug.match(/-(\d+)$/) || [])[1]); return catalog[id]?.title || slug.replace(/-\d+$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); };
async function artTable(env, since) {
  const rows = (await env.DB.prepare(`SELECT day, event, src, SUM(count) AS n FROM funnel_daily WHERE day >= ? AND event LIKE 'art\\_%' ESCAPE '\\' GROUP BY day, event, src`).bind(since).all()).results;
  const days = [...new Set(rows.map(r => r.day))].sort().reverse();
  const get = (day, ev, src) => rows.filter(r => (!day || r.day === day) && r.event === ev && (!src || r.src === src)).reduce((a, r) => a + r.n, 0);
  const cells = day => `<td>${get(day, 'art_landing')}<br><small>FB/IG: ${get(day, 'art_landing', 'meta')}</small></td>` + ART_STEPS.slice(1).map(ev => `<td>${get(day, ev)}</td>`).join('');
  const body = days.map(d => `<tr><td>${esc(d.slice(8, 10) + '.' + d.slice(5, 7))}</td>${cells(d)}</tr>`).join('');
  const works = (await env.DB.prepare('SELECT work, event, src, SUM(count) AS n FROM funnel_work_daily WHERE day >= ? GROUP BY work, event, src').bind(since).all()).results;
  const byWork = {};
  for (const r of works) { const w = byWork[r.work] ||= { visits: 0, meta: 0, cta: 0, u1000: 0 }; if (r.event === 'art_landing') { w.visits += r.n; if (r.src === 'meta') w.meta += r.n; } else if (r.event === 'art_cta') w.cta += r.n; else if (r.event === 'art_u1000') w.u1000 += r.n; }
  const top = Object.entries(byWork).sort((a, b) => b[1].meta - a[1].meta || b[1].visits - a[1].visits).slice(0, 20);
  const workRows = top.map(([slug, w]) => `<tr><td>${esc(workTitle(slug))}</td><td>${w.visits}<br><small>FB/IG: ${w.meta}</small></td><td>${w.cta}</td><td>${w.u1000}</td></tr>`).join('');
  return `<h2>דפי העבודות: איפה אנשים נעצרים</h2><p><small>כל העבודות באתר, חוץ ממהדורת הנייר. "קנייה": לחצו על הכפתור לבחירת גודל באתר. "פחות מאלף": לחצו על הכפתור לגלריה. "סל", "קופה", "תשלום": הוסיפו לסל, פתחו קופה, לחצו לתשלום. הספירה התחילה ב־24.10.2026.</small></p><div class="funnel"><table><tr><th>יום</th><th>נכנסו</th><th>קנייה</th><th>פחות מאלף</th><th>סל</th><th>קופה</th><th>תשלום</th></tr>${body || '<tr><td colspan="7">עדיין אין נתונים</td></tr>'}${days.length ? `<tr><th>סה״כ</th>${cells('')}</tr>` : ''}</table></div><h2>לפי עבודה</h2><p><small>14 הימים האחרונים, מסודר לפי כניסות מפייסבוק ואינסטגרם.</small></p><div class="funnel"><table><tr><th>עבודה</th><th>נכנסו</th><th>קנייה</th><th>פחות מאלף</th></tr>${workRows || '<tr><td colspan="4">עדיין אין נתונים</td></tr>'}</table></div>`;
}
async function funnelTable(env) {
  await ensureFunnel(env);
  const since = israelDay(new Date(Date.now() - 13 * 86400000));
  const rows = (await env.DB.prepare(`SELECT day, event, src, SUM(count) AS n FROM funnel_daily WHERE day >= ? AND event NOT LIKE 'art\\_%' ESCAPE '\\' GROUP BY day, event, src`).bind(since).all()).results;
  const days = [...new Set(rows.map(r => r.day))].sort().reverse();
  const get = (day, ev, src) => rows.filter(r => (!day || r.day === day) && r.event === ev && (!src || r.src === src)).reduce((a, r) => a + r.n, 0);
  const cells = day => `<td>${get(day, 'landing')}<br><small>FB/IG: ${get(day, 'landing', 'meta')}</small></td>` + FUNNEL_STEPS.slice(1).map(ev => `<td>${get(day, ev)}</td>`).join('');
  const body = days.map(d => `<tr><td>${esc(d.slice(8, 10) + '.' + d.slice(5, 7))}</td>${cells(d)}</tr>`).join('');
  const art = await artTable(env, since).catch(() => '');
  return `<style>.funnel{overflow-x:auto}.funnel table{font-size:13px}.funnel td,.funnel th{padding:6px 4px}.funnel small{white-space:nowrap}</style>${art}<h2>מהדורת הנייר: איפה אנשים נעצרים</h2><p><small>14 הימים האחרונים. כל מבקר נספר פעם אחת בכל שלב, בלי פרטים אישיים. הספירה התחילה ב־23.10.2026.</small></p><div class="funnel"><table><tr><th>יום</th><th>נכנסו</th><th>פתחו צילום</th><th>הוסיפו לסל</th><th>פתחו קופה</th><th>לחצו לתשלום</th></tr>${body || '<tr><td colspan="6">עדיין אין נתונים</td></tr>'}${days.length ? `<tr><th>סה״כ</th>${cells('')}</tr>` : ''}</table></div>`;
}

async function ensureOrders(env) {
  await env.DB.prepare(`CREATE TABLE IF NOT EXISTS grow_orders (id text PRIMARY KEY NOT NULL, items text NOT NULL, subtotal integer NOT NULL,
    discount integer NOT NULL, total integer NOT NULL, coupon text, full_name text NOT NULL, phone text NOT NULL, email text NOT NULL,
    city text NOT NULL, address text NOT NULL, postal_code text, status text NOT NULL, process_id text, process_token text,
    transaction_id text, asmachta text, paid_at text, created_at text NOT NULL, raw text)`).run();
}

async function grow(env, method, fields) {
  const form = new FormData();
  for (const [k, v] of Object.entries(fields)) if (v !== undefined && v !== null && v !== '') form.append(k, String(v));
  const response = await fetch(`${base(env)}/${method}`, { method: 'POST', body: form });
  const text = await response.text();
  try { return JSON.parse(text); } catch { return { status: 0, err: { message: 'Unexpected Grow response', raw: text.slice(0, 200) } }; }
}

// Recompute every price on the server — the browser total is never trusted.
// International air express (HS Shipping quote, Oct 2026), per artwork by longest side.
const intlFee = size => { const n = String(size).match(/\d+/g)?.map(Number) || [0]; const l = Math.max(...n); return l <= 80 ? 1500 : l <= 110 ? 2100 : 4900; };
function priceOrder(items, couponCode, abroad = false) {
  if (!Array.isArray(items) || !items.length || items.length > 10) throw new Error('Your bag is empty or too large.');
  const lines = items.map(item => {
    const work = catalog[Number(item.id)];
    if (!work) throw new Error('One of the artworks is not available for online payment.');
    const si = work.sizes.indexOf(String(item.size || '').replace(/\s*[×x]\s*/gi, ' × ').trim());
    if (si < 0) throw new Error('Unknown size for ' + work.title + '.');
    const finish = ['alucobond', 'perspect', 'canvas', 'paper'].includes(item.finish) ? item.finish : null;
    if (!finish || !Array.isArray(work[finish])) throw new Error('Unknown finish for ' + work.title + '.');
    if (work.closesAt && Date.now() > Date.parse(work.closesAt)) throw new Error(work.title + ' is no longer available.');
    if (work.total && work.sold >= work.total) throw new Error(work.title + ' is sold out.');
    return { id: work.id, title: work.title, size: work.sizes[si], finish, price: Math.round(work[finish][si]) };
  });
  const subtotal = lines.reduce((a, x) => a + x.price, 0);
  const eligible = lines.filter(x => x.finish !== 'paper').reduce((a, x) => a + x.price, 0);
  const code = String(couponCode || '').trim().toUpperCase();
  const percent = COUPONS[code] || 0;
  const discount = percent ? Math.round(eligible * percent / 100 / 10) * 10 : 0;
  // Shipping in Israel: Alucobond / Perspex free; Canvas 69, Paper 39 — once per order (the highest). Mirrors app.js SHIP_FEE.
  if (abroad && lines.some(x => x.finish === 'paper')) throw new Error('Paper Edition ships within Israel only.');
  const shipping = abroad ? lines.reduce((a, x) => a + intlFee(x.size), 0) : lines.reduce((m, x) => Math.max(m, ({ canvas: 69, paper: 39 })[x.finish] || 0), 0);
  return { lines, subtotal, discount, shipping, total: subtotal - discount + shipping, coupon: percent ? code : null };
}

const page = (title, body) => new Response(`<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)} | CHIEF</title><style>body{font-family:system-ui,Arial;background:#f4f1ea;color:#1d1c1a;margin:0;padding:40px 18px}main{max-width:640px;margin:auto;background:#fff;padding:28px;border:1px solid #e3ddd0}h1{font-weight:500}a{color:#1d1c1a}table{width:100%;border-collapse:collapse;font-size:14px}td,th{border-bottom:1px solid #eee;padding:8px;text-align:right;vertical-align:top}</style></head><body><main>${body}</main></body></html>`, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });

export async function handleGrow(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  if (!path.startsWith('/api/grow') && !path.startsWith('/order/') && !path.startsWith('/orders/manage') && path !== '/api/funnel') return null;

  // Private funnel counter: anonymous daily counts per step (no IP, no cookies, no personal data), shown only on /orders/manage.
  if (path === '/api/funnel') {
    if (request.method === 'POST' && env.DB) {
      try {
        const b = await request.json();
        const ua = request.headers.get('user-agent') || '';
        if ((FUNNEL_STEPS.includes(b.e) || ART_STEPS.includes(b.e)) && !/bot|crawl|spider|preview|headless|lighthouse/i.test(ua)) {
          const src = ['meta', 'other', 'direct'].includes(b.s) ? b.s : 'direct';
          const lang = b.l === 'en' ? 'en' : 'he';
          await ensureFunnel(env);
          await env.DB.prepare('INSERT INTO funnel_daily (day, event, src, lang, count) VALUES (?, ?, ?, ?, 1) ON CONFLICT(day, event, src, lang) DO UPDATE SET count = count + 1').bind(israelDay(), b.e, src, lang).run();
          const work = typeof b.w === 'string' && /^[a-z0-9-]{1,80}$/.test(b.w) ? b.w : null;
          if (work && ART_WORK_STEPS.includes(b.e)) await env.DB.prepare('INSERT INTO funnel_work_daily (day, work, event, src, count) VALUES (?, ?, ?, ?, 1) ON CONFLICT(day, work, event, src) DO UPDATE SET count = count + 1').bind(israelDay(), work, b.e, src).run();
        }
      } catch {}
    }
    return new Response(null, { status: 204, headers: { 'cache-control': 'no-store' } });
  }

  // While on Grow's sandbox, online payment is offered only on test visits (?growtest=1) so real customers never meet a test wallet.
  const sandbox = base(env).includes('sandbox');
  const testVisit = url.searchParams.get('test') === '1';
  if (path === '/api/grow/status') return json({ enabled: enabled(env) && (!sandbox || testVisit), sandbox });

  if (path === '/api/grow/checkout' && request.method === 'POST') {
    if (!enabled(env) || (sandbox && !testVisit)) return json({ fallback: 'whatsapp' }, 503);
    let body; try { body = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }
    const c = body.customer || {};
    const fullName = plain(c.fullName, 80), phone = String(c.phone || '').replace(/[^\d]/g, ''), email = String(c.email || '').trim().toLowerCase();
    const city = plain(c.city, 60), address = plain(c.address, 120), postal = plain(c.postalCode, 12);
    if (fullName.split(' ').filter(Boolean).length < 2) return json({ error: 'Please enter first and last name.' }, 400);
    const abroad = !israel(c.country);
    if (abroad ? !/^\d{7,15}$/.test(phone) : !/^0?5\d{8}$|^9725\d{8}$/.test(phone)) return json({ error: 'Please enter a valid phone number.' }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Please enter a valid email address.' }, 400);
    if (!plain(c.country, 60) || !city || !address) return json({ error: 'Please fill in country, city and street address.' }, 400);
    const region = plain(c.region, 40);
    if (unitedStates(c.country) && (!region || !/^\d{5}(-\d{4})?$/.test(postal))) return json({ error: 'Please enter the state and a 5-digit ZIP code.' }, 400);
    // The order table has no country column, so for orders abroad the state and country are kept with the street address.
    const storedAddress = abroad ? plain([address, region, plain(c.country, 60)].filter(Boolean).join(', '), 220) : address;
    if (body.terms !== true) return json({ error: 'Please accept the terms of sale.' }, 400);
    let order; try { order = priceOrder(body.items, body.coupon, abroad); } catch (e) { return json({ error: e.message }, 400); }
    await ensureOrders(env);
    const id = crypto.randomUUID();
    // Plain ASCII-style description (no Hebrew, no '+'): Paper Edition orders with a shipping line in Hebrew made the wallet fail with error (4).
    const description = plain('CHIEF ' + order.lines.map(x => `${x.title} ${x.size}`).join(', ') + (order.shipping ? `, shipping ${order.shipping} ILS` : '') + (abroad ? `, ${plain(c.country, 30)}, tel ${phone}` : ''), 150).replace(/[^\x20-\x7E]/g, '').replace(/\s+/g, ' ').trim();
    // Grow accepts only Israeli mobile numbers (05XXXXXXXX). Israeli numbers are normalised; for buyers abroad
    // the business number is sent to Grow, while the buyer's real number is kept in the order record and description.
    const growPhone = abroad ? '0507123109' : '0' + phone.replace(/^972/, '').replace(/^0/, '');
    const result = await grow(env, 'createPaymentProcess', {
      pageCode: env.GROW_PAGE_CODE, userId: env.GROW_USER_ID, chargeType: 1, sum: order.total.toFixed(2),
      successUrl: `${SITE}/order/thanks/?o=${id}`, cancelUrl: `${SITE}/?bag=1`, notifyUrl: `${SITE}/api/grow/webhook`,
      description, 'pageField[fullName]': fullName, 'pageField[phone]': growPhone, 'pageField[email]': email, cField1: id,
    });
    if (String(result.status) !== '1' || !(result.data?.url || result.data?.authCode)) {
      console.error('Grow createPaymentProcess failed', JSON.stringify(result.err || result).slice(0, 300));
      const growError = plain(result.err?.message || result.err?.raw || result.message || JSON.stringify(result.err || result), 160);
      return json({ error: 'The secure payment page is unavailable right now. Please try again in a few minutes.', fallback: 'whatsapp', growError }, 502);
    }
    await env.DB.prepare(`INSERT INTO grow_orders (id, items, subtotal, discount, total, coupon, full_name, phone, email, city, address, postal_code, status, process_id, process_token, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?)`).bind(id, JSON.stringify(order.lines), order.subtotal, order.discount, order.total, order.coupon,
      fullName, phone, email, city, storedAddress, postal, String(result.data.processId), String(result.data.processToken), new Date().toISOString()).run();
    // A wallet pageCode returns authCode (opened in the page by Grow's SDK); a regular payment page returns url.
    return json(result.data.url ? { url: result.data.url } : { authCode: result.data.authCode, orderId: id, sdkEnv: base(env).includes('sandbox') ? 'DEV' : 'PRODUCTION' });
  }

  // Server-to-server update from Grow (form POST). Verify against our stored process, then acknowledge with approveTransaction.
  if (path === '/api/grow/webhook' && request.method === 'POST') {
    if (!enabled(env)) return new Response('ok');
    let fields = {};
    const type = request.headers.get('content-type') || '';
    try {
      if (type.includes('json')) { const j = await request.json(); fields = { ...(j.data || j), status: j.status ?? j.data?.status }; }
      else { const f = await request.formData(); for (const [k, v] of f) fields[k.replace(/^data\[(.+)\]$/, '$1').replace(/^customFields\[(.+)\]$/, '$1')] = String(v); }
    } catch { return new Response('bad request', { status: 400 }); }
    await ensureOrders(env);
    const processId = String(fields.processId || ''), processToken = String(fields.processToken || '');
    const row = processId ? await env.DB.prepare('SELECT * FROM grow_orders WHERE process_id = ?').bind(processId).first() : null;
    if (!row || row.process_token !== processToken) { console.error('Grow webhook: unknown process', processId); return new Response('ok'); }
    const paid = String(fields.statusCode) === '2' && Number(fields.sum) === Number(row.total);
    if (row.status !== 'paid') {
      await env.DB.prepare('UPDATE grow_orders SET status = ?, transaction_id = ?, asmachta = ?, paid_at = ?, raw = ? WHERE id = ?')
        .bind(paid ? 'paid' : 'check', String(fields.transactionId || ''), String(fields.asmachta || ''), new Date().toISOString(), JSON.stringify(fields).slice(0, 4000), row.id).run();
    }
    if (paid) {
      const approve = { pageCode: env.GROW_PAGE_CODE };
      for (const k of ['transactionId', 'transactionToken', 'transactionTypeId', 'paymentType', 'sum', 'firstPaymentSum', 'periodicalPaymentSum', 'paymentsNum', 'allPaymentsNum', 'paymentDate', 'asmachta', 'description', 'fullName', 'payerPhone', 'payerEmail', 'cardSuffix', 'cardType', 'cardTypeCode', 'cardBrand', 'cardBrandCode', 'cardExp', 'processId', 'processToken']) approve[k] = fields[k];
      const ack = await grow(env, 'approveTransaction', approve);
      if (String(ack.status) !== '1') console.error('Grow approveTransaction failed', JSON.stringify(ack).slice(0, 300));
    }
    return new Response('ok');
  }

  if (path === '/order/thanks/') {
    const id = url.searchParams.get('o') || '';
    const row = env.DB && /^[0-9a-f-]{36}$/.test(id) ? await env.DB.prepare('SELECT status, asmachta, total, items, created_at FROM grow_orders WHERE id = ?').bind(id).first().catch(() => null) : null;
    const done = row?.status === 'paid';
    const items = row ? JSON.parse(row.items) : [];
    const details = row ? `<h2>אישור הזמנה</h2><table>${items.map(x => `<tr><td>${esc(x.title)}</td><td>${esc(x.size)} · ${({ perspect: 'פרספקס', canvas: 'קנבס', paper: 'נייר אמנותי', alucobond: 'אלוקובונד' })[x.finish] || ''}</td><td>₪${x.price.toLocaleString('en')}</td></tr>`).join('')}<tr><th colspan="2">סה״כ ששולם (משלוח בישראל כלול; עוסק פטור, ללא מע״מ)</th><th>₪${row.total.toLocaleString('en')}</th></tr></table>
      <p>תאריך הזמנה: ${esc(row.created_at.slice(0, 10))}<br>אספקה: תוך עד ${items.length && items.every(x => x.finish === 'paper') ? 10 : 14} ימי עסקים מאישור התשלום, באמצעות שליח.<br>ביטול: ללא עלות ובהחזר מלא תוך 48 שעות מאישור התשלום, אם ההדפסה טרם החלה; זכויות ביטול לפי דין מפורטות ב<a href="/terms/">תקנון</a>.</p>
      <p>ERANYCHIEF (ערן ירושלמי) · עוסק פטור 025334459 · רחוב וילסון 5, תל אביב 6522012 · <a href="mailto:eranychief@gmail.com">eranychief@gmail.com</a> · 050-712-3109</p><p>מומלץ לשמור עמוד זה. קבלה על התשלום נשלחת בדוא״ל מחברת Grow.</p>` : '';
    // Meta Pixel purchase (the pixel itself is injected by the main Worker): once per order per browser session; eventID lets Meta de-duplicate.
    const purchase = row && row.status !== 'check' ? `<script>try{var k='chiefPurchase_${id}';if(window.fbq&&!sessionStorage.getItem(k)){fbq('track','Purchase',{value:${Number(row.total) || 0},currency:'ILS',num_items:${items.length}},{eventID:'${id}'});sessionStorage.setItem(k,'1')}}catch(e){}</script>` : '';
    return page('תודה על ההזמנה', `<h1>תודה על ההזמנה 🙏</h1><p>${done ? `התשלום התקבל${row.asmachta ? ` · אסמכתא ${esc(row.asmachta)}` : ''}.` : 'התשלום בעיבוד. אישור יישלח אליך במייל.'}</p><p>CHIEF ייצור איתך קשר בקרוב לתיאום ההדפסה והמשלוח. היצירה מגיעה עם תעודת מקוריות חתומה.</p>${details}<p><a href="/he/">חזרה לאתר</a> · <a href="https://wa.me/972507123109">WhatsApp</a></p>${purchase}`);
  }

  if (path.startsWith('/orders/manage')) {
    if (!(await owner(request, env))) return Response.redirect(`${SITE}/collector-stories/manage/`, 303);
    await ensureOrders(env);
    const rows = (await env.DB.prepare('SELECT * FROM grow_orders ORDER BY created_at DESC LIMIT 100').all()).results;
    const label = { paid: 'שולם ✅', pending: 'ממתין לתשלום', check: 'לבדיקה ⚠️' };
    const funnel = await funnelTable(env).catch(() => '');
    return page('הזמנות', `${funnel}<h1>הזמנות אונליין</h1><p>${enabled(env) ? `תשלומים פעילים (${base(env).includes('sandbox') ? 'סביבת בדיקות' : 'אמיתי'})` : 'תשלומים כבויים — חסרים מפתחות Grow'}</p><table><tr><th>תאריך</th><th>סטטוס</th><th>לקוח</th><th>יצירות</th><th>סכום</th></tr>${rows.map(r => `<tr><td>${esc(r.created_at.slice(0, 16).replace('T', ' '))}</td><td>${label[r.status] || esc(r.status)}${r.asmachta ? `<br>אסמכתא ${esc(r.asmachta)}` : ''}</td><td>${esc(r.full_name)}<br>${esc(r.phone)}<br>${esc(r.email)}<br>${esc(r.address)}, ${esc(r.city)}</td><td>${JSON.parse(r.items).map(x => `${esc(x.title)} · ${esc(x.size)} · ${({ perspect: 'פרספקס', canvas: 'קנבס', paper: 'נייר אמנותי', alucobond: 'אלוקובונד' })[x.finish] || ''}`).join('<br>')}</td><td>₪${r.total.toLocaleString('en')}${r.coupon ? `<br>${esc(r.coupon)}` : ''}</td></tr>`).join('') || '<tr><td colspan="5">אין עדיין הזמנות</td></tr>'}</table>`);
  }
  return null;
}
