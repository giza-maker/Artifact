(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let lang = 'en', slides = [], slideIndex = 0;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="assets/icons.svg#${name}"></use></svg>`;
  const local = (en, ar) => lang === 'ar' ? ar : en;
  const number = n => new Intl.NumberFormat(lang === 'ar' ? 'ar-SA' : 'en-US', {maximumFractionDigits: 0}).format(n);
  const money = n => local(`${n < 0 ? '−' : ''}SAR ${number(Math.abs(n))}`, `${n < 0 ? '−' : ''}${number(Math.abs(n))} ر.س`);

  function setLanguage(value) {
    lang = value;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-en][data-ar]').forEach(el => el.textContent = el.dataset[lang]);
    $('#langToggle').textContent = $('#deckLang').textContent = local('العربية', 'English');
    $('#langToggle').setAttribute('aria-label', local('Switch to Arabic', 'Switch to English'));
    $('#menuToggle').setAttribute('aria-label', local('Toggle navigation', 'فتح أو إغلاق القائمة'));
    $('#slidePrev').setAttribute('aria-label', local('Previous slide', 'الشريحة السابقة'));
    $('#slideNext').setAttribute('aria-label', local('Next slide', 'الشريحة التالية'));
    $('#slideNext use').setAttribute('href',`assets/icons.svg#${lang==='ar'?'arrow-left':'arrow-right'}`);
    $('#slidePrev use').setAttribute('href',`assets/icons.svg#${lang==='ar'?'arrow-right':'arrow-left'}`);
    $$('[data-close]').forEach(el => el.setAttribute('aria-label', local('Close dialog', 'إغلاق النافذة')));
    const ariaCopy = [['.desktop-nav','Main navigation','التنقل الرئيسي'],['.mobile-menu','Mobile navigation','قائمة التنقل'],['.service-band','Explore service categories','استكشف فئات الخدمات'],['.investor-tabs','Investor perspectives','خيارات المستثمر'],['#deckDots','Presentation slides','شرائح العرض'],['#app-demo','Interactive MAWJ mobile app concept','تصور تفاعلي لتطبيق موج']];
    ariaCopy.forEach(([selector,en,ar]) => $(selector).setAttribute('aria-label',local(en,ar)));
    $$('.wordmark[href]').forEach(el => el.setAttribute('aria-label',local('MAWJ home','الرئيسية في موج')));
    document.title = local('MAWJ | Your next look. One tap closer.', 'موج | إطلالتك الجاية. أقرب بلمسة.');
    window.MawjDemo?.setLanguage(lang);
    updateModel();
    if (slides.length) renderSlide(false);
  }
  $('#langToggle').addEventListener('click', () => setLanguage(lang === 'en' ? 'ar' : 'en'));
  $('#deckLang').addEventListener('click', () => setLanguage(lang === 'en' ? 'ar' : 'en'));
  window.addEventListener('mawj:language', e => setLanguage(e.detail.lang));
  $('#menuToggle').addEventListener('click', () => {
    const open = $('#mobileMenu').hidden;
    $('#mobileMenu').hidden = !open;
    $('#menuToggle').setAttribute('aria-expanded', String(open));
  });
  $('#mobileMenu').addEventListener('click', e => {
    if (e.target.closest('a,button')) { $('#mobileMenu').hidden = true; $('#menuToggle').setAttribute('aria-expanded','false'); }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('#mobileMenu').hidden) { $('#mobileMenu').hidden = true; $('#menuToggle').setAttribute('aria-expanded','false'); $('#menuToggle').focus(); }
  });
  $$('[data-category]').forEach(el => el.addEventListener('click', () => window.MawjDemo?.selectCategory(el.dataset.category)));
  $$('[data-try-app]').forEach(el => el.addEventListener('click', () => window.MawjDemo?.selectCategory('all')));

  const tabs = $$('[data-tab]');
  function selectTab(tab, focus = false) {
    tabs.forEach(el => { const active = el === tab; el.setAttribute('aria-selected', String(active)); el.tabIndex = active ? 0 : -1; $(`#panel-${el.dataset.tab}`).hidden = !active; });
    if (focus) tab.focus();
  }
  tabs.forEach((tab,i) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', e => {
      let target;
      if (e.key === 'ArrowRight') target = (i + (lang === 'ar' ? 2 : 1)) % tabs.length;
      if (e.key === 'ArrowLeft') target = (i + (lang === 'ar' ? 1 : 2)) % tabs.length;
      if (e.key === 'Home') target = 0;
      if (e.key === 'End') target = tabs.length - 1;
      if (target != null) { e.preventDefault(); selectTab(tabs[target], true); }
    });
  });
  function updateModel() {
    const salons = Number($('#salonRange').value), bookings = salons * 3 * 26;
    const revenue = bookings * 150 * .12, contribution = revenue - bookings * 6;
    $('#salonCount').value = number(salons);
    $('#calcBookings').textContent = number(bookings);
    $('#calcRevenue').textContent = money(revenue);
    $('#calcContribution').textContent = money(contribution);
    $('#calcBalance').textContent = money(contribution - 75000);
  }
  $('#salonRange').addEventListener('input', updateModel);

  const dialogTriggers = new WeakMap();
  function openDialog(dialog) { dialogTriggers.set(dialog, document.activeElement); dialog.showModal(); }
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('close', () => dialogTriggers.get(dialog)?.focus({preventScroll:true}));
    dialog.addEventListener('click', e => {
      if (e.target.closest('[data-close]')) dialog.close();
      if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); }
    });
  });
  async function openBrief() {
    openDialog($('#briefDialog'));
    if (!slides.length) {
      $('#slide').innerHTML = `<p role="status">${local('Loading investor story…','جارٍ تحميل العرض…')}</p>`;
      try {
        const response = await fetch('assets/brief.json');
        if (!response.ok) throw new Error('Brief unavailable');
        const data = await response.json(); slides = data.slides;
        if (!Array.isArray(slides) || !slides.length) throw new Error('Invalid brief');
      } catch {
        $('#slide').innerHTML = `<div><h2>${local('The brief could not load.','تعذر تحميل العرض.')}</h2><p>${local('Close this window and try again. The investment overview remains available on the page.','أغلق النافذة وحاول مجدداً. الملخص الاستثماري متاح في الصفحة.')}</p></div>`;
        $('#slideNext').disabled = $('#slidePrev').disabled = true; return;
      }
    }
    slideIndex = 0; renderSlide(false); $('#briefDialog').scrollTop = 0;
  }
  $$('[data-brief]').forEach(el => el.addEventListener('click', openBrief));
  function artForSlide(index) {
    const image = file => `<aside class="slide-art is-photo"><img src="assets/${file}.webp" alt=""></aside>`;
    const big = (value,label,glyph) => `<aside class="slide-art">${icon(glyph)}<span class="slide-big">${value}</span><p>${label}</p></aside>`;
    const stats = rows => `<aside class="slide-art">${rows.map(([v,k]) => `<div class="slide-stat"><b>${v}</b><span>${k}</span></div>`).join('')}</aside>`;
    if (index === 0) return image('woman-hair');
    if (index === 1) return image('barber');
    if (index === 2) return big('01 → 04', local('Discover. Choose. Book. Visit.','اكتشف. اختر. احجز. زر.'),'device-mobile');
    if (index === 3) return big(local('Trust','الثقة'),local('Profiles, partner checks, and completed-visit reviews.','ملفات مختصين، وتحقق من الشركاء، وتقييمات بعد الزيارة.'),'shield-check');
    if (index === 4) return image('salon');
    if (index === 5) return stats([['99%',local('Internet use · Saudi Arabia','استخدام الإنترنت · السعودية')],['71%',local('Bought online · ages 15–74','اشتروا عبر الإنترنت · عمر 15–74')],['85%',local('Electronic retail transactions','مدفوعات تجزئة إلكترونية')]]);
    if (index === 6) return big(local('Local','محلي'),local('A focused cluster. A measurable experience.','تجمع محلي مركز. تجربة قابلة للقياس.'),'map-pin');
    if (index === 7) return big('12%',local('Illustrative commission on completed bookings.','عمولة توضيحية على الحجوزات المكتملة.'),'check');
    if (index === 8) return `<aside class="slide-art"><table><caption>${local('Monthly scenario · SAR','سيناريو شهري · ر.س')}</caption><tbody>${[[local('Bookings','الحجوزات'),'2,340'],['GMV','351,000'],[local('Commission','العمولة'),'42,120'],[local('Contribution','المساهمة'),'28,080'],[local('Fixed costs','التكاليف الثابتة'),'75,000'],[local('Operating balance','الرصيد التشغيلي'),'−46,920']].map(([k,v])=>`<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</tbody></table></aside>`;
    if (index === 9) return stats([['30',local('Partner venues · target','أماكن شريكة · هدف')],['1,000',local('Completed appointments · target','مواعيد مكتملة · هدف')],['30%',local('Mature cohort repeat · target','تكرار مجموعة ناضجة · هدف')]]);
    if (index === 10) return big(local('Build','نبني'),local('Business + technical team. Founder biographies to add.','فريق تجاري وتقني. السير المهنية قيد الإضافة.'),'user');
    return `<aside class="slide-art"><span class="slide-big">900k</span><p>${local('SAR · indicative pilot budget','ر.س · ميزانية تجريبية إرشادية')}</p><table><tbody>${[[local('Product','المنتج'),'330k'],[local('Operations','التشغيل'),'300k'],[local('Acquisition','الاكتساب'),'120k'],[local('Legal','القانوني'),'60k'],[local('Reserve','الاحتياطي'),'90k']].map(([k,v])=>`<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('')}</tbody></table></aside>`;
  }
  function renderSlide(animate = true) {
    const base = slides[slideIndex], slide = lang === 'ar' && base.ar ? base.ar : base;
    const title = slideIndex === 0 ? local('Your next look. One tap closer.','إطلالتك الجاية. أقرب بلمسة.') : slide.title;
    $('#slide').innerHTML = `<div class="slide-main"><p class="slide-eyebrow">${local('MAWJ · GULF BEAUTY MARKETPLACE','موج · سوق الجمال الخليجي')}</p><h2>${esc(title)}</h2><ul>${slide.body.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p class="slide-note">${esc(slide.note || '')}</p></div>${artForSlide(slideIndex)}`;
    $('#slideCount').textContent = `${slideIndex + 1} / ${slides.length}`;
    $('#slidePrev').disabled = slideIndex === 0; $('#slideNext').disabled = slideIndex === slides.length - 1;
    $('#deckDots').innerHTML = slides.map((_,i)=>`<button type="button" data-slide="${i}" aria-label="${local('Slide','الشريحة')} ${i+1}" ${i===slideIndex?'aria-current="true"':''}></button>`).join('');
    if (animate && !reducedMotion.matches) $('#slide').animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:250,easing:'ease-out'});
  }
  function moveSlide(delta) { const target = slideIndex + delta; if (target < 0 || target >= slides.length) return; slideIndex = target; renderSlide(); $('#briefDialog').scrollTop = 0; }
  $('#slidePrev').addEventListener('click',()=>moveSlide(-1)); $('#slideNext').addEventListener('click',()=>moveSlide(1));
  $('#deckDots').addEventListener('click',e=>{const dot=e.target.closest('[data-slide]');if(dot){slideIndex=Number(dot.dataset.slide);renderSlide();}});
  $('#briefDialog').addEventListener('keydown',e=>{ if(e.key==='ArrowRight'){e.preventDefault();moveSlide(lang==='ar'?-1:1);}if(e.key==='ArrowLeft'){e.preventDefault();moveSlide(lang==='ar'?1:-1);} });

  $$('[data-intro]').forEach(el=>el.addEventListener('click',()=>{ const form=$('#introForm');form.elements.interest.value=el.dataset.intro;$('#introStatus').textContent='';openDialog($('#introDialog')); }));
  $('#introForm').addEventListener('submit',e=>{
    e.preventDefault(); const form=e.currentTarget; if(!form.reportValidity())return;
    const content=`MAWJ introduction\n\nName: ${form.elements.name.value}\nContact: ${form.elements.contact.value}\nInterest: ${form.elements.interest.value}\n\n${form.elements.message.value}\n\nDraft generated locally. Nothing sent.`;
    const url=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='mawj-introduction.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    $('#introStatus').textContent=local('Draft downloaded. Nothing was sent.','تم تنزيل المسودة. لم يُرسل شيء.');
  });
  if(!reducedMotion.matches && 'IntersectionObserver' in window){
    document.documentElement.classList.add('motion-ready');
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08});
    $$('.reveal').forEach(el=>observer.observe(el));
  }
  $('#app-demo').setAttribute('role','region');
  const appHeading=document.createElement('h2');appHeading.className='sr-only';appHeading.dataset.en='Explore the MAWJ app';appHeading.dataset.ar='استكشف تطبيق موج';appHeading.textContent=appHeading.dataset.en;$('#experience').prepend(appHeading);
  updateModel();
})();
