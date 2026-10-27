"use strict";

const CURRENT_KEY = "nomli-kitchen-state-v1";
const LEGACY_KEY = "nomli-kitchen-mvp-v1";
const NATIVE_KEY = "state-v1";
const MAX_BACKUP_BYTES = 1024 * 1024;
const MAX_STATE_BYTES = 1024 * 1024;
const MAX_ITEMS = 500;
const MAX_SCAN_IMPORTS = 2000;
const MAX_QTY = 1e9;
const UNITS = new Set([
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
const ROUTES = new Set([
  "kitchen",
  "scan",
  "cook",
  "assistant",
  "recipe",
  "cooking",
  "prep",
  "review",
  "shopping",
  "expenses",
  "profile",
]);
const AREAS = new Set(["All", "Fridge", "Freezer", "Pantry", "Spices"]);
const ITEM_AREAS = new Set(["Fridge", "Freezer", "Pantry", "Spices"]);
const SORTS = new Set(["expiry", "name", "quantity"]);
const PROVENANCE = new Set([null, "user", "printed", "estimated"]);
const FORBIDDEN = new Set(["__proto__", "prototype", "constructor"]);
const SENSITIVE = new Set(["scanconfig", "devicetoken", "apikey"]);
const HEX_DIGEST = /^[a-f0-9]{64}$/i;

function fail(message) {
  throw new TypeError(message);
}
function plain(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value))
    fail(`${label} must be an object.`);
  const proto = Object.getPrototypeOf(value);
  if (proto !== Object.prototype && proto !== null)
    fail(`${label} must be a plain object.`);
  return value;
}
function inspect(value, depth = 0) {
  if (depth > 12) fail("State is too deeply nested.");
  if (typeof value === "string" && value.length > 10000)
    fail("State contains an oversized string.");
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    if (value.length > 2000) fail("State contains an oversized list.");
    value.forEach((entry) => inspect(entry, depth + 1));
    return;
  }
  plain(value, "State value");
  for (const key of Object.keys(value)) {
    if (FORBIDDEN.has(key)) fail("State contains a forbidden property name.");
    if (SENSITIVE.has(key.toLowerCase()))
      fail("State must not contain credentials or secret configuration.");
    inspect(value[key], depth + 1);
  }
}
function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return (
    !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value
  );
}
function nonNegative(value, label, max = MAX_QTY) {
  if (!Number.isFinite(value) || value < 0 || value > max)
    fail(
      `${label} must be a finite non-negative number no greater than ${max}.`,
    );
}
function shortString(value, label, max = 500) {
  if (typeof value !== "string" || !value.trim() || value.length > max)
    fail(`${label} is invalid.`);
}
function safeId(value, label) {
  if (
    typeof value !== "string" ||
    !/^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(value)
  )
    fail(`${label} is invalid.`);
}
const COUNT_UNITS = new Set(["count", "pieces", "bunches", "cloves", "slices"]);
function conversion(value, unit, label) {
  if (value === null) return;
  if (
    !COUNT_UNITS.has(unit) ||
    !Number.isFinite(value) ||
    value <= 0 ||
    value > MAX_QTY
  )
    fail(`${label} conversion is invalid.`);
}
function ingredient(value, label) {
  if (value !== null) safeId(value, `${label} ingredient id`);
}
function usage(value, label, positive = false) {
  plain(value, label);
  safeId(value.id, `${label} stock id`);
  safeId(value.ingredientId, `${label} ingredient id`);
  shortString(value.name, `${label} name`, 200);
  nonNegative(value.qty, `${label} quantity`);
  if (positive && value.qty === 0) fail(`${label} quantity must be positive.`);
  if (!UNITS.has(value.unit)) fail(`${label} unit is invalid.`);
  conversion(value.gramsPerUnit, value.unit, label);
}
function uniqueIds(values, label) {
  if (new Set(values.map((value) => value.id)).size !== values.length)
    fail(`${label} contains duplicate stock ids.`);
}
function validateItem(item, id) {
  plain(item, `Item ${id}`);
  if (
    typeof item.name !== "string" ||
    !item.name.trim() ||
    item.name.length > 200
  )
    fail(`Item ${id} has an invalid name.`);
  nonNegative(item.qty, `Item ${id} quantity`);
  if (!UNITS.has(item.unit)) fail(`Item ${id} has an unsupported unit.`);
  if (item.ingredientId !== undefined)
    ingredient(item.ingredientId, `Item ${id}`);
  if (item.gramsPerUnit !== undefined)
    conversion(item.gramsPerUnit, item.unit, `Item ${id}`);
  if (typeof item.storage !== "string" || !ITEM_AREAS.has(item.storage))
    fail(`Item ${id} has an invalid storage location.`);
  for (const field of ["expiry", "printedExpiry"])
    if (
      item[field] !== undefined &&
      item[field] !== null &&
      !validDate(item[field])
    )
      fail(`Item ${id} has an invalid ${field} date.`);
  if (item.estimated !== undefined && typeof item.estimated !== "boolean")
    fail(`Item ${id} has an invalid estimated-expiry flag.`);
  if (
    item.expiryProvenance !== undefined &&
    !PROVENANCE.has(item.expiryProvenance)
  )
    fail(`Item ${id} has invalid expiry provenance.`);
  if (item.low !== undefined)
    nonNegative(item.low, `Item ${id} low-stock value`);
  for (const field of ["category", "photo", "locationNote"])
    if (
      item[field] !== undefined &&
      (typeof item[field] !== "string" || item[field].length > 500)
    )
      fail(`Item ${id} has invalid ${field} metadata.`);
}

