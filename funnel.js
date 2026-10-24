/* Private funnel counter for eranchief.com: one anonymous count per visitor session for each step.
   Paper Edition: landing, product, add, checkout, pay.
   Artwork pages (/artworks/<slug>/, /he/artworks/<slug>/): art_landing and the buy-button click
   (art_cta to the site's size & finish choice, art_u1000 to the Under1000 gallery), both per work;
   then art_add, art_checkout, art_pay for non-paper works in the bag.
   No cookies, no IP, no personal data; read on /orders/manage. */
(function(){
  var store=null;try{store=window.sessionStorage;store.setItem('cf_t','1')}catch(e){store=null}
  function get(k){try{return store?store.getItem(k):null}catch(e){return null}}
  function set(k,v){try{if(store)store.setItem(k,v)}catch(e){}}
  var src=get('chiefSrc');
  if(!src){
    var q=location.search,r=document.referrer||'';
    src=(/[?&](fbclid|utm_source=meta|utm_source=facebook|utm_source=instagram)/.test(q)||/facebook\.|instagram\.|fb\.me|\bfb\.com/.test(r))?'meta':(r&&r.indexOf(location.hostname)<0?'other':'direct');
    set('chiefSrc',src);
  }
  window.chiefFunnel=function(step,lang,work){
    try{
      var key='cf_'+step+(work?'_'+work:'');
      if(get(key))return;set(key,'1');
      var l=lang||((document.documentElement.lang||'').indexOf('he')===0?'he':'en');
      var data={e:step,s:get('chiefSrc')||src||'direct',l:l};if(work)data.w=work;
      var body=JSON.stringify(data);
      if(navigator.sendBeacon&&navigator.sendBeacon('/api/funnel',new Blob([body],{type:'application/json'})))return;
      fetch('/api/funnel',{method:'POST',body:body,keepalive:true,headers:{'content-type':'application/json'}}).catch(function(){});
    }catch(e){}
  };
  if(/\/paper-edition\/?$/.test(location.pathname))window.chiefFunnel('landing');
  var art=location.pathname.match(/^\/(?:he\/)?artworks\/([a-z0-9-]{1,80})\/?$/);
  if(art){
    var slug=art[1];
    window.chiefFunnel('art_landing',null,slug);
    document.addEventListener('click',function(e){
      try{
        var a=e.target&&e.target.closest?e.target.closest('a.seo-cta'):null;
        if(!a)return;
        window.chiefFunnel(/under1000\.com/i.test(a.href)?'art_u1000':'art_cta',null,slug);
      }catch(_){}
    },true);
  }
})();
