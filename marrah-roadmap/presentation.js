const safe=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function groupDetails(elements,id,title){
  const nodes=elements.filter(Boolean);if(!nodes.length)return null;
  const details=document.createElement('details');if(id)details.id=id;details.className='details-box research-depth';
  const summary=document.createElement('summary');summary.textContent=title;details.append(summary);
  nodes[0].before(details);nodes.forEach(n=>details.append(n));return details;
}

export function mountPresentation({lang='en',research}){
  const l=(en,ar)=>lang==='ar'?ar:en;
  const tx=x=>x?.[lang]??x?.en??'';
  const headings={opportunity:['Why merchants would pay.','لماذا سيدفع التاجر؟'],experience:['From receipt to return.','من الفاتورة إلى العودة.'],markets:['Choose the first market.','اختر السوق الأول.'],economics:['Test the business case.','اختبر الجدوى التجارية.'],blueprint:['How the platform fits together.','كيف تترابط المنصة.'],roadmap:['From plan to production.','من الخطة إلى الإنتاج.'],innovation:['Ideas worth testing.','أفكار تستحق الاختبار.'],collaborate:['Choose your role.','اختر دورك.'],evidence:['Follow the evidence.','تتبّع الأدلة.']};
  for(const[id,text]of Object.entries(headings)){const h=document.querySelector(`#${id} .section-head h2`);if(h)h.textContent=l(...text);}
  const oldJourney=document.querySelector('#experience .journey');
  if(oldJourney)groupDetails([oldJourney],'journey-details',l('Detailed customer journey and operating rules','تفاصيل رحلة العميل وقواعد التشغيل'));
  const compare=document.querySelector('#markets .comparison');
  if(compare)groupDetails([compare],'competitor-detail',l('Competitive landscape · 7 suppliers','المشهد التنافسي · ٧ موردين'));
  const stack=document.querySelector('#blueprint .stack-table')?.closest('.table-scroll');
  if(stack){
    const notes=stack.nextElementSibling;
    groupDetails([stack,notes?.tagName==='P'?notes:null],'stack-detail',l('Recommended stack and alternatives','التقنيات المقترحة والبدائل'));
    const ribbon=document.createElement('div');ribbon.className='stack-ribbon';
    ribbon.innerHTML=`<span>${l('Proposed core','النواة المقترحة')}</span><strong>React + TypeScript</strong><i aria-hidden="true">↔</i><strong>Fastify</strong><i aria-hidden="true">↔</i><strong>PostgreSQL</strong>`;
    document.querySelector('#blueprint .architecture')?.after(ribbon);
  }
  const form=document.querySelector('#model-form');
  if(form){
    const bench=form.parentElement;
    const details=document.createElement('details');details.id='model-tuning';details.className='details-box model-tuning';
    details.innerHTML=`<summary>${l('Tune the model · 7 editable assumptions','اضبط النموذج · ٧ افتراضات قابلة للتعديل')}</summary>`;
    bench.before(details);details.append(form);bench.classList.add('results-expanded');
  }
  const phaseList=document.querySelector('.phase-list');
  if(phaseList)groupDetails([phaseList],'phase-detail',l('Full gate acceptance and dependencies','معايير قبول البوابات والاعتماديات كاملة'));
  const budget=document.querySelector('.roadmap-summary');
  if(budget){
    const note=budget.nextElementSibling;
    groupDetails([budget,note?.classList.contains('notice')?note:null],'budget-detail',l('Scope, budget and team-capacity assumptions','افتراضات النطاق والميزانية وقدرة الفريق'));
  }
  for(const article of document.querySelectorAll('.innovation')){
    const paragraphs=[...article.querySelectorAll(':scope > p')];
    groupDetails(paragraphs.slice(1),'',l('Experiment & guardrail','الاختبار وقيد الحماية'));
  }
  const brand=document.querySelector('.brand-note');
  if(brand)groupDetails([brand],'brand-detail',l('Brand direction · working name, not yet cleared','اتجاه الهوية · اسم عمل لم يُفحص تجاريًا بعد'));
  const sourceTools=document.querySelector('.source-tools');
  if(sourceTools){
    groupDetails([sourceTools,document.querySelector('#source-count'),document.querySelector('#source-list'),document.querySelector('#more-sources')],'source-catalog',l('Browse all 104 evidence entries','تصفح سجلات الاستدلال الـ١٠٤'));
  }
  const countrySelect=document.querySelector('#country');
  const countryAtlas=document.createElement('div');countryAtlas.className='country-atlas';countryAtlas.setAttribute('role','group');countryAtlas.setAttribute('aria-label',l('Gulf market selector','اختيار السوق الخليجي'));
  countryAtlas.innerHTML=research.countries.map(c=>`<button type="button" class="country-tile" data-market="${safe(c.id)}"><span class="country-code" aria-hidden="true">${safe(c.id.toUpperCase())}</span><span class="country-tile-name">${safe(tx(c.name))}</span><span class="country-currency">${safe(c.currency)}</span></button>`).join('');
  document.querySelector('#markets .selector-row')?.before(countryAtlas);
  const setPressed=()=>countryAtlas.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.market===countrySelect.value)));
  countryAtlas.addEventListener('click',e=>{const b=e.target.closest('[data-market]');if(b){countrySelect.value=b.dataset.market;countrySelect.dispatchEvent(new Event('change',{bubbles:true}));setPressed();}});
  countrySelect.addEventListener('change',setPressed);setPressed();
  return ()=>countrySelect.removeEventListener('change',setPressed);
}

export function enhanceFinance({lang='en',result:r}){
  const host=document.querySelector('#model-results');if(!host)return;
  const l=(en,ar)=>lang==='ar'?ar:en;
  const fmt=n=>new Intl.NumberFormat(lang==='ar'?'ar-AE':'en-AE',{maximumFractionDigits:0}).format(n);
  const bridge=document.createElement('div');bridge.className='profit-bridge';
  bridge.setAttribute('aria-label',l('Illustrative merchant value calculation','حساب توضيحي لقيمة التاجر'));
  const costs=r.incrementalContribution-r.merchantNet;
  bridge.innerHTML=`<p>${l('Where merchant value comes from','من أين تأتي قيمة التاجر')}</p><div class="profit-equation"><div><strong dir="auto">${fmt(r.incrementalContribution)}</strong><span>${l('Extra-order contribution','مساهمة الطلبات الإضافية')}</span></div><b aria-hidden="true">−</b><div><strong dir="auto">${fmt(costs)}</strong><span>${l('Costs less remake savings','التكلفة بعد وفر إعادة التحضير')}</span></div><b aria-hidden="true">≈</b><div class="profit-equation-net"><strong dir="auto">${fmt(r.merchantNet)}</strong><span>${l('Merchant net · AED / month','صافي التاجر · درهم شهريًا')}</span></div></div><p class="profit-disclosure">${l('UAE model assumptions, rounded AED/month. Cost includes rewards, subscription, usage, admin and cannibalisation, less assumed remake savings.','افتراضات نموذج إماراتي، بدرهم شهري مقرب. التكلفة تشمل المكافآت والاشتراك والاستخدام والإدارة وتحويل المبيعات القائمة، بعد وفر إعادة التحضير المفترض.')}</p>`;
  host.querySelector('.metric-pair')?.after(bridge);
  const breakdown=host.querySelector('.model-breakdown');
  if(breakdown)groupDetails([breakdown],'model-thresholds',l('Operating thresholds and funding requirement','حدود التعادل والتمويل المطلوب'));
}
