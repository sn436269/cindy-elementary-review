/* Thirty companions share one persistent shuffle bag across home and surprise mail. */
(function(root){
  'use strict';
  const roster=root.COMPANION_ROSTER||(typeof module!=='undefined'?require('./data-companions.js'):[]);
  const ids=roster.map(c=>c.id),legacyIds=['perlica','chen','ardelia','wulfgard','gilberta','laevatain','lifeng','dapan'];
  function shuffled(list,random){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function createDeck(allIds,saved={},random=Math.random){
    if(!saved||typeof saved!=='object')saved={};
    const valid=new Set(allIds),usable=valid.has(saved.current)&&Array.isArray(saved.remaining)&&saved.remaining.every(id=>valid.has(id)&&id!==saved.current)&&new Set(saved.remaining).size===saved.remaining.length;
    const known=Array.isArray(saved.roster)?saved.roster:legacyIds;
    const added=usable?allIds.filter(id=>!known.includes(id)&&!saved.remaining.includes(id)&&id!==saved.current):[];
    const pending=usable?[...saved.remaining,...added]:[];
    const state={current:usable?saved.current:null,remaining:added.length?shuffled(pending,random):pending,paused:saved.paused===true};
    function next(){
      if(!state.remaining.length){state.remaining=shuffled(allIds,random);if(state.remaining[0]===state.current&&allIds.length>1)[state.remaining[0],state.remaining[1]]=[state.remaining[1],state.remaining[0]];}
      state.current=state.remaining.shift();return state.current;
    }
    return {state,next,snapshot:()=>({version:2,roster:[...allIds],...state,remaining:[...state.remaining]})};
  }
  function restoreJournal(saved={},random=Math.random){
    if(!saved||typeof saved!=='object')saved={};
    const deck=createDeck(ids,saved,random),valid=new Set(ids),known=Array.isArray(saved.roster)?saved.roster:legacyIds;
    const inferred=deck.state.current?known.filter(id=>valid.has(id)&&!deck.state.remaining.includes(id)):[];
    const seen=new Set((Array.isArray(saved.seen)?saved.seen:inferred).filter(id=>valid.has(id)));
    if(deck.state.current)seen.add(deck.state.current);
    const home=valid.has(saved.home)?saved.home:deck.state.current;
    const l=saved.letter,letter=l&&valid.has(l.id)&&/^\d{4}-\d{2}-\d{2}$/.test(l.date)?{id:l.id,date:l.date,done:l.done===true}:null;
    return {deck,seen,home,letter};
  }
  const delay=(random=Math.random)=>35000+Math.floor(random()*30001);
  if(typeof module!=='undefined')module.exports={roster,createDeck,restoreJournal,delay};
  if(!root.document)return;
  const key='cindy-companion-deck-v2';let saved={};
  try{saved=JSON.parse(localStorage.getItem(key)||localStorage.getItem('cindy-companion-deck-v1')||'{}');}catch{}
  let journal=restoreJournal(saved),homeSlot=null,surpriseSlot=null,timer=null,visible=false,storageFailed=false;
  const character=id=>roster.find(c=>c.id===id);
  const today=()=>root.StudyCore.dateKey();
  const snapshot=()=>({...journal.deck.snapshot(),home:journal.home,letter:journal.letter,seen:[...journal.seen]});
  const save=()=>{try{localStorage.setItem(key,JSON.stringify(snapshot()));storageFailed=false;}catch{storageFailed=true;}};
  const draw=()=>{const id=journal.deck.next();journal.seen.add(id);return id;};
  const clear=()=>{clearTimeout(timer);timer=null;};
  const allowed=()=>homeSlot?.isConnected&&visible&&!document.hidden&&!journal.deck.state.paused&&!document.querySelector('#modal[open]')&&!homeSlot.contains(document.activeElement);
  function schedule(){clear();if(allowed())timer=setTimeout(()=>{if(allowed())advance(false);else schedule();},delay());}
  function paintHome(){
    if(!homeSlot)return;const c=character(journal.home);if(!c)return;
    homeSlot.dataset.characterCurrent=c.id;
    homeSlot.querySelector('[data-companion-name]').textContent=c.name;
    homeSlot.querySelector('[data-companion-en]').textContent=c.en;
    homeSlot.querySelector('[data-companion-tip]').textContent=c.tip;
    homeSlot.querySelector('[data-companion-count]').textContent=`本輪已遇見 ${ids.length-journal.deck.state.remaining.length} / ${ids.length} 位夥伴`;
    const art=homeSlot.querySelector('img');art.hidden=false;art.src=`assets/characters/${c.id}.webp`;art.alt=`《明日方舟：終末地》${c.name}角色肖像`;
    const pause=homeSlot.querySelector('[data-companion-pause]');pause.setAttribute('aria-pressed',String(journal.deck.state.paused));pause.textContent=journal.deck.state.paused?'繼續自動切換':'暫停切換';
    homeSlot.querySelector('[data-companion-state]').textContent=journal.deck.state.paused?'已暫停 · 可以手動換位':'不定時換位 · 每輪角色不重複';
  }
  function advance(manual){journal.home=draw();save();paintHome();if(manual)homeSlot.querySelector('[data-companion-announcement]').textContent='已換成'+character(journal.home).name;schedule();}
  const observer=typeof IntersectionObserver!=='undefined'?new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);schedule();},{threshold:0.15}):null;
  function mountHome(next){
    clear();observer?.disconnect();homeSlot=next;visible=false;if(!homeSlot)return;
    homeSlot.innerHTML=`<div class="companion-copy"><p class="eyebrow">ENDFIELD // COMPANION SIGNAL</p><h2>探索途中，夥伴來報到。</h2><div class="companion-identity"><h3 data-companion-name></h3><span data-companion-en></span></div><p class="companion-tip" data-companion-tip></p><div class="companion-controls"><button type="button" data-companion-next>換一位夥伴 ↗</button><button type="button" data-companion-pause aria-pressed="false">暫停切換</button></div><p class="companion-state" data-companion-state></p><small data-companion-count></small><span class="sr-only" role="status" data-companion-announcement></span></div><div class="companion-visual"><span class="companion-grid" aria-hidden="true">＋<br>＋<br>＋</span><img width="303" height="386" decoding="async" alt=""><span class="companion-visual-label">OPERATOR / SUPPORT</span></div><p class="companion-credit">角色圖像：遊戲官網 · 提醒文字為本站原創，非角色台詞</p>`;
    homeSlot.querySelector('img').addEventListener('error',event=>{event.target.hidden=true;});
    homeSlot.querySelector('[data-companion-next]').addEventListener('click',()=>advance(true));
    homeSlot.querySelector('[data-companion-pause]').addEventListener('click',()=>{journal.deck.state.paused=!journal.deck.state.paused;save();paintHome();schedule();});
    homeSlot.addEventListener('focusin',clear);homeSlot.addEventListener('focusout',()=>queueMicrotask(schedule));
    if(!journal.home){journal.home=draw();save();}paintHome();
    if(observer)observer.observe(homeSlot);else{visible=true;schedule();}
  }
  const hasLetter=()=>journal.letter?.date===today();
  function collectionMarkup(){return `<section class="companion-collection"><div class="section-head"><div><p class="eyebrow">MY COMPANIONS // 相遇收藏冊</p><h2>每一次相遇，都留一個位置。</h2></div><b data-collection-count>已遇見 ${journal.seen.size} / ${ids.length} 位</b></div><div class="collection-progress" role="progressbar" aria-label="夥伴收藏進度" aria-valuemin="0" aria-valuemax="${ids.length}" aria-valuenow="${journal.seen.size}"><span style="width:${journal.seen.size/ids.length*100}%"></span></div><div class="companion-album">${roster.map(c=>`<figure class="album-member ${journal.seen.has(c.id)?'discovered':''}">${journal.seen.has(c.id)?`<img loading="lazy" decoding="async" width="100" height="128" src="assets/characters/${c.id}.webp" alt="${c.name}">`:'<span class="album-unknown" aria-hidden="true">?</span>'}<figcaption>${journal.seen.has(c.id)?c.name:'等待相遇'}</figcaption></figure>`).join('')}</div><p class="surprise-footnote">首頁換位與夥伴來信共用每輪 30 位不重複的相遇名單。收藏記在這個瀏覽器，重新整理後會保留。${storageFailed?'目前無法保存新收藏，請確認瀏覽器允許網站儲存資料。':''}</p></section>`;}
  function paintSurprise(focusTarget){
    if(!surpriseSlot)return;
    const letter=hasLetter()?journal.letter:null,c=letter?character(letter.id):null;
    surpriseSlot.innerHTML=`<section class="surprise-mail ${c?'is-open':'is-sealed'}" aria-label="夥伴驚喜信箱">${c?`<div class="surprise-message"><p class="eyebrow">A LITTLE SURPRISE // ${letter.date}</p><p class="surprise-arrival">你收到了一封夥伴來信</p><h2 data-letter-heading tabindex="-1">${c.name}<span>${c.en}</span></h2><p class="surprise-letter">${c.tip}</p><div class="surprise-challenge"><span>✦ 給你的小小挑戰</span><p>${c.challenge}</p><button type="button" data-letter-done aria-pressed="${letter.done}">${letter.done?'✓ 小挑戰完成了！':'我完成這個小挑戰了 ✓'}</button></div><div class="surprise-actions"><button class="button" type="button" data-letter-next>再收一封驚喜 ↗</button><button class="text-button" type="button" data-letter-download>下載夥伴收藏卡 ↓</button></div><p class="surprise-footnote">鼓勵與小挑戰為本站原創，非角色台詞。小挑戰自由完成。</p></div><div class="surprise-portrait"><span class="portrait-number">ENDFIELD / ${String(roster.indexOf(c)+1).padStart(2,'0')}</span><img src="assets/characters/${c.id}.webp" width="303" height="386" alt="${c.name}的夥伴來信肖像"><span class="portrait-signature">CINDY’S COMPANION</span></div>`:`<div class="surprise-sealed-copy"><p class="eyebrow">YOU’VE GOT A LETTER // 夥伴小驚喜</p><h2>有一位夥伴，<br>正想對你說點什麼。</h2><p>拆開這封信，看看今天誰來陪你。<br>一段鼓勵、一個小挑戰，把好心情一起帶走。</p><button class="button" type="button" data-letter-open>打開夥伴來信 ↗</button><small>30 位夥伴 · 每輪相遇不重複</small></div><div class="surprise-envelope" aria-hidden="true"><span class="envelope-back"></span><span class="envelope-paper">TO CINDY<br><b>✦</b><small>A LITTLE SURPRISE</small></span><span class="envelope-front"></span><span class="envelope-seal">C</span></div>`}</section>${collectionMarkup()}`;
    surpriseSlot.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;}));
    const open=()=>{journal.letter={id:draw(),date:today(),done:false};save();paintSurprise('[data-letter-heading]');};
    surpriseSlot.querySelector('[data-letter-open]')?.addEventListener('click',open);
    surpriseSlot.querySelector('[data-letter-next]')?.addEventListener('click',open);
    surpriseSlot.querySelector('[data-letter-done]')?.addEventListener('click',()=>{journal.letter.done=!journal.letter.done;save();paintSurprise('[data-letter-done]');});
    surpriseSlot.querySelector('[data-letter-download]')?.addEventListener('click',downloadLetter);
    if(focusTarget)surpriseSlot.querySelector(focusTarget)?.focus({preventScroll:true});
  }
  async function downloadLetter(event){
    if(!hasLetter())return;const button=event.currentTarget,c=character(journal.letter.id),letter={...journal.letter};button.disabled=true;
    try{
      await document.fonts.ready;const art=new Image();art.src=`assets/characters/${c.id}.webp`;await art.decode();
      const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=800;const x=canvas.getContext('2d');
      x.fillStyle='#202625';x.fillRect(0,0,1200,800);x.fillStyle='#f4f53b';x.fillRect(35,35,1130,68);x.fillStyle='#202625';x.font='700 26px sans-serif';x.fillText('CINDY // A LITTLE SURPRISE',65,80);
      x.fillStyle='#f4f5ef';x.fillRect(35,130,1130,570);x.fillStyle='#dce4d2';x.fillRect(790,130,375,570);const artHeight=438,artWidth=artHeight*art.naturalWidth/art.naturalHeight;x.drawImage(art,978-artWidth/2,180,artWidth,artHeight);
      x.fillStyle='#243329';x.font='700 46px "Noto Sans TC",sans-serif';x.fillText(c.name,80,215);x.font='18px monospace';x.fillText(c.en,82,252);
      function wrap(text,startY,fontSize,maxWidth){x.font=`${fontSize}px "Noto Sans TC",sans-serif`;let line='',y=startY;for(const char of text){if(x.measureText(line+char).width>maxWidth){x.fillText(line,80,y);line=char;y+=fontSize*1.65;}else line+=char;}if(line)x.fillText(line,80,y);return y;}
      wrap(c.tip,322,27,640);x.fillStyle='#66764f';x.font='700 22px "Noto Sans TC",sans-serif';x.fillText('✦ 給你的小小挑戰',80,485);x.fillStyle='#243329';wrap(c.challenge,530,23,640);
      x.font='20px "Noto Sans TC",sans-serif';x.fillText(letter.done?'✓ 這個小挑戰，我完成了！':'帶著一點好心情，繼續探索。',80,660);x.fillStyle='#f4f53b';x.font='20px monospace';x.fillText(letter.date,40,749);x.fillStyle='#cad4c2';x.font='13px "Noto Sans TC",sans-serif';x.fillText('角色圖像源自遊戲官網 · 鼓勵與小挑戰為本站原創 · 非官方網站',40,778);
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('圖片暫時無法產生。');const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`Cindy夥伴收藏卡-${letter.date}-${c.name}.png`;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);
    }catch(error){const toast=document.querySelector('#toast');toast.textContent='收藏卡暫時無法下載，請再試一次。';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),4500);}finally{if(button.isConnected)button.disabled=false;}
  }
  function mount(){
    const nextHome=document.querySelector('[data-companion-slot]');if(nextHome!==homeSlot)mountHome(nextHome);
    const nextSurprise=document.querySelector('[data-surprise-slot]');if(nextSurprise!==surpriseSlot){surpriseSlot=nextSurprise;if(surpriseSlot)paintSurprise();}
  }
  new MutationObserver(mount).observe(document.querySelector('#main'),{childList:true});
  new MutationObserver(schedule).observe(document.querySelector('#modal'),{attributes:true,attributeFilter:['open']});
  document.addEventListener('visibilitychange',schedule);
  window.addEventListener('storage',event=>{if(event.key===key&&event.newValue){try{journal=restoreJournal(JSON.parse(event.newValue));paintHome();paintSurprise();schedule();}catch{}}});
  mount();save();
})(typeof window!=='undefined'?window:globalThis);
