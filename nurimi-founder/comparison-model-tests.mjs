import assert from "node:assert/strict";
import {
  DEFAULT_COMPARISON,
  cleanComparison,
  compareBuildPlans,
  routeForPlatform,
  decisionCompatibility,
} from "./comparison-models.js";

assert.deepEqual(DEFAULT_COMPARISON, { horizonMonths: 36, includeHybrid: false });
assert.deepEqual(cleanComparison(), DEFAULT_COMPARISON);
assert.deepEqual(cleanComparison({ horizonMonths: 1.6, includeHybrid: true }), { horizonMonths: 2, includeHybrid: true });
assert.deepEqual(cleanComparison({ horizonMonths: -8, includeHybrid: 1 }), { horizonMonths: 1, includeHybrid: false });
assert.equal(cleanComparison({ horizonMonths: 100 }).horizonMonths, 60);
for (const invalid of [NaN, Infinity, -Infinity, "", "bad", null]) {
  assert.equal(cleanComparison({ horizonMonths: invalid }).horizonMonths, 36);
}

const active = {
  route: "native",
  stores: 1,
  hourlyRate: 175,
  deliveryHoursPerWeek: 45,
  contingencyPercent: 15,
  externalLeadWeeks: 7,
  setupHours: 111,
  repeatHours: 31,
  monthlyBase: 120,
  monthlyPerStore: 460,
  maintenanceHours: 5,
  discoveryHours: 9,
};
const profiles = {
  hybrid: { stores: 9, hourlyRate: 999, setupHours: 260, monthlyBase: 650 },
  owned: { stores: 8, contingencyPercent: 80, setupHours: 600, repeatHours: 90 },
};
const rows = compareBuildPlans(active, profiles, { horizonMonths: 24, includeHybrid: true });
assert.deepEqual(rows.map(({ route }) => route), ["native", "hybrid", "owned"]);
for (const { inputs } of rows) {
  assert.equal(inputs.stores, 1);
  assert.equal(inputs.hourlyRate, 175);
  assert.equal(inputs.deliveryHoursPerWeek, 45);
  assert.equal(inputs.contingencyPercent, 15);
  assert.equal(inputs.externalLeadWeeks, 7);
}

const native = rows.find(({ route }) => route === "native");
assert.equal(native.inputs.setupHours, 111);
assert.equal(native.inputs.repeatHours, 31);
assert.equal(native.inputs.monthlyBase, 120);
assert.equal(native.baseline, false);

const hybrid = rows.find(({ route }) => route === "hybrid");
assert.equal(hybrid.inputs.setupHours, 260);
assert.equal(hybrid.inputs.monthlyBase, 650);
assert.equal(hybrid.baseline, false);

const owned = rows.find(({ route }) => route === "owned");
assert.equal(owned.inputs.setupHours, 600);
assert.equal(owned.inputs.repeatHours, 90);
assert.equal(owned.baseline, false);
assert.equal(owned.horizonCost, owned.plan.setupBudget + owned.plan.monthlyRun * 24);
assert.equal(owned.repeatBudget, owned.plan.repeatHours * owned.plan.hourlyRate * 1.15);

const defaults = compareBuildPlans({ route: "native" });
assert.deepEqual(defaults.map(({ route }) => route), ["native", "owned"]);
assert.ok(defaults.every(({ inputs }) => inputs.stores === 1));
assert.equal(defaults[0].baseline, false);
assert.equal(defaults[1].baseline, true);

const malformed = compareBuildPlans({
  route: "hybrid",
  stores: NaN,
  hourlyRate: Infinity,
  deliveryHoursPerWeek: -4,
  contingencyPercent: "bad",
  externalLeadWeeks: 1000,
}, { native: { setupHours: Infinity, repeatHours: -5 } }, { includeHybrid: true, horizonMonths: NaN });
for (const row of malformed) {
  assert.ok(Object.values(row.plan).filter((value) => typeof value === "number").every(Number.isFinite));
  assert.ok(Number.isFinite(row.horizonCost));
  assert.ok(Number.isFinite(row.repeatBudget));
}

for (const id of ["salla", "zid", "shopify"]) assert.equal(routeForPlatform(id), "native");
assert.equal(routeForPlatform("headless"), "hybrid");
assert.equal(routeForPlatform("medusa"), "owned");
for (const id of ["undecided", "shopify_headless", "custom", "unknown", null]) assert.equal(routeForPlatform(id), null);

assert.deepEqual(decisionCompatibility("native", "salla"), { status: "match", expectedRoute: "native" });
assert.deepEqual(decisionCompatibility("owned", "salla"), { status: "mismatch", expectedRoute: "native" });
assert.deepEqual(decisionCompatibility("hybrid", "headless"), { status: "match", expectedRoute: "hybrid" });
assert.deepEqual(decisionCompatibility("owned", "undecided"), { status: "undecided", expectedRoute: null });

console.log("comparison-model-tests: ok");
