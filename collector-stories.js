(() => {
  let lang=new URLSearchParams(location.search).get('lang')==='en'?'en':'he',previewUrl;
  const admin=document.body.dataset.admin==='true';
  const status=document.querySelector('#storyStatus');
  const setStatus=(message,error=false)=>{status.textContent=message;status.className=error?'error':'success'};
  const requestedArtwork=new URLSearchParams(location.search).get('artwork');
  if(requestedArtwork){const artworkField=document.querySelector('#storyForm [name="artwork"]');if(artworkField)artworkField.value=requestedArtwork.slice(0,160);}
  const applyLanguage=()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='he'?'rtl':'ltr';document.querySelectorAll('[data-he][data-en]').forEach(el=>el.textContent=el.dataset[lang]);const switcher=document.querySelector('#storyLanguage');if(switcher)switcher.textContent=lang==='he'?'English':'עברית';};
  applyLanguage();
  document.querySelector('#storyLanguage')?.addEventListener('click',event=>{
    lang=lang==='he'?'en':'he';applyLanguage();
  });
  document.querySelector('#storyPhoto')?.addEventListener('change',event=>{
    const file=event.target.files[0],preview=document.querySelector('#storyPreview');
    if(previewUrl)URL.revokeObjectURL(previewUrl);preview.hidden=true;
    if(file?.size>8*1024*1024){event.target.value='';setStatus(lang==='he'?'בחרו תמונה קטנה מ־8 MB.':'Please choose a photo smaller than 8 MB.',true);return}
    if(file){previewUrl=URL.createObjectURL(file);preview.src=previewUrl;preview.hidden=false;}
  });
  document.querySelector('#storyForm')?.addEventListener('submit',async event=>{
    event.preventDefault();const form=event.currentTarget,button=form.querySelector('button[type=submit]');button.disabled=true;
    setStatus(lang==='he'?'שולחים את הסיפור והתמונה…':'Sending your story and photo…');
    try{const response=await fetch('/api/collector-stories',{method:'POST',body:new FormData(form)});const result=await response.json();if(!response.ok)throw Error(result.error||'Could not save.');
      form.reset();document.querySelector('#storyPreview').hidden=true;if(previewUrl)URL.revokeObjectURL(previewUrl);
      setStatus(lang==='he'?'תודה! הסיפור והתמונה נשלחו לצ׳יף לבדיקה. הם לא יופיעו באתר ללא אישור.':'Thank you! Your story and photo were sent to CHIEF for review. Nothing is published without approval.');
    }catch(error){setStatus(lang==='he'?'השליחה לא הושלמה. הפרטים נשמרו בטופס; נסו שוב. '+error.message:error.message,true)}finally{button.disabled=false}
  });
  const addText=(parent,tag,value)=>{const node=document.createElement(tag);node.textContent=value;parent.append(node);return node};
  async function loadStories(){
    try{const response=await fetch(admin?'/api/collector-stories/admin':'/api/collector-stories');const result=await response.json();if(!response.ok)throw Error(result.error);
      const grid=document.querySelector('#storiesGrid');grid.replaceChildren();
      if(!admin)document.querySelector('#publishedStories').hidden=!result.stories.length;
      if(admin&&!result.stories.length)setStatus('עדיין לא התקבלו סיפורים.');
      for(const story of result.stories){const card=document.createElement('article');card.className='story-card';
        if(story.photo){const image=document.createElement('img');image.src=story.photo;image.alt=story.artwork+' at home';image.loading='lazy';card.append(image)}
        addText(card,'h3',story.first_name+(story.city?' · '+story.city:''));addText(card,'small',story.artwork);addText(card,'p',story.message);
        if(admin){addText(card,'p',story.email+' · '+story.created_at.slice(0,10)+' · '+story.status);addText(card,'small',story.publish_consent?'הלקוח אישר פרסום':'משוב פרטי — אין אישור פרסום');const actions=document.createElement('div');actions.className='admin-actions';
          for(const [state,label]of [['approved','הרכישה אומתה — אישור ופרסום'],['rejected','לא לפרסם / הסתרה']]){const button=document.createElement('button');button.textContent=label;button.disabled=state==='approved'&&!story.publish_consent;button.onclick=async()=>{button.disabled=true;try{const response=await fetch('/api/collector-stories/admin',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({id:story.id,status:state})});const result=await response.json();if(!response.ok)throw Error(result.error);setStatus('העדכון נשמר.');await loadStories()}catch(error){setStatus(error.message,true);button.disabled=false}};actions.append(button)}card.append(actions)}grid.append(card);
      }
    }catch(error){if(admin)setStatus('לא ניתן לטעון כעת: '+error.message,true);else console.error('Stories unavailable',error.message)}
  }
  loadStories();
})();
