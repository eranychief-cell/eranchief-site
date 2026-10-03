const OWNER_EMAIL = 'eranychief@yahoo.com';
const owner = request => Boolean(request.headers.get('oai-authenticated-user-id')) && request.headers.get('oai-authenticated-user-email')?.toLowerCase() === OWNER_EMAIL;
const json = (value, status = 200) => Response.json(value, {status, headers: {'cache-control':'no-store'}});
const db = env => { if (!env.DB) throw new Error('Missing story database'); return env.DB; };
const maxBytes = 8 * 1024 * 1024;
const text = (data, key) => typeof data.get(key) === 'string' ? data.get(key).trim() : '';

export async function handleCollectorStories(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  if (!path.startsWith('/api/collector-stories') && !path.startsWith('/collector-stories/manage')) return null;
  const adminPath = path.startsWith('/collector-stories/manage') || path.startsWith('/api/collector-stories/admin');
  if (adminPath && !owner(request)) {
    if (path.startsWith('/collector-stories/manage') && !request.headers.get('oai-authenticated-user-id')) return Response.redirect(new URL('/signin-with-chatgpt?return_to=%2Fcollector-stories%2Fmanage%2F', url.origin), 302);
    return json({error:'Owner access required.'}, 403);
  }
  if (request.method === 'POST' && request.headers.get('origin') !== url.origin) return json({error:'Please submit through the website.'}, 403);
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
      if (!row?.photo_key || (!owner(request) && (row.status !== 'approved' || row.publish_consent !== 1))) return json({error:'Photo not found.'},404);
      const object = await env.BUCKET?.get(row.photo_key);
      if (!object) return json({error:'Photo unavailable.'},404);
      return new Response(object.body,{headers:{'content-type':row.photo_type,'cache-control':'private, no-store','x-content-type-options':'nosniff','content-disposition':'inline'}});
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
      if (!env.BUCKET) return json({error:'Photo storage is temporarily unavailable. Please try again later.'},503);
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
        const bytes=new Uint8Array(await file.arrayBuffer());
        const jpeg=bytes[0]===255&&bytes[1]===216&&bytes[2]===255;
        const png=bytes.slice(0,8).every((b,i)=>b===[137,80,78,71,13,10,26,10][i])&&bytes.length>8;
        const webp=new TextDecoder().decode(bytes.slice(0,4))==='RIFF'&&new TextDecoder().decode(bytes.slice(8,12))==='WEBP';
        if (!jpeg&&!png&&!webp) return json({error:'Please upload a JPEG, PNG or WebP photo.'},400);
        photoType=jpeg?'image/jpeg':png?'image/png':'image/webp';photoKey='collector-stories/'+id;
        await env.BUCKET.put(photoKey,bytes,{httpMetadata:{contentType:photoType}});
      }
      try {
        await db(env).prepare('INSERT INTO collector_stories (id, first_name, email, city, artwork, message, photo_key, photo_type, publish_consent, status, ip_hash, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(id,firstName,email,city,artwork,message,photoKey,photoType,data.get('publishConsent')==='on'?1:0,'pending',ipHash,new Date().toISOString()).run();
      } catch (error) { if(photoKey) await env.BUCKET.delete(photoKey);throw error; }
      return json({ok:true,id},201);
    }
    return json({error:'Not found.'},404);
  } catch(error) { console.error('Collector story storage failed:',error.message);return json({error:'We could not save your story. Your form has been kept; please try again.'},503); }
}
