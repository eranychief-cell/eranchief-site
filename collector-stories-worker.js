// SECURITY: the previous check trusted `oai-authenticated-user-*` request headers. Those were injected by
// ChatGPT Sites' proxy; on any other host (e.g. Cloudflare) any visitor can send them and gain owner access.
// Owner access now requires a secret configured on the host (ADMIN_TOKEN), sent as `Authorization: Bearer …`.
// Without that secret configured, moderation is simply disabled.
const sameText = (a, b) => { if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false; let diff = 0; for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i); return diff === 0; };
const adminToken = env => (typeof env.ADMIN_TOKEN === 'string' && env.ADMIN_TOKEN.length >= 32) ? env.ADMIN_TOKEN : null;
// Session cookie value: HMAC of a fixed label with the admin password, so the password itself is never stored in the browser.
const sessionValue = async token => {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(token), {name:'HMAC', hash:'SHA-256'}, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode('chief-admin-session-v1'));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');
};
const cookie = (request, name) => (request.headers.get('cookie') || '').split(/;\s*/).map(c => c.split('=')).find(([k]) => k === name)?.slice(1).join('=') || '';
// Owner = correct `Authorization: Bearer <ADMIN_TOKEN>` header, or a session cookie from the password login page.
const owner = async (request, env) => {
  const token = adminToken(env);
  if (!token) return false;
  if (sameText(request.headers.get('authorization') || '', 'Bearer ' + token)) return true;
  const sent = cookie(request, 'chief_admin');
  return !!sent && sameText(sent, await sessionValue(token));
};
const loginPage = (message = '', status = 200) => new Response(`<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>כניסת מנהל · CHIEF</title><style>body{font-family:Assistant,Arial,sans-serif;background:#f5f2ec;color:#22201c;display:grid;place-items:center;min-height:100vh;margin:0;padding:16px}form{background:#fff;padding:28px;max-width:360px;width:100%;border:1px solid #ddd6ca}h1{font-size:22px;margin:0 0 16px}input{width:100%;box-sizing:border-box;padding:12px;font-size:16px;border:1px solid #bbb;margin:6px 0 14px}button{width:100%;padding:13px;font-size:16px;background:#121212;color:#fff;border:0}p{color:#a33;margin:0 0 12px}</style></head><body><form method="post" action="/collector-stories/manage/login"><h1>ניהול סיפורי אספנים</h1>${message ? `<p>${message}</p>` : ''}<label for="password">סיסמת מנהל</label><input id="password" name="password" type="password" autocomplete="current-password" required><button type="submit">כניסה</button></form></body></html>`, {status, headers: {'content-type':'text/html; charset=utf-8','cache-control':'no-store','x-robots-tag':'noindex, nofollow'}});
const json = (value, status = 200) => Response.json(value, {status, headers: {'cache-control':'no-store'}});
const db = env => { if (!env.DB) throw new Error('Missing story database'); return env.DB; };
const maxBytes = 8 * 1024 * 1024;
const text = (data, key) => typeof data.get(key) === 'string' ? data.get(key).trim() : '';

// Create the D1 tables on first API use (idempotent), so a fresh database needs no manual migration.
// Mirrors drizzle/0000 and drizzle/0001.
let schemaReady = null;
export function ensureSchema(env) {
  if (!env.DB) return Promise.resolve();
  if (!schemaReady) schemaReady = env.DB.batch([
    "CREATE TABLE IF NOT EXISTS newsletter_subscribers (id integer PRIMARY KEY AUTOINCREMENT NOT NULL, email text NOT NULL, source text DEFAULT 'website' NOT NULL, created_at text NOT NULL)",
    "CREATE UNIQUE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers (email)",
    "CREATE TABLE IF NOT EXISTS collector_stories (id text PRIMARY KEY NOT NULL, first_name text NOT NULL, email text NOT NULL, city text DEFAULT '' NOT NULL, artwork text NOT NULL, message text NOT NULL, photo_key text, photo_type text, publish_consent integer DEFAULT 0 NOT NULL, status text DEFAULT 'pending' NOT NULL, ip_hash text NOT NULL, created_at text NOT NULL)",
    "CREATE INDEX IF NOT EXISTS idx_collector_stories_status_created ON collector_stories (status, created_at)",
    "CREATE INDEX IF NOT EXISTS idx_collector_stories_ip_created ON collector_stories (ip_hash, created_at)",
    // Photos are kept in D1 when no R2 bucket is bound (photos are resized in the browser to stay well under D1's 2 MB row limit).
    "CREATE TABLE IF NOT EXISTS collector_story_photos (id text PRIMARY KEY NOT NULL, data blob NOT NULL, type text NOT NULL)"
  ].map(sql => env.DB.prepare(sql))).catch(error => { schemaReady = null; throw error; });
  return schemaReady;
}

