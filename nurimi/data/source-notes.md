# NURIMI product data — source notes

Checked 2026-10-25 against official US manufacturer storefront pages. Manufacturer statements remain cosmetic marketing information, not medical advice, Saudi authorization, or proof about NURIMI's local units.

## Product pages and packshots

| ID | Manufacturer page | Packshot file used | Notes |
|---|---|---|---|
| P001 | https://celimax.us/products/the-vita-a-retinol-shot-tightening-serum-30ml | Official Celimax gallery image `celimax-serum-ampoule-30ml-the-vita-a-retinol-shot-tightening-serum-30ml-1234217392.jpg` | Page lists 30 mL. Local barcode, pack, batch, expiry, origin chain, notification, and quantity still unverified. |
| P002 | https://arencia.us/products/retinal-booster-shot-advanced-retinal-caffeine-formula | Official Arencia gallery image `ENG_Retinal_Booster_Shot_1.png` | Page identifies Retinal Booster Shot Serum and 30 ml. Local unit verification pending. |
| P003 | https://arencia.us/products/pdrn-booster-shot-rosy-pdrn-peptides-for-glowy-healthy-skin | Official Arencia gallery image `ENG_PDRNBoosterShot.png` | Page lists 30 ml. Current lead image carried a US promotional price badge, so an alternate clean image from the same official gallery was used. Local unit verification pending. |
| P004 | https://arencia.us/products/vitamin-c-booster-shot-pure-vitamin-c-glutathione-for-bright-healthy-skin | Official Arencia gallery image `ENG_VitaminC_Booster_Shot_1.png` | Manufacturer currently lists 10 ml and 30 ml. Intake photo says 30 ml, but exact local SKU remains pending. Current lead image carried US promotional badges, so an alternate clean image from the same official gallery was used. |
| P005 | https://celimax.us/products/the-vita-a-retinal-shot-tightening-booster | Official Celimax gallery image `celimax-serum-ampoule-15ml-the-vita-a-retinal-shot-tightening-booster-1234217397.jpg` | Page lists a 15 ml single unit and a two-pack variant. Intake identity is the 15 ml single unit; local unit verification pending. |

Packshots were downloaded from manufacturer CDN URLs, resized only when needed to a maximum 1200 x 1200 canvas, and converted to WebP with Pillow. Packaging and transparency were preserved; no product artwork was redrawn. Images remain subject to manufacturer rights and reuse permission review.

## Copy boundaries

- `price`, `stock`, `batch`, and `expiry` stay `null`. Manufacturer storefront availability and US prices say nothing about NURIMI's Saudi inventory.
- `localVerification` stays `pending` for every product. Exact Saudi barcode, packaging language, INCI, importer/notifier, invoice chain, batch, expiry, storage, and claims approval require unit-level verification.
- Copy uses neutral ingredient and format descriptions. It omits manufacturer efficacy percentages, clinical-test numbers, medical outcomes, authenticity claims, and availability claims.
- `P001`, `P002`, and `P005` are separate retinoid choices, not a use-together set.

## General retinoid caution basis

The demo warning is intentionally general: do not combine multiple retinoid products; avoid retinoids during pregnancy; follow manufacturer directions; use daytime sun protection; seek qualified personal advice. Manufacturer pages provide use directions and sunscreen reminders. Generic pregnancy and sunscreen context is also supported by the American Academy of Dermatology:

- https://www.aad.org/public/everyday-care/skin-care-secrets/routine/pregnancy-skin-care
- https://www.aad.org/public/everyday-care/skin-care-secrets/anti-aging/retinoid-retinol/

This is content guidance for a prototype, not individualized medical advice.

## Catalog expansion — 2026-10-26

Deterministic ID map. Existing `P001`–`P005` remain unchanged. Duplicate intake photos #11 and #20 do not create SKUs.

