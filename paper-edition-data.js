// Update this one object when a new Paper Edition is approved. Keep artwork IDs unique
// across editions so an older saved bag cannot be mistaken for a new artwork.
// opensAt is optional: without it the edition is treated as opening one month before closesAt.
// portrait:true marks vertical photographs so the room hangs them upright. year is optional (left out when unknown).
globalThis.chiefPaperEditionData={
  opensAt:'2026-10-21T00:00:00+03:00',
  closesAt:'2026-11-20T23:59:59+02:00',
  sizes:['30 × 40 cm','50 × 70 cm'],
  works:[
    {id:213,title:'One Look Back',titleHe:'מבט אחד לאחור',image:'assets/paper-18-one-look-back.jpg',portrait:true,prices:[249,399]},
    {id:206,title:'Jaffa Melts Into the Sand',titleHe:'יפו נמסה אל החול',image:'assets/paper-11-jaffa-melts-into-the-sand.jpg',year:2026,portrait:true,prices:[249,399]},
    {id:207,title:'The Last Wave Is His',titleHe:'הגל האחרון שלו',image:'assets/paper-12-the-last-wave-is-his.jpg',year:2026,prices:[249,399]},
    {id:208,title:'The Sky Opened Over Jaffa',titleHe:'השמיים נפתחו מעל יפו',image:'assets/paper-13-the-sky-opened-over-jaffa.jpg',year:2026,portrait:true,prices:[249,399]},
    {id:209,title:'The Towers Drank the Sky',titleHe:'המגדלים שתו את השמיים',image:'assets/paper-14-the-towers-drank-the-sky.jpg',year:2015,prices:[249,399]},
    {id:210,title:'The Rope That Leads to the Sun',titleHe:'החבל שמוביל לשמש',image:'assets/paper-15-the-rope-that-leads-to-the-sun.jpg',year:2026,portrait:true,prices:[249,399]},
    {id:211,title:'Someone Had to Shoot It',titleHe:'מישהו היה חייב לצלם את זה',image:'assets/paper-16-someone-had-to-shoot-it.jpg',year:2026,prices:[249,399]},
    {id:215,title:'Bad Hair Day',titleHe:'Bad Hair Day',image:'assets/paper-19-bad-hair-day.jpg',portrait:true,prices:[249,399]}
  ]
};
