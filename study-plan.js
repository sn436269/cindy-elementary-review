/* School dates transcribed from the family's 115 academic year draft calendar. */
(function(root){
  'use strict';
  const config={phase:'midterm',semesterStart:'2026-08-31',semesterEnd:'2027-01-20',calendarDraft:'115 年 6 月草案',exams:{midterm:{name:'期中評量',start:'2026-11-05',end:'2026-11-06'},final:{name:'期末評量',start:'2027-01-12',end:'2027-01-13'}}};
  const calendar=[
    {start:'2026-10-21',end:'2026-10-23',title:'校內美創展收件',note:'確認作品是否已繳交。'},
    {start:'2026-10-23',title:'五年級消防體驗（第二梯次）',note:'暫定；是否參加請看班級通知。'},
    {start:'2026-10-24',end:'2026-10-27',title:'校內科學展覽',note:'參觀或參展依班級安排。'},
    {start:'2026-10-26',title:'紀念日補放假',note:'確認假期作業與複習安排。'},
    {start:'2026-10-29',end:'2026-10-30',title:'全校師生流感疫苗接種',note:'確認家長同意書及學校通知。'},
    {start:'2026-11-05',end:'2026-11-06',title:'期中評量',note:'前一天依班級考程準備文具。',exam:'midterm'},
    {start:'2026-11-15',end:'2026-11-28',title:'五、六年級游泳課週次',note:'第 12–13 週與第 15–17 週；實際上課日依課表。'},
    {start:'2026-11-23',end:'2026-12-04',title:'校內田徑賽',note:'依班級通知準備運動服與飲水。'},
    {start:'2026-11-27',title:'五年級藥物濫用防制宣導',note:'暫定，依學校通知。'},
    {start:'2026-12-05',title:'四十週年校慶體育表演會',note:'確認集合時間與服裝。'},
    {start:'2026-12-06',end:'2026-12-26',title:'五、六年級游泳課週次',note:'第 15–17 週；實際上課日依課表。'},
    {start:'2026-12-25',title:'行憲紀念日放假',note:'複習可自行安排時間。'},
    {start:'2026-12-28',title:'體育表演會補假',note:'確認假期作業。'},
    {start:'2027-01-01',title:'元旦放假',note:'複習可自行安排時間。'},
    {start:'2027-01-12',end:'2027-01-13',title:'期末評量',note:'依班級通知確認範圍。',exam:'final'},
    {start:'2027-01-20',title:'休業式',note:'帶回學用品與學習紀錄。'},
    {start:'2027-01-21',title:'寒假開始',note:'假期自由複習。'}
  ];
  const dayNumber=date=>Math.floor(Date.parse(date+'T12:00:00Z')/86400000);
  const daysUntil=(date,target)=>dayNumber(target)-dayNumber(date);
  const weekday=date=>new Date(date+'T12:00:00Z').getUTCDay();
  function dailyUnit(units,subject,date){const list=units.filter(u=>u.subject===subject&&u.examPhase!=='final');const elapsed=Math.max(0,daysUntil(config.semesterStart,date));const schoolDays=Math.floor(elapsed/7)*5+Math.min(elapsed%7,4);return list.length?list[schoolDays%list.length]:null;}
  function upcoming(date,limit=4){return calendar.filter(e=>(e.end||e.start)>=date&&(!e.exam||e.exam===config.phase)).sort((a,b)=>a.start.localeCompare(b.start)).slice(0,limit);}
  function examUnits(units,subject,phase=config.phase){return units.filter(u=>u.subject===subject&&(u.examPhase||'midterm')===phase);}
  const api={config,calendar,dayNumber,daysUntil,weekday,dailyUnit,upcoming,examUnits};root.StudyPlan=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
