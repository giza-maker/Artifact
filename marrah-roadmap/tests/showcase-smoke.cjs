#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const BASE_URL=process.env.MARRAH_URL||'http://127.0.0.1:5180/marrah-roadmap/';
const CHROME=process.env.CHROME_PATH||undefined;
const CHAPTERS=['overview','opportunity','experience','markets','economics','blueprint','roadmap','innovation','collaborate','evidence'];
const checks=[];
async function check(name,fn){const t=Date.now();await fn();checks.push({name,ms:Date.now()-t});process.stdout.write(`PASS ${name}\n`);}
async function loaded(page,url=BASE_URL){await page.goto(url,{waitUntil:'domcontentloaded'});await page.locator('#audience').waitFor({state:'attached'});await page.locator('.chapter-view.is-active').waitFor();}
async function chapter(page,id){const a=page.locator(`a[data-chapter="${id}"]:visible`).first();if(await a.count())await a.click();else await loaded(page,`${BASE_URL}#${id}`);await page.locator(`#${id}.chapter-view.is-active`).waitFor();}
async function open(page,id){const d=page.locator(id);if(!await d.evaluate(n=>n.open))await d.locator(':scope > summary').click();}
const options=l=>l.locator('option').evaluateAll(ns=>ns.map(n=>n.value));
const metrics=async p=>[...(await p.locator('#model-results .metric-pair strong').allTextContents()),...(await p.locator('#model-thresholds .model-breakdown strong').allTextContents()),...(await p.locator('#model-results > .notice strong').allTextContents())].map(x=>x.trim());
async function hasText(l,s){assert.ok((await l.innerText()).includes(s));}

