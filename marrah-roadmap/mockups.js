import {renderCustomer} from './mockups-customer.js?v=20261028';
import {renderStaff,renderMerchant} from './mockups-operations.js?v=20261028';

// Fictional, in-memory presentation fixtures. Never connected to the merchant MVP.
const scenarios={
  retail:{id:'retail',name:{en:'Retail pickup',ar:'استلام مشتريات التجزئة'},merchant:{en:'Marrah Store',ar:'متجر مرّة'},prepLabel:{en:'Packing',ar:'قيد التجهيز'},reward:{en:'A member gift after 8 paid visits',ar:'هدية عضوية بعد ٨ زيارات مدفوعة'},ticket:70,items:[{name:{en:'Canvas tote',ar:'حقيبة قماشية'},qty:1,unit:45},{name:{en:'Everyday notebook',ar:'دفتر يومي'},qty:1,unit:25}]},
  cafe:{id:'cafe',name:{en:'Café pickup',ar:'استلام طلبات المقهى'},merchant:{en:'Marrah Coffee',ar:'قهوة مرّة'},prepLabel:{en:'Preparing',ar:'قيد التحضير'},reward:{en:'A complimentary upgrade after 8 paid visits',ar:'ترقية مجانية بعد ٨ زيارات مدفوعة'},ticket:38,items:[{name:{en:'Flat white',ar:'فلات وايت'},qty:1,unit:22},{name:{en:'Butter croissant',ar:'كرواسون بالزبدة'},qty:1,unit:16}]},
  service:{id:'service',name:{en:'Express car care',ar:'العناية السريعة بالسيارة'},merchant:{en:'Marrah Car Care',ar:'مرّة للعناية بالسيارات'},prepLabel:{en:'In service',ar:'الخدمة جارية'},reward:{en:'A care upgrade after 8 paid visits',ar:'ترقية عناية بعد ٨ زيارات مدفوعة'},ticket:60,items:[{name:{en:'Exterior wash',ar:'غسيل خارجي'},qty:1,unit:35},{name:{en:'Interior refresh',ar:'تنظيف داخلي سريع'},qty:1,unit:25}]}
};
const fixture=[
  {id:'1038',status:'collected',minutes:18,prepMinutes:6},
  {id:'1039',status:'ready',minutes:13,prepMinutes:8},
  {id:'1040',status:'ready',minutes:11,prepMinutes:7},
  {id:'1042',status:'preparing',minutes:8},
  {id:'1044',status:'preparing',minutes:13},
  {id:'1045',status:'preparing',minutes:16},
  {id:'1046',status:'received',minutes:1},
  {id:'1047',status:'received',minutes:2}
];
const branch={en:'City Centre · Dubai',ar:'وسط المدينة · دبي'};
const cloneOrders=()=>fixture.map(o=>({...o}));
let state={view:'customer',scenario:'retail',orders:cloneOrders(),selectedOrderId:'1042',customerOrderId:'1042',staffFilter:'active',staffQuery:'',customerTab:'order',channel:'onscreen',rewardReady:false,walletExpanded:false,merchantTab:'overview',merchantPeriod:'7d'};
const escapeHTML=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function readURL(){
  const p=new URLSearchParams(location.search);
  state.view=['customer','staff','merchant'].includes(p.get('preview'))?p.get('preview'):'customer';
  state.scenario=Object.hasOwn(scenarios,p.get('demo'))?p.get('demo'):'retail';
}
function writeURL(){
  const u=new URL(location.href);
  if(state.view==='customer')u.searchParams.delete('preview');else u.searchParams.set('preview',state.view);
  if(state.scenario==='retail')u.searchParams.delete('demo');else u.searchParams.set('demo',state.scenario);
  history.replaceState(null,'',u);
}
function propsFor(lang){
  const scenario=scenarios[state.scenario];
  const plans=[[0,1],[0,1,1],[0],[0,1],[1,1],[0,0,1],[1],[0]];
  const orders=state.orders.map((o,index)=>{const selected=plans[index];const items=[0,1].map(i=>({...scenario.items[i],qty:selected.filter(j=>j===i).length})).filter(i=>i.qty>0);return {...o,branch,paid:true,items};});
  const counts=state.merchantPeriod==='7d'?[42,58,47,66,54,72,61]:[320,355,375,400];
  const labels=state.merchantPeriod==='7d'?
    [['Thu','الخميس'],['Fri','الجمعة'],['Sat','السبت'],['Sun','الأحد'],['Mon','الاثنين'],['Tue','الثلاثاء'],['Wed','الأربعاء']]:
    [['Week 1','الأسبوع ١'],['Week 2','الأسبوع ٢'],['Week 3','الأسبوع ٣'],['Week 4','الأسبوع ٤']];
  const history=counts.map((n,i)=>({label:{en:labels[i][0],ar:labels[i][1]},orders:n,salesAED:n*scenario.ticket}));
  const finished=orders.filter(o=>['ready','collected'].includes(o.status)&&Number.isFinite(o.prepMinutes));
  const ordersTotal=counts.reduce((a,n)=>a+n,0);
  const metrics={ordersTotal,salesAED:ordersTotal*scenario.ticket,repeatShare:30,avgPrepMinutes:finished.length?finished.reduce((a,o)=>a+o.prepMinutes,0)/finished.length:0,finishedCount:finished.length,activeOrders:orders.filter(o=>o.status!=='collected').length,delayedOrders:orders.filter(o=>o.status==='preparing'&&o.minutes>12).length,readyOrders:orders.filter(o=>o.status==='ready').length,loyaltyMembers:128,rewardsAvailable:12+(state.rewardReady?1:0),redemptions:18};
  return {...state,lang,scenario,orders,order:orders.find(o=>o.id===state.customerOrderId)||orders.find(o=>o.id==='1042'),history,metrics};
}

