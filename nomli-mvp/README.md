# Nomli kitchen MVP, milestone 2

Single-user local inventory with reviewed receipt recognition. M2 accepts receipt images and PDFs, sends them to a protected Cloudflare endpoint, opens an editable draft, then saves confirmed changes to local inventory in one atomic operation. Users can correct quantity, unit, storage, date, merchant, currency, tax and discount before saving.

Validation package: `com.nomli.mvp.validation`, app label **Nomli Test**, version **0.3.0-m2** (`versionCode` 3). It updates the M1 validation app and remains separate from the earlier demo package. Published milestone APKs use the retained local validation signing key; GitHub Actions does not receive that key.

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

## M2 scan flow

1. Open **Scan connection**. On Android, scan the private setup QR to fill the endpoint and device access code, or enter them manually.
2. Run **Test connection**, then save the configuration.
3. Pick or capture a receipt image or PDF. Android uses the native Storage Access Framework picker.
4. Review every extracted line and receipt field. Edit quantity, unit, storage, date, merchant, currency, tax or discount as needed.
5. Save. Inventory and receipt state update atomically. Reusing identical file bytes with the same scan kind is deduplicated.

Scan connection configuration is stored separately from inventory and is not included in inventory backups. Keep the setup QR and device access code private.

## Included

- Fresh local inventory with add, edit and delete; fractional quantities; canonical units; storage locations; optional expiry provenance; sorting and search.
- Native Preferences persistence with browser localStorage fallback. Validated JSON backup export/restore uses Android document pickers and requires preview plus typed `REPLACE`.
- Reviewed image/PDF receipt flow with atomic local save and duplicate-file protection.
- Image uploads up to 4 MiB. PDFs up to 2 MiB and three pages. JPEG, PNG, WebP and PDF content is checked against its declared type.
- Approximate Cloudflare rate limit of 10 recognition requests per 60 seconds per Cloudflare location. This is abuse protection, not a hard billing cap.
- Four sample recipes in the mockup, cooking steps, timer, session resume and reviewed consumption.
- Contextual scripted Zara, current-step help and editable sample voice transcript.
- Starter content: 88 bilingual ingredients, 20 structured recipes, 24 Arabic/English voice cases, three receipt fixtures, six synthetic barcode records and a synthetic digital receipt PDF/image.
- Capacitor Android shell with camera, barcode, notifications and preferences plugins plus native backup and scan bridges.
- Tested scan client, validation schema, integer-money logic, persistence, deduplication and bounded server proxy.

## Privacy and limits

Selected receipt files are sent through the Cloudflare proxy to Google for recognition. The app does not retain uploaded file bytes after processing. Confirmed structured results remain in local app storage.

Gemini quota depends on the Google account and billing configuration behind the server key. A Gemini app subscription, including an Ultra subscription, does not by itself determine API free-tier or paid quota.

Synthetic PNG and PDF receipts completed live calls in about five and four seconds. After correcting an initial multipack error, both returned the expected quantities, AED 39.62 total and AED 1.89 tax. Reviewed save/reload, duplicate-file protection and backup roundtrip passed with those actual results. These small fixture checks are not an accuracy benchmark.

## Not implemented or verified

- No physical-phone QA has been completed. Native picker, camera permissions, Preferences behavior across force-stop, keyboard behavior and update installation still need device testing.
- Live Zara, voice recognition, barcode product lookup and robust cooking behavior are not connected.
- Accounts, cloud inventory sync, multi-user authorization and database transactions remain future work.
- Receipt recognition can be wrong. Review is mandatory before local data changes.

M1 evidence remains in [verification](docs/VERIFICATION.md). See [integration boundaries](docs/INTEGRATION.md), [content details](docs/CONTENT.md), [verification](docs/VERIFICATION.md), and [design contract](DESIGN.md).
