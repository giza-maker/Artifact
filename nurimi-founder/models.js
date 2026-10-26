export const DEFAULT_UNIT = Object.freeze({
  basket: 230,
  shippingCollected: 0,
  vatRegistered: true,
  vatRate: 15,
  cogs: 110,
  pspPercent: 2,
  pspFlat: 1,
  carrierCost: 12,
  pickPack: 7,
  packaging: 3,
  reserve: 6,
  cac: 45,
  platformFeePercent: 0,
});

export const DEFAULT_PORTFOLIO = Object.freeze({
  stores: 1,
  planAnnual: 2990,
  domainAnnual: 100,
  appsAnnual: 1200,
  engineeringRate: 200,
  operationsRate: 100,
  sharedHoursMonthly: 4,
  storeHoursMonthly: 1,
  controlHoursMonthly: 1,
  firstEngineeringHours: 72,
  firstDesignHours: 8,
  designRate: 150,
  firstOperationsHours: 16,
  extraEngineeringHours: 16,
  extraOperationsHours: 8,
  themePerStore: 1000,
});

export const DEFAULT_WEIGHTS = Object.freeze({
  launch_speed: 18,
  saudi_integration: 18,
  brand_flexibility: 12,
  arabic_rtl: 10,
  operational_reliability: 12,
  maintenance: 10,
  portability: 8,
  total_cost: 12,
});

const CRITERIA = Object.freeze(Object.keys(DEFAULT_WEIGHTS));

export const PLATFORM_RATINGS = Object.freeze([
  { id: "salla", name: "Salla native", ratings: { launch_speed: 4, saudi_integration: 5, brand_flexibility: 4, arabic_rtl: 5, operational_reliability: 4, maintenance: 5, portability: 3, total_cost: 4 } },
  { id: "zid", name: "Zid Vitrin", ratings: { launch_speed: 4, saudi_integration: 5, brand_flexibility: 4, arabic_rtl: 5, operational_reliability: 4, maintenance: 4, portability: 3, total_cost: 3 } },
  { id: "shopify", name: "Shopify native", ratings: { launch_speed: 4, saudi_integration: 3, brand_flexibility: 5, arabic_rtl: 4, operational_reliability: 4, maintenance: 4, portability: 4, total_cost: 3 } },
  { id: "headless", name: "Shopify headless", ratings: { launch_speed: 2, saudi_integration: 3, brand_flexibility: 5, arabic_rtl: 3, operational_reliability: 3, maintenance: 2, portability: 4, total_cost: 2 } },
  { id: "medusa", name: "Medusa custom", ratings: { launch_speed: 1, saudi_integration: 2, brand_flexibility: 5, arabic_rtl: 3, operational_reliability: 2, maintenance: 1, portability: 5, total_cost: 2 } },
]);

export function sanitizeNumber(value, fallback = 0, min = 0, max = 1e9) {
  const safeFallback = Number.isFinite(Number(fallback)) ? Number(fallback) : 0;
  const lower = Number.isFinite(Number(min)) ? Number(min) : 0;
  const upperCandidate = Number.isFinite(Number(max)) ? Number(max) : 1e9;
  const upper = Math.max(lower, upperCandidate);
  const parsed = typeof value === "string" && value.trim() === "" ? NaN : Number(value);
  return Math.min(upper, Math.max(lower, Number.isFinite(parsed) ? parsed : safeFallback));
}

export function normalizeWeights(weights = DEFAULT_WEIGHTS) {
  const source = weights && typeof weights === "object" ? weights : {};
  const clean = Object.fromEntries(CRITERIA.map((key) => [key, sanitizeNumber(source[key], 0)]));
  const total = Object.values(clean).reduce((sum, value) => sum + value, 0);
  if (total === 0) return Object.fromEntries(CRITERIA.map((key) => [key, 0]));
  return Object.fromEntries(CRITERIA.map((key) => [key, clean[key] / total]));
}

