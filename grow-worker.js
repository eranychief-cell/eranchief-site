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
function israel(country){const c=String(country||'').trim().toLowerCase().replace(/[.\s]+/g,' ').replace(/^(the )?(state of )?/,'');if(['il','isr'].includes(c)||c.includes('ישראל'))return true;const w=c.replace(/ /g,'');if(w.length<4||w.length>9)return false;const t='israel',d=[...Array(t.length+1).keys()];for(let i=1;i<=w.length;i++){let p=d[0];d[0]=i;for(let j=1;j<=t.length;j++){const q=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(w[i-1]===t[j-1]?0:1));p=q}}return d[t.length]<=2}

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
function priceOrder(items, couponCode) {
  if (!Array.isArray(items) || !items.length || items.length > 10) throw new Error('Your bag is empty or too large.');
  const lines = items.map(item => {
    const work = catalog[Number(item.id)];
    if (!work) throw new Error('One of the artworks is not available for online payment.');
    const si = work.sizes.indexOf(String(item.size || '').replace(/\s*[×x]\s*/gi, ' × ').trim());
    if (si < 0) throw new Error('Unknown size for ' + work.title + '.');
    const finish = item.finish === 'perspect' ? 'perspect' : item.finish === 'alucobond' ? 'alucobond' : null;
    if (!finish) throw new Error('Unknown finish for ' + work.title + '.');
    if (work.total && work.sold >= work.total) throw new Error(work.title + ' is sold out.');
    return { id: work.id, title: work.title, size: work.sizes[si], finish, price: work[finish][si] };
  });
  const subtotal = lines.reduce((a, x) => a + x.price, 0);
  const code = String(couponCode || '').trim().toUpperCase();
  const percent = COUPONS[code] || 0;
  const discount = percent ? Math.round(subtotal * percent / 100 / 10) * 10 : 0;
  return { lines, subtotal, discount, total: subtotal - discount, coupon: percent ? code : null };
}

const page = (title, body) => new Response(`<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)} | CHIEF</title><style>body{font-family:system-ui,Arial;background:#f4f1ea;color:#1d1c1a;margin:0;padding:40px 18px}main{max-width:640px;margin:auto;background:#fff;padding:28px;border:1px solid #e3ddd0}h1{font-weight:500}a{color:#1d1c1a}table{width:100%;border-collapse:collapse;font-size:14px}td,th{border-bottom:1px solid #eee;padding:8px;text-align:right;vertical-align:top}</style></head><body><main>${body}</main></body></html>`, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });

