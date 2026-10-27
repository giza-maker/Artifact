# Integration boundary

M6 is a single-user, local-first validation build. Inventory and confirmed receipt data remain on the device. Receipt recognition and explicit Zara sends use the paired service.

The deployed scan endpoint is `https://nomli-scan-proxy.ahmed-aljazayeerly.workers.dev`. Scanning uses `GEMINI_MODEL=gemini-3.5-flash-lite`; Zara uses `GEMINI_ASSISTANT_MODEL=gemini-3.5-flash-lite`. Both reuse the existing Gemini API key stored as an encrypted Cloudflare secret. The app stores the endpoint and device access code entered by the user, never the provider key. A private setup QR can fill those fields; the user must still test and save the connection.

Selected receipt files pass through the Cloudflare Worker to Google for recognition. The app does not retain uploaded file bytes after processing. Confirmed structured inventory and receipt data are stored locally. Inventory backup/restore excludes scan connection configuration.

## Current scan contract (retained M2 service)

- `GET /api/v1/health` checks whether the configured provider, key and rate limiter are ready. Requests require the device access code and an allowed origin.
- `POST /api/v1/scan-drafts` accepts one base64-encoded JPEG, PNG, WebP or PDF plus its file name and scan kind. It returns an editable draft; it does not write inventory.
- Images are limited to 4 MiB. PDFs are limited to 2 MiB and three pages. Client and Worker validate file signatures against the declared MIME type.
- Cloudflare rate limiting is approximately 10 combined scan and Zara requests per 60 seconds per Cloudflare location. It is abuse protection, not a hard account or billing cap.
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

These remain single-device persistence guarantees. M4 adds the assistant reply route to the existing Worker, reusing its device authentication, origin checks, rate limiter and encrypted provider key. No accounts or cloud inventory transactions are added. M4 APK compilation and package verification pass; physical-phone validation remains pending.

## M4 assistant contract

- `POST /api/v1/assistant-replies` requires the paired device code and allowed origin. Request includes a question (up to 2,000 characters), last six question/answer exchanges and validated context. Request body limit is 192 KiB; reply limit is 64 KiB. Worker timeout is 45 seconds; client timeout is 50 seconds.
- Context includes inventory quantities, units, cooking links, measured conversions, expiry and storage; profile exclusions/preferences; selected tools; requested servings; selected recipe; active phase/current step and frozen planned allocations. Worker adds the curated catalog and deterministic stock/tool assessments.
- Reply contains answer, warnings and at most three proposals. Supported proposals are `set_quantity` for an existing inventory ID, or `open_recipe` for a known recipe and 1–12 servings. Validators enforce bounds, known IDs and recipe allergen exclusions. This does not establish allergen-free food or cross-contact safety.
- Advice and substitutions remain text. Proposals require explicit intent in the current question and separate before/after review plus confirmation. Application rechecks the full context; stale proposals and any proposal during active cooking fail. No model writes inventory directly.
- Explicit Send transmits context through Cloudflare to Google. Worker is stateless and stores no chats. Up to 20 exchanges persist locally; backups include questions and answers, excluding private connection configuration. This makes no claim about provider retention.
- Cancellation keeps the draft question. Network, authentication, rate-limit, timeout and invalid-response failures leave inventory unchanged. Retry requires another Send.

Gemini 3.1 was temporarily unavailable in live checks: assistant calls repeatedly returned 503 and scanning returned a provider error. Both scanning and Zara are now configured for Gemini 3.5 Flash-Lite. Four synthetic live checks passed: exact inventory/readiness for four servings; an explicit oats quantity proposal from 500 g to 350 g with confirmed pure-domain application; a recipe proposal for four servings; and an Arabic current-step answer with zero proposals during cooking. Observed calls took about 2.8, 5.5, 20.1 and 5.1 seconds respectively. These checks are not a performance or accuracy benchmark. All 142 automated tests pass; final release evidence is in the verification record. Native phone QA remains pending.

Current Gemini 3.5 synthetic PNG/PDF checks returned 1,600 g, 500 g and 1 L, with AED 39.62 total and AED 1.89 tax; expiry remained unknown. One PNG reply omitted discount, correctly leaving finance review incomplete until a human explicitly entered zero. These checks do not establish general receipt accuracy. Earlier M2 scan evidence above remains historical.

