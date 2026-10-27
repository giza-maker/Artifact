import test from 'node:test';
import assert from 'node:assert/strict';
import { createStateStore, validateState } from '../web/state-store.js';
const data = { recipes: [{id:'salad', steps:['mix']}], tools: [] };
const allocation = () => ({id:'stock-1',ingredientId:'tomato',name:'Tomato',qty:2,unit:'pieces',gramsPerUnit:100});
const session = () => ({id:'cook-1',rid:'salad',recipeName:'Salad',servings:2,phase:'prep',prepared:['tomato'],toolsConfirmed:false,step:0,seconds:0,running:false,deadline:null,startedAt:'2026-10-27T12:00:00.000Z',requirements:[{ingredientId:'tomato',qty:200,unit:'g'}],allocations:[allocation()]});
const fixture = async () => {
  const state = (await createStateStore({data}).load()).state;
  state.items['stock-1'] = {name:'Tomato',qty:3,unit:'pieces',storage:'Fridge',ingredientId:'tomato',gramsPerUnit:100};
  state.cooking=session();
  state.meals=[{id:'earlier-cook',rid:'salad',date:'2026-10-27',cookingSessionId:'earlier-cook',status:'completed',used:[allocation()]}];
  state.scanImports=[{fingerprint:'a'.repeat(64),signature:'b'.repeat(64),financeExcluded:true}];
  return state;
};
test('M3 sessions, links, conversions, meals and scan history survive save/load/backup', async()=>{
  let raw;
  const store=createStateStore({data,storage:{getItem:()=>raw,setItem:(_,v)=>{raw=v;}}});
  const state=await fixture();
  for(const status of ['completed','undone']) {
    state.meals[0].status=status;
    await store.save(state);
    assert.deepEqual((await store.load()).state,state);
    assert.deepEqual(store.parseBackup(store.exportBackup(state)),state);
  }
});
test('legacy M1/M2 sessions and meal usage remain valid',async()=>{
  const state=await fixture();
  state.cooking={rid:'salad',step:0,seconds:5,running:false};
  state.meals=[{id:'old',rid:'salad',date:'2026-10-27',used:[{id:'stock-1',qty:1}]}];
  delete state.items['stock-1'].ingredientId;
  delete state.items['stock-1'].gramsPerUnit;
  assert.equal(validateState(state),state);
});
test('malformed M3 nested contracts reject',async()=>{
  const edits=[
    s=>{s.items['stock-1'].ingredientId={};},
    s=>{s.items['stock-1'].gramsPerUnit='100';},
    s=>{s.items['stock-1'].unit='g';},
    s=>{s.cooking.phase='other';},
    s=>{delete s.cooking.id;},
    s=>{s.cooking.prepared=[{}];},
    s=>{s.cooking.toolsConfirmed=1;},
    s=>{s.cooking.servings=1.5;},
    s=>{s.cooking.startedAt='2026-02-30T00:00:00Z';},
    s=>{s.cooking.running=true;},
    s=>{s.cooking.requirements[0].qty=0;},
    s=>{s.cooking.allocations[0].qty=Infinity;},
    s=>{s.cooking.allocations.push(allocation());},
    s=>{s.meals[0].used.push(allocation());},
    s=>{s.meals[0].status='lost';},
    s=>{s.meals[0].cookingSessionId='wrong';},
    s=>{s.meals[0].used[0].gramsPerUnit={};},
    s=>{s.meals[0].used[0].unit='kg';},
    s=>{delete s.meals[0].used[0].name;},
    s=>{s.scanConfig={apiKey:'secret'};},
  ];
  for(const edit of edits) {const state=await fixture();edit(state);assert.throws(()=>validateState(state));}
});
test('unknown recipes discard active session while preserving history and links',async()=>{
  const state=await fixture();state.cooking.rid='removed';
  const store=createStateStore({data});
  const loaded=store.parseBackup(store.exportBackup(state));
  assert.equal(loaded.cooking,null);
  assert.deepEqual(loaded.meals,state.meals);
  assert.deepEqual(loaded.items,state.items);
});
test('corrupt nested saved data stays unchanged and blocks writes',async()=>{
  const state=await fixture();state.cooking.allocations[0].gramsPerUnit=-1;
  let raw=JSON.stringify(state);const original=raw;
  const store=createStateStore({data,storage:{getItem:()=>raw,setItem:(_,v)=>{raw=v;}}});
  const loaded=await store.load();assert.equal(loaded.recoveryRequired,true);
  await assert.rejects(store.save(loaded.state),/Confirm reset/);
  assert.equal(raw,original);
});
test('meal history retains 2000 entries, rejects excess',async()=>{
  const state=await fixture();const meal=state.meals[0];
  state.meals=Array.from({length:2000},(_,index)=>({...structuredClone(meal),id:'meal-'+index,cookingSessionId:'meal-'+index}));
  validateState(state);state.meals.push(meal);assert.throws(()=>validateState(state));
});


test('inconsistent M3 history and preparation reject on save and backup import', async()=>{
  const edits=[
    s=>s.meals.push(structuredClone(s.meals[0])),
    s=>{s.cooking.id=s.meals[0].cookingSessionId;},
    s=>{s.meals.push({id:s.cooking.id,rid:'salad',date:'2026-10-27',used:[]});},
    s=>{s.cooking.prepared.push('not-required');},
    s=>{s.cooking.phase='cooking';s.cooking.toolsConfirmed=false;},
    s=>{s.cooking.phase='review';s.cooking.toolsConfirmed=true;s.cooking.prepared=[];},
    s=>{s.meals=[{id:'legacy',rid:'salad',date:'2026-10-27',used:[]},{id:'legacy',rid:'salad',date:'2026-10-27',used:[]}];},
  ];
  const store=createStateStore({data,storage:{setItem:()=>assert.fail('Invalid state must not write')}});
  for(const edit of edits){
    const state=await fixture();edit(state);
    await assert.rejects(store.save(state));
    assert.throws(()=>store.parseBackup(JSON.stringify({format:'nomli-backup',version:1,state})));
  }
});
test('prepared cooking/review sessions roundtrip without requiring current inventory',async()=>{
  const store=createStateStore({data});
  for(const phase of ['cooking','review']){
    const state=await fixture();state.cooking.phase=phase;state.cooking.toolsConfirmed=true;
    delete state.items['stock-1'];
    assert.deepEqual(store.parseBackup(store.exportBackup(state)),state);
  }
});
