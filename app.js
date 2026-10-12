const standardWorks = [
['Colors Before the Storm','premium'],['After the Rain','super'],['Electric City','super'],['Stillness','accessible'],['Becoming Her','premium'],['Desire','premium'],['Just the Two of Us','premium'],['Make a Wish','premium'],['Revelation','premium'],['Captured Sun','premium'],['Two as One','super'],['Splash of Life','premium'],['What Remains','premium'],['Kaleidoscope','premium'],['Breaking Light','premium'],['Heaven Below','premium'],['Sisters of the Sun','premium'],['Free-Range Eggs','premium'],['Double Latte','premium'],['The City Beneath','accessible'],['Reaching Higher','accessible'],['Purple Rain','accessible'],['Between Two Cities','accessible'],['The Last Dance','accessible'],['Blooming Dance','super'],['Rooted in the Sky','premium'],['Becoming Fire','premium'],['The Morning After','premium'],['Burning Silence','accessible'],['Where Sky Meets Sky','accessible'],['Liquid Gold','accessible'],['The Sun Remembers','accessible'],['The Hand of the Sea','super'],['What the Sea Left Behind','accessible'],['Burning Twice','premium'],['Swan Heels','premium'],['The World Around Her','premium'],['Frida, Unframed','accessible'],['Drowning in Thought','premium']
].map((w,i)=>({id:i+1,title:w[0],category:w[1],image:`assets/site_work_${String(i+1).padStart(2,'0')}.jpg`,soldEditions:i+1===11?1:0}));
standardWorks.find(w=>w.id===2).featured={publisher:'State of Israel',reactions:'8,207',primaryLabel:'likes',secondary:'114',secondaryLabel:'comments',url:'https://www.instagram.com/p/BuZDjnPlIOV/'};
standardWorks.find(w=>w.id===16).featured={publisher:'Tel Aviv',reactions:'5,700+',primaryLabel:'likes',secondary:'85',secondaryLabel:'comments',url:'https://www.instagram.com/p/Bi7S6Axj_sR/'};
standardWorks.find(w=>w.id===19).featured={publisher:'Tel Aviv',reactions:'3,755',primaryLabel:'likes',secondary:'47',secondaryLabel:'comments',url:'https://www.instagram.com/p/BsWF7UxBfzZ/'};

