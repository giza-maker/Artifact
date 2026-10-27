#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const BASE_URL=process.env.MARRAH_URL||'http://127.0.0.1:5180/marrah-roadmap/';
const CHROME=process.env.CHROME_PATH||undefined;
const checks=[];
async function check(name,fn){const t=Date.now();await fn();checks.push({name,ms:Date.now()-t});process.stdout.write(`PASS ${name}\n`);}
async function loaded(page,url=`${BASE_URL}#app-preview`){await page.goto(url,{waitUntil:'domcontentloaded'});await page.locator('#app-preview #pm-panel').waitFor();}
const role=(page,name)=>page.locator(`[data-preview-view="${name}"]`);
const action=(page,name,value)=>page.locator(`[data-pm-action="${name}"]${value===undefined?'':`[value="${value}"], [data-pm-action="${name}"][data-pm-value="${value}"]`}`).first();
async function choose(page,name){await role(page,name).click();await page.locator(`#pm-tab-${name}[aria-selected="true"]`).waitFor();}
async function text(locator,needle){assert.ok((await locator.innerText()).includes(needle),`missing ${needle}`);}
async function metric(page,label){const card=page.locator('.pm-merchant-metric').filter({hasText:label}).first();await card.waitFor();return (await card.locator('strong').innerText()).trim();}
async function assertHorizontalFit(page,selector='body *'){
 const bad=await page.locator(selector).evaluateAll(nodes=>nodes.filter(n=>{const s=getComputedStyle(n),r=n.getBoundingClientRect();if(s.display==='none'||s.visibility==='hidden'||r.width===0||r.height===0||n.matches('.sr-only,.pm-customer-sr'))return false;for(let p=n.parentElement;p&&p!==document.body;p=p.parentElement){if(p.matches('.pm-staff-board-wrap,.pm-merchant-table-scroll')&&['auto','scroll'].includes(getComputedStyle(p).overflowX)&&p.scrollWidth>p.clientWidth+1)return false;}return r.left<-.6||r.right>document.documentElement.clientWidth+.6;}).slice(0,8).map(n=>({tag:n.tagName,id:n.id,cls:n.className,left:n.getBoundingClientRect().left,right:n.getBoundingClientRect().right,cw:document.documentElement.clientWidth})));
 assert.deepEqual(bad,[]);
}

