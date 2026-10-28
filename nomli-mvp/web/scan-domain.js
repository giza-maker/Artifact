"use strict";

import { currencyDigits } from "./scan-money.js";
import { getFoodCategory } from "./food-categories.js";

const KINDS = new Set(["groceries", "receipt", "expiry"]);
const UNITS = new Set(["g", "kg", "ml", "l", "count", "pieces", "bunches", "cloves", "slices"]);
const STORAGE = new Set(["Fridge", "Freezer", "Pantry", "Spices"]);
const UNIT_DIMENSION = { g: "mass", kg: "mass", ml: "volume", l: "volume" };
const UNIT_FACTOR = { g: 1, kg: 1000, ml: 1, l: 1000 };
const MONEY_LIMIT = 1e12;

// Optional image metadata never changes stock or finance review requirements.
export function normalizePhotoRegion(region) {
  if (!region || typeof region !== "object" || Array.isArray(region)) return null;
  const keys = ["x", "y", "width", "height"];
  if (Object.keys(region).length !== keys.length || keys.some(key => !Object.hasOwn(region, key) || typeof region[key] !== "number" || !Number.isFinite(region[key]))) return null;
  const { x, y, width, height } = region;
  if (x < 0 || y < 0 || width <= 0 || height <= 0 || x > 1 || y > 1 || width > 1 || height > 1 || x + width > 1 || y + height > 1) return null;
  return { x, y, width, height };
}

export class ScanDomainError extends TypeError {
  constructor(code, message) {
    super(message);
    this.name = "ScanDomainError";
    this.code = code;
  }
}

const fail = (code, message) => { throw new ScanDomainError(code, message); };
const copy = (value) => structuredClone(value);
const plain = (value) => value && typeof value === "object" && !Array.isArray(value);
const date = (value) => {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
};
const nullableString = (value, max) => value === null || (typeof value === "string" && value.trim() && value.length <= max);
const nullableMoney = (value) => value === null || (Number.isSafeInteger(value) && value >= 0 && value <= MONEY_LIMIT);
const nullableQty = (value) => value === null || (Number.isFinite(value) && value > 0 && value <= 1e9);

function validateLine(line, index) {
  if (!plain(line)) fail("INVALID_DRAFT", `Line ${index + 1} must be an object.`);
  if (typeof line.lineId !== "string" || !/^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(line.lineId)) fail("INVALID_DRAFT", `Line ${index + 1} has invalid id.`);
  if (!nullableString(line.name, 200)) fail("INVALID_DRAFT", `Line ${index + 1} has invalid name.`);
  if (line.ingredientId !== null && (typeof line.ingredientId !== "string" || !line.ingredientId)) fail("INVALID_DRAFT", `Line ${index + 1} has invalid ingredient id.`);
  if (!nullableQty(line.quantity)) fail("INVALID_DRAFT", `Line ${index + 1} has invalid quantity.`);
  if (line.unit !== null && !UNITS.has(line.unit)) fail("INVALID_DRAFT", `Line ${index + 1} has unsupported unit.`);
  if (!nullableMoney(line.lineTotalMinor)) fail("INVALID_DRAFT", `Line ${index + 1} has invalid total.`);
  if (line.expiry !== null && !date(line.expiry)) fail("INVALID_DRAFT", `Line ${index + 1} has invalid expiry.`);
  if (line.expiryProvenance !== null && line.expiryProvenance !== "printed") fail("INVALID_DRAFT", `Line ${index + 1} has invalid expiry provenance.`);
  if (line.storage !== null && !STORAGE.has(line.storage)) fail("INVALID_DRAFT", `Line ${index + 1} has invalid storage.`);
  if (line.categoryId !== undefined && line.categoryId !== null && !getFoodCategory(line.categoryId)) fail("INVALID_DRAFT", `Line ${index + 1} has invalid food category.`);
  if (!Array.isArray(line.warnings) || line.warnings.length > 100 || line.warnings.some((x) => typeof x !== "string" || x.length > 500)) fail("INVALID_DRAFT", `Line ${index + 1} has invalid warnings.`);
}