const squareWorks = [
  {id:40,title:'Watching You',category:'square',image:'assets/square_watching_you.jpg',sizeMode:'fixed70'},
  {id:41,title:'The Secret Garden',category:'square',image:'assets/square_secret_garden.jpg'},
  {id:42,title:'Flower Face',category:'square',image:'assets/square_flower_face.jpg'},
  {id:43,title:"The Sea's Sign",category:'square',image:'assets/square_seas_sign.jpg',sizeMode:'fixed70'},
  {id:44,title:'Blooming Dance',category:'square',image:'assets/square_blooming_dance.jpg'}
];
const lateNightWorks = [
  {id:45,title:'Becoming Bloom',category:'late-night',image:'assets/late_becoming_bloom.jpg'},
  {id:46,title:'Defying Gravity',category:'premium',image:'assets/late_defying_gravity.jpg'},
  {id:47,title:'The Center Line',category:'late-night',image:'assets/late_center_line.jpg'},
  {id:48,title:'Uncontained',category:'late-night',image:'assets/late_uncontained.jpg'},
  {id:49,title:'Broken Reflection',category:'late-night',image:'assets/late_broken_reflection.jpg'},
  {id:50,title:'Into the Frame',category:'late-night',image:'assets/late_into_the_frame.jpg'},
  {id:51,title:'Ground Contact',category:'super',image:'assets/late_ground_contact.jpg',featured:{publisher:'Us&Art',reactions:'10,000+',shares:'1,800+',url:'https://www.facebook.com/story.php?story_fbid=491369046908435&id=100081060326915'}},
  {id:53,title:'Unveiled',category:'late-night',image:'assets/late_unveiled.jpg'},
  {id:54,title:'Carry Nothing',category:'late-night',image:'assets/late_carry_nothing.jpg'}
];
const premiumReviewWorks = [
  {id:55,title:'The Gentle Keeper',titleHe:'השומר העדין',category:'premium',image:'assets/premium_review_01.jpg'},
  {id:56,title:'The Last Leaf',titleHe:'העלה האחרון',category:'premium',image:'assets/premium_review_02.jpg'},
  {id:58,title:'Pointe of Ascent',titleHe:'עלייה על קצות האצבעות',category:'premium',image:'assets/premium_review_04.jpg'},
  {id:59,title:'Walking the Edge of Reflection',titleHe:'הולך על קצה ההשתקפות',category:'accessible',image:'assets/premium_review_05.jpg'},
  {id:60,title:'Catching the Wind',titleHe:'לתפוס את הרוח',category:'premium',image:'assets/premium_review_06.jpg'},
  {id:61,title:'Waiting for the Swell',titleHe:'מחכה לגל',category:'premium',image:'assets/premium_review_07.jpg'},
  {id:62,title:'Lace Over the Sea',titleHe:'תחרה מעל הים',category:'premium',image:'assets/premium_review_08.jpg'},
  {id:63,title:'Guardian of the Shore',titleHe:'שומר החוף',category:'premium',image:'assets/premium_review_09.jpg'},
  {id:64,title:'The Last One on the Beach',titleHe:'האחרונה על החוף',category:'premium',image:'assets/premium_review_11.jpg'},
  {id:65,title:'Are You Talking to Me?',titleHe:'אתה מדבר אליי?',category:'super',image:'assets/premium_review_12.jpg'},
  {id:66,title:'Sky on Fire',titleHe:'שמיים בוערים',category:'premium',image:'assets/premium_review_13.jpg'},
  {id:67,title:'Learning to Fly',category:'premium',image:'assets/premium_review_14.jpg'},
  {id:68,title:'Woven Air',titleHe:'אוויר ארוג',category:'premium',image:'assets/premium_review_15.jpg'},
  {id:69,title:'Roots in the Tide',titleHe:'שורשים בגאות',category:'premium',image:'assets/premium_review_16.jpg'},
  {id:70,title:'Foam and Lights',titleHe:'קצף ואורות',category:'premium',image:'assets/premium_review_18.jpg'},
  {id:71,title:'Breathe',titleHe:'לנשום',category:'late-night',image:'assets/premium_review_19.jpg'},
  {id:72,title:'A Thousand Shells',titleHe:'אלף צדפים',category:'premium',image:'assets/premium_review_20.jpg'},
  {id:73,title:'Heart in the Sky',titleHe:'לב בשמיים',category:'premium',image:'assets/premium_review_21.jpg'},
  {id:74,title:'Upside Down Grace',titleHe:'חן הפוך',category:'late-night',image:'assets/premium_review_22.jpg'},
  {id:75,title:'Second Nature',category:'premium',image:'assets/premium_review_23.jpg'},
  {id:76,title:'Rooted in Light',category:'premium',image:'assets/premium_review_24.jpg'},
  {id:77,title:'Balance',category:'premium',image:'assets/premium_review_25.jpg'},
  {id:78,title:'It Dreamed the City Awake',titleHe:'העיר התעוררה מתוך חלום',category:'premium',image:'assets/premium_review_26.jpg'}
];
const newlyCuratedWorks = [
  {id:79,title:'The Dog Knows the Way',titleHe:'הכלב יודע את הדרך',category:'premium',image:'assets/the-dog-knows-the-way.jpg'},
  {id:80,title:'Two of a Kind',titleHe:'שניים מאותו סוג',category:'premium',image:'assets/two-of-a-kind.jpg'},
  {id:82,title:'The Last Stop of Autumn',titleHe:'התחנה האחרונה של הסתיו',category:'accessible',image:'assets/the-last-stop-of-autumn.jpg'},
  {id:83,title:'The Sky Threw First',titleHe:'השמיים זרקו ראשונים',category:'accessible',image:'assets/the-sky-threw-first.jpg'},
  {id:84,title:'Where Colors Are Born',titleHe:'המקום שבו צבעים נולדים',category:'premium',image:'assets/where-colors-are-born.jpg'},
  {id:85,title:"The Sun's Children",titleHe:'ילדי השמש',category:'premium',image:'assets/the-suns-children.jpg'},
  {id:86,title:'Strangers Above, Twins Below',titleHe:'זרים למעלה, תאומים למטה',category:'premium',image:'assets/strangers-above-twins-below.jpg'},
  {id:87,title:'One Order, Two Addresses',titleHe:'הזמנה אחת, שתי כתובות',category:'premium',image:'assets/one-order-two-addresses.jpg'},
  {id:88,title:'Night Waits Above',titleHe:'הלילה מחכה למעלה',category:'accessible',image:'assets/night-waits-above.jpg'},
  {id:89,title:'No One Else Was Listening',titleHe:'אף אחד אחר לא הקשיב',category:'accessible',image:'assets/no-one-else-was-listening.jpg'},
  {id:90,title:'The Sea Kept the Light On',titleHe:'הים השאיר את האור דולק',category:'accessible',image:'assets/the-sea-kept-the-light-on.jpg'},
  {id:91,title:'When the Water Burned',titleHe:'כשהמים בערו',category:'accessible',image:'assets/when-the-water-burned.jpg'},
  {id:92,title:'The Dog Who Owned the Sky',titleHe:'הכלב שהשמיים היו שלו',category:'premium',image:'assets/the-dog-who-owned-the-sky.jpg'},
  {id:93,title:'The Park Grew Downward',titleHe:'הפארק צמח כלפי מטה',category:'accessible',image:'assets/the-park-grew-downward.jpg'}
];
const septemberCuratedWorks = [
  {id:94,title:'Dangerous Curves Ahead',titleHe:'עיקולים מסוכנים לפנייך',category:'late-night',image:'assets/dangerous-curves-ahead.jpg'},
  {id:95,title:'The Only Witness',titleHe:'העד היחיד',category:'premium',image:'assets/the-only-witness.jpg'},
  {id:96,title:'The Fall — I/III',titleHe:'הנפילה — I/III',series:'The Pecking Order',category:'premium',image:'assets/the-pecking-order-1-the-fall.jpg'},
  {id:97,title:'The Standoff — II/III',titleHe:'העימות — II/III',series:'The Pecking Order',category:'premium',image:'assets/the-pecking-order-2-the-standoff.jpg'},
  {id:98,title:'The Surrender — III/III',titleHe:'הכניעה — III/III',series:'The Pecking Order',category:'premium',image:'assets/the-pecking-order-3-the-surrender.jpg'},
  {id:99,title:'Bella Ciao',titleHe:'בלה צ׳או',category:'super',image:'assets/bella-ciao.jpg'},
  {id:100,title:'Three Versions of the Same City',titleHe:'שלוש גרסאות של אותה עיר',category:'accessible',image:'assets/tel-aviv-rolled-twice.jpg'},
  {id:101,title:'Morning Shift',titleHe:'משמרת בוקר',category:'accessible',image:'assets/morning-shift.jpg'},
  {id:102,title:'The Mayor of the Beach',titleHe:'ראש העיר של החוף',category:'premium',image:'assets/the-mayor-of-the-beach.jpg'},
  {id:103,title:'Mr. Sandman',titleHe:'אדון איש החול',category:'super',image:'assets/mr-sandman.jpg'},
  {id:104,title:'The Sound of Culture',titleHe:'שומעים תרבות',category:'premium',image:'assets/the-sound-of-culture.jpg'},
  {id:105,title:'Reborn',titleHe:'נולד מחדש',category:'premium',image:'assets/reborn.jpg'},
  {id:106,title:'Self-Portrait Without a Self',titleHe:'דיוקן עצמי ללא עצמי',category:'premium',image:'assets/self-portrait-without-a-self.jpg'},
  {id:107,title:'Learning to Float',titleHe:'ללמוד לרחף',category:'premium',image:'assets/learning-to-float.jpg'}
];
const newWorks = [
  {id:108,title:'Where the Road Ends',titleHe:'במקום שבו הדרך נגמרת',category:'late-night',image:'assets/work_108_where_the_road_ends.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:109,title:'The Feather That Dreamed of Flying',titleHe:'הנוצה שחלמה לעוף',category:'premium',image:'assets/work_109_the_feather_that_dreamed_of_flying.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:110,title:'Before the Fall',titleHe:'לפני הנפילה',category:'late-night',image:'assets/work_110_before_the_fall.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:111,title:'No Apologies',titleHe:'בלי להתנצל',category:'late-night',image:'assets/work_111_no_apologies.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:112,title:'The Scale of Desire',titleHe:'קנה המידה של התשוקה',category:'premium',image:'assets/work_112_the_scale_of_desire.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:113,title:'Framed by Desire',titleHe:'ממוסגרת בתשוקה',category:'late-night',image:'assets/work_113_framed_by_desire.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:114,title:'The Shape of Wind',titleHe:'צורת הרוח',category:'late-night',image:'assets/work_114_the_shape_of_wind.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:115,title:'Peace Talks',titleHe:'שיחות שלום',category:'premium',image:'assets/work_115_peace_talks.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:116,title:'A Beautiful Emergency',titleHe:'מצב חירום יפהפה',category:'late-night',image:'assets/work_116_a_beautiful_emergency.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:117,title:'Concrete Ballet',titleHe:'בלט על בטון',category:'late-night',image:'assets/work_117_concrete_ballet.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:118,title:'She Conducted the Sea',titleHe:'היא ניצחה על הים',category:'premium',image:'assets/work_118_she_conducted_the_sea.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:119,title:'The Wave Within',titleHe:'הגל שבתוכה',category:'late-night',image:'assets/work_119_the_wave_within.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:120,title:'Vanishing Pointe',titleHe:'פוינט אל האופק',category:'late-night',image:'assets/work_120_vanishing_pointe.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:121,title:'Coffee, Please',titleHe:'קפה, בבקשה',category:'square',image:'assets/work_121_coffee_please.jpg',sizes:['50 × 50 cm','75 × 75 cm']},
  {id:122,title:'Which Came First?',titleHe:'מי היה קודם?',category:'late-night',image:'assets/work_122_which_came_first.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:123,title:'Unplugged',titleHe:'מנותקת',category:'late-night',image:'assets/work_123_unplugged.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:124,title:'Face the Music',titleHe:'להתמודד עם המוזיקה',category:'late-night',image:'assets/work_124_face_the_music.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:125,title:'She Became the Shore',titleHe:'היא הפכה לחוף',category:'late-night',image:'assets/work_125_she_became_the_shore.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']}
];
const septemberSecondCuratedWorks = [
  {id:126,title:'A Garden of Her Own',titleHe:'גן משלה',category:'late-night',image:'assets/work_126_a_garden_of_her_own.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:127,title:'The Heart Is a Window',titleHe:'הלב הוא חלון',category:'premium',image:'assets/work_127_the_heart_is_a_window.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:128,title:'The City Dreamed in Fire',titleHe:'העיר חלמה באש',category:'premium',image:'assets/work_128_the_city_dreamed_in_fire.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:129,title:'A Parliament of Wings',titleHe:'פרלמנט של כנפיים',category:'premium',image:'assets/work_129_a_parliament_of_wings.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:130,title:'Double Selfie',titleHe:'פעמיים סלפי',category:'premium',image:'assets/work_130_double_selfie.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:131,title:'The Flower Knows Her Name',titleHe:'הפרח יודע את שמה',category:'late-night',image:'assets/work_131_the_flower_knows_her_name.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:132,title:'The Face She Left Behind',titleHe:'הפנים שהיא השאירה מאחור',category:'late-night',image:'assets/work_132_the_face_she_left_behind.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:133,title:'Before the Rooster Crows',titleHe:'לפני קריאת התרנגול',category:'late-night',image:'assets/work_133_before_the_rooster_crows.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:134,title:'She Spoke in Sunflowers',titleHe:'היא דיברה בחמניות',category:'late-night',image:'assets/work_134_she_spoke_in_sunflowers.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:135,title:'Between Two Skies',titleHe:'בין שני שמיים',category:'premium',image:'assets/work_135_between_two_skies.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:136,title:'The Sun on a Leash',titleHe:'השמש ברצועה',category:'premium',image:'assets/work_136_the_sun_on_a_leash.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:137,title:'Wrong Turn, Perfect Beach',titleHe:'פנייה לא נכונה, חוף מושלם',category:'accessible',image:'assets/work_137_the_getaway_car.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:138,title:'Right on the Wave',titleHe:'בדיוק על הגל',category:'premium',image:'assets/work_138_right_on_the_wave.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:139,title:'A Dress for the End of the World',titleHe:'שמלה לסוף העולם',category:'premium',image:'assets/work_139_a_dress_for_the_end_of_the_world.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:140,title:'The Four Elements',titleHe:'ארבעת היסודות',category:'premium',image:'assets/work_140_the_four_elements.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:141,title:'The Sun Rises on the Border',titleHe:'השמש זורחת על הגבול',category:'premium',image:'assets/work_141_the_sun_rises_on_the_border.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:142,title:'The Smoking Cloud',titleHe:'הענן המעשן',category:'premium',image:'assets/work_142_the_smoking_cloud.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:143,title:'Two Wheels, Two Worlds',titleHe:'שני גלגלים, שני עולמות',category:'premium',image:'assets/work_143_two_wheels_two_worlds.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:144,title:'Drinking the Sunset Twice',titleHe:'שותים את השקיעה פעמיים',category:'premium',image:'assets/work_144_drinking_the_sunset_twice.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:145,title:'The Final Drop of Day',titleHe:'הטיפה האחרונה של היום',category:'premium',image:'assets/work_145_the_final_drop_of_day.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:146,title:'Too Many Ways to Leave',titleHe:'יותר מדי דרכים לעזוב',category:'premium',image:'assets/work_146_too_many_ways_to_leave.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:147,title:'Clouds with Fire in Their Veins',titleHe:'עננים עם אש בעורקים',category:'premium',image:'assets/work_147_clouds_with_fire_in_their_veins.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:149,title:'The Bride of No One',titleHe:'הכלה של אף אחד',category:'premium',image:'assets/work_149_the_bride_of_no_one.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:150,title:'The Sky Left the Door Open',titleHe:'השמיים השאירו את הדלת פתוחה',category:'premium',image:'assets/work_150_the_sky_left_the_door_open.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']}
];
const thirdCuratedWorks = [
  {id:151,title:'The Flight She Missed',titleHe:'הטיסה שהיא פספסה',category:'late-night',image:'assets/work_151_the_flight_she_missed.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:152,title:'The Mirror Chose Her',titleHe:'המראה בחרה בה',category:'premium',image:'assets/work_152_the_mirror_chose_her.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:153,title:'Lost in Reflection',titleHe:'אבודה בהשתקפות',category:'premium',image:'assets/work_153_lost_in_reflection.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:154,title:'Between Then and Now',titleHe:'בין אז לעכשיו',category:'accessible',image:'assets/work_154_dead_end.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:155,title:'The Ocean Read My Mind',titleHe:'האוקיינוס קרא את מחשבותיי',category:'square',image:'assets/work_155_the_ocean_read_my_mind.jpg',sizes:['50 × 50 cm','70 × 70 cm','100 × 100 cm']},
  {id:156,title:'Dress Code: Demolition',titleHe:'קוד לבוש: הריסה',category:'late-night',image:'assets/work_156_dress_code_demolition.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:157,title:'Split Decision',titleHe:'החלטה חצויה',category:'late-night',image:'assets/work_157_split_decision.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:158,title:'Behind the Curtain — I/III',titleHe:'מאחורי המסך — I/III',series:"The Sea’s Standing Ovation",category:'late-night',image:'assets/work_158_behind_the_curtain.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:159,title:'Center Stage — II/III',titleHe:'מרכז הבמה — II/III',series:"The Sea’s Standing Ovation",category:'late-night',image:'assets/work_159_center_stage.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:160,title:'The Final Bow — III/III',titleHe:'הקידה האחרונה — III/III',series:"The Sea’s Standing Ovation",category:'late-night',image:'assets/work_160_the_final_bow.jpg',sizes:['50 × 50 cm','75 × 75 cm','100 × 100 cm']},
  {id:161,title:'The Rain Left One Color Behind',titleHe:'הגשם השאיר צבע אחד מאחור',category:'premium',image:'assets/work_161_rain_check.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:162,title:'Between Two Gravities',titleHe:'בין שני כוחות משיכה',category:'super',image:'assets/work_162_between_two_gravities.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:163,title:'Come Closer',titleHe:'התקרבי',category:'late-night',image:'assets/work_163_come_closer.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:164,title:'The Shoreline Dancer',titleHe:'רקדנית קו החוף',category:'premium',image:'assets/work_164_the_shoreline_dancer.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:165,title:'She Moved the Mountain',titleHe:'היא הזיזה את ההר',category:'premium',image:'assets/work_165_she_moved_the_mountain.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:166,title:'Sand en Pointe',titleHe:'חול על קצות האצבעות',category:'premium',image:'assets/work_166_sand_en_pointe.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:167,title:'Tulip Eclipse',titleHe:'ליקוי צבעוני',category:'premium',image:'assets/work_167_tulip_eclipse.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:168,title:'Branches in Motion',titleHe:'ענפים בתנועה',category:'premium',image:'assets/work_168_branches_in_motion.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:169,title:'Red Weather Warning',titleHe:'אזהרת מזג אוויר אדומה',category:'late-night',image:'assets/work_169_red_weather_warning.jpg',sizes:['45 × 60 cm','60 × 80 cm','90 × 120 cm']},
  {id:170,title:'Pas de Fleur',titleHe:'ריקוד הפרח',category:'square',image:'assets/work_170_pas_de_fleur.jpg',sizes:['50 × 50 cm','70 × 70 cm','100 × 100 cm']}
];
const fourthCuratedWorks = [
  {id:171,title:'The Game Goes On',titleHe:'המשחק נמשך',category:'premium',image:'assets/work_171_the_game_goes_on.jpg'},
  {id:172,title:'They Never Looked Down',titleHe:'הם מעולם לא הביטו מטה',category:'accessible',image:'assets/work_172_they_never_looked_down.jpg'},
  {id:173,title:'The Last Parking Lot',titleHe:'מגרש החניה האחרון',category:'accessible',image:'assets/work_173_the_last_parking_lot.jpg'},
  {id:174,title:'The Reflection Went First',titleHe:'ההשתקפות הלכה ראשונה',category:'accessible',image:'assets/work_174_the_reflection_went_first.jpg'},
  {id:175,title:'Hope, Barely Visible',titleHe:'תקווה, כמעט בלתי נראית',category:'accessible',image:'assets/work_175_hope_barely_visible.jpg'},
  {id:176,title:'One Rider, Two Destinations',titleHe:'רוכב אחד, שני יעדים',category:'premium',image:'assets/work_176_one_rider_two_destinations.jpg'},
  {id:177,title:'The City Walked Between Them',titleHe:'העיר הלכה ביניהם',category:'accessible',image:'assets/work_177_the_city_walked_between_them.jpg'},
  {id:178,title:'The Balcony Was Watching',titleHe:'המרפסת התבוננה',category:'premium',image:'assets/work_178_the_balcony_was_watching.jpg'},
  {id:179,title:'A Shortcut to the Underworld',titleHe:'קיצור דרך לעולם התחתון',category:'accessible',image:'assets/work_179_a_shortcut_to_the_underworld.jpg'},
  {id:180,title:'The City Never Knew It Was Being Watched',titleHe:'העיר מעולם לא ידעה שצופים בה',category:'accessible',image:'assets/work_180_the_city_never_knew_it_was_being_watched.jpg'},
  {id:181,title:'A Million Pieces of Heaven',titleHe:'מיליון חתיכות של גן עדן',category:'accessible',image:'assets/work_181_a_million_pieces_of_heaven.jpg'},
  {id:182,title:'The Past Rode Beneath Him',titleHe:'העבר רכב תחתיו',category:'accessible',image:'assets/work_182_the_past_rode_beneath_him.jpg'},
  {id:183,title:'Where Every Story Meets',titleHe:'המקום שבו כל סיפור נפגש',category:'accessible',image:'assets/work_183_where_every_story_meets.jpg'},
  {id:184,title:'Purple in a Yellow Dream',titleHe:'סגול בחלום צהוב',category:'accessible',image:'assets/work_184_purple_in_a_yellow_dream.jpg'},
  {id:185,title:'Where Green Met Yellow',titleHe:'המקום שבו ירוק פגש צהוב',category:'accessible',image:'assets/work_185_where_green_met_yellow.jpg'},
  {id:186,title:'The Rain Found the Heart of the City',titleHe:'הגשם מצא את לב העיר',category:'premium',image:'assets/work_186_the_rain_found_the_heart_of_the_city.jpg'},
  {id:187,title:'Tel Aviv Returned the Shot',titleHe:'תל אביב החזירה את המכה',category:'premium',image:'assets/work_187_tel_aviv_returned_the_shot.jpg'},
  {id:188,title:'Two Centuries, One Puddle',titleHe:'שתי מאות, שלולית אחת',category:'accessible',image:'assets/work_188_two_centuries_one_puddle.jpg'},
  {id:189,title:'He Crossed Before the Light Arrived',titleHe:'הוא חצה לפני שהאור הגיע',category:'premium',image:'assets/work_189_he_crossed_before_the_light_arrived.jpg'},
  {id:190,title:'They Rode Above the Architecture',titleHe:'הם רכבו מעל האדריכלות',category:'accessible',image:'assets/work_190_they_rode_above_the_architecture.jpg'},
  {id:191,title:'A Thousand Lives in One Puddle',titleHe:'אלף חיים בשלולית אחת',category:'premium',image:'assets/work_191_a_thousand_lives_in_one_puddle.jpg'},
  {id:192,title:'The Rain Dreamed of Being Inside',titleHe:'הגשם חלם להיות בפנים',category:'premium',image:'assets/work_192_the_rain_dreamed_of_being_inside.jpg'}
];
const latestWorks = [
  {id:193,title:'Reflections. Served Daily.',category:'premium',image:'assets/ED35DC73-61CF-4FB6-89FE-E9BA2A43AFF9.jpeg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']}
];
const paperConfig=globalThis.chiefPaperEditionData;
const paperWorks=paperConfig.works.map(w=>({...w,category:'paper',sizes:paperConfig.sizes,paperDrop:true}));
const paperCloseDate=new Date(paperConfig.closesAt);
const paperOpenDate=new Date(Date.UTC(paperCloseDate.getUTCFullYear(),paperCloseDate.getUTCMonth()-1,paperCloseDate.getUTCDate()));
const paperDays=Math.round((Date.UTC(paperCloseDate.getUTCFullYear(),paperCloseDate.getUTCMonth(),paperCloseDate.getUTCDate())-paperOpenDate.getTime())/86400000);
const paperDateEn=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Jerusalem',day:'numeric',month:'long',year:'numeric'}).format(paperCloseDate);
const paperDateHe=new Intl.DateTimeFormat('he-IL',{timeZone:'Asia/Jerusalem',day:'numeric',month:'long',year:'numeric'}).format(paperCloseDate);
const paperMonthEn=new Intl.DateTimeFormat('en-US',{month:'long',timeZone:'UTC'}).format(new Date(Date.UTC(paperCloseDate.getUTCFullYear(),paperCloseDate.getUTCMonth()-1,1)));

// Historical collector sales recorded by CHIEF on 23 September 2026.
// Editions are shared across sizes and finishes, so each count is applied to the work itself.
const soldEditionCounts={
  1:1, 2:3, 9:1, 12:5, 13:3, 14:4, 16:6, 17:3, 25:1, 33:1,
  36:2, 37:1, 39:1, 51:2, 55:3, 60:1, 62:2, 63:3, 65:2, 66:1,
  67:3, 75:3, 76:1, 78:3, 79:3, 80:1, 85:2, 92:2
};
// Visual descriptions reviewed against the original photographs; room suggestions are editorial.
const discoveryCopy={
  "167": {"en": "A woman in a red dress stands in the shallow water beside a giant red tulip at sunset, both reflected in the calm sea.", "he": "אישה בשמלה אדומה עומדת במים הרדודים לצד צבעוני אדום ענק בשקיעה, ושניהם משתקפים בים השקט.", "roomEn": "For a bedroom, a dressing room or a feminine living room.", "roomHe": "לחדר שינה, לחדר הלבשה או לסלון נשי."},
  "169": {"en": "A woman in a flowing red dress stands on a rock by the sea holding a transparent umbrella shaped like red lips, in a black-and-white world.", "he": "אישה בשמלה אדומה זורמת עומדת על סלע ליד הים ומחזיקה מטרייה שקופה בצורת שפתיים אדומות, בעולם בשחור־לבן.", "roomEn": "A bold work for a dressing room, a boutique or a bedroom.", "roomHe": "עבודה נועזת לחדר הלבשה, לבוטיק או לחדר שינה."},
  "170": {"en": "A dancer's silhouette rests on the stem of a giant pink lily planted in the sand, in a black-and-white seaside scene.", "he": "צללית של רקדנית נשענת על גבעול של שושן ורוד ענק שנטוע בחול, בתמונת חוף בשחור־לבן.", "roomEn": "For a bedroom, a girls' room or a dance studio.", "roomHe": "לחדר שינה, לחדר של נערה או לסטודיו למחול."},
  "171": {"en": "A flock of pigeons bursts up from the beach sand into a blue and golden sky, wings everywhere.", "he": "להקת יונים פורצת מחול החוף אל שמיים כחולים וזהובים, כנפיים לכל עבר.", "roomEn": "A lively work for a living room, an office or a children's room.", "roomHe": "עבודה מלאת חיים לסלון, למשרד או לחדר ילדים."},
  "172": {"en": "Pedestrians cross a white-building street corner after the rain, never noticing their reflections in the puddle at their feet.", "he": "הולכי רגל חוצים פינת רחוב עם בניינים לבנים אחרי הגשם, ולא שמים לב להשתקפויות שלהם בשלולית שלמרגלותיהם.", "roomEn": "For a hallway, an office or an urban living room.", "roomHe": "למסדרון, למשרד או לסלון אורבני."},
  "173": {"en": "A row of white swan pedal boats waits on a calm river under a blue sky full of clouds, all mirrored in the water.", "he": "שורה של סירות פדלים לבנות בצורת ברבור מחכה על נהר שקט תחת שמיים כחולים מלאי עננים, והכול משתקף במים.", "roomEn": "For a children's room, a family living room or a calm hallway.", "roomHe": "לחדר ילדים, לסלון משפחתי או למסדרון רגוע."},
  "174": {"en": "A man walks through a park of old twisting trees after the rain, and the puddle in front of him reflects the whole scene in black and white.", "he": "גבר הולך בגן של עצים ותיקים ומפותלים אחרי הגשם, והשלולית שלפניו משקפת את כל התמונה בשחור־לבן.", "roomEn": "For a study, a hallway or a monochrome living room.", "roomHe": "לחדר עבודה, למסדרון או לסלון מונוכרומטי."},
  "175": {"en": "A faint rainbow appears over the sea and the city towers after a storm, between grey clouds and golden sand.", "he": "קשת חיוורת מופיעה מעל הים ומגדלי העיר אחרי סערה, בין עננים אפורים לחול זהוב.", "roomEn": "A hopeful work for a bedroom, a children's room or a living room.", "roomHe": "עבודה מלאת תקווה לחדר שינה, לחדר ילדים או לסלון."},
  "176": {"en": "A cyclist rides along a city street of glass and green trees, and his reflection in the puddle seems to ride to a different place.", "he": "רוכב אופניים נוסע ברחוב עירוני של זכוכית ועצים ירוקים, וההשתקפות שלו בשלולית נראית נוסעת למקום אחר.", "roomEn": "For an office, a hallway or an urban living room.", "roomHe": "למשרד, למסדרון או לסלון אורבני."},
  "177": {"en": "Two people walk along the wet promenade by the beach, one in red and one carrying a yellow bag, both reflected in the water with the towers behind them.", "he": "שני אנשים הולכים בטיילת הרטובה ליד החוף, אחד באדום ואחת עם תיק צהוב, ושניהם משתקפים במים עם המגדלים מאחוריהם.", "roomEn": "For a living room, an entrance or a beach house.", "roomHe": "לסלון, לכניסה או לבית ליד הים."},
  "178": {"en": "A white house with balconies stands on a quiet street corner, and a cyclist passes as the whole building is mirrored in a puddle.", "he": "בית לבן עם מרפסות עומד בפינת רחוב שקטה, ורוכב אופניים חולף בזמן שכל הבניין משתקף בשלולית.", "roomEn": "For an entrance, a living room or anyone who loves old Tel Aviv.", "roomHe": "לכניסה, לסלון או לכל מי שאוהב את תל אביב הישנה."},
  "180": {"en": "Two huge green eyes painted on a concrete wall look out at the city skyline under a dramatic cloudy sky.", "he": "שתי עיניים ירוקות ענקיות מצוירות על קיר בטון ומביטות אל קו הרקיע של העיר תחת שמיים מעוננים ודרמטיים.", "roomEn": "An urban work for a studio, an office or a young living room.", "roomHe": "עבודה אורבנית לסטודיו, למשרד או לסלון צעיר."},
  "182": {"en": "A cyclist rides past a curved old building in black and white, and the puddle below shows the building and the rider upside down.", "he": "רוכב אופניים חולף על פני בניין ישן ומעוגל בשחור־לבן, והשלולית מתחת מראה את הבניין ואת הרוכב הפוכים.", "roomEn": "For a hallway, a study or a monochrome living room.", "roomHe": "למסדרון, לחדר עבודה או לסלון מונוכרומטי."},
  "183": {"en": "People gather on a wet square beside an old clock tower and a tall Christmas tree, reflected in the stones after the rain.", "he": "אנשים מתאספים בכיכר רטובה ליד מגדל שעון ישן ועץ אשוח גבוה, ומשתקפים באבנים אחרי הגשם.", "roomEn": "For a living room, an entrance or a family home.", "roomHe": "לסלון, לכניסה או לבית משפחתי."},
  "184": {"en": "A bright yellow building with green shutters rises over a crossing, as a woman in purple pushes a stroller past it.", "he": "בניין צהוב בוהק עם תריסים ירוקים מתנשא מעל מעבר חציה, ואישה בסגול מסיעה עגלה לידו.", "roomEn": "A bold, colourful work for a living room, a kitchen or an office.", "roomHe": "עבודה נועזת וצבעונית לסלון, למטבח או למשרד."},
  "185": {"en": "Green city bikes stand at their docking station on a tree-lined street, in front of a bright yellow building.", "he": "אופניים עירוניים ירוקים עומדים בתחנת העגינה שלהם ברחוב עם עצים, מול בניין צהוב בוהק.", "roomEn": "For an office, a hallway or a young living room.", "roomHe": "למשרד, למסדרון או לסלון צעיר."},
  "186": {"en": "A colourful shopping building with glowing signs is reflected in a large puddle on a rainy evening.", "he": "בניין קניות צבעוני עם שלטים מוארים משתקף בשלולית גדולה בערב גשום.", "roomEn": "An urban work for an office, a studio or a young living room.", "roomHe": "עבודה אורבנית למשרד, לסטודיו או לסלון צעיר."},
  "187": {"en": "Beach paddle players leap on the wet sand with the Tel Aviv towers behind them, everything mirrored in the shallow water.", "he": "שחקני מטקות מזנקים על החול הרטוב ומגדלי תל אביב מאחוריהם, והכול משתקף במים הרדודים.", "roomEn": "A joyful, sporty work for a living room, a gym or a beach house.", "roomHe": "עבודה שמחה וספורטיבית לסלון, לחדר כושר או לבית ליד הים."},
  "189": {"en": "A man crosses a rainy street between an old domed building and a modern tower, reflected in a long puddle, in black and white with one red light.", "he": "גבר חוצה רחוב גשום בין בניין ישן עם כיפה למגדל מודרני, ומשתקף בשלולית ארוכה, בשחור־לבן עם אור אדום אחד.", "roomEn": "For a hallway, an office or an urban living room.", "roomHe": "למסדרון, למשרד או לסלון אורבני."},
  "190": {"en": "Cyclists ride past a tall yellow building on a green boulevard, all reflected in a puddle so the riders seem to float above the architecture.", "he": "רוכבי אופניים חולפים ליד בניין צהוב וגבוה בשדרה ירוקה, והכול משתקף בשלולית, כך שהרוכבים נראים מרחפים מעל הבניין.", "roomEn": "For an entrance, a living room or an office.", "roomHe": "לכניסה, לסלון או למשרד."},
  "191": {"en": "A busy pedestrian street of shops, trees and passers-by is reflected in a single puddle, a thousand small stories in one frame.", "he": "רחוב הולכי רגל עמוס בחנויות, עצים ועוברים ושבים משתקף בשלולית אחת, אלף סיפורים קטנים בפריים אחד.", "roomEn": "For a living room, a hallway or anyone who loves the city.", "roomHe": "לסלון, למסדרון או לכל מי שאוהב את העיר."},
  "192": {"en": "An old white building and the trees beside it are mirrored in a dark puddle under a grey sky, with a single fallen leaf floating in the water.", "he": "בניין לבן ישן והעצים שלידו משתקפים בשלולית כהה תחת שמיים אפורים, ועלה אחד שנשר צף במים.", "roomEn": "A calm work for a hallway, a study or a monochrome living room.", "roomHe": "עבודה רגועה למסדרון, לחדר עבודה או לסלון מונוכרומטי."},
  "193": {"en": "A small street kiosk with its awning and customers is reflected in a puddle on the boulevard, a daily scene of the city.", "he": "קיוסק רחוב קטן עם הסוכך והלקוחות שלו משתקף בשלולית בשדרה, סצנה יומיומית של העיר.", "roomEn": "For a kitchen, a café or a dining area.", "roomHe": "למטבח, לבית קפה או לפינת אוכל."},
  "204": {"en": "Colourful water beads glow on the wet sand at sunset, each one catching the low sun like a small marble of light.", "he": "כדורי מים צבעוניים זוהרים על החול הרטוב בשקיעה, וכל אחד תופס את השמש הנמוכה כמו גולה קטנה של אור.", "roomEn": "For a children's room, a kitchen or a happy living room.", "roomHe": "לחדר ילדים, למטבח או לסלון שמח."},
  "205": {"en": "A row of bright beach balls stands at the shoreline under a heavy grey sky, the only colour in a black-and-white scene.", "he": "שורה של כדורי חוף צבעוניים עומדת בקו המים תחת שמיים אפורים וכבדים, הצבע היחיד בתמונה בשחור־לבן.", "roomEn": "For a children's room, a lobby or a playful office.", "roomHe": "לחדר ילדים, ללובי או למשרד עם חיוך."},
  "137": {"en": "A small yellow toy car with surfboards on its roof sits in the sand in front of a lifeguard tower painted with a colourful cartoon face.", "he": "מכונית צעצוע צהובה קטנה עם גלשנים על הגג עומדת בחול מול סוכת מציל מצוירת בפרצוף מצויר וצבעוני.", "roomEn": "A happy work for a children's room, a beach house or a playroom.", "roomHe": "עבודה שמחה לחדר ילדים, לבית ליד הים או לחדר משחקים."},
  "138": {"en": "A wave rolls white onto the sand while kitesurfers fly their colourful kites over the sea under a sky of small clouds.", "he": "גל מתגלגל בלבן אל החול, וגולשי קייט מעיפים עפיפונים צבעוניים מעל הים תחת שמיים של עננים קטנים.", "roomEn": "A fresh, sporty work for a beach house, a gym or a teenager's room.", "roomHe": "עבודה רעננה וספורטיבית לבית ליד הים, לחדר כושר או לחדר של נער."},
  "140": {"en": "A piece of paper burns in bright flames on the wet sand under a stormy sky: fire, water, earth and air in one image.", "he": "פיסת נייר בוערת בלהבות עזות על החול הרטוב תחת שמיים סוערים: אש, מים, אדמה ואוויר בתמונה אחת.", "roomEn": "A striking work for a study, a living room or an office.", "roomHe": "עבודה מרשימה לחדר עבודה, לסלון או למשרד."},
  "141": {"en": "A beam of golden light cuts down through dark storm clouds over the sea, splitting the sky into darkness and fire.", "he": "קרן אור זהובה חותכת כלפי מטה דרך ענני סערה כהים מעל הים, ומפצלת את השמיים לחושך ולאש.", "roomEn": "A dramatic work for a large living-room wall.", "roomHe": "עבודה דרמטית לקיר גדול בסלון."},
  "142": {"en": "Dark clouds glow red and pink at sunset over the sea, and the whole sky is mirrored in the wet sand below.", "he": "עננים כהים זוהרים באדום ובוורוד בשקיעה מעל הים, וכל השמיים משתקפים בחול הרטוב מתחתיהם.", "roomEn": "A rich, colourful work for a living room or a bedroom.", "roomHe": "עבודה עשירה וצבעונית לסלון או לחדר שינה."},
  "143": {"en": "A tall green boulevard is reflected in a deep puddle, and a rider on a scooter appears twice, once in each world.", "he": "שדרה ירוקה וגבוהה משתקפת בשלולית עמוקה, ורוכב על קורקינט מופיע פעמיים, פעם בכל עולם.", "roomEn": "For an entrance, a hallway or a green living room.", "roomHe": "לכניסה, למסדרון או לסלון ירוק."},
  "145": {"en": "A wave breaks into white spray in the foreground as the sun sets into a fiery orange sea.", "he": "גל נשבר לרסס לבן בחזית, בזמן שהשמש שוקעת לתוך ים כתום ובוער.", "roomEn": "A vivid work for a living room, a gym or an office.", "roomHe": "עבודה חיה לסלון, לחדר כושר או למשרד."},
  "146": {"en": "A bicycle rack packed with bikes stands in front of a white city building, in sharp black and white.", "he": "מתקן אופניים מלא באופניים עומד מול בניין לבן בעיר, בשחור־לבן חד.", "roomEn": "An urban work for a hallway, an office or a young living room.", "roomHe": "עבודה אורבנית למסדרון, למשרד או לסלון צעיר."},
  "147": {"en": "Dark clouds with glowing red edges fill a deep blue sky above a golden sunset over the sea.", "he": "עננים כהים עם שוליים אדומים וזוהרים ממלאים שמיים כחולים עמוקים, מעל שקיעה זהובה בים.", "roomEn": "A powerful work for a large living-room wall.", "roomHe": "עבודה עוצמתית לקיר גדול בסלון."},
  "149": {"en": "A woman in a full white dress sits alone on a dark rock by the sea, under a heavy black-and-white sky.", "he": "אישה בשמלה לבנה ומלאה יושבת לבדה על סלע כהה ליד הים, תחת שמיים כבדים בשחור־לבן.", "roomEn": "A quiet, poetic work for a bedroom or a dressing room.", "roomHe": "עבודה שקטה ופואטית לחדר שינה או לחדר הלבשה."},
  "150": {"en": "Golden light breaks through an opening in the clouds above the sea, as if the sky had left a door open.", "he": "אור זהוב פורץ דרך פתח בעננים מעל הים, כאילו השמיים השאירו דלת פתוחה.", "roomEn": "A hopeful, calm work for a bedroom or a living room.", "roomHe": "עבודה מלאת תקווה ורוגע לחדר שינה או לסלון."},
  "151": {"en": "A nude figure reclines on the wing of an old aircraft in warm sepia tones, looking out toward the horizon.", "he": "דמות בעירום נשענת על כנף של מטוס ישן בגווני ספיה חמים, ומביטה אל האופק.", "roomEn": "An artistic nude for a private bedroom or a studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו."},
  "152": {"en": "Seen from above, a woman in an orange sweater sits on a carpet of petals holding a mirror that reflects her back to herself.", "he": "במבט מלמעלה, אישה בסוודר כתום יושבת על שטיח של עלי כותרת ומחזיקה מראה שמשקפת אותה אל עצמה.", "roomEn": "An artistic work for a bedroom or a dressing room.", "roomHe": "עבודה אמנותית לחדר שינה או לחדר הלבשה."},
  "153": {"en": "A woman sits among fallen blossoms in an orchard, and a mirror placed where her face should be shows her own legs instead.", "he": "אישה יושבת בין פריחה שנשרה במטע, ובמקום הפנים יש מראה שמראה דווקא את הרגליים שלה.", "roomEn": "A surprising work for a study or an artistic living room.", "roomHe": "עבודה מפתיעה לחדר עבודה או לסלון אמנותי."},
  "155": {"en": "A large green glass head stands on a rocky shore with water drops on its face, under a dramatic black-and-white sky.", "he": "ראש גדול מזכוכית ירוקה ניצב על חוף סלעי עם טיפות מים על הפנים, תחת שמיים דרמטיים בשחור־לבן.", "roomEn": "A contemplative work for a study or a contemporary living room.", "roomHe": "עבודה מעוררת מחשבה לחדר עבודה או לסלון עכשווי."},
  "156": {"en": "A woman in a colourful open robe leans in the doorway of a ruined building, the only colour in a black-and-white space.", "he": "אישה בחלוק צבעוני ופתוח נשענת בפתח של מבנה הרוס, הצבע היחיד בחלל בשחור־לבן.", "roomEn": "An artistic work for a dressing room or a private bedroom.", "roomHe": "עבודה אמנותית לחדר הלבשה או לחדר שינה פרטי."},
  "157": {"en": "A body is folded symmetrically inside an old green window frame, its two halves mirroring each other like a living sculpture.", "he": "גוף מקופל בסימטריה בתוך מסגרת חלון ירוקה וישנה, ושני חלקיו משקפים זה את זה כמו פסל חי.", "roomEn": "An artistic nude for a private bedroom or a studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו."},
  "158": {"en": "The first of three: a figure stands in the shallow sea behind a curtain of falling water drops, against a soft blue sky.", "he": "הראשונה מתוך שלוש: דמות עומדת בים הרדוד מאחורי וילון של טיפות מים נופלות, על רקע שמיים כחולים ורכים.", "roomEn": "Best hung as a set of three in a bedroom or a bathroom.", "roomHe": "הכי יפה כסט של שלוש בחדר שינה או בחדר רחצה."},
  "159": {"en": "The second of three: the figure raises her arms in the centre of the falling water, as if on stage.", "he": "השנייה מתוך שלוש: הדמות מרימה ידיים במרכז המים הנופלים, כאילו היא על במה.", "roomEn": "Best hung as a set of three in a bedroom or a bathroom.", "roomHe": "הכי יפה כסט של שלוש בחדר שינה או בחדר רחצה."},
  "160": {"en": "The third of three: the figure bows behind the curtain of water drops, the scene closing like the end of a performance.", "he": "השלישית מתוך שלוש: הדמות קדה מאחורי וילון טיפות המים, והתמונה נסגרת כמו סוף של הופעה.", "roomEn": "Best hung as a set of three in a bedroom or a bathroom.", "roomHe": "הכי יפה כסט של שלוש בחדר שינה או בחדר רחצה."},
  "161": {"en": "A rainy city street of old and new buildings is reflected in a long puddle, in black and white except for a single red umbrella.", "he": "רחוב עירוני גשום עם בניינים ישנים וחדשים משתקף בשלולית ארוכה, בשחור־לבן, חוץ ממטרייה אדומה אחת.", "roomEn": "For a hallway, an office or an urban living room.", "roomHe": "למסדרון, למשרד או לסלון אורבני."},
  "163": {"en": "A dancer leans low toward the camera at the waterline, one hand reaching out, her reflection below her in black and white.", "he": "רקדנית מתכופפת נמוך אל המצלמה בקו המים, יד אחת מושטת קדימה, וההשתקפות שלה מתחתיה בשחור־לבן.", "roomEn": "For a dance studio, a bedroom or a central living-room wall.", "roomHe": "לסטודיו למחול, לחדר שינה או לקיר מרכזי בסלון."},
  "164": {"en": "A dancer bends and twists on the wet shoreline with the city towers behind her, in black and white.", "he": "רקדנית מתכופפת ומתפתלת על קו החוף הרטוב, ומגדלי העיר מאחוריה, בשחור־לבן.", "roomEn": "For a dance studio, a hallway or a contemporary living room.", "roomHe": "לסטודיו למחול, למסדרון או לסלון עכשווי."},
  "165": {"en": "A dancer stretches across a huge block of rock by the sea, as if she had moved it herself, in black and white.", "he": "רקדנית נמתחת על גוש סלע ענק ליד הים, כאילו הזיזה אותו בעצמה, בשחור־לבן.", "roomEn": "A strong work for a gym, a dance studio or a living room.", "roomHe": "עבודה חזקה לחדר כושר, לסטודיו למחול או לסלון."},
  "166": {"en": "A dancer turns on the beach sand with her arms open, as people walk at the water's edge behind her, in black and white.", "he": "רקדנית מסתובבת על חול החוף בידיים פתוחות, ואנשים הולכים בקו המים מאחוריה, בשחור־לבן.", "roomEn": "For a dance studio, a girls' room or a bright living room.", "roomHe": "לסטודיו למחול, לחדר של נערה או לסלון מואר."},
  "113": {"en": "A nude figure stands far away on the beach, framed between two giant leopard-print high heels in the foreground, under warm evening light.", "he": "דמות בעירום עומדת רחוק על החוף, ממוסגרת בין שתי נעלי עקב ענקיות בהדפס נמר בחזית, באור ערב חם.", "roomEn": "An artistic nude for a dressing room or a private bedroom.", "roomHe": "עירום אמנותי לחדר הלבשה או לחדר שינה פרטי."},
  "114": {"en": "A long white fabric is lifted by the wind around a figure on the beach, taking the shape of the air itself, in black and white.", "he": "בד לבן ארוך מורם ברוח סביב דמות על החוף, ומקבל את הצורה של האוויר עצמו, בשחור־לבן.", "roomEn": "An airy artistic work for a bedroom or a studio.", "roomHe": "עבודה אמנותית ואוורירית לחדר שינה או לסטודיו."},
  "115": {"en": "Two giant gloved fists meet knuckle to knuckle on the wet sand, mirrored in the water, in black and white.", "he": "שני אגרופים ענקיים בכפפות נפגשים מפרק אל פרק על החול הרטוב ומשתקפים במים, בשחור־לבן.", "roomEn": "A bold work for a study, a gym or an office.", "roomHe": "עבודה נועזת לחדר עבודה, לחדר כושר או למשרד."},
  "117": {"en": "A ballerina rises on pointe on a concrete staircase in an abandoned building, a sheer dress around her, in black and white.", "he": "בלרינה עולה על קצות האצבעות במדרגות בטון של מבנה נטוש, שמלה שקופה סביבה, בשחור־לבן.", "roomEn": "For a dance studio, a hallway or an urban living room.", "roomHe": "לסטודיו למחול, למסדרון או לסלון אורבני."},
  "118": {"en": "A figure stands waist-deep in the sea with one arm raised like a conductor, the waves moving around her in black and white.", "he": "דמות עומדת במים עד המותניים, יד אחת מורמת כמו של מנצחת, והגלים נעים סביבה בשחור־לבן.", "roomEn": "An artistic work for a bedroom or a music room.", "roomHe": "עבודה אמנותית לחדר שינה או לחדר מוזיקה."},
  "119": {"en": "A dancer moves in the sea with her arms shaped like a wave, the water and her body flowing together in black and white.", "he": "רקדנית נעה בים וידיה מעוצבות כמו גל, והמים והגוף זורמים יחד בשחור־לבן.", "roomEn": "An artistic work for a bedroom or a dance studio.", "roomHe": "עבודה אמנותית לחדר שינה או לסטודיו למחול."},
  "120": {"en": "A nude dancer rises on pointe on a white line that disappears toward the sea, arms raised, in black and white.", "he": "רקדנית בעירום עולה על קצות האצבעות על קו לבן שנעלם לכיוון הים, ידיה מורמות, בשחור־לבן.", "roomEn": "An artistic nude for a private bedroom or a dance studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו למחול."},
  "121": {"en": "A small dog sits at a café counter with its paws on the table, as if waiting to order, while a man beside it reads his phone.", "he": "כלב קטן יושב ליד דלפק של בית קפה עם הכפות על השולחן, כאילו מחכה להזמין, וגבר לידו קורא בטלפון.", "roomEn": "A smiling work for a kitchen, a café or a dog lover's home.", "roomHe": "עבודה עם חיוך למטבח, לבית קפה או לבית של אוהבי כלבים."},
  "122": {"en": "Two metal roosters face each other across a rock by the sea, with a large egg between them, in black and white.", "he": "שני תרנגולים ממתכת עומדים זה מול זה משני צידי סלע ליד הים, וביצה גדולה ביניהם, בשחור־לבן.", "roomEn": "A playful work for a kitchen, a dining area or a children's room.", "roomHe": "עבודה משחקית למטבח, לפינת אוכל או לחדר ילדים."},
  "123": {"en": "A nude figure walks toward the sea holding a guitar by its neck, in soft black and white.", "he": "דמות בעירום הולכת לכיוון הים ומחזיקה גיטרה בצוואר שלה, בשחור־לבן רך.", "roomEn": "An artistic nude for a music room or a private bedroom.", "roomHe": "עירום אמנותי לחדר מוזיקה או לחדר שינה פרטי."},
  "124": {"en": "A nude figure sits on an empty road holding a guitar in front of her face, the white road lines leading to the horizon.", "he": "דמות בעירום יושבת על כביש ריק ומחזיקה גיטרה מול הפנים, וקווי הכביש הלבנים מובילים אל האופק.", "roomEn": "An artistic nude for a music room or a private bedroom.", "roomHe": "עירום אמנותי לחדר מוזיקה או לחדר שינה פרטי."},
  "125": {"en": "Seen from above, a figure lies on the sand along the line where wet and dry meet, becoming part of the shore. Black and white.", "he": "במבט מלמעלה, דמות שוכבת על החול לאורך הקו שבו הרטוב והיבש נפגשים, והופכת לחלק מהחוף. בשחור־לבן.", "roomEn": "An artistic nude for a private bedroom or a minimal studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו מינימליסטי."},
  "127": {"en": "A figure sits on the beach holding a heart-shaped mirror in front of her body, which reflects the sea behind her.", "he": "דמות יושבת על החוף ומחזיקה מראה בצורת לב מול הגוף, והמראה משקפת את הים שמאחוריה.", "roomEn": "A romantic artistic work for a bedroom.", "roomHe": "עבודה אמנותית ורומנטית לחדר שינה."},
  "128": {"en": "A glowing orange cloud rises over the Tel Aviv hotel line against a deep blue sky, as the beach below catches the last light.", "he": "ענן כתום זוהר עולה מעל קו המלונות של תל אביב על רקע שמיים כחולים עמוקים, והחוף שמתחת תופס את האור האחרון.", "roomEn": "A vivid work for a living room or an office.", "roomHe": "עבודה חיה וצבעונית לסלון או למשרד."},
  "130": {"en": "Old trees on a city boulevard are mirrored in a large puddle, so a walker and a cyclist appear twice, once above and once below.", "he": "עצים ותיקים בשדרה עירונית משתקפים בשלולית גדולה, כך שהולכת רגל ורוכב אופניים מופיעים פעמיים, למעלה ולמטה.", "roomEn": "For an entrance, a hallway or a green living room.", "roomHe": "לכניסה, למסדרון או לסלון ירוק."},
  "131": {"en": "A young woman in a straw hat holds a sunflower to her face, looking straight at the camera, in black and white.", "he": "אישה צעירה בכובע קש מחזיקה חמנייה צמוד לפנים ומביטה ישר למצלמה, בשחור־לבן.", "roomEn": "An intimate artistic portrait for a bedroom or a dressing room.", "roomHe": "פורטרט אמנותי ואינטימי לחדר שינה או לחדר הלבשה."},
  "132": {"en": "A large green glass face stands in the shallow sea, while a nude figure walks into the water behind it.", "he": "פנים גדולות מזכוכית ירוקה ניצבות בים הרדוד, ודמות בעירום נכנסת למים מאחוריהן.", "roomEn": "An artistic nude for a private bedroom or a studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו."},
  "133": {"en": "Two metal roosters with bright red combs stand on a rock by the sea, mirrored in the water, the only colour in a black-and-white scene.", "he": "שני תרנגולים ממתכת עם כרבולות אדומות בוהקות עומדים על סלע ליד הים ומשתקפים במים, הצבע היחיד בתמונה בשחור־לבן.", "roomEn": "For a kitchen, a dining area or a children's room.", "roomHe": "למטבח, לפינת אוכל או לחדר ילדים."},
  "134": {"en": "A woman in a straw hat holds a yellow sunflower close among the flowers, the only colour in a black-and-white field.", "he": "אישה בכובע קש מחזיקה חמנייה צהובה קרוב אליה בין הפרחים, הצבע היחיד בשדה בשחור־לבן.", "roomEn": "An intimate artistic work for a bedroom.", "roomHe": "עבודה אמנותית ואינטימית לחדר שינה."},
  "136": {"en": "A yellow buoy tied to a rope rests in the shallow water at sunset, like the sun itself held on a leash.", "he": "מצוף צהוב קשור בחבל שוכב במים הרדודים בשקיעה, כמו השמש עצמה מוחזקת ברצועה.", "roomEn": "A warm, witty work for a living room, a beach house or an office.", "roomHe": "עבודה חמה ושנונה לסלון, לבית ליד הים או למשרד."},
  "90": {"en": "The sun sets behind a small sailboat on a deep green sea, and its golden path runs across the waves and onto the wet sand.", "he": "השמש שוקעת מאחורי סירת מפרש קטנה על ים ירוק עמוק, והשביל הזהוב שלה נמתח על הגלים עד החול הרטוב.", "roomEn": "A warm, calm work for a bedroom or a living room.", "roomHe": "עבודה חמה ורגועה לחדר שינה או לסלון."},
  "91": {"en": "A blazing red and orange sky is reflected in the shallow water along the shore, as if the sea itself were on fire.", "he": "שמיים בוערים באדום ובכתום משתקפים במים הרדודים לאורך החוף, כאילו הים עצמו בוער.", "roomEn": "A dramatic work for a large living-room wall.", "roomHe": "עבודה דרמטית לקיר גדול בסלון."},
  "92": {"en": "A tiny dog stands on the horizon at sunset under a vast sky of dark clouds, the whole sky mirrored in the wet sand in front of it.", "he": "כלב קטנטן עומד על האופק בשקיעה תחת שמיים עצומים של עננים כהים, וכל השמיים משתקפים בחול הרטוב שלפניו.", "roomEn": "For a living room, a bedroom or a dog lover's home.", "roomHe": "לסלון, לחדר שינה או לבית של אוהבי כלבים."},
  "93": {"en": "Old trees and a quiet city park are mirrored upside down in a large puddle, so the park seems to grow down into the ground.", "he": "עצים ותיקים וגן עירוני שקט משתקפים הפוך בשלולית גדולה, כך שהגן נראה צומח כלפי מטה אל תוך האדמה.", "roomEn": "For an entrance, a hallway or a green living room.", "roomHe": "לכניסה, למסדרון או לסלון ירוק."},
  "94": {"en": "A nude figure walks along a yellow road line beside a 'dangerous curves' sign in the desert, in black and white with a wink.", "he": "דמות בעירום הולכת לאורך קו צהוב בכביש, לצד שלט 'סיבובים מסוכנים' במדבר, בשחור־לבן ועם קריצה.", "roomEn": "An artistic nude with humour for a private room or a studio.", "roomHe": "עירום אמנותי עם הומור לחדר פרטי או לסטודיו."},
  "95": {"en": "A small dog stands beside a large doll's head lying in the sand, under a bright black-and-white sky. Curious and a little mysterious.", "he": "כלב קטן עומד ליד ראש בובה גדול ששוכב בחול, תחת שמיים בהירים בשחור־לבן. סקרני וקצת מסתורי.", "roomEn": "For a study, a quirky living room or a dog lover's home.", "roomHe": "לחדר עבודה, לסלון עם הומור או לבית של אוהבי כלבים."},
  "96": {"en": "The first of three: two colourful metal roosters on the shoreline, and one of them has fallen into the shallow foam.", "he": "הראשונה מתוך שלוש: שני תרנגולים צבעוניים ממתכת על קו החוף, ואחד מהם נפל לתוך הקצף הרדוד.", "roomEn": "Best hung as a set of three in a kitchen, a dining area or a children's room.", "roomHe": "הכי יפה כסט של שלוש במטבח, בפינת אוכל או בחדר ילדים."},
  "97": {"en": "The second of three: the two metal roosters stand face to face on the wet sand, under a blue sky full of clouds.", "he": "השנייה מתוך שלוש: שני התרנגולים ממתכת עומדים פנים אל פנים על החול הרטוב, תחת שמיים כחולים מלאי עננים.", "roomEn": "Best hung as a set of three in a kitchen, a dining area or a children's room.", "roomHe": "הכי יפה כסט של שלוש במטבח, בפינת אוכל או בחדר ילדים."},
  "98": {"en": "The third of three: one metal rooster stands tall while the other bows into the foam at the water's edge.", "he": "השלישית מתוך שלוש: תרנגול ממתכת אחד עומד זקוף, והשני מתכופף לתוך הקצף בקו המים.", "roomEn": "Best hung as a set of three in a kitchen, a dining area or a children's room.", "roomHe": "הכי יפה כסט של שלוש במטבח, בפינת אוכל או בחדר ילדים."},
  "100": {"en": "A domed old building, a glass tower and the street between them are reflected in a puddle, three versions of one city in one frame.", "he": "בניין ישן עם כיפה, מגדל זכוכית והרחוב ביניהם משתקפים בשלולית, שלוש גרסאות של אותה עיר בפריים אחד.", "roomEn": "For a living room, an office or anyone who loves the city.", "roomHe": "לסלון, למשרד או לכל מי שאוהב את העיר."},
  "101": {"en": "A lifeguard tower stands over the beach early in the morning, with sea foam in the foreground and a clear blue sky.", "he": "סוכת מציל עומדת מעל החוף מוקדם בבוקר, עם קצף ים בחזית ושמיים כחולים צלולים.", "roomEn": "A fresh work for a beach house, a children's room or a bright living room.", "roomHe": "עבודה רעננה לבית ליד הים, לחדר ילדים או לסלון מואר."},
  "102": {"en": "A small dog in a red harness stands proudly at the waterline of a city beach, reflected at full height in the wet sand.", "he": "כלב קטן ברתמה אדומה עומד בגאווה על קו המים בחוף עירוני, ומשתקף לכל גובהו בחול הרטוב.", "roomEn": "For a family living room, a children's room or a dog lover's home.", "roomHe": "לסלון משפחתי, לחדר ילדים או לבית של אוהבי כלבים."},
  "105": {"en": "A woman in an orange sweater curls on the earth among fallen blossoms, under green trees and a deep blue sky.", "he": "אישה בסוודר כתום מתכרבלת על האדמה בין פריחה שנשרה, תחת עצים ירוקים ושמיים כחולים עמוקים.", "roomEn": "For a bedroom, a meditation corner or a calm living room.", "roomHe": "לחדר שינה, לפינת מדיטציה או לסלון רגוע."},
  "106": {"en": "A figure lies on a ground covered with petals, and a mirror where the face should be reflects the earth instead.", "he": "דמות שוכבת על קרקע מכוסה עלי כותרת, ובמקום הפנים יש מראה שמשקפת את האדמה.", "roomEn": "A thought-provoking work for a study or an artistic living room.", "roomHe": "עבודה מעוררת מחשבה לחדר עבודה או לסלון אמנותי."},
  "107": {"en": "A figure floats on a paddleboard in a shallow urban pool, in black and white, with modern buildings around.", "he": "דמות צפה על גלשן חתירה בבריכה עירונית רדודה, בשחור־לבן, ומסביב בניינים מודרניים.", "roomEn": "For a studio, an office or a contemporary living room.", "roomHe": "לסטודיו, למשרד או לסלון עכשווי."},
  "108": {"en": "Three figures walk hand in hand down a winding desert road toward the horizon, under a wide black-and-white sky.", "he": "שלוש דמויות הולכות יד ביד בכביש מדבר מתפתל לכיוון האופק, תחת שמיים רחבים בשחור־לבן.", "roomEn": "An artistic nude for a private room or a studio.", "roomHe": "עירום אמנותי לחדר פרטי או לסטודיו."},
  "109": {"en": "A single feather stands upright on the sand while birds fly across the sky above it, in black and white.", "he": "נוצה בודדת עומדת זקופה על החול, וציפורים עפות בשמיים מעליה, בשחור־לבן.", "roomEn": "A quiet, poetic work for a bedroom, a reading corner or a children's room.", "roomHe": "עבודה שקטה ופואטית לחדר שינה, לפינת קריאה או לחדר ילדים."},
  "110": {"en": "A nude figure is curled into the twisted branches of an old tree, in black and white, between hiding and falling.", "he": "דמות בעירום מכורבלת בתוך הענפים המפותלים של עץ ותיק, בשחור־לבן, בין הסתתרות לנפילה.", "roomEn": "An artistic nude for a private bedroom or a studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו."},
  "111": {"en": "A nude woman crouches in high boots against a peeling wall, her back to the camera, in black and white.", "he": "אישה בעירום כורעת במגפיים גבוהים מול קיר מתקלף, וגבה למצלמה, בשחור־לבן.", "roomEn": "An artistic nude for a private bedroom or a studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו."},
  "112": {"en": "A woman stands at the water's edge between two giant striped high heels, all reflected in the calm sea under warm light.", "he": "אישה עומדת בקו המים בין שתי נעלי עקב ענקיות ומפוספסות, והכול משתקף בים השקט באור חם.", "roomEn": "For a dressing room, a fashion boutique or a bold bedroom.", "roomHe": "לחדר הלבשה, לבוטיק אופנה או לחדר שינה נועז."},
  "50": {"en": "A nude figure walks away down the centre of an empty greenhouse frame, its metal arches curving overhead against a black-and-white sky.", "he": "דמות בעירום הולכת והולכת במרכז שלד של חממה ריקה, והקשתות המתכתיות מתעקלות מעליה על רקע שמיים בשחור־לבן.", "roomEn": "An artistic nude for a private bedroom or a studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו."},
  "53": {"en": "A figure stretches upward as a long white fabric flows from her body to the ground, against a bright black-and-white sky.", "he": "דמות נמתחת כלפי מעלה ובד לבן ארוך זורם מגופה עד הקרקע, על רקע שמיים בהירים בשחור־לבן.", "roomEn": "An artistic nude for a private bedroom or an elegant studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו אלגנטי."},
  "54": {"en": "A barefoot woman with only a yellow bag dances on the white line of an empty road by the sea, the bag the only colour in the frame.", "he": "אישה יחפה עם תיק צהוב בלבד רוקדת על הקו הלבן של כביש ריק ליד הים, והתיק הוא הצבע היחיד בפריים.", "roomEn": "A bold piece for a dressing room, a studio or a fashion space.", "roomHe": "עבודה נועזת לחדר הלבשה, לסטודיו או לחלל אופנה."},
  "59": {"en": "A city corner of old and new buildings is reflected in a long puddle beside the kerb, with a walker crossing between the two worlds.", "he": "פינת רחוב של בניינים ישנים וחדשים משתקפת בשלולית ארוכה לצד המדרכה, והולך רגל חוצה בין שני העולמות.", "roomEn": "For a living room, an office or anyone who loves the city.", "roomHe": "לסלון, למשרד או לכל מי שאוהב את העיר."},
  "62": {"en": "Lace-like foam spreads along the shoreline under a blue sky full of small clouds, with the sun shining low over the sea.", "he": "קצף דמוי תחרה נפרש לאורך קו החוף תחת שמיים כחולים מלאי עננים קטנים, והשמש זורחת נמוך מעל הים.", "roomEn": "A bright, airy work for a bedroom, a bathroom or a beach house.", "roomHe": "עבודה בהירה ואוורירית לחדר שינה, לחדר רחצה או לבית ליד הים."},
  "64": {"en": "A single shell rests on golden rippled sand at sunset, the last thing left on an empty beach.", "he": "צדף בודד מונח על חול זהוב ומגולגל בשקיעה, הדבר האחרון שנשאר על חוף ריק.", "roomEn": "A calm, warm work for a bedroom or a reading corner.", "roomHe": "עבודה רגועה וחמה לחדר שינה או לפינת קריאה."},
  "67": {"en": "A dancer in a red dress leaps beside a thin tree with red blossoms on the beach, the sun a white disc behind her in a black-and-white world.", "he": "רקדנית בשמלה אדומה מזנקת לצד עץ דק עם פריחה אדומה על החוף, והשמש היא עיגול לבן מאחוריה בעולם בשחור־לבן.", "roomEn": "For a bedroom, a girls' room or a dance studio.", "roomHe": "לחדר שינה, לחדר של נערה או לסטודיו למחול."},
  "75": {"en": "A woman's red skirt flies in the wind beside a single red tulip at the water's edge, the only colours on a grey beach.", "he": "החצאית האדומה של אישה מתעופפת ברוח לצד צבעוני אדום בודד בקו המים, הצבעים היחידים בחוף אפור.", "roomEn": "A wide, elegant piece for above a sofa or a bed.", "roomHe": "עבודה רחבה ואלגנטית מעל ספה או מעל המיטה."},
  "76": {"en": "A woman in red leans into a thin blossoming tree on the beach, the sun glowing white behind them in black and white.", "he": "אישה באדום נשענת על עץ דק ופורח על החוף, והשמש זוהרת בלבן מאחוריהם בשחור־לבן.", "roomEn": "For a bedroom or a calm, feminine living room.", "roomHe": "לחדר שינה או לסלון רגוע ונשי."},
  "78": {"en": "The Tel Aviv hotel line is mirrored in the wet sand at sunset, with the whole sky burning orange and pink above it.", "he": "קו המלונות של תל אביב משתקף בחול הרטוב בשקיעה, וכל השמיים מעליו בוערים בכתום ובוורוד.", "roomEn": "A wide, glowing work for a large living-room wall.", "roomHe": "עבודה רחבה וזוהרת לקיר גדול בסלון."},
  "79": {"en": "A man and his dog walk past an old domed building and modern towers, all reflected in a deep puddle after the rain.", "he": "גבר והכלב שלו חולפים על פני בניין ישן עם כיפה ומגדלים מודרניים, והכול משתקף בשלולית עמוקה אחרי הגשם.", "roomEn": "For a living room, an entrance or a dog lover's home.", "roomHe": "לסלון, לכניסה או לבית של אוהבי כלבים."},
  "80": {"en": "A flock of pigeons gathers on a wet city crossing while people pass under umbrellas, a quiet moment of the city in the rain.", "he": "להקת יונים מתאספת במעבר חציה רטוב בעיר, בזמן שאנשים חולפים מתחת למטריות. רגע שקט של העיר בגשם.", "roomEn": "For a hallway, a study or an urban living room.", "roomHe": "למסדרון, לחדר עבודה או לסלון אורבני."},
  "82": {"en": "Colourful autumn leaves gather on a street drain grate, gold, green and blue, like a small mosaic of the season.", "he": "עלי שלכת צבעוניים מצטברים על רשת ניקוז ברחוב, זהב, ירוק וכחול, כמו פסיפס קטן של העונה.", "roomEn": "For a kitchen, a dining area or a warm hallway.", "roomHe": "למטבח, לפינת אוכל או למסדרון חמים."},
  "83": {"en": "A man on the beach reaches to catch a flying disc under a sky streaked with white clouds, his figure reflected in the wet sand.", "he": "גבר על החוף נמתח לתפוס צלחת מעופפת תחת שמיים מפוספסים בעננים לבנים, והדמות שלו משתקפת בחול הרטוב.", "roomEn": "A joyful work for a family living room, a children's room or an office.", "roomHe": "עבודה שמחה לסלון משפחתי, לחדר ילדים או למשרד."},
  "84": {"en": "A pile of colourful water beads glows on the wet sand at sunset, mirrored in the water like a heap of jewels.", "he": "ערימה של כדורי מים צבעוניים זוהרת על החול הרטוב בשקיעה, ומשתקפת במים כמו ערמת תכשיטים.", "roomEn": "For a children's room, a kitchen or a happy living room.", "roomHe": "לחדר ילדים, למטבח או לסלון שמח."},
  "85": {"en": "Bright water beads are scattered on the sand toward a low sun, each one glowing like a small coloured planet.", "he": "כדורי מים בהירים מפוזרים על החול לכיוון שמש נמוכה, וכל אחד זוהר כמו כוכב לכת צבעוני קטן.", "roomEn": "For a children's room, a playroom or a colourful kitchen.", "roomHe": "לחדר ילדים, לחדר משחקים או למטבח צבעוני."},
  "86": {"en": "A yellow building and green treetops are reflected in a puddle, where strangers walking above become twins below.", "he": "בניין צהוב וצמרות עצים ירוקות משתקפים בשלולית, ושם זרים שהולכים למעלה הופכים לתאומים למטה.", "roomEn": "For a living room, an entrance or an office.", "roomHe": "לסלון, לכניסה או למשרד."},
  "87": {"en": "A city intersection with white buildings, trees and traffic lights is mirrored whole in a wide puddle after the rain.", "he": "צומת בעיר עם בניינים לבנים, עצים ורמזורים משתקף כולו בשלולית רחבה אחרי הגשם.", "roomEn": "For a hallway, an office or a living room.", "roomHe": "למסדרון, למשרד או לסלון."},
  "88": {"en": "Dark night clouds hang over a burning yellow and orange sunset, with the sea glowing gold below.", "he": "עננים כהים של לילה תלויים מעל שקיעה בוערת בצהוב ובכתום, והים זוהר בזהב מתחתיה.", "roomEn": "A dramatic work for a living room or a bedroom.", "roomHe": "עבודה דרמטית לסלון או לחדר שינה."},
  "89": {"en": "A man bends toward his dog on a wide black-and-white beach under dramatic clouds, a quiet conversation no one else can hear.", "he": "גבר מתכופף אל הכלב שלו בחוף רחב בשחור־לבן תחת עננים דרמטיים, שיחה שקטה שאף אחד אחר לא שומע.", "roomEn": "For a living room, a study or a dog lover's home.", "roomHe": "לסלון, לחדר עבודה או לבית של אוהבי כלבים."},
  "19": {"en": "A small street café glows in warm light under its awning, and the whole scene, tables, people and lamps, is mirrored in a puddle in front of it.", "he": "בית קפה קטן ברחוב זוהר באור חם מתחת לסוכך, וכל התמונה, השולחנות, האנשים והמנורות, משתקפת בשלולית שלפניו.", "roomEn": "For a kitchen, a dining area or a café.", "roomHe": "למטבח, לפינת אוכל או לבית קפה."},
  "21": {"en": "A woman in a flowing red top stands before a bright yellow building with green shutters, reaching upward under a blue sky.", "he": "אישה בחולצה אדומה מתנופפת עומדת מול בניין צהוב בוהק עם תריסים ירוקים, ונמתחת כלפי מעלה תחת שמיים כחולים.", "roomEn": "A bold, colourful work for a living room, an entrance or an office.", "roomHe": "עבודה נועזת וצבעונית לסלון, לכניסה או למשרד."},
  "22": {"en": "A small purple umbrella is the only colour on a rainy black-and-white boulevard, and it appears again in the puddle below.", "he": "מטרייה סגולה קטנה היא הצבע היחיד בשדרה גשומה בשחור־לבן, והיא מופיעה שוב בשלולית שמתחתיה.", "roomEn": "For a hallway, a study or a monochrome living room.", "roomHe": "למסדרון, לחדר עבודה או לסלון מונוכרומטי."},
  "24": {"en": "A wave explodes into spray at golden sunset, its shape rising like a dancer from the foam.", "he": "גל מתפרץ לרסס בשקיעה זהובה, והצורה שלו עולה מהקצף כמו רקדנית.", "roomEn": "A dynamic work for a living room or a gym that wants energy.", "roomHe": "עבודה דינמית לסלון או לחדר כושר שרוצים אנרגיה."},
  "26": {"en": "A small green-crowned tree stands on the beach with a dancer leaning on it, under dramatic black-and-white clouds; only the leaves keep their colour.", "he": "עץ קטן עם צמרת ירוקה עומד על החוף ורקדנית נשענת עליו, תחת עננים דרמטיים בשחור־לבן, ורק העלים שומרים על צבעם.", "roomEn": "For a bedroom, a living room or a calm office.", "roomHe": "לחדר שינה, לסלון או למשרד רגוע."},
  "29": {"en": "Dark clouds catch fire above the sea at sunset, with a burning orange horizon and a calm, glowing water below.", "he": "עננים כהים בוערים מעל הים בשקיעה, עם אופק כתום לוהט ומים שקטים וזוהרים מתחתיו.", "roomEn": "A warm, dramatic work for a large living-room wall.", "roomHe": "עבודה חמה ודרמטית לקיר גדול בסלון."},
  "30": {"en": "A stormy sunset sky is mirrored perfectly on the wet sand, so that sky and earth seem to meet in one line.", "he": "שמי שקיעה סוערים משתקפים בדיוק על החול הרטוב, כך שהשמיים והאדמה נראים נפגשים בקו אחד.", "roomEn": "A wide, calm piece for above a sofa or a bed.", "roomHe": "עבודה רחבה ורגועה מעל ספה או מעל המיטה."},
  "35": {"en": "A paper boat rests on the wet sand while bright orange flames burst from it and reflect in the water. Fire and sea in one frame.", "he": "סירת נייר עומדת על החול הרטוב, ולהבות כתומות עזות פורצות ממנה ומשתקפות במים. אש וים בפריים אחד.", "roomEn": "A striking work for a living room, a study or an office.", "roomHe": "עבודה מרשימה לסלון, לחדר עבודה או למשרד."},
  "36": {"en": "A pair of studded high heels with red soles stands in the shallow water at the shore, under a blue sky full of clouds.", "he": "זוג נעלי עקב עם ניטים וסוליות אדומות עומד במים הרדודים על החוף, תחת שמיים כחולים מלאי עננים.", "roomEn": "For a dressing room, a bedroom or a fashion boutique.", "roomHe": "לחדר הלבשה, לחדר שינה או לבוטיק אופנה."},
  "38": {"en": "A line-drawn portrait of a woman with flowers in her hair floats over the sea at sunset, as if sketched on the sky.", "he": "פורטרט בקו של אישה עם פרחים בשיער מרחף מעל הים בשקיעה, כאילו צויר על השמיים.", "roomEn": "For a bedroom, a girls' room or an artistic living room.", "roomHe": "לחדר שינה, לחדר של נערה או לסלון אמנותי."},
  "39": {"en": "A golden glass face lies among colourful pebbles at the water's edge, half covered by a wave, under a bright sky.", "he": "פנים מזכוכית זהובה שוכבות בין חלוקי אבן צבעוניים בקו המים, מכוסות למחצה בגל, תחת שמיים בהירים.", "roomEn": "For a study, a reading corner or a contemplative living room.", "roomHe": "לחדר עבודה, לפינת קריאה או לסלון שמזמין מחשבה."},
  "40": {"en": "Two huge green eyes painted on a wall stare out under a black-and-white Tel Aviv skyline and a cloudy sky.", "he": "שתי עיניים ירוקות ענקיות מצוירות על קיר ומביטות החוצה, תחת קו רקיע של תל אביב בשחור־לבן ושמיים מעוננים.", "roomEn": "An urban work for a studio, an office or a young living room.", "roomHe": "עבודה אורבנית לסטודיו, למשרד או לסלון צעיר."},
  "41": {"en": "A woman with a flowing red scarf walks toward the sea beside a giant red tulip, the only colours on a black-and-white beach.", "he": "אישה עם צעיף אדום מתנופף הולכת לכיוון הים לצד צבעוני אדום ענק, הצבעים היחידים בחוף בשחור־לבן.", "roomEn": "For a bedroom or a feminine living-room corner.", "roomHe": "לחדר שינה או לפינה נשית בסלון."},
  "42": {"en": "A dancer's silhouette rises beside a giant purple flower bud in the shallow sea, with a green stem curving over the water.", "he": "צללית של רקדנית עולה לצד ניצן פרח סגול ענק בים הרדוד, וגבעול ירוק מתעקל מעל המים.", "roomEn": "For a bedroom, a dance studio or a calm living room.", "roomHe": "לחדר שינה, לסטודיו למחול או לסלון רגוע."},
  "43": {"en": "A hand reaches down from the sky toward a tall ship sailing beside a rock in a stormy black-and-white sea.", "he": "יד נשלחת מהשמיים אל ספינת מפרשים שמפליגה ליד סלע בים סוער בשחור־לבן.", "roomEn": "A story-like work for a study, a living room or a children's room.", "roomHe": "עבודה עם סיפור לחדר עבודה, לסלון או לחדר ילדים."},
  "44": {"en": "A dancer stands on a tilted board in the sea beside a tall pink flower bud, both reflected in the calm black-and-white water.", "he": "רקדנית עומדת על לוח נטוי בים לצד ניצן פרח ורוד גבוה, ושניהם משתקפים במים השקטים בשחור־לבן.", "roomEn": "For a bedroom, a girls' room or a dance studio.", "roomHe": "לחדר שינה, לחדר של נערה או לסטודיו למחול."},
  "45": {"en": "A dancer reaches up beside a cluster of giant tulips on the rocks by the sea, all in soft black and white.", "he": "רקדנית נמתחת כלפי מעלה לצד אשכול של צבעונים ענקיים על הסלעים ליד הים, הכול בשחור־לבן רך.", "roomEn": "For a bedroom or a quiet, elegant living room.", "roomHe": "לחדר שינה או לסלון שקט ואלגנטי."},
  "47": {"en": "A nude dancer rises on pointe on a white line that runs to the horizon, arms open to the sky, in black and white.", "he": "רקדנית בעירום עולה על קצות האצבעות על קו לבן שנמשך עד האופק, וידיה פתוחות לשמיים, בשחור־לבן.", "roomEn": "An artistic nude for a private bedroom or a dance studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו למחול."},
  "48": {"en": "A dancer's body stretches across an old double door in an abandoned building, in black and white, between light and shadow.", "he": "גוף של רקדנית נמתח לרוחב של דלת כפולה ישנה במבנה נטוש, בשחור־לבן, בין אור לצל.", "roomEn": "An artistic nude for a private bedroom or a studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו."},
  "49": {"en": "A body and its broken mirror image meet across a cracked surface, forming a symmetrical, almost abstract figure in black and white.", "he": "גוף ובבואה שבורה שלו נפגשים משני צידי משטח סדוק, ויוצרים דמות סימטרית וכמעט מופשטת בשחור־לבן.", "roomEn": "An artistic nude for a private bedroom or a contemporary studio.", "roomHe": "עירום אמנותי לחדר שינה פרטי או לסטודיו עכשווי."},
  "55": {"en": "A man in a hat holds a small dog close inside a patterned poncho, his ringed hands wrapped around it. Black and white, tender and strong at once.", "he": "גבר בכובע מחזיק כלב קטן קרוב אליו בתוך פונצ׳ו מעוטר, והידיים עם הטבעות עוטפות אותו. בשחור־לבן, רך וחזק בבת אחת.", "roomEn": "For a living room, a study or a dog lover's home.", "roomHe": "לסלון, לחדר עבודה או לבית של אוהבי כלבים."},
  "56": {"en": "A dry leaf lies on the wet sand at sunset, glowing in gold against a black-and-white sea and a heavy sky.", "he": "עלה יבש שוכב על החול הרטוב בשקיעה, וזוהר בזהב על רקע ים ושמיים כבדים בשחור־לבן.", "roomEn": "A quiet, poetic work for a bedroom or a reading corner.", "roomHe": "עבודה שקטה ופואטית לחדר שינה או לפינת קריאה."},
  "58": {"en": "A dancer rises on pointe on a stone staircase, one leg stretched to the sky, her shadow falling down the steps in black and white.", "he": "רקדנית עולה על קצות האצבעות במדרגות אבן, רגל אחת נמתחת לשמיים, והצל שלה נופל במורד המדרגות בשחור־לבן.", "roomEn": "For a dance studio, a hallway or a central living-room wall.", "roomHe": "לסטודיו למחול, למסדרון או לקיר מרכזי בסלון."},
  "60": {"en": "A sheer net billows above the shallow sea like a sail caught by the wind, with a sunset glowing on the horizon.", "he": "רשת שקופה מתנפחת מעל הים הרדוד כמו מפרש שנתפס ברוח, ושקיעה זוהרת באופק.", "roomEn": "For a living room or a bedroom that needs movement and air.", "roomHe": "לסלון או לחדר שינה שצריכים תנועה ואוויר."},
  "61": {"en": "A surfboard rests on the sand with its leash coiled below, under a bright sun and a sky full of clouds. A summer pause before the waves.", "he": "גלשן מונח על החול והרצועה שלו מתפתלת מתחתיו, תחת שמש בהירה ושמיים מלאי עננים. הפסקה של קיץ לפני הגלים.", "roomEn": "For a beach house, a children's room or a bright living room.", "roomHe": "לבית ליד הים, לחדר ילדים או לסלון מואר."},
  "63": {"en": "A small dog stands like a guardian on the wet sand, towering over the horizon under a sky of tiny clouds, its reflection at its feet. Black and white.", "he": "כלב קטן ניצב כמו שומר על החול הרטוב, מתנשא מעל האופק תחת שמיים של עננים קטנים, וההשתקפות שלו למרגלותיו. בשחור־לבן.", "roomEn": "For a family living room, a dog lover's home or a children's room.", "roomHe": "לסלון משפחתי, לבית של אוהבי כלבים או לחדר ילדים."},
  "66": {"en": "Orange and blue clouds blaze across the sky at sunset and are mirrored in full on the wet sand below.", "he": "עננים כתומים וכחולים בוערים על פני השמיים בשקיעה, ומשתקפים במלואם בחול הרטוב שמתחת.", "roomEn": "A warm, dramatic work for a large living-room wall.", "roomHe": "עבודה חמה ודרמטית לקיר גדול בסלון."},
  "68": {"en": "A sheer woven sculpture curls over the sand like a breath of air, in black and white, between sea and sky.", "he": "פסל ארוג ושקוף מתפתל מעל החול כמו נשימה של אוויר, בשחור־לבן, בין הים לשמיים.", "roomEn": "For a minimal living room, a studio or an office.", "roomHe": "לסלון מינימליסטי, לסטודיו או למשרד."},
  "69": {"en": "A tangled tree stands in the breaking waves under a deep blue sky and a golden horizon, its roots held by the sea.", "he": "עץ סבוך עומד בתוך הגלים הנשברים תחת שמיים כחולים עמוקים ואופק זהוב, והשורשים שלו אחוזים בים.", "roomEn": "For a living room or a bedroom that wants colour and strength.", "roomHe": "לסלון או לחדר שינה שרוצים צבע ועוצמה."},
  "70": {"en": "Sea foam lies on the wet sand in the foreground, while the lights of the city glow on the horizon under a soft evening sky.", "he": "קצף ים שוכב על החול הרטוב בחזית, ואורות העיר זוהרים באופק תחת שמי ערב רכים.", "roomEn": "A calm work for a bedroom, a hallway or a quiet living room.", "roomHe": "עבודה רגועה לחדר שינה, למסדרון או לסלון שקט."},
  "71": {"en": "A woman in a gas mask kneels on the beach holding a small green tree, the only colour in a black-and-white world.", "he": "אישה במסכת גז כורעת על החוף ומחזיקה עץ ירוק קטן, הצבע היחיד בעולם בשחור־לבן.", "roomEn": "A bold statement piece for a study, a studio or a living room with character.", "roomHe": "עבודה עם אמירה לחדר עבודה, לסטודיו או לסלון עם אופי."},
  "72": {"en": "The sun sets over a beach covered with shells, each one catching a little of the golden light under a textured sky.", "he": "השמש שוקעת מעל חוף מכוסה בצדפים, וכל אחד מהם תופס מעט מהאור הזהוב תחת שמיים מרובדים.", "roomEn": "For a living room, a dining area or a beach house.", "roomHe": "לסלון, לפינת אוכל או לבית ליד הים."},
  "73": {"en": "A pink cloud shaped like a heart floats in a bright blue sky above the sea at sunset.", "he": "ענן ורוד בצורת לב מרחף בשמיים כחולים בהירים מעל הים בשקיעה.", "roomEn": "A gift for a couple and a happy piece for a bedroom or a girls' room.", "roomHe": "מתנה לזוג ועבודה שמחה לחדר שינה או לחדר של נערה."},
  "74": {"en": "A dancer sits on the wet sand and is mirrored upside down in the water below, in black and white, so that two figures meet at the waterline.", "he": "רקדנית יושבת על החול הרטוב ומשתקפת הפוך במים שמתחתיה, בשחור־לבן, כך ששתי דמויות נפגשות על קו המים.", "roomEn": "For a bedroom, a dance studio or a monochrome living room.", "roomHe": "לחדר שינה, לסטודיו למחול או לסלון מונוכרומטי."},
  "77": {"en": "A dancer balances between two giant sunflowers standing in the shallow water, all in black and white, their reflections stretching across the wet sand.", "he": "רקדנית מתאזנת בין שתי חמניות ענקיות שעומדות במים הרדודים, הכול בשחור־לבן, וההשתקפויות שלהן נמתחות על החול הרטוב.", "roomEn": "A graceful work for a bedroom, a dance studio or a bright living room.", "roomHe": "עבודה עדינה לחדר שינה, לסטודיו למחול או לסלון מואר."},
  "154": {"en": "A white old house stands between two modern apartment blocks, and the whole scene is mirrored in a puddle at its feet. Then and now, face to face.", "he": "בית ישן ולבן עומד בין שני בנייני מגורים מודרניים, וכל התמונה משתקפת בשלולית שלמרגלותיו. אז ועכשיו, פנים מול פנים.", "roomEn": "For a living room, an architect's office or anyone who loves cities.", "roomHe": "לסלון, למשרד של אדריכל או לכל מי שאוהב ערים."},
  "135": {"en": "A lone figure in red stands at the water's edge under a blazing pink and blue sunset sky, and the whole sky is reflected in the wet sand.", "he": "דמות בודדה באדום עומדת על קו המים תחת שמי שקיעה בוערים בוורוד ובכחול, וכל השמיים משתקפים בחול הרטוב.", "roomEn": "A calm, colourful work for a bedroom or a living-room wall that needs light.", "roomHe": "עבודה רגועה וצבעונית לחדר שינה או לקיר בסלון שצריך אור."},
  "168": {"en": "A dancer reaches into the tangled branches of a bare tree at sunset, her silhouette and the branches mirrored in the water below.", "he": "רקדנית נמתחת אל הענפים הסבוכים של עץ חשוף בשקיעה, והצללית שלה והענפים משתקפים במים שמתחת.", "roomEn": "For a living room, a bedroom or a dance studio.", "roomHe": "לסלון, לחדר שינה או לסטודיו למחול."},
  "10": {"en": "Two wine glasses stand close together in black and white, while streaks of yellow light run through them like captured sunshine.", "he": "שתי כוסות יין עומדות צמודות בשחור־לבן, ופסים של אור צהוב עוברים דרכן כמו שמש שנלכדה בזכוכית.", "roomEn": "For a dining area, a home bar or a couple's living room.", "roomHe": "לפינת אוכל, לבר ביתי או לסלון של זוג."},
  "5": {"en": "A woven, corset-like sculpture of light seems to float upright over the sea, with a fiery sunset glowing through it and reflected below.", "he": "פסל ארוג בצורת מחוך נראה מרחף זקוף מעל הים, ושקיעה בוערת זורחת דרכו ומשתקפת מתחתיו.", "roomEn": "A sensual, abstract work for a bedroom or a dressing room.", "roomHe": "עבודה חושנית ומופשטת לחדר שינה או לחדר הלבשה."},
  "6": {"en": "Two wine glasses melt into a textured black-and-white world, and only a flame of orange light burns between them.", "he": "שתי כוסות יין נמסות לתוך עולם מחוספס בשחור־לבן, ורק להבה של אור כתום בוערת ביניהן.", "roomEn": "For a romantic bedroom, a dining area or a home bar.", "roomHe": "לחדר שינה רומנטי, לפינת אוכל או לבר ביתי."},
  "7": {"en": "Two empty wine glasses lie on the sand at the edge of the sea, under a stormy black-and-white sky with a single thin line of orange sunset.", "he": "שתי כוסות יין ריקות שוכבות על החול בקצה הים, תחת שמיים סוערים בשחור־לבן עם קו דק אחד של שקיעה כתומה.", "roomEn": "A gift for a couple and a quiet piece for a living room or bedroom.", "roomHe": "מתנה לזוג ועבודה שקטה לסלון או לחדר השינה."},
  "12": {"en": "A white balconied house and its trees are reflected in a wide puddle after the rain, as people pass by on the pavement above.", "he": "בית לבן עם מרפסות והעצים שלידו משתקפים בשלולית רחבה אחרי הגשם, ואנשים חולפים על המדרכה שמעליה.", "roomEn": "For an entrance, a hallway or a living room in soft tones.", "roomHe": "לכניסה, למסדרון או לסלון בגוונים רכים."},
  "116": {"en": "A woman climbs into a small green tree on the beach under a deep blue sky, as if hiding from the world in plain sight.", "he": "אישה מטפסת לתוך עץ ירוק קטן על החוף תחת שמיים כחולים עמוקים, כאילו היא מתחבאת מהעולם לעיני כולם.", "roomEn": "A fresh, bright work for a living room, a children's room or an office.", "roomHe": "עבודה רעננה ומוארת לסלון, לחדר ילדים או למשרד."},
  "139": {"en": "A sheer, sculptural dress floats against a dramatic black-and-white sky, with a red glow burning at its centre.", "he": "שמלה שקופה ופיסולית מרחפת על רקע שמיים דרמטיים בשחור־לבן, ובמרכזה בוער זוהר אדום.", "roomEn": "For a dressing room, a bedroom or a fashion studio.", "roomHe": "לחדר הלבשה, לחדר שינה או לסטודיו לאופנה."},
  "126": {"en": "A woman stands inside a blooming white bush on the beach, the flowers circling her like a private garden. Black and white, light and soft.", "he": "אישה עומדת בתוך שיח פורח לבן על החוף, והפרחים מקיפים אותה כמו גן פרטי. בשחור־לבן, קליל ורך.", "roomEn": "For a bedroom, a girls' room or a calm living-room corner.", "roomHe": "לחדר שינה, לחדר של נערה או לפינה רגועה בסלון."},
  "181": {"en": "A sky full of small golden clouds is mirrored piece by piece in the wet sand at sunset, as if heaven had shattered onto the beach.", "he": "שמיים מלאים בעננים זהובים קטנים משתקפים חתיכה אחרי חתיכה בחול הרטוב בשקיעה, כאילו השמיים התנפצו על החוף.", "roomEn": "A warm, rich work for a large living-room wall or a bedroom.", "roomHe": "עבודה חמה ועשירה לקיר גדול בסלון או לחדר שינה."},
  "129": {"en": "A flock of pigeons gathers on the beach sand under long streaks of cloud, in black and white, like a quiet meeting at the edge of the city.", "he": "להקת יונים מתאספת על חול החוף תחת פסים ארוכים של עננים, בשחור־לבן, כמו ישיבה שקטה בקצה העיר.", "roomEn": "For a study, an office meeting room or a monochrome living room.", "roomHe": "לחדר עבודה, לחדר ישיבות או לסלון מונוכרומטי."},
  "179": {"en": "A green tree-lined boulevard is reflected in a puddle so deep it looks like a passage to another world, with a cyclist riding past above.", "he": "שדרה ירוקה עם עצים משתקפת בשלולית כל כך עמוקה, שהיא נראית כמו מעבר לעולם אחר, ורוכב אופניים חולף מעליה.", "roomEn": "For an entrance, a hallway or a living room that wants depth.", "roomHe": "לכניסה, למסדרון או לסלון שרוצה עומק."},
  "2": {"en": "A Tel Aviv street of white old houses and trees is mirrored almost whole in a wide puddle after the rain. Cyclists and passers-by pass on the line where the city meets its reflection.", "he": "רחוב תל אביבי עם בתים לבנים ישנים ועצים משתקף כמעט במלואו בשלולית רחבה אחרי הגשם. רוכבי אופניים ועוברים ושבים חוצים את הקו שבו העיר פוגשת את ההשתקפות שלה.", "roomEn": "For a living room or entrance wall, for anyone who loves the old city after rain.", "roomHe": "לסלון או לקיר בכניסה, למי שאוהב את העיר הישנה אחרי הגשם."},
  "3": {"en": "A purple lightning bolt strikes over the Tel Aviv hotel line while the beach below stays calm and golden. A rare moment of storm and light in one frame.", "he": "ברק סגול מכה מעל קו המלונות של תל אביב, והחוף שמתחתיו נשאר שקט וזהוב. רגע נדיר של סערה ואור בפריים אחד.", "roomEn": "A dramatic work for a large living-room wall or an office that wants energy.", "roomHe": "עבודה דרמטית לקיר גדול בסלון או למשרד שרוצה אנרגיה."},
  "11": {"en": "Two wine glasses lean into each other on the wet sand at sunset, a small red fish swimming in each. Orange sky, sharp reflections, and a quiet story of two.", "he": "שתי כוסות יין נשענות זו על זו על החול הרטוב בשקיעה, ובכל אחת שוחה דג אדום קטן. שמיים כתומים, השתקפויות חדות וסיפור שקט של שניים.", "roomEn": "A warm gift for a couple and a fine piece for a living room or bedroom.", "roomHe": "מתנה חמה לזוג, ועבודה יפה לסלון או לחדר השינה."},
  "25": {"en": "A dancer in a flowing pink skirt seems to grow from a giant flower stem on the beach, in a black-and-white world where only the flower and the dress keep their colour.", "he": "רקדנית בחצאית ורודה זורמת נראית כאילו היא צומחת מגבעול של פרח ענק על החוף, בעולם בשחור־לבן שבו רק הפרח והשמלה שומרים על הצבע.", "roomEn": "A poetic work for a bedroom, a girls' room or a feminine living-room corner.", "roomHe": "עבודה פואטית לחדר שינה, לחדר של נערה או לפינה נשית בסלון."},
  "65": {"en": "A small dog stands like a giant over the Tel Aviv beach, reflected at full height in the water, with the lifeguard tower and the city behind it. Black and white with a wink.", "he": "כלב קטן ניצב כמו ענק מעל החוף של תל אביב ומשתקף לכל גובהו במים, ומאחוריו סוכת המציל והעיר. שחור־לבן עם קריצה.", "roomEn": "For a family living room, a dog lover's home or a children's room.", "roomHe": "לסלון משפחתי, לבית של אוהבי כלבים או לחדר ילדים."},
  "99": {"en": "A white mask with a curled moustache lies half buried in the beach sand, under a heavy black-and-white sky. Protest, mystery and the sea in one still image.", "he": "מסכה לבנה עם שפם מסולסל שוכבת קבורה למחצה בחול החוף, תחת שמיים כבדים בשחור־לבן. מחאה, מסתורין וים בתמונה שקטה אחת.", "roomEn": "A bold piece for a study, a studio or a living room with character.", "roomHe": "עבודה נועזת לחדר עבודה, לסטודיו או לסלון עם אופי."},
  "103": {"en": "A face carved in sand rises from the beach in close-up, eyes closed, while tiny figures walk along the shore behind it. Black and white, between dream and reality.", "he": "פנים מפוסלות בחול עולות מהחוף בתקריב, בעיניים עצומות, ומאחוריהן דמויות קטנות הולכות לאורך קו המים. בשחור־לבן, בין חלום למציאות.", "roomEn": "For a bedroom, a reading corner or a calm monochrome wall.", "roomHe": "לחדר שינה, לפינת קריאה או לקיר מונוכרומטי רגוע."},
  "162": {"en": "A dancer seems to float upside down between the sky and its reflection in the water, her silhouette crossing the line between two worlds, with the sun breaking through below.", "he": "רקדנית נראית מרחפת הפוכה בין השמיים להשתקפות שלהם במים, והצללית שלה חוצה את הקו בין שני עולמות, כשהשמש פורצת מלמטה.", "roomEn": "A striking work for a central wall, a dance studio or a contemporary living room.", "roomHe": "עבודה מרשימה לקיר מרכזי, לסטודיו למחול או לסלון עכשווי."},
  "1": {"en": "A row of colourful balls stands on the wet sand under a grey stormy sky, their reflections painting the water. Black-and-white sea and bright colour in one frame.", "he": "שורה של כדורים צבעוניים עומדת על החול הרטוב תחת שמיים אפורים וסוערים, וההשתקפויות שלהם צובעות את המים. ים בשחור־לבן וצבע עז בפריים אחד.", "roomEn": "For a children's room, a family living room or a playful office.", "roomHe": "לחדר ילדים, לסלון משפחתי או למשרד עם חיוך."},
  "8": {"en": "A bare tree rises out of the shallow sea, its tangled branches reaching into a grey sky with a thin band of sunset. Stillness and wishes at the waterline.", "he": "עץ חשוף מתרומם מתוך הים הרדוד, והענפים הסבוכים שלו נשלחים אל שמיים אפורים עם פס דק של שקיעה. שקט ומשאלות על קו המים.", "roomEn": "For a bedroom, a meditation corner or a quiet hallway.", "roomHe": "לחדר שינה, לפינת מדיטציה או למסדרון שקט."},
  "9": {"en": "A lone tree stands in the water under dramatic clouds, as golden sunset light tears through and shines across the sea.", "he": "עץ בודד עומד במים תחת עננים דרמטיים, ואור שקיעה זהוב קורע אותם ומאיר את פני הים.", "roomEn": "A powerful work for a large living-room wall or a meeting room.", "roomHe": "עבודה עוצמתית לקיר גדול בסלון או לחדר ישיבות."},
  "13": {"en": "Glass balls rest on the wet sand at sunset, each one holding a tiny upside-down world of sun and sea, while everything around them fades to black and white.", "he": "כדורי זכוכית מונחים על החול הרטוב בשקיעה, ובכל אחד מהם עולם קטן והפוך של שמש וים, בזמן שכל מה שמסביב דוהה לשחור־לבן.", "roomEn": "For a living room or dining area that wants a thoughtful focal point.", "roomHe": "לסלון או לפינת אוכל שרוצים בהם מוקד מעורר מחשבה."},
  "14": {"en": "Dozens of colourful water beads cover the shoreline like jewels, with blue sky and clouds above. Seen from sand level, the beach becomes a kaleidoscope.", "he": "עשרות כדורי מים צבעוניים מכסים את קו החוף כמו תכשיטים, ומעליהם שמיים כחולים ועננים. מגובה החול, החוף הופך לקליידוסקופ.", "roomEn": "For a children's room, a colourful kitchen or a happy entrance wall.", "roomHe": "לחדר ילדים, למטבח צבעוני או לקיר כניסה שמח."},
  "15": {"en": "A wave breaks on a rock at sunset and its spray catches fire in orange light, against a deep purple sky.", "he": "גל נשבר על סלע בשקיעה, והרסס שלו בוער באור כתום על רקע שמיים סגולים עמוקים.", "roomEn": "A dynamic work for a living room, a gym or an office that wants energy.", "roomHe": "עבודה דינמית לסלון, לחדר כושר או למשרד שרוצה אנרגיה."},
  "18": {"en": "Two colourful metal roosters face each other on the beach over a nest of coloured eggs, reflected in the wet sand under a blue sky.", "he": "שני תרנגולים צבעוניים ממתכת עומדים זה מול זה על החוף מעל קן של ביצים צבעוניות, ומשתקפים בחול הרטוב תחת שמיים כחולים.", "roomEn": "A cheerful piece for a kitchen, a dining area or a children's room.", "roomHe": "עבודה עליזה למטבח, לפינת אוכל או לחדר ילדים."},
  "51": {"en": "A bare foot stretches toward the camera from very close, on the wet sand at the waterline, and the body recedes from it toward the horizon. The low black-and-white perspective turns an ordinary step on the beach into an almost sculptural moment. The work was published by the international art page Us&Art, drawing more than 10,000 reactions and 1,800 shares.", "he": "כף רגל יחפה נמתחת אל המצלמה מקרוב מאוד, על החול הרטוב בקו המים, והגוף נמשך ממנה לאחור עד האופק. הפרספקטיבה הנמוכה, בשחור־לבן, הופכת צעד רגיל על החוף לרגע כמעט פיסולי. העבודה פורסמה בעמוד האמנות הבינלאומי Us&Art, ועוררה יותר מ־10,000 תגובות ו־1,800 שיתופים.", "roomEn": "A bold work for a central living-room wall, a studio or a space meant to spark conversation.", "roomHe": "עבודה נועזת לקיר מרכזי בסלון, בסטודיו או בחלל שרוצים שיעורר שיחה."},
  "144": {"en": "Two wine glasses lie on the wet sand at the waterline, and an orange sunset breaks inside the glass and in its reflection. Everything else stays black and white, so the orange light is the only thing that speaks.", "he": "שתי כוסות יין שוכבות על החול הרטוב בקו המים, ושקיעה כתומה נשברת בתוך הזכוכית ובהשתקפות שלה. כל השאר נשאר בשחור־לבן, כך שהאור הכתום הוא היחיד שמדבר.", "roomEn": "A work for a living room or dining area, for anyone who loves a quiet end-of-day moment.", "roomHe": "עבודה לסלון או לפינת אוכל, למי שאוהב רגע שקט של סוף יום."},
  "46": {"en": "A dancer freezes in mid-air at the waterline of a Tel Aviv beach, with the city's hotel skyline behind her. Sharp black and white, with a long reflection on the wet sand.", "he": "רקדנית קופאת באוויר על קו המים בחוף של תל אביב, ומאחוריה קו המלונות של העיר. בשחור־לבן חד, עם השתקפות ארוכה על החול הרטוב.", "roomEn": "Movement, strength and lightness in a single frame, for a central living-room wall, a studio or a home office.", "roomHe": "תנועה, כוח וקלילות בפריים אחד, שמתאים לקיר מרכזי בסלון, בסטודיו או בחדר עבודה."},
  "27": {"en": "A figure spreads her arms toward the sun setting into the sea, wrapped in orange flames in the foreground. Deep blue sky, a golden horizon.", "he": "דמות פורשת ידיים מול השמש השוקעת בים, ולהבות כתומות עוטפות אותה מקדימה. השמיים כחולים עמוקים והאופק זהוב.", "roomEn": "A dramatic, warm work for a wall that is meant to carry emotion.", "roomHe": "עבודה דרמטית וחמה, לקיר שרוצים שיהיה בו רגש."},
  "104": {"en": "A giant seashell stands in the ornamental pool on Habima Square in Tel Aviv, with the theatre building and the sky reflected in the water around it. An unexpected meeting between the sea and the cultural heart of the city.", "he": "קונכייה ענקית ניצבת בבריכת הנוי בכיכר הבימה בתל אביב, ובניין התיאטרון והשמיים משתקפים במים סביבה. מפגש לא צפוי בין הים לבין לב התרבות של העיר.", "roomEn": "Suited to a living room, an office or a building lobby.", "roomHe": "מתאימה לסלון, למשרד או ללובי."},
  "188": {"en": "A domed building from the early twentieth century and a new glass tower beside it are reflected together in a puddle after the rain, at the corner of Rothschild and Allenby. Old and new Tel Aviv in one image.", "he": "בניין עם כיפה מתחילת המאה הקודמת, ולידו מגדל זכוכית חדש, משתקפים יחד בשלולית אחרי הגשם בפינת רוטשילד ואלנבי. תל אביב הישנה והחדשה בתמונה אחת.", "roomEn": "For a living room, an office or anyone who loves the city.", "roomHe": "לסלון, למשרד או לכל מי שאוהב את העיר."},
  "4": {
    "en": "A lone figure stands beside the surf beneath a sweeping sky in this vertical black-and-white beach photograph. The curved shoreline and layered clouds give the image a quiet, spacious rhythm.",
    "he": "דמות יחידה ניצבת לצד הגלים מתחת לשמיים רחבים בצילום חוף אנכי בשחור־לבן. קו החוף המתעקל ושכבות העננים יוצרים קצב שקט ותחושת מרחב.",
    "roomEn": "Consider it for a narrow living-room wall, a reading corner or a monochrome bedroom.",
    "roomHe": "מתאים לשקול לקיר צר בסלון, לפינת קריאה או לחדר שינה בגוונים מונוכרומטיים."
  },
  "16": {
    "en": "Rows of small clouds fill a deep blue and golden sky, mirrored in the wet sand beside the surf. This vertical seascape builds its depth through repeating patterns above and below the horizon.",
    "he": "שורות של עננים קטנים ממלאות שמיים בכחול עמוק ובזהב ומשתקפות בחול הרטוב לצד הגלים. צילום הים האנכי יוצר עומק באמצעות דגמים שחוזרים מעל ומתחת לאופק.",
    "roomEn": "A choice for a tall wall where blue and warm gold can connect with the room palette.",
    "roomHe": "אפשרות לקיר גבוה שבו כחול וזהב חם יכולים להשתלב בצבעי החלל."
  },
  "17": {
    "en": "Four dolls with brightly coloured hair face the sea, their silhouettes reflected in the wet sand. Blue sky, warm sunlight and playful scale turn a familiar beach scene into a surreal tableau.",
    "he": "ארבע בובות בעלות שיער צבעוני פונות אל הים, וצלליותיהן משתקפות בחול הרטוב. שמיים כחולים, אור שמש חם ומשחק בקנה מידה הופכים את החוף לסצנה סוריאליסטית.",
    "roomEn": "Consider this horizontal work as a colourful focal point above a sofa or a sideboard.",
    "roomHe": "אפשר לשלב את העבודה האופקית כמוקד צבעוני מעל ספה או מזנון."
  },
  "20": {
    "en": "A Tel Aviv street corner is doubled in a rain puddle: buildings, pedestrians and street signs meet their reflected city. Muted stone tones and a low viewpoint make the everyday street feel unfamiliar.",
    "he": "פינת רחוב בתל אביב מוכפלת בשלולית גשם: מבנים, הולכי רגל ותמרורים פוגשים את העיר המשתקפת. גוני אבן מאופקים ונקודת מבט נמוכה מעניקים לרחוב היומיומי מראה לא צפוי.",
    "roomEn": "A vertical urban photograph for an entrance, study or living-room wall with a restrained palette.",
    "roomHe": "צילום עירוני אנכי למבואה, לחדר עבודה או לקיר בסלון בעל פלטת צבעים מאופקת."
  },
  "28": {
    "en": "Two fallen wine glasses rest on wet sand, catching blue sky and a band of warm light near the horizon. Reflections and droplets turn a beach still life into a study of transparency and balance.",
    "he": "שתי כוסות יין שוכבות על חול רטוב ולוכדות שמיים כחולים ופס אור חם ליד האופק. השתקפויות וטיפות הופכות טבע דומם על החוף למחקר של שקיפות ואיזון.",
    "roomEn": "A horizontal photograph to consider for a dining area or a living room with blue and grey accents.",
    "roomHe": "צילום אופקי שאפשר לשלב בפינת אוכל או בסלון עם נגיעות כחול ואפור."
  },
  "31": {
    "en": "Gold and orange sunset light spreads across the sea and wet sand beneath red clouds and a deep blue sky. The low shoreline viewpoint gives this horizontal seascape an immersive foreground.",
    "he": "אור שקיעה בזהב ובכתום נפרש על הים ועל החול הרטוב מתחת לעננים אדומים ולשמיים כחולים עמוקים. נקודת המבט הנמוכה מעניקה לצילום הים האופקי תחושת קרבה למים.",
    "roomEn": "A warm focal point for a neutral living room, especially above a sofa or a wide console.",
    "roomHe": "מוקד חם לסלון בגוונים ניטרליים, במיוחד מעל ספה או קונסולה רחבה."
  },
  "32": {
    "en": "Orange and violet clouds are mirrored across a smooth stretch of wet beach at sunset. The horizontal composition balances an expansive sky with its reflection, almost dissolving the horizon.",
    "he": "עננים כתומים וסגולים משתקפים ברצועת חוף רטובה וחלקה בשקיעה. הקומפוזיציה האופקית מאזנת בין שמיים רחבים להשתקפותם, עד שקו האופק כמעט נעלם.",
    "roomEn": "Consider it above a sofa or bed where orange and violet can provide a strong colour accent.",
    "roomHe": "אפשר לשלב מעל ספה או מיטה, כשהכתום והסגול משמשים מוקד צבע משמעותי."
  },
  "33": {
    "en": "A breaking wave rises close to the lens beneath a golden sun and patterned clouds. The vertical composition brings the texture of water and sea foam into the foreground.",
    "he": "גל נשבר מתרומם קרוב לעדשה מתחת לשמש זהובה ולעננים. הקומפוזיציה האנכית מציבה את המרקם של המים וקצף הים בקדמת התמונה.",
    "roomEn": "A dramatic vertical work for a focal wall or an intimate viewing corner.",
    "roomHe": "עבודה אנכית דרמטית לקיר מרכזי או לפינת צפייה אינטימית."
  },
  "34": {
    "en": "Shells and pebbles fill the foreground of a beach beneath a blue sky and a low golden sun. This vertical photograph connects small shoreline details with a wide, luminous horizon.",
    "he": "צדפים וחלוקי אבן ממלאים את קדמת החוף מתחת לשמיים כחולים ולשמש זהובה נמוכה. הצילום האנכי מחבר פרטים קטנים על קו המים עם אופק רחב ומואר.",
    "roomEn": "A coastal choice for a bedroom, hallway or living-room corner with blue and natural tones.",
    "roomHe": "בחירה באווירת חוף לחדר שינה, למסדרון או לפינה בסלון בגוונים כחולים וטבעיים."
  },
  "37": {
    "en": "A woman bends backwards beside a metal handrail while a dog and passers-by move across the steps. Strong diagonals, shadows and gesture shape this black-and-white street photograph.",
    "he": "אישה נשענת לאחור לצד מעקה מתכת, בעוד כלב ועוברי אורח נעים על המדרגות. אלכסונים חזקים, צללים ומחוות גוף בונים את צילום הרחוב בשחור־לבן.",
    "roomEn": "Consider this vertical work for a contemporary study or a monochrome living-room arrangement.",
    "roomHe": "אפשר לשלב את העבודה האנכית בחדר עבודה עכשווי או בסלון בעיצוב מונוכרומטי."
  }
};
const lobbyWorks = [
  {id:204,title:'Marbles of the Sun',titleHe:'גולות השמש',category:'accessible',image:'assets/work_204_marbles_of_the_sun.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
  {id:205,title:'Color Before the Storm',titleHe:'צבע לפני הסערה',category:'accessible',image:'assets/work_205_color_before_the_storm.jpg',sizes:['60 × 45 cm','80 × 60 cm','120 × 90 cm']},
];
const works=[...paperWorks,...latestWorks,...standardWorks.filter(work=>work.title!=='Between Two Cities'),...squareWorks,...lateNightWorks,...premiumReviewWorks,...newlyCuratedWorks,...septemberCuratedWorks,...newWorks,...septemberSecondCuratedWorks,...thirdCuratedWorks,...fourthCuratedWorks,...lobbyWorks].map(work=>({...work,discovery:discoveryCopy[work.id],soldEditions:soldEditionCounts[work.id]??work.soldEditions??0}));
if(typeof document!=='undefined')document.querySelectorAll('[data-work-count]').forEach(el=>el.textContent=works.length);
const interiorMockups={
  17:'assets/interior_sisters_of_the_sun.jpg',
  25:'assets/interior_blooming_dance.jpg',
  37:'assets/interior_the_world_around_her.jpg'
};

const labels={super:'Super Premium',premium:'Premium',accessible:'Art Edition',square:'Squares','late-night':'Open After Midnight',paper:'Paper Edition · Monthly Drop'};
const heProductRoute=new URLSearchParams(location.search).get('lang')!=='en';
const heLabels={super:'Super Premium',premium:'Premium',accessible:'מהדורת Art',square:'עבודות מרובעות','late-night':'Open After Midnight',paper:'מהדורת נייר'};
// Locked category pricing — Alucobond base prices, smallest to largest.
const prices={accessible:[1990,2590,3490],premium:[2490,4290,6990],super:[5900,9900,16900],square:[2490,3490,5490],'late-night':[2900,4900,7900]};
const perspectPrices={premium:[3340,5740,9360],super:[7970,13470,22870]};
const canvasPrices=[990,1490,2190];
const sizes=['50 × 75 cm','70 × 105 cm','100 × 150 cm'];
const squareSizes=['50 × 50 cm','70 × 70 cm','100 × 100 cm'];
const formatSize=value=>String(value).replace(/\s*[×x]\s*/gi,' × ').replace(/\s*cm\b/gi,' cm').trim();
const editionText=category=>category==='paper'?ui(`זמין ${paperDays} ימים`,`Available for ${paperDays} days`):category==='super'?ui('מהדורה מוגבלת של 7','Limited edition of 7'):category==='premium'||category==='late-night'?ui('מהדורה מוגבלת של 25','Limited edition of 25'):category==='accessible'?ui('מהדורה פתוחה · ללא מספור','Open edition · unnumbered'):ui('פרטי המהדורה יפורסמו בקרוב','Edition details to be announced');
const editionTotal=category=>category==='super'?7:(category==='premium'||category==='late-night'?25:null);
const availabilityText=w=>w.soldEditions&&editionTotal(w.category)?ui(`${editionTotal(w.category)-w.soldEditions} מתוך ${editionTotal(w.category)} עותקים זמינים · ${w.soldEditions} נמכרו`,`${editionTotal(w.category)-w.soldEditions} of ${editionTotal(w.category)} editions available · ${w.soldEditions} sold`):editionText(w.category);
const ui=(he,en)=>heProductRoute?he:en;
const finishText=finish=>({paper:ui('נייר Fine Art ארכיוני · ללא מסגרת','Archival Fine Art Paper · unframed'),perspect:ui('פרספקס','Perspex'),canvas:ui('קנבס · מתוח ומוכן לתלייה','Canvas · stretched & ready to hang'),alucobond:ui('אלוקובונד','Alucobond')})[finish];
const cartEditionText=category=>category==='paper'?ui(`מהדורת נייר · זמינה עד ${paperDateHe}`,`Paper Edition · available through ${paperDateEn}`):category==='accessible'?ui('מהדורה פתוחה · ללא מספור','Open edition · unnumbered'):editionTotal(category)?ui(`מהדורה מוגבלת של ${editionTotal(category)}`,`Limited edition of ${editionTotal(category)}`):ui('פרטי מהדורה בעמוד היצירה','Edition details on the artwork page');
const paperClosed=()=>window.chiefPaperEdition.isClosed();
const paperNotice=()=>window.chiefPaperEdition.notice(heProductRoute);
const paperItemUnavailable=item=>item.category==='paper'&&(paperClosed()||!paperWorks.some(w=>w.id===item.id&&w.image===item.image&&w.prices.includes(item.price)));
const hasClosedPaper=()=>cart.some(paperItemUnavailable);
function canAddCopy(item){if(paperItemUnavailable(item))return false;const work=works.find(w=>w.id===item.id);const limit=editionTotal(work?.category||item.category);return !limit||cart.filter(x=>x.id===item.id).length<Math.max(0,limit-(work?.soldEditions||0));}
function cartGroups(){const groups=[];cart.forEach((item,index)=>{let group=groups.find(g=>g.item.id===item.id&&g.item.size===item.size&&g.item.finish===item.finish&&g.item.price===item.price);if(!group){group={item,indices:[]};groups.push(group)}group.indices.push(index)});return groups;}
const finishFactor={alucobond:1,perspect:1.3};
let cart=JSON.parse(localStorage.getItem('chiefCart')||'[]');
let appliedCoupon=JSON.parse(localStorage.getItem('chiefCoupon')||'null');
const gallery=document.querySelector('#gallery');
const heroSlides=[...document.querySelectorAll('.hero-slide')];
let heroSlideIndex=0;
if(heroSlides.length>1&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const loadHero=slide=>{if(slide.dataset.srcset){slide.srcset=slide.dataset.srcset;delete slide.dataset.srcset}if(slide.dataset.src){slide.src=slide.dataset.src;delete slide.dataset.src}return slide.decode?.().catch(()=>{})||Promise.resolve()};
  setInterval(async()=>{
    const next=(heroSlideIndex+1)%heroSlides.length;
    await loadHero(heroSlides[next]);
    heroSlides[heroSlideIndex].classList.remove('active');
    heroSlideIndex=next;
    heroSlides[next].classList.add('active');
  },5000);
}
const cardPicture=(work,alt)=>{const variants=(window.chiefCardPreviews?.[work.image]||[]).filter(([width])=>width>=480),srcset=variants.map(([width,url])=>`${url} ${width}w`).join(', ');return srcset?`<picture><source type="image/webp" srcset="${srcset}" sizes="(max-width: 520px) 90vw, (max-width: 850px) 45vw, 32vw"><img loading="lazy" decoding="async" src="${work.image}" alt="${alt}"></picture>`:`<img loading="lazy" src="${work.image}" alt="${alt}">`};
const paperThumb=work=>{const variants=(window.chiefCardPreviews?.[work.image]||[]).filter(([width])=>width<=320),srcset=variants.map(([width,url])=>`${url} ${width}w`).join(', ');return variants.length?`<img loading="lazy" decoding="async" src="${variants[variants.length-1][1]}" srcset="${srcset}" sizes="92px" alt="">`:`<img loading="lazy" src="${work.image}" alt="">`};
const shippingIncluded=c=>c==='premium'||c==='super'; // Free shipping in Israel on Premium / Super Premium (Alucobond, Perspex).
// Shipping in Israel: Alucobond / Perspex free; Canvas ₪69, Paper ₪39 — charged once per order (the highest). Mirrors grow-worker.js.
const SHIP_FEE={canvas:69,paper:39};
const cartShippingFee=()=>cart.reduce((m,x)=>Math.max(m,SHIP_FEE[x.finish]||0),0);
// International air express per artwork by longest side (mirrors grow-worker.js intlFee). Import duties/taxes at destination are paid by the buyer.
const intlFee=size=>{const n=(String(size).match(/\d+/g)||['0']).map(Number),l=Math.max(...n);return l<=80?1500:l<=110?2100:4900};
const cartIntlFee=()=>cart.reduce((a,x)=>a+intlFee(x.size),0);
const cartHasPaper=()=>cart.some(x=>x.finish==='paper'||x.category==='paper');
const money=n=>new Intl.NumberFormat('en-IL',{style:'currency',currency:'ILS',maximumFractionDigits:0}).format(Math.round(n));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.1});
const watchReveals=()=>document.querySelectorAll('.reveal:not(.visible)').forEach(el=>revealObserver.observe(el));
const dismissIntro=()=>document.querySelector('#siteIntro')?.classList.add('depart');
window.addEventListener('load',()=>setTimeout(dismissIntro,350));
setTimeout(dismissIntro,2200);

let selectedFilter='accessible',showEveryWork=false;
// Photograph topics, tagged by looking at every image (Oct 2026). Used by the topic buttons and the search box.
const workThemes={"lobby": [204, 205, 172, 184, 188, 178, 186, 192], "sea": [204, 205, 1, 3, 4, 7, 8, 9, 11, 13, 14, 15, 16, 17, 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 41, 42, 43, 44, 45, 46, 47, 51, 53, 56, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 83, 84, 85, 88, 89, 90, 91, 92, 95, 96, 97, 98, 99, 101, 102, 103, 109, 112, 113, 114, 115, 116, 118, 119, 120, 122, 126, 127, 128, 129, 132, 133, 135, 136, 137, 138, 140, 141, 142, 145, 147, 149, 150, 155, 158, 159, 160, 163, 164, 166, 167, 168, 169, 170, 171, 175, 181, 187, 195, 196, 197, 198, 199, 200, 201, 202, 203], "sunset": [8, 9, 11, 13, 15, 17, 24, 27, 29, 30, 31, 32, 33, 34, 38, 60, 64, 66, 70, 72, 73, 78, 84, 85, 88, 90, 91, 92, 128, 135, 136, 141, 142, 145, 147, 150, 167, 168, 181, 195, 197, 201], "urban": [2, 3, 12, 19, 20, 21, 22, 40, 48, 59, 78, 79, 80, 82, 86, 87, 93, 100, 104, 107, 128, 130, 143, 146, 154, 161, 172, 173, 174, 176, 177, 178, 179, 180, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194], "telaviv": [2, 3, 12, 16, 19, 20, 21, 30, 31, 32, 40, 46, 59, 65, 78, 79, 80, 86, 87, 91, 93, 100, 101, 102, 104, 128, 137, 142, 143, 154, 161, 172, 173, 174, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 196], "nude": [47, 49, 50, 53, 71, 74, 94, 110, 111, 113, 116, 118, 119, 120, 123, 124, 125, 126, 127, 132, 134, 151, 156, 157, 158, 159, 160], "dance": [25, 27, 37, 41, 42, 44, 45, 46, 47, 54, 58, 67, 75, 76, 77, 83, 108, 114, 117, 119, 120, 162, 163, 164, 165, 166, 168, 169, 170], "bw": [1, 4, 6, 7, 8, 11, 12, 22, 26, 37, 40, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 53, 54, 55, 56, 58, 63, 65, 67, 68, 71, 74, 75, 76, 77, 89, 94, 95, 99, 103, 107, 108, 109, 110, 111, 114, 115, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 129, 131, 132, 133, 134, 139, 144, 146, 149, 154, 155, 161, 162, 163, 164, 165, 166, 169, 170, 174, 182, 189, 192], "reflection": [1, 2, 12, 19, 20, 22, 32, 59, 63, 65, 74, 77, 78, 79, 86, 87, 92, 93, 100, 102, 130, 143, 154, 161, 172, 173, 174, 176, 177, 178, 179, 182, 183, 186, 187, 188, 189, 190, 191, 192, 193], "sky": [4, 16, 29, 30, 31, 32, 62, 73, 88, 92, 128, 129, 141, 142, 147, 150, 181, 199, 201, 202], "animals": [18, 55, 63, 65, 80, 89, 95, 96, 97, 98, 102, 109, 121, 122, 129, 133, 171, 195, 198, 199, 200], "surreal": [5, 6, 7, 10, 11, 13, 14, 17, 18, 25, 28, 35, 36, 38, 39, 40, 41, 42, 44, 45, 56, 60, 68, 71, 75, 76, 77, 84, 85, 96, 97, 98, 99, 103, 104, 109, 113, 115, 122, 132, 133, 139, 140, 144, 155, 167, 170, 180]};
const themeOrder=["sea", "sunset", "urban", "telaviv", "nude", "dance", "bw", "reflection", "sky", "animals", "surreal"];
const themeLabels={"lobby": ["ללובי הבניין", "For lobbies"], "sea": ["ים", "Sea"], "sunset": ["שקיעות", "Sunsets"], "urban": ["אורבני", "Urban"], "telaviv": ["תל אביב", "Tel Aviv"], "nude": ["עירום אמנותי", "Artistic nude"], "dance": ["ריקוד ותנועה", "Dance & movement"], "bw": ["שחור-לבן", "Black & white"], "reflection": ["השתקפויות וגשם", "Reflections & rain"], "sky": ["שמיים ועננים", "Sky & clouds"], "animals": ["כלבים ובעלי חיים", "Dogs & animals"], "surreal": ["סוריאליסטי", "Surreal"]};
const themeSynonyms={"sea": ["ים", "חוף", "גלים", "גל", "sea", "beach", "ocean", "waves"], "sunset": ["שקיעה", "שקיעות", "sunset", "sunsets"], "urban": ["אורבני", "עירוני", "עיר", "רחוב", "urban", "city", "street"], "telaviv": ["תל אביב", "תל-אביב", "ת\"א", "יפו", "tel aviv", "tel-aviv", "jaffa", "tlv"], "nude": ["עירום", "עירום אמנותי", "ערום", "nude", "nudes", "artistic nude"], "dance": ["ריקוד", "רקדנית", "תנועה", "dance", "dancer", "ballet", "movement"], "bw": ["שחור לבן", "שחור-לבן", "מונוכרום", "black and white", "black & white", "monochrome", "b&w"], "reflection": ["השתקפות", "השתקפויות", "גשם", "שלולית", "reflection", "reflections", "rain", "puddle"], "sky": ["שמיים", "שמים", "עננים", "sky", "clouds"], "animals": ["כלב", "כלבים", "חיות", "בעלי חיים", "ציפורים", "תרנגול", "dog", "dogs", "animals", "birds"], "surreal": ["סוריאליסטי", "סוריאליזם", "surreal", "surrealism"]};
const themeSets=Object.fromEntries(Object.entries(workThemes).map(([k,v])=>[k,new Set(v)]));
const themeForQuery=q=>{const t=q.trim().toLocaleLowerCase().replace(/^[הבלו](?=[\u05D0-\u05EA]{2})/,'');return themeOrder.find(k=>themeSynonyms[k].some(s=>s===q.trim().toLocaleLowerCase()||s===t));};
let selectedTheme=null;
// Search in English and Hebrew. Hebrew words match whole words (with common prefixes like ה/ב/ל/ו),
// and are also translated to English keywords, because most artwork titles and descriptions are in English.
const heSearchTerms={'ים':['sea','beach','ocean','wave','shore','surf','tide'],'חוף':['beach','shore','sand','sea'],'גל':['wave','surf'],'גלים':['wave','waves','surf'],'אור':['light','glow','sun'],'שמש':['sun','sunlight'],'שקיעה':['sunset','dusk'],'זריחה':['sunrise','dawn'],'תל אביב':['tel aviv','jaffa','yafo'],'יפו':['jaffa','yafo'],'עיר':['city','urban','street'],'רחוב':['street','road'],'גשם':['rain','puddle','wet'],'שלולית':['puddle','reflection'],'השתקפות':['reflection','mirror'],'מראה':['mirror','reflection'],'שמיים':['sky','clouds'],'שמים':['sky','clouds'],'ענן':['cloud'],'עננים':['clouds','cloud'],'לילה':['night','midnight','dark'],'שחור לבן':['black and white','monochrome','black-and-white'],'צבע':['color','colour','colors'],'צבעים':['colors','colours','color'],'זהב':['gold','golden'],'ריקוד':['dance','dancer','dancing'],'רקדנית':['dancer','dance'],'פרח':['flower','bloom','blossom'],'פרחים':['flowers','bloom','blossom'],'עץ':['tree'],'עצים':['trees','tree'],'ציפור':['bird'],'ציפורים':['birds','bird'],'כלב':['dog'],'ילדה':['girl','daughter','child'],'אישה':['woman','her'],'בניין':['building','architecture'],'אופניים':['bicycle','bike'],'סערה':['storm'],'אש':['fire','burning'],'מים':['water','sea'],'נמל':['port','harbor','harbour'],'אנשים':['people','crowd'],'בית':['home','house']};
const heWord=word=>new RegExp('(^|[^\u05D0-\u05EA])[הבלמושכ]{0,2}'+word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?=[^\u05D0-\u05EA]|$)');
function searchMatches(w,query){
  const theme=themeForQuery(query);if(theme&&themeSets[theme].has(w.id))return true;
  const english=[w.title,w.discovery?.en,w.discovery?.roomEn,labels[w.category]].join(' ').toLocaleLowerCase();
  if(english.includes(query))return true;
  if(!/[\u05D0-\u05EA]/.test(query))return false;
  const hebrew=[w.discovery?.he,w.discovery?.roomHe,typeof heLabels!=='undefined'?heLabels[w.category]:''].join(' ');
  if(heWord(query).test(hebrew))return true;
  const stripped=query.replace(/^[הבלו](?=[\u05D0-\u05EA]{2})/,'');
  const terms=heSearchTerms[query]||heSearchTerms[stripped]||[];
  return terms.some(t=>new RegExp('\\b'+t+'\\b').test(english));
}
function renderWorks(filter=selectedFilter){
  selectedFilter=filter;
  const query=document.querySelector('#artworkSearch')?.value.trim().toLocaleLowerCase()||'';
  const matches=works.filter(w=>(filter==='all'||w.category===filter)&&(!selectedTheme||themeSets[selectedTheme].has(w.id))&&(!query||searchMatches(w,query)));
  const visible=showEveryWork||query||selectedTheme?matches:matches.slice(0,8);
  if(!gallery.dataset.catalogReady){
    const slugify=s=>s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    const card=w=>{const isPaper=w.category==='paper',lowest=w.category==='accessible'?canvasPrices[0]:isPaper?w.prices[0]:prices[w.category][0],actualStart=w.sizeMode==='fixed70'?prices.square[1]:lowest,categoryText=heProductRoute?(w.category==='accessible'?'מהדורת Art · קנבס מוכן לתלייה':heLabels[w.category]+' · מס׳ '+String(w.id).padStart(2,'0')):(w.category==='accessible'?'Art Edition · Canvas ready to hang':labels[w.category]+' · No. '+String(w.id).padStart(2,'0')),material=heProductRoute?(w.category==='accessible'?'קנבס':isPaper?'נייר Fine Art':'אלוקובונד'):(w.category==='accessible'?'Canvas':isPaper?'Fine Art paper':'Alucobond'),from=heProductRoute?'החל מ־':'from ',choose=heProductRoute?(w.category==='accessible'?'בחירת קנבס':'בחירת גודל וחומר'):(w.category==='accessible'?'Choose canvas':'Choose size & finish'),shipping=shippingIncluded(w.category)?`<small class="included-shipping">${heProductRoute?'משלוח חינם לכל הארץ':'Free shipping in Israel'}</small>`:'',series={paper:'paper',accessible:'art',premium:'premium',super:'super',square:'squares','late-night':'late-night'}[w.category],link=isPaper?`${heProductRoute?'/he/paper-edition/':'/paper-edition/'}#work-${String(paperWorks.findIndex(p=>p.id===w.id)+1).padStart(2,'0')}`:`${heProductRoute?'/he/artworks/':'/artworks/'}${slugify(w.title)}-${w.id}/`;return `<article class="work-card reveal" data-id="${w.id}" data-orientation="${window.chiefOrientations?.[w.id]||''}" data-series="${series}" data-start-price="${actualStart}" tabindex="0"><div class="image-wrap"><span class="work-number">${String(w.id).padStart(2,'0')}</span>${cardPicture(w,`${w.title} — ${heProductRoute?'צילום אמנותי מאת ערן ירושלמי (CHIEF)':'fine art photography by Eran Yerushalmi (CHIEF)'}`)}</div><div class="work-meta"><div><h3 class="notranslate" translate="no"><a class="work-link" href="${link}">${w.title}</a></h3><p>${categoryText}</p>${w.soldEditions?`<p class="edition-availability">${availabilityText(w)}</p>`:''}</div><span>${material} ${from}${money(lowest)}<small data-ils="${lowest}"></small>${shipping}</span></div>${isPaper&&paperClosed()?paperNotice():`<button type="button" class="work-shop" data-work-shop="${w.id}">${choose}</button>`}</article>`};
    gallery.innerHTML=works.map(card).join('');
    gallery.dataset.catalogReady='true';
    gallery.querySelectorAll('.work-card').forEach(c=>{c.onclick=e=>{if(e.target.closest('a'))e.preventDefault();openProduct(+c.dataset.id)};c.onkeydown=e=>{if(e.key==='Enter')openProduct(+c.dataset.id)}});
  }
  const visibleIds=new Set(visible.map(w=>w.id));
  gallery.querySelectorAll('.work-card').forEach(c=>{c.dataset.baseHidden=String(!visibleIds.has(Number(c.dataset.id)));c.hidden=c.dataset.baseHidden==='true'});
  const more=document.querySelector('#showMoreWorks');
  more.hidden=showEveryWork||!!query||matches.length<=visible.length;
  more.textContent=ui(`להצגת כל ${matches.length} העבודות במבחר`,`Show all ${matches.length} works in this selection`);
  window.chiefApplyCatalogFilters?.();
  watchReveals();window.chiefRefreshCurrency?.();
}
window.chiefShowAllForFiltering=()=>{
  selectedFilter='all';showEveryWork=true;
  document.querySelector('.filters .active')?.classList.remove('active');
  document.querySelector('.filters [data-filter="all"]')?.classList.add('active');
  renderWorks('all');
};

function renderPaperDrop(){
  const scene=document.querySelector('#paperRoomScene'),art=document.querySelector('#paperRoomArt'),title=document.querySelector('#paperRoomTitle'),strip=document.querySelector('#paperRoomStrip');if(!scene||!art||!title||!strip)return;
  const portraitIndexes=new Set([0,2,4,5,6,8,9]);
  strip.innerHTML=paperWorks.map((w,i)=>`<button type="button" class="paper-room__thumb${i===0?' is-selected':''}" data-paper-index="${i}" aria-label="Show ${w.title} in the room" aria-pressed="${i===0?'true':'false'}">${paperThumb(w)}<span>${String(i+1).padStart(2,'0')}</span></button>`).join('');
  const buttons=[...strip.querySelectorAll('.paper-room__thumb')];let current=0,scrollTimer,startX=0;
  const selectPaper=(index,move=true)=>{
    current=(index+paperWorks.length)%paperWorks.length;const work=paperWorks[current];
    /* Preload, then swap. The build adds a responsive srcset to this <img> for work 01; it must be removed, or the browser keeps showing 01 whatever src is set. */
    const token=current,show=()=>{if(token!==current)return;art.removeAttribute('loading');art.removeAttribute('srcset');art.removeAttribute('sizes');art.src=work.image;art.alt=`${work.title} displayed full-frame without a frame in a living room`;art.classList.toggle('is-portrait',portraitIndexes.has(current));art.style.opacity='1'};
    art.style.opacity='.15';const pre=new Image();pre.onload=pre.onerror=show;pre.src=work.image;setTimeout(show,1200);
    title.textContent=`${String(current+1).padStart(2,'0')} · ${work.title}`;
    buttons.forEach((button,i)=>{button.classList.toggle('is-selected',i===current);button.setAttribute('aria-pressed',i===current?'true':'false')});
    if(move)buttons[current].scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
  };
  const film=document.querySelector('.paper-film'),filmVideo=document.querySelector('#paperFilm');
  const showScene=()=>{if(film){film.style.display='none';if(filmVideo)filmVideo.pause()}scene.style.display='block';if(scene.getBoundingClientRect().top<70)scene.scrollIntoView({behavior:'smooth',block:'start'})};
  const back=document.querySelector('#paperRoomBack');if(back)back.onclick=e=>{e.stopPropagation();scene.style.display='none';if(film){film.style.display='';if(filmVideo){const p=filmVideo.play();if(p)p.catch(()=>{})}}};
  buttons.forEach((button,i)=>button.addEventListener('click',()=>{selectPaper(i);showScene()}));
  /* Selection follows taps/arrows/swipes only: auto-selecting the thumbnail nearest the centre while the strip scrolls overrode taps on the first/last works on phones. */
  const requestedPaper=Number(new URLSearchParams(location.search).get('paper'));
  document.querySelector('#paperRoomPrev').onclick=()=>{selectPaper(current-1);showScene()};
  document.querySelector('#paperRoomNext').onclick=()=>{selectPaper(current+1);showScene()};
  document.querySelector('#paperRoomOrder').onclick=()=>{if(!paperClosed())openProduct(paperWorks[current].id);else refreshPaperState()};
  scene.addEventListener('pointerdown',event=>{startX=event.clientX});
  scene.addEventListener('pointerup',event=>{const delta=event.clientX-startX;if(Math.abs(delta)>38)selectPaper(current+(delta<0?1:-1))});
  /* A link like /?paper=6 opens on that work (the default selection used to run after it and reset it to 01). */
  if(requestedPaper>=1&&requestedPaper<=paperWorks.length){selectPaper(requestedPaper-1);setTimeout(()=>document.querySelector('#paper-edition')?.scrollIntoView({block:'start'}),300);}else selectPaper(0,false);
  const countdown=document.querySelector('#paperCountdown'),end=paperCloseDate;
  const updateCountdown=()=>{const diff=Math.max(0,end-Date.now()),days=Math.floor(diff/86400000),hours=Math.floor(diff%86400000/3600000),mins=Math.floor(diff%3600000/60000);countdown.textContent=diff?ui(`${days} ימים, ${hours} שעות ו־${mins} דקות`,`${days}d ${hours}h ${mins}m`):ui('המהדורה נסגרה','Drop closed');};updateCountdown();setInterval(updateCountdown,60000);
}
function refreshPaperState(){
  if(!paperClosed())return;
  // Homepage entry points to the closed Paper Edition: point visitors to the mailing list / canvas instead.
  document.querySelectorAll('.shop-path[href="#paper-edition"]').forEach(card=>card.style.display='none');document.querySelectorAll('.shop-path small').forEach(el=>{el.textContent=el.textContent.replace(/^0([2-9])/,(m,n)=>'0'+(n-1))});
  document.querySelectorAll('a.hero-shop-primary[href="#paper-edition"]').forEach(a=>{a.textContent=ui('מהדורת נייר חדשה בקרוב · הצטרפו לרשימה','New Paper Edition soon · join the list');a.setAttribute('href','#newsletter')});
  document.querySelectorAll('nav a[href="#paper-edition"]').forEach(a=>a.textContent=ui('מהדורת נייר · בקרוב','Paper Edition · coming soon'));
  const pathsNote=document.querySelector('.shop-paths-note');if(pathsNote)pathsNote.textContent=ui('מהדורת הנייר הנוכחית נסגרה, ומהדורה חדשה בדרך. Art Edition על קנבס זמינה כל השנה. כל עבודה מגיעה עם תעודת מקוריות, ומחירי המשלוח מופיעים בכל עבודה.','The current Paper Edition has closed; a new one is on its way. Art Edition canvas is available year-round. Every work includes a Certificate of Authenticity, and shipping prices are listed on every work.');
  document.querySelectorAll('.work-card[data-series="paper"] .work-shop').forEach(button=>button.outerHTML=paperNotice());
  const order=document.querySelector('#paperRoomOrder');if(order)order.outerHTML=paperNotice();
  const dialog=document.querySelector('#productDialog');
  if(dialog.open&&dialog.querySelector('.paper-product .add-to-cart')){
    const id=Number(dialog.querySelector('.paper-product')?.dataset.workId);
    dialog.close();if(id)openProduct(id);
  }
  renderCart();
}
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{document.querySelector('.filters .active')?.classList.remove('active');b.classList.add('active');showEveryWork=false;renderWorks(b.dataset.filter)});
document.querySelector('#artworkSearch')?.addEventListener('input',()=>renderWorks());
(function setupThemeChips(){
  const filters=document.querySelector('.shop-controls .filters');if(!filters)return;
  const row=document.createElement('div');row.className='theme-chips';row.setAttribute('role','group');row.setAttribute('aria-label',ui('נושאים','Topics'));
  row.innerHTML=`<span class="theme-chips__label">${ui('לפי נושא:','By topic:')}</span>`+themeOrder.map(k=>`<button type="button" data-theme="${k}" aria-pressed="false">${ui(themeLabels[k][0],themeLabels[k][1])}</button>`).join('');
  filters.after(row);
  row.addEventListener('click',e=>{const b=e.target.closest('button[data-theme]');if(!b)return;
    selectedTheme=selectedTheme===b.dataset.theme?null:b.dataset.theme;
    row.querySelectorAll('button').forEach(x=>{const on=x.dataset.theme===selectedTheme;x.classList.toggle('active',on);x.setAttribute('aria-pressed',on)});
    if(selectedTheme){document.querySelector('.filters .active')?.classList.remove('active');document.querySelector('.filters [data-filter="all"]')?.classList.add('active');const s=document.querySelector('#artworkSearch');if(s)s.value='';renderWorks('all');}
    else renderWorks();
  });
  document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{if(!selectedTheme)return;selectedTheme=null;row.querySelectorAll('button').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-pressed','false')});renderWorks()}));
})();
document.querySelector('#showMoreWorks').onclick=()=>{showEveryWork=true;renderWorks()};
document.querySelectorAll('[data-shop-filter]').forEach(link=>link.addEventListener('click',()=>{const filter=link.dataset.shopFilter;document.querySelector('.filters .active')?.classList.remove('active');document.querySelector(`.filters [data-filter="${filter}"]`)?.classList.add('active');showEveryWork=false;document.querySelector('#artworkSearch').value='';renderWorks(filter)}));
document.querySelectorAll('[data-jump]').forEach(card=>{if(card.tagName==='A')return;card.onclick=()=>{const filter=card.dataset.jump;const button=document.querySelector(`.filters [data-filter="${filter}"]`);document.querySelector('.filters .active')?.classList.remove('active');button?.classList.add('active');renderWorks(filter);document.querySelector('#collection').scrollIntoView({behavior:'smooth'})}});

function openProduct(id,preferredFinish){
  const w=works.find(x=>x.id===id);
  const productSizes=(w.sizes||(w.sizeMode==='fixed70'?[squareSizes[1]]:w.category==='square'?squareSizes:sizes)).map(formatSize);
  const p=w.prices||(w.sizeMode==='fixed70'?[prices.square[1]]:prices[w.category]);
  const isPaper=w.category==='paper';
  const canvasChoice=w.category==='accessible'?`<label><span><input type="radio" name="finish" value="canvas" checked> Canvas — stretched & ready to hang</span><strong>${ui('החל מ־','From ')}${money(canvasPrices[0])}</strong></label>`:'';
  const deliveryCopy=shippingIncluded(w.category)?'Free shipping in Israel · International air express: ₪1,500 / ₪2,100 / ₪4,900 per artwork by size. Import duties and local taxes, if applicable, are not included.':isPaper?`Printed to order · Unframed · Shipping in Israel ₪39 per order (ships within Israel only). This work leaves the Paper Edition on ${paperDateEn}.`:w.category==='accessible'?'Made to order · Canvas production and delivery: 10–14 business days. Shipping in Israel: ₪69 for canvas, free for Alucobond & Perspex · International from ₪1,500 by size.':'Made to order · Free shipping in Israel for Alucobond & Perspex, ₪69 for canvas · International from ₪1,500 by size.';
  const featured=w.featured?`<a class="featured-proof" href="${w.featured.url}" target="_blank" rel="noopener noreferrer"><span>Featured by ${w.featured.publisher}</span><strong>${w.featured.reactions} ${w.featured.primaryLabel||'reactions'} · ${w.featured.secondary||w.featured.shares} ${w.featured.secondaryLabel||'shares'}</strong><em>View original feature ↗</em></a>`:'';
  const collectorStoryUrl=`/collector-stories/?lang=${heProductRoute?'he':'en'}&artwork=${encodeURIComponent(w.title)}`;
  document.querySelector('#productView').innerHTML=`<div class="product-layout ${isPaper?'paper-product':''}" data-work-id="${w.id}"><div class="product-visuals"><img class="product-main-image" src="${w.image}" alt="${w.title}">${interiorMockups[w.id]?`<figure class="product-interior"><figcaption><strong>See it in your space</strong><span>Interior visualization · full frame</span></figcaption><img src="${interiorMockups[w.id]}" alt="${w.title} displayed full-frame in an interior"></figure>`:''}</div><div class="product-info"><button class="close-product" aria-label="Close">×</button>${isPaper?`<span class="paper-badge">${paperMonthEn} Drop · ${paperDays} Days</span>`:''}<p class="category-tag">${labels[w.category]} · ${editionText(w.category)}</p><h2 class="notranslate" translate="no">${w.title}</h2>${w.soldEditions?`<p class="edition-availability">${availabilityText(w)}</p>`:''}<p>Signed Fine Art photograph · Certificate of Authenticity included.</p>${w.discovery?`<p>${w.discovery.en}</p><p>${w.discovery.roomEn}</p>`:""}<div class="option-group"><label>Choose a size · W × H cm</label><div class="choices">${productSizes.map((s,i)=>`<label><span><input type="radio" name="size" value="${i}" ${i===0?'checked':''}> ${s}<small>${availabilityText(w)}</small></span><strong data-size-price="${i}">${money(w.category==='accessible'?canvasPrices[i]:p[i])}</strong></label>`).join('')}</div></div><div class="option-group finish-option-group"><label>${isPaper?'Finish':'Choose a finish'}</label><div class="choices finish-choices">${isPaper?'<label><span><input type="radio" name="finish" value="paper" checked> Archival Fine Art Paper · unframed</span></label>':`<label><span><input type="radio" name="finish" value="alucobond" ${w.category==='accessible'?'':'checked'}> Alucobond — matte</span></label><label><span><input type="radio" name="finish" value="perspect"> Perspex — glossy & floating</span></label>${canvasChoice}`}</div></div><p class="shipping-note">${deliveryCopy}</p><button class="add-to-cart">Add to bag · <span>${money(w.category==='accessible'?canvasPrices[0]:p[0])}</span></button><p class="product-next-step">Secure card payment on the site via Grow. Shipping in Israel: Alucobond and Perspex free · Canvas ₪69 · Paper ₪39.</p><p class="product-next-step">Approximate conversion for the selected artwork: <span data-ils="${w.category==='accessible'?canvasPrices[0]:p[0]}"></span> · The payment quote is in ILS.</p><p class="collector-story-product-note">Already own this work? <a href="${collectorStoryUrl}">Share your Collector Story after it arrives.</a></p>${featured}</div></div>`;
  {const tag=document.querySelector('#productView .category-tag');if(tag){const n=w.category==='super'?7:(w.category==='premium'||w.category==='late-night')?25:0;const note=n?`<p class="edition-note">${ui(`${n} עותקים בסך הכול לכל יצירה, בכל הגדלים והחומרים יחד. כל עותק ממוספר, חתום ומגיע עם תעודת מקוריות.`,`${n} copies in total for this work, across all sizes and finishes combined. Each copy is numbered, signed and comes with a Certificate of Authenticity.`)}</p>`:'';tag.insertAdjacentHTML('afterend',note+`<p class="certificate-link"><a href="/assets/certificate-of-authenticity-sample.jpg" target="_blank" rel="noopener">${ui('לצפייה בדוגמה לתעודת המקוריות','See a sample Certificate of Authenticity')}</a></p>`)}}
  if(heProductRoute){
    const info=document.querySelector('#productView .product-info');info.dir='rtl';
    info.querySelector('.category-tag').textContent=`${heLabels[w.category]} · ${cartEditionText(w.category)}`;
    if(w.discovery){const detail=[...info.querySelectorAll('h2 ~ p')];const english=detail.find(x=>x.textContent===w.discovery.en);if(english)english.textContent=w.discovery.he;const room=detail.find(x=>x.textContent===w.discovery.roomEn);if(room)room.textContent=w.discovery.roomHe}
    const signed=[...info.querySelectorAll('p')].find(x=>x.textContent.startsWith('Signed Fine Art'));if(signed)signed.textContent='צילום אמנותי מקורי מאת CHIEF · תעודת מקוריות כלולה';
    info.querySelectorAll('.option-group > label')[0].textContent='בחרו גודל · רוחב × גובה בס״מ';
    info.querySelectorAll('.option-group > label')[1].textContent='בחרו חומר';
    const finishNames={paper:'נייר Fine Art ארכיוני · ללא מסגרת',alucobond:'אלוקובונד · מט',perspect:'פרספקס · מבריק ומרחף',canvas:'קנבס · מתוח ומוכן לתלייה'};
    info.querySelectorAll('input[name="finish"]').forEach(input=>{const textNode=[...input.parentElement.childNodes].find(node=>node.nodeType===Node.TEXT_NODE);if(textNode)textNode.textContent=` ${finishNames[input.value]}`});
    info.querySelector('.shipping-note').textContent=isPaper?'מודפס לפי הזמנה על נייר Fine Art ארכיוני · חתום וללא מסגרת · תעודת מקוריות כלולה. משלוח לכל הארץ ₪39.':'מיוצר לפי הזמנה. משלוח לכל הארץ: אלוקובונד ופרספקס חינם · קנבס ₪69 · נייר ₪39. משלוח לחו״ל: ₪1,500–₪4,900 לפי גודל.';
    info.querySelector('.product-next-step').textContent='תשלום מאובטח בכרטיס אשראי באתר, דרך Grow.';
    info.querySelector('.add-to-cart').firstChild.textContent='הוספה לסל · ';
    info.querySelector('.close-product').setAttribute('aria-label','סגירה');
    const conversion=info.querySelectorAll('.product-next-step')[1];conversion.innerHTML=`המרה משוערת למחיר היצירה: <span data-ils="${w.category==='accessible'?canvasPrices[0]:p[0]}"></span> · התשלום בש״ח.`;
    if(isPaper)info.querySelector('.paper-badge').textContent=`מהדורת נייר · עד ${paperDateHe}`;
    info.querySelector('.collector-story-product-note').innerHTML=`כבר רכשתם את העבודה הזו? <a href="${collectorStoryUrl}">שתפו את סיפור ה־Collector שלכם לאחר שהיא תגיע לביתכם.</a>`;
  }
  const dialog=document.querySelector('#productDialog');
  if(isPaper&&paperClosed()){
    document.querySelectorAll('#productView .option-group').forEach(group=>group.remove());
    document.querySelector('#productView .add-to-cart').outerHTML=paperNotice();
    dialog.showModal();document.querySelector('.close-product').onclick=()=>dialog.close();
    window.chiefRefreshCurrency?.();return;
  }
  dialog.showModal();window.chiefRefreshCurrency?.();
  const priceFor=(si,f)=>f==='paper'?p[si]:f==='canvas'?canvasPrices[si]:f==='perspect'?(perspectPrices[w.category]?.[si]??p[si]*finishFactor[f]):p[si];
  const update=()=>{const si=+document.querySelector('input[name="size"]:checked').value,f=document.querySelector('input[name="finish"]:checked').value;document.querySelectorAll('[data-size-price]').forEach(el=>{const i=+el.dataset.sizePrice;el.textContent=money(priceFor(i,f))});document.querySelector('.add-to-cart span').textContent=money(priceFor(si,f));document.querySelector('.product-info [data-ils]')?.setAttribute('data-ils',String(priceFor(si,f)));window.chiefRefreshCurrency?.()};
  document.querySelectorAll('#productView input').forEach(i=>i.onchange=update);
  if(preferredFinish&&document.querySelector(`#productView input[name="finish"][value="${preferredFinish}"]`)){document.querySelector(`#productView input[name="finish"][value="${preferredFinish}"]`).checked=true;update()}
  document.querySelector('.close-product').onclick=()=>dialog.close();
  document.querySelector('.add-to-cart').onclick=()=>{if(isPaper&&paperClosed()){refreshPaperState();return}const si=+document.querySelector('input[name="size"]:checked').value,f=document.querySelector('input[name="finish"]:checked').value;const newItem={...w,size:productSizes[si],finish:f,price:isPaper?Math.round(priceFor(si,f)):Math.round(priceFor(si,f)/10)*10};if(!canAddCopy(newItem)){if(isPaper&&paperItemUnavailable(newItem)){refreshPaperState();return}alert(ui('כל העותקים הזמינים של יצירה זו כבר בסל.','All available copies of this work are already in your bag.'));return}cart.push(newItem);saveCart();dialog.close();openCart()};
}
const orderPricing=()=>{const subtotal=cart.reduce((a,x)=>a+x.price,0),eligible=cart.filter(x=>x.category!=='paper').reduce((a,x)=>a+x.price,0),discount=appliedCoupon?Math.round(eligible*appliedCoupon.percent/100/10)*10:0,c=shippingCountry(),shipping=(!c||isIsraelShipping(c))?cartShippingFee():cartIntlFee();return{subtotal,discount,shipping,total:subtotal-discount+shipping}};
function shippingCountry(){return document.querySelector('#shippingForm [name="country"]')?.value.trim()||''}
function isIsraelShipping(country){const c=String(country||'').trim().toLowerCase().replace(/[.\s]+/g,' ').replace(/^(the )?(state of )?/,'');if(['il','isr'].includes(c)||c.includes('ישראל'))return true;const w=c.replace(/ /g,'');if(w.length<4||w.length>9)return false;const t='israel',d=[...Array(t.length+1).keys()];for(let i=1;i<=w.length;i++){let p=d[0];d[0]=i;for(let j=1;j<=t.length;j++){const q=d[j];d[j]=Math.min(d[j]+1,d[j-1]+1,p+(w[i-1]===t[j-1]?0:1));p=q}}return d[t.length]<=2}
function cartShippingIncluded(country=shippingCountry()){return cart.length>0&&(!country||isIsraelShipping(country))}
function shippingSummary(he=heProductRoute){
  const country=shippingCountry();
  if(cart.length&&country&&!isIsraelShipping(country)){if(cartHasPaper())return he?'מהדורת הנייר נשלחת בישראל בלבד.':'Paper Edition ships within Israel only.';const f=cartIntlFee();return he?`משלוח אווירי לחו״ל: ${money(f)} (50×75 ₪1,500 · 70×105 ₪2,100 · 100×150 ₪4,900 לכל יצירה). מכס ומסים במדינת היעד על הלקוח.`:`International air express: ${money(f)} (₪1,500 / ₪2,100 / ₪4,900 per artwork by size). Import duties and local taxes are paid by the buyer.`}
  const fee=cartShippingFee();
  if(!fee)return he?'משלוח חינם לכל הארץ.':'Free shipping in Israel.';
  return he?`משלוח בארץ: ${money(fee)} (קנבס ₪69 · נייר ₪39 · אלוקובונד ופרספקס חינם). פעם אחת להזמנה.`:`Shipping in Israel: ${money(fee)} (Canvas ₪69 · Paper ₪39 · Alucobond and Perspex free). Once per order.`;
}
// null = not checked yet / check failed: still offer online payment; the server falls back to WhatsApp if it is really off.
let growEnabled=null;
// Test visits (eranchief.com/?growtest=1) use Grow's sandbox; the flag is remembered for this browser tab only.
const growTestQuery=(()=>{try{if(new URLSearchParams(location.search).get('growtest')==='1')sessionStorage.setItem('growtest','1');return sessionStorage.getItem('growtest')==='1'?'?test=1':''}catch{return ''}})();
// Grow wallet SDK (credit card, Bit, Apple/Google Pay) — loaded only when the customer starts paying.
let growOrderId='',growSdkPromise=null;
function loadGrowSdk(env='PRODUCTION'){
  if(growSdkPromise)return growSdkPromise;
  growSdkPromise=new Promise((resolve,reject)=>{
    const s=document.createElement('script');s.src='https://cdn.meshulam.co.il/sdk/gs.min.js';s.async=true;
    s.onload=()=>{try{window.__growInitAt=Date.now();window.growPayment.init({environment:env,version:1,events:{
      onSuccess:()=>{location.href='/order/thanks/?o='+encodeURIComponent(growOrderId)},
      onFailure:r=>{console.warn('Grow onFailure',r);const d=document.querySelector('#checkoutDialog');if(d&&!d.open)d.showModal();const e=document.querySelector('#payError');if(e){e.textContent=((r&&(r.message||r.data?.message))||'')+' ['+JSON.stringify(r||{}).slice(0,220)+']'||ui('התשלום לא הושלם. אפשר לנסות שוב.','The payment was not completed. You can try again.');e.hidden=false}},
      onError:r=>{console.warn('Grow onError',r);const d=document.querySelector('#checkoutDialog');if(d&&!d.open)d.showModal();const e=document.querySelector('#payError');if(e){e.textContent=((r&&(r.message||r.data?.message))||'')+' ['+JSON.stringify(r||{}).slice(0,220)+']'||ui('אירעה שגיאה בתשלום. אפשר לנסות שוב.','A payment error occurred. You can try again.');e.hidden=false}},
      onTimeout:()=>{},onWalletChange:()=>{},onPaymentStart:()=>{},onPaymentCancel:()=>{}}});resolve()}catch(e){growSdkPromise=null;reject(e)}};
    s.onerror=()=>{growSdkPromise=null;reject(new Error('sdk'))};
    document.head.appendChild(s);
  });
  return growSdkPromise;
}
const checkGrow=()=>fetch('/api/grow/status'+growTestQuery,{cache:'no-store'}).then(r=>r.ok?r.json():{}).then(d=>{if(typeof d.enabled==='boolean')growEnabled=d.enabled;if(d.enabled)loadGrowSdk(d.sandbox?'DEV':'PRODUCTION').catch(()=>{});if(document.querySelector('#checkoutDialog')?.open)updateShippingUi()}).catch(()=>{});checkGrow();
// Re-check when a tab is restored from the back/forward cache and whenever checkout opens, so a page loaded earlier still offers online payment.
window.addEventListener('pageshow',e=>{if(e.persisted)checkGrow()});
// Card payment for every delivery in Israel; shipping is added per SHIP_FEE.
function onlinePayAvailable(){return growEnabled!==false&&cart.length>0&&!(abroadOrder()&&cartHasPaper())&&!hasClosedPaper()}
function abroadOrder(){const c=shippingCountry();return cart.length>0&&!!c&&!isIsraelShipping(c)}
function updateOnlinePay(){const box=document.querySelector('#onlinePay');if(!box)return;const on=onlinePayAvailable();/* address + terms checkbox (with link to the terms) are always shown on the payment page, as Grow's site review requires */box.hidden=false;box.querySelector('[name="address"]').required=true;box.querySelector('[name="terms"]').required=true;
  box.querySelector('[data-op="address"]').textContent=ui('רחוב ומספר בית','Street address and number');
  box.querySelector('[data-op="terms"]').innerHTML=ui('קראתי ואני מאשר/ת את <a href="/terms/" target="_blank">תנאי הרכישה</a>, ואני בן/בת 18 ומעלה.','I accept the <a href="/terms/" target="_blank">Terms of Sale</a> and confirm I am 18 or older.');
  const small=document.querySelector('#shippingForm .submit-order + small');if(small){small.dataset.orig??=small.innerHTML;small.innerHTML=on?ui('התשלום מתבצע בדף המאובטח של Grow. CHIEF לא שומר את פרטי הכרטיס. <a href="/shipping-returns/" target="_blank">מדיניות משלוחים והחזרות</a>.','Payment is completed on Grow’s secure page. CHIEF does not store card details. <a href="/shipping-returns/" target="_blank">Shipping &amp; Returns Policy</a>.'):small.dataset.orig}
  if(on)queueMicrotask(()=>{const note=document.querySelector('.checkout-note');if(note)note.textContent=ui('תשלום מאובטח בכרטיס אשראי דרך Grow. אספקה תוך עד 14 ימי עסקים מאישור התשלום.','Secure card payment via Grow. Delivery takes up to 14 business days from payment approval.');});
  const button=document.querySelector('#shippingForm .submit-order');if(button){button.textContent=ui('לתשלום מאובטח בכרטיס אשראי','Pay securely by card');button.disabled=!on}
  const err=document.querySelector('#payError');let why='';if(!on&&cart.length){if(abroadOrder()&&cartHasPaper())why=ui('מהדורת הנייר נשלחת בישראל בלבד. כדי לשלם על משלוח לחו״ל, הסירו את הדפסי הנייר מהסל.','Paper Edition ships within Israel only. Remove paper prints from the bag to pay for international delivery.');else if(hasClosedPaper())why='';else if(growEnabled===false)why=ui('התשלום באשראי ייפתח בימים הקרובים. לשאלות: eranychief@gmail.com · 050-7123109','Card payment opens in the coming days. Questions: eranychief@gmail.com · +972 50-712-3109');}
  if(err){if(why){err.textContent=why;err.hidden=false;err.dataset.abroad='1'}else if(err.dataset.abroad){err.hidden=true;err.dataset.abroad=''}}}
function updateShippingUi(){updateOnlinePay();const pr=orderPricing(),he=heProductRoute;document.querySelector('.cart-total span').textContent=he?'סכום כולל משלוח':'Total including shipping';document.querySelector('#shippingTotalLabel').textContent=he?'סכום כולל משלוח':'Total including shipping';const st=document.querySelector('#shippingTotal');if(st){st.textContent=money(pr.total);document.querySelector('#shippingApprox').dataset.ils=String(pr.total)}document.querySelector('#cartShippingStatus').textContent=shippingSummary();document.querySelector('#shippingStatus').textContent=shippingSummary();document.querySelector('#cartFlow').textContent=he?'תשלום מאובטח בכרטיס אשראי, Bit או Apple Pay דרך Grow.':'Secure payment by card, Bit or Apple Pay via Grow.';document.querySelector('.checkout-note').textContent=he?'תשלום מאובטח בכרטיס אשראי דרך Grow. אישור הזמנה יישלח למייל.':'Secure card payment via Grow. An order confirmation is sent by email.';}
function saveCart(){localStorage.setItem('chiefCart',JSON.stringify(cart));document.querySelector('#cartCount').textContent=cart.length;renderCart()}
function renderCart(){
  updateShippingUi();const pricing=orderPricing(),groups=cartGroups();
  document.querySelector('#cartItems').innerHTML=groups.length?groups.map(({item:x,indices},i)=>`<div class="cart-item"><img src="${x.image}" alt=""><div><h3 class="notranslate" translate="no">${x.title}</h3><p>${x.size}</p><p>${finishText(x.finish)}</p><p>${cartEditionText(x.category)}</p><p>${ui('מחיר ליחידה','Unit price')}: ${money(x.price)}</p><div class="cart-quantity" role="group" aria-label="${ui('כמות','Quantity')}"><button type="button" data-quantity="minus" data-group="${i}" aria-label="${ui('הפחתת כמות','Decrease quantity')}" ${indices.length===1?'disabled':''}>−</button><output aria-live="polite">${indices.length}</output><button type="button" data-quantity="plus" data-group="${i}" aria-label="${ui('הגדלת כמות','Increase quantity')}" ${canAddCopy(x)?'':'disabled'}>+</button></div><strong>${money(x.price*indices.length)}</strong></div><button type="button" class="remove" data-group="${i}" aria-label="${ui('הסרת היצירה מהסל','Remove artwork from bag')}">×</button></div>`).join(''):ui('<p>הסל ריק.</p>','<p>Your bag is empty.</p>');
  document.querySelector('#cartSubtotal').textContent=money(pricing.subtotal);document.querySelector('#cartTotal').textContent=money(pricing.total);document.querySelector('#cartApprox').dataset.ils=String(pricing.total);window.chiefRefreshCurrency?.();document.querySelector('#cartDiscount').textContent=`−${money(pricing.discount)}`;document.querySelector('#cartDiscountRow').hidden=!appliedCoupon;const status=document.querySelector('#couponStatus');if(appliedCoupon){status.textContent=ui(`הנחה של ${appliedCoupon.percent}% הוחלה על המהדורות הזכאיות. מהדורת הנייר אינה כלולה.`,`${appliedCoupon.percent}% private discount applied to eligible editions. Paper Edition excluded.`);status.className='success';document.querySelector('#couponCode').value=appliedCoupon.code}else if(!status.classList.contains('error')){status.textContent='';status.className=''}
  const closed=hasClosedPaper();
  document.querySelector('#checkoutButton').disabled=closed;
  const qr=document.querySelector('#quickRequestButton');if(qr)qr.hidden=true;
  document.querySelector('#cartFlow').innerHTML=closed?`${paperNotice()}<p>${ui('הסירו מהסל את הדפסי הנייר שנסגרו כדי להמשיך בהזמנה.','Remove closed Paper Edition prints from your bag to continue.')}</p>`:document.querySelector('#cartFlow').textContent;
  document.querySelectorAll('[data-quantity]').forEach(button=>button.onclick=()=>{const group=groups[+button.dataset.group];if(button.dataset.quantity==='plus'){if(canAddCopy(group.item))cart.push({...group.item})}else if(group.indices.length>1)cart.splice(group.indices.at(-1),1);saveCart()});
  document.querySelectorAll('.remove').forEach(button=>button.onclick=()=>{const indices=new Set(groups[+button.dataset.group].indices);cart=cart.filter((_,i)=>!indices.has(i));saveCart()});
}
function openCart(){document.querySelector('#cartDrawer').classList.add('open');document.querySelector('#scrim').classList.add('show');document.querySelector('#cartDrawer').setAttribute('aria-hidden','false');if(heProductRoute){const drawer=document.querySelector('#cartDrawer');drawer.dir='rtl';drawer.querySelector('.drawer-head h2').textContent='הסל שלך';drawer.querySelector('#checkoutButton').textContent='לתשלום';drawer.querySelector('.cart-total span').textContent='סכום כולל משלוח'}renderCart()}
function closeCart(){document.querySelector('#cartDrawer').classList.remove('open');document.querySelector('#scrim').classList.remove('show');document.querySelector('#cartDrawer').setAttribute('aria-hidden','true')}
document.querySelector('#cartButton').onclick=openCart;document.querySelector('#closeCart').onclick=closeCart;document.querySelector('#scrim').onclick=closeCart;
document.querySelector('#couponForm').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,button=form.querySelector('button'),status=document.querySelector('#couponStatus'),code=document.querySelector('#couponCode').value.trim().toUpperCase();status.textContent=ui('בודק קוד…','Checking code…');status.className='';button.disabled=true;try{const response=await fetch('/api/coupon',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({code})});const result=await response.json();if(!response.ok)throw new Error(ui('הקוד אינו תקף.','This code is not valid.'));appliedCoupon={code:result.code,percent:result.percent};localStorage.setItem('chiefCoupon',JSON.stringify(appliedCoupon));renderCart()}catch(error){appliedCoupon=null;localStorage.removeItem('chiefCoupon');status.textContent=ui('לא ניתן לאמת את הקוד כרגע. בדקו אותו ונסו שוב.',error.message||'This code is not valid.');status.className='error';renderCart()}finally{button.disabled=false}};
document.querySelector('#removeCoupon').onclick=()=>{appliedCoupon=null;localStorage.removeItem('chiefCoupon');document.querySelector('#couponCode').value='';document.querySelector('#couponStatus').className='';renderCart()};
const checkoutDialog=document.querySelector('#checkoutDialog');
document.querySelector('#checkoutButton').onclick=()=>{
  if(!cart.length||hasClosedPaper()){renderCart();return}
  closeCart();
  const pricing=orderPricing();document.querySelector('#shippingSubtotal').textContent=money(pricing.subtotal);document.querySelector('#shippingDiscount').textContent=`−${money(pricing.discount)}`;document.querySelector('#shippingDiscountRow').hidden=!appliedCoupon;document.querySelector('#shippingTotal').textContent=money(pricing.total);document.querySelector('#shippingApprox').dataset.ils=String(pricing.total);window.chiefRefreshCurrency?.();
  updateShippingUi();checkoutDialog.showModal();checkGrow();
};
function selectionMessage(){
  const items=cart.map((x,i)=>`${i+1}. ${x.title} | ${x.size} | ${finishText(x.finish)} | ${money(x.price)}`).join('\n');
  return heProductRoute?`היי צ׳יף, אני רוצה להזמין:\n\n${items}\n\n${cartShippingIncluded()?'סכום כולל משלוח':'מחיר היצירות לפני משלוח'}: ${money(orderPricing().total)}\n${shippingSummary(true)}\nאשמח לאישור זמן אספקה ולקישור תשלום מאובטח. העיר והמדינה שלי: `:`Hello CHIEF, I would like to order:\n\n${items}\n\n${cartShippingIncluded()?'Total including shipping':'Artwork total before shipping'}: ${money(orderPricing().total)}\n${shippingSummary(false)}\nPlease confirm estimated delivery and send me a secure payment link. My delivery city and country are: `;
}
if(document.querySelector('#quickRequestButton'))document.querySelector('#quickRequestButton').onclick=()=>{if(hasClosedPaper()){renderCart();return}if(cart.length)window.open(`https://wa.me/972507123109?text=${encodeURIComponent(selectionMessage())}`,'_blank','noopener')};
document.querySelector('#closeCheckout').onclick=()=>checkoutDialog.close();
document.querySelector('#shippingForm').onsubmit=async e=>{
  e.preventDefault();
  if(hasClosedPaper()){checkoutDialog.close();openCart();renderCart();return}
  if(appliedCoupon){const response=await fetch('/api/coupon',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({code:appliedCoupon.code})});if(!response.ok){appliedCoupon=null;localStorage.removeItem('chiefCoupon');renderCart();checkoutDialog.close();openCart();const status=document.querySelector('#couponStatus');status.textContent=ui('יש להחיל שוב את קוד ההנחה.','The discount code must be applied again.');status.className='error';return}const verified=await response.json();appliedCoupon={code:verified.code,percent:verified.percent};localStorage.setItem('chiefCoupon',JSON.stringify(appliedCoupon))}
  const data=Object.fromEntries(new FormData(e.currentTarget));
  if(onlinePayAvailable()){
    const button=e.currentTarget.querySelector('.submit-order'),err=document.querySelector('#payError');err.hidden=true;button.disabled=true;const label=button.textContent;button.textContent=ui('פותח תשלום מאובטח…','Opening secure payment…');setTimeout(()=>{button.textContent=label},8000);
    try{
      const response=await fetch('/api/grow/checkout'+growTestQuery,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({items:cart.map(x=>({id:x.id,size:x.size,finish:x.finish})),coupon:appliedCoupon?.code||'',terms:!!data.terms,customer:{fullName:data.fullName,phone:data.phone,email:data.email,country:data.country,city:data.city,address:data.address,postalCode:data.postalCode}})});
      const result=await response.json().catch(()=>({}));
      if(result.url){location.href=result.url;return}
      if(result.authCode){
        try{await loadGrowSdk(result.sdkEnv||'PRODUCTION');const wait=(window.__growInitAt||0)+2500-Date.now();if(wait>0)await new Promise(r=>setTimeout(r,wait));growOrderId=result.orderId;checkoutDialog.close();window.growPayment.renderPaymentOptions(result.authCode);button.disabled=false;return}
        catch(sdkError){err.textContent=ui('לא ניתן לפתוח את חלון התשלום. נסו שוב בעוד רגע.','The payment window could not be opened. Please try again in a moment.');err.hidden=false;button.disabled=false;return}
      }
      err.textContent=(result.error||ui('לא ניתן לפתוח את דף התשלום. נסו שוב.','The payment page could not be opened. Please try again.'))+(result.growError?' ('+result.growError+')':'');err.hidden=false;button.disabled=false;return
    }catch{err.textContent=ui('לא ניתן לפתוח את התשלום כרגע. נסו שוב בעוד רגע.','Payment could not be opened right now. Please try again in a moment.');err.hidden=false}
    button.disabled=false;
  }
  return;
