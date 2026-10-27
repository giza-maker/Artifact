const EPS = 1e-9;
const fail = (message) => {
  throw new Error(message);
};
const finite = (n) => typeof n === "number" && Number.isFinite(n) && n >= 0;
const positive = (n) => finite(n) && n > 0;
const safeId = (id) =>
  typeof id === "string" && /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(id);
const validServings = (n) => Number.isInteger(n) && n >= 1 && n <= 12;
const localDay = (now) => {
  if (typeof now === "string" && /^\d{4}-\d{2}-\d{2}$/.test(now)) {
    if (timestamp(now).slice(0, 10) !== now) fail("Invalid date");
    return now;
  }
  const d = new Date(timestamp(now));
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
const timestamp = (now) => {
  const d = new Date(now ?? Date.now());
  if (!Number.isFinite(+d)) fail("Invalid date");
  return d.toISOString();
};
export function normalizeCookUnit(unit) {
  const u = String(unit ?? "")
    .trim()
    .toLowerCase();
  return (
    { piece: "pieces", slice: "slices", clove: "cloves", bunch: "bunches" }[
      u
    ] ?? u
  );
}
function dimension(unit) {
  const u = normalizeCookUnit(unit);
  if (u === "g" || u === "kg") return ["mass", u === "kg" ? 1000 : 1];
  if (u === "ml" || u === "l") return ["volume", u === "l" ? 1000 : 1];
  if (["count", "pieces", "slices", "cloves", "bunches"].includes(u))
    return [u === "pieces" ? "count" : u, 1];
  return [null, 1];
}
function ratio(from, to, grams) {
  const [a, af] = dimension(from),
    [b, bf] = dimension(to);
  if (!a || !b) return null;
  if (a === b) return af / bf;
  const count = (x) => ["count", "slices", "cloves", "bunches"].includes(x);
  if (positive(grams) && count(a) && b === "mass") return grams / bf;
  if (positive(grams) && a === "mass" && count(b)) return af / grams;
  return null;
}
const conversion = (item) =>
  positive(item.gramsPerUnit) ? item.gramsPerUnit : null;
const identity = (a, b) =>
  a.ingredientId === b.ingredientId &&
  normalizeCookUnit(a.unit) === normalizeCookUnit(b.unit) &&
  conversion(a) === conversion(b);

export function assessRecipe(
  state,
  recipe,
  { servings = recipe.servings, ingredients = [], now } = {},
) {
  if (!validServings(servings) || !validServings(recipe.servings))
    fail("Invalid servings");
  if (!safeId(recipe.id)) fail("Invalid recipe ID");
  const today = localDay(now),
    remaining = new Map(),
    blockedItems = [],
    incompatibleItems = [];
  const lots = Object.entries(state.items ?? {}).map(([id, item], order) => ({
    ...item,
    id,
    order,
  }));
  for (const lot of lots) remaining.set(lot.id, finite(lot.qty) ? lot.qty : 0);
  lots.sort(
    (a, b) =>
      (a.expiry || "9999").localeCompare(b.expiry || "9999") ||
      a.order - b.order,
  );
  const requirements = [];
  for (const ingredient of recipe.ingredients ?? []) {
    if (!safeId(ingredient.id) || !positive(ingredient.qty))
      fail("Invalid recipe ingredient");
    const unit = normalizeCookUnit(ingredient.unit),
      qty = (ingredient.qty * servings) / recipe.servings;
    if (!dimension(unit)[0] || !positive(qty) || qty > 1e9)
      fail("Invalid recipe quantity or unit");
    let req = requirements.find(
      (x) => x.ingredientId === ingredient.id && x.unit === unit,
    );
    if (req) {
      req.qty += qty;
      if (!finite(req.qty) || req.qty > 1e9)
        fail("Recipe quantity exceeds limit");
    } else
      requirements.push({
        ingredientId: ingredient.id,
        name:
          ingredients.find((x) => x.id === ingredient.id)?.name?.en ??
          ingredient.name ??
          ingredient.id,
        qty,
        unit,
        have: 0,
        missing: 0,
        allocations: [],
      });
  }
  // Count requirements cannot consume mass lots without their own explicit
  // conversion. Reserve constrained count stock before flexible mass demand.
  const allocationOrder = [...requirements].sort(
    (a, b) =>
      Number(dimension(a.unit)[0] === "mass") -
      Number(dimension(b.unit)[0] === "mass"),
  );
  for (const req of allocationOrder) {
    let needed = req.qty;
    for (const lot of lots.filter((x) => x.ingredientId === req.ingredientId)) {
      if (lot.expiry && lot.expiry < today) {
        if (!blockedItems.some((x) => x.id === lot.id))
          blockedItems.push({ ...lot, reason: "expired" });
        continue;
      }
      const factor = ratio(lot.unit, req.unit, conversion(lot));
      if (factor === null) {
        if (!incompatibleItems.some((x) => x.id === lot.id))
          incompatibleItems.push({ ...lot, reason: "incompatible-unit" });
        continue;
      }
      const qty = Math.min(remaining.get(lot.id), Math.max(0, needed) / factor);
      if (qty > EPS) {
        req.allocations.push({
          id: lot.id,
          ingredientId: lot.ingredientId,
          name: lot.name,
          qty,
          unit: lot.unit,
          gramsPerUnit: conversion(lot),
        });
        remaining.set(lot.id, remaining.get(lot.id) - qty);
        needed -= qty * factor;
      }
    }
    req.missing = Math.max(0, needed) < EPS ? 0 : Math.max(0, needed);
    req.have = req.qty - req.missing;
  }
  const allergies = new Set(state.profile?.allergies ?? []);
  const tags = new Set([
    ...(recipe.allergens ?? []),
    ...requirements.flatMap(
      (r) =>
        ingredients.find((i) => i.id === r.ingredientId)?.dietary
          ?.allergenTags ?? [],
    ),
  ]);
  const excluded = [...tags].filter((x) => allergies.has(x));
  const missing = requirements.filter((x) => x.missing > 0),
    missingTools = (recipe.requiredTools ?? []).filter(
      (id) => !state.tools?.[id],
    );
  const stockReady = missing.length === 0;
  return {
    requirements,
    missing,
    missingTools,
    excluded,
    stockReady,
    ready: stockReady && !missingTools.length && !excluded.length,
    blockedItems,
    incompatibleItems,
  };
}

export function startCookingSession(
  state,
  recipe,
  { servings = recipe.servings, sessionId, now, ingredients = [] } = {},
) {
  if (state.cooking) fail("Cooking session already active");
  if (
    !safeId(sessionId) ||
    (state.meals ?? []).some(
      (m) => m.cookingSessionId === sessionId || m.id === sessionId,
    )
  )
    fail("Invalid or reused session ID");
  const assessment = assessRecipe(state, recipe, {
    servings,
    ingredients,
    now,
  });
  if (!assessment.stockReady || assessment.excluded.length)
    fail("Recipe unavailable");
  const allocations = assessment.requirements
    .flatMap((r) => r.allocations)
    .reduce((all, a) => {
      const old = all.find((x) => x.id === a.id);
      if (old) old.qty += a.qty;
      else all.push({ ...a });
      return all;
    }, []);
  return {
    ...state,
    cooking: {
      id: sessionId,
      rid: recipe.id,
      recipeName: recipe.name,
      servings,
      phase: "prep",
      prepared: [],
      toolsConfirmed: false,
      step: 0,
      seconds: 120,
      running: false,
      deadline: null,
      startedAt: timestamp(now),
      requirements: assessment.requirements.map(
        ({ ingredientId, qty, unit }) => ({ ingredientId, qty, unit }),
      ),
      allocations,
    },
  };
}

function reviewedUse(used) {
  if (
    !Array.isArray(used) ||
    used.some((x) => !x || typeof x.id !== "string" || !finite(x.qty)) ||
    new Set(used.map((x) => x.id)).size !== used.length
  )
    fail("Invalid reviewed quantities");
  return used;
}
export function commitCookedMeal(
  state,
  { sessionId, used, confirmed, now } = {},
) {
  if (!safeId(sessionId)) fail("Invalid session ID");
  if (confirmed !== true) fail("Explicit confirmation required");
  reviewedUse(used);
  const prior = (state.meals ?? []).find(
    (m) => m.cookingSessionId === sessionId,
  );
  if (prior) {
    if (
      prior.used.length !== used.length ||
      prior.used.some(
        (a) => !used.some((b) => b.id === a.id && b.qty === a.qty),
      )
    )
      fail("Session replay conflict");
    return { state, meal: prior, replayed: true };
  }
  const session = state.cooking;
  if (!session || session.id !== sessionId || session.phase !== "review")
    fail("Matching review session required");
  if ((state.meals ?? []).length >= 2000) fail("Meal history full");
  if (
    used.length !== session.allocations.length ||
    session.allocations.some((a) => !used.some((x) => x.id === a.id))
  )
    fail("Every planned stock item required");
  const mealDate = localDay(now);
  const entries = used.map(({ id, qty }) => {
    const planned = session.allocations.find((a) => a.id === id),
      live = state.items?.[id];
    if (
      !planned ||
      !live ||
      !identity(planned, live) ||
      !finite(live.qty) ||
      qty > live.qty
    )
      fail("Stock changed or insufficient");
    if (qty > 0 && live.expiry && live.expiry < mealDate)
      fail("Stock expiry date has passed; review quantities before recording");
    return {
      id,
      qty,
      unit: live.unit,
      ingredientId: live.ingredientId,
      name: live.name,
      gramsPerUnit: conversion(live),
    };
  });
  const items = { ...state.items };
  for (const entry of entries)
    items[entry.id] = {
      ...items[entry.id],
      qty: items[entry.id].qty - entry.qty,
    };
  const meal = {
    id: sessionId,
    rid: session.rid,
    date: mealDate,
    cookingSessionId: sessionId,
    status: "completed",
    used: entries,
  };
  return {
    state: {
      ...state,
      items,
      cooking: null,
      meals: [...(state.meals ?? []), meal],
    },
    meal,
    replayed: false,
  };
}

export function undoCookedMeal(state, mealId, { confirmed } = {}) {
  if (!safeId(mealId)) fail("Invalid meal ID");
  if (confirmed !== true) fail("Explicit confirmation required");
  const meal = (state.meals ?? []).find((m) => m.id === mealId);
  if (
    !meal ||
    meal.cookingSessionId !== meal.id ||
    !Array.isArray(meal.used) ||
    !["completed", "undone"].includes(meal.status)
  )
    fail("Meal cannot be undone");
  if (meal.status === "undone") return { state, meal, replayed: true };
  for (const entry of meal.used) {
    const live = state.items?.[entry.id];
    if (
      !live ||
      !identity(entry, live) ||
      !finite(entry.qty) ||
      !finite(live.qty) ||
      !Number.isFinite(live.qty + entry.qty) ||
      live.qty + entry.qty > 1e9
    )
      fail("Stock changed; cannot undo");
  }
  const items = { ...state.items };
  for (const entry of meal.used)
    items[entry.id] = {
      ...items[entry.id],
      qty: items[entry.id].qty + entry.qty,
    };
  const updated = { ...meal, status: "undone" };
  return {
    state: {
      ...state,
      items,
      meals: state.meals.map((m) => (m === meal ? updated : m)),
    },
    meal: updated,
    replayed: false,
  };
}
