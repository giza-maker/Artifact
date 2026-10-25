# Content and fixture pack

## Coverage

Starter pack contains:

- 88 bilingual ingredient records with English and Arabic names, common aliases, categories, canonical units, compatible conversions, and ingredient-level dietary annotations.
- 20 recipes covering MENA, Levantine, North African, Mediterranean, Italian, and everyday meals.
- 3 synthetic receipts: Arabic paper in EGP, English paper in SAR, and English digital in AED.
- 6 synthetic barcode product records, including one deliberately unmapped product.
- 24 voice examples: 12 English and 12 Arabic, paired across inventory, recipe search, cooking, timers, shopping, expiry entry, and purchase requests.

Recipes include servings, prep and cook time, difficulty, required tools, ordered steps, metric ingredient quantities, and catalog ingredient IDs. Three use subject-matched images already present in Nomli. Seventeen keep `image: null`.

## Data contracts

Ingredient quantities use explicit units. Only these automatic conversions are declared:

| Source | Canonical | Factor |
| --- | --- | ---: |
| kg | g | 1000 |
| l | ml | 1000 |

No density conversion exists. The pack does not convert spoons or cups to mass, infer package weight, or convert pieces to grams. Product package data can provide a separate, reviewed fact.

Dietary booleans describe plain ingredients. Packaged foods with variable formulations use `null` and a review note. Allergen tags identify ingredients that need attention; they are not a guarantee of absence, purity, or safety. Recipe tags support browsing only.

Receipt totals use integer minor units. `minorUnitScale: 100` means 100 minor units per displayed currency unit. Expected extraction is deterministic fixture output, followed by explicit fields requiring review.

Voice confirmation values:

- `none`: read-only request can run without mutation confirmation.
- `conditional`: confirm when matching, scope, or current state is ambiguous.
- `required`: inventory/shopping mutations, stopping cooking, or an external purchase must be confirmed through application review.

## Validation

Run from `nomli-mvp` with Node.js:

```powershell
node -e "const fs=require('fs'); for (const p of ['content/ingredients.json','content/recipes.json','content/voice-commands.json','fixtures/receipts.json','fixtures/barcode-products.json']) JSON.parse(fs.readFileSync(p,'utf8')); console.log('JSON parse OK')"
```

Cross-file validation should also check unique IDs, recipe references, compatible units, receipt arithmetic, voice example counts, and fixture barcode namespace.

## Limits

- Content is original starter data, not a nutrition database, medical guide, culinary canon, retail catalog, or food-safety certification.
- Cooking time and appliance performance vary. Recipe steps do not replace temperature checks, package instructions, or local food-safety guidance.
- Arabic terminology is readable MENA starter localization. Regional variants and professional localization remain needed.
- Ingredient annotations do not model cross-contact, facility statements, certification, brands, or local labeling law.
- Receipt fixtures do not measure OCR quality. Real scans need representative consented data, ground-truth annotation, and evaluation by language, print quality, device, and layout.
- Barcode records are synthetic and must not seed production product lookup.
- Missing expiry remains unknown. Never treat an estimated shelf life as a printed expiry.
- Images are optional. Unmatched recipes keep `null` rather than using unrelated food photography.

## Provenance and license

JSON records and documentation were authored for Nomli on 2026-10-25 without scraping or dataset downloads. See [content README](../content/README.md), [fixture README](../fixtures/README.md), and [MIT license](../content/LICENSE.md). Existing image assets retain their own provenance and licenses.
