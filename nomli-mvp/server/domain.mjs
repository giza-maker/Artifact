import { createHash } from "node:crypto";
import {
  ConsumptionCommitSchema,
  ConsumptionPreviewSchema,
  ReceiptImportSchema,
} from "./contracts.mjs";

const UNIT = Object.freeze({
  g: { dimension: "mass", factor: 1 },
  kg: { dimension: "mass", factor: 1000 },
  ml: { dimension: "volume", factor: 1 },
  l: { dimension: "volume", factor: 1000 },
  count: { dimension: "count", factor: 1 },
});

export class DomainError extends Error {
  constructor(code, message, details) {
    super(message);
    this.name = "DomainError";
    this.code = code;
    if (details !== undefined) this.details = details;
  }
}

export function convertQuantity(quantity, fromUnit, toUnit) {
  if (!Number.isFinite(quantity) || quantity < 0) {
    throw new DomainError(
      "INVALID_QUANTITY",
      "Quantity must be finite and nonnegative",
    );
  }
  const from = UNIT[fromUnit];
  const to = UNIT[toUnit];
  if (!from || !to) {
    throw new DomainError(
      "AMBIGUOUS_UNIT",
      "Only g, kg, ml, l, and count are supported",
    );
  }
  if (from.dimension !== to.dimension) {
    throw new DomainError(
      "INCOMPATIBLE_UNITS",
      `Cannot convert ${fromUnit} to ${toUnit}`,
    );
  }
  return (quantity * from.factor) / to.factor;
}

export function toCanonicalQuantity(quantity, unit) {
  const spec = UNIT[unit];
  if (!spec)
    throw new DomainError("AMBIGUOUS_UNIT", `Unsupported unit: ${unit}`);
  const canonicalUnit =
    spec.dimension === "mass"
      ? "g"
      : spec.dimension === "volume"
        ? "ml"
        : "count";
  return {
    quantity: convertQuantity(quantity, unit, canonicalUnit),
    unit: canonicalUnit,
  };
}

export function verifyReceiptTotal(receipt) {
  const parsed = ReceiptImportSchema.parse(receipt);
  const linesMinor = parsed.lines.reduce(
    (sum, line) => sum + line.lineTotalMinor,
    0,
  );
  const expectedTotalMinor =
    linesMinor + parsed.taxMinor - parsed.discountMinor;
  return {
    valid: expectedTotalMinor === parsed.totalMinor,
    linesMinor,
    expectedTotalMinor,
    declaredTotalMinor: parsed.totalMinor,
  };
}

export function createDomainState(seed = {}) {
  return {
    inventory: { ...(seed.inventory ?? {}) },
    expenses: [...(seed.expenses ?? [])],
    shopping: [...(seed.shopping ?? [])],
    receipts: [...(seed.receipts ?? [])],
    consumptions: [...(seed.consumptions ?? [])],
    idempotency: { ...(seed.idempotency ?? {}) },
  };
}

