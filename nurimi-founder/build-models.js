const MAX_NUMBER = 1e6;

export const BUILD_PRESETS = Object.freeze({
  native: Object.freeze({
    setupHours: 96,
    repeatHours: 28,
    monthlyBase: 100,
    monthlyPerStore: 450,
    maintenanceHours: 4,
    maintenancePerStoreHours: 1,
    discoveryHours: 8,
  }),
  hybrid: Object.freeze({
    setupHours: 240,
    repeatHours: 48,
    monthlyBase: 600,
    monthlyPerStore: 430,
    maintenanceHours: 8,
    maintenancePerStoreHours: 2,
    discoveryHours: 24,
  }),
  owned: Object.freeze({
    setupHours: 520,
    repeatHours: 72,
    monthlyBase: 950,
    monthlyPerStore: 180,
    maintenanceHours: 12,
    maintenancePerStoreHours: 3,
    discoveryHours: 32,
  }),
});

export const BUILD_DEFAULTS = Object.freeze({
  route: "owned",
  stores: 1,
  hourlyRate: 200,
  deliveryHoursPerWeek: 60,
  contingencyPercent: 20,
  ...BUILD_PRESETS.owned,
  externalLeadWeeks: 3,
});

const PRESET_FIELDS = Object.freeze(Object.keys(BUILD_PRESETS.owned));

function boundedNumber(value, fallback, min = 0, max = MAX_NUMBER) {
  const parsed = value == null || typeof value === "string" && value.trim() === "" ? NaN : Number(value);
  const number = Number.isFinite(parsed) ? parsed : fallback;
  return Math.min(max, Math.max(min, number));
}

export function cleanBuildInputs(raw = {}) {
  const source = raw && typeof raw === "object" ? raw : {};
  const route = Object.hasOwn(BUILD_PRESETS, source.route) ? source.route : BUILD_DEFAULTS.route;
  const preset = BUILD_PRESETS[route];
  const clean = {
    route,
    stores: Math.round(boundedNumber(source.stores, BUILD_DEFAULTS.stores, 1, 10)),
    hourlyRate: boundedNumber(source.hourlyRate, BUILD_DEFAULTS.hourlyRate),
    deliveryHoursPerWeek: boundedNumber(source.deliveryHoursPerWeek, BUILD_DEFAULTS.deliveryHoursPerWeek, 1, 200),
    contingencyPercent: boundedNumber(source.contingencyPercent, BUILD_DEFAULTS.contingencyPercent, 0, 100),
  };

  for (const field of PRESET_FIELDS) clean[field] = boundedNumber(source[field], preset[field]);
  clean.discoveryHours = Math.min(clean.discoveryHours, clean.setupHours);
  clean.externalLeadWeeks = boundedNumber(source.externalLeadWeeks, BUILD_DEFAULTS.externalLeadWeeks, 0, 52);
  return clean;
}

export function buildPlan(inputs = {}) {
  const clean = cleanBuildInputs(inputs);
  const setupHoursTotal = clean.setupHours + (clean.stores - 1) * clean.repeatHours;
  const labour = setupHoursTotal * clean.hourlyRate;
  const contingencyMultiplier = 1 + clean.contingencyPercent / 100;
  const setupBudget = labour * contingencyMultiplier;
  const maintenanceHoursTotal = clean.maintenanceHours + (clean.stores - 1) * clean.maintenancePerStoreHours;
  const monthlyRun = clean.monthlyBase + clean.stores * clean.monthlyPerStore + maintenanceHoursTotal * clean.hourlyRate;
  const annualRun = monthlyRun * 12;
  const engineeringWeeks = setupHoursTotal / clean.deliveryHoursPerWeek;

  return {
    ...clean,
    setupHoursTotal,
    hoursTotal: setupHoursTotal,
    labour,
    setupBudget,
    monthlyRun,
    maintenanceHoursTotal,
    annualRun,
    firstYear: setupBudget + annualRun,
    engineeringWeeks,
    earliestCalendarWeeks: Math.max(engineeringWeeks, clean.externalLeadWeeks),
    discoveryBudget: clean.discoveryHours * clean.hourlyRate * contingencyMultiplier,
    discoveryIncludedInSetup: true,
    labourBasis: "Illustrative judgement, not a vendor quote",
    ownershipPath: clean.route === "owned" ? "Custom Next.js storefront + Medusa mature core" : null,
    scheduleBasis: "Aggregate labour hours at effective weekly team capacity; not a certified elapsed estimate",
    leadTimeBasis: "Parallel prerequisite only when started on day 1; not a promised date",
  };
}

// Phase one is exactly the funded proof. Remaining effort stays within setup.
export function buildPhaseHours(inputs = {}) {
  const clean = cleanBuildInputs(inputs);
  const remainingWeights = {native:[12,20,18,16,12],hybrid:[24,64,64,40,24],owned:[48,120,160,96,64]}[clean.route];
  const totalWeight = remainingWeights.reduce((sum,hours)=>sum+hours,0);
  const remaining = clean.setupHours-clean.discoveryHours;
  return [clean.discoveryHours,...remainingWeights.map(weight=>remaining*weight/totalWeight)];
}
