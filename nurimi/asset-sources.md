# NURIMI brand asset notes

## Four-brand storefront hero

The hero now gives Anua, Arencia, Celimax and Mixa equal photographic space using their existing generated product scenes. The following brand showcase uses the same brand-specific sets and source-linked product details. Wordmarks are unchanged first-party assets from the makers' official sites, not generated approximations; exact CDN URLs and hashes are in [maker wordmark provenance](assets/makers/provenance.md). Mixa's original transparent canvas is optically sized in CSS. Product-brand marks identify the range and do not assert a partnership or authorized-retailer status.

## Campaign and expanded range — 26 October 2026

Campaign scenery and a macro texture still were generated with OpenAI image generation. The silent texture film was generated with Fal.ai and optimized for the website. Exact prompt, endpoint, job and encoding records: [campaign provenance](assets/campaign/provenance.md). No generated environment claims to depict a specific product formula. Original product packaging remains separate from the generated scenery.

The inventory now includes 22 identities / 23 size variants across Anua, Arencia, Celimax and Mixa. Product image and source exceptions are recorded in [catalog source notes](data/source-notes.md). Two Anua inventory photos are cleaned into transparent presentation cutouts; visible product names, sizes and packaging forms follow supplied photographs. Those cutouts are not literal pixel masks, batch-code evidence, or proof of local stock. P017's original photograph remains its primary source reference. P018 uses a documented retailer packshot because its manufacturer page is retired.

## Product scenes and detail evidence

The catalog includes 23 generated scene images in `assets/product-scenes/`. Four visual sets keep manufacturer packaging distinct: Anua uses sage, glass and water; Arencia uses lilac, a curved platform and a glass crescent; Celimax uses ivory, frosted rectangular glass and a sage edge; Mixa uses butter, ceramic and peach. Product dialogs retain an original-packaging view. Generation inputs and output records are documented in [product-scene provenance](assets/product-scenes/provenance.md), and `downloads/NURIMI-product-visuals.zip` packages the product visuals.

`data/product-breakdowns.json` supplies visual ingredient, benefit and use cards. Supporting links and review boundaries are recorded in [breakdown sources](data/breakdown-sources.md). Featured ingredients are not full local INCI lists, and cosmetic descriptions do not assert clinical certainty. Exact local INCI matching remains pending for the supplied P016 160 ml and P017 100 ml variants. P018 uses documented reference evidence because its manufacturer page is retired.

## Status

Concept digitization from supplied references. Needs brand-owner optical approval and trademark/legal clearance before designation as cleared master artwork.

Source references remain untouched:

- `nurimi-intake/NURIMI_Codex_Handover_2026-10-25/assets/user_references/approved_nurimi_brand_reference.png`
- `nurimi-intake/NURIMI_Codex_Handover_2026-10-25/assets/generated/04_reimagined_brand_exploration/original_logo_cropped.png`

## Vector assets

- `nurimi/assets/brand/logo.svg`: editable paths; supplied rounded lowercase wordmark traced from cropped source; source label excluded by bounds; plum normalized to `#3B2158`; source sparkle flattened to `#F29AA8`. Pixel contours were arc-length resampled, periodically smoothed, and converted to closed cubic Bézier paths. Each original contour bound was restored after smoothing, preserving letter spacing, baseline, dots, period, counters, and component proportions.
- `nurimi/assets/brand/logo-white.svg`: same geometry; white wordmark plus coral sparkle.
- `nurimi/assets/brand/sparkle.svg`: source-derived four-point silhouette, flat coral.
- `nurimi/assets/brand/monogram.svg`: traced source `n` plus scaled source sparkle. Not a new letterform.
- `nurimi/assets/brand/logo.png`: transparent PNG render from `logo.svg`; preview/convenience format, not master.
- `nurimi/assets/brand/packaging.webp`: AI-generated 1536×1024 packaging application concept. Concept only; not production artwork or proof of physical print result.

SVGs contain paths only: no embedded raster, fonts, filters, gradients, or external references. `fill-rule="evenodd"` preserves wordmark counters.

QA comparison: `nurimi-work/qa/logo-reference-vs-vector.png` uses identical crop/aspect. Left panel is supplied cropped reference; right panel is smoothed vector render on warm ivory.

## Runtime fonts

Official Google Fonts CDN subsets, downloaded 2026-10-25:

| Local file | Family / subset | CSS-declared weight range | Official source |
| --- | --- | --- | --- |
| `nurimi/assets/fonts/jakartasans.woff2` | Plus Jakarta Sans, Latin | `200 800` variable | `https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2` |
| `nurimi/assets/fonts/alexandria.woff2` | Alexandria, Arabic | `100 900` variable | `https://fonts.gstatic.com/s/alexandria/v6/UMBXrPdDqW66y0Y2usFeaijdA4M5.woff2` |
| `nurimi/assets/fonts/arabic-body.woff2` | Noto Sans Arabic, Arabic | `100 900` variable | `https://fonts.gstatic.com/s/notosansarabic/v33/nwpCtLGrOAZMl5nJ_wfgRg3DrWFZWsnVBJ_sS6tlqHHFlj4wv4r4xA.woff2` |

CSS API metadata sources:

- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap`
- `https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&display=swap`
- `https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap`

Licenses:

- `nurimi/assets/licenses/Plus-Jakarta-Sans-OFL.txt`
- `nurimi/assets/licenses/Alexandria-OFL.txt`
- `nurimi/assets/licenses/Noto-Sans-Arabic-OFL.txt`

Export guidance: website may self-host these OFL runtime files. Brand-pack exports should link to official family pages or require recipient installation instead of bundling font binaries.

## Icons

`nurimi/assets/icons.svg` contains 35 unique official Tabler outline symbols from pinned `@tabler/icons@3.49.0`. Source endpoint pattern:

`https://unpkg.com/@tabler/icons@3.49.0/icons/outline/{icon}.svg`

Requested IDs:

`arrow-right`, `arrow-left`, `arrow-up-right`, `chevron-down`, `chevron-right`, `chevron-left`, `search`, `x`, `plus`, `minus`, `heart`, `shopping-bag`, `sliders`, `check`, `shield-check`, `info`, `sun`, `moon`, `droplet`, `sparkles`, `arrows-sort`, `layout-grid`, `copy`, `download`, `trash`, `leaf`, `eye`, `arrow-down`, `ruler`, `package`, `menu`, `globe`, `receipt`, `circle-check`, `brand-instagram`.

Alias mapping preserves requested product IDs while keeping official paths:

- `sliders` → Tabler `adjustments-horizontal`
- `info` → Tabler `info-circle`
- `menu` → Tabler `menu-2`
- `globe` → Tabler `world`

License: `nurimi/assets/licenses/Tabler-Icons-MIT.txt`.

## Packaging generation record

Built-in image generation used approved board plus cropped source logo as references. Prompt requested one wide 3:2 tactile studio concept: open warm-ivory corrugated mailer, lilac tissue, plum rounded `nurimi.` wordmark, coral four-point sparkle, `Skin Receipt` card, matching die-cut seal. Explicit exclusions: products, extra SKUs, flowers, people, gradients, badges, tiny Arabic, certifications, watermark, added logos/copy, glossy plastic.

Generated image approximates source wordmark. Do not extract its rendered logo; use SVG master candidates above for production layouts.