(async()=>{
 const browser=await chromium.launch({executablePath:CHROME,headless:true});
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 await context.grantPermissions(['clipboard-read','clipboard-write'],{origin:new URL(BASE_URL).origin});
 const page=await context.newPage(),consoleErrors=[],pageErrors=[],requests=[];
 page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text());});
 page.on('pageerror',e=>pageErrors.push(e.message));
 page.on('request',r=>requests.push({method:r.method(),url:r.url()}));
 try{
  await loaded(page);
  await check('chapter route, disclosure, roles, and scenarios',async()=>{
   assert.equal(await page.locator('#app-preview.chapter-view.is-active').count(),1);
   assert.equal(await page.locator('.chapter-rail [data-chapter="app-preview"]').getAttribute('aria-current'),'page');
   assert.deepEqual(await page.locator('.pm-role-tabs [role="tab"]').evaluateAll(ns=>ns.map(n=>n.dataset.previewView)),['customer','staff','merchant']);
   assert.deepEqual(await page.locator('#pm-scenario option').evaluateAll(ns=>ns.map(n=>n.value)),['retail','cafe','service']);
   await text(page.locator('.pm-disclosure'),'fictional data');await text(page.locator('.pm-disclosure'),'no live messages, transactions or Wallet passes');
  });
  await check('static mockup module graph uses GET only',async()=>{
   for(const file of ['mockups.js','mockups-customer.js','mockups-operations.js']){const res=await context.request.get(new URL(file,BASE_URL).href);assert.equal(res.status(),200,file);assert.match(await res.text(),file==='mockups.js'?/from ['"]\.\/mockups-(customer|operations)\.js/:/export function render/);}
   assert.equal(requests.some(r=>r.method!=='GET'),false,JSON.stringify(requests.filter(r=>r.method!=='GET')));
  });
  await check('customer order, channel previews, and no messaging',async()=>{
   assert.equal(await action(page,'customer-tab','order').getAttribute('aria-selected'),'true');await text(page.locator('#pm-customer-order-panel'),'#1042');assert.equal((await page.locator('.pm-customer-current strong').innerText()).trim(),'Packing');
   for(const channel of ['onscreen','whatsapp','sms']){await action(page,'channel',channel).click();assert.equal(await action(page,'channel',channel).getAttribute('aria-pressed'),'true');await text(page.locator('#pm-feedback'),'No message will be sent');}
   assert.equal(requests.some(r=>r.method!=='GET'),false);
  });
  await check('reward and Wallet remain reversible previews',async()=>{
   await action(page,'customer-tab','rewards').click();await text(page.locator('.pm-customer-stamp-top'),'7/8');
   await action(page,'wallet-preview').click();assert.equal(await page.locator('#pm-customer-wallet-card').isVisible(),true);await text(page.locator('#pm-customer-wallet-card'),'Demo pass, not issued');
   await action(page,'reward-scenario').click();await text(page.locator('.pm-customer-stamp-top'),'8/8');await text(page.locator('.pm-customer-reward-ready'),'Concept preview');
   await action(page,'reward-scenario').click();await text(page.locator('.pm-customer-stamp-top'),'7/8');
  });
  await check('staff filters, query empty state, and detail selection',async()=>{
   await choose(page,'staff');assert.equal(await page.locator('[data-pm-action="select-order"]').count(),7);await text(page.locator('.pm-staff-drawer'),'#1042');
   await page.locator('[data-pm-control="staff-query"]').fill('no-order-can-match');assert.equal(await page.locator('.pm-staff-empty').count(),3);
   await page.locator('[data-pm-control="staff-query"]').fill('1042');assert.equal(await page.locator('[data-pm-action="select-order"]').count(),1);
   await page.locator('[data-pm-control="staff-query"]').fill('');await action(page,'staff-filter','ready').click();assert.equal(await page.locator('[data-pm-action="select-order"]').count(),2);
   await action(page,'staff-filter','active').click();await action(page,'select-order','1044').click();await text(page.locator('.pm-staff-drawer'),'#1044');
   await action(page,'go-customer').click();await text(page.locator('#pm-customer-order-panel'),'#1044');await choose(page,'staff');await action(page,'select-order','1042').click();await action(page,'go-customer').click();await text(page.locator('#pm-customer-order-panel'),'#1042');await choose(page,'staff');
  });
  await check('ready and collected propagation is guarded and idempotent',async()=>{
   await action(page,'select-order','1042').click();assert.equal(await action(page,'mark-collected','1042').count(),0);await action(page,'mark-ready','1042').click();assert.equal(await action(page,'mark-ready','1042').count(),0);assert.equal(await action(page,'mark-collected','1042').count(),1);
   await choose(page,'customer');await action(page,'customer-tab','order').click();await text(page.locator('.pm-customer-current'),'Ready');await text(page.locator('.pm-customer-code'),'042');
   await choose(page,'merchant');assert.equal(await metric(page,'Ready'),'3');assert.equal(await metric(page,'Active orders'),'7');
   await choose(page,'staff');await action(page,'select-order','1042').click();await action(page,'mark-collected','1042').click();assert.equal(await action(page,'mark-collected','1042').count(),0);
   await choose(page,'merchant');assert.equal(await metric(page,'Ready'),'2');assert.equal(await metric(page,'Active orders'),'6');
  });
  await check('reset restores shared queue without changing chosen context',async()=>{
   await page.locator('#pm-scenario').selectOption('cafe');await page.locator('#pm-reset').click();assert.equal(await role(page,'merchant').getAttribute('aria-selected'),'true');assert.equal(await page.locator('#pm-scenario').inputValue(),'cafe');assert.equal(await metric(page,'Ready'),'2');assert.equal(await metric(page,'Active orders'),'7');
   await choose(page,'customer');await text(page.locator('.pm-customer-current'),'Preparing');assert.equal(await page.locator('.pm-customer-code').count(),0);
  });
  await check('three scenarios and both periods show exact fictional totals',async()=>{
   await choose(page,'merchant');const expected={retail:['28,000','101,500'],cafe:['15,200','55,100'],service:['24,000','87,000']};
   for(const [scenario,[seven,four]] of Object.entries(expected)){await page.locator('#pm-scenario').selectOption(scenario);assert.equal(await metric(page,'Orders'),'400');assert.ok((await metric(page,'Sales')).includes(seven));await page.locator('[data-pm-control="merchant-period"]').selectOption('4w');assert.equal(await metric(page,'Orders'),'1,450');assert.ok((await metric(page,'Sales')).includes(four));await page.locator('[data-pm-control="merchant-period"]').selectOption('7d');}
   await action(page,'merchant-tab','loyalty').click();await text(page.locator('.pm-merchant-loyalty'),'Programme preview only');await action(page,'merchant-tab','overview').click();
  });
  await check('role and scenario query state share round trip with locale',async()=>{
   await page.locator('#pm-scenario').selectOption('service');await choose(page,'staff');await page.locator('#language').click();const u=new URL(page.url());assert.equal(u.searchParams.get('preview'),'staff');assert.equal(u.searchParams.get('demo'),'service');assert.equal(u.searchParams.get('lang'),'ar');assert.equal(u.hash,'#app-preview');
   await page.locator('#share').click();const fallback=await page.locator('#share-link').isVisible().catch(()=>false);const shared=fallback?await page.locator('#share-link').inputValue():await page.evaluate(()=>navigator.clipboard.readText());const p=await context.newPage();await loaded(p,shared);assert.equal(await p.locator('html').getAttribute('dir'),'rtl');assert.equal(await p.locator('#pm-scenario').inputValue(),'service');assert.equal(await role(p,'staff').getAttribute('aria-selected'),'true');await p.close();if(fallback)await page.keyboard.press('Escape');
   await page.locator('#language').click();
  });
  await check('role tablist keyboard supports arrows, Home, End',async()=>{
   await role(page,'staff').focus();await page.keyboard.press('Home');assert.equal(await role(page,'customer').getAttribute('aria-selected'),'true');await page.keyboard.press('End');assert.equal(await role(page,'merchant').getAttribute('aria-selected'),'true');await page.keyboard.press('ArrowLeft');assert.equal(await role(page,'staff').getAttribute('aria-selected'),'true');await page.keyboard.press('ArrowRight');assert.equal(await role(page,'merchant').getAttribute('aria-selected'),'true');
   await choose(page,'customer');await page.locator('#pm-customer-order-tab').focus();await page.keyboard.press('End');assert.equal(await page.locator('#pm-customer-rewards-tab').getAttribute('aria-selected'),'true');await page.keyboard.press('Home');assert.equal(await page.locator('#pm-customer-order-tab').getAttribute('aria-selected'),'true');
  });
  await check('English desktop has no hidden horizontal clipping',async()=>{await loaded(page);for(const v of ['customer','staff','merchant']){await choose(page,v);await assertHorizontalFit(page,'#app-preview *');}});
  await check('Arabic mobile 375 and 320 fit key controls and content',async()=>{
   for(const width of [375,320]){const c=await browser.newContext({viewport:{width,height:812},isMobile:true,hasTouch:true}),p=await c.newPage();await loaded(p,`${BASE_URL}?lang=ar&preview=merchant&demo=service#app-preview`);assert.equal(await p.locator('html').getAttribute('dir'),'rtl');assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth),width);for(const v of ['customer','staff','merchant']){await role(p,v).click();assert.equal(await role(p,v).getAttribute('aria-selected'),'true');await assertHorizontalFit(p,'#app-preview *');}await c.close();}
  });
  await check('all enabled buttons expose a real interaction contract',async()=>{
   const dead=await page.locator('#app-preview button:enabled').evaluateAll(bs=>bs.filter(b=>!b.matches('[data-preview-view],[data-pm-action],#pm-reset')).map(b=>b.outerHTML));assert.deepEqual(dead,[]);
  });
  await check('no console, page, or write-request errors',async()=>{assert.deepEqual(pageErrors,[]);assert.deepEqual(consoleErrors,[]);assert.deepEqual(requests.filter(r=>r.method!=='GET'),[]);});
 }finally{await context.close();await browser.close();}
 process.stdout.write(`\n${checks.length} checks passed in ${checks.reduce((s,x)=>s+x.ms,0)}ms\n`);
})().catch(e=>{console.error(`FAIL ${e.stack||e}`);process.exitCode=1;});
