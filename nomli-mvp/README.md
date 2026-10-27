# Nomli kitchen MVP, milestone 3

Single-user local kitchen inventory with reviewed receipt recognition and curated cooking. M3 connects explicitly linked stock to 20 curated recipes, guides preparation and cooking, then deducts reviewed actual use atomically. Receipt images and PDFs still use the protected M2 Cloudflare recognition service and editable review before local save.

Validation package: `com.nomli.mvp.validation`, app label **Nomli Test**, version **0.4.0-m3** (`versionCode` 4). It uses the M1/M2 validation update channel and remains separate from the earlier demo package. Published milestone APKs use the retained local validation signing key; GitHub Actions does not receive that key.

Inventory works offline. Receipt recognition needs internet access. Current recognition service is `https://nomli-scan-proxy.ahmed-aljazayeerly.workers.dev`, backed by Gemini 3.1 Flash-Lite. Provider credentials are encrypted server-side and never bundled in the app.

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

## Included

- Fresh local inventory with add, edit and delete; fractional quantities; canonical units; storage locations; optional expiry provenance; sorting and search.
- Native Preferences persistence with browser localStorage fallback. Validated JSON backup export/restore uses Android document pickers and requires preview plus typed `REPLACE`. M1/M2 state-version-1 backups remain compatible; new cooking fields are strictly validated.
- Reviewed image/PDF receipt flow with atomic local save and duplicate-file protection.
- Image uploads up to 4 MiB. PDFs up to 2 MiB and three pages. JPEG, PNG, WebP and PDF content is checked against its declared type.
- Approximate Cloudflare rate limit of 10 recognition requests per 60 seconds per Cloudflare location. This is abuse protection, not a hard billing cap.
- Static cooking catalog with 20 curated recipes and 88 bilingual ingredients; stock assessment, preparation checklist, tool confirmation, deadline timer resume, reviewed consumption and undo.
- Scripted Zara help and an editable sample voice transcript remain demos; live Zara and voice integration are M4 work.
- Starter content: 88 bilingual ingredients, 20 structured recipes, 24 Arabic/English voice cases, three receipt fixtures, six synthetic barcode records and a synthetic digital receipt PDF/image.
- Capacitor Android shell with camera, barcode, notifications and preferences plugins plus native backup and scan bridges.
- Tested scan client, validation schema, integer-money logic, persistence, deduplication and bounded server proxy.

## Privacy and limits

Selected receipt files are sent through the Cloudflare proxy to Google for recognition. The app does not retain uploaded file bytes after processing. Confirmed structured results remain in local app storage.

Gemini quota depends on the Google account and billing configuration behind the server key. A Gemini app subscription, including an Ultra subscription, does not by itself determine API free-tier or paid quota.

Synthetic PNG and PDF receipts completed live calls in about five and four seconds. After correcting an initial multipack error, both returned the expected quantities, AED 39.62 total and AED 1.89 tax. Reviewed save/reload, duplicate-file protection and backup roundtrip passed with those actual results. These small fixture checks are not an accuracy benchmark.

## Not implemented or verified

- M3 APK generation, install/update verification and physical-phone QA are pending. Native picker, camera permissions, Preferences behavior across force-stop and keyboard behavior still need device testing.
- Live Zara, voice recognition and barcode product lookup are not connected. Cooking uses the local curated catalog; live assistant work remains M4.
- Accounts, cloud inventory sync, multi-user authorization and database transactions remain future work.
- Receipt recognition can be wrong. Review is mandatory before local data changes.

M1 evidence remains in [verification](docs/VERIFICATION.md). See [integration boundaries](docs/INTEGRATION.md), [content details](docs/CONTENT.md), [verification](docs/VERIFICATION.md), and [design contract](DESIGN.md).
