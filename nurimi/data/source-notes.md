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
