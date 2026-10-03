(function(root){
  const closesAt=Date.parse(root.chiefPaperEditionData.closesAt);
  const isClosed=(now=Date.now())=>now>closesAt;
  const notice=he=>`<div class="paper-closed-notice" role="status"><p>${he?'המהדורה הזו נסגרה. מהדורת נייר חדשה בקרוב':'This edition has closed. A new Paper Edition is coming soon'}</p><a href="/${he?'?lang=he':''}#newsletter">${he?'הצטרפות לרשימת התפוצה':'Join the mailing list'}</a><a href="/${he?'?lang=he':''}#canvas-edit">${he?'קנבס מ־₪990':'Canvas from ₪990'}</a></div>`;
  root.chiefPaperEdition={isClosed,notice,closesAt};
  if(!root.document)return;
  function closeLanding(){
    if(!isClosed())return;
    root.document.querySelectorAll('.paper-seo-room-link,.paper-seo-choose,.paper-seo-footer > a').forEach(link=>{
      link.outerHTML=notice(false);
    });
  }
  if(root.document.readyState==='loading')root.document.addEventListener('DOMContentLoaded',closeLanding);
  else closeLanding();
  root.setTimeout(closeLanding,Math.max(0,closesAt-Date.now()+1));
})(window);
