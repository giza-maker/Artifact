let selectedGate = 'G0';
const copy = {
  en: {
    concept: 'Interactive concept', order: 'One visit, four steps.', simulation: 'SIMULATION',
    steps: ['Receipt', 'Preparing', 'Ready', 'Reward'], statuses: ['Receipt opened', 'Order in preparation', 'Ready for collection', 'Verified purchase rewarded'],
    notes: ['Scan opens a private status page.', 'A verified source updates preparation state.', 'Order number supports a calmer handoff.', 'One example stamp is active; no real reward is issued.'],
    play: 'Play story', pause: 'Pause', progress: 'Concept progress', reward: 'Example reward progress', disclosure: 'Interactive concept. No live order, message or scannable QR code.',
    gates: 'Click a gate to inspect what must be proven.', proposed: 'Proposed gate. Selection does not mean completion.', eng: 'Engineering', nonEng: 'Non-engineering', hours: 'hours', deliverable: 'Deliverable', exit: 'Exit evidence', dependency: 'Dependency', route: 'Proposed delivery route', parallel: 'G3 and G4 may run in parallel'
  },
  ar: {
    concept: 'تصوّر تفاعلي', order: 'زيارة واحدة، أربع خطوات.', simulation: 'محاكاة',
    steps: ['الفاتورة', 'قيد التحضير', 'جاهز', 'المكافأة'], statuses: ['فُتحت الفاتورة', 'الطلب قيد التحضير', 'جاهز للاستلام', 'مكافأة شراء مُثبت'],
    notes: ['يفتح المسح صفحة حالة خاصة.', 'يحدّث مصدر موثوق حالة التحضير.', 'يساعد رقم الطلب على تسليم أهدأ.', 'ختم واحد مفعّل كمثال؛ لا توجد مكافأة حقيقية.'],
    play: 'شغّل القصة', pause: 'إيقاف مؤقت', progress: 'تقدم التصوّر', reward: 'تقدم مكافأة توضيحي', disclosure: 'تصوّر تفاعلي. لا طلبات أو رسائل حقيقية أو رمز QR قابل للمسح.',
    gates: 'اختر بوابة لفحص ما يجب إثباته.', proposed: 'بوابة مقترحة. الاختيار لا يعني الاجتياز.', eng: 'الهندسة', nonEng: 'غير الهندسي', hours: 'ساعة', deliverable: 'المخرج', exit: 'دليل الاجتياز', dependency: 'الاعتماد', route: 'مسار التنفيذ المقترح', parallel: 'يمكن تنفيذ G3 وG4 بالتوازي'
  }
};

