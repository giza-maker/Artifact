# Offline nutrition reference

Nomli estimates recipe energy offline from a checked-in subset of USDA FoodData Central **SR Legacy, April 2018**. SR Legacy is USDA's final frozen Standard Reference release. Values are generic food references, not brand-label claims.

## Sources and extraction

- Official dataset page: <https://fdc.nal.usda.gov/download-datasets/>
- Exact archive: <https://fdc.nal.usda.gov/fdc-datasets/FoodData_Central_sr_legacy_food_csv_2018-04.zip>
- USDA data documentation: <https://fdc.nal.usda.gov/data-documentation/>
- USDA ARS volume/weight standard (1 cup = 237 ml): <https://www.ars.usda.gov/arsuserfiles/80400525/data/hg72/hg72_2002.pdf>
- Each `content/nutrition.json` row records exact FDC ID, USDA description, preparation state, Energy (`nutrient_id=1008`) in kcal/100 g, and a direct food-detail URL exposed by `web/nutrition.js`.
- Count weights and densities come from `food_portion.csv`. `measure_unit.csv` resolves portion units. No inferred household densities are stored.

Volume conversions use USDA gram portions: olive oil 216 g/cup, whole milk 244 g/cup, chicken broth 249 g/cup, vegetable broth 221 g/cup, tomato puree 250 g/cup, and water 1000 g/liter. USDA ARS Home and Garden Bulletin 72, table 1, defines the standard cup as 237 ml; densities divide each SR gram portion by 237. Reference counts: large egg 50 g, large 6-1/2 inch pita 60 g, bread slice 29 g, flour tortilla 49 g, garlic clove 3 g, and 2-1/8 inch lemon 58 g. Caller `gramsPerUnit` overrides a count reference when actual weight is known.

Verification performed 2026-10-29 against the downloaded archive: every row's FDC ID and description matched `food.csv`; every `kcalPer100g` matched `food_nutrient.csv` where `nutrient_id=1008`; every recorded count/cup/liter gram weight matched `food_portion.csv` after resolving `measure_unit_id` through `measure_unit.csv`. This is reproducible with keyless CSV joins on `fdc_id`; no API response or manually invented nutrient value is involved.

## Identity and limitations

Raw, dry, cooked, frozen, canned, and drained identities remain distinct. Several catalog terms deliberately use documented generic proxies: basmati uses raw unenriched long-grain white rice; red onion and cherry tomato use variety-unspecified raw entries; passata uses canned unsalted tomato puree; white fish uses raw Pacific cod; stock uses ready-to-serve broth. Proxy state is visible in data.

No defensible SR Legacy match was assigned for `labneh`, `zaatar_blend`, or `mixed_spice`. These remain missing, making affected recipe results incomplete. Packaged or branded food labels should override generic estimates in caller-owned data; this module does not silently replace USDA values.

Coverage currently: 54 referenced ingredient identities; 17 of 20 curated recipes complete. Incomplete recipes: `zaatar_labneh_toast`, `chicken_rice_one_pot`, and `beef_kofta_pan`. Missing ingredients are returned, never counted as zero. Salt and water legitimately return zero kcal from USDA.

## API

```js
estimateIngredientCalories({ ingredientId, qty, unit, gramsPerUnit });
// => { kcal: number|null, complete: boolean, reason: string|null, sourceUrl?: string }

estimateRecipeCalories(recipe, (servings = recipe.servings));
// => { totalKcal, perServingKcal, complete, missing, knownKcal }
```

Supported direct mass units: `g`, `kg`. `ml`/`l` require a stored sourced conversion. Count overrides are accepted only for `count`, `piece`, `clove`, `slice`, or `bunch`; stored references currently cover piece, clove, and slice foods. Invalid overrides, unsupported units, negative/non-finite quantities, numeric overflow, empty recipes, and malformed ingredient entries are incomplete. Requested recipe servings scale total and known subtotal from base servings; per-serving energy remains stable. `NUTRITION_FOODS`, `NUTRITION_SOURCE_VERSION`, and `NUTRITION_SOURCES` support manual-log search and source display.
