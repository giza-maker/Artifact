import { COOK_RECIPES, COOK_INGREDIENTS, COOK_TOOLS } from "./cook-catalog.js";
import { assessRecipe } from "./cook-domain.js";
const fail = () => {
  throw new TypeError("Invalid assistant data or stale proposal");
};
const recipeIds = new Set(COOK_RECIPES.map((x) => x.id));
const ingredientIds = new Set(COOK_INGREDIENTS.map((x) => x.id));
const toolIds = new Set(COOK_TOOLS.map((x) => x.id));
const units = new Set([
  "g",
  "kg",
  "ml",
  "l",
  "count",
  "pieces",
  "bunches",
  "cloves",
  "slices",
]);
const countUnits = new Set(["count", "pieces", "bunches", "cloves", "slices"]);
const storages = new Set(["Fridge", "Freezer", "Pantry", "Spices"]);
function object(x) {
  if (
    !x ||
    typeof x !== "object" ||
    Array.isArray(x) ||
    ![Object.prototype, null].includes(Object.getPrototypeOf(x))
  )
    fail();
  for (const k of Object.keys(x))
    if (["__proto__", "prototype", "constructor"].includes(k)) fail();
  return x;
}
function exact(x, keys) {
  object(x);
  if (
    Object.keys(x).length !== keys.length ||
    keys.some((k) => !Object.hasOwn(x, k))
  )
    fail();
}
function str(x, max = 200) {
  if (typeof x !== "string" || !x.trim() || x.length > max) fail();
  return x;
}
function id(x) {
  if (typeof x !== "string" || !/^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(x))
    fail();
  return x;
}
function num(x, min = 0, max = 1e9, integer = false) {
  if (
    typeof x !== "number" ||
    !Number.isFinite(x) ||
    x < min ||
    x > max ||
    (integer && !Number.isInteger(x))
  )
    fail();
  return x;
}
function date(x) {
  if (typeof x !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(x)) fail();
  const d = new Date(x + "T00:00:00Z");
  if (!Number.isFinite(+d) || d.toISOString().slice(0, 10) !== x) fail();
  return x;
}
function list(x, max, fn) {
  if (!Array.isArray(x) || x.length > max) fail();
  return x.map(fn);
}
function unique(x) {
  if (new Set(x).size !== x.length) fail();
  return x;
}
function knownRecipe(x) {
  if (!recipeIds.has(x)) fail();
  return x;
}
function day(now) {
  if (typeof now === "string" && /^\d{4}-\d{2}-\d{2}$/.test(now))
    return date(now);
  const d = new Date(now ?? Date.now());
  if (!Number.isFinite(+d)) fail();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
export function validateAssistantContext(input) {
  exact(input, [
    "version",
    "today",
    "inventory",
    "profile",
    "tools",
    "servings",
    "selectedRecipeId",
    "cooking",
  ]);
  if (input.version !== 1) fail();
  const inventory = list(input.inventory, 500, (x) => {
    exact(x, [
      "id",
      "name",
      "qty",
      "unit",
      "ingredientId",
      "gramsPerUnit",
      "expiry",
      "storage",
    ]);
    if (!units.has(x.unit) || !storages.has(x.storage)) fail();
    if (x.ingredientId !== null && !ingredientIds.has(x.ingredientId)) fail();
    if (x.gramsPerUnit !== null) {
      if (!countUnits.has(x.unit)) fail();
      num(x.gramsPerUnit, Number.MIN_VALUE);
    }
    return {
      id: id(x.id),
      name: str(x.name),
      qty: num(x.qty),
      unit: x.unit,
      ingredientId: x.ingredientId,
      gramsPerUnit: x.gramsPerUnit,
      expiry: x.expiry === null ? null : date(x.expiry),
      storage: x.storage,
    };
  });
  unique(inventory.map((x) => x.id));
  exact(input.profile, ["allergies", "cuisine", "time", "household"]);
  const profile = {
    allergies: unique(list(input.profile.allergies, 50, (x) => str(x, 100))),
    cuisine: str(input.profile.cuisine, 100),
    time: num(input.profile.time, 1, 1440),
    household: num(input.profile.household, 1, 12, true),
  };
  const tools = unique(
    list(input.tools, 100, (x) => {
      id(x);
      if (!toolIds.has(x)) fail();
      return x;
    }),
  );
  object(input.servings);
  if (Object.keys(input.servings).length > recipeIds.size) fail();
  const servings = {};
  for (const [rid, n] of Object.entries(input.servings))
    servings[knownRecipe(rid)] = num(n, 1, 12, true);
  let cooking = null;
  if (input.cooking !== null) {
    const x = input.cooking;
    exact(x, ["id", "rid", "servings", "phase", "step", "plannedUsage"]);
    if (!["prep", "cooking", "review"].includes(x.phase)) fail();
    cooking = {
      id: id(x.id),
      rid: knownRecipe(x.rid),
      servings: num(x.servings, 1, 12, true),
      phase: x.phase,
      plannedUsage: list(x.plannedUsage, 500, (entry) => {
        exact(entry, [
          "id",
          "name",
          "qty",
          "unit",
          "ingredientId",
          "gramsPerUnit",
        ]);
        if (!units.has(entry.unit) || !ingredientIds.has(entry.ingredientId))
          fail();
        if (entry.gramsPerUnit !== null) {
          if (!countUnits.has(entry.unit)) fail();
          num(entry.gramsPerUnit, Number.MIN_VALUE);
        }
        return {
          id: id(entry.id),
          name: str(entry.name),
          qty: num(entry.qty, Number.MIN_VALUE),
          unit: entry.unit,
          ingredientId: entry.ingredientId,
          gramsPerUnit: entry.gramsPerUnit,
        };
      }),
      step: num(
        x.step,
        0,
        COOK_RECIPES.find((r) => r.id === x.rid).steps.length - 1,
        true,
      ),
    };
    unique(cooking.plannedUsage.map((x) => x.id));
  }
  return {
    version: 1,
    today: date(input.today),
    inventory,
    profile,
    tools,
    servings,
    selectedRecipeId:
      input.selectedRecipeId === null
        ? null
        : knownRecipe(input.selectedRecipeId),
    cooking,
  };
}
export function buildAssistantContext(state, { now } = {}) {
  return validateAssistantContext({
    version: 1,
    today: day(now),
    inventory: Object.entries(state.items ?? {}).map(([id, x]) => ({
      id,
      name: x.name,
      qty: x.qty,
      unit: x.unit,
      ingredientId: ingredientIds.has(x.ingredientId) ? x.ingredientId : null,
      gramsPerUnit: x.gramsPerUnit ?? null,
      expiry: x.expiry ?? null,
      storage: x.storage,
    })),
    profile: {
      ...state.profile,
      household: Math.max(1, Math.min(12, Math.round(state.profile.household))),
    },
    tools: Object.entries(state.tools ?? {})
      .filter(([id, on]) => on && toolIds.has(id))
      .map(([id]) => id),
    servings: Object.fromEntries(
      Object.entries(state.servings ?? {})
        .filter(([id]) => recipeIds.has(id))
        .map(([id, n]) => [id, Math.max(1, Math.min(12, Math.round(n)))]),
    ),
    selectedRecipeId: state.recipe ?? null,
    cooking: state.cooking
      ? {
          ...Object.fromEntries(
            ["id", "rid", "servings", "phase", "step"].map((k) => [
              k,
              state.cooking[k],
            ]),
          ),
          plannedUsage: (state.cooking.allocations ?? []).map((x) => ({
            id: x.id,
            name: x.name,
            qty: x.qty,
            unit: x.unit,
            ingredientId: x.ingredientId,
            gramsPerUnit: x.gramsPerUnit ?? null,
          })),
        }
      : null,
  });
}
export function normalizeAssistantRequest(body) {
  exact(body, ["question", "history", "context"]);
  return {
    question: str(body.question, 2000),
    history: list(body.history, 6, (x) => {
      exact(x, ["q", "a"]);
      return { q: str(x.q, 2000), a: str(x.a, 6000) };
    }),
    context: validateAssistantContext(body.context),
  };
}
function proposal(raw, context) {
  object(raw);
  str(raw.reason, 300);
  if (context.cooking) fail();
  if (raw.type === "set_quantity") {
    exact(raw, ["type", "itemId", "quantity", "reason"]);
    if (!context.inventory.some((x) => x.id === raw.itemId)) fail();
    return {
      type: raw.type,
      itemId: raw.itemId,
      quantity: num(raw.quantity),
      reason: raw.reason,
    };
  }
  if (raw.type === "open_recipe") {
    exact(raw, ["type", "recipeId", "servings", "reason"]);
    const recipe = COOK_RECIPES.find((x) => x.id === raw.recipeId);
    if (!recipe) fail();
    const servings = num(raw.servings, 1, 12, true);
    const state = {
      profile: context.profile,
      items: Object.fromEntries(context.inventory.map((x) => [x.id, x])),
      tools: Object.fromEntries(context.tools.map((x) => [x, true])),
    };
    if (
      assessRecipe(state, recipe, {
        servings,
        ingredients: COOK_INGREDIENTS,
        now: context.today,
      }).excluded.length
    )
      fail();
    return {
      type: raw.type,
      recipeId: raw.recipeId,
      servings,
      reason: raw.reason,
    };
  }
  fail();
}
export function normalizeAssistantResponse(raw, context) {
  const c = validateAssistantContext(context);
  exact(raw, ["answer", "warnings", "proposals"]);
  const proposals = list(raw.proposals, 3, (x) => proposal(x, c));
  unique(proposals.map((x) => x.type + ":" + (x.itemId ?? x.recipeId)));
  return {
    answer: str(raw.answer, 6000),
    warnings: list(raw.warnings, 5, (x) => str(x, 300)),
    proposals,
  };
}
function freeze(x) {
  if (x && typeof x === "object") {
    Object.values(x).forEach(freeze);
    Object.freeze(x);
  }
  return x;
}
function fresh(state, context) {
  const current = buildAssistantContext(state);
  if (current.cooking || JSON.stringify(current) !== JSON.stringify(context))
    fail();
}
const reviews = new WeakSet();
export function reviewAssistantProposal(state, raw, { context } = {}) {
  const c = validateAssistantContext(context);
  fresh(state, c);
  const p = proposal(raw, c);
  if (
    p.type === "set_quantity" &&
    c.inventory.find((x) => x.id === p.itemId).qty === p.quantity
  )
    fail();
  const review = freeze({ proposal: p, context: c });
  reviews.add(review);
  return review;
}
export function applyAssistantProposal(state, review, { confirmed } = {}) {
  if (confirmed !== true || !reviews.has(review)) fail();
  fresh(state, review.context);
  const p = proposal(review.proposal, review.context);
  if (p.type === "set_quantity") {
    if (state.items[p.itemId].qty === p.quantity) fail();
    const next = {
      ...state,
      items: {
        ...state.items,
        [p.itemId]: { ...state.items[p.itemId], qty: p.quantity },
      },
    };
    return next;
  }
  // Opening an already selected recipe is still useful navigation. Repeating
  // this assignment is harmless; quantity changes remain guarded above.
  const next = {
    ...state,
    recipe: p.recipeId,
    servings: { ...state.servings, [p.recipeId]: p.servings },
    route: "recipe",
  };
  return next;
}