See [Zara phone checks](ASSISTANT.md).

## M5 voice boundary

The M4 backend, Gemini 3.5 Flash-Lite configuration, inventory, scan, cooking and reviewed Zara proposals remain unchanged. No account work is added. M5 uses version `0.6.0-m5` / code `6`, validation package `com.nomli.mvp.validation` and the retained validation signing certificate. M5 compilation, signing and package verification pass; published checksum matches. Historical M4 evidence above stays unchanged.

Android's default `SpeechRecognizer` service supplies text through a native Capacitor bridge. The manifest declares `RECORD_AUDIO` and speech-service visibility; runtime permission follows explicit Speak. Native Android classes provide recognition, with no extra speech SDK, provider key or audio media files. `en-US`, `ar-SA` and `ar-EG` are requested locales, subject to the installed provider and language packs. The provider may stream audio online; neither offline operation nor provider non-retention is promised.

Nomli keeps capture/review transcript only in memory. Finish requests a final result; Cancel discards it. Review accepts 1–2,000 characters. Use transcript explicitly appends to the existing draft; a separate Replace action replaces it. Combined text must stay within 2,000 characters. Send then uses the unchanged M4 assistant request/context. Inserted and sent questions enter normal local conversation/backups. Voice cannot execute commands or write inventory.

Native deadline is 35 seconds including permission, capture stops after 20 seconds and final-result wait is bounded to 8 seconds. JavaScript watchdog is 40 seconds. Request IDs isolate turns and late callbacks. Navigation, dialog opening and background cancellation clear pending UI state; native pause during capture, stop and destroy release recognition. The permission dialog's own pause is handled separately. Cleanup invalidates a session before cancelling/destroying its recognizer.

All 161 JavaScript tests pass, including 13 controller and six bridge tests covering cancellation, late callbacks, cleanup, errors and length limits. These are mocked/pure JavaScript checks, not actual Android audio or device QA. Native permission flows, provider availability, noisy Arabic recognition, Bluetooth/call interruption, background microphone release, camera/picker, notifications and update-on-phone checks remain pending. See [voice checklist](VOICE.md).

## M6 regression hardening

M6 uses version `0.7.0-m6`, code `7`, the same validation package and signing certificate. Inventory, receipt scanning, cooking, live Zara and reviewed voice remain in scope. No accounts or new API keys are required. APK compilation, signing, package and uploaded-checksum verification pass.

Scan imports now require own dictionary entries for merge targets, including IDs matching inherited object properties. Review dictionaries have null prototypes. Repeated scan normalization keeps warnings unique and bounded while retaining required review diagnostics. Failed native timer cancellation retains its alert ID; replacing or removing that timer owner must cancel the alert before the new state is saved. Failure rolls back the transition, leaving it retryable. Android backup export reports success only after file streams close.

All 171 JavaScript tests and content checks pass. Live synthetic PNG/PDF scans returned the expected quantities and total, and a deployed Zara correction proposal passed validation. No physical device or emulator is connected. See the [M6 phone checklist](TESTING.md); current build evidence belongs in the [verification record](VERIFICATION.md).

## Capability status

| Capability | M6 status | Remaining work |
| --- | --- | --- |
| Receipt image/PDF recognition | Deployed Cloudflare proxy, Gemini adapter, bounded upload validation and editable review | Broader accuracy evaluation and physical-device QA |
| Local inventory | Native Preferences with localStorage fallback, atomic saves, identical-file dedupe and validated backups | Physical-device persistence and recovery QA |
| Camera / document selection | Capacitor camera bridge and Android SAF picker | Device permissions and camera/picker QA |
| Barcode products | Native barcode capture and synthetic fixtures | Product lookup adapter, cache and regional fallback |
| Cooking | Static catalog, linked-stock allocation, prep/tool confirmation, resumable timer, reviewed deduction and undo | Physical-device QA |
| Zara | Live Gemini replies and validated, separately confirmed proposals | Physical-device QA and broader answer evaluation |
| Voice | Optional Android system recognition, editable transcript, explicit append/replace and Send | Physical-phone permission/provider/Arabic/noisy-kitchen checks; offline behavior |
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
