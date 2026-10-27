# Nomli kitchen MVP, milestone 4

Single-user local kitchen inventory with reviewed receipt recognition, curated cooking and live Zara assistance. M4 sends explicitly requested kitchen context through the paired Cloudflare service to Gemini. Proposed quantity or recipe changes require separate review and confirmation. M3 cooking and the protected M2 receipt workflow remain available.

Validation package: `com.nomli.mvp.validation`, app label **Nomli Test**, version **0.5.0-m4** (`versionCode` 5). It uses the M1/M2 validation update channel and remains separate from the earlier demo package. Published milestone APKs use the retained local validation signing key; GitHub Actions does not receive that key.

Inventory works offline. Receipt recognition and live Zara need internet access. Current recognition service is `https://nomli-scan-proxy.ahmed-aljazayeerly.workers.dev`, with Gemini 3.5 Flash-Lite for scanning and Zara. Provider credentials are encrypted server-side and never bundled in the app.

M4 APK build verification pending. Planned download: [Nomli-M4.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m4-v0.5.0/Nomli-M4.apk). See the [Zara phone checklist](docs/ASSISTANT.md), [APK checklist](docs/APK.md) and [verification record](docs/VERIFICATION.md).

## Start

```powershell
cd nomli-mvp
npm ci --legacy-peer-deps
npm run dev
```

Open the local URL Vite prints. `npm run build` produces a static `dist/` folder with relative asset paths. Serve it over HTTP; `file://` does not run ES modules reliably.

```powershell
npm run check
npm run android:debug
```

Android builds need Java 21, Android API 36 and build tools 36. Existing host Java/SDK can be reused; see [setup](docs/SETUP.md). First Gradle/Maven build needs network access. `android:debug` syncs web assets and writes `artifacts/Nomli-MVP-debug.apk` after a successful compilation.

## Receipt scan flow

1. Open **Scan connection**. On Android, scan the private setup QR to fill the endpoint and device access code, or enter them manually.
2. Run **Test connection**, then save the configuration.
3. Pick or capture a receipt image or PDF. Android uses the native Storage Access Framework picker.
4. Review every extracted line and receipt field. Edit quantity, unit, storage, date, merchant, currency, tax or discount as needed. Optionally choose a cooking ingredient and measured grams per count unit for new stock or a compatible merge.
5. Save. Inventory, receipt state and reviewed cooking links update atomically. Reusing identical file bytes with the same scan kind is deduplicated; replay does not apply new links.

Scan connection configuration is stored separately from inventory and is not included in inventory backups. Keep the setup QR and device access code private.

## Cooking flow

1. Add or edit inventory and explicitly choose its cooking ingredient. Name suggestions do not save a link. For count units, optionally enter measured or printed grams per current unit.
2. Choose a recipe from the static catalog and set servings. Availability uses linked stock, allocates earliest recorded expiry first, and excludes lots whose recorded date has passed. Catalog dietary filters use recorded tags; they do not guarantee allergen-free food or account for cross-contact.
3. Start a session, check preparation items and confirm tools. Servings and stock allocations freeze for that session.
4. Follow cooking steps. An active timer resumes from its saved deadline after reload.
5. Review actual quantities used and explicitly confirm. One atomic local save records the meal and deducts stock. Repeating the same session cannot deduct twice, including after undo.
6. Undo a completed meal to restore its recorded quantities while preserving later top-ups. Undo is blocked if stock was deleted or its cooking identity, unit or conversion changed.

Compatible conversions cover g/kg and ml/l. Count-to-mass conversions require an explicit measured `gramsPerUnit`; volume-to-mass and guessed item weights are unsupported.

## Zara flow

1. Reuse the saved **Scan connection** endpoint and device code. No new provider key is needed on the phone.
2. Open **Zara**, enter a question and press **Send question**. Suggestions only fill the question field.
3. Review the answer. For a proposed change, open **Review proposed change**, check the before/after details, tick confirmation and apply. Cancel leaves data unchanged.
4. During cooking, ask about the current step. The frozen allocation plan stays authoritative; cancel and replan the cooking session if actual substitutions would change deductions.

Each Send shares inventory, profile, tool preferences, selected/current recipe and frozen cooking allocation plan, plus the last six exchanges, with Cloudflare and Google. Up to 20 question/answer exchanges stay locally and appear in inventory backups. Connection credentials remain excluded. Worker stores no chat history; provider retention is governed separately. See [assistant contract and phone checks](docs/ASSISTANT.md).

## Included

- Fresh local inventory with add, edit and delete; fractional quantities; canonical units; storage locations; optional expiry provenance; sorting and search.
- Native Preferences persistence with browser localStorage fallback. Validated JSON backup export/restore uses Android document pickers and requires preview plus typed `REPLACE`. M1/M2 state-version-1 backups remain compatible; new cooking fields are strictly validated.
- Reviewed image/PDF receipt flow with atomic local save and duplicate-file protection.
- Image uploads up to 4 MiB. PDFs up to 2 MiB and three pages. JPEG, PNG, WebP and PDF content is checked against its declared type.
- Approximate Cloudflare rate limit of 10 combined scan and Zara requests per 60 seconds per Cloudflare location. This is abuse protection, not a hard billing cap.
- Static cooking catalog with 20 curated recipes and 88 bilingual ingredients; stock assessment, preparation checklist, tool confirmation, deadline timer resume, reviewed consumption and undo.
- Live Zara grounded in current inventory, profile, tools and the curated catalog; quantity and recipe proposals require review. Live voice remains planned; command fixtures are retained.
- Starter content: 88 bilingual ingredients, 20 structured recipes, 24 Arabic/English voice cases, three receipt fixtures, six synthetic barcode records and a synthetic digital receipt PDF/image.
- Capacitor Android shell with camera, barcode, notifications and preferences plugins plus native backup and scan bridges.
- Tested scan client, validation schema, integer-money logic, persistence, deduplication and bounded server proxy.

## Privacy and limits

Selected receipt files are sent through the Cloudflare proxy to Google for recognition. The app does not retain uploaded file bytes after processing. Confirmed structured results remain in local app storage.

Gemini quota depends on the Google account and billing configuration behind the server key. A Gemini app subscription, including an Ultra subscription, does not by itself determine API free-tier or paid quota.

Synthetic PNG and PDF receipts completed live calls in about five and four seconds. After correcting an initial multipack error, both returned the expected quantities, AED 39.62 total and AED 1.89 tax. Reviewed save/reload, duplicate-file protection and backup roundtrip passed with those actual results. These small fixture checks are not an accuracy benchmark.

## Not implemented or verified

- M4 APK build verification, install/update verification and physical-phone QA remain pending. Native picker, camera permissions, Preferences behavior across force-stop and keyboard behavior still need device testing.
- Voice recognition and barcode product lookup are not connected. Recipes remain curated; Zara does not rewrite recipes or generate a new catalog.
- Accounts, cloud inventory sync, multi-user authorization and database transactions remain future work.
- Receipt recognition can be wrong. Review is mandatory before local data changes.

M1 evidence remains in [verification](docs/VERIFICATION.md). See [integration boundaries](docs/INTEGRATION.md), [content details](docs/CONTENT.md), [verification](docs/VERIFICATION.md), and [design contract](DESIGN.md).
