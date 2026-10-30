import { validateScanDraft } from "./scan-domain.js";

const RECORD_ID = /^r_[a-f0-9]{32}$/;
const SOURCES = new Set([
  "groceries",
  "expiry",
  "receipt-paper",
  "receipt-digital",
]);
const STAGES = new Set(["scanning", "review", "retry"]);
const MAX_FIELDS = 6000;

const plain = (value) =>
  value !== null && typeof value === "object" && !Array.isArray(value);

function fail(message) {
  throw new TypeError(message);
}

function ownKeys(value, allowed, label) {
  for (const key of Object.keys(value)) {
    if (!allowed.has(key)) fail(`${label} contains unsupported field ${key}.`);
  }
}

function fieldRules(draft) {
  const rules = new Map();
  const text = (name, max) => rules.set(name, { kind: "text", max });
  const check = (name) => rules.set(name, { kind: "check" });
  for (const line of draft.lines) {
    const suffix = line.lineId;
    check(`include-${suffix}`);
    text(`name-${suffix}`, 200);
    text(`quantity-${suffix}`, 128);
    text(`unit-${suffix}`, 32);
    text(`category-${suffix}`, 128);
    text(`storage-${suffix}`, 32);
    text(`expiry-${suffix}`, 10);
    text(`cook-${suffix}-ingredientId`, 128);
    text(`cook-${suffix}-gramsPerUnit`, 128);
    text(`cost-${suffix}`, 128);
    text(`target-${suffix}`, 128);
  }
  if (draft.kind === "receipt") {
    text("scanMerchant", 200);
    text("scanReceiptDate", 10);
    text("scanCurrency", 3);
    text("scanTotal", 128);
    text("scanTax", 128);
    text("scanDiscount", 128);
    check("excludeFinance");
  }
  return rules;
}

function elementFor(form, name) {
  const element = form?.elements?.namedItem?.(name) ?? form?.elements?.[name];
  if (!element || typeof element !== "object" || element.name !== name)
    return null;
  return element;
}

function validateFieldState(value, rule, name) {
  if (!plain(value)) fail(`Saved field ${name} is invalid.`);
  const allowed = new Set(
    rule.kind === "check"
      ? ["checked", "userTouched"]
      : ["value", "userTouched", "cookAuto", "cookOptout"],
  );
  ownKeys(value, allowed, `Saved field ${name}`);
  if (rule.kind === "check") {
    if (typeof value.checked !== "boolean")
      fail(`Saved field ${name} is invalid.`);
  } else if (typeof value.value !== "string" || value.value.length > rule.max) {
    fail(`Saved field ${name} is invalid.`);
  }
  for (const key of ["userTouched", "cookAuto", "cookOptout"]) {
    if (Object.hasOwn(value, key) && typeof value[key] !== "boolean")
      fail(`Saved field ${name} metadata is invalid.`);
  }
  return structuredClone(value);
}

function validateWizard(value, lineCount) {
  if (!plain(value))
    return { index: 0, reviewed: Array(lineCount).fill(false) };
  ownKeys(value, new Set(["index", "reviewed"]), "Saved wizard");
  if (
    !Number.isInteger(value.index) ||
    value.index < 0 ||
    value.index > lineCount
  )
    fail("Saved wizard index is invalid.");
  if (
    !Array.isArray(value.reviewed) ||
    value.reviewed.length > 500 ||
    value.reviewed.some((entry) => typeof entry !== "boolean")
  )
    fail("Saved wizard review state is invalid.");
  return { index: value.index, reviewed: [...value.reviewed] };
}

function validateFormSnapshot(value, draft) {
  if (value === null) return null;
  if (!plain(value)) fail("Saved scan form is invalid.");
  ownKeys(value, new Set(["fields", "wizard"]), "Saved scan form");
  if (!plain(value.fields) || Object.keys(value.fields).length > MAX_FIELDS)
    fail("Saved scan fields are invalid.");
  const rules = fieldRules(draft);
  const fields = {};
  for (const [name, state] of Object.entries(value.fields)) {
    const rule = rules.get(name);
    if (!rule || name === "confirmed")
      fail(`Unsupported saved scan field ${name}.`);
    fields[name] = validateFieldState(state, rule, name);
  }
  return { fields, wizard: validateWizard(value.wizard, draft.lines.length) };
}

