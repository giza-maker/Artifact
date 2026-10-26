# NURIMI / نوريمي

Arabic-first brand world and own-inventory shopping prototype for a Saudi skincare retailer. The supplied inventory covers Arencia, Celimax, Anua and Mixa: 22 product identities across 23 size variants. Static HTML/CSS/JS, no build step or connected merchant backend. Artifact path: https://giza-maker.github.io/Artifact/nurimi/.

## Source and decision map

**Selected:** original rounded lowercase plum `nurimi.` mark, terminal dot, coral four-point sparkle, NURIMI / نوريمي, بشرتك أهم., plum + ivory anchors. The supplied approved full reference outranks later concepts.

**Developed as experiments:** Spark Lens, Skin Receipt, Skin Moods; Balanced Plum, Lilac Story and Cherry Energy recipes; packaging application and campaign voice. These are tangible prototype applications, not claims of earlier approval or measured commercial performance.

**Rejected:** black/gold luxury detour, serif replacement mark, generic beauty-model/flower moodboard, private-label product relabeling, invented testimonials or stock urgency. No MAWJ brand or booking assumptions reused.

**Verification pending:** legal/name/merchant details, final vector optical approval, exact Saudi product variants, source invoices, barcode, batch/expiry, local product status, quantity, price, fulfillment, claims and photography reuse permission. The prototype remains fully explorable with these fields unverified.

## What works

- Arabic/English with structural RTL and isolated manufacturer/ingredient strings.
- Shop and brand-studio views, browser back, responsive navigation.
- Search, saved picks, two-product comparison and source-linked product details.
- Campaign hero with selectable original packshots, generated physical scenery and a silent macro texture film. Product cards and dialogs use 23 generated scene images, with original packaging available from each product dialog. Video loads when its panel enters view, pauses offscreen, and respects reduced motion and data-saving preferences.
- Goal, brand and product-type filters, progressive eight-item browsing and per-card demo-bag additions.
- Source-linked product details with visual ingredient, benefit and use cards, quantity controls, factual Skin Receipt and local text download.
- Browser-local demo bag, editable quantities, delivery/city selection, review and sample confirmation. No personal data required, request transmission or charge.
- Logo ground and clear-space studio, three global palette recipes, computed contrast, color/copy clipboard controls.
- Keyboard/pointer product magnifier using the mark's source-derived sparkle silhouette.
- Full-range receipt builder, packaging concept, editable SVG/CSS/JSON/Markdown exports and a brand guide.

## Files

`app.js` owns brand/navigation/language/receipt/lens interactions. `campaign.js` and `campaign.css` own the campaign scenery, spotlight and video controls. `shop.js` and `product-details.css` own the catalog, expanded product dialogs, comparison, saved picks, demo bag and sample checkout. `data/products.json` is the editable inventory dataset; `data/product-breakdowns.json` contains the ingredient, benefit, use and evidence cards, with source notes in `data/breakdown-sources.md`. `styles.css` owns brand tokens and site layout; `shop.css` is scoped shopping UI. `assets/brand/` contains digitized vectors and a generated packaging concept. `assets/products/` contains manufacturer and reference imagery, plus cleaned supplied-photo cutouts, optimized for web. `assets/product-scenes/` contains 23 generated product scenes; its generation record is in `assets/product-scenes/provenance.md`. `assets/campaign/provenance.md` records generated campaign scenery and video sources. `downloads/NURIMI-product-visuals.zip` packages the product visuals, while `downloads/` also contains portable brand exports.

All commercial values are null until supplied. Manufacturer web information identifies products and cosmetic format; it does not prove NURIMI's local inventory status. Exact local INCI matching remains pending for the supplied P016 160 ml and P017 100 ml variants. P018 relies on documented reference evidence because its manufacturer page is retired. Product copy avoids clinical certainty. Source references and image provenance are recorded in `data/source-notes.md`, `data/breakdown-sources.md`, `asset-sources.md` and `assets/product-scenes/provenance.md`.

## Local preview

Serve this folder with a static server, such as `python -m http.server 4175 --bind 127.0.0.1`. Open its printed loopback URL. No npm install or backend account required. Do not open index.html directly via file:// because product data uses fetch.

Brand data, sources, scripts and QA from the user's archives remain outside the public artifact directory. Preserve existing sibling artifacts when deploying.
