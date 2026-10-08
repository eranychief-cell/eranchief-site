// Topic landing pages (Oct 2026): one Hebrew + one English page per photographic topic, built from the
// hand-tagged topics in app.js (workThemes). New URLs only — no existing page or address is changed.
export const themePages = {
  lobby: {
    slug: 'lobby-art',
    video: '/assets/lobbies-film-lite.mp4',
    poster: '/assets/lobbies-film-poster.jpg',
    he: {
      title: 'תמונות ללובי בניין — אמנות לוועד הבית ולחללים משותפים',
      seoTitle: 'תמונות ללובי בניין | אמנות לוועד בית ולובי מגורים | CHIEF',
      description: 'תמונות ללובי בניין מגורים: צילום אמנותי מקורי של CHIEF בפורמט גדול, לוועדי בתים, יזמים ומעצבי פנים. החל מקנבס ועד אלוקובונד ופרספקס, עם תעודת מקוריות.',
      intro: 'הלובי הוא החדר הראשון שכל דייר ואורח נכנס אליו, והוא קובע את האווירה של הבניין כולו. כאן ריכזנו עבודות של CHIEF שנראות במיטבן בגדול: צבע, אור והשתקפויות של תל אביב, שמכניסים חיים לקיר גבוה ולחלל משותף. אפשר להתחיל בקנבס במחיר נגיש, ולשדרג לאלוקובונד או לפרספקס לגימור עמיד ויוקרתי. לוועדי בתים, ליזמים ולמעצבי פנים: שלחו צילום של הקיר והמידות שלו, ונעזור לבחור את היצירה, הגודל והגימור.',
      faqs: [
        ['איזה גודל תמונה מתאים ללובי?', 'בלובי עם תקרה גבוהה מומלץ פורמט גדול, 100 × 150 ס״מ ומעלה, כדי שהיצירה תחזיק את הקיר. אפשר לשלוח צילום של הקיר ומידות, ונציע גודל מדויק.'],
        ['מה החומר המתאים ללובי?', 'קנבס הוא נקודת פתיחה נגישה. ללובי עם תנועה רבה מומלץ אלוקובונד מט או פרספקס, שהם עמידים, קלים לניקוי ונראים יוקרתיים לאורך שנים.'],
        ['אפשר להזמין דרך ועד הבית ולקבל קבלה?', 'כן. ההזמנה יכולה להיות על שם ועד הבית או החברה, ועל כל תשלום מופקת קבלה.'],
        ['אפשר לראות איך זה ייראה אצלנו לפני ההזמנה?', 'כן. שלחו צילום של הלובי, ונכין הדמיה של היצירה על הקיר שלכם.'],
      ],
    },
    en: {
      title: 'Lobby Wall Art — Art for Residential Buildings and Shared Spaces',
      seoTitle: 'Lobby Wall Art for Residential Buildings | CHIEF Fine Art Photography',
      description: 'Large-format lobby wall art for residential buildings: original fine art photography by CHIEF for house committees, developers and interior designers. From canvas to Alucobond and Perspex, with a Certificate of Authenticity.',
      intro: 'A lobby is the first room every resident and guest walks into, and it sets the tone for the whole building. These CHIEF works are made to be seen big: colour, light and Tel Aviv reflections that bring a tall wall and a shared space to life. Start with canvas at an accessible price, or upgrade to Alucobond or Perspex for a durable, premium finish. House committees, developers and interior designers: send a photo of the wall and its measurements, and we will help you choose the work, size and finish.',
      faqs: [
        ['What size works best for a lobby?', 'For a lobby with a high ceiling, a large format of 100 × 150 cm or more lets the work hold the wall. Send a photo and measurements and we will suggest an exact size.'],
        ['Which finish suits a lobby?', 'Canvas is an accessible starting point. For busy lobbies, matte Alucobond or Perspex are durable, easy to clean and look premium for years.'],
        ['Can we see it in our lobby before ordering?', 'Yes. Send a photo of your lobby and we will prepare a visualisation of the work on your wall.'],
      ],
    },
  },
  telaviv: {
    slug: 'tel-aviv-wall-art',
    he: {
      title: 'תמונות של תל אביב לסלון — צילום אמנותי מקורי',
      seoTitle: 'תמונות של תל אביב לסלון | צילום אמנותי מקורי של CHIEF',
      description: 'תמונות של תל אביב לסלון ולבית: צילום Fine Art מקורי של רחובות, בניינים, השתקפויות וחוף העיר מאת CHIEF. קנבס, אלוקובונד או פרספקס, עם תעודת מקוריות.',
      intro: 'תל אביב היא העיר שבה CHIEF מצלם כמעט כל יום. כאן מרוכזות היצירות שבהן העיר עצמה היא הנושא: בתי באוהאוס אחרי גשם, שלוליות שהופכות את הרחוב לעולם הפוך, קו החוף, גורדי השחקים והאנשים שעוברים ביניהם. אלה לא גלויות של העיר, אלא רגעים שבהם המקום המוכר נראה פתאום אחר. כל צילום צולם ונערך באייפון, מוצג בפריים המלא שלו ומודפס לפי הזמנה.',
      faqs: [
        ['איזו תמונה של תל אביב מתאימה לסלון?', 'לקיר מרכזי מעל ספה מתאימה בדרך כלל עבודה אופקית בגודל 100 × 150 ס״מ. לקיר צר או למסדרון מתאימה עבודה אנכית. בכל עמוד יצירה יש הדמיה מעל ספה עם השוואת גדלים.'],
        ['אלו צילומים מקוריים או הדפסים של תמונות מהאינטרנט?', 'כל הצילומים הם יצירות מקוריות של CHIEF מתל אביב. כל עבודה מגיעה עם תעודת מקוריות, ובמהדורות המוגבלות גם עם מספר עותק.'],
        ['על איזה חומר אפשר להזמין?', 'אלוקובונד מט, פרספקס מבריק, ולעבודות Art Edition גם קנבס מתוח ומוכן לתלייה.'],
      ],
    },
    en: {
      title: 'Tel Aviv Wall Art — Original Fine Art Photography',
      seoTitle: 'Tel Aviv Wall Art | Original Photography Prints by CHIEF',
      description: 'Original Tel Aviv wall art by CHIEF: fine art photographs of the city’s streets, Bauhaus buildings, reflections and shoreline, on canvas, Alucobond or Perspex with a Certificate of Authenticity.',
      intro: 'Tel Aviv is the city CHIEF photographs almost every day. These are the works in which the city itself is the subject: Bauhaus buildings after rain, puddles that turn the street upside down, the shoreline, the towers and the people moving between them. They are not postcards — they are moments when a familiar place suddenly looks different. Every photograph was taken and edited on iPhone, is shown in its full original frame and is made to order.',
      faqs: [
        ['Which Tel Aviv photograph suits a living room?', 'Above a sofa, a landscape work at 100 × 150 cm usually works best; a narrow wall or hallway suits a portrait work. Every artwork page has a sofa preview with a size comparison.'],
        ['Are these original works?', 'Yes. Every photograph is an original work by CHIEF, made in Tel Aviv, and comes with a Certificate of Authenticity; limited editions are also numbered.'],
        ['Which finishes are available?', 'Matte Alucobond, glossy Perspex, and stretched canvas for Art Edition works.'],
      ],
    },
  },
  sea: {
    slug: 'sea-wall-art',
    he: {
      title: 'תמונות ים לסלון — צילומי ים מקוריים',
      seoTitle: 'תמונות ים לסלון | צילומי ים וחוף מקוריים של CHIEF',
      description: 'תמונות ים לסלון ולבית: צילומי ים, גלים, חוף ושקיעה מקוריים מאת CHIEF מתל אביב. על קנבס, אלוקובונד או פרספקס, בפריים מלא ועם תעודת מקוריות.',
      intro: 'הים הוא הנושא שאליו CHIEF חוזר יותר מכל. בעמוד הזה מרוכזים צילומי הים שלו: גלים ברגע ההתנפצות, חול רטוב שמשקף שמיים, כלבים ואנשים על קו המים, ועבודות שבהן חפץ פשוט על החוף הופך לסצנה סוריאליסטית. תמונת ים בסלון מכניסה לחלל עומק, אור ותחושת מרחב, ומתאימה במיוחד לקיר מרכזי.',
      faqs: [
        ['איזה גודל של תמונת ים מתאים מעל ספה?', 'ככלל, רוחב התמונה צריך להיות כשני שלישים מרוחב הספה. לספה של כ־2.2 מטר מתאימה עבודה ברוחב 150 ס״מ. ההדמיה בכל עמוד יצירה עוזרת לבדוק את זה.'],
        ['פרספקס או אלוקובונד לצילום ים?', 'פרספקס מעמיק את הכחולים ואת האור, אבל מחזיר השתקפויות. אלוקובונד מט שקט יותר ומתאים לחדר מואר מאוד.'],
        ['האם הצילומים חתוכים כדי להתאים לגודל?', 'לא. כל צילום מודפס בפריים המקורי והמלא שלו, ללא חיתוך.'],
      ],
    },
    en: {
      title: 'Sea Wall Art — Original Ocean & Beach Photography',
      seoTitle: 'Sea Wall Art | Original Ocean & Beach Photography by CHIEF',
      description: 'Original sea and beach wall art by CHIEF: waves, wet sand reflections, shoreline and sunset photographs from Tel Aviv, on canvas, Alucobond or Perspex with a Certificate of Authenticity.',
      intro: 'The sea is the subject CHIEF returns to more than any other. This page gathers his sea photographs: waves at the moment they break, wet sand mirroring the sky, dogs and people at the waterline, and works in which a simple object on the beach becomes a surreal scene. A sea photograph brings depth, light and a sense of space into a room, and works especially well on a main wall.',
      faqs: [
        ['What size sea print suits a wall above a sofa?', 'As a rule, the artwork should be about two thirds of the sofa’s width; for a 2.2 m sofa, a 150 cm wide work fits well. The preview on every artwork page helps you check.'],
        ['Perspex or Alucobond for a sea photograph?', 'Perspex deepens blues and light but reflects; matte Alucobond is quieter and suits very bright rooms.'],
        ['Are the photographs cropped to fit a size?', 'No. Every photograph is printed in its complete original frame.'],
      ],
    },
  },
  sunset: {
    slug: 'sunset-wall-art',
    he: {
      title: 'תמונות שקיעה לסלון — צילומי שקיעה מקוריים',
      seoTitle: 'תמונות שקיעה לסלון | צילומי שקיעה מקוריים של CHIEF',
      description: 'תמונות שקיעה לסלון: צילומי שקיעה מקוריים מחופי תל אביב מאת CHIEF, בצבעים עזים ובפריים מלא. קנבס, אלוקובונד או פרספקס, עם תעודת מקוריות.',
      intro: 'שקיעה על הים התיכון נמשכת רק כמה דקות, והצבעים משתנים כל שנייה. בעמוד הזה מרוכזים הצילומים שבהם CHIEF תפס את הדקות האלה: שמיים בוערים בכתום ובסגול, שמש שנבלעת בגלים וחול רטוב שמכפיל את האור. תמונת שקיעה מוסיפה לסלון חום וצבע, ונראית אחרת בבוקר ובערב.',
      faqs: [
        ['תמונת שקיעה מתאימה לכל סלון?', 'היא מתאימה במיוחד לחלל בגוונים ניטרליים, שבו היא הופכת למוקד הצבע. בסלון צבעוני כדאי לבחור שקיעה שהגוונים שלה חוזרים בטקסטיל או בריהוט.'],
        ['באיזה חומר הצבעים נראים הכי חזקים?', 'פרספקס מבריק מעצים את הצבעים ואת העומק. אלוקובונד מט מציג אותם רכים יותר וללא השתקפויות.'],
        ['אפשר לראות איך היצירה תיראה אצלי?', 'כן. בכל עמוד יצירה יש כפתור להצגת העבודה מעל ספה, עם השוואה בין הגדלים.'],
      ],
    },
    en: {
      title: 'Sunset Wall Art — Original Sunset Photography',
      seoTitle: 'Sunset Wall Art | Original Sunset Photography by CHIEF',
      description: 'Original sunset wall art by CHIEF: vivid Mediterranean sunsets photographed on Tel Aviv’s beaches, printed in full frame on canvas, Alucobond or Perspex with a Certificate of Authenticity.',
      intro: 'A Mediterranean sunset lasts only a few minutes, and the colours change by the second. This page gathers the photographs in which CHIEF caught those minutes: skies burning orange and violet, a sun sinking into the waves, wet sand doubling the light. A sunset photograph brings warmth and colour to a room, and looks different in the morning and the evening.',
      faqs: [
        ['Does a sunset photograph suit any living room?', 'It works especially well in a neutral room, where it becomes the focal point of colour. In a colourful room, choose a sunset whose tones repeat in your textiles or furniture.'],
        ['Which finish shows the colours most strongly?', 'Glossy Perspex intensifies colour and depth; matte Alucobond shows them softer and without reflections.'],
        ['Can I see how it will look in my room?', 'Yes. Every artwork page has a button that shows the work above a sofa, with a size comparison.'],
      ],
    },
  },
  bw: {
    slug: 'black-and-white-wall-art',
    he: {
      title: 'תמונות שחור לבן לסלון — צילום אמנותי מקורי',
      seoTitle: 'תמונות שחור לבן לסלון | צילום אמנותי מקורי של CHIEF',
      description: 'תמונות שחור לבן לסלון ולבית: צילום אמנותי מקורי של ים, עיר, ריקוד ודמות מאת CHIEF, חלקן עם נגיעת צבע אחת. קנבס, אלוקובונד או פרספקס, עם תעודת מקוריות.',
      intro: 'צילום שחור לבן מוריד את הצבע ומשאיר את האור, הצורה והתנועה. בעמוד הזה מרוכזות עבודות השחור לבן של CHIEF: ים ועננים, רחובות תל אביב, רקדניות ודמויות. בחלק מהעבודות נשאר צבע אחד בלבד, כמו פרח אדום או שמלה, שמושך את העין. תמונת שחור לבן משתלבת כמעט בכל סגנון עיצוב ולא מתנגשת עם צבעי הקיר והריהוט.',
      faqs: [
        ['למה לבחור תמונת שחור לבן לסלון?', 'היא משתלבת כמעט בכל צבע קיר וריהוט, ומתאימה במיוחד לעיצוב מודרני, מינימליסטי או תעשייתי.'],
        ['אלוקובונד או פרספקס לשחור לבן?', 'פרספקס מעמיק את השחורים ומוסיף ניגודיות. אלוקובונד מט נותן מראה גלריה שקט, בלי השתקפויות.'],
        ['האם יש עבודות שחור לבן עם צבע?', 'כן. בכמה עבודות נשאר אלמנט צבעוני אחד, כמו פרח או בגד, והוא הופך למוקד של היצירה.'],
      ],
    },
    en: {
      title: 'Black and White Wall Art — Original Fine Art Photography',
      seoTitle: 'Black and White Wall Art | Original Photography by CHIEF',
      description: 'Original black and white wall art by CHIEF: fine art photographs of sea, city, dance and the human figure, some with a single touch of colour, on canvas, Alucobond or Perspex.',
      intro: 'Black and white strips away colour and leaves light, form and movement. This page gathers CHIEF’s black and white works: sea and clouds, Tel Aviv streets, dancers and figures. In some works a single colour remains — a red flower, a dress — and draws the eye. A black and white photograph fits almost any interior style without clashing with walls or furniture.',
      faqs: [
        ['Why choose black and white wall art?', 'It works with almost any wall colour and furniture, and suits modern, minimalist and industrial interiors especially well.'],
        ['Alucobond or Perspex for black and white?', 'Perspex deepens the blacks and adds contrast; matte Alucobond gives a quiet gallery look without reflections.'],
        ['Are there black and white works with colour?', 'Yes. In several works one coloured element remains, such as a flower or a garment, and becomes the focal point.'],
      ],
    },
  },
  urban: {
    slug: 'urban-wall-art',
    he: {
      title: 'תמונות אורבניות לקיר — צילום רחוב אמנותי',
      seoTitle: 'תמונות אורבניות לקיר | צילום רחוב אמנותי של CHIEF',
      description: 'תמונות אורבניות לסלון ולמשרד: צילום רחוב אמנותי מקורי מאת CHIEF, עם השתקפויות אחרי גשם, בניינים, אופניים ואנשים בעיר. קנבס, אלוקובונד או פרספקס.',
      intro: 'צילום אורבני של CHIEF מתחיל בדרך כלל בגובה הרצפה, בשלולית שנשארה אחרי הגשם. משם הרחוב נראה כפול: הבניין, העץ והעוברים ושבים מופיעים גם הפוך במים. בעמוד הזה מרוכזות עבודות הרחוב והעיר, שמתאימות לסלון מודרני, לחדר עבודה ולמשרד.',
      faqs: [
        ['תמונה אורבנית מתאימה גם למשרד?', 'כן. צילומי רחוב ועיר מתאימים במיוחד למשרדים, לחדרי ישיבות ולמבואות. לפרויקטים יש גם עמוד ייעודי לעסקים.'],
        ['באיזה גודל להזמין לחדר עבודה?', 'מעל שולחן עבודה מתאים בדרך כלל 70 × 105 ס״מ. לקיר גדול במשרד מתאים 100 × 150 ס״מ.'],
        ['אלו צילומים מערים שונות?', 'רוב העבודות צולמו בתל אביב, בעיר שבה CHIEF מצלם כמעט כל יום.'],
      ],
    },
    en: {
      title: 'Urban Wall Art — Fine Art Street Photography',
      seoTitle: 'Urban Wall Art | Fine Art Street Photography by CHIEF',
      description: 'Original urban wall art by CHIEF: fine art street photography with after-rain reflections, buildings, bicycles and city life, on canvas, Alucobond or Perspex with a Certificate of Authenticity.',
      intro: 'CHIEF’s urban photographs usually begin at ground level, in a puddle left after the rain. From there the street appears twice: buildings, trees and passers-by are mirrored upside down in the water. This page gathers his street and city works, which suit a modern living room, a study or an office.',
      faqs: [
        ['Does urban wall art suit an office?', 'Yes. Street and city photography works especially well in offices, meeting rooms and lobbies; there is also a dedicated page for trade projects.'],
        ['What size for a study?', 'Above a desk, 70 × 105 cm usually works; for a large office wall, 100 × 150 cm.'],
        ['Where were these photographed?', 'Most works were photographed in Tel Aviv, the city CHIEF photographs almost every day.'],
      ],
    },
  },
  nude: {
    slug: 'artistic-nude-photography',
    he: {
      title: 'צילום עירום אמנותי — יצירות Fine Art מקוריות',
      seoTitle: 'צילום עירום אמנותי | יצירות Fine Art מקוריות של CHIEF',
      description: 'צילום עירום אמנותי מאת CHIEF: יצירות Fine Art מקוריות של הגוף, התנועה והאור, בים, בטבע ובחללים עירוניים. מהדורות חתומות עם תעודת מקוריות.',
      intro: 'בעבודות העירום האמנותי של CHIEF הגוף הוא חלק מהנוף: דמות במים, בין עצים, על כביש ריק או בתוך מבנה נטוש. רוב העבודות בשחור לבן, והן עוסקות בצורה, בתנועה ובאור יותר מאשר בדמות עצמה. אלה יצירות לחדר שינה, לחדר עבודה או לאספנים שמחפשים צילום אמנותי עם נוכחות.',
      faqs: [
        ['איפה מתאים לתלות צילום עירום אמנותי?', 'בחדר שינה, בחדר עבודה או בחלל פרטי בבית. עבודות שבהן הגוף משתלב בנוף מתאימות גם לסלון.'],
        ['האם אלו מהדורות מוגבלות?', 'רוב העבודות הן מהדורות מוגבלות, ממוספרות וחתומות, עם תעודת מקוריות.'],
        ['באיזה חומר להזמין?', 'אלוקובונד מט מתאים במיוחד לשחור לבן ולמראה גלריה שקט. פרספקס מוסיף עומק וניגודיות.'],
      ],
    },
    en: {
      title: 'Artistic Nude Photography — Original Fine Art Works',
      seoTitle: 'Artistic Nude Photography | Original Fine Art by CHIEF',
      description: 'Artistic nude photography by CHIEF: original fine art works about the body, movement and light, in the sea, in nature and in urban spaces. Signed editions with a Certificate of Authenticity.',
      intro: 'In CHIEF’s artistic nude works the body is part of the landscape: a figure in the water, among trees, on an empty road or inside an abandoned building. Most of the works are black and white, and they are about form, movement and light more than the figure itself. They suit a bedroom, a study, or collectors looking for fine art photography with presence.',
      faqs: [
        ['Where should artistic nude photography hang?', 'In a bedroom, a study or a private space at home; works in which the body merges with the landscape also suit a living room.'],
        ['Are these limited editions?', 'Most works are limited, numbered and signed editions with a Certificate of Authenticity.'],
        ['Which finish should I choose?', 'Matte Alucobond suits black and white and a quiet gallery look; Perspex adds depth and contrast.'],
      ],
    },
  },
};
