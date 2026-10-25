import { z } from "zod";

const Id = z
  .string()
  .trim()
  .min(1)
  .max(128)
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/)
  .refine(
    (value) => !["__proto__", "constructor", "prototype"].includes(value),
    "Reserved identifier",
  );
const Quantity = z.number().finite().nonnegative().max(1_000_000_000);
const MinorCurrency = z.number().int().nonnegative().max(1_000_000_000);
export const UnitSchema = z.enum(["g", "kg", "ml", "l", "count"]);

export const ReceiptLineSchema = z
  .object({
    ingredientId: Id,
    quantity: Quantity.refine(
      (value) => value > 0,
      "Receipt quantity must be positive",
    ),
    unit: UnitSchema,
    lineTotalMinor: MinorCurrency,
  })
  .strict();

export const ReceiptImportSchema = z
  .object({
    receiptId: Id,
    idempotencyKey: Id,
    reviewed: z.boolean(),
    currency: z.string().regex(/^[A-Z]{3}$/),
    lines: z.array(ReceiptLineSchema).min(1).max(500),
    taxMinor: MinorCurrency.default(0),
    discountMinor: MinorCurrency.default(0),
    totalMinor: MinorCurrency,
  })
  .strict()
  .refine(
    (value) =>
      value.discountMinor <=
      value.lines.reduce((sum, line) => sum + line.lineTotalMinor, 0) +
        value.taxMinor,
    {
      message: "Discount cannot exceed subtotal plus tax",
      path: ["discountMinor"],
    },
  );

export const ConsumptionItemSchema = z
  .object({
    ingredientId: Id,
    quantity: Quantity.refine(
      (value) => value > 0,
      "Consumption quantity must be positive",
    ),
    unit: UnitSchema,
  })
  .strict();

export const ConsumptionPreviewSchema = z
  .object({
    items: z.array(ConsumptionItemSchema).min(1).max(500),
  })
  .passthrough();

export const ConsumptionCommitSchema = z
  .object({
    consumptionId: Id,
    idempotencyKey: Id,
    reviewed: z.boolean(),
    items: z.array(ConsumptionItemSchema).min(1).max(500),
  })
  .strict();

const IngredientIds = z.array(Id).min(1).max(100);

export const AssistantToolSchemas = Object.freeze({
  readInventory: z.object({ ingredientIds: IngredientIds.optional() }).strict(),
  suggestRecipes: z
    .object({
      candidateRecipeIds: z.array(Id).min(1).max(50),
      availableIngredientIds: IngredientIds,
    })
    .strict(),
  proposeInventoryChange: z
    .object({
      reviewed: z.literal(true),
      idempotencyKey: Id,
      items: z.array(ConsumptionItemSchema).min(1).max(100),
    })
    .strict(),
  proposeShoppingChange: z
    .object({
      reviewed: z.literal(true),
      idempotencyKey: Id,
      ingredientIds: IngredientIds,
    })
    .strict(),
  proposeConsumption: ConsumptionCommitSchema.extend({
    reviewed: z.literal(true),
  }),
});
