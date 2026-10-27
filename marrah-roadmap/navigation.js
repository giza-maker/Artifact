const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export const chapters = [
  ['overview','At a glance','نظرة سريعة','The idea, the plan and where to begin.','الفكرة والخطة ونقطة البداية.'],
  ['opportunity','The opportunity','الفرصة','Merchant value, demand and the investment thesis.','قيمة التاجر والطلب وأطروحة الاستثمار.'],
  ['experience','Customer journey','رحلة العميل','Play the receipt-to-reward concept.','شاهد تصوّر الرحلة من الفاتورة إلى المكافأة.'],
  ['app-preview','App mockups','نماذج التطبيق','Explore customer, staff and merchant screens with fictional data.','استكشف واجهات العميل والموظف والتاجر ببيانات خيالية.'],
  ['markets','Markets & sectors','الأسواق والقطاعات','Explore six Gulf countries and six workflows.','استكشف ست دول خليجية وستة مسارات عمل.'],
  ['economics','Economics','الاقتصاديات','Test assumptions, contribution and cash runway.','اختبر الافتراضات والمساهمة والسيولة.'],
  ['blueprint','Product & technology','المنتج والتقنية','The shared core, interfaces and stack choices.','النواة المشتركة والواجهات والخيارات التقنية.'],
  ['roadmap','Roadmap','خارطة الطريق','Explore delivery gates, effort and acceptance.','استكشف بوابات التسليم والجهد والقبول.'],
  ['innovation','Innovation lab','مختبر الابتكار','Six hypotheses with experiments and guardrails.','ست فرضيات باختبارات وقيود حماية.'],
  ['collaborate','Collaborate','التعاون','Investor, operating partner and builder briefs.','ملفات حوار للمستثمر والشريك وفريق البناء.'],
  ['evidence','Evidence','الأدلة','Sources, uncertainty and open decisions.','المصادر وعدم اليقين والقرارات المفتوحة.']
];

