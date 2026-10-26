# NURIMI brand guide

English working edition, October 2026 - expanded inventory

## 1. Skin first

**SKIN FIRST.**

NURIMI is an Arabic-first Saudi retailer selling its own skincare inventory: **22 product identities and 23 SKU-size variants** across **Anua, Mixa, Arencia, and Celimax**. Korean skincare remains important; Mixa adds French essentials. The identity stays warm, direct, playful, and grown-up. Product facts stay easy to inspect.

Primary line: **بشرتك أهم.**
English counterpart: **Your skin comes first.**

## 2. Point of view

NURIMI sells its own inventory. It is not a marketplace or manufacturer. The experience feels Saudi-native and internationally curated: Arabic leads, original brand identities stay visible, and the shop explains what is known before asking for a purchase.

The useful tension is playful and credible. Wit opens the conversation. Product names, ingredients, maker directions, cautions, and verification state carry it forward.

Voice examples:

- Hook: **Skin first. Hype second.**
- Utility: **Famous is interesting. Fit matters more.**
- Product information: **Ingredients before exaggeration.**

Avoid miracle language, invented clinical support, fake certification, false scarcity, and audited-sourcing claims. Price, quantity, local SKU mapping, batch, and expiry still need operator verification.

## 3. Mark system

Use the supplied original rounded lowercase `nurimi.` logo artwork. Preserve terminal dot, circular i-dots, proportions, and coral four-point sparkle. Do not rebuild it from a typeface.

Use:

- Primary: plum and coral on ivory.
- Reverse: white on plum or deep cherry.
- One-color: plum on light surfaces, white on dark surfaces.

Clear space: keep at least the height of the terminal dot on every side. Recommended minimum widths are 120 px on screen and 32 mm in print. Test each production method at final size.

Status: use the supplied original artwork. Owner approval, optical validation, and trademark clearance remain launch gates.

## 4. Color

Core colors:

| Role | Color | Hex |
|---|---|---|
| Ink | Plum | `#3B2158` |
| Canvas | Ivory | `#FFF9F3` |
| Signature accent | Coral | `#F29AA8` |
| Accessible CTA | Deep cherry | `#B82B55` |
| Discovery surface | Lilac | `#EADFFF` |
| Warm surface | Blush | `#F7CBD4` |
| Care surface | Sage | `#C8D9BF` |
| Small delight | Butter | `#FFE7A7` |

WCAG contrast, computed with the sRGB relative-luminance formula:

- Plum on ivory: **13.01:1**
- White on deep cherry: **5.97:1**
- Plum on lilac: **10.68:1**
- Plum on blush: **9.35:1**
- Plum on sage: **9.15:1**

Three recipes keep the identity stable. Balanced Plum uses mostly ivory with lilac or sage discovery areas. Lilac Story gives editorial space more lilac while purchase controls stay deep cherry. Cherry Energy raises campaign intensity with blush and deep cherry while product pages remain calm. These are design recipes, not conversion claims.

## 5. Type and tone

Use Plus Jakarta Sans for English headlines and interface text. Use Alexandria for expressive Arabic and Noto Sans Arabic for dense Arabic product information. The custom logo is never typeset.

Suggested hierarchy: display 72-92 px on desktop, body 15-18 px, and secondary text no smaller than 12 px. Arabic is structurally right-to-left. Isolate Latin brand names, ingredients, SKU codes, and numbers to prevent bidirectional errors.

Tone is concise, witty, and useful. Say what the product is, cite maker directions, and label missing local fields as **To verify / قيد التحقق**. Humor must never replace a warning or imply a diagnosis.

## 6. Inventory and signature mechanics

Keep each of the 22 identities distinct and model the 23 SKU-size variants explicitly. Never infer one local size, price, quantity, batch, or expiry from another variant.

### Skin Receipt

A factual retail card. Minimum fields are product ID, original brand, full name, listed size, maker source, local verification state, price, quantity, stock, batch, expiry, and claim-review status. A truthful sample today reads:

> P003 · Arencia · PDRN Booster Shot Serum
> Manufacturer listing: 30 ml / local SKU to confirm
> Source: manufacturer information
> Price: to verify · Quantity: to verify · Stock: to verify · Batch: to verify · Expiry: to verify

### Spark Lens

An interaction that focuses a real packshot or reveals a labeled fact layer. Keyboard users receive an equivalent control. Reduced-motion mode shows a static state. It must not invent ingredients or magnify illegible generated copy.

### Skin Moods

Discovery groupings such as Glow, Hydrate/Comfort, and Texture/Night. They help people browse goals. They are not skin diagnoses or treatment advice. A product may appear in more than one group when the underlying product data supports it.

These mechanics remain concepts pending owner approval and user testing.

## 7. Applications

NURIMI is the retail layer. Anua, Mixa, Arencia, and Celimax remain the original brands. Keep physical packaging, labels, names, and manufacturer marks intact. Do not recolor packs, add NURIMI labels to manufacturer containers, or imply private-label ownership.

Starter packaging may use an ivory or kraft shipping carton, a one-color plum stamp, coral seal, and a bilingual Skin Receipt insert. The concept image is presentation material, not a printer-ready dieline. Production requires printer dimensions, material selection, proofs, and reviewed claims.

Campaign scenery may use the four-point coral glass sculpture in `assets/campaign/hero-world.webp` and atmospheric `texture-world.webp`. These are illustrative. Actual product packaging must always originate from supplied product photography. Background cleanup may preserve exact front artwork and size while producing transparent cutouts; two Anua cutouts use this treatment and are not synthetic packages. Never generate package names, sizes, batch markings, expiry markings, or use scenery as evidence of formula, ingredients, efficacy, certification, or clinical results.

The inventory includes 22 product identities and 23 SKU-size variants. Prices, quantities, local SKU mapping, batches, and expiry dates remain pending where unverified.

## 8. Handoff and readiness

Current implementation files:

- `assets/brand/logo.svg`, `logo.png`, `logo-white.svg`
- `assets/campaign/hero-world.webp`, `texture-world.webp`
- `assets/products/p001.webp` through `p023.webp`
- 22 product identities / 23 SKU-size variants across Anua, Mixa, Arencia, and Celimax
- `assets/fonts/jakartasans.woff2`, `alexandria.woff2`, `arabic-body.woff2`
- `data/products.json`
- `DESIGN.md`

Before public launch, confirm trademark rights, approve the final logo, review Arabic and maker naming, verify each local SKU and size mapping, confirm price, quantity, and stock, record batch and expiry, review cosmetic claims and cautions, select commerce and fulfillment processes, and obtain production packaging proofs.

Font sources: [Plus Jakarta Sans](https://github.com/tokotype/PlusJakartaSans), [Alexandria](https://github.com/Gue3bara/Alexandria), and [Noto Sans Arabic](https://github.com/notofonts/arabic). Project font files are licensed under the SIL Open Font License; retain the supplied license texts.