function fingerprint(value) {
  return createHash("sha256").update(stableJson(value)).digest("hex");
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

function replayOrConflict(state, key, payload) {
  const prior = Object.hasOwn(state.idempotency, key)
    ? state.idempotency[key]
    : null;
  if (!prior) return null;
  if (prior.fingerprint !== fingerprint(payload)) {
    throw new DomainError(
      "IDEMPOTENCY_CONFLICT",
      "Idempotency key already used with different payload",
    );
  }
  return { state, transaction: prior.transaction, replayed: true };
}

export function importReviewedReceipt(state, input) {
  const receipt = ReceiptImportSchema.parse(input);
  if (!receipt.reviewed)
    throw new DomainError(
      "REVIEW_REQUIRED",
      "Receipt must be explicitly reviewed",
    );
  const replay = replayOrConflict(state, receipt.idempotencyKey, receipt);
  if (replay) return replay;
  const totals = verifyReceiptTotal(receipt);
  if (!totals.valid)
    throw new DomainError(
      "TOTAL_MISMATCH",
      "Receipt total does not match reviewed lines, tax, and discount",
      totals,
    );

  const inventory = { ...state.inventory };
  for (const line of receipt.lines) {
    const incoming = toCanonicalQuantity(line.quantity, line.unit);
    const current = inventory[line.ingredientId];
    if (current && current.unit !== incoming.unit) {
      throw new DomainError(
        "INCOMPATIBLE_UNITS",
        `Stored ${current.unit} conflicts with ${incoming.unit}`,
      );
    }
    inventory[line.ingredientId] = {
      ingredientId: line.ingredientId,
      quantity: (current?.quantity ?? 0) + incoming.quantity,
      unit: incoming.unit,
    };
  }

  const transaction = Object.freeze({
    kind: "receipt-import",
    id: receipt.receiptId,
    idempotencyKey: receipt.idempotencyKey,
    totalMinor: receipt.totalMinor,
    currency: receipt.currency,
  });
  const nextState = {
    ...state,
    inventory,
    expenses: [...state.expenses, transaction],
    shopping: state.shopping.filter(
      (item) =>
        !receipt.lines.some((line) => line.ingredientId === item.ingredientId),
    ),
    receipts: [...state.receipts, { ...receipt }],
    idempotency: {
      ...state.idempotency,
      [receipt.idempotencyKey]: {
        fingerprint: fingerprint(receipt),
        transaction,
      },
    },
  };
  return { state: nextState, transaction, replayed: false };
}

export function previewConsumption(state, input) {
  const request = ConsumptionPreviewSchema.parse(input);
  const aggregate = new Map();
  for (const item of request.items) {
    const canonical = toCanonicalQuantity(item.quantity, item.unit);
    const existing = aggregate.get(item.ingredientId);
    if (existing && existing.unit !== canonical.unit) {
      throw new DomainError(
        "INCOMPATIBLE_UNITS",
        `Mixed dimensions for ${item.ingredientId}`,
      );
    }
    aggregate.set(item.ingredientId, {
      quantity: (existing?.quantity ?? 0) + canonical.quantity,
      unit: canonical.unit,
    });
  }
  const items = [...aggregate].map(([ingredientId, needed]) => {
    const available = state.inventory[ingredientId];
    const availableQuantity =
      available?.unit === needed.unit ? available.quantity : 0;
    return {
      ingredientId,
      ...needed,
      availableQuantity,
      sufficient: availableQuantity >= needed.quantity,
    };
  });
  return { canCommit: items.every((item) => item.sufficient), items };
}

export function commitConsumption(state, input) {
  const command = ConsumptionCommitSchema.parse(input);
  if (!command.reviewed)
    throw new DomainError(
      "REVIEW_REQUIRED",
      "Consumption must be explicitly reviewed",
    );
  const replay = replayOrConflict(state, command.idempotencyKey, command);
  if (replay) return replay;
  const preview = previewConsumption(state, command);
  if (!preview.canCommit) {
    throw new DomainError(
      "INSUFFICIENT_STOCK",
      "Consumption exceeds available stock",
      preview.items.filter((item) => !item.sufficient),
    );
  }
  const inventory = { ...state.inventory };
  for (const item of preview.items) {
    inventory[item.ingredientId] = {
      ...inventory[item.ingredientId],
      quantity: inventory[item.ingredientId].quantity - item.quantity,
    };
  }
  const transaction = Object.freeze({
    kind: "consumption",
    id: command.consumptionId,
    idempotencyKey: command.idempotencyKey,
  });
  const nextState = {
    ...state,
    inventory,
    consumptions: [...state.consumptions, { ...command }],
    idempotency: {
      ...state.idempotency,
      [command.idempotencyKey]: {
        fingerprint: fingerprint(command),
        transaction,
      },
    },
  };
  return { state: nextState, transaction, replayed: false };
}
