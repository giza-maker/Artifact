import { FOOD_CATEGORIES } from "../web/food-categories.js";

export const SCAN_KINDS = Object.freeze(["groceries", "receipt", "expiry"]);
export const SCAN_MIME_TYPES = Object.freeze([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
]);
export const FOOD_CATEGORY_IDS = Object.freeze(
  FOOD_CATEGORIES.map(({ id }) => id),
);

const nullable = (schema) => ({ anyOf: [schema, { type: "null" }] });
const line = {
  type: "object",
  additionalProperties: false,
  properties: {
    lineId: { type: "string", pattern: "^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$" },
    name: nullable({ type: "string", minLength: 1, maxLength: 200 }),
    ingredientId: { type: "null" },
    quantity: nullable({ type: "number", exclusiveMinimum: 0, maximum: 1e9 }),
    unit: nullable({
      type: "string",
      enum: [
        "g",
        "kg",
        "ml",
        "l",
        "count",
        "pieces",
        "bunches",
        "cloves",
        "slices",
      ],
    }),
    lineTotalMinor: nullable({ type: "integer", minimum: 0, maximum: 1e12 }),
    expiry: nullable({ type: "string", pattern: "^\\d{4}-\\d{2}-\\d{2}$" }),
    expiryProvenance: nullable({ type: "string", enum: ["printed"] }),
    storage: { type: "null" },
    warnings: {
      type: "array",
      maxItems: 20,
      items: { type: "string", maxLength: 500 },
    },
  },
  required: [
    "lineId",
    "name",
    "ingredientId",
    "quantity",
    "unit",
    "lineTotalMinor",
    "expiry",
    "expiryProvenance",
    "storage",
    "warnings",
  ],
};

export const SCAN_PROVIDER_SCHEMA = Object.freeze({
  type: "object",
  additionalProperties: false,
  properties: {
    version: { type: "integer", const: 1 },
    kind: { type: "string", enum: SCAN_KINDS },
    merchant: nullable({ type: "string", minLength: 1, maxLength: 200 }),
    currency: nullable({ type: "string", pattern: "^[A-Z]{3}$" }),
    receiptDate: nullable({
      type: "string",
      pattern: "^\\d{4}-\\d{2}-\\d{2}$",
    }),
    totalMinor: nullable({ type: "integer", minimum: 0, maximum: 1e12 }),
    taxMinor: nullable({ type: "integer", minimum: 0, maximum: 1e12 }),
    discountMinor: nullable({ type: "integer", minimum: 0, maximum: 1e12 }),
    lines: { type: "array", minItems: 1, maxItems: 500, items: line },
    warnings: {
      type: "array",
      maxItems: 20,
      items: { type: "string", maxLength: 500 },
    },
  },
  required: [
    "version",
    "kind",
    "merchant",
    "currency",
    "receiptDate",
    "totalMinor",
    "taxMinor",
    "discountMinor",
    "lines",
    "warnings",
  ],
});

// Gemini's structured-output dialect rejects null-only fields and some JSON
// Schema validation keywords. Runtime normalization still enforces app limits.
function geminiSchema(value) {
  if (Array.isArray(value)) return value.map(geminiSchema);
  if (!value || typeof value !== "object") return value;
  if (value.type === "null") return nullable({ type: "string" });
  const out = {};
  for (const [key, child] of Object.entries(value)) {
    if (
      [
        "pattern",
        "minLength",
        "maxLength",
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "minItems",
        "maxItems",
      ].includes(key)
    )
      continue;
    if (key === "const") out.enum = [child];
    else out[key] = geminiSchema(child);
  }
  return out;
}
export const GEMINI_SCAN_SCHEMA = Object.freeze(
  geminiSchema(SCAN_PROVIDER_SCHEMA),
);

// Opt-in keeps legacy clients and non-grocery scans on the original schema.
export function scanProviderSchema(
  imageRegions = false,
  gemini = false,
  foodCategories = false,
) {
  if (!imageRegions && !foodCategories)
    return gemini ? GEMINI_SCAN_SCHEMA : SCAN_PROVIDER_SCHEMA;
  const schema = structuredClone(SCAN_PROVIDER_SCHEMA);
  const region = {
    type: "object",
    additionalProperties: false,
    properties: Object.fromEntries(
      ["x", "y", "width", "height"].map((key) => [
        key,
        { type: "number", minimum: 0, maximum: 1 },
      ]),
    ),
    required: ["x", "y", "width", "height"],
  };
  if (imageRegions) {
    schema.properties.lines.items.properties.photoRegion = nullable(region);
    // Strict provider schemas require all keys; null represents uncertainty.
    schema.properties.lines.items.required.push("photoRegion");
  }
  if (foodCategories) {
    schema.properties.lines.items.properties.categoryId = nullable({
      type: "string",
      enum: FOOD_CATEGORY_IDS,
    });
    // Gemini rejects this nested schema with the expanded 32-value enum (400).
    // Keep the full allowlist in the prompt and enforce it on returned metadata.
    // OpenAI strict schemas retain the enum; unknown categories normalize to null.
    if (gemini)
      delete schema.properties.lines.items.properties.categoryId.anyOf[0].enum;
    schema.properties.lines.items.required.push("categoryId");
  }
  return gemini ? geminiSchema(schema) : schema;
}