(async()=>{
 const browser=await chromium.launch({executablePath:CHROME,headless:true});
 const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true});
 await context.grantPermissions(['clipboard-read','clipboard-write'],{origin:new URL(BASE_URL).origin});
 const page=await context.newPage(),consoleErrors=[],pageErrors=[];
 page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text());});
 page.on('pageerror',e=>pageErrors.push(e.message));
 try{
  await loaded(page);
  await check('default one-chapter view and desktop rail',async()=>{
   assert.equal(await page.locator('.chapter-view:not([hidden])').count(),1);
   assert.equal(await page.locator('.chapter-view.is-active').getAttribute('id'),'overview');
   assert.equal(await page.locator('.chapter-rail a[data-chapter]').count(),10);
   assert.equal(await page.locator('.chapter-rail').isVisible(),true);
   assert.equal(await page.locator('#chapter-select').isVisible(),false);
  });
  await check('all ten chapter routes',async()=>{
   for(const id of CHAPTERS){await chapter(page,id);assert.equal(new URL(page.url()).hash,`#${id}`);assert.equal(await page.locator('.chapter-view:not([hidden])').count(),1);assert.equal(await page.locator(`.chapter-rail [data-chapter="${id}"]`).getAttribute('aria-current'),'page');}
  });
  await check('previous and next boundaries',async()=>{
   await chapter(page,'overview');assert.equal(await page.locator('.chapter-prev').isHidden(),true);
   await page.locator('.chapter-next').click();assert.equal(new URL(page.url()).hash,'#opportunity');
   await page.locator('.chapter-prev').click();assert.equal(new URL(page.url()).hash,'#overview');
   await chapter(page,'evidence');assert.equal(await page.locator('.chapter-next').isHidden(),true);
  });
  await check('full document query and chapter restore',async()=>{
   await page.locator('.document-toggle').click();assert.equal(new URL(page.url()).searchParams.get('layout'),'document');assert.equal(await page.locator('.chapter-view:not([hidden])').count(),10);
   await page.reload({waitUntil:'domcontentloaded'});await page.locator('#audience').waitFor();assert.equal(await page.locator('.chapter-view:not([hidden])').count(),10);
   await page.locator('.document-toggle').click();assert.equal(new URL(page.url()).searchParams.get('layout'),null);assert.equal(await page.locator('.chapter-view:not([hidden])').count(),1);
  });
  await check('command menu filter, arrows, Escape, focus',async()=>{
   const trigger=page.locator('.chapter-search');await trigger.focus();await page.keyboard.press('Control+K');
   assert.equal(await page.locator('#chapter-dialog').evaluate(n=>n.open),true);assert.equal(await page.evaluate(()=>document.activeElement.id),'chapter-search-input');assert.equal(await page.locator('.chapter-result').count(),10);
   await page.locator('#chapter-search-input').fill('technology');assert.equal(await page.locator('.chapter-result').getAttribute('data-chapter'),'blueprint');
   await page.locator('#chapter-search-input').fill('no-chapter-can-match');assert.equal(await page.locator('.chapter-empty').isVisible(),true);
   await page.locator('#chapter-search-input').fill('');await page.keyboard.press('ArrowDown');assert.equal(await page.locator('.chapter-result').first().evaluate(n=>n===document.activeElement),true);
   await page.keyboard.press('Escape');assert.equal(await page.locator('#chapter-dialog').evaluate(n=>n.open),false);assert.equal(await trigger.evaluate(n=>n===document.activeElement),true);
  });
  await check('legacy roadmap hash and browser history',async()=>{
   await loaded(page,`${BASE_URL}#roadmap`);await chapter(page,'innovation');await page.goBack();await page.locator('#roadmap.chapter-view.is-active').waitFor();assert.equal(new URL(page.url()).hash,'#roadmap');
   await page.goForward();await page.locator('#innovation.chapter-view.is-active').waitFor();assert.equal(new URL(page.url()).hash,'#innovation');
  });
  await check('query/hash rerenders and share round trip',async()=>{
   await chapter(page,'economics');await page.locator('#audience').selectOption('partner');await page.locator('[data-case="downside"]').click();await page.locator('#language').click();
   const u=new URL(page.url());assert.equal(u.hash,'#economics');assert.equal(u.searchParams.get('view'),'partner');assert.equal(u.searchParams.get('case'),'downside');assert.equal(u.searchParams.get('lang'),'ar');
   await page.locator('#share').click();const fallback=await page.locator('#share-link').isVisible().catch(()=>false);const shared=fallback?await page.locator('#share-link').inputValue():await page.evaluate(()=>navigator.clipboard.readText());assert.equal(shared,page.url());if(fallback)await page.keyboard.press('Escape');
   const p=await context.newPage();await loaded(p,shared);assert.equal(new URL(p.url()).hash,'#economics');assert.equal(await p.locator('html').getAttribute('dir'),'rtl');assert.equal(await p.locator('#audience').inputValue(),'partner');await p.close();await page.locator('#language').click();
  });
  await check('RTL rerender never hides focused control',async()=>{
   await chapter(page,'markets');await page.locator('#language').focus();await page.locator('#language').click();assert.equal(await page.locator('html').getAttribute('dir'),'rtl');assert.equal(await page.locator('.chapter-view.is-active').getAttribute('id'),'markets');assert.equal(await page.evaluate(()=>Boolean(document.activeElement?.closest?.('.chapter-view[hidden]'))),false);await page.locator('#language').click();
  });
  await check('audience, country, and sector selectors',async()=>{
   assert.deepEqual(await options(page.locator('#audience')),['investor','partner','builder']);for(const v of ['investor','partner','builder'])await page.locator('#audience').selectOption(v);
   await chapter(page,'markets');for(const v of ['sa','ae','qa','om','bh','kw']){await page.locator('#country').selectOption(v);assert.equal(new URL(page.url()).searchParams.get('country'),v);}
   for(const v of ['qsr','retail','carwash','beauty','fitness','clinics']){await page.locator('#sector').selectOption(v);assert.equal(new URL(page.url()).searchParams.get('sector'),v);}
  });
  await check('journey manual play and hidden stop',async()=>{
   await chapter(page,'experience');for(let i=0;i<4;i++){await page.locator(`[data-story-step="${i}"]`).click();assert.equal(await page.locator(`[data-story-step="${i}"]`).getAttribute('aria-pressed'),'true');}
   await page.locator('[data-story-step="0"]').click();await page.locator('#story-play').click();assert.equal(await page.locator('#story-play').getAttribute('aria-pressed'),'true');await page.waitForTimeout(1950);assert.equal(await page.locator('[data-story-step="1"]').getAttribute('aria-pressed'),'true');
   await chapter(page,'markets');assert.equal(await page.locator('#story-play').getAttribute('aria-pressed'),'false');await page.waitForTimeout(1950);assert.equal(await page.locator('[data-story-step="1"]').getAttribute('aria-pressed'),'true');
  });
  await check('gate explorer keeps G3/G4 parallel',async()=>{
   await chapter(page,'roadmap');assert.equal(await page.locator('[data-gate]').count(),6);assert.match(await page.locator('.gate-parallel').getAttribute('aria-label'),/parallel/i);
   await page.locator('[data-gate="G3"]').click();assert.match(await page.locator('#gate-panel h4').innerText(),/^G3/);assert.match(await page.locator('#gate-panel').innerText(),/selection does not mean completion/i);
   await page.locator('[data-gate="G4"]').click();assert.match(await page.locator('#gate-panel h4').innerText(),/^G4/);assert.equal(await page.locator('[data-gate="G4"]').getAttribute('aria-pressed'),'true');
  });
  await check('exact Base/Downside outputs and thresholds',async()=>{
   await chapter(page,'economics');await page.locator('[data-case="base"]').click();assert.deepEqual(await metrics(page),['600 AED','328 AED','79.0','40','19,839 AED','326,091 AED','Pickup-only diagnostic: -532.50 AED / month']);
   await page.locator('[data-case="downside"]').click();assert.deepEqual(await metrics(page),['-951 AED','206 AED','95.0','64','7,614 AED','589,325 AED','Pickup-only diagnostic: -747.00 AED / month']);
   await open(page,'#model-thresholds');assert.equal(await page.locator('#model-thresholds .model-breakdown > div').count(),4);await page.locator('[data-case="base"]').click();
  });
  await check('seven model inputs validate in tuning detail',async()=>{
   await open(page,'#model-tuning');const inputs=page.locator('#model-form input[type="number"]');assert.equal(await inputs.count(),7);
   for(let i=0;i<7;i++){await open(page,'#model-tuning');const input=inputs.nth(i),max=Number(await input.getAttribute('max'));await input.fill('0');assert.equal(await input.getAttribute('aria-invalid'),'false');await input.fill(String(max+1));assert.equal(await input.getAttribute('aria-invalid'),'true');assert.match(await page.locator('#model-error').innerText(),/Enter a number from/);await page.locator('#reset-model').click();}
   await open(page,'#model-tuning');await inputs.first().fill('1e309');assert.equal(await inputs.first().getAttribute('aria-invalid'),'true');assert.doesNotMatch((await page.locator('#model-results').innerText()).toLowerCase(),/infinity|nan/);await page.locator('#reset-model').click();
  });
  await check('evidence modal, catalog search, provenance',async()=>{
   await chapter(page,'opportunity');const trigger=page.locator('.citation:visible').first();await trigger.click();assert.equal(await page.locator('#source-dialog').evaluate(n=>n.open),true);await page.keyboard.press('Escape');assert.equal(await trigger.evaluate(n=>n===document.activeElement),true);
   await chapter(page,'evidence');await open(page,'#source-catalog');await page.locator('#source-search').fill('in-window utility');assert.match(await page.locator('#source-list').innerText(),/P02/);await page.locator('#source-search').fill('A04');
   const link=page.locator('#source-list a[download]');assert.equal(await link.count(),1);assert.equal((await page.request.get(new URL(await link.getAttribute('href'),BASE_URL).href)).status(),200);await page.locator('#source-search').fill('no-source-can-match');await hasText(page.locator('.source-empty'),'No matching sources.');
  });
  await check('competitor and backlog collapsed details',async()=>{
   await chapter(page,'markets');assert.equal(await page.locator('#competitor-detail').evaluate(n=>n.open),false);await open(page,'#competitor-detail');assert.equal(await page.locator('#competitor-detail table').count(),1);
   await chapter(page,'roadmap');await open(page,'#phase-detail');const backlog=page.locator('details.backlog');if(!await backlog.evaluate(n=>n.open))await backlog.locator(':scope > summary').click();assert.equal(await page.locator('#backlog-results .backlog-item').count(),8);
   await page.locator('#backlog-scope').selectOption('extension');await page.locator('#backlog-priority').selectOption('P0');assert.ok(Number((await page.locator('#backlog-count').innerText()).match(/^\d+/)[0])>0);await page.locator('#backlog-search').fill('no-backlog-can-match');await hasText(page.locator('#backlog-results'),'No matching items.');
  });
  await check('static and audience downloads',async()=>{
   for(const r of ['downloads/gulf-production-roadmap.pdf','downloads/uae-worked-example-economics.xlsx','downloads/gulf-production-backbone.zip']){const res=await context.request.get(new URL(r,BASE_URL).href);assert.equal(res.status(),200,r);assert.ok((await res.body()).length>0);}
   await chapter(page,'collaborate');for(const id of ['investor','partner','builder']){const event=page.waitForEvent('download');await page.locator(`[data-brief="${id}"]`).click();const d=await event;assert.match(d.suggestedFilename(),new RegExp(`marrah-${id}-brief-(en|ar)\\.txt`));assert.equal(await d.failure(),null);await d.delete();}
  });
  await check('print exposes ten chapters then restores',async()=>{
   await chapter(page,'roadmap');assert.equal(await page.locator('.chapter-view:not([hidden])').count(),1);await page.evaluate(()=>window.dispatchEvent(new Event('beforeprint')));assert.equal(await page.locator('.chapter-view:not([hidden])').count(),10);assert.equal(await page.locator('details:not([open])').count(),0);
   await page.evaluate(()=>window.dispatchEvent(new Event('afterprint')));assert.equal(await page.locator('.chapter-view:not([hidden])').count(),1);assert.equal(await page.locator('.chapter-view.is-active').getAttribute('id'),'roadmap');
  });
  await check('desktop 1440 has rail and no overflow',async()=>{
   const fit=await page.evaluate(()=>({clientWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth}));assert.equal(fit.clientWidth,1440);assert.ok(fit.scrollWidth<=fit.clientWidth,JSON.stringify(fit));assert.equal(await page.locator('.chapter-rail').isVisible(),true);
  });
  await check('mobile RTL reduced-motion controls and fit',async()=>{
   const c=await browser.newContext({viewport:{width:375,height:812},isMobile:true,hasTouch:true,reducedMotion:'reduce'}),p=await c.newPage();await loaded(p,`${BASE_URL}?lang=ar#experience`);
   assert.equal(await p.locator('html').getAttribute('dir'),'rtl');assert.equal(await p.locator('.chapter-rail').isVisible(),false);assert.equal(await p.locator('#chapter-select').isVisible(),true);await p.locator('#chapter-select').selectOption('markets');assert.equal(new URL(p.url()).hash,'#markets');
   await p.locator('.mobile-document-toggle').click();assert.equal(await p.locator('.chapter-view:not([hidden])').count(),10);const fit=await p.evaluate(()=>({cw:document.documentElement.clientWidth,sw:document.documentElement.scrollWidth,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches}));assert.equal(fit.cw,375);assert.ok(fit.sw<=fit.cw,JSON.stringify(fit));assert.equal(fit.reduced,true);await c.close();
  });
  await check('network fallbacks and no main-flow errors',async()=>{
   for(const failure of ['404','abort']){const c=await browser.newContext({viewport:{width:900,height:700}}),p=await c.newPage();await p.route('**/data/research.json',r=>failure==='404'?r.fulfill({status:404,contentType:'application/json',body:'{}'}):r.abort('failed'));await p.goto(BASE_URL,{waitUntil:'domcontentloaded'});await p.getByText('The interactive brief could not load.').waitFor();assert.deepEqual(await p.locator('#app a').evaluateAll(as=>as.map(a=>a.getAttribute('href'))),['downloads/gulf-production-roadmap.pdf','downloads/gulf-production-backbone.zip']);await c.close();}
   assert.deepEqual(pageErrors,[]);assert.deepEqual(consoleErrors,[]);
  });
 }finally{await context.close();await browser.close();}
 process.stdout.write(`\n${checks.length} checks passed in ${checks.reduce((s,x)=>s+x.ms,0)}ms\n`);
})().catch(e=>{console.error(`FAIL ${e.stack||e}`);process.exitCode=1;});
