(() => {
  const slot=document.querySelector('.product-collector-stories');
  if(!slot)return;
  const he=document.documentElement.lang==='he';
  const load=async()=>{
    try{
      const url='/api/collector-stories?artwork='+encodeURIComponent(slot.dataset.artwork);
      const response=await fetch(url);
      if(!response.ok)return;
      const {stories}=await response.json();
      if(!Array.isArray(stories)||!stories.length)return;
      const heading=document.createElement('h2');
      heading.textContent=he?'סיפורי אספנים':'Collector Stories';
      slot.append(heading);
      for(const story of stories.slice(0,2)){
        const card=document.createElement('article');
        card.className='product-collector-story';
        if(story.photo){
          const image=document.createElement('img');
          image.src=story.photo;
          image.alt=he?`היצירה ${story.artwork} בבית האספן`:`${story.artwork} in a collector's home`;
          image.loading='lazy';
          card.append(image);
        }
        const name=document.createElement('h3');
        name.textContent=story.first_name+(story.city?' · '+story.city:'');
        const artwork=document.createElement('small');
        artwork.textContent=story.artwork;
        const message=document.createElement('p');
        message.textContent=story.message;
        card.append(name,artwork,message);
        slot.append(card);
      }
      const link=document.createElement('a');
      link.href='/collector-stories/?lang='+(he?'he':'en');
      link.textContent=he?'לכל סיפורי האספנים':'View all Collector Stories';
      slot.append(link);
      slot.hidden=false;
    }catch(error){
      // Keep the optional section hidden when stories are unavailable.
    }
  };
  const anchor=slot.previousElementSibling;
  if(!anchor)return;
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){
        observer.disconnect();
        load();
      }
    },{rootMargin:'250px'});
    observer.observe(anchor);
  }else load();
})();