export function validateState(value) {
  inspect(value);
  const state = plain(value, "State");
  if (state.version !== 1) fail("Unsupported state version.");
  const items = plain(state.items, "Items");
  if (Object.keys(items).length > MAX_ITEMS)
    fail(`Inventory exceeds ${MAX_ITEMS} items.`);
  for (const [id, item] of Object.entries(items)) {
    if (!/^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(id))
      fail("Inventory contains an invalid item id.");
    validateItem(item, id);
  }
  const tools = plain(state.tools, "Tools");
  if (Object.keys(tools).length > 100) fail("Tools list is too large.");
  for (const [id, enabled] of Object.entries(tools)) {
    safeId(id, "Tool id");
    if (typeof enabled !== "boolean") fail(`Tool ${id} must be boolean.`);
  }
  const servings = plain(state.servings, "Servings");
  for (const [id, count] of Object.entries(servings)) {
    safeId(id, "Serving recipe id");
    if (!Number.isFinite(count) || count < 1 || count > 100)
      fail(`Serving count for ${id} is invalid.`);
  }
  const swaps = plain(state.swaps, "Swaps");
  for (const [key, selected] of Object.entries(swaps)) {
    safeId(key, "Swap key");
    if (selected !== "skip") safeId(selected, "Swap item id");
  }
  const profile = plain(state.profile, "Profile");
  if (
    !Array.isArray(profile.allergies) ||
    profile.allergies.some((x) => typeof x !== "string")
  )
    fail("Profile allergies must be a string list.");
  if (!Number.isFinite(profile.time) || profile.time < 1 || profile.time > 1440)
    fail("Profile time is invalid.");
  if (
    !Number.isInteger(profile.household) ||
    profile.household < 1 ||
    profile.household > 100
  )
    fail("Profile household is invalid.");
  if (typeof profile.cuisine !== "string" || !profile.cuisine)
    fail("Profile cuisine is invalid.");
  if (!Number.isSafeInteger(state.budget) || state.budget <= 0)
    fail("Budget must be a positive safe integer.");
  for (const field of ["meals", "shopping", "receipts", "chat"])
    if (!Array.isArray(state[field])) fail(`${field} must be a list.`);
  if (state.scanImports !== undefined) {
    if (
      !Array.isArray(state.scanImports) ||
      state.scanImports.length > MAX_SCAN_IMPORTS
    )
      fail("Scan imports are invalid.");
    for (const entry of state.scanImports) {
      plain(entry, "Scan import");
      if (!HEX_DIGEST.test(entry.fingerprint))
        fail("Scan import fingerprint is invalid.");
      if (!HEX_DIGEST.test(entry.signature))
        fail("Scan import signature is invalid.");
      if (typeof entry.financeExcluded !== "boolean")
        fail("Scan import finance exclusion is invalid.");
      if (
        Object.keys(entry).some(
          (key) =>
            !["fingerprint", "signature", "financeExcluded"].includes(key),
        )
      )
        fail("Scan import contains an unknown field.");
    }
  }
  for (const entry of state.shopping) {
    plain(entry, "Shopping entry");
    safeId(entry.id, "Shopping item id");
    shortString(entry.reason, "Shopping reason");
    if (typeof entry.got !== "boolean")
      fail("Shopping completion flag must be boolean.");
  }
  for (const receipt of state.receipts) {
    plain(receipt, "Receipt");
    shortString(receipt.source, "Receipt source", 128);
    shortString(receipt.name, "Receipt name", 200);
    if (
      receipt.fingerprint !== undefined &&
      !HEX_DIGEST.test(receipt.fingerprint)
    )
      fail("Receipt fingerprint is invalid.");
    if (
      receipt.currency !== undefined &&
      receipt.currency !== null &&
      (typeof receipt.currency !== "string" ||
        !/^[A-Z]{3}$/.test(receipt.currency))
    )
      fail("Receipt currency is invalid.");
    for (const field of ["date", "receiptDate"])
      if (
        receipt[field] !== undefined &&
        receipt[field] !== null &&
        !validDate(receipt[field])
      )
        fail("Receipt date is invalid.");
    for (const field of ["totalMinor", "taxMinor", "discountMinor"])
      if (
        receipt[field] !== undefined &&
        receipt[field] !== null &&
        (!Number.isSafeInteger(receipt[field]) ||
          receipt[field] < 0 ||
          receipt[field] > 1e12)
      )
        fail(`Receipt ${field} total is invalid.`);
    if (
      receipt.financeExcluded !== undefined &&
      typeof receipt.financeExcluded !== "boolean"
    )
      fail("Receipt finance exclusion is invalid.");
    if (!Array.isArray(receipt.lines) || receipt.lines.length > 500)
      fail("Receipt lines are invalid.");
    for (const line of receipt.lines) {
      plain(line, "Receipt line");
      safeId(line.id, "Receipt item id");
      shortString(line.name, "Receipt item name", 200);
      nonNegative(line.qty, "Receipt quantity");
      if (
        !Number.isSafeInteger(line.cents) ||
        line.cents < 0 ||
        line.cents > 1e12
      )
        fail("Receipt amount is invalid.");
      if (
        line.expiry !== undefined &&
        line.expiry !== null &&
        !validDate(line.expiry)
      )
        fail("Receipt expiry is invalid.");
    }
  }
  for (const entry of state.chat) {
    plain(entry, "Chat entry");
    shortString(entry.q, "Chat question", 1000);
    shortString(entry.a, "Chat answer", 5000);
  }
  const mealIds = new Set();
  const mealSessionIds = new Set();
  for (const meal of state.meals) {
    plain(meal, "Meal");
    safeId(meal.id, "Meal id");
    if (mealIds.has(meal.id)) fail("Meal history contains duplicate meal ids.");
    mealIds.add(meal.id);
    safeId(meal.rid, "Meal recipe id");
    if (!validDate(meal.date)) fail("Meal date is invalid.");
    if (!Array.isArray(meal.used) || meal.used.length > 500)
      fail("Meal usage is invalid.");
    const modern = ["cookingSessionId", "status"].some((key) =>
      Object.hasOwn(meal, key),
    );
    if (modern) {
      safeId(meal.cookingSessionId, "Meal cooking session id");
      if (mealSessionIds.has(meal.cookingSessionId))
        fail("Meal history contains duplicate cooking session ids.");
      mealSessionIds.add(meal.cookingSessionId);
      if (meal.id !== meal.cookingSessionId)
        fail("Meal and cooking session ids must match.");
      if (!["completed", "undone"].includes(meal.status))
        fail("Meal status is invalid.");
    }
    uniqueIds(meal.used, "Meal usage");
    for (const used of meal.used) {
      plain(used, "Meal usage");
      safeId(used.id, "Used item id");
      nonNegative(used.qty, "Used quantity");
      if (
        modern ||
        ["unit", "ingredientId", "name", "gramsPerUnit"].some((key) =>
          Object.hasOwn(used, key),
        )
      )
        usage(used, "Meal usage");
    }
  }
  if (state.cooking !== null) {
    const cooking = plain(state.cooking, "Cooking session");
    safeId(cooking.rid, "Cooking recipe id");
    const modern = [
      "id",
      "phase",
      "recipeName",
      "servings",
      "prepared",
      "toolsConfirmed",
      "startedAt",
      "requirements",
      "allocations",
    ].some((key) => Object.hasOwn(cooking, key));
    if (modern) {
      safeId(cooking.id, "Cooking session id");
      if (mealIds.has(cooking.id) || mealSessionIds.has(cooking.id))
        fail("Active cooking session already exists in meal history.");
      shortString(cooking.recipeName, "Cooking recipe name", 200);
      if (
        !Number.isInteger(cooking.servings) ||
        cooking.servings < 1 ||
        cooking.servings > 12
      )
        fail("Cooking servings are invalid.");
      if (!["prep", "cooking", "review"].includes(cooking.phase))
        fail("Cooking phase is invalid.");
      if (!Array.isArray(cooking.prepared))
        fail("Prepared ingredients are invalid.");
      cooking.prepared.forEach((id) => safeId(id, "Prepared ingredient id"));
      if (new Set(cooking.prepared).size !== cooking.prepared.length)
        fail("Prepared ingredients contain duplicates.");
      if (typeof cooking.toolsConfirmed !== "boolean")
        fail("Cooking tools confirmation is invalid.");
      if (
        typeof cooking.startedAt !== "string" ||
        !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.test(
          cooking.startedAt,
        ) ||
        !Number.isFinite(Date.parse(cooking.startedAt)) ||
        !validDate(cooking.startedAt.slice(0, 10))
      )
        fail("Cooking start timestamp is invalid.");
      if (
        new Date(cooking.startedAt).toISOString().slice(0, 19) !==
        cooking.startedAt.slice(0, 19)
      )
        fail("Cooking start timestamp is invalid.");
      if (cooking.deadline === undefined) fail("Cooking deadline is required.");
      if (cooking.phase !== "cooking" && cooking.running)
        fail("Only cooking phase can run a timer.");
      if (
        !Array.isArray(cooking.requirements) ||
        !Array.isArray(cooking.allocations)
      )
        fail("Cooking requirements or allocations are invalid.");
      for (const requirement of cooking.requirements) {
        plain(requirement, "Cooking requirement");
        safeId(requirement.ingredientId, "Requirement ingredient id");
        nonNegative(requirement.qty, "Requirement quantity");
        if (requirement.qty === 0 || !UNITS.has(requirement.unit))
          fail("Cooking requirement is invalid.");
      }
      const requiredIngredients = new Set(
        cooking.requirements.map((entry) => entry.ingredientId),
      );
      const preparedIngredients = new Set(cooking.prepared);
      if (cooking.prepared.some((id) => !requiredIngredients.has(id)))
        fail("Prepared ingredient is not required by the cooking session.");
      if (
        cooking.phase !== "prep" &&
        (!cooking.toolsConfirmed ||
          [...requiredIngredients].some((id) => !preparedIngredients.has(id)))
      )
        fail(
          "Cooking and review phases require confirmed tools and all ingredients prepared.",
        );
      cooking.allocations.forEach((value) =>
        usage(value, "Cooking allocation", true),
      );
      uniqueIds(cooking.allocations, "Cooking allocations");
    }
    if (
      !Number.isInteger(cooking.step) ||
      cooking.step < 0 ||
      cooking.step > 1000
    )
      fail("Cooking step is invalid.");
    nonNegative(cooking.seconds, "Cooking seconds", 86400);
    if (typeof cooking.running !== "boolean")
      fail("Cooking running flag is invalid.");
    if (
      cooking.deadline !== undefined &&
      cooking.deadline !== null &&
      (!Number.isSafeInteger(cooking.deadline) || cooking.deadline < 0)
    )
      fail("Cooking deadline is invalid.");
    for (const field of ["notificationId", "notificationGeneration"])
      if (
        cooking[field] !== undefined &&
        cooking[field] !== null &&
        (!Number.isSafeInteger(cooking[field]) || cooking[field] < 0)
      )
        fail(`Cooking ${field} is invalid.`);
  }
  if (typeof state.route !== "string" || state.route.length > 32)
    fail("Route is invalid.");
  if (
    state.search !== undefined &&
    (typeof state.search !== "string" || state.search.length > 200)
  )
    fail("Inventory search is invalid.");
  if (!SORTS.has(state.sort)) fail("Inventory sort is invalid.");
  if (!AREAS.has(state.storage)) fail("Inventory filter is invalid.");
  if (typeof state.matchOnly !== "boolean")
    fail("Recipe match filter is invalid.");
  if (state.recipe !== null && typeof state.recipe !== "string")
    fail("Recipe selection is invalid.");
  return value;
}