export function validateScanDraft(value) {
  if (!plain(value) || value.version !== 1 || !KINDS.has(value.kind)) fail("INVALID_DRAFT", "Unsupported scan draft.");
  if (typeof value.fingerprint !== "string" || !/^[a-f0-9]{64}$/i.test(value.fingerprint)) fail("INVALID_DRAFT", "Scan fingerprint must be 64 hexadecimal characters.");
  if (!nullableString(value.merchant, 200)) fail("INVALID_DRAFT", "Merchant is invalid.");
  if (value.currency !== null && (typeof value.currency !== "string" || !/^[A-Z]{3}$/.test(value.currency))) fail("INVALID_DRAFT", "Currency is invalid.");
  if (value.receiptDate !== null && !date(value.receiptDate)) fail("INVALID_DRAFT", "Receipt date is invalid.");
  if (!nullableMoney(value.totalMinor)) fail("INVALID_DRAFT", "Receipt total is invalid.");
  if (!nullableMoney(value.taxMinor)) fail("INVALID_DRAFT", "Receipt tax is invalid.");
  if (!nullableMoney(value.discountMinor)) fail("INVALID_DRAFT", "Receipt discount is invalid.");
  if (!Array.isArray(value.lines) || value.lines.length === 0 || value.lines.length > 500) fail("INVALID_DRAFT", "Scan lines are invalid.");
  const ids = new Set();
  value.lines.forEach((line, index) => {
    validateLine(line, index);
    if (ids.has(line.lineId)) fail("INVALID_DRAFT", "Scan line ids must be unique.");
    ids.add(line.lineId);
  });
  if (!Array.isArray(value.warnings) || value.warnings.length > 100 || value.warnings.some((x) => typeof x !== "string" || x.length > 500)) fail("INVALID_DRAFT", "Draft warnings are invalid.");
  return value;
}

function catalogIds(catalog) {
  if (Array.isArray(catalog)) return new Set(catalog.map((x) => typeof x === "string" ? x : x?.id).filter(Boolean));
  return new Set(Object.keys(catalog || {}));
}

function reviewWarnings(values, diagnostics) {
  const warnings = [...new Set([
    ...(Array.isArray(values) ? values.filter((value) => typeof value === "string" && value.length <= 500) : []),
    ...diagnostics,
  ])];
  const required = new Set(diagnostics);
  let providerSlots = 100 - required.size;
  return warnings.filter((warning) => required.has(warning) || providerSlots-- > 0);
}

export function reviewScanDraft(raw, { catalog = [] } = {}) {
  if (!plain(raw)) fail("INVALID_DRAFT", "AI scan output must be an object.");
  const known = catalogIds(catalog);
  const lines = Array.isArray(raw.lines) ? raw.lines : [];
  const normalized = {
    version: 1,
    kind: KINDS.has(raw.kind) ? raw.kind : "groceries",
    fingerprint: typeof raw.fingerprint === "string" ? raw.fingerprint.toLowerCase() : "",
    merchant: typeof raw.merchant === "string" && raw.merchant.trim() ? raw.merchant.trim().slice(0, 200) : null,
    currency: typeof raw.currency === "string" && /^[A-Za-z]{3}$/.test(raw.currency) ? raw.currency.toUpperCase() : null,
    receiptDate: date(raw.receiptDate) ? raw.receiptDate : null,
    totalMinor: nullableMoney(raw.totalMinor) ? raw.totalMinor : null,
    taxMinor: raw.taxMinor === undefined ? 0 : (nullableMoney(raw.taxMinor) ? raw.taxMinor : null),
    discountMinor: raw.discountMinor === undefined ? 0 : (nullableMoney(raw.discountMinor) ? raw.discountMinor : null),
    lines: lines.map((line, index) => {
      const candidate = plain(line) ? line : {};
      const warnings = [];
      const quantity = nullableQty(candidate.quantity) ? candidate.quantity : null;
      const unit = UNITS.has(candidate.unit) ? candidate.unit : null;
      const storage = STORAGE.has(candidate.storage) ? candidate.storage : null;
      const expiry = date(candidate.expiry) ? candidate.expiry : null;
      const printedExpiry = expiry && candidate.expiryProvenance === "printed";
      if (!quantity) warnings.push("Quantity requires review.");
      if (!unit) warnings.push("Unit requires review.");
      if (!storage) warnings.push("Storage requires review.");
      if (candidate.ingredientId && !known.has(candidate.ingredientId)) warnings.push("Ingredient match was not grounded and was removed.");
      return {
        lineId: typeof candidate.lineId === "string" && /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(candidate.lineId) ? candidate.lineId : `line-${index + 1}`,
        name: typeof candidate.name === "string" && candidate.name.trim() ? candidate.name.trim().slice(0, 200) : null,
        ingredientId: known.has(candidate.ingredientId) ? candidate.ingredientId : null,
        quantity,
        unit,
        lineTotalMinor: nullableMoney(candidate.lineTotalMinor) ? candidate.lineTotalMinor : null,
        expiry: printedExpiry ? expiry : null,
        expiryProvenance: printedExpiry ? "printed" : null,
        storage,
        categoryId: getFoodCategory(candidate.categoryId)?.id ?? null,
        warnings: reviewWarnings(candidate.warnings, warnings),
        ...(raw.kind === "groceries" && Object.hasOwn(candidate, "photoRegion") ? { photoRegion: normalizePhotoRegion(candidate.photoRegion) } : {}),
      };
    }),
    warnings: [],
  };
  if (!normalized.currency && normalized.kind === "receipt") normalized.warnings.push("Currency requires review; finance import excluded.");
  if (normalized.totalMinor === null && normalized.kind === "receipt") normalized.warnings.push("Receipt total requires review; finance import excluded.");
  if ((normalized.taxMinor === null || normalized.discountMinor === null) && normalized.kind === "receipt") normalized.warnings.push("Receipt tax or discount requires review; finance import excluded.");
  normalized.warnings = reviewWarnings(raw.warnings, normalized.warnings);
  validateScanDraft(normalized);
  return normalized;
}

