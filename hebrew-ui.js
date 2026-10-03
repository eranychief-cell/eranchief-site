(() => {
  if (new URLSearchParams(location.search).get('lang') === 'en') {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    // The static header is authored in Hebrew; switch its labels for English visitors.
    const enHeader = () => {
      const cart = document.querySelector('#cartButton');
      if (cart && cart.firstChild && cart.firstChild.nodeType === 3) { cart.firstChild.textContent = 'Bag '; cart.setAttribute('aria-label', 'Open shopping bag'); }
      document.querySelector('.mobile-menu summary')?.setAttribute('aria-label', 'Open menu');
      const nav = document.querySelector('.mobile-menu nav');
      if (nav) {
        nav.setAttribute('aria-label', 'Mobile navigation');
        const en = { '#paper-edition': 'Paper Edition · ₪249', '#canvas-edit': 'Canvas from ₪990', '#collectionIndex': 'Collector Editions', '#collection': 'All works', '/press/': 'Press', '/collector-stories/': 'Collector Stories', '/collector-stories/?lang=en': 'Collector Stories' };
        nav.querySelectorAll('a').forEach(a => { const h = a.getAttribute('href'); if (en[h]) a.textContent = en[h]; if (h === '/collector-stories/') a.setAttribute('href', '/collector-stories/?lang=en'); if (h === '/?lang=en') { a.textContent = 'עברית'; a.setAttribute('href', '/'); a.lang = 'he'; a.hreflang = 'he'; } });
      }
      const langs = document.querySelector('.language-links');
      if (langs) { langs.setAttribute('aria-label', 'Language'); langs.innerHTML = '<a href="/" lang="he" hreflang="he">עברית</a><span aria-current="page">English</span>'; }
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enHeader); else enHeader();
    return;
  }
  document.documentElement.lang = 'he';
  document.documentElement.dir = 'rtl';
  const words = new Map([
    ['Remove','הסרה'],['Order subtotal','סכום ביניים להזמנה'],['Private discount','הנחה פרטית'],['Postal code','מיקוד'],['(optional for the initial quote)','(לא חובה לבקשת הצעת מחיר)'],['Close','סגירה'],['Archival Fine Art Paper','נייר Fine Art ארכיוני'],['See it in your space','ראו את היצירה בחלל'],['Interior visualization · full frame','הדמיה בחלל · פריים מלא'],['FINE ART PHOTOGRAPHY','צילום אמנותי'],['Reality','המציאות'],['transformed.','משתנה.'],['Original photography for your home. Signed by CHIEF, made for your wall.','צילום אמנותי מקורי לבית. חתום בידי CHIEF ונוצר בשביל הקיר שלכם.'],['Paper Edition · from ₪249','מהדורת נייר · החל מ־₪249'],['Art Edition canvas · from ₪990','מהדורת Art על קנבס · החל מ־₪990'],['Reference prices only · payment quoted in ₪','מחירי ייחוס בלבד · התשלום בש״ח'],['Fine Art paper · canvas · collector editions','נייר Fine Art · קנבס · מהדורות אספנים'],['Certificate of Authenticity with every work','תעודת מקוריות עם כל יצירה'],['SEA','ים'],['REFLECTION','השתקפות'],['LIGHT','אור'],['MOVEMENT','תנועה'],['TRANSFORMATION','טרנספורמציה'],['FIND YOUR CHIEF','מצאו את ה־CHIEF שלכם'],['A work for every wall.','יצירה לכל קיר.'],['A way to begin at every price.','דרך להתחיל בכל תקציב.'],['YOUR FIRST CHIEF','ה־CHIEF הראשון שלכם'],['Signed Paper Edition','מהדורת נייר חתומה'],['Explore ten works','לצפייה בעשר היצירות'],['READY FOR YOUR WALL','מוכן לקיר שלכם'],['Art on canvas','אמנות על קנבס'],['Stretched and ready to hang · from ₪990','מתוח ומוכן לתלייה · החל מ־₪990'],['Find a canvas','מצאו קנבס'],['THE COLLECTOR','לאספנים'],['Statement editions','מהדורות נוכחות'],['Limited editions · Alucobond & Perspex','מהדורות מוגבלות · אלוקובונד ופרספקס'],['Premium & Super Premium: shipping quoted before payment','Premium ו־Super Premium: משלוחים לכל הארץ חינם'],['Explore the collection','לצפייה בקולקציה'],['CHOOSE YOUR FORMAT','בחרו את הפורמט שלכם'],['One artist. Three ways to live with the work.','אמן אחד. שלוש דרכים לחיות עם היצירה.'],['Archival Fine Art paper · signed · unframed','נייר Fine Art ארכיוני · חתום · ללא מסגרת'],['Ten works until 15 October · from ₪249','עשר עבודות עד 15 באוקטובר · החל מ־₪249'],['Art Edition canvas','מהדורת Art על קנבס'],['Stretched canvas · ready to hang · open edition','קנבס מתוח · מוכן לתלייה · מהדורה פתוחה'],['Available year-round · from ₪990','זמין כל השנה · החל מ־₪990'],['Collector editions','מהדורות אספנים'],['Alucobond or Perspex · signed and numbered editions','אלוקובונד או פרספקס · מהדורות חתומות וממוספרות'],['CHIEF / COLLECTIONS','CHIEF / קולקציות'],['Choose your world.','בחרו את העולם שלכם.'],['Edition of 7 · Alucobond from ₪5,900','מהדורה של 7 · אלוקובונד החל מ־₪5,900'],['Edition of 25 · Alucobond from ₪2,490','מהדורה של 25 · אלוקובונד החל מ־₪2,490'],['Open edition · Canvas from ₪990','מהדורה פתוחה · קנבס החל מ־₪990'],['6 works · Selected sizes','6 עבודות · מידות נבחרות'],['Edition of 25 · 36 works','מהדורה של 25 · 36 עבודות'],['CHOOSE A PHOTOGRAPH','בחרו צילום'],['Find the one for your wall.','מצאו את האחת לקיר שלכם.'],['Begin with canvas from ₪990, or explore the full collection of 189 original works.','התחילו בקנבס החל מ־₪990, או גלו את הקולקציה המלאה של 189 עבודות מקוריות.'],['Search by title or mood','חיפוש לפי שם או אווירה'],['Try sea, light or Tel Aviv','נסו ים, אור או תל אביב'],['Canvas from ₪990','קנבס החל מ־₪990'],['Limited editions','מהדורות מוגבלות'],['Collector pieces','יצירות לאספנים'],['All 189 works','כל 189 העבודות'],['Show more works','הצגת עבודות נוספות'],['ART IN YOUR SPACE','אמנות בחלל שלכם'],['See the work.','ראו את היצירה.'],['Feel the room.','הרגישו את החלל.'],['VIEW ARTWORK ↗','לצפייה ביצירה ↗'],['THE ARTIST','האמן'],['Read the official biography →','לביוגרפיה הרשמית →'],['Explore press, awards and published photography →','לעיתונות, פרסים ופרסומים →'],['COLLECTOR STORIES','סיפורי אספנים'],['Your CHIEF. Your home.','ה־CHIEF שלכם. הבית שלכם.'],['Already living with a CHIEF artwork? Share your experience and a photograph of it in your space.','כבר חיים עם יצירת CHIEF? שתפו את החוויה ותמונה שלה בבית שלכם.'],['PRIVATE VIEWING','גישה פרטית'],['Enter the world of CHIEF.','היכנסו לעולם של CHIEF.'],['Email address','כתובת אימייל'],['JOIN THE LIST','הצטרפות לרשימה'],['COLLECTOR SERVICE','שירות לאספנים'],['Before you collect','לפני שבוחרים יצירה'],['Art in motion.','אמנות בתנועה.'],['VIEW ALL 7 FILMS','לכל 7 הסרטים'],['Your bag','הסל שלך'],['Private discount code','קוד הנחה פרטי'],['Apply','החלה'],['Subtotal','סכום ביניים'],['Discount','הנחה'],['Total before shipping','סכום לפני משלוח'],['Request exact total & payment link','לבקשת מחיר מדויק וקישור לתשלום'],['Send this selection by WhatsApp','שליחת הבחירה ב־WhatsApp'],['ORDER REQUEST','בקשת הזמנה'],['Get your exact total.','קבלו את המחיר המדויק.'],['Full name','שם מלא'],['Phone','טלפון'],['Email','אימייל'],['Country','מדינה'],['City','עיר'],['Postal code','מיקוד'],['Continue to WhatsApp with my selection','המשך ל־WhatsApp עם הבחירה שלי'],['Collector assistance','סיוע בבחירת יצירה']
    ,['Shipping quoted before payment','משלוחים לכל הארץ חינם'],['Premium from ₪2,490 on Alucobond · shipping quoted before payment','Premium על אלוקובונד החל מ־₪2,490 · משלוחים לכל הארץ חינם'],['Shipping costs depend on destination, size and finish and are confirmed before payment. International shipping is charged separately. Import duties and local taxes are not included.','משלוחים לכל הארץ חינם לעבודות Premium ו־Super Premium. משלוח לסדרות אחרות ומשלוח לחו״ל יתומחרו לפני התשלום לפי היעד, הגודל והגימור. מכס ומסים מקומיים אינם כלולים.']
  ]);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    const value = node.nodeValue.trim();
    if (words.has(value)) node.nodeValue = node.nodeValue.replace(value, words.get(value));
  }
  const countCopy=document.querySelector('[data-work-count-copy]');
  if(countCopy){countCopy.firstChild.nodeValue='התחילו בקנבס החל מ־₪990, או גלו את הקולקציה המלאה של ';countCopy.lastChild.nodeValue=' עבודות מקוריות.';}
  const allWorksButton=document.querySelector('.filters [data-filter="all"]');
  if(allWorksButton){allWorksButton.firstChild.nodeValue='כל ';allWorksButton.lastChild.nodeValue=' העבודות';}
  document.querySelectorAll('[aria-label]').forEach(el=>{if(words.has(el.getAttribute('aria-label')))el.setAttribute('aria-label',words.get(el.getAttribute('aria-label')))});
  const note=document.querySelector('.shipping-form > small');if(note)note.innerHTML='ייפתח נוסח הודעה שתוכלו לשלוח. אין חיוב בשלב זה. קראו את <a href="/shipping-returns/?lang=he" target="_blank">מדיניות המשלוחים וההחזרות</a> לפני התשלום.';
  document.querySelectorAll('[placeholder]').forEach(el => {
    if (words.has(el.placeholder)) el.placeholder = words.get(el.placeholder);
  });
})();