export function mountMockups({lang='en'}={}){
  const main=document.querySelector('#main');if(!main)return ()=>{};
  readURL();
  const l=(en,ar)=>lang==='ar'?ar:en;
  const section=document.createElement('section');section.id='app-preview';section.className='section wrap app-preview';
  section.innerHTML=`<div class="section-head"><h2>${l('Explore the app concept.','استكشف تصوّر التطبيق.')}</h2><p>${l('One shared order, three perspectives. Try the handoff from staff to customer, then inspect the merchant view.','طلب واحد وثلاث زوايا. جرّب التسليم بين الموظف والعميل، ثم افحص لوحة التاجر.')}</p></div>
    <div class="pm-disclosure"><strong>${l('Interactive mockups · fictional data','نماذج تفاعلية · بيانات خيالية')}</strong><span>${l('Design preview only. Fictional orders and analytics; no live messages, transactions or Wallet passes.','معاينة تصميم فقط. طلبات وتحليلات خيالية؛ لا رسائل أو معاملات أو بطاقات محفظة حقيقية.')}</span></div>
    <div class="pm-toolbar"><div class="pm-role-tabs" role="tablist" aria-label="${l('App perspective','واجهة التطبيق')}">${[['customer','Customer','العميل'],['staff','Staff','الموظف'],['merchant','Merchant','التاجر']].map(([id,en,ar])=>`<button type="button" role="tab" id="pm-tab-${id}" data-preview-view="${id}" aria-controls="pm-panel" aria-selected="false">${l(en,ar)}</button>`).join('')}</div><div class="pm-scenario-field"><label for="pm-scenario">${l('Sample business','النشاط التوضيحي')}</label><select id="pm-scenario">${Object.values(scenarios).map(s=>`<option value="${s.id}">${escapeHTML(s.name[lang])}</option>`).join('')}</select></div><button id="pm-reset" type="button" class="button secondary compact">${l('Reset demo','إعادة المعاينة')}</button></div>
    <p class="pm-handoff-tip">${l('Try this: open Staff, mark #1042 ready, then switch to Customer. Every change stays inside this preview.','جرّب: افتح الموظف، واجعل الطلب #1042 جاهزًا، ثم انتقل إلى العميل. كل تغيير يبقى داخل المعاينة.')}</p>
    <div id="pm-panel" class="pm-panel" role="tabpanel" aria-labelledby="pm-tab-customer" tabindex="0"></div>
    <div id="pm-feedback" class="pm-feedback" role="status" aria-live="polite"></div>
    <p class="pm-preview-footnote">${l('All names, orders and dashboard figures are fictional examples. Historical charts are a sample snapshot; the live queue reflects your demo actions. Changes reset when the page is reloaded.','كل الأسماء والطلبات والأرقام أمثلة خيالية. الرسوم التاريخية لقطة توضيحية؛ والطابور المباشر يعكس إجراءات المعاينة. تعود البيانات الأصلية عند إعادة تحميل الصفحة.')}</p>`;
  document.querySelector('#markets')?.before(section);if(!section.isConnected)main.append(section);
  const panel=section.querySelector('#pm-panel'), feedback=section.querySelector('#pm-feedback');
  const tabs=[...section.querySelectorAll('[data-preview-view]')];
  function draw(focusId,selection,{resetScroll=false}={}){
    const oldScroll=[...panel.querySelectorAll('.pm-customer-content,.pm-staff-board-wrap')].map(e=>({cls:e.className,top:e.scrollTop,left:e.scrollLeft}));
    const props=propsFor(lang);
    panel.innerHTML=state.view==='customer'?renderCustomer(props):state.view==='staff'?renderStaff(props):renderMerchant(props);
    for(const b of panel.querySelectorAll('button[data-pm-action]'))if(!b.id)b.id=['mark-ready','mark-collected'].includes(b.dataset.pmAction)?'pm-staff-order-action':`pm-action-${b.dataset.pmAction}-${b.dataset.pmValue??b.value??''}`.replace(/[^a-z0-9_-]/gi,'-');
    for(const t of panel.querySelectorAll('[role="tab"]'))t.tabIndex=t.getAttribute('aria-selected')==='true'?0:-1;
    if(state.view==='merchant'){
      const content=panel.querySelector('.pm-merchant-overview,.pm-merchant-loyalty');
      if(content){content.id='pm-merchant-view';content.setAttribute('role','tabpanel');content.setAttribute('aria-labelledby',panel.querySelector('[role="tab"][aria-selected="true"]').id);for(const t of panel.querySelectorAll('[role="tab"]'))t.setAttribute('aria-controls','pm-merchant-view');}
    }
    if(!resetScroll)for(const old of oldScroll){const el=panel.getElementsByClassName(old.cls)[0];if(el){el.scrollTop=old.top;el.scrollLeft=old.left;}}
    panel.setAttribute('aria-labelledby',`pm-tab-${state.view}`);
    section.querySelector('#pm-scenario').value=state.scenario;
    tabs.forEach(t=>{const active=t.dataset.previewView===state.view;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;});
    writeURL();
    if(focusId){let el=section.querySelector(`#${CSS.escape(focusId)}`);if(!el&&focusId==='pm-staff-order-action'){el=panel.querySelector('.pm-staff-drawer h3');if(el)el.tabIndex=-1;}if(el){el.focus({preventScroll:true});if(selection&&el.setSelectionRange)el.setSelectionRange(...selection);}}
  }
  function message(text){feedback.textContent=text;}
  function chooseView(view,{focus=true}={}){
    if(!['customer','staff','merchant'].includes(view))return;
    state.view=view;feedback.textContent='';draw();if(focus)section.querySelector(`#pm-tab-${view}`).focus({preventScroll:true});
  }
  function onClick(e){
    const view=e.target.closest('[data-preview-view]');if(view){chooseView(view.dataset.previewView);return;}
    if(e.target.closest('#pm-reset')){
      const keepView=state.view,keepScenario=state.scenario;
      state={view:keepView,scenario:keepScenario,orders:cloneOrders(),selectedOrderId:'1042',customerOrderId:'1042',staffFilter:'active',staffQuery:'',customerTab:'order',channel:'onscreen',rewardReady:false,walletExpanded:false,merchantTab:'overview',merchantPeriod:'7d'};
      draw('pm-reset');message(l('Demo reset. Order #1042 is being prepared.','أُعيدت المعاينة. الطلب #1042 قيد التجهيز.'));return;
    }
    const control=e.target.closest('[data-pm-action]');if(!control)return;
    const action=control.dataset.pmAction,value=control.dataset.pmValue??control.value,focusId=control.id;
    if(action==='go-customer'){const id=value||state.selectedOrderId;if(state.orders.some(o=>o.id===id))state.customerOrderId=id;state.customerTab='order';chooseView('customer');panel.scrollIntoView({block:'start',behavior:'instant'});return;}
    if(action==='go-staff'){if(state.view==='customer'){state.selectedOrderId=state.customerOrderId;state.staffFilter=state.orders.find(o=>o.id===state.customerOrderId)?.status==='collected'?'collected':'active';state.staffQuery='';}chooseView('staff');panel.scrollIntoView({block:'start',behavior:'instant'});return;}
    if(action==='customer-tab'&&['order','rewards'].includes(value))state.customerTab=value;
    else if(action==='channel'&&['onscreen','whatsapp','sms'].includes(value)){state.channel=value;message(l('Demo preference selected. No message will be sent.','اختير تفضيل توضيحي. لن تُرسل أي رسالة.'));}
    else if(action==='wallet-preview'){state.walletExpanded=!state.walletExpanded;state.customerTab='rewards';message(l('Wallet concept only. No signed pass is issued.','تصوّر للمحفظة فقط. لا تُصدر بطاقة موقعة.'));}
    else if(action==='reward-scenario'){state.rewardReady=!state.rewardReady;message(l('Reward eligibility preview changed. No purchase or stamp was recorded.','تغيرت معاينة أهلية المكافأة. لم يُسجل شراء أو ختم.'));}
    else if(action==='staff-filter'&&['active','received','preparing','ready','collected'].includes(value))state.staffFilter=value;
    else if(action==='select-order'&&state.orders.some(o=>o.id===value))state.selectedOrderId=value;
    else if(action==='merchant-tab'&&['overview','loyalty'].includes(value))state.merchantTab=value;
    else if(action==='mark-ready'||action==='mark-collected'){
      const order=state.orders.find(o=>o.id===value);if(!order)return;
      if(action==='mark-ready'&&['received','preparing'].includes(order.status)){order.status='ready';order.prepMinutes=order.minutes;message(l(`Demo order #${value} is ready. Customer tracking and live queue updated.`,`الطلب التوضيحي #${value} جاهز. حُدّث تتبع العميل والطابور.`));}
      else if(action==='mark-collected'&&order.status==='ready'){order.status='collected';message(l(`Demo order #${value} collected. No loyalty was awarded by collection.`,`سُلّم الطلب التوضيحي #${value}. التسليم لا يمنح ولاءً تلقائيًا.`));}
      else return;
    }else return;
    draw(focusId,undefined,{resetScroll:action==='customer-tab'});
  }
  function onChange(e){
    if(e.target.id==='pm-scenario'){
      if(!Object.hasOwn(scenarios,e.target.value))return;
      state.scenario=e.target.value;draw('pm-scenario');message(l('Sample business changed. All prices and examples remain fictional.','تغير النشاط التوضيحي. الأسعار والأمثلة كلها خيالية.'));return;
    }
    if(e.target.dataset.pmControl==='merchant-period'&&['7d','4w'].includes(e.target.value)){state.merchantPeriod=e.target.value;draw(e.target.id);}
  }
  function onInput(e){if(e.target.dataset.pmControl==='staff-query'){state.staffQuery=e.target.value;const id=e.target.id,selection=[e.target.selectionStart,e.target.selectionEnd];draw(id,selection);}}
  function onKeys(e){
    const tab=e.target.closest('[role="tab"]');if(!tab)return;
    const keys=['ArrowLeft','ArrowRight','Home','End'];if(!keys.includes(e.key))return;
    e.preventDefault();const group=tab.closest('[role="tablist"]'),siblings=[...group.querySelectorAll('[role="tab"]')],index=siblings.indexOf(tab);let next;
    if(e.key==='Home')next=0;else if(e.key==='End')next=siblings.length-1;else{const forward=e.key===(lang==='ar'?'ArrowLeft':'ArrowRight');next=(index+(forward?1:-1)+siblings.length)%siblings.length;}
    const target=siblings[next];
    if(target.dataset.previewView)chooseView(target.dataset.previewView);
    else{if(target.dataset.pmAction==='customer-tab')state.customerTab=target.dataset.pmValue;else if(target.dataset.pmAction==='merchant-tab')state.merchantTab=target.dataset.pmValue??target.value;draw(target.id,undefined,{resetScroll:true});}
  }
  const onHistory=()=>{readURL();draw();};
  section.addEventListener('click',onClick);section.addEventListener('change',onChange);section.addEventListener('input',onInput);section.addEventListener('keydown',onKeys);window.addEventListener('popstate',onHistory);
  draw();
  return ()=>{window.removeEventListener('popstate',onHistory);section.remove();};
}
