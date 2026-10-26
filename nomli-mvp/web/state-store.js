"use strict";

const CURRENT_KEY = "nomli-kitchen-state-v1";
const LEGACY_KEY = "nomli-kitchen-mvp-v1";
const NATIVE_KEY = "state-v1";
const MAX_BACKUP_BYTES = 1024 * 1024;
const MAX_STATE_BYTES = 1024 * 1024;
const MAX_ITEMS = 500;
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
  for (const meal of state.meals) {
    plain(meal, "Meal");
    safeId(meal.id, "Meal id");
    safeId(meal.rid, "Meal recipe id");
    if (!validDate(meal.date)) fail("Meal date is invalid.");
    if (!Array.isArray(meal.used) || meal.used.length > 500)
      fail("Meal usage is invalid.");
    for (const used of meal.used) {
      plain(used, "Meal usage");
      safeId(used.id, "Used item id");
      nonNegative(used.qty, "Used quantity");
    }
  }
  if (state.cooking !== null) {
    const cooking = plain(state.cooking, "Cooking session");
    safeId(cooking.rid, "Cooking recipe id");
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

function normalizeForData(value, data) {
  const state = copy(value);
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
          state: normalizeForData(current, data),
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
          state: normalizeForData(legacy, data),
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
  maxQty: MAX_QTY,
});