export function convertScanQuantity(quantity, from, to) {
  if (from === to) return quantity;
  if (!UNIT_DIMENSION[from] || UNIT_DIMENSION[from] !== UNIT_DIMENSION[to]) fail("INCOMPATIBLE_UNITS", `Cannot convert ${from} to ${to}.`);
  return quantity * UNIT_FACTOR[from] / UNIT_FACTOR[to];
}

function editedDraft(draft, edits) {
  if (!plain(edits)) return copy(draft);
  const result = copy(draft);
  for (const key of ["merchant", "currency", "receiptDate", "totalMinor", "taxMinor", "discountMinor"]) if (Object.hasOwn(edits, key)) result[key] = edits[key];
  const lineEdits = plain(edits.lines) ? edits.lines : {};
  result.lines = result.lines.map((line) => ({ ...line, ...(plain(lineEdits[line.lineId]) ? lineEdits[line.lineId] : {}) }));
  return result;
}

function uniqueId(items, line) {
  const base = (`scan-${line.ingredientId || line.lineId}`).replace(/[^A-Za-z0-9._:-]/g, "-").slice(0, 120) || "scan-item";
  let id = base;
  for (let n = 2; Object.hasOwn(items, id); n += 1) id = `${base}-${n}`;
  return id;
}

function signatureDigest(text) {
  const words = Array.from({ length: 8 }, (_, index) => (0x811c9dc5 ^ Math.imul(index + 1, 0x9e3779b1)) >>> 0);
  for (let index = 0; index < text.length; index += 1) {
    const code = text.charCodeAt(index);
    for (let lane = 0; lane < words.length; lane += 1) {
      words[lane] ^= code + lane;
      words[lane] = Math.imul(words[lane], 0x01000193 + lane * 2) >>> 0;
      words[lane] = (words[lane] ^ (words[lane] >>> 13)) >>> 0;
    }
  }
  return words.map((word) => word.toString(16).padStart(8, "0")).join("");
}

function earlierExpiry(current, incoming) {
  if (!incoming) return current ?? null;
  if (!current) return incoming;
  return incoming < current ? incoming : current;
}