export function mountStory({lang = 'en', research} = {}) {
  const t = copy[lang === 'ar' ? 'ar' : 'en'];
  const experience = document.querySelector('#experience');
  const roadmap = document.querySelector('#roadmap');
  const listeners = [];
  let timer = 0;
  let currentStep = 0;
  let playing = false;
  let visible = true;
  const on = (node, event, fn) => { node?.addEventListener(event, fn); listeners.push(() => node?.removeEventListener(event, fn)); };

  if (experience && !experience.querySelector('#story-concept')) {
    const visual = document.createElement('section');
    visual.id = 'story-concept';
    visual.className = 'story-concept';
    visual.setAttribute('aria-labelledby', 'story-concept-title');
    visual.innerHTML = `
      <div class="story-copy"><span class="story-kicker">${t.concept}</span><h3 id="story-concept-title">${t.order}</h3><p id="story-status" class="story-status" aria-live="polite"></p><p id="story-note"></p><div class="story-controls"><button id="story-play" type="button">${t.play}</button><span>${t.disclosure}</span></div></div>
      <div class="story-receipt" aria-label="${t.progress}"><div class="story-receipt-head"><strong>marrah <small>مرّة</small></strong><span>${t.simulation}</span></div><div class="story-order"><span>#0284</span><div class="story-qr" aria-hidden="true"></div></div><div class="story-barcode" aria-hidden="true"></div><ol class="story-track">${t.steps.map((s,i)=>`<li><button type="button" data-story-step="${i}" aria-label="${s}"><span>${i+1}</span>${s}</button></li>`).join('')}</ol><div class="story-stamps" aria-label="${t.reward}">${Array.from({length:8},(_,i)=>`<span class="${i===0?'is-earned':''}">${i===0?'✓':i+1}</span>`).join('')}</div></div>`;
    experience.querySelector('.section-head')?.after(visual);
    const status = visual.querySelector('#story-status');
    const note = visual.querySelector('#story-note');
    const play = visual.querySelector('#story-play');
    play.setAttribute('aria-pressed','false');
    const nativeSteps = [...experience.querySelectorAll('.journey-steps [data-step]')];
    const renderStep = (index, animate = true) => {
      currentStep = Math.max(0, Math.min(3, index));
      status.textContent = t.statuses[currentStep]; note.textContent = t.notes[currentStep];
      visual.querySelectorAll('[data-story-step]').forEach((b,i) => b.setAttribute('aria-pressed', String(i === currentStep)));
      visual.querySelectorAll('.story-stamps span').forEach((s,i)=>{const earned=currentStep===3&&i===0;s.classList.toggle('is-earned',earned);s.textContent=earned?'✓':i+1;if(earned&&animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches)s.animate([{opacity:0,transform:'scale(.6)'},{opacity:1,transform:'scale(1.12)'},{opacity:1,transform:'scale(1)'}],{duration:420,easing:'ease-out'});});
      visual.style.setProperty('--story-progress', `${currentStep * 33.333}%`);
      if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) visual.querySelector('.story-receipt').animate([{opacity:.72,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'cubic-bezier(.2,.8,.2,1)'});
    };
    const stop = () => { playing = false; clearTimeout(timer); timer = 0; play.textContent = t.play; play.setAttribute('aria-pressed','false'); };
    const schedule = () => {
      clearTimeout(timer);
      if (!playing || document.hidden || !visible) return;
      timer = window.setTimeout(() => {
        if (currentStep >= 3) { stop(); return; }
        const next = currentStep + 1;
        if (nativeSteps[next]) nativeSteps[next].click(); else renderStep(next);
        schedule();
      }, 1800);
    };
    visual.querySelectorAll('[data-story-step]').forEach(b => on(b, 'click', () => { const index=+b.dataset.storyStep; if(nativeSteps[index])nativeSteps[index].click();else renderStep(index); if (playing) schedule(); }));
    nativeSteps.forEach(b => on(b, 'click', () => renderStep(+b.dataset.step)));
    on(play, 'click', () => { if (playing) return stop(); if (currentStep === 3) { if(nativeSteps[0])nativeSteps[0].click();else renderStep(0); } visible=!experience.hidden; playing = true; play.textContent = t.pause; play.setAttribute('aria-pressed','true'); schedule(); });
    on(document, 'visibilitychange', () => document.hidden ? stop() : undefined);
    on(document, 'marrah:chapterchange', e => { if(e.detail.chapter!=='experience')stop(); });
    let observer;
    if ('IntersectionObserver' in window) { observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (!visible) stop(); }, {threshold:.08}); observer.observe(visual); }
    listeners.push(() => { stop(); observer?.disconnect(); });
    renderStep(+nativeSteps.find(b => b.getAttribute('aria-pressed') === 'true')?.dataset.step || 0, false);
  }

  const phases = (research?.phases || []).filter(p => /^G[0-5]$/.test(p.id));
  if (roadmap && phases.length && !roadmap.querySelector('#gate-route')) {
    const route = document.createElement('section');
    route.id = 'gate-route'; route.className = 'gate-route'; route.setAttribute('aria-labelledby','gate-route-title');
    route.innerHTML = `<div class="gate-heading"><div><span class="story-kicker">${t.route}</span><h3 id="gate-route-title" dir="ltr">G0 → G1 → G2 → G3 + G4 → G5</h3></div><p>${t.gates}</p></div><div class="gate-map" role="group" aria-label="${t.route}"><div class="gate-parallel" aria-label="${t.parallel}"></div></div><article id="gate-panel" class="gate-panel" aria-live="polite"></article>`;
    roadmap.querySelector('.section-head')?.after(route);
    const map = route.querySelector('.gate-map');
    phases.forEach((p,i) => {
      const button = document.createElement('button'); button.type='button'; button.className=`gate-node gate-${p.id.toLowerCase()}`; button.dataset.gate=p.id;
      button.innerHTML=`<strong>${p.id}</strong><span>${p.title[lang] || p.title.en}</span>`; map.appendChild(button);
    });
    const panel = route.querySelector('#gate-panel');
    const select = id => {
      const p = phases.find(x=>x.id===id) || phases[0];
      selectedGate = p.id;
      route.querySelectorAll('[data-gate]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.gate===p.id)));
      panel.innerHTML='';
      const title=document.createElement('h4'); title.textContent=`${p.id} · ${p.title[lang] || p.title.en}`;
      const warning=document.createElement('p'); warning.className='gate-warning'; warning.textContent=t.proposed;
      const metrics=document.createElement('div'); metrics.className='gate-metrics'; metrics.innerHTML=`<span><strong>${p.eng[0]}–${p.eng[1]}</strong>${t.eng} · ${t.hours}</span><span><strong>${p.nonEng[0]}–${p.nonEng[1]}</strong>${t.nonEng} · ${t.hours}</span>`;
      panel.append(title,warning,metrics);
      [[t.deliverable,p.deliverable],[t.exit,p.gate],[t.dependency,p.dependency]].forEach(([label,value])=>{const d=document.createElement('div'),h=document.createElement('h5'),text=document.createElement('p');h.textContent=label;text.textContent=value[lang]||value.en;d.append(h,text);panel.append(d);});
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) panel.animate([{opacity:.45,transform:'translateY(4px)'},{opacity:1,transform:'none'}],{duration:220});
    };
    route.querySelectorAll('[data-gate]').forEach(b=>on(b,'click',()=>select(b.dataset.gate)));
    select(selectedGate);
  }

  return () => { listeners.splice(0).forEach(fn=>fn()); document.querySelector('#story-concept')?.remove(); document.querySelector('#gate-route')?.remove(); };
}
