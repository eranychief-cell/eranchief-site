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
  {id:51,title:'Ground Contact',category:'super',image:'assets/late_ground_contact.jpg',featured:{publisher:'Us&Art',reactions:'40,000+',shares:'1,800+',url:'https://www.facebook.com/story.php?story_fbid=491369046908435&id=100081060326915'}},
  {id:53,title:'Unveiled',category:'late-night',image:'assets/late_unveiled.jpg'},
  {id:54,title:'Carry Nothing',category:'late-night',image:'assets/late_carry_nothing.jpg'}
];
const premiumReviewWorks = [
  {id:55,title:'Premium 01',category:'premium',image:'assets/premium_review_01.jpg'},
  {id:56,title:'Premium 02',category:'premium',image:'assets/premium_review_02.jpg'},
  {id:58,title:'Premium 04',category:'premium',image:'assets/premium_review_04.jpg'},
  {id:59,title:'Walking the Edge of Reflection',titleHe:'הולך על קצה ההשתקפות',category:'accessible',image:'assets/premium_review_05.jpg'},
  {id:60,title:'Premium 06',category:'premium',image:'assets/premium_review_06.jpg'},
  {id:61,title:'Premium 07',category:'premium',image:'assets/premium_review_07.jpg'},
  {id:62,title:'Lace Over the Sea',titleHe:'תחרה מעל הים',category:'premium',image:'assets/premium_review_08.jpg'},
  {id:63,title:'Premium 09',category:'premium',image:'assets/premium_review_09.jpg'},
  {id:64,title:'The Last One on the Beach',titleHe:'האחרונה על החוף',category:'premium',image:'assets/premium_review_11.jpg'},
  {id:65,title:'Are You Talking to Me?',titleHe:'אתה מדבר אליי?',category:'super',image:'assets/premium_review_12.jpg'},
  {id:66,title:'Premium 13',category:'premium',image:'assets/premium_review_13.jpg'},
  {id:67,title:'Learning to Fly',category:'premium',image:'assets/premium_review_14.jpg'},
  {id:68,title:'Premium 15',category:'premium',image:'assets/premium_review_15.jpg'},
  {id:69,title:'Premium 16',category:'premium',image:'assets/premium_review_16.jpg'},
  {id:70,title:'Premium 18',category:'premium',image:'assets/premium_review_18.jpg'},
  {id:71,title:'Premium 19',category:'late-night',image:'assets/premium_review_19.jpg'},
  {id:72,title:'Premium 20',category:'premium',image:'assets/premium_review_20.jpg'},
  {id:73,title:'Premium 21',category:'premium',image:'assets/premium_review_21.jpg'},
  {id:74,title:'Premium 22',category:'late-night',image:'assets/premium_review_22.jpg'},
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
const works=[...paperWorks,...latestWorks,...standardWorks.filter(work=>work.title!=='Between Two Cities'),...squareWorks,...lateNightWorks,...premiumReviewWorks,...newlyCuratedWorks,...septemberCuratedWorks,...newWorks,...septemberSecondCuratedWorks,...thirdCuratedWorks,...fourthCuratedWorks].map(work=>({...work,discovery:discoveryCopy[work.id],soldEditions:soldEditionCounts[work.id]??work.soldEditions??0}));
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
const workThemes={"sea": [1, 3, 4, 7, 8, 9, 11, 13, 14, 15, 16, 17, 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 41, 42, 43, 44, 45, 46, 47, 51, 53, 56, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 83, 84, 85, 88, 89, 90, 91, 92, 95, 96, 97, 98, 99, 101, 102, 103, 109, 112, 113, 114, 115, 116, 118, 119, 120, 122, 126, 127, 128, 129, 132, 133, 135, 136, 137, 138, 140, 141, 142, 145, 147, 149, 150, 155, 158, 159, 160, 163, 164, 166, 167, 168, 169, 170, 171, 175, 181, 187, 195, 196, 197, 198, 199, 200, 201, 202, 203], "sunset": [8, 9, 11, 13, 15, 17, 24, 27, 29, 30, 31, 32, 33, 34, 38, 60, 64, 66, 70, 72, 73, 78, 84, 85, 88, 90, 91, 92, 128, 135, 136, 141, 142, 145, 147, 150, 167, 168, 181, 195, 197, 201], "urban": [2, 3, 12, 19, 20, 21, 22, 40, 48, 59, 78, 79, 80, 82, 86, 87, 93, 100, 104, 107, 128, 130, 143, 146, 154, 161, 172, 173, 174, 176, 177, 178, 179, 180, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194], "telaviv": [2, 3, 12, 16, 19, 20, 21, 30, 31, 32, 40, 46, 59, 65, 78, 79, 80, 86, 87, 91, 93, 100, 101, 102, 104, 128, 137, 142, 143, 154, 161, 172, 173, 174, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 196], "nude": [47, 49, 50, 53, 71, 74, 94, 110, 111, 113, 116, 118, 119, 120, 123, 124, 125, 126, 127, 132, 134, 151, 156, 157, 158, 159, 160], "dance": [25, 27, 37, 41, 42, 44, 45, 46, 47, 54, 58, 67, 75, 76, 77, 83, 108, 114, 117, 119, 120, 162, 163, 164, 165, 166, 168, 169, 170], "bw": [1, 4, 6, 7, 8, 11, 12, 22, 26, 37, 40, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 53, 54, 55, 56, 58, 63, 65, 67, 68, 71, 74, 75, 76, 77, 89, 94, 95, 99, 103, 107, 108, 109, 110, 111, 114, 115, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 129, 131, 132, 133, 134, 139, 144, 146, 149, 154, 155, 161, 162, 163, 164, 165, 166, 169, 170, 174, 182, 189, 192], "reflection": [1, 2, 12, 19, 20, 22, 32, 59, 63, 65, 74, 77, 78, 79, 86, 87, 92, 93, 100, 102, 130, 143, 154, 161, 172, 173, 174, 176, 177, 178, 179, 182, 183, 186, 187, 188, 189, 190, 191, 192, 193], "sky": [4, 16, 29, 30, 31, 32, 62, 73, 88, 92, 128, 129, 141, 142, 147, 150, 181, 199, 201, 202], "animals": [18, 55, 63, 65, 80, 89, 95, 96, 97, 98, 102, 109, 121, 122, 129, 133, 171, 195, 198, 199, 200], "surreal": [5, 6, 7, 10, 11, 13, 14, 17, 18, 25, 28, 35, 36, 38, 39, 40, 41, 42, 44, 45, 56, 60, 68, 71, 75, 76, 77, 84, 85, 96, 97, 98, 99, 103, 104, 109, 113, 115, 122, 132, 133, 139, 140, 144, 155, 167, 170, 180]};
const themeOrder=["sea", "sunset", "urban", "telaviv", "nude", "dance", "bw", "reflection", "sky", "animals", "surreal"];
const themeLabels={"sea": ["ים", "Sea"], "sunset": ["שקיעות", "Sunsets"], "urban": ["אורבני", "Urban"], "telaviv": ["תל אביב", "Tel Aviv"], "nude": ["עירום אמנותי", "Artistic nude"], "dance": ["ריקוד ותנועה", "Dance & movement"], "bw": ["שחור-לבן", "Black & white"], "reflection": ["השתקפויות וגשם", "Reflections & rain"], "sky": ["שמיים ועננים", "Sky & clouds"], "animals": ["כלבים ובעלי חיים", "Dogs & animals"], "surreal": ["סוריאליסטי", "Surreal"]};
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
    art.style.opacity='.15';setTimeout(()=>{art.src=work.image;art.alt=`${work.title} displayed full-frame without a frame in a living room`;art.classList.toggle('is-portrait',portraitIndexes.has(current));art.style.opacity='1'},90);
    title.textContent=`${String(current+1).padStart(2,'0')} · ${work.title}`;
    buttons.forEach((button,i)=>{button.classList.toggle('is-selected',i===current);button.setAttribute('aria-pressed',i===current?'true':'false')});
    if(move)buttons[current].scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
  };
  buttons.forEach((button,i)=>button.addEventListener('click',()=>selectPaper(i)));
  strip.addEventListener('scroll',()=>{clearTimeout(scrollTimer);scrollTimer=setTimeout(()=>{const box=strip.getBoundingClientRect(),center=box.left+box.width/2;let best=0,distance=Infinity;buttons.forEach((button,i)=>{const rect=button.getBoundingClientRect(),nextDistance=Math.abs(rect.left+rect.width/2-center);if(nextDistance<distance){distance=nextDistance;best=i}});selectPaper(best,false)},140)});
  const requestedPaper=Number(new URLSearchParams(location.search).get('paper'));
  if(requestedPaper>=1&&requestedPaper<=paperWorks.length){selectPaper(requestedPaper-1);setTimeout(()=>document.querySelector('#paper-edition')?.scrollIntoView({block:'start'}),300);}
  document.querySelector('#paperRoomPrev').onclick=()=>selectPaper(current-1);
  document.querySelector('#paperRoomNext').onclick=()=>selectPaper(current+1);
  document.querySelector('#paperRoomOrder').onclick=()=>{if(!paperClosed())openProduct(paperWorks[current].id);else refreshPaperState()};
  scene.addEventListener('pointerdown',event=>{startX=event.clientX});
  scene.addEventListener('pointerup',event=>{const delta=event.clientX-startX;if(Math.abs(delta)>38)selectPaper(current+(delta<0?1:-1))});
  selectPaper(0,false);
  const countdown=document.querySelector('#paperCountdown'),end=paperCloseDate;
  const updateCountdown=()=>{const diff=Math.max(0,end-Date.now()),days=Math.floor(diff/86400000),hours=Math.floor(diff%86400000/3600000),mins=Math.floor(diff%3600000/60000);countdown.textContent=diff?ui(`${days} ימים, ${hours} שעות ו־${mins} דקות`,`${days}d ${hours}h ${mins}m`):ui('המהדורה נסגרה','Drop closed');};updateCountdown();setInterval(updateCountdown,60000);
}
function refreshPaperState(){
  if(!paperClosed())return;
  // Homepage entry points to the closed Paper Edition: point visitors to the mailing list / canvas instead.
  document.querySelectorAll('.shop-path[href="#paper-edition"]').forEach(card=>card.style.display='none');document.querySelectorAll('.shop-path small').forEach(el=>{el.textContent=el.textContent.replace(/^0([2-9])/,(m,n)=>'0'+(n-1))});
  document.querySelectorAll('a.hero-shop-primary[href="#paper-edition"]').forEach(a=>{a.textContent=ui('מהדורת נייר חדשה בקרוב · הצטרפו לרשימה','New Paper Edition soon · join the list');a.setAttribute('href','#newsletter')});
  document.querySelectorAll('nav a[href="#paper-edition"]').forEach(a=>a.textContent=ui('מהדורת נייר · בקרוב','Paper Edition · coming soon'));
  const pathsNote=document.querySelector('.shop-paths-note');if(pathsNote)pathsNote.textContent=ui('מהדורת הנייר הנוכחית נסגרה, ומהדורה חדשה בדרך. Art Edition על קנבס זמינה כל השנה. כל עבודה מגיעה עם תעודת מקוריות, ועלות המשלוח וזמן האספקה מאושרים לפני התשלום.','The current Paper Edition has closed; a new one is on its way. Art Edition canvas is available year-round. Every work includes a Certificate of Authenticity, and shipping is confirmed before payment.');
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
  const deliveryCopy=shippingIncluded(w.category)?'International air express: ₪1,500 / ₪2,100 / ₪4,900 per artwork by size. Estimated delivery is confirmed before payment. Import duties and local taxes, if applicable, are not included.':isPaper?`Printed to order · Unframed · Shipping cost and delivery estimate are confirmed before payment. This work leaves the Paper Edition on ${paperDateEn}.`:w.category==='accessible'?'Made to order · Canvas production and delivery: 10–14 business days. Shipping cost and delivery estimate are confirmed before payment.':'Made to order · Shipping cost and delivery estimate are confirmed before payment according to destination, size and finish.';
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
  if(window.growPayment?.renderPaymentOptions&&growSdkPromise)return growSdkPromise;
  growSdkPromise=new Promise((resolve,reject)=>{
    const s=document.createElement('script');s.src='https://cdn.meshulam.co.il/sdk/gs.min.js';s.async=true;
    s.onload=()=>{try{window.growPayment.init({environment:env,version:1,events:{
      onSuccess:()=>{location.href='/order/thanks/?o='+encodeURIComponent(growOrderId)},
      onFailure:r=>{console.warn('Grow onFailure',r);const d=document.querySelector('#checkoutDialog');if(d&&!d.open)d.showModal();const e=document.querySelector('#payError');if(e){e.textContent=((r&&(r.message||r.data?.message))||'')+' ['+JSON.stringify(r||{}).slice(0,220)+']'||ui('התשלום לא הושלם. אפשר לנסות שוב.','The payment was not completed. You can try again.');e.hidden=false}},
      onError:r=>{console.warn('Grow onError',r);const d=document.querySelector('#checkoutDialog');if(d&&!d.open)d.showModal();const e=document.querySelector('#payError');if(e){e.textContent=((r&&(r.message||r.data?.message))||'')+' ['+JSON.stringify(r||{}).slice(0,220)+']'||ui('אירעה שגיאה בתשלום. אפשר לנסות שוב.','A payment error occurred. You can try again.');e.hidden=false}},
      onTimeout:()=>{},onWalletChange:()=>{},onPaymentStart:()=>{},onPaymentCancel:()=>{}}});resolve()}catch(e){growSdkPromise=null;reject(e)}};
    s.onerror=()=>{growSdkPromise=null;reject(new Error('sdk'))};
    document.head.appendChild(s);
  });
  return growSdkPromise;
}
const checkGrow=()=>fetch('/api/grow/status'+growTestQuery,{cache:'no-store'}).then(r=>r.ok?r.json():{}).then(d=>{if(typeof d.enabled==='boolean')growEnabled=d.enabled;if(document.querySelector('#checkoutDialog')?.open)updateShippingUi()}).catch(()=>{});checkGrow();
// Re-check when a tab is restored from the back/forward cache and whenever checkout opens, so a page loaded earlier still offers online payment.
window.addEventListener('pageshow',e=>{if(e.persisted)checkGrow()});
// Card payment for every delivery in Israel; shipping is added per SHIP_FEE.
function onlinePayAvailable(){return growEnabled!==false&&cart.length>0&&!(abroadOrder()&&cartHasPaper())&&!hasClosedPaper()}
function abroadOrder(){const c=shippingCountry();return cart.length>0&&!!c&&!isIsraelShipping(c)}
function updateOnlinePay(){const box=document.querySelector('#onlinePay');if(!box)return;const on=onlinePayAvailable();box.hidden=!on;box.querySelector('[name="address"]').required=on;box.querySelector('[name="terms"]').required=on;
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
        try{await loadGrowSdk(result.sdkEnv||'PRODUCTION');growOrderId=result.orderId;checkoutDialog.close();window.growPayment.renderPaymentOptions(result.authCode);button.disabled=false;return}
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
