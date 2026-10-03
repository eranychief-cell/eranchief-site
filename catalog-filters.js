(() => {
  const he = document.documentElement.lang === 'he' || new URLSearchParams(location.search).get('lang') === 'he';
  const groups = [
    {key:'orientation', title:he?'כיוון':'Orientation', options:[['all',he?'הכול':'All'],['landscape',he?'לרוחב':'Landscape'],['portrait',he?'לאורך':'Portrait'],['square',he?'ריבוע':'Square']]},
    {key:'series', title:he?'סדרה':'Series', options:[['all',he?'הכול':'All'],['paper',he?'מהדורת נייר':'Paper Edition'],['art',he?'מהדורת Art':'Art Edition'],['premium','Premium'],['super','Super Premium'],['squares',he?'עבודות מרובעות':'Squares'],['late-night','Open After Midnight']]},
    {key:'price', title:he?'מחיר התחלתי':'Starting price', options:[['all',he?'הכול':'All'],['low',he?'עד ₪1,000':'Up to ₪1,000'],['mid-low',he?'מעל ₪1,000 עד ₪2,500':'Over ₪1,000 to ₪2,500'],['mid-high',he?'מעל ₪2,500 עד ₪5,000':'Over ₪2,500 to ₪5,000'],['high',he?'מעל ₪5,000':'Over ₪5,000']]}
  ];
  document.querySelectorAll('[data-catalog-grid]').forEach(grid => {
    const cards=[...grid.querySelectorAll('[data-orientation][data-series][data-start-price]')];
    const state={orientation:'all',series:'all',price:'all'};
    const inPrice=(value,price)=>value==='all'||(value==='low'&&price<=1000)||(value==='mid-low'&&price>1000&&price<=2500)||(value==='mid-high'&&price>2500&&price<=5000)||(value==='high'&&price>5000);
    const hasOption=(key,value)=>value==='all'||cards.some(card=>key==='price'?inPrice(value,Number(card.dataset.startPrice)):card.dataset[key]===value);
    const panel=document.createElement('details');
    panel.className='catalog-filters';
    panel.open=matchMedia('(min-width: 701px)').matches;
    const summary=document.createElement('summary');
    summary.textContent=he?'סינון יצירות':'Filter artworks';
    panel.append(summary);
    const groupsBox=document.createElement('div');
    groupsBox.className='catalog-filters__groups';
    for(const group of groups){
      const row=document.createElement('div');
      row.className='catalog-filters__group';
      const title=document.createElement('span');
      title.textContent=group.title;
      row.append(title);
      const choices=document.createElement('div');
      choices.className='catalog-filters__choices';
      choices.setAttribute('role','group');
      choices.setAttribute('aria-label',group.title);
      for(const [value,label] of group.options.filter(([value])=>hasOption(group.key,value))){
        const button=document.createElement('button');
        button.type='button';
        button.textContent=label;
        button.dataset.value=value;
        button.setAttribute('aria-pressed',String(value==='all'));
        button.addEventListener('click',()=>{
          state[group.key]=value;
          choices.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
          if(grid.id==='gallery')window.chiefShowAllForFiltering?.();
          apply();
        });
        choices.append(button);
      }
      row.append(choices);groupsBox.append(row);
    }
    panel.append(groupsBox);
    const count=document.createElement('p');
    count.className='catalog-filters__count';
    count.setAttribute('aria-live','polite');
    const empty=document.createElement('p');
    empty.className='catalog-filters__empty';
    empty.textContent=he?'אין יצירות שמתאימות לבחירה. אפשר לשנות את הסינון.':'No works match this selection. Change a filter to see more.';
    empty.hidden=true;
    grid.before(panel,count);
    grid.after(empty);
    function apply(){
      let visible=0;
      cards.forEach(card=>{
        const matches=state.orientation==='all'||card.dataset.orientation===state.orientation;
        const series=state.series==='all'||card.dataset.series===state.series;
        const price=inPrice(state.price,Number(card.dataset.startPrice));
        card.hidden=card.dataset.baseHidden==='true'||!matches||!series||!price;
        if(!card.hidden)visible++;
      });
      count.textContent=he?`${visible} יצירות מוצגות`:`${visible} works shown`;
      empty.hidden=visible>0;
    }
    if(grid.id==='gallery')window.chiefApplyCatalogFilters=apply;
    apply();
  });
})();