const copy = (value) => JSON.parse(JSON.stringify(value));
function freshState(data) {
  return {
    version: 1,
    route: "kitchen",
    items: {},
    tools: Object.fromEntries(
      (data?.tools || []).map((x) => [x.id, Boolean(x.on)]),
    ),
    sort: "expiry",
    storage: "All",
    servings: {},
    swaps: {},
    matchOnly: false,
    recipe: data?.recipes?.[0]?.id || null,
    cooking: null,
    meals: [],
    shopping: [],
    receipts: [],
    scanImports: [],
    budget: 160000,
    profile: { allergies: [], cuisine: "Any", time: 20, household: 2 },
    chat: [],
  };
}
function parseStored(raw) {
  if (raw == null || raw === "") return null;
  const serialized = typeof raw === "string" ? raw : JSON.stringify(raw);
  if (new TextEncoder().encode(serialized).length > MAX_STATE_BYTES)
    fail("Saved state exceeds size limit.");
  const value = typeof raw === "string" ? JSON.parse(raw) : raw;
  return validateState(value);
}

function normalizeForData(value, data, { includeScanImports = false } = {}) {
  const state = copy(value);
  if (includeScanImports && !Array.isArray(state.scanImports))
    state.scanImports = [];
  if (!ROUTES.has(state.route)) state.route = "kitchen";
  const recipes = new Map(
    (data?.recipes || []).map((recipe) => [recipe.id, recipe]),
  );
  if (!recipes.has(state.recipe)) state.recipe = data?.recipes?.[0]?.id || null;
  if (state.cooking) {
    const recipe = recipes.get(state.cooking.rid);
    if (!recipe || state.cooking.step >= (recipe.steps?.length || 0))
      state.cooking = null;
  }
  return state;
}

