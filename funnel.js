/* Private funnel counter for eranchief.com: one anonymous count per visitor session for each step
   (landing, product, add, checkout, pay). No cookies, no IP, no personal data; read on /orders/manage. */
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
  window.chiefFunnel=function(step,lang){
    try{
      if(get('cf_'+step))return;set('cf_'+step,'1');
      var l=lang||((document.documentElement.lang||'').indexOf('he')===0?'he':'en');
      var body=JSON.stringify({e:step,s:get('chiefSrc')||src||'direct',l:l});
      if(navigator.sendBeacon&&navigator.sendBeacon('/api/funnel',new Blob([body],{type:'application/json'})))return;
      fetch('/api/funnel',{method:'POST',body:body,keepalive:true,headers:{'content-type':'application/json'}}).catch(function(){});
    }catch(e){}
  };
  if(/\/paper-edition\/?$/.test(location.pathname))window.chiefFunnel('landing');
})();