export function commitScanDraft(state, draft, { confirmed = false, edits = {}, mergeTargets = {}, excludedLineIds = [], excludeFinance = false } = {}) {
  if (!confirmed) fail("REVIEW_REQUIRED", "Explicit review confirmation is required.");
  if (!plain(state) || !plain(state.items) || !Array.isArray(state.receipts)) fail("INVALID_STATE", "Kitchen state is invalid.");
  const reviewed = editedDraft(draft, edits);
  validateScanDraft(reviewed);
  const excluded = new Set(excludedLineIds);
  const imports = Array.isArray(state.scanImports) ? state.scanImports : [];
  const prior = imports.find((x) => (typeof x === "string" ? x : x?.fingerprint) === reviewed.fingerprint);
  // Regions and categories affect local presentation only; old imports must replay unchanged.
  const signatureDraft = { ...reviewed, lines: reviewed.lines.map(({ photoRegion, categoryId, ...line }) => line) };
  const signature = signatureDigest(JSON.stringify({ draft: signatureDraft, excluded: [...excluded].sort(), mergeTargets: Object.entries(mergeTargets).sort(([a], [b]) => a.localeCompare(b)), excludeFinance }));
  if (prior) {
    if (plain(prior) && prior.signature && prior.signature !== signature) fail("IDEMPOTENCY_CONFLICT", "Fingerprint was already committed with different reviewed content.");
    return { state, replayed: true, importedItemIds: [], financeExcluded: prior.financeExcluded ?? true };
  }
  if (imports.length >= 2000) fail("EXPORT_LIMIT", "Scan import history reached 2,000 entries. Export or archive data before importing more.");
  const included = reviewed.lines.filter((line) => !excluded.has(line.lineId));
  if (!included.length) fail("EMPTY_IMPORT", "No scan lines selected.");
  for (const line of included) {
    if (!line.name) fail("REVIEW_REQUIRED", `Line ${line.lineId} still has unknown name.`);
    if (reviewed.kind === "expiry") {
      if (!Object.hasOwn(mergeTargets, line.lineId) || !mergeTargets[line.lineId] || !line.expiry || line.expiryProvenance !== "printed") fail("REVIEW_REQUIRED", `Expiry line ${line.lineId} requires existing item and printed date.`);
    } else if (line.quantity === null || line.unit === null || line.storage === null) fail("REVIEW_REQUIRED", `Line ${line.lineId} still has unknown stock fields.`);
  }
  const next = copy(state);
  const importedItemIds = [];
  for (const line of included) {
    const targetId = Object.hasOwn(mergeTargets, line.lineId) ? (mergeTargets[line.lineId] ?? null) : null;
    if (targetId !== null) {
      const target = Object.hasOwn(next.items, targetId) ? next.items[targetId] : null;
      if (!target) fail("INVALID_MERGE_TARGET", `Merge target ${targetId} does not exist.`);
      if (reviewed.kind !== "expiry") {
        const added = convertScanQuantity(line.quantity, line.unit, target.unit);
        const resultingQty = target.qty + added;
        if (!Number.isFinite(resultingQty) || resultingQty > 1e9) fail("INVALID_QUANTITY", `Merge quantity for ${targetId} exceeds supported limit.`);
        target.qty = resultingQty;
      }
      if (line.expiry !== null) {
        const retained = earlierExpiry(target.expiry, line.expiry);
        if (retained !== target.expiry) {
          target.expiry = retained;
          target.expiryProvenance = "printed";
        }
      }
      if (!target.categoryId && line.categoryId) target.categoryId = line.categoryId;
      importedItemIds.push(targetId);
    } else {
      if (reviewed.kind === "expiry") fail("INVALID_MERGE_TARGET", "Expiry scans cannot create stock items.");
      const id = uniqueId(next.items, line);
      next.items[id] = { name: line.name, qty: line.quantity, unit: line.unit, storage: line.storage, expiry: line.expiry, expiryProvenance: line.expiryProvenance, ...(line.categoryId ? { categoryId: line.categoryId } : {}) };
      importedItemIds.push(id);
    }
  }
  const financialLinesComplete = included.every((line) => line.lineTotalMinor !== null);
  const sum = financialLinesComplete ? included.reduce((total, line) => total + line.lineTotalMinor, 0) : null;
  const adjustmentsKnown = reviewed.taxMinor !== null && reviewed.discountMinor !== null;
  const expectedTotal = sum !== null && adjustmentsKnown ? sum + reviewed.taxMinor - reviewed.discountMinor : null;
  const invalidExpectedTotal = expectedTotal !== null && (!Number.isSafeInteger(expectedTotal) || expectedTotal < 0 || expectedTotal > MONEY_LIMIT);
  const totalMismatch = reviewed.totalMinor !== null && expectedTotal !== null && expectedTotal !== reviewed.totalMinor;
  const financeIncomplete = reviewed.kind === "receipt" && (reviewed.currency === null || currencyDigits(reviewed.currency) === null || reviewed.totalMinor === null || !financialLinesComplete || !adjustmentsKnown || excluded.size > 0 || totalMismatch || invalidExpectedTotal);
  if (financeIncomplete && !excludeFinance) {
    if (totalMismatch) fail("TOTAL_MISMATCH", "Receipt line totals do not match reviewed total; explicitly exclude finance to import stock only.");
    fail("FINANCE_REVIEW_REQUIRED", "Receipt finance fields are incomplete; explicitly exclude finance to import stock only.");
  }
  const financeExcluded = reviewed.kind !== "receipt" || Boolean(excludeFinance);
  if (reviewed.kind === "receipt") {
    next.receipts.push({
      source: "scan",
      name: reviewed.merchant || "Scanned receipt",
      fingerprint: reviewed.fingerprint,
      currency: reviewed.currency,
      receiptDate: reviewed.receiptDate,
      totalMinor: reviewed.totalMinor,
      taxMinor: reviewed.taxMinor,
      discountMinor: reviewed.discountMinor,
      financeExcluded,
      lines: included.map((line, index) => ({ id: importedItemIds[index], name: line.name, qty: line.quantity, cents: line.lineTotalMinor, expiry: line.expiry, ...(line.categoryId ? { categoryId: line.categoryId } : {}) })),
    });
  }
  next.scanImports = [...imports, { fingerprint: reviewed.fingerprint, financeExcluded, signature }];
  return { state: next, replayed: false, importedItemIds, financeExcluded };
}

export const SCAN_DRAFT_SCHEMA_VERSION = 1;
