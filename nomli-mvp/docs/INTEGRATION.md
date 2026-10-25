# Integration boundary

This package contains a working local prototype, Android shell, curated starter content and tested pure domain functions. It does not contain a deployed API, account service, OCR model or live agent. No provider requests are made by the demo.

Recommended first implementation slice: authenticated user → one inventory record → photo receipt draft → editable review → atomic save → recipe match → cooking consumption review. Keep the same four-tab UI.

## Provider adapters

| Capability | Prepared asset | Remaining implementation |
| --- | --- | --- |
| Camera / barcode | Official Capacitor plugins and device bridge | Device permission and camera QA; product lookup adapter |
| Grocery product lookup | Synthetic barcode fixtures | Open Food Facts API adapter, cache, regional coverage fallback; identify user agent |
| Paper/digital receipts | Bilingual receipt fixtures, editable UI, integer-money domain module | Azure Document Intelligence receipt adapter, file validation, job polling and confidence review |
| Photo inventory / expiry | Camera bridge and review screens | Vision extraction adapter; printed-date provenance; multiple inventory lots |
| Cooking assistant | Curated recipes, tool schemas, assistant policy | Authenticated server endpoint, model evaluation, grounded recipe selection, streaming |
| Voice | Bilingual command fixtures and transcript review demo | Push-to-talk capture/transcription; review before change; interruption and noisy-kitchen testing |
| Storage / auth | Supabase client installed and server environment template | Supabase project, schema/RLS, migrations, sync, atomic transactions and authorization tests |

API keys belong on the server. Only the Supabase URL and publishable key may enter the client bundle, after row-level security is configured. Never ship a service-role, Azure or OpenAI key in the APK.

## Proposed server contract

Use authenticated, bounded requests. Derive owner from the verified session. Never accept owner identity or confirmed review status from the model as proof of authorization.

- `POST /api/v1/scan-drafts`: validated image/PDF upload → 202 with draft ID; enforce upload size/type/page limits and a private retention policy.
- `GET /api/v1/scan-drafts/:id`: owner's draft only → 200 with extracted fields, confidence and review flags; 404 for unavailable/other-owner IDs.
- `POST /api/v1/receipt-imports`: explicit reviewed draft version + server-issued confirmation + idempotency key → 201; replay → 200; changed payload on the same key → 409.
- `POST /api/v1/assistant-turns`: bounded text, current cooking context and curated recipe candidates → streamed reply and proposed changes. No direct model writes.
- `POST /api/v1/consumptions`: reviewed, versioned quantities → atomic stock check/update; insufficient or stale stock → 409.

All writes need a database transaction and owner-scoped idempotency constraint. The pure `server/domain.mjs` functions demonstrate validation and immutable updates; they do not provide concurrent transaction isolation or tenant authorization. Use them behind authenticated handlers, not directly as internet endpoints.

Errors use `{ "error": { "code": "...", "message": "..." } }`: 400 malformed, 401 unauthenticated, 404 unavailable record, 409 conflict, 413 upload too large, 422 review/semantic validation, 429 limited, 502 upstream failure. Do not log full receipts or audio by default.

## Official references

- [Capacitor 8 setup](https://capacitorjs.com/docs/getting-started/environment-setup)
- [Barcode plugin](https://capacitorjs.com/docs/apis/barcode-scanner)
- [Android command-line builds](https://developer.android.com/build/building-cmdline)
- [Azure receipt model](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/prebuilt/receipt)
- [Supabase row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Open Food Facts API](https://openfoodfacts.github.io/openfoodfacts-server/api/)

Choose and verify exact OpenAI model IDs when connecting credentials. Model choice is intentionally configuration, not hardcoded into this preparation package.