export function unitEconomics(inputs = {}, fixedMonthly = 0) {
  const source = inputs && typeof inputs === "object" ? inputs : {};
  const value = (key, max = 1e9) => sanitizeNumber(source[key], DEFAULT_UNIT[key], 0, max);
  const basket = value("basket");
  const shippingCollected = value("shippingCollected");
  const charged = basket + shippingCollected;
  const vatRate = value("vatRate", 100);
  const vatRegistered = source.vatRegistered == null ? DEFAULT_UNIT.vatRegistered : source.vatRegistered === true;
  const netRevenue = vatRegistered ? charged / (1 + vatRate / 100) : charged;
  const vatAmount = charged - netRevenue;
  const pspCost = charged * value("pspPercent", 100) / 100 + value("pspFlat");
  const platformFee = charged * value("platformFeePercent", 100) / 100;
  const variableCost = value("cogs") + pspCost + platformFee + value("carrierCost") + value("pickPack") + value("packaging") + value("reserve");
  const contributionBeforeCAC = netRevenue - variableCost;
  const cac = value("cac");
  const contributionAfterCAC = contributionBeforeCAC - cac;
  const fixed = sanitizeNumber(fixedMonthly, 0);
  return {
    charged,
    netRevenue,
    vatAmount,
    pspCost,
    platformFee,
    variableCost,
    contributionBeforeCAC,
    contributionAfterCAC,
    maxCAC: contributionBeforeCAC,
    contributionMargin: netRevenue === 0 ? 0 : contributionBeforeCAC / netRevenue,
    breakEvenOrders: fixed > 0 && contributionAfterCAC > 0 ? fixed / contributionAfterCAC : null,
  };
}

export function portfolioCosts(inputs = {}) {
  const source = inputs && typeof inputs === "object" ? inputs : {};
  const stores = Math.round(sanitizeNumber(source.stores, DEFAULT_PORTFOLIO.stores, 1, 50));
  const value = (key) => sanitizeNumber(source[key], DEFAULT_PORTFOLIO[key]);
  const planAnnual = value("planAnnual");
  const domainAnnual = value("domainAnnual");
  const appsAnnual = value("appsAnnual");
  const engineeringRate = value("engineeringRate");
  const operationsRate = value("operationsRate");
  const subscription = stores * planAnnual;
  const software = stores * (planAnnual + domainAnnual + appsAnnual);
  const sharedCare = 12 * value("sharedHoursMonthly") * engineeringRate;
  const storeCare = 12 * stores * value("storeHoursMonthly") * engineeringRate;
  const operationsCare = 12 * stores * value("controlHoursMonthly") * operationsRate;
  const annualOperating = software + sharedCare + storeCare + operationsCare;
  const firstEngineeringHours = value("firstEngineeringHours");
  const firstDesignHours = value("firstDesignHours");
  const firstOperationsHours = value("firstOperationsHours");
  const extraStores = stores - 1;
  const extraEngineeringHours = extraStores * value("extraEngineeringHours");
  const extraOperationsHours = extraStores * value("extraOperationsHours");
  const firstLaunchLabour = firstEngineeringHours * engineeringRate + firstDesignHours * value("designRate") + firstOperationsHours * operationsRate;
  const extraLaunchLabour = extraEngineeringHours * engineeringRate + extraOperationsHours * operationsRate;
  const themeLicences = stores * value("themePerStore");
  const setup = firstLaunchLabour + extraLaunchLabour + themeLicences;
  const engineeringHours = firstEngineeringHours + extraEngineeringHours;
  const aggregateHours = engineeringHours + firstDesignHours + firstOperationsHours + extraOperationsHours;
  return { stores, subscription, software, sharedCare, storeCare, operationsCare, annualOperating, firstLaunchLabour, extraLaunchLabour, themeLicences, setup, firstYear: annualOperating + setup, engineeringHours, aggregateHours };
}

export function scorePlatforms(weights = DEFAULT_WEIGHTS, ratings = PLATFORM_RATINGS) {
  const normalized = normalizeWeights(weights);
  const rows = Array.isArray(ratings) ? ratings : PLATFORM_RATINGS;
  return rows.map((platform, index) => {
    const rawRatings = platform?.ratings && typeof platform.ratings === "object" ? platform.ratings : {};
    const cleanRatings = Object.fromEntries(CRITERIA.map((key) => [key, sanitizeNumber(rawRatings[key], 0, 1, 5)]));
    const score = CRITERIA.reduce((sum, key) => sum + normalized[key] * cleanRatings[key] * 2, 0);
    return { id: String(platform?.id ?? index), name: String(platform?.name ?? platform?.id ?? index), score, ratings: cleanRatings, _index: index };
  }).sort((a, b) => b.score - a.score || a._index - b._index).map(({ _index, ...platform }) => platform);
}

export function allocation(total, primary) {
  const safeTotal = sanitizeNumber(total, 0);
  const safePrimary = sanitizeNumber(primary, 0, 0, safeTotal);
  return { total: safeTotal, primary: safePrimary, secondary: safeTotal - safePrimary, overAllocation: 0 };
}