function safeDraft(value) {
  validateScanDraft(value);
  ownKeys(
    value,
    new Set([
      "version",
      "kind",
      "fingerprint",
      "merchant",
      "currency",
      "receiptDate",
      "totalMinor",
      "taxMinor",
      "discountMinor",
      "lines",
      "warnings",
    ]),
    "Scan draft",
  );
  const lineKeys = new Set([
    "lineId",
    "name",
    "ingredientId",
    "quantity",
    "unit",
    "lineTotalMinor",
    "expiry",
    "expiryProvenance",
    "storage",
    "categoryId",
    "warnings",
    "photoRegion",
  ]);
  value.lines.forEach((line, index) => {
    ownKeys(line, lineKeys, `Scan draft line ${index + 1}`);
    if (Object.hasOwn(line, "photoRegion") && line.photoRegion !== null) {
      if (!plain(line.photoRegion)) fail("Scan draft photo region is invalid.");
      ownKeys(
        line.photoRegion,
        new Set(["x", "y", "width", "height"]),
        "Scan draft photo region",
      );
      const { x, y, width, height } = line.photoRegion;
      if (
        ![x, y, width, height].every(Number.isFinite) ||
        x < 0 ||
        y < 0 ||
        width <= 0 ||
        height <= 0 ||
        x + width > 1 ||
        y + height > 1
      )
        fail("Scan draft photo region is invalid.");
    }
  });
  return structuredClone(value);
}

export function captureScanReview(form, wizard, draft) {
  validateScanDraft(draft);
  const fields = {};
  for (const [name, rule] of fieldRules(draft)) {
    const element = elementFor(form, name);
    if (!element || element.disabled || name === "confirmed") continue;
    const state =
      rule.kind === "check"
        ? { checked: Boolean(element.checked) }
        : { value: String(element.value ?? "").slice(0, rule.max) };
    if (Object.hasOwn(element.dataset ?? {}, "userTouched"))
      state.userTouched = element.dataset.userTouched === "1";
    if (Object.hasOwn(element.dataset ?? {}, "cookAuto"))
      state.cookAuto = element.dataset.cookAuto === "1";
    if (Object.hasOwn(element.dataset ?? {}, "cookOptout"))
      state.cookOptout = element.dataset.cookOptout === "1";
    fields[name] = state;
  }
  return {
    fields,
    wizard: validateWizard(wizard?.snapshot?.(), draft.lines.length),
  };
}

function optionAccepts(element, value) {
  if (!element?.options) return true;
  return [...element.options].some((option) => option.value === value);
}

function cardIndexFor(element, draft) {
  const lineId = element?.closest?.("[data-scan-card]")?.dataset?.lineId;
  return draft.lines.findIndex((line) => line.lineId === lineId);
}

