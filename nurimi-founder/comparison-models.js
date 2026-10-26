import { BUILD_PRESETS, cleanBuildInputs, buildPlan } from "./build-models.js?v=92ee1f3623";

export const DEFAULT_COMPARISON = Object.freeze({
  horizonMonths: 36,
  includeHybrid: false,
});

const SHARED_FIELDS = Object.freeze([
  "stores",
  "hourlyRate",
  "deliveryHoursPerWeek",
  "contingencyPercent",
  "externalLeadWeeks",
]);

export function cleanComparison(raw = {}) {
  const source = raw && typeof raw === "object" ? raw : {};
  const parsed = source.horizonMonths == null || source.horizonMonths === ""
    ? NaN
    : Number(source.horizonMonths);
  const horizonMonths = Number.isFinite(parsed)
    ? Math.min(60, Math.max(1, Math.round(parsed)))
    : DEFAULT_COMPARISON.horizonMonths;

  return {
    horizonMonths,
    includeHybrid: source.includeHybrid === true,
  };
}

export function compareBuildPlans(activeBuild, profiles = {}, comparison = {}) {
  const active = cleanBuildInputs(activeBuild);
  const settings = cleanComparison(comparison);
  const shared = Object.fromEntries(SHARED_FIELDS.map((field) => [field, active[field]]));
  const profileSource = profiles && typeof profiles === "object" ? profiles : {};
  const routes = settings.includeHybrid ? ["native", "hybrid", "owned"] : ["native", "owned"];

  return routes.map((route) => {
    const rawProfile = profileSource[route];
    const savedProfile = rawProfile && typeof rawProfile === "object";
    const profile = savedProfile ? cleanBuildInputs({ ...rawProfile, route }) : {};
    const activeRouteInputs = route === active.route ? active : {};
    const inputs = cleanBuildInputs({
      ...BUILD_PRESETS[route],
      ...profile,
      ...activeRouteInputs,
      ...shared,
      route,
    });
    const plan = buildPlan(inputs);

    return {
      route,
      inputs,
      plan,
      horizonCost: plan.setupBudget + plan.monthlyRun * settings.horizonMonths,
      repeatBudget: plan.repeatHours * plan.hourlyRate * (1 + plan.contingencyPercent / 100),
      baseline: !savedProfile && route !== active.route,
    };
  });
}

export function routeForPlatform(id) {
  if (id === "salla" || id === "zid" || id === "shopify") return "native";
  if (id === "headless") return "hybrid";
  if (id === "medusa") return "owned";
  return null;
}

export function decisionCompatibility(buildRoute, platform) {
  const expectedRoute = routeForPlatform(platform);
  if (expectedRoute === null) return { status: "undecided", expectedRoute: null };
  return {
    status: buildRoute === expectedRoute ? "match" : "mismatch",
    expectedRoute,
  };
}
