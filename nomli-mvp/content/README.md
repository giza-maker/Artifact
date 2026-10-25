# Nomli starter content pack

Original structured content for inventory, recipe, cooking, and voice-intent MVP work.

Files:

- `ingredients.json`: bilingual catalog with stable IDs, aliases, canonical units, compatible same-dimension conversions, and ingredient-level dietary annotations.
- `recipes.json`: 20 practical recipes using catalog IDs, metric quantities, servings, tools, timing, and ordered steps.
- `voice-commands.json`: paired Arabic and English utterances with expected intents, slots, and confirmation behavior.
- `LICENSE.md`: license for original authored JSON and documentation in this pack.

Provenance:

- All records and wording were authored for this repository on 2026-10-25.
- No recipe corpus, merchant catalog, barcode registry, or scraped dataset was copied.
- Three image paths reuse existing Nomli demo images only where subject matter matches: tomato salad, shakshuka-style tomato-and-egg skillet, and omelette. Remaining recipe images are `null`.
- Ingredient names and aliases cover common English and Arabic kitchen terms. Arabic aliases vary by region; this starter list is not an exhaustive localization.

Data rules:

- IDs are lower snake case and must remain stable after release.
- `canonicalUnit` is the inventory normalization target for an ingredient.
- Conversions only cross explicit units of the same dimension: kilograms to grams and litres to millilitres. Piece, clove, slice, package, and mass-volume conversions require product-specific facts or user input.
- `dietary` describes an ingredient in plain form. `null` means product formulation or processing needs review. It does not mean safe or unsafe.
- Recipe dietary tags appear only when every listed ingredient has an affirmative matching catalog flag. They remain navigation hints, not allergy or medical advice. Check labels, substitutions, preparation, and cross-contact.
- Recipe oven temperatures are Celsius.

Expected consumer validation:

1. Parse every JSON file.
2. Reject duplicate ingredient and recipe IDs.
3. Require every recipe ingredient ID to exist in `ingredients.json`.
4. Require recipe units to equal the ingredient canonical unit or appear in `compatibleConversions`.
5. Keep missing images as `null`; do not substitute unrelated dish photography.