/* WhatsApp order flow removed: checkout is card-only. */
};
renderPaperDrop();renderWorks();saveCart();
refreshPaperState();
setTimeout(refreshPaperState,Math.max(0,window.chiefPaperEdition.closesAt-Date.now()+1));
document.querySelectorAll('[data-interior-id]').forEach(item=>item.onclick=()=>openProduct(+item.dataset.interiorId));
document.querySelectorAll('a[href="/collector-stories/"]').forEach(link=>link.href=`/collector-stories/?lang=${heProductRoute?'he':'en'}`);
const requestedParams=new URLSearchParams(location.search);
const requestedArtwork=Number(requestedParams.get('artwork'));
const requestedFinish=requestedParams.get('finish');
if(requestedArtwork&&works.some(w=>w.id===requestedArtwork)){
  history.replaceState({},'',location.pathname);
  openProduct(requestedArtwork,requestedFinish);
}else if(requestedParams.get('bag')==='1'){
  history.replaceState({},'',location.pathname);
  openCart();
}

const newsletterForm=document.querySelector('#newsletterForm');
if(newsletterForm){
  const newsletterStatus=document.querySelector('#newsletterStatus');
  newsletterForm.addEventListener('submit',async event=>{
    event.preventDefault();
    const submitButton=newsletterForm.querySelector('button[type="submit"]');
    const data=Object.fromEntries(new FormData(newsletterForm));
    newsletterStatus.textContent='';
    newsletterStatus.classList.remove('success');
    submitButton.disabled=true;
    submitButton.textContent='JOINING…';
    try{
      const response=await fetch('/api/newsletter',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)});
      const result=await response.json();
      if(!response.ok)throw new Error(result.error||'Unable to join right now.');
      newsletterStatus.textContent=result.alreadySubscribed?'You’re already on the list.':'Welcome to CHIEF. You’re on the list.';
      newsletterStatus.classList.add('success');
      newsletterForm.reset();
    }catch(error){
      newsletterStatus.textContent=error.message||'Unable to join right now. Please try again.';
    }finally{
      submitButton.disabled=false;
      submitButton.textContent='JOIN THE LIST';
    }
  });
}

document.querySelector('#shippingForm [name="country"]').addEventListener('input',updateShippingUi);
