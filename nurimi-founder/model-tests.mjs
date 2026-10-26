import assert from "node:assert/strict";
import {
  DEFAULT_WEIGHTS,
  PLATFORM_RATINGS,
  allocation,
  normalizeWeights,
  portfolioCosts,
  sanitizeNumber,
  scorePlatforms,
  unitEconomics,
} from "./models.js";

const close = (actual, expected, tolerance = 1e-9) => assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} != ${expected}`);

const baseline = unitEconomics();
close(baseline.contributionBeforeCAC, 56.4);
close(baseline.contributionAfterCAC, 11.4);
close(baseline.pspCost, 5.6);
assert.equal(baseline.breakEvenOrders, null);

const zeroVat = unitEconomics({ vatRate: 0, cac: 0 });
assert.equal(zeroVat.netRevenue, 230);
assert.equal(zeroVat.vatAmount, 0);

const shipping = unitEconomics({ basket: 100, shippingCollected: 15, vatRate: 15, cogs: 0, pspPercent: 2, pspFlat: 0, carrierCost: 0, pickPack: 0, packaging: 0, reserve: 0, cac: 0 });
assert.equal(shipping.charged, 115);
close(shipping.netRevenue, 100);
close(shipping.pspCost, 2.3);

const loss = unitEconomics({ basket: 10, vatRegistered: false, cogs: 50, cac: 0 }, 500);
assert.ok(loss.contributionBeforeCAC < 0);
assert.equal(loss.breakEvenOrders, null);

const shopifyFee = unitEconomics({ basket: 100, shippingCollected: 10, vatRegistered: false, platformFeePercent: 1, pspPercent: 0, pspFlat: 0, cogs: 0, carrierCost: 0, pickPack: 0, packaging: 0, reserve: 0, cac: 0 });
close(shopifyFee.platformFee, 1.1);
close(unitEconomics({}, 114).breakEvenOrders, 10);

assert.equal(portfolioCosts().annualOperating, 17490);
assert.equal(portfolioCosts().firstLaunchLabour, 17200);
assert.equal(portfolioCosts({ stores: 3 }).annualOperating, 33270);
assert.equal(portfolioCosts({ stores: 5 }).annualOperating, 49050);
assert.equal(portfolioCosts({ stores: 3 }).extraLaunchLabour, 8000);

const defaultScores = scorePlatforms();
assert.deepEqual(defaultScores.map(({ id }) => id), ["salla", "zid", "shopify", "headless", "medusa"]);
close(defaultScores[0].score, 8.6);
const zeroScores = scorePlatforms(Object.fromEntries(Object.keys(DEFAULT_WEIGHTS).map((key) => [key, 0])));
assert.deepEqual(zeroScores.map(({ id }) => id), PLATFORM_RATINGS.map(({ id }) => id));
assert.ok(zeroScores.every(({ score }) => score === 0));
assert.equal(scorePlatforms({ portability: 1 })[0].id, "medusa");
close(Object.values(normalizeWeights(DEFAULT_WEIGHTS)).reduce((sum, weight) => sum + weight, 0), 1);

assert.deepEqual(allocation(100, -10), { total: 100, primary: 0, secondary: 100, overAllocation: 0 });
assert.deepEqual(allocation(100, 150), { total: 100, primary: 100, secondary: 0, overAllocation: 0 });
assert.deepEqual(allocation("bad", Infinity), { total: 0, primary: 0, secondary: 0, overAllocation: 0 });

assert.equal(sanitizeNumber(NaN, 7), 7);
assert.equal(sanitizeNumber(Infinity, 7), 7);
assert.equal(sanitizeNumber(-2, 7), 0);
const malformed = unitEconomics({ basket: NaN, vatRate: Infinity, cogs: -100 });
assert.ok(Object.values(malformed).every((value) => value === null || Number.isFinite(value)));
assert.equal(portfolioCosts({ stores: 900, engineeringRate: -2 }).stores, 50);

console.log("model-tests: ok");