export function restoreScanReview(form, wizard, snapshot, draft) {
  const activeDraft = draft ?? {
    kind: elementFor(form, "scanMerchant") ? "receipt" : "groceries",
    lines: [...(form?.querySelectorAll?.("[data-scan-card]") ?? [])]
      .map((card) => ({ lineId: card.dataset?.lineId }))
      .filter((line) => typeof line.lineId === "string"),
  };
  if (draft) validateScanDraft(draft);
  const saved = validateFormSnapshot(snapshot, activeDraft) ?? {
    fields: {},
    wizard: { index: 0, reviewed: Array(activeDraft.lines.length).fill(false) },
  };
  const warnings = [];
  const wizardState = {
    index: saved.wizard.index,
    reviewed: Array(activeDraft.lines.length).fill(false),
  };
  if (saved.wizard.reviewed.length === activeDraft.lines.length)
    wizardState.reviewed = [...saved.wizard.reviewed];
  else if (
    wizardState.index === activeDraft.lines.length &&
    activeDraft.lines.length
  )
    wizardState.index = 0;

  for (const [name, state] of Object.entries(saved.fields)) {
    const element = elementFor(form, name);
    if (!element) {
      warnings.push(`Saved field ${name} is no longer available.`);
      continue;
    }
    if (Object.hasOwn(state, "checked")) element.checked = state.checked;
    else if (!optionAccepts(element, state.value)) {
      element.value = "";
      const index = cardIndexFor(element, activeDraft);
      if (index >= 0) wizardState.reviewed[index] = false;
      warnings.push(
        `Saved choice for ${name} is no longer available; review this item again.`,
      );
    } else element.value = state.value;
    for (const [key, datasetKey] of [
      ["userTouched", "userTouched"],
      ["cookAuto", "cookAuto"],
      ["cookOptout", "cookOptout"],
    ]) {
      if (Object.hasOwn(state, key))
        element.dataset[datasetKey] = state[key] ? "1" : "0";
      else if (element.dataset) delete element.dataset[datasetKey];
    }
  }
  if (form?.elements?.confirmed) form.elements.confirmed.checked = false;
  wizard?.restore?.(wizardState);
  return { warnings };
}

export function validateScanRecovery(record) {
  if (!plain(record)) fail("Scan recovery record is invalid.");
  ownKeys(
    record,
    new Set([
      "id",
      "source",
      "stage",
      "draft",
      "form",
      "sourceAssetId",
      "crops",
    ]),
    "Scan recovery record",
  );
  if (!RECORD_ID.test(record.id)) fail("Scan recovery id is invalid.");
  if (!SOURCES.has(record.source)) fail("Scan recovery source is invalid.");
  if (!STAGES.has(record.stage)) fail("Scan recovery stage is invalid.");
  const draft = record.draft === null ? null : safeDraft(record.draft);
  const expectedKind =
    record.source === "expiry"
      ? "expiry"
      : record.source.startsWith("receipt")
        ? "receipt"
        : "groceries";
  if (draft && draft.kind !== expectedKind)
    fail("Saved scan source and draft kind do not match.");
  if (record.stage === "review" && !draft)
    fail("Saved review requires a scan draft.");
  if (record.form !== null && !draft)
    fail("Scan recovery form requires a draft.");
  const form = draft ? validateFormSnapshot(record.form, draft) : null;
  if (record.sourceAssetId !== null && !RECORD_ID.test(record.sourceAssetId))
    fail("Scan recovery source asset id is invalid.");
  if (!Array.isArray(record.crops) || record.crops.length > 500)
    fail("Scan recovery crops are invalid.");
  const lineIds = new Set(draft?.lines.map((line) => line.lineId) ?? []);
  const seen = new Set();
  const crops = record.crops.map((crop) => {
    if (!plain(crop)) fail("Scan recovery crop is invalid.");
    ownKeys(
      crop,
      new Set(["lineId", "assetId", "region"]),
      "Scan recovery crop",
    );
    if (!lineIds.has(crop.lineId) || seen.has(crop.lineId))
      fail("Scan recovery crop does not belong to this draft.");
    if (!RECORD_ID.test(crop.assetId))
      fail("Scan recovery crop asset id is invalid.");
    seen.add(crop.lineId);
    let region = null;
    if (crop.region !== null) {
      if (!plain(crop.region)) fail("Scan recovery crop region is invalid.");
      ownKeys(
        crop.region,
        new Set(["x", "y", "width", "height"]),
        "Crop region",
      );
      const { x, y, width, height } = crop.region;
      if (
        ![x, y, width, height].every(Number.isFinite) ||
        x < 0 ||
        y < 0 ||
        width <= 0 ||
        height <= 0 ||
        x + width > 1 ||
        y + height > 1
      )
        fail("Scan recovery crop region is invalid.");
      region = { x, y, width, height };
    }
    return { lineId: crop.lineId, assetId: crop.assetId, region };
  });
  return {
    id: record.id,
    source: record.source,
    stage: record.stage,
    draft,
    form,
    sourceAssetId: record.sourceAssetId,
    crops,
  };
}
