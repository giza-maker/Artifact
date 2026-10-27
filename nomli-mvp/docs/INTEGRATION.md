# Integration boundary

M3 is a single-user, local-first validation build. Inventory and confirmed receipt data remain on the device. Recognition is the only current network-dependent product path.

The deployed scan endpoint is `https://nomli-scan-proxy.ahmed-aljazayeerly.workers.dev`. It uses Gemini 3.1 Flash-Lite with a Gemini API key stored as an encrypted Cloudflare secret. The app stores the endpoint and device access code entered by the user, never the provider key. A private setup QR can fill those fields; the user must still test and save the connection.

Selected receipt files pass through the Cloudflare Worker to Google for recognition. The app does not retain uploaded file bytes after processing. Confirmed structured inventory and receipt data are stored locally. Inventory backup/restore excludes scan connection configuration.

## Current scan contract (retained M2 service)

- `GET /api/v1/health` checks whether the configured provider, key and rate limiter are ready. Requests require the device access code and an allowed origin.
- `POST /api/v1/scan-drafts` accepts one base64-encoded JPEG, PNG, WebP or PDF plus its file name and scan kind. It returns an editable draft; it does not write inventory.
- Images are limited to 4 MiB. PDFs are limited to 2 MiB and three pages. Client and Worker validate file signatures against the declared MIME type.
- Cloudflare rate limiting is approximately 10 recognition requests per 60 seconds per Cloudflare location. It is abuse protection, not a hard account or billing cap.
- The client deduplicates identical file bytes combined with scan kind. A confirmed draft updates receipt and inventory state atomically in local persistence.
- Users can review and edit quantity, unit, storage, date, merchant, currency, tax and discount before saving. M3 optionally applies reviewed cooking links to new stock or compatible same-identity merges in the same atomic local import. Replay does not relink stock.

Synthetic PNG and PDF calls succeeded against the deployed endpoint in about five and four seconds. After an initial multipack error was corrected, both produced the expected item quantities, AED 39.62 total and AED 1.89 tax. Reviewed save/reload, duplicate-file protection and backup roundtrip passed with those actual results. These small fixture checks are not an accuracy benchmark.

Gemini free-tier and paid quotas depend on the API account and its billing setup. A Gemini consumer subscription, including Ultra, does not by itself grant or define API quota.

## M3 local cooking contract

- The static catalog contains 20 curated recipes and 88 ingredients. Stock participates only after a human explicitly saves `item.ingredientId`; name suggestions do not establish identity.
- Compatible units convert within g/kg or ml/l. Count-to-mass conversion requires optional measured or printed `item.gramsPerUnit`. The domain does not infer weights or volume-to-mass density.
- Recipe assessment scales servings, allocates linked lots by earliest recorded expiry, and excludes recorded dates before today. Dietary filters use catalog tags; they do not establish allergen-free food or cross-contact safety.
- Sessions freeze servings, requirements and allocations. Preparation checklist and tool confirmation precede cooking. Running timers persist a deadline and resume against that deadline.
- Final actual-use review requires explicit confirmation. Stock deduction and meal recording occur in one local state save. A cooking session ID permanently identifies its consumption: identical replay returns the original result; conflicting replay fails. Undo does not permit another deduction for that session.
- Undo adds recorded use back to current quantities, preserving later top-ups. Deleted stock or changed ingredient identity, normalized unit or grams-per-unit conversion blocks undo.
- M1/M2 state-version-1 backups remain compatible. New links, conversions, sessions and meal records have strict validation. Scan connection credentials remain outside inventory backups.

These are single-device persistence guarantees. M3 adds no backend routes, accounts, provider keys or cloud inventory transactions. The protected Gemini Worker and private setup QR remain unchanged. APK and physical-phone verification are still pending.

## Capability status

| Capability | M3 status | Remaining work |
| --- | --- | --- |
| Receipt image/PDF recognition | Deployed Cloudflare proxy, Gemini adapter, bounded upload validation and editable review | Broader accuracy evaluation and physical-device QA |
| Local inventory | Native Preferences with localStorage fallback, atomic saves, identical-file dedupe and validated backups | Physical-device persistence and recovery QA |
| Camera / document selection | Capacitor camera bridge and Android SAF picker | Device permissions and camera/picker QA |
| Barcode products | Native barcode capture and synthetic fixtures | Product lookup adapter, cache and regional fallback |
| Cooking | Static catalog, linked-stock allocation, prep/tool confirmation, resumable timer, reviewed deduction and undo | Physical-device QA; live grounded Zara remains M4 |
| Voice | Command fixtures and editable transcript demo | M4: push-to-talk capture, transcription, review and noisy-kitchen testing |
| Accounts / cloud storage | Supabase client dependency and future contract notes | Project, schema, RLS, migrations, sync, transactions and authorization tests |

## Future multi-user contract

The routes below describe later account-backed architecture. They are not implemented by the retained M2 Worker and do not make accounts a prerequisite for local validation.

- `POST /api/v1/scan-drafts`: authenticated upload returning `202` plus a draft ID, with a documented retention policy.
- `GET /api/v1/scan-drafts/:id`: owner-scoped draft retrieval.
- `POST /api/v1/receipt-imports`: reviewed draft version, server confirmation and idempotency key; replay returns `200`, conflicting reuse returns `409`.
- `POST /api/v1/assistant-turns`: bounded cooking context and curated recipe candidates, returning a reply plus proposed changes. Models never write inventory directly.
- `POST /api/v1/consumptions`: reviewed quantities applied in one owner-scoped database transaction; stale or insufficient stock returns `409`.

Future remote writes need authenticated owner derivation, database transactions and owner-scoped idempotency constraints. Never trust owner identity or review status supplied by a model. Do not log full receipts or audio by default.

## Official references

- [Capacitor 8 setup](https://capacitorjs.com/docs/getting-started/environment-setup)
- [Barcode plugin](https://capacitorjs.com/docs/apis/barcode-scanner)
- [Android command-line builds](https://developer.android.com/build/building-cmdline)
- [Gemini API documentation](https://ai.google.dev/gemini-api/docs)
- [Supabase row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Open Food Facts API](https://openfoodfacts.github.io/openfoodfacts-server/api/)