export async function handleGrow(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  if (!path.startsWith('/api/grow') && !path.startsWith('/order/') && !path.startsWith('/orders/manage')) return null;

  if (path === '/api/grow/status') return json({ enabled: enabled(env) });

  if (path === '/api/grow/checkout' && request.method === 'POST') {
    if (!enabled(env)) return json({ fallback: 'whatsapp' }, 503);
    let body; try { body = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }
    const c = body.customer || {};
    const fullName = plain(c.fullName, 80), phone = String(c.phone || '').replace(/[^\d]/g, ''), email = String(c.email || '').trim().toLowerCase();
    const city = plain(c.city, 60), address = plain(c.address, 120), postal = plain(c.postalCode, 12);
    if (fullName.split(' ').filter(Boolean).length < 2) return json({ error: 'Please enter first and last name.' }, 400);
    if (!/^05\d{8}$/.test(phone)) return json({ error: 'Please enter an Israeli mobile number (05XXXXXXXX).' }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Please enter a valid email address.' }, 400);
    if (!israel(c.country) || !city || !address) return json({ error: 'Online payment is available for delivery in Israel. Please fill in city and street address.' }, 400);
    if (body.terms !== true) return json({ error: 'Please accept the terms of sale.' }, 400);
    let order; try { order = priceOrder(body.items, body.coupon); } catch (e) { return json({ error: e.message }, 400); }
    await ensureOrders(env);
    const id = crypto.randomUUID();
    const description = plain('CHIEF ' + order.lines.map(x => `${x.title} ${x.size}`).join(' + '), 150);
    const result = await grow(env, 'createPaymentProcess', {
      pageCode: env.GROW_PAGE_CODE, userId: env.GROW_USER_ID, chargeType: 1, sum: order.total.toFixed(2),
      successUrl: `${SITE}/order/thanks/?o=${id}`, cancelUrl: `${SITE}/?bag=1`, notifyUrl: `${SITE}/api/grow/webhook`,
      description, 'pageField[fullName]': fullName, 'pageField[phone]': phone, 'pageField[email]': email, cField1: id,
    });
    if (String(result.status) !== '1' || !result.data?.url) {
      console.error('Grow createPaymentProcess failed', JSON.stringify(result.err || result).slice(0, 300));
      return json({ error: 'The secure payment page is unavailable right now. Please use WhatsApp and CHIEF will send a payment link.', fallback: 'whatsapp' }, 502);
    }
    await env.DB.prepare(`INSERT INTO grow_orders (id, items, subtotal, discount, total, coupon, full_name, phone, email, city, address, postal_code, status, process_id, process_token, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?)`).bind(id, JSON.stringify(order.lines), order.subtotal, order.discount, order.total, order.coupon,
      fullName, phone, email, city, address, postal, String(result.data.processId), String(result.data.processToken), new Date().toISOString()).run();
    return json({ url: result.data.url });
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
    const details = row ? `<h2>אישור הזמנה</h2><table>${items.map(x => `<tr><td>${esc(x.title)}</td><td>${esc(x.size)} · ${x.finish === 'perspect' ? 'פרספקס' : 'אלוקובונד'}</td><td>₪${x.price.toLocaleString('en')}</td></tr>`).join('')}<tr><th colspan="2">סה״כ ששולם (משלוח בישראל כלול; עוסק פטור, ללא מע״מ)</th><th>₪${row.total.toLocaleString('en')}</th></tr></table>
      <p>תאריך הזמנה: ${esc(row.created_at.slice(0, 10))}<br>אספקה: תוך עד 14 ימי עסקים מאישור התשלום, באמצעות שליח.<br>ביטול: ללא עלות ובהחזר מלא תוך 48 שעות מאישור התשלום, אם ההדפסה טרם החלה; זכויות ביטול לפי דין מפורטות ב<a href="/terms/">תקנון</a>.</p>
      <p>ERANYCHIEF (ערן ירושלמי) · עוסק פטור 025334459 · רחוב וילסון 5, תל אביב 6522012 · <a href="mailto:eranychief@gmail.com">eranychief@gmail.com</a> · 050-712-3109</p><p>מומלץ לשמור עמוד זה. קבלה על התשלום נשלחת בדוא״ל מ־Grow.</p>` : '';
    return page('תודה על ההזמנה', `<h1>תודה על ההזמנה 🙏</h1><p>${done ? `התשלום התקבל${row.asmachta ? ` · אסמכתא ${esc(row.asmachta)}` : ''}.` : 'התשלום בעיבוד. אישור יישלח אליך במייל.'}</p><p>CHIEF ייצור איתך קשר בקרוב לתיאום ההדפסה והמשלוח. היצירה מגיעה עם תעודת מקוריות חתומה.</p>${details}<p><a href="/he/">חזרה לאתר</a> · <a href="https://wa.me/972507123109">WhatsApp</a></p>`);
  }

  if (path.startsWith('/orders/manage')) {
    if (!(await owner(request, env))) return Response.redirect(`${SITE}/collector-stories/manage/`, 303);
    await ensureOrders(env);
    const rows = (await env.DB.prepare('SELECT * FROM grow_orders ORDER BY created_at DESC LIMIT 100').all()).results;
    const label = { paid: 'שולם ✅', pending: 'ממתין לתשלום', check: 'לבדיקה ⚠️' };
    return page('הזמנות', `<h1>הזמנות אונליין</h1><p>${enabled(env) ? `תשלומים פעילים (${base(env).includes('sandbox') ? 'סביבת בדיקות' : 'אמיתי'})` : 'תשלומים כבויים — חסרים מפתחות Grow'}</p><table><tr><th>תאריך</th><th>סטטוס</th><th>לקוח</th><th>יצירות</th><th>סכום</th></tr>${rows.map(r => `<tr><td>${esc(r.created_at.slice(0, 16).replace('T', ' '))}</td><td>${label[r.status] || esc(r.status)}${r.asmachta ? `<br>אסמכתא ${esc(r.asmachta)}` : ''}</td><td>${esc(r.full_name)}<br>${esc(r.phone)}<br>${esc(r.email)}<br>${esc(r.address)}, ${esc(r.city)}</td><td>${JSON.parse(r.items).map(x => `${esc(x.title)} · ${esc(x.size)} · ${x.finish === 'perspect' ? 'פרספקס' : 'אלוקובונד'}`).join('<br>')}</td><td>₪${r.total.toLocaleString('en')}${r.coupon ? `<br>${esc(r.coupon)}` : ''}</td></tr>`).join('') || '<tr><td colspan="5">אין עדיין הזמנות</td></tr>'}</table>`);
  }
  return null;
}
