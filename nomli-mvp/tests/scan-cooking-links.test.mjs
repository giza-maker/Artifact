import test from 'node:test';
import assert from 'node:assert/strict';
import { commitScanDraft, reviewScanDraft } from '../web/scan-domain.js';
import { applyScanCookingLinks } from '../web/scan-cooking-links.js';
import { COOK_INGREDIENTS } from '../web/cook-catalog.js';
const ingredientId=COOK_INGREDIENTS[0].id, otherId=COOK_INGREDIENTS[1].id;
const stock=()=>({items:{},receipts:[],meals:[],scanImports:[]});
const line=(lineId='one',unit='pieces')=>({lineId,name:'Reviewed food',ingredientId:null,quantity:2,unit,storage:'Pantry'});
const draft=(lines=[line()])=>reviewScanDraft({kind:'groceries',fingerprint:'c'.repeat(64),lines});
const link=(id=ingredientId,gramsPerUnit=80)=>({ingredientId:id,gramsPerUnit});
const commit=(state,d,opts={})=>commitScanDraft(state,d,{confirmed:true,...opts});
test('creates linked stock immutably; history and metadata preserved',()=>{
  const d=draft(), result=commit(stock(),d), before=structuredClone(result);
  const next=applyScanCookingLinks(result,{draft:d,links:{one:link()}});
  assert.deepEqual(result,before);assert.notEqual(next,result);
  assert.equal(next.state.items[next.importedItemIds[0]].ingredientId,ingredientId);
  assert.equal(next.state.items[next.importedItemIds[0]].gramsPerUnit,80);
  assert.equal(next.state.scanImports,result.state.scanImports);
  assert.equal(next.state.receipts,result.state.receipts);
});
test('null choices preserve existing merge identity, weight and metadata',()=>{
  const s=stock();s.items.lot={name:'Lot',qty:1,unit:'pieces',storage:'Pantry',ingredientId,gramsPerUnit:80,locationNote:'shelf'};
  const d=draft(), result=commit(s,d,{mergeTargets:{one:'lot'}});
  const next=applyScanCookingLinks(result,{draft:d,links:{one:link(null,null)}});
  assert.equal(next,result);assert.equal(next.state.items.lot.locationNote,'shelf');
  assert.equal(next.state.items.lot.ingredientId,ingredientId);assert.equal(next.state.items.lot.gramsPerUnit,80);
});
test('conflicting repeated merge choices fail atomically',()=>{
  const s=stock();s.items.lot={name:'Lot',qty:1,unit:'pieces',storage:'Pantry'};
  const d=draft([line('one'),line('two')]), result=commit(s,d,{mergeTargets:{one:'lot',two:'lot'}}), before=structuredClone(result);
  assert.throws(()=>applyScanCookingLinks(result,{draft:d,links:{one:link(),two:link(otherId)}}),/identity conflicts/);
  assert.throws(()=>applyScanCookingLinks(result,{draft:d,links:{one:link(),two:link(ingredientId,90)}}),/Edit inventory first/);
  assert.deepEqual(result,before);
});
test('replay and expiry never relink stock',()=>{
  const d=draft(), first=commit(stock(),d), replay=commit(first.state,d);
  assert.equal(applyScanCookingLinks(replay,{draft:d,links:{one:link()}}),replay);
  assert.equal(applyScanCookingLinks(first,{draft:{kind:'expiry'}}),first);
});
test('excluded lines map correctly; provider identity never applies implicitly',()=>{
  const d=draft([line('one'),line('two')]);d.lines[1].ingredientId=otherId;
  const result=commit(stock(),d,{excludedLineIds:['one']});
  const next=applyScanCookingLinks(result,{draft:d,excludedLineIds:['one'],links:{one:link(otherId),two:link()}});
  assert.equal(next.state.items[next.importedItemIds[0]].ingredientId,ingredientId);
  const unlinked=applyScanCookingLinks(result,{draft:d,excludedLineIds:['one']});
  assert.equal(unlinked,result);assert.equal(unlinked.state.items[result.importedItemIds[0]].ingredientId,undefined);
});
test('bad mappings, unknown identities, invalid weights and incompatible units reject',()=>{
  for(const unit of ['pieces','g']) {
    const d=draft([line('one',unit)]), result=commit(stock(),d);
    for(const selection of [link('unknown-catalog'),link(ingredientId,0),link(ingredientId,NaN),link(ingredientId,'80'),...(unit==='g'?[link()]:[])])
      assert.throws(()=>applyScanCookingLinks(result,{draft:d,links:{one:selection}}));
    assert.throws(()=>applyScanCookingLinks({...result,importedItemIds:[]},{draft:d}));
    assert.throws(()=>applyScanCookingLinks({...result,importedItemIds:['missing']},{draft:d}));
  }
});

test('provider line ids survive review, commit and cooking links with consistent normalization',()=>{
  const validIds=['constructor','toString','prototype','hasOwnProperty','0','food._:-1','a'.repeat(128)];
  const normalizedIds=['__proto__','_food','-food','a'.repeat(129)];
  for(const providerId of [...validIds,...normalizedIds]) {
    const d=draft([line(providerId)]);
    const reviewedId=validIds.includes(providerId)?providerId:'line-1';
    assert.equal(d.lines[0].lineId,reviewedId);
    const result=commit(stock(),d);
    const links=Object.create(null);
    links[reviewedId]=link();
    const next=applyScanCookingLinks(result,{draft:d,links});
    const item=next.state.items[next.importedItemIds[0]];
    assert.equal(item.qty,2);
    assert.equal(item.ingredientId,ingredientId);
    assert.equal(item.gramsPerUnit,80);
  }
});
