# NURIMI — Skin first, with a point of view

## Scope and source

Arabic-first Saudi own-inventory skincare retailer. Build a brand showcase and shopping prototype around the supplied full inventory: 22 identities / 23 size variants from Arencia, Celimax, Anua and Mixa. No third-party sellers, booking product, or inherited MAWJ branding. Korean beauty and French essentials both belong in the range.

Highest visual reference: user-selected `approved_nurimi_brand_reference.png` in the intake. Preserve rounded lowercase `nurimi.` wordmark, terminal dot, circular i-dots, coral four-point sparkle, plum #3B2158 and ivory #FFF9F3. Main Arabic line: بشرتك أهم. Later concept decks provide experiments, not a blanket logo redesign approval.

## Design read

Playful grown-up beauty with clear product information. A tactile cream canvas, oversized Arabic typography, sharp plum rules, and coral punctuation. Twenty-three generated product scenes extend the system across four sets: Anua uses sage, glass and water; Arencia uses lilac, a curved platform and a glass crescent; Celimax uses ivory, frosted rectangular glass and a sage edge; Mixa uses butter, ceramic and peach. Original packaging remains available in each product dialog. A separate generated physical studio turns the four-point coral sparkle into a translucent sculpture, while macro cream and gel imagery adds texture. These are illustrative environments, never replacement-label evidence or claims about a formula. No generic beauty-model hero, flower collage, false social proof, or black/gold luxury detour.

The signature is a useful retail ritual: look behind the hype. A Spark Lens focuses on packaging and product facts, Skin Receipts expose source and verification state, and Skin Moods help browse goals without diagnosing skin. Shopping and brand studio are two views of one system.

## Tokens

- Core ivory #FFF9F3; ink plum #3B2158; body muted #6B5879; CTA cherry #B82B55 with white; logo coral #F29AA8.
- Secondary lilac #EADFFF, blush #F7CBD4, sage #C8D9BF, butter #FFE7A7. One dominant secondary per section.
- Recipes: Balanced Plum uses neutral canvas + lilac discovery; Lilac Story increases story surface; Cherry Energy uses blush story surface and cherry emphasis. Primary ink, logo, and readable CTA remain stable.
- Body Noto Sans Arabic; Arabic display Alexandria; Latin Plus Jakarta Sans. Runtime WOFF2 may be self-hosted with licenses. Brand export lists official font sources and excludes font binaries.
- Container 1280px; desktop 48px inset; mobile 20px. 12-column macro grid / four-column mobile rhythm.
- Type: Arabic headline 76–112px desktop / 52–68px mobile, body 15–18px, secondary 12px minimum. English headline 72–92px / 48–64px.
- Radius 10/18/28; packaging/receipt shapes reference supplied brand assets; no arbitrary pills on all cards.
- Motion: one-shot product arrivals, selectable spotlights, focus lens reveals, and one silent macro film. Transform and opacity for interface motion; video pauses offscreen. Reduced motion removes decorative movement; data-saving mode requires manual playback.
- Native dialogs, button/input semantics, 44px targets, keyboard and focus restoration. Structural RTL, isolated Latin/ingredient/number strings.

## Product truth

Manufacturer pages and packshots inform identification and neutral description. Visual ingredient, benefit and use cards expose their supporting evidence without claiming clinical certainty. They do not verify the seller's Saudi batch, stock, price, expiry, sourcing, product notification, delivery or exact local formula. Exact local INCI matching remains pending for P016 160 ml and P017 100 ml; P018 uses documented reference evidence because its manufacturer page is retired. These fields remain null or pending. Prototype bag can accept items and simulate review/completion with no charge or transmission. Retinoid comparison never becomes an instruction to combine products.

## Delivery

Buildless HTML/CSS/JS, portable to existing GitHub Pages artifact deployment under `nurimi/`. Preserve sibling artifacts. `product-details.css`, `data/product-breakdowns.json` and `data/breakdown-sources.md` define the expanded product-detail system. Generated scene records live in `assets/product-scenes/provenance.md`, and `downloads/NURIMI-product-visuals.zip` packages the product visuals. Product data, design tokens, digitized SVG source, receipt text and brand guidelines remain editable or downloadable. No production merchant integration or live checkout.
