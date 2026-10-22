/* A persistent shuffle bag: all eight companions appear once before a new round. */
(function(root){
  'use strict';
  const roster=[
    {id:'perlica',name:'佩麗卡',en:'PERLICA',tip:'把今天的任務拆成小步驟，完成一科，再前進一科。'},
    {id:'chen',name:'陳千語',en:'CHEN QIANYU',tip:'先讀懂題目再出發。圈出關鍵字，會更容易找到方向。'},
    {id:'ardelia',name:'艾爾黛拉',en:'ARDELIA',tip:'觀察、提問、再驗證。每個「為什麼」，都是新的發現。'},
    {id:'wulfgard',name:'狼衛',en:'WULFGARD',tip:'遇到難題先停一下，把已知條件列出來，再試一次。'},
    {id:'gilberta',name:'潔爾佩塔',en:'GILBERTA',tip:'今天多弄懂一個觀念，就替明天的自己留下一條好走的路。'},
    {id:'laevatain',name:'萊萬汀',en:'LAEVATAIN',tip:'把專注留給眼前這一題。練完一回，記得讓眼睛休息一下。'},
    {id:'lifeng',name:'黎風',en:'LIFENG',tip:'錯題是線索。看看解析，想想哪個步驟可以做得更清楚。'},
    {id:'dapan',name:'大潘',en:'DA PAN',tip:'學習也需要好好補給。準備一杯水，帶著精神繼續前進。'}
  ];
  function createDeck(ids,saved={},random=Math.random){
    const valid=new Set(ids),usable=valid.has(saved.current)&&Array.isArray(saved.remaining)&&saved.remaining.every(id=>valid.has(id)&&id!==saved.current)&&new Set(saved.remaining).size===saved.remaining.length;
    const state={current:usable?saved.current:null,remaining:usable?[...saved.remaining]:[],paused:saved.paused===true};
    function next(){
      if(!state.remaining.length){
        state.remaining=[...ids];
        for(let i=state.remaining.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[state.remaining[i],state.remaining[j]]=[state.remaining[j],state.remaining[i]];}
        if(state.remaining[0]===state.current&&ids.length>1)[state.remaining[0],state.remaining[1]]=[state.remaining[1],state.remaining[0]];
      }
      state.current=state.remaining.shift();return state.current;
    }
    return {state,next,snapshot:()=>({version:1,...state,remaining:[...state.remaining]})};
  }
  const delay=(random=Math.random)=>35000+Math.floor(random()*30001);
  if(typeof module!=='undefined')module.exports={roster,createDeck,delay};
  if(!root.document)return;
  const key='cindy-companion-deck-v1',ids=roster.map(c=>c.id);
  let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')||{};}catch{}
  let deck=createDeck(ids,saved),slot=null,timer=null,visible=false;
  const save=()=>{try{localStorage.setItem(key,JSON.stringify(deck.snapshot()));}catch{}};
  const clear=()=>{clearTimeout(timer);timer=null;};
  const allowed=()=>slot?.isConnected&&visible&&!document.hidden&&!deck.state.paused&&!document.querySelector('#modal[open]')&&!slot.contains(document.activeElement);
  function schedule(){clear();if(allowed())timer=setTimeout(()=>{if(allowed())advance(false);else schedule();},delay());}
  function paint(){
    if(!slot)return;
    const c=roster.find(c=>c.id===deck.state.current);
    if(!c)return;
    slot.dataset.characterCurrent=c.id;
    slot.querySelector('[data-companion-name]').textContent=c.name;
    slot.querySelector('[data-companion-en]').textContent=c.en;
    slot.querySelector('[data-companion-tip]').textContent=c.tip;
    slot.querySelector('[data-companion-count]').textContent=`本輪已遇見 ${ids.length-deck.state.remaining.length} / ${ids.length} 位夥伴`;
    const art=slot.querySelector('img');art.hidden=false;art.src=`assets/characters/${c.id}.webp`;art.alt=`《明日方舟：終末地》${c.name}角色肖像`;
    const pause=slot.querySelector('[data-companion-pause]');pause.setAttribute('aria-pressed',String(deck.state.paused));pause.textContent=deck.state.paused?'繼續自動切換':'暫停切換';
    slot.querySelector('[data-companion-state]').textContent=deck.state.paused?'已暫停 · 可以手動換位':'不定時換位 · 每輪角色不重複';
  }
  function advance(manual){deck.next();save();paint();if(manual)slot.querySelector('[data-companion-announcement]').textContent='已換成'+roster.find(c=>c.id===deck.state.current).name; schedule();}
  const observer=typeof IntersectionObserver!=='undefined'?new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);schedule();},{threshold:0.15}):null;
  function mount(){
    const next=document.querySelector('[data-companion-slot]');if(next===slot)return;
    clear();observer?.disconnect();slot=next;visible=false;if(!slot)return;
    slot.innerHTML=`<div class="companion-copy"><p class="eyebrow">ENDFIELD // COMPANION SIGNAL</p><h2>探索途中，夥伴來報到。</h2><div class="companion-identity"><h3 data-companion-name></h3><span data-companion-en></span></div><p class="companion-tip" data-companion-tip></p><div class="companion-controls"><button type="button" data-companion-next>換一位夥伴 ↗</button><button type="button" data-companion-pause aria-pressed="false">暫停切換</button></div><p class="companion-state" data-companion-state></p><small data-companion-count></small><span class="sr-only" role="status" data-companion-announcement></span></div><div class="companion-visual"><span class="companion-grid" aria-hidden="true">＋<br>＋<br>＋</span><img width="303" height="386" decoding="async" alt=""><span class="companion-visual-label">OPERATOR / SUPPORT</span></div><p class="companion-credit">角色圖像：遊戲官網 · 提醒文字為本站原創，非角色台詞</p>`;
    slot.querySelector('img').addEventListener('error',event=>{event.target.hidden=true;});
    slot.querySelector('[data-companion-next]').addEventListener('click',()=>advance(true));
    slot.querySelector('[data-companion-pause]').addEventListener('click',()=>{deck.state.paused=!deck.state.paused;save();paint();schedule();});
    slot.addEventListener('focusin',clear);slot.addEventListener('focusout',()=>queueMicrotask(schedule));
    if(!deck.state.current){deck.next();save();}paint();
    if(observer)observer.observe(slot);else{visible=true;schedule();}
  }
  new MutationObserver(mount).observe(document.querySelector('#main'),{childList:true});
  new MutationObserver(schedule).observe(document.querySelector('#modal'),{attributes:true,attributeFilter:['open']});
  document.addEventListener('visibilitychange',schedule);
  window.addEventListener('storage',event=>{if(event.key===key&&event.newValue){try{deck=createDeck(ids,JSON.parse(event.newValue));if(!deck.state.current)deck.next();paint();schedule();}catch{}}});
  mount();
})(typeof window!=='undefined'?window:globalThis);