export async function handleCollectorStories(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  if (path.startsWith('/api/')) { try { await ensureSchema(env); } catch (error) { console.error('Schema setup failed:', error.message); } }
  if (!path.startsWith('/api/collector-stories') && !path.startsWith('/collector-stories/manage')) return null;
  const adminPath = path.startsWith('/collector-stories/manage') || path.startsWith('/api/collector-stories/admin');
  if (request.method === 'POST' && request.headers.get('origin') !== url.origin) return json({error:'Please submit through the website.'}, 403);
  if (path === '/collector-stories/manage/login' && request.method === 'POST') {
    const token = adminToken(env);
    if (!token) return loginPage('ניהול הסיפורים עוד לא הופעל באתר.', 503);
    const form = await request.formData().catch(() => null);
    const password = form && typeof form.get('password') === 'string' ? form.get('password') : '';
    if (!sameText(password, token)) return loginPage('הסיסמה שגויה. נסו שוב.', 401);
    return new Response(null, {status: 303, headers: {location: '/collector-stories/manage/', 'cache-control':'no-store', 'set-cookie': `chief_admin=${await sessionValue(token)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=2592000`}});
  }
  const isOwner = adminPath ? await owner(request, env) : false;
  if (adminPath && !isOwner) return path.startsWith('/collector-stories/manage') && request.method === 'GET' ? loginPage() : json({error:'Owner access required.'}, 403);
  try {
    if (path.startsWith('/collector-stories/manage')) {
      const response = await env.ASSETS.fetch(request);
      const headers = new Headers(response.headers); headers.set('cache-control','no-store'); headers.set('x-robots-tag','noindex, nofollow');
      return new Response(response.body,{status:response.status,headers});
    }
    if (path === '/api/collector-stories' && request.method === 'GET') {
      const artwork=url.searchParams.get('artwork');
      if(artwork && artwork.length>160)return json({error:'Invalid artwork.'},400);
      const rows = artwork
        ? await db(env).prepare("SELECT id, first_name, city, artwork, message, photo_key FROM collector_stories WHERE status = 'approved' AND publish_consent = 1 ORDER BY CASE WHEN lower(trim(artwork)) = lower(trim(?)) THEN 0 ELSE 1 END, created_at DESC LIMIT 2").bind(artwork).all()
        : await db(env).prepare("SELECT id, first_name, city, artwork, message, photo_key FROM collector_stories WHERE status = 'approved' AND publish_consent = 1 ORDER BY created_at DESC LIMIT 30").all();
      return json({stories:rows.results.map(({photo_key,...row}) => ({...row,photo:photo_key?'/api/collector-stories/'+row.id+'/photo':null}))});
    }
    if (path === '/api/collector-stories/admin' && request.method === 'GET') {
      const rows = await db(env).prepare('SELECT id, first_name, email, city, artwork, message, photo_key, publish_consent, status, created_at FROM collector_stories ORDER BY created_at DESC LIMIT 100').all();
      return json({stories:rows.results.map(({photo_key,...row}) => ({...row,photo:photo_key?'/api/collector-stories/'+row.id+'/photo':null}))});
    }
    const photoMatch = path.match(/^\/api\/collector-stories\/([a-f0-9-]{36})\/photo$/);
    if (photoMatch && request.method === 'GET') {
      const row = await db(env).prepare('SELECT photo_key, photo_type, status, publish_consent FROM collector_stories WHERE id = ?').bind(photoMatch[1]).first();
      if (!row?.photo_key || (!(await owner(request, env)) && (row.status !== 'approved' || row.publish_consent !== 1))) return json({error:'Photo not found.'},404);
      let body = null;
      if (row.photo_key.startsWith('d1:')) { const photo = await db(env).prepare('SELECT data FROM collector_story_photos WHERE id = ?').bind(row.photo_key.slice(3)).first(); if (photo?.data) body = new Uint8Array(photo.data); }
      else { const object = await env.BUCKET?.get(row.photo_key); if (object) body = object.body; }
      if (!body) return json({error:'Photo unavailable.'},404);
      return new Response(body,{headers:{'content-type':row.photo_type,'cache-control':'private, no-store','x-content-type-options':'nosniff','content-disposition':'inline'}});
    }
    if (path === '/api/collector-stories/admin' && request.method === 'POST') {
      const data = await request.json();
      if (!['approved','rejected','pending'].includes(data.status) || !/^[a-f0-9-]{36}$/.test(data.id)) return json({error:'Invalid moderation request.'},400);
      const existing = await db(env).prepare('SELECT publish_consent FROM collector_stories WHERE id = ?').bind(data.id).first();
      if (!existing) return json({error:'Story not found.'},404);
      if (data.status === 'approved' && existing.publish_consent !== 1) return json({error:'This customer did not consent to public display.'},400);
      await db(env).prepare('UPDATE collector_stories SET status = ? WHERE id = ?').bind(data.status,data.id).run();
      return json({ok:true});
    }
    if (path === '/api/collector-stories' && request.method === 'POST') {
      if (Number(request.headers.get('content-length')) > maxBytes + 65536) return json({error:'Please choose a smaller photo.'},413);
      const data = await request.formData();
      if (text(data,'website')) return json({ok:true});
      const firstName=text(data,'firstName'),email=text(data,'email').toLowerCase(),city=text(data,'city'),artwork=text(data,'artwork'),message=text(data,'message');
      if (!firstName || firstName.length>80 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length>254 || city.length>100 || !artwork || artwork.length>160 || message.length<5 || message.length>2000 || data.get('rights')!=='on') return json({error:'Please check your name, email, artwork and message, and confirm that you may share the photo.'},400);
      const ip=request.headers.get('cf-connecting-ip')||'unknown';
      const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(ip));
      const ipHash=Array.from(new Uint8Array(digest),x=>x.toString(16).padStart(2,'0')).join('');
      const recent=await db(env).prepare('SELECT COUNT(*) AS count FROM collector_stories WHERE ip_hash = ? AND created_at > ?').bind(ipHash,new Date(Date.now()-3600000).toISOString()).first();
      if (recent.count>=3) return json({error:'Several stories were sent recently. Please try again in an hour.'},429);
      const id=crypto.randomUUID();let photoKey=null,photoType=null;
      const file=data.get('photo');
      if (file && typeof file !== 'string' && file.size>0) {
        if (file.size>maxBytes) return json({error:'The photo must be smaller than 8 MB.'},413);
        if (!env.BUCKET && file.size>1500000) return json({error:'Please choose a smaller photo (up to 1.5 MB).'},413);
        const bytes=new Uint8Array(await file.arrayBuffer());
        const jpeg=bytes[0]===255&&bytes[1]===216&&bytes[2]===255;
        const png=bytes.slice(0,8).every((b,i)=>b===[137,80,78,71,13,10,26,10][i])&&bytes.length>8;
        const webp=new TextDecoder().decode(bytes.slice(0,4))==='RIFF'&&new TextDecoder().decode(bytes.slice(8,12))==='WEBP';
        if (!jpeg&&!png&&!webp) return json({error:'Please upload a JPEG, PNG or WebP photo.'},400);
        photoType=jpeg?'image/jpeg':png?'image/png':'image/webp';
        if (env.BUCKET) { photoKey='collector-stories/'+id; await env.BUCKET.put(photoKey,bytes,{httpMetadata:{contentType:photoType}}); }
        else { photoKey='d1:'+id; await db(env).prepare('INSERT INTO collector_story_photos (id, data, type) VALUES (?, ?, ?)').bind(id,bytes,photoType).run(); }
      }
      try {
        await db(env).prepare('INSERT INTO collector_stories (id, first_name, email, city, artwork, message, photo_key, photo_type, publish_consent, status, ip_hash, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(id,firstName,email,city,artwork,message,photoKey,photoType,data.get('publishConsent')==='on'?1:0,'pending',ipHash,new Date().toISOString()).run();
      } catch (error) { if(photoKey?.startsWith('d1:')) await db(env).prepare('DELETE FROM collector_story_photos WHERE id = ?').bind(id).run().catch(()=>{}); else if(photoKey) await env.BUCKET?.delete(photoKey);throw error; }
      return json({ok:true,id},201);
    }
    return json({error:'Not found.'},404);
  } catch(error) { console.error('Collector story storage failed:',error.message);return json({error:'We could not save your story. Your form has been kept; please try again.'},503); }
}
export { owner };