export function createStateStore({
  data = {},
  native = null,
  storage = null,
  now = () => new Date(),
} = {}) {
  let writeTail = Promise.resolve();
  let recoveryRequired = false;
  const nativeMode = Boolean(
    native?.isNative && native?.loadDraft && native?.saveDraft,
  );
  function persist(state, explicitRecovery = false) {
    let snapshot;
    try {
      validateState(state);
      snapshot = normalizeForData(state, data);
      const serialized = JSON.stringify(snapshot);
      if (new TextEncoder().encode(serialized).length > MAX_STATE_BYTES)
        fail("Saved state exceeds size limit.");
      if (recoveryRequired && !explicitRecovery)
        fail(
          "Saved data is corrupt. Confirm reset or backup replacement before writing.",
        );
    } catch (error) {
      return Promise.reject(error);
    }
    const write = async () => {
      if (nativeMode) await native.saveDraft(NATIVE_KEY, snapshot);
      else {
        if (!storage?.setItem)
          throw new Error("Persistent storage is unavailable.");
        storage.setItem(CURRENT_KEY, JSON.stringify(snapshot));
      }
      if (explicitRecovery) recoveryRequired = false;
    };
    const result = writeTail.then(write, write);
    writeTail = result.catch(() => {});
    return result;
  }
  const save = (state) => persist(state, false);
  const replace = (state) => persist(state, true);
  async function load() {
    try {
      const raw = nativeMode
        ? await native.loadDraft(NATIVE_KEY)
        : storage?.getItem(CURRENT_KEY);
      const current = parseStored(raw);
      if (current)
        return {
          state: normalizeForData(current, data, { includeScanImports: true }),
          recoveryRequired: false,
        };
    } catch (error) {
      recoveryRequired = true;
      return {
        state: freshState(data),
        recoveryRequired: true,
        notice: `Saved kitchen data could not be read and was left unchanged: ${error?.message || "invalid data"}`,
      };
    }
    try {
      const legacy = parseStored(storage?.getItem(LEGACY_KEY));
      if (legacy) {
        await save(legacy);
        return {
          state: normalizeForData(legacy, data, { includeScanImports: true }),
          recoveryRequired: false,
          notice: "Existing kitchen data migrated.",
        };
      }
    } catch (error) {
      recoveryRequired = true;
      return {
        state: freshState(data),
        recoveryRequired: true,
        notice: `Old kitchen data was invalid and was left unchanged: ${error?.message || "invalid data"}`,
      };
    }
    return { state: freshState(data), recoveryRequired: false };
  }
  function exportBackup(state) {
    validateState(state);
    const suppliedNow = now();
    const date =
      suppliedNow instanceof Date ? suppliedNow : new Date(suppliedNow);
    if (Number.isNaN(date.valueOf())) fail("Backup timestamp is invalid.");
    const text = JSON.stringify({
      format: "nomli-backup",
      version: 1,
      exportedAt: date.toISOString(),
      state: copy(state),
    });
    if (new TextEncoder().encode(text).length > MAX_BACKUP_BYTES)
      fail("Backup exceeds size limit.");
    return text;
  }
  function parseBackup(text) {
    if (typeof text !== "string") fail("Backup must be text.");
    if (new TextEncoder().encode(text).length > MAX_BACKUP_BYTES)
      fail("Backup exceeds size limit.");
    let envelope;
    try {
      envelope = JSON.parse(text);
    } catch {
      fail("Backup is not valid JSON.");
    }
    inspect(envelope);
    plain(envelope, "Backup");
    if (envelope.format !== "nomli-backup" || envelope.version !== 1)
      fail("Unsupported backup format.");
    validateState(envelope.state);
    return normalizeForData(envelope.state, data);
  }
  return { load, save, replace, exportBackup, parseBackup };
}

export const STATE_STORE_LIMITS = Object.freeze({
  maxBackupBytes: MAX_BACKUP_BYTES,
  maxStateBytes: MAX_STATE_BYTES,
  maxItems: MAX_ITEMS,
  maxScanImports: MAX_SCAN_IMPORTS,
  maxQty: MAX_QTY,
});
