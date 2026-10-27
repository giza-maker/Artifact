import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const source = await fs.readFile(new URL('../model.js', import.meta.url), 'utf8');
const { scenarios, calculate } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);

const close = (actual, expected, epsilon = 1e-9) => assert.ok(Math.abs(actual - expected) <= epsilon, `${actual} != ${expected}`);

test('scenario editable drivers match brief', () => {
  assert.deepEqual(
    [scenarios.base.liftPercent, scenarios.base.notificationOptInPercent, scenarios.base.landedMessageCost, scenarios.base.monthlyFee, scenarios.base.supportHours, scenarios.base.churnPercent, scenarios.base.newLocationsPerMonth],
    [8, 25, .1, 399, .75, 3, 4],
  );
  assert.deepEqual(
    [scenarios.downside.liftPercent, scenarios.downside.notificationOptInPercent, scenarios.downside.landedMessageCost, scenarios.downside.monthlyFee, scenarios.downside.supportHours, scenarios.downside.churnPercent, scenarios.downside.newLocationsPerMonth],
    [2, 50, .1, 399, 2, 6, 2],
  );
});

test('Base reproduces workbook merchant, SaaS, and cash results', () => {
  const r = calculate(scenarios.base);
  close(r.merchantNet, 600);
  close(r.merchantBreakEvenOrders, 78.97435897435898);
  close(r.saasContribution, 328.386);
  assert.equal(r.ownerBreakEvenLocations, 40);
  close(r.net100AfterOwner, 19838.600000000006);
  close(r.fundingGap, 76090.8140584362, 1e-7);
  close(r.month24ActiveLocations, 58.58497004443337);
  close(r.month24Cash, -58301.97378753546, 1e-7);
  assert.equal(r.firstPositiveOperatingMonth, 19);
});

test('Downside reproduces workbook merchant, SaaS, and cash results', () => {
  const r = calculate(scenarios.downside);
  close(r.merchantNet, -950.75);
  close(r.saasContribution, 206.13600000000002);
  assert.equal(r.ownerBreakEvenLocations, 64);
  close(r.net100AfterOwner, 7613.600000000002);
  close(r.fundingGap, 339324.6625896022, 1e-7);
  close(r.month24ActiveLocations, 20.947523638863302);
  assert.equal(r.firstPositiveOperatingMonth, null);
});

test('driver mutations flow through linked models and ramp', () => {
  const baseline = calculate(scenarios.base);
  const changed = calculate({ ...scenarios.base, monthlyFee: 450, notificationOptInPercent: 30, newLocationsPerMonth: 5 });
  assert.notEqual(changed.merchantNet, baseline.merchantNet);
  assert.notEqual(changed.saasContribution, baseline.saasContribution);
  assert.equal(changed.notificationUnits, 1800);
  assert.ok(changed.month24ActiveLocations > baseline.month24ActiveLocations);
});

test('nonpositive order unit margin and SaaS contribution are guarded', () => {
  const r = calculate({ ...scenarios.base, contributionMarginPercent: 0, acquisitionCost: 1_000_000 });
  assert.equal(r.merchantBreakEvenOrders, null);
  assert.equal(r.ownerBreakEvenLocations, null);
  assert.equal(r.recurringBreakEvenLocations, null);
});

test('cash ramp carries exact 24 months and one-time engineering outflow', () => {
  const r = calculate(scenarios.base);
  assert.equal(r.cashRamp.length, 24);
  assert.equal(r.cashRamp[0].engineeringOutflow, 174000);
  assert.ok(r.cashRamp.slice(1).every(row => row.engineeringOutflow === 0));
  assert.ok(r.cashRamp.slice(0, 5).every(row => row.newLocations === 0));
  assert.equal(r.cashRamp[5].newLocations, 4);
  close(r.openingCashRequired, 326090.8140584362, 1e-7);
});