| ID | Intake photo | Product / variant | Manufacturer source |
|---|---:|---|---|
| P006 | 1 | Anua Azelaic Acid 15 Intense Calming Serum, 30 ml | https://anuashop.jp/products/side0010 |
| P007 | 2 | Anua Heartleaf 77 Soothing Toner, 40 ml | https://anua.com/products/heartleaf-77-soothing-toner |
| P008 | 4 | Anua Heartleaf 77 Soothing Toner, 250 ml | https://anua.com/products/heartleaf-77-soothing-toner |
| P009 | 5 | Anua PDRN Hyaluronic Acid Capsule 100 Serum, 30 ml | https://anua.com/products/pdrn-hyaluronic-acid-capsule-100-serum |
| P010 | 6 | Anua Niacinamide 10 TXA 4 Serum, 30 ml | https://anua.com/products/niacinamide-10-txa-4-serum-2 |
| P011 | 7 | Anua Heartleaf Quercetinol Pore Deep Cleansing Foam, 150 ml | https://anua.com/products/heartleaf-quercetinol-pore-deep-cleansing-foam |
| P012 | 8/11 | Anua Heartleaf 70 Daily Lotion, 200 ml | https://anua.com/products/heartleaf-70-daily-lotion-copy-1 |
| P013 | 9 | Anua Heartleaf Pore Control Cleansing Oil, 200 ml | https://anua.com/products/heartleaf-pore-control-cleansing-oil-200ml |
| P014 | 10 | Anua Peach 77 Niacin Conditioning Milk, 150 ml | https://anua.com/products/peach-77-niacin-conditioning-milk-1-1 |
| P015 | 12 | Anua Peach 77 Niacin Enriched Cream, 50 ml | https://anua.com/products/peach-77-niacin-enriched-cream-1 |
| P016 | 13 | Anua Heartleaf 77 Clear Pad, 160 ml / 70 pads | https://anua.com/products/heartleaf-77-toner-pad-160ml |
| P017 | 14 | Anua Heartleaf 70 Soothing Cream, pictured 100 ml | https://anua.com/products/heartleaf-70-intense-calming-cream-50ml |
| P018 | 15 | Anua Green Lemon Vita C Blemish Serum, 20 g | Manufacturer page retired; intake label is primary identity/size evidence. |
| P019 | 16 | Arencia Eraser Shot Glycolic Acid Booster Serum, 30 ml | https://arencia.us/products/eraser-shot-glycolic-acid-booster-daily-clarifying-multi-acid-formula |
| P020 | 17 | Arencia NAD+ Time-Rewind Booster Shot Serum, 30 ml | https://arencia.us/products/nad-time-rewind-booster-shot-firming-revitalizing-serum |
| P021 | 18 | Celimax Retinal Shot Tightening Dual Cream, 50 ml | https://celimax.us/products/the-vita-a-retinal-shot-tightening-dual-cream |
| P022 | 3 | Mixa Ceramide Protect multi-use cream, local size pending | https://www.mixa.pl/produkt/mixa-ceramide-protect-nawilzajacy-krem-ochronny-do-twarzy-dloni-i-ciala |
| P023 | 21 | Mixa Crème Cica Réparation multi-use cream, local size pending | https://www.mixa.fr/corps/creme-cica-reparation-visage-corps-mains |

### Packshot provenance and exceptions

- `P006` uses clean Anua Japan official CDN packshot. `P008`–`P016` use clean Anua official CDN lead packshots. `P007` uses supplied intake photo #2 because current official galleries do not provide the exact 40 ml variant; using the 250 ml packshot would misrepresent the SKU.
- `P019` and `P020` use clean Arencia official CDN packshots. `P021` uses clean Celimax official CDN packshot. `P022` and `P023` use clean Mixa official-site packshots.
- `P018` official product page is no longer published. Final card uses a clean, unwatermarked product-only packshot from Cosmeterie (`https://www.cosmeterie.ie/anua/20-green-lemon-vita-c-blemish-serum`) rather than the temporary Anua campaign banner. Rights/source replacement remains unresolved.
- `P017` uses supplied intake photo #14. Intake says 100 ml “Heartleaf 70 Soothing Cream,” while current Anua official page is a different 50 ml “Heartleaf 70% Intense Calming Cream.” Record preserves photographed name/size and flags official match pending; the wrong 50 ml jar substitution was removed.
- `P020` uses an alternate badge-free Arencia official-gallery image. `P022` and `P023` use plain official Mixa packshots from product-page rich content, avoiding award badges and promotional banners.
- Mixa official regional pages list 400 ml for matching jar products, but photographed front labels do not expose size. Catalog intentionally keeps local sizes pending.

All expansion images were resized only to fit within 1200 × 1200 and encoded as WebP. No packaging, label, color, or silhouette edits were made.

### Reference labels in the interface

P017 links to the supplied photograph as its primary evidence; the related 50 ml manufacturer page is retained separately as `relatedManufacturerUrl` and is not presented as an exact 100 ml match. P018 links to the documented retailer reference and labels it as a product/image reference. Other source links retain manufacturer labels. P007 explicitly distinguishes the supplied 40 ml photo from the maker's product-family page. None verifies the local batch.

### Anua presentation cutouts

Final P007 and P017 cards use `p007-clean.webp` and `p017-clean.webp`, transparent background-cleanup edits made with OpenAI image generation from the exact supplied photographs. Names, front artwork, sizes and packaging forms were visually compared with their references. Small occluded edges were reconstructed, so these are presentation images rather than literal pixel masks. P007's reconstructed lower batch/expiry ink was removed entirely; no generated code is presented as evidence. Both original photographs remain available and are recorded in `originalImage`. Final images are 675 × 1200 WebP, 58,700 and 50,486 bytes respectively. No product identity, front label or size was substituted.


## Product-scene release — 26 October 2026

The final catalog now uses 23 generated brand-scene photographs rather than the earlier plain packshots described above. `assets/product-scenes/provenance.md` and `manifest.json` record inputs, prompts, known limitations and final file hashes. Original packaging remains available in each product dialog. The scene images never verify formula or commercial inventory facts.

P016 was regenerated from the exact supplied 160 ml Clear Pad retail box; the earlier 205 ml manufacturer jar remains only an archived image reference, not the displayed product. `p016-inventory.webp` is the original packaging toggle. PHA, centella and exfoliation claims were removed until the exact local back-label is matched. Mixa originals now use exact supplied jar photos `p022-inventory.webp` and `p023-inventory.webp`; their volumes remain pending. P017's 100 ml formula remains unconfirmed. P018's retired-page limitation remains explicit.

Selected ingredient, benefit and use cards are recorded separately in `product-breakdowns.json`, with primary sources and exceptions in `breakdown-sources.md`. They are not full INCI lists.
