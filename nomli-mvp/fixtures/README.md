# Nomli synthetic fixtures

Fixtures exercise import, matching, review, and confirmation flows.

- `receipts.json`: Arabic paper, English paper, and English digital receipt cases. Every monetary value uses an integer minor unit. Each receipt declares currency, minor-unit scale, subtotal, tax, total, expected extraction, and review points.
- `barcode-products.json`: synthetic `SYN-NOMLI-*` identifiers. They are deliberately not GTINs and contain no real barcode claims.
- `digital-receipt-synthetic.pdf` and `.png`: actual input files matching `digital_en_aed_001` in the receipt JSON, rendered and visually checked.

All merchants, brands, prices, order references, identifiers, and transactions are invented. Do not use receipt results as OCR accuracy benchmarks. They test application contracts against fixed text only.

Expiry policy:

- `printedExpiry: null` means fixture has no printed expiry evidence.
- Never turn shelf-life estimates, receipt dates, scan dates, or catalog defaults into printed expiry dates.
- Store an expiry only after user confirms a visibly printed date or explicitly enters one.

License: fixture content uses [content pack MIT license](../content/LICENSE.md).
