# NURIMI brand guide

English working edition, October 2026

## 1. Skin first

**SKIN FIRST.**

NURIMI is an Arabic-first Saudi retailer for a focused edit of Korean skincare. The selected identity is warm, direct, playful, and grown-up. Its job is to make discovery enjoyable while keeping product facts easy to inspect.

Primary line: **بشرتك أهم.**
English counterpart: **Your skin comes first.**

## 2. Point of view

NURIMI sells its own inventory. It is not a marketplace and does not present itself as a Korean manufacturer. The retail experience should feel Saudi-native and Korean-informed: Arabic leads, manufacturer identities stay visible, and the shop explains what is known before asking for a purchase.

The useful tension is playful and credible. Wit opens the conversation. Product names, ingredients, maker directions, cautions, and verification state carry it forward.

Voice examples:

- Hook: **Skin first. Hype second.**
- Utility: **Famous is interesting. Fit matters more.**
- Product information: **Ingredients before exaggeration.**

Avoid miracle language, invented clinical support, false scarcity, and claims that stock or sourcing has been audited. Current owner-stated Saudi stock and the five-SKU edit still need operator verification.

## 3. Mark system

The selected mark is the rounded lowercase `nurimi.` wordmark in plum, with circular dots and one coral four-point sparkle. Preserve the terminal dot, proportions, and sparkle placement. Do not rebuild it from a typeface.

Use:

- Primary: plum and coral on ivory.
- Reverse: white on plum or deep cherry.
- One-color: plum on light surfaces, white on dark surfaces.

Clear space: keep at least the height of the terminal dot on every side. Recommended minimum widths are 120 px on screen and 32 mm in print. Test each production method at final size.

Status: the current SVG is a digitized concept. It remains pending owner approval, optical tracing validation, and trademark clearance. It is not a cleared legal master.

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

## 6. Signature mechanics

### Skin Receipt

A factual retail card. Minimum fields are product ID, original brand, full name, listed size, maker source, local verification state, price, stock, batch, expiry, and claim-review status. A truthful sample today reads:

> P003 · Arencia · PDRN Booster Shot Serum
> Manufacturer listing: 30 ml / local SKU to confirm
> Source: manufacturer information
> Price: to verify · Stock: to verify · Batch: to verify · Expiry: to verify

### Spark Lens

An interaction that focuses a real packshot or reveals a labeled fact layer. Keyboard users receive an equivalent control. Reduced-motion mode shows a static state. It must not invent ingredients or magnify illegible generated copy.

### Skin Moods

Discovery groupings such as Glow, Hydrate/Comfort, and Texture/Night. They help people browse goals. They are not skin diagnoses or treatment advice. A product may appear in more than one group when the underlying product data supports it.

These mechanics remain concepts pending owner approval and user testing.

## 7. Applications

NURIMI is the retail layer. Arencia and Celimax remain the product makers. Keep physical packaging, labels, names, and manufacturer marks intact. Do not recolor packs, add NURIMI labels to manufacturer containers, or imply private-label ownership.

Starter packaging may use an ivory or kraft shipping carton, a one-color plum stamp, coral seal, and a bilingual Skin Receipt insert. The concept image is presentation material, not a printer-ready dieline. Production requires printer dimensions, material selection, proofs, and reviewed claims.

The shop prototype should show only the existing five product records. Prices, quantities, batches, expiry dates, sourcing status, local notification status, and shipping service level remain pending where the dataset is null.

## 8. Handoff and readiness

Current implementation files:

- `assets/brand/logo.svg`, `logo.png`, `logo-white.svg`
- `assets/brand/packaging.webp`
- `assets/products/p001.webp` through `p005.webp`
- `assets/fonts/jakartasans.woff2`, `alexandria.woff2`, `arabic-body.woff2`
- `data/products.json`
- `DESIGN.md`

Before public launch, confirm trademark rights, approve the final traced logo, review Arabic and Korean language, verify each local SKU and its source, confirm price and stock, record batch and expiry, review cosmetic claims and cautions, select the commerce platform, and obtain production packaging proofs.

Font sources: [Plus Jakarta Sans](https://github.com/tokotype/PlusJakartaSans), [Alexandria](https://github.com/Gue3bara/Alexandria), and [Noto Sans Arabic](https://github.com/notofonts/arabic). Project font files are licensed under the SIL Open Font License; retain the supplied license texts.