export function mountNavigation({lang='en',audience='investor',layout='chapters',onModeChange=()=>{},onRestore=()=>false}) {
  const app=document.querySelector('#app');
  const main=app.querySelector('#main');
  if(!main)return ()=>{};
  const l=(en,ar)=>lang==='ar'?ar:en;
  const title=c=>c[lang==='ar'?2:1];
  const description=c=>c[lang==='ar'?4:3];
  const ids=new Set(chapters.map(c=>c[0]));
  let mode=layout==='document'?'document':'chapters';
  let active=ids.has(location.hash.slice(1))?location.hash.slice(1):'overview';
  let closedBySelection=false, searchTrigger, observer, animation;
  const listeners=[];
  const listen=(target,event,fn,options)=>{target.addEventListener(event,fn,options);listeners.push(()=>target.removeEventListener(event,fn,options));};
  const overview=main.firstElementChild;
  overview.id='overview';
  overview.classList.add('chapter-view','overview-view');
  main.querySelectorAll(':scope > section').forEach(s=>s.classList.add('chapter-view'));

  const shell=document.createElement('div');shell.className='reading-shell';
  main.before(shell);
  const rail=document.createElement('aside');rail.className='chapter-rail';rail.setAttribute('aria-label',l('Chapter index','فهرس الفصول'));
  const content=document.createElement('div');content.className='chapter-content';
  shell.append(rail,content);content.append(main);
  const chapterLinks=()=>chapters.map((c,i)=>`<a href="#${c[0]}" class="chapter-link" data-chapter="${c[0]}"><span class="chapter-no" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><span class="chapter-name">${title(c)}</span><span class="chapter-arrow" aria-hidden="true">↗</span></a>`).join('');
  rail.innerHTML=`<p class="rail-heading">${l('Explore the plan','استكشف الخطة')}</p><nav class="chapter-list" aria-label="${l('All chapters','كل الفصول')}">${chapterLinks()}</nav><button type="button" class="document-toggle button secondary compact"></button><a class="rail-download" href="downloads/gulf-production-roadmap.pdf" target="_blank" rel="noopener">${l('Full research brief','ملف البحث الكامل')} <span>PDF ↗</span></a><p class="rail-note">${l('Research · 27 Oct 2026<br>Pre-validation proposal','بحث · ٢٧ أكتوبر ٢٠٢٦<br>مقترح قبل التحقق التجاري')}</p>`;
  const bar=document.createElement('div');bar.className='chapter-bar';
  bar.innerHTML=`<div class="chapter-position"><span class="chapter-count"></span><span class="chapter-current"></span></div><label class="sr-only" for="chapter-select">${l('Choose chapter','اختر فصلًا')}</label><select id="chapter-select">${chapters.map((c,i)=>`<option value="${c[0]}">${String(i+1).padStart(2,'0')} · ${title(c)}</option>`).join('')}</select><button type="button" class="chapter-search" aria-label="${l('Find chapter','ابحث عن فصل')}" aria-haspopup="dialog" aria-controls="chapter-dialog" aria-keyshortcuts="Control+K Meta+K"><span class="chapter-search-label">${l('Find chapter','ابحث عن فصل')}</span><span class="search-symbol" aria-hidden="true">⌕</span><kbd aria-hidden="true">Ctrl K</kbd></button><button type="button" class="mobile-document-toggle" aria-label="${l('Switch reading mode','غيّر وضع القراءة')}"></button>`;
  content.prepend(bar);
  const pagination=document.createElement('nav');pagination.className='chapter-pagination';pagination.setAttribute('aria-label',l('Chapter navigation','التنقل بين الفصول'));
  pagination.innerHTML='<a class="chapter-prev"></a><a class="chapter-next"></a>';
  content.append(pagination);

  const atlas=document.createElement('div');atlas.className='overview-atlas';
  atlas.setAttribute('aria-label',l('Choose what to explore','اختر ما تريد استكشافه'));
  atlas.innerHTML=`
    <a href="#app-preview" data-chapter="app-preview" class="atlas-tile tile-journey"><span class="atlas-kicker">${l('The app concept','تصوّر التطبيق')}</span><div class="atlas-journey" aria-hidden="true"><span>QR</span><span>→</span><span>${l('Ready','جاهز')}</span><span>→</span><span>✦</span></div><h3>${l('See the app from every side.','شاهد التطبيق من كل زاوية.')}</h3><p>${l('Explore customer, staff and merchant mockups.','استكشف نماذج العميل والموظف والتاجر.')}</p><span class="atlas-arrow" aria-hidden="true">↗</span></a>
    <a href="#economics" data-chapter="economics" class="atlas-tile tile-economics"><span class="atlas-kicker">${l('The business case','الحالة التجارية')}</span><div class="atlas-scenario" aria-hidden="true">${l('Base','أساسي')} <span>↔</span> ${l('Downside','متشائم')}</div><h3>${l('Make the numbers answer.','دع الأرقام تجيب.')}</h3><p>${l('Change assumptions. See merchant value and funding move.','غيّر الافتراضات وشاهد أثرها على قيمة التاجر والتمويل.')}</p><span class="atlas-arrow" aria-hidden="true">↗</span></a>
    <a href="#markets" data-chapter="markets" class="atlas-tile tile-markets"><span class="atlas-kicker">${l('The Gulf opportunity','الفرصة الخليجية')}</span><div class="atlas-countries" aria-hidden="true">${['SA','AE','QA','OM','BH','KW'].map(c=>`<span>${c}</span>`).join('')}</div><h3>${l('Six markets. One first proof.','ست أسواق. واختبار أول واحد.')}</h3><p>${l('Choose a country, a sector and a supported connector.','اختر دولة وقطاعًا وموصلًا مدعومًا.')}</p><span class="atlas-arrow" aria-hidden="true">↗</span></a>
    <a href="#roadmap" data-chapter="roadmap" class="atlas-tile tile-roadmap"><span class="atlas-kicker">${l('The delivery plan','خطة التسليم')}</span><div class="atlas-gates" aria-hidden="true"><span>G0</span><i></i><span>G1</span><i></i><span>G2</span><i></i><span>G3 / G4</span></div><h3>${l('Progress through proof.','تقدّم وفق الأدلة.')}</h3><p>${l('Explore gates, costs and the evidence needed to proceed.','استكشف البوابات والتكلفة وأدلة الاستمرار.')}</p><span class="atlas-arrow" aria-hidden="true">↗</span></a>
    <a href="#blueprint" data-chapter="blueprint" class="atlas-tile tile-blueprint"><span class="atlas-kicker">${l('The production backbone','أساس الإنتاج')}</span><div class="atlas-stack" aria-hidden="true"><span>Web</span><span>Core</span><span>POS / Wallet</span></div><h3>${l('Understand the system.','افهم النظام.')}</h3><p>${l('Shared loyalty, distinct workflows and explicit boundaries.','ولاء مشترك ومسارات مختلفة وحدود واضحة.')}</p><span class="atlas-arrow" aria-hidden="true">↗</span></a>
    <a href="#evidence" data-chapter="evidence" class="atlas-tile tile-evidence"><span class="atlas-kicker">${l('The evidence','الأدلة')}</span><div class="atlas-number">104<span>${l('entries · 94 distinct URLs','سجلات · ٩٤ رابطًا مختلفًا')}</span></div><h3>${l('Inspect the foundations.','افحص الأساس.')}</h3><p>${l('Sources, limits and the decisions still open.','المصادر والحدود والقرارات التي لم تُحسم.')}</p><span class="atlas-arrow" aria-hidden="true">↗</span></a>`;
  const guide=overview.querySelector('.reading-guide');
  guide?.after(atlas);
  if(!guide)overview.append(atlas);
  const orientation=overview.querySelector('.orientation');
  if(orientation){
    const detail=document.createElement('details');detail.className='details-box overview-status';
    detail.innerHTML=`<summary>${l('Research status and scope','حالة البحث ونطاقه')}</summary>`;
    orientation.before(detail);detail.append(orientation);overview.append(detail);
  }
  const heroAction=overview.querySelector('.hero .actions a');
  if(heroAction){heroAction.href='#app-preview';heroAction.innerHTML=`${l('Explore app mockups','استكشف نماذج التطبيق')} <span aria-hidden="true">↗</span>`;}
  const secondaryAction=overview.querySelector('.hero .actions a:nth-child(2)');
  if(secondaryAction){secondaryAction.href='#roadmap';secondaryAction.removeAttribute('target');secondaryAction.removeAttribute('rel');secondaryAction.innerHTML=`${l('Explore the roadmap','استكشف الخارطة')} <span aria-hidden="true">↗</span>`;}

  const menu=document.createElement('dialog');menu.id='chapter-dialog';menu.setAttribute('aria-labelledby','chapter-dialog-title');
  menu.innerHTML=`<div class="chapter-dialog-heading"><h2 id="chapter-dialog-title">${l('Where next?','إلى أين الآن؟')}</h2><button type="button" id="close-chapters" class="button secondary compact">${l('Close','إغلاق')}</button></div><label class="sr-only" for="chapter-search-input">${l('Search chapters','ابحث في الفصول')}</label><input id="chapter-search-input" class="chapter-search-input" type="search" autocomplete="off" placeholder="${l('Try markets, cash, technology…','جرّب الأسواق أو النقد أو التقنية…')}"><p class="chapter-search-hint">${l('↑ ↓ to move · Enter to open · Esc to close','↑ ↓ للتنقل · Enter للفتح · Esc للإغلاق')}</p><div class="chapter-results"></div><p id="chapter-search-status" class="sr-only" role="status"></p>`;
  app.append(menu);
  const searchInput=menu.querySelector('input');
  function results(){
    const q=searchInput.value.trim().toLocaleLowerCase();
    const matches=chapters.filter(c=>c.join(' ').toLocaleLowerCase().includes(q));
    menu.querySelector('.chapter-results').innerHTML=matches.map(c=>`<button type="button" class="chapter-result" data-chapter="${c[0]}"><span class="result-index" aria-hidden="true">${String(chapters.indexOf(c)+1).padStart(2,'0')}</span><span><span class="result-title">${escapeHTML(title(c))}</span><span class="result-description">${escapeHTML(description(c))}</span></span><span aria-hidden="true">↗</span></button>`).join('')||`<p class="chapter-empty">${l('No matching chapters. Try “market”, “cash” or “roadmap”.','لا فصول مطابقة. جرّب «الأسواق» أو «النقد» أو «خارطة».')}</p>`;
    menu.querySelector('#chapter-search-status').textContent=l(`${matches.length} chapters`,`${matches.length} فصلًا`);
  }
  function openSearch(trigger){
    if(document.querySelector('dialog[open]'))return;
    closedBySelection=false;searchTrigger=trigger||bar.querySelector('.chapter-search');
    searchInput.value='';results();menu.showModal();searchInput.focus();
  }
  const views=chapters.map(c=>document.getElementById(c[0])).filter(Boolean);
  function updateIndicators(){
    const index=chapters.findIndex(c=>c[0]===active),c=chapters[index];
    bar.querySelector('.chapter-count').textContent=`${String(index+1).padStart(2,'0')} / ${chapters.length}`;
    bar.querySelector('.chapter-current').textContent=title(c);
    bar.querySelector('#chapter-select').value=active;
    rail.querySelectorAll('[data-chapter]').forEach(a=>{if(a.dataset.chapter===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    const prev=pagination.querySelector('.chapter-prev'),next=pagination.querySelector('.chapter-next');
    prev.hidden=index===0;next.hidden=index===chapters.length-1;
    if(index>0){prev.href=`#${chapters[index-1][0]}`;prev.dataset.chapter=chapters[index-1][0];prev.innerHTML=`<span>${l('← Previous','→ السابق')}</span><strong>${title(chapters[index-1])}</strong>`;}
    if(index<chapters.length-1){next.href=`#${chapters[index+1][0]}`;next.dataset.chapter=chapters[index+1][0];next.innerHTML=`<span>${l('Next →','التالي ←')}</span><strong>${title(chapters[index+1])}</strong>`;}
    const modeText=mode==='chapters'?l('Full document','المستند كاملًا'):l('Chapter view','عرض الفصول');
    rail.querySelector('.document-toggle').textContent=modeText;
    bar.querySelector('.mobile-document-toggle').textContent=mode==='chapters'?l('Read all','اقرأ الكل'):l('Chapters','الفصول');
    document.body.dataset.chapter=active;
  }
  function route(id,{push=false,focus=false,scroll=true}={}){
    if(!ids.has(id))id='overview';
    document.querySelector('#source-dialog[open]')?.close();
    active=id;
    views.forEach(v=>{v.hidden=mode==='chapters'&&v.id!==active;v.classList.toggle('is-active',v.id===active);});
    document.body.classList.toggle('chapter-mode',mode==='chapters');
    document.body.classList.toggle('document-mode',mode==='document');
    updateIndicators();
    if(push&&location.hash!==`#${id}`){const url=new URL(location.href);url.hash=id;history.pushState({chapter:id},'',url);}
    if(scroll){
      if(mode==='chapters')window.scrollTo({top:0,behavior:'instant'});
      else document.getElementById(id).scrollIntoView({behavior:'instant',block:'start'});
    }
    const heading=document.getElementById(id).querySelector('h1,h2');
    if(focus&&heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
    animation?.cancel();
    if(mode==='chapters'&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
      animation=document.getElementById(id).animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,easing:'cubic-bezier(.2,.7,.2,1)'});
    }
    document.dispatchEvent(new CustomEvent('marrah:chapterchange',{detail:{chapter:id,mode}}));
  }
  function toggleDocument(){
    mode=mode==='chapters'?'document':'chapters';onModeChange(mode);route(active,{focus:false});
  }
  listen(rail.querySelector('.document-toggle'),'click',toggleDocument);
  listen(bar.querySelector('.mobile-document-toggle'),'click',toggleDocument);
  listen(bar.querySelector('.chapter-search'),'click',e=>openSearch(e.currentTarget));
  listen(bar.querySelector('#chapter-select'),'change',e=>route(e.target.value,{push:true,focus:true}));
  listen(searchInput,'input',results);
  listen(menu.querySelector('#close-chapters'),'click',()=>menu.close());
  listen(menu,'close',()=>{if(!closedBySelection)searchTrigger?.focus();});
  listen(menu,'click',e=>{
    const result=e.target.closest('[data-chapter]');
    if(result){closedBySelection=true;menu.close();route(result.dataset.chapter,{push:true,focus:true});return;}
    if(e.target===menu){const r=menu.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)menu.close();}
  });
  listen(menu,'keydown',e=>{
    if(e.key==='Enter'&&document.activeElement===searchInput){const first=menu.querySelector('.chapter-result');if(first){e.preventDefault();first.click();}return;}
    if(!['ArrowDown','ArrowUp'].includes(e.key))return;
    const buttons=[...menu.querySelectorAll('.chapter-result')];if(!buttons.length)return;
    e.preventDefault();const current=buttons.indexOf(document.activeElement);
    const index=current<0?(e.key==='ArrowDown'?0:buttons.length-1):(current+(e.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length;
    buttons[index].focus();
  });
  listen(document,'keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch(document.activeElement);}
  });
  listen(app,'click',e=>{
    const a=e.target.closest('a[href]');if(!a||a.target||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||e.button>0)return;
    const href=a.getAttribute('href');if(!href?.startsWith('#'))return;
    const id=href.slice(1)||'overview';if(!ids.has(id))return;
    e.preventDefault();route(id,{push:true,focus:true});
  });
  const skipToChapter=()=>{const url=new URL(location.href);url.hash=active;history.replaceState({chapter:active},'',url);route(active,{scroll:true,focus:true});};
  listen(document,'click',e=>{if(e.target.closest('a.skip[href="#main"]')){e.preventDefault();skipToChapter();}});
  const restore=()=>{if(location.hash==='#main'){skipToChapter();return;}if(!onRestore())route(ids.has(location.hash.slice(1))?location.hash.slice(1):'overview',{scroll:true});};
  listen(window,'popstate',restore);
  listen(window,'hashchange',()=>{
    const id=location.hash.slice(1);
    if(id==='main'){
      skipToChapter();return;
    }
    if(ids.has(id)||id==='')route(id||'overview',{scroll:true});
  });
  let printing=false;
  listen(window,'beforeprint',()=>{printing=true;views.forEach(v=>v.hidden=false);});
  listen(window,'afterprint',()=>{if(mode==='chapters')views.forEach(v=>v.hidden=v.id!==active);printing=false;});
  observer=new IntersectionObserver(entries=>{
    if(mode!=='document'||printing)return;
    const candidate=entries.filter(e=>e.isIntersecting).sort((a,b)=>Math.abs(a.boundingClientRect.top)-Math.abs(b.boundingClientRect.top))[0];
    if(candidate&&active!==candidate.target.id){active=candidate.target.id;updateIndicators();const url=new URL(location.href);url.hash=active;history.replaceState({chapter:active},'',url);}
  },{rootMargin:'-140px 0px -55% 0px',threshold:0});
  views.forEach(v=>observer.observe(v));
  route(active,{scroll:Boolean(location.hash)});
  return ()=>{
    listeners.forEach(remove=>remove());observer?.disconnect();animation?.cancel();menu.remove();
    document.body.classList.remove('chapter-mode','document-mode');delete document.body.dataset.chapter;
  };
}
