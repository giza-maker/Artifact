# NURIMI design QA — campaign redesign

Final result: passed

## Four-brand hero and collection showcase

The former Arencia-only hero is replaced by four equally sized scenes for Anua, Arencia, Celimax and Mixa. Official maker wordmarks are visually checked against their first-party files. Desktop shows one row; compact layouts show a two-by-two composition. All four maker captions fit together at 390 × 844 Arabic and 320 × 740 English. The headline wraps into two clear lines and the document has no horizontal overflow.

Every hero collection link filters the right brand and focuses the catalog heading: Anua 13 variants, Arencia 5, Celimax 3 and Mixa 2. All four showcase selectors change the copy, photographic world and correct product IDs while retaining focus on the selected control. A showcase product opens the existing detail dialog; closing restores focus to that product. Celimax alternatives include the existing retinoid-stacking caution. Mixa volumes remain pending.

Missing-data fixture tested in a temporary local page: showcase displays an explicit unavailable state and retry button, with `aria-busy=false`; retry returns a clear error rather than indefinite loading. Temporary fixture removed before release. Motion remains transform/opacity only, with reduced-motion alternatives and no automatic carousel. Existing macro-film behavior retained.

Reviewed 26 October 2026. Saudi own-inventory skincare prototype, Arabic first with English toggle. Catalog: 22 product identities, 23 SKU-size variants, four brands.

## Design and media

Selected rounded NURIMI wordmark, coral four-point sparkle, plum and ivory anchors retained. Reviewed desktop hero, mobile home, catalog, product details, texture panel and brand-studio receipts. Generated physical scenery and macro textures are illustrative. Product references remain separate. A rejected five-point sculpture clip is excluded from the public artifact.

Final texture film: silent H.264, 1152 × 658, 24 fps, 6.583 seconds, faststart, 490,442 bytes. Playback and pause controls verified in browser; film pauses when its image panel leaves view. Reduced-motion and data-saving paths reviewed in source. Interface motion uses one-shot or interaction-driven transforms and opacity.

P007 and P017 cutouts preserve supplied product identities and sizes. Original photographs remain available. Reconstructed batch/expiry ink removed from P007; no generated marking treated as evidence. Wrong-size substitutes, promotional price badges and award imagery rejected. Two Mixa local sizes remain pending; P018's retired manufacturer-page exception documented.

## Browser checks

- Arabic and English layouts checked at 390 × 844 and 320 × 740. No document overflow; mobile headline and header corrected.
- Selectable hero spotlight changes the main product and keeps the secondary product distinct.
- Brand/category shortcuts filter the catalog and transfer keyboard focus to its heading.
- Progressive catalog shows 8, 16, then 23 variants. Expanding focuses first new product; collapsing returns focus to the catalog heading.
- Brand/type filters, saved picks, search and two-product comparison remain functional.
- Repeat quick add describes its action and announces updated quantity.
- Sizes stay visible in cards, product detail, bag, comparison, receipts and checkout review.
- Sample checkout retains items, quantities, standard delivery and Jeddah selection through confirmation. No personal data, order transmission or payment.
- Brand-studio source labels distinguish manufacturer, supplied photo and retailer references; downloaded receipts preserve attribution.
- Native dialogs retain keyboard focus management and restore opening controls.

## Release checks

JavaScript syntax, unique HTML IDs, icon references, local assets, 23 unique product IDs and null commercial values checked. Core contrast anchors remain plum/ivory 13.01:1 and white/cherry 5.97:1. Updated eight-page PDF rendered and visually reviewed. Brand ZIP validated with 20 entries, current guide, editable artwork, tokens and campaign assets.

This passes design/prototype review. Merchant details, actual prices and quantities, local unit verification, fulfillment and payment integration remain required for commerce launch.

## Product photography and detail release — 26 October 2026

All 23 SKU scenes reviewed together and individually for identity, form and visible size. The four sets share square framing, complete packages and soft directional light: Anua sage/glass/water, Arencia lilac/glass crescent, Celimax ivory/frosted glass and Mixa butter/ceramic. P016's wrong 205 ml jar reference was rejected; final scene uses the supplied 160 ml retail box. P018's printed 20% artwork was restored as packaging artwork only. Original supplied Mixa and P016 photos remain available. Generated microtype is presentation artwork rather than formula or batch evidence.

Product details now show selected ingredient roles, cosmetic benefits, usage, caution and source notes. P016 exact local formula and P017 100 ml formula stay pending; P018's retired-page evidence is labeled. No ingredient list was borrowed from a different-size package for those uncertain variants.

Desktop and 390 px mobile product scene, original-photo toggle, ingredient navigation and benefit panels visually reviewed. Additional 320 × 740 Arabic review confirms no dialog overflow, 44 px close/quantity targets and keyboard focus on the selected section heading. New detail quantity → add → view bag retained quantity two. Bag and comparison thumbnails use the generated scene with normal blending. Native dialog close restores focus. English pending-formula state reviewed. Reduced-motion paths remain in place; no continuous decorative animation added.

Structural checks pass: 23 catalog records match 23 breakdown records and 23 square scenes; all local image references, source sections, icon IDs and bilingual copy exist; commercial fields remain null. JavaScript syntax and ZIP CRC pass. All scene WebPs total 845,678 bytes. The separate product-visuals kit includes scenes, generation record, hashes and breakdown sources.
