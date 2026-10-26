import assert from "node:assert/strict";
import { BUILD_DEFAULTS, BUILD_PRESETS, buildPlan, cleanBuildInputs, buildPhaseHours } from "./build-models.js";

const close = (actual, expected, tolerance = 1e-9) => assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} != ${expected}`);

assert.deepEqual(BUILD_DEFAULTS, {
  route: "owned", stores: 1, hourlyRate: 200, deliveryHoursPerWeek: 60, contingencyPercent: 20,
  setupHours: 520, repeatHours: 72, monthlyBase: 950, monthlyPerStore: 180,
  maintenanceHours: 12, discoveryHours: 32, externalLeadWeeks: 3,
});
assert.equal(BUILD_PRESETS.native.setupHours, 96);
assert.equal(BUILD_PRESETS.hybrid.discoveryHours, 24);
assert.equal(BUILD_PRESETS.owned.monthlyBase, 950);

const defaults = buildPlan();
assert.equal(defaults.setupHoursTotal, 520);
assert.equal(defaults.labour, 104000);
assert.equal(defaults.setupBudget, 124800);
assert.equal(defaults.monthlyRun, 3530);
assert.equal(defaults.annualRun, 42360);
assert.equal(defaults.firstYear, 167160);
close(defaults.engineeringWeeks, 520 / 60);
close(defaults.earliestCalendarWeeks, 520 / 60);
assert.equal(defaults.discoveryBudget, 7680);
assert.equal(defaults.discoveryIncludedInSetup, true);

const threeStores = buildPlan({ stores: 3 });
assert.equal(threeStores.setupHoursTotal, 664);
assert.equal(threeStores.monthlyRun, 3890);

const native = buildPlan({ route: "native", stores: 2, externalLeadWeeks: 10 });
assert.equal(native.setupHours, 96);
assert.equal(native.repeatHours, 28);
assert.equal(native.setupHoursTotal, 124);
assert.equal(native.monthlyRun, 1800);
assert.equal(native.earliestCalendarWeeks, 10);

const hybrid = cleanBuildInputs({ route: "hybrid" });
assert.equal(hybrid.setupHours, 240);
assert.equal(hybrid.repeatHours, 48);
assert.equal(hybrid.monthlyBase, 600);
assert.equal(hybrid.maintenanceHours, 8);

const bounded = cleanBuildInputs({
  route: "invalid", stores: 99.8, hourlyRate: -1, deliveryHoursPerWeek: 900,
  contingencyPercent: 101, setupHours: 2e6, repeatHours: -4, externalLeadWeeks: 99,
});
assert.equal(bounded.route, "owned");
assert.equal(bounded.stores, 10);
assert.equal(bounded.hourlyRate, 0);
assert.equal(bounded.deliveryHoursPerWeek, 200);
assert.equal(bounded.contingencyPercent, 100);
assert.equal(bounded.setupHours, 1e6);
assert.equal(bounded.repeatHours, 0);
assert.equal(bounded.externalLeadWeeks, 52);

assert.equal(cleanBuildInputs({ stores: 1.6 }).stores, 2);
assert.equal(cleanBuildInputs({ stores: -100 }).stores, 1);
assert.equal(cleanBuildInputs({ setupHours: 12, discoveryHours: 32 }).discoveryHours, 12);
assert.equal(cleanBuildInputs({ setupHours: null }).setupHours, 520);
const malformed = cleanBuildInputs({
  route: null, stores: NaN, hourlyRate: Infinity, setupHours: "", monthlyBase: "nope",
  maintenanceHours: -Infinity, deliveryHoursPerWeek: NaN,
});
assert.equal(malformed.route, "owned");
assert.equal(malformed.stores, BUILD_DEFAULTS.stores);
assert.equal(malformed.hourlyRate, BUILD_DEFAULTS.hourlyRate);
assert.equal(malformed.setupHours, BUILD_PRESETS.owned.setupHours);
assert.equal(malformed.monthlyBase, BUILD_PRESETS.owned.monthlyBase);
assert.equal(malformed.maintenanceHours, BUILD_PRESETS.owned.maintenanceHours);
assert.ok(Object.values(buildPlan(malformed)).filter((value) => typeof value === "number").every(Number.isFinite));

const custom = buildPlan({
  stores: 2, setupHours: 100, repeatHours: 20, hourlyRate: 10, contingencyPercent: 25,
  monthlyBase: 30, monthlyPerStore: 5, maintenanceHours: 2, deliveryHoursPerWeek: 40,
  discoveryHours: 8, externalLeadWeeks: 1,
});
assert.equal(custom.setupHoursTotal, 120);
assert.equal(custom.setupBudget, 1500);
assert.equal(custom.monthlyRun, 60);
assert.equal(custom.annualRun, 720);
assert.equal(custom.firstYear, 2220);
assert.equal(custom.engineeringWeeks, 3);
assert.equal(custom.earliestCalendarWeeks, 3);
assert.equal(custom.discoveryBudget, 100);
assert.ok(custom.discoveryBudget < custom.setupBudget);
for (const route of ['native','hybrid','owned']) {
  for (const [setupHours,discoveryHours] of [[520,100],[12,32],[0,0],[100,0]]) {
    const clean=cleanBuildInputs({route,setupHours,discoveryHours});
    const phases=buildPhaseHours(clean);
    assert.equal(phases[0],clean.discoveryHours);
    close(phases.reduce((sum,hours)=>sum+hours,0),clean.setupHours);
    assert.ok(phases.every(hours=>hours>=0));
  }
}

console.log("build-model-tests: ok");
