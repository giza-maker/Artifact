# Verification record

## Milestone 3, 27 October 2026

- Source commit: `08c8c47a300239e90f7b0c14ed077772246f34ea`. All 110 automated tests, content checks, production web build and Capacitor sync pass. [CI run 40516558999](https://github.com/giza-maker/Artifact/actions/runs/40516558999) succeeded. Verified APK is 42,063,128 bytes with SHA-256 `d0fb13d2a1c2cf5c954dd035cff22fc07a0cab700bfa1d802940fc7b49d0f1fe`. Published GitHub asset size and SHA-256 match the verified local APK.
- `aapt` verified package `com.nomli.mvp.validation`, version `0.4.0-m3`, versionCode 4, minimum API 26 and target API 36. APK Signature Schemes v2/v3, 16 KB alignment and ZIP CRC checks pass. Certificate SHA-256 `8c02c3045c97327f5415451feb9ccb0db326322b90d460dde9f28a7c0b559ef0` matches the retained validation certificate. All 72 packaged production assets match byte-for-byte; two generated Cordova placeholder files are empty. The configured provider key and device access code are absent from the APK.
- M3 uses 20 curated recipes and 88 ingredients. Explicit ingredient links and optional measured grams per count unit drive stock assessment, compatible conversion and earliest-expiry allocation. Catalog dietary filtering does not establish allergen-free food or cross-contact safety.
- Domain review fixed allocation across mixed units and rejection of recorded past-date stock when a resumed session records actual use. Notification review fixed cleanup after persistence failure and ordering around the local transaction. Native alert scheduling now captures the deadline before the permission prompt; this code fix has not been verified on a phone.
- Fresh-origin browser QA created five explicitly linked items: oats 500 g, milk 1,000 ml, dates 20 pieces with measured 8 g per piece, cinnamon 10 g and almonds 100 g. The date-oat recipe at four servings planned 200 g, 800 ml, 160 g, 2 g and 50 g respectively.
- Partial preparation checklist state survived reload. A running three-minute timer survived reload. Changing recipe servings to one during the active session left its frozen four-serving plan unchanged.
- Actual-use review recorded oats 180 g, milk 800 ml, dates 18 pieces, cinnamon 0 g and almonds 50 g. Save and reload retained stock quantities of 320 g, 200 ml, 2 pieces, 10 g and 50 g. After topping almonds up to 60 g, undo restored quantities to 500 g, 1,000 ml, 20 pieces, 10 g and 110 g, preserving the later 10 g top-up.
- Browser console reported no errors during these flows. Within a centered 430 × 900 app shell (not the actual browser viewport), DOM measurements showed a 742 px main region with 1,208 px of content and `overflow: auto`; lower Save and Undo controls were reachable. Chrome CDP screenshot capture failed, so this record makes no screenshot-based visual assessment.
- Final browser polish verified a custom timer value of 33 displays as 33, singular serving wording and readable allergen labels.
- The M2 protected Gemini Worker and private setup QR remain unchanged. M3 did not repeat the M2 OCR fixture checks; those checks were not an accuracy benchmark. Live Zara and voice integration remain M4 work.
- No physical-phone QA has run. Camera and QR permissions, native SAF picker, notifications, system keyboard, update installation and Preferences across force-stop remain device checks. Browser persistence and responsive DOM checks do not verify native runtime behavior.

## Milestone 2, 26 October 2026

- 69 automated tests pass. Coverage includes scan client validation, native picker handling, editable scan drafts, integer money, atomic local persistence, identical-file deduplication, configuration separation, backup behavior and server proxy boundaries.
- Package remains `com.nomli.mvp.validation`. M2 version is `0.3.0-m2` with `versionCode` 3.
- CI run [40361683245](https://github.com/giza-maker/Artifact/actions/runs/40361683245) passed in 4m 14s from source commit `2f3a51bc3e1634fca2c73c55613ceb977d5c1a6f`. The verified APK is 42,046,744 bytes with SHA-256 `5f288d5e016253a7302b4d6b444ec1a4a27c40250cf2f251186ccf20ee75c9e5`.
- APK Signature Schemes v2 and v3, 16 KB alignment and the retained M1 signing certificate were verified. All 72 production web assets match byte-for-byte; two generated Cordova placeholder files are empty as expected. The configured provider key and device access code are absent from the APK.
- Live Cloudflare endpoint `https://nomli-scan-proxy.ahmed-aljazayeerly.workers.dev` is deployed as Worker version `91f2ad3b-de56-4623-95f5-ec02f4542c7b`. Gemini 3.1 Flash-Lite credential is stored as an encrypted server-side secret and is absent from client configuration.
- Synthetic receipt PNG and PDF calls completed in about five and four seconds. Both returned the three expected items, chickpeas 1,600 g, tahini 500 g, oil 1 L, AED 39.62 total and AED 1.89 tax. An initial multipack extraction error was corrected with explicit printed-pack arithmetic instructions. These small fixture checks are not an OCR accuracy benchmark.
- Actual remote drafts were passed through mandatory storage review, atomic import, save/reload, identical-file replay and backup roundtrip. All passed. Local browser verified connection validation, readiness and source selection; native file selection and full phone scan flow remain device checks.
- A generated product-label image also passed live grocery and expiry scans: grocery produced 400 g without creating a phantom receipt; expiry produced `2026-12-31` without changing the existing quantity.
- Review supports corrections to quantity, unit, storage, date, merchant, currency, tax and discount before one atomic local save. Deduplication applies only to exact file bytes scanned under the same kind. A different photo of the same document is a new input.
- Scan connection configuration is separate from inventory backup data. Android supports a private setup QR that fills the connection form; the user must run the connection test and choose Save.
- Images are limited to 4 MiB. PDFs are limited to 2 MiB and three pages. The configured Cloudflare limiter allows approximately 10 scan requests per 60 seconds per Cloudflare location; it is not a hard billing cap.
- Inventory is offline. Recognition requires internet and sends selected files to Google through the Cloudflare proxy. The app does not retain uploaded file bytes after processing.
- No physical-phone QA has run. Native SAF picker behavior, camera permissions, Preferences across force-stop, keyboard behavior and update installation remain unverified on device.
- Live Zara, voice recognition, barcode product lookup and robust cooking behavior remain unimplemented. Accounts, cloud inventory sync and the documented multi-user server contract are future work.
- Gemini API quota depends on API account and billing state. A Gemini app subscription, including Ultra, does not by itself define free or paid API quota.

## Milestone 1, 26 October 2026

- 24 automated tests pass, including 12 storage tests covering empty state, migration, native Preferences precedence, failed writes, serialized saves, backup roundtrip, corruption recovery, unsafe fields, units and size limits. Content checks and production build pass; Capacitor sync includes four official plugins plus the custom registered Android backup plugin.
- Independent code review found and fixed restore/save ordering, failed-consumption success reporting, and malformed search backup fields. Controls lock while critical mutations persist; replacement joins the same save queue.
- Browser verified fresh empty state, ingredient creation, edit, 0.001 fractional display, optional expiry provenance and persistence after reload. Although browser download-event automation stalled, the actual exported JSON was found in Downloads and validated against the exact edited state. Browser upload automation requires an extension permission that was not changed; import picker use remains a phone test.
- Deletion survives reload. A 12-item inventory with Arabic text renders correctly; the last item can be opened after scrolling 979 px within the bounded main region while navigation stays fixed.
- M1 CI run 40342137040 passed. Published local-signed APK is 42,034,456 bytes; v2/v3 signature, 16 KB alignment and all 72 bundled production assets verified. GitHub release digest matches local SHA-256. Package/version identity recorded in `artifacts/build-status.json` and `docs/APK.md`.
- Android SAF file-picker runtime, native Preferences across force-stop, system keyboard and update installation require testing on a physical phone. Automated tests use storage doubles; APK signature checks alone do not establish these runtime behaviors.

Earlier prototype evidence below remains historical and does not imply that M1 enables sample scans.

25 October 2026.

- Production web build passes with pinned Vite/Capacitor packages.
- Nine domain tests pass: integer money, invalid/reserved IDs, compatible unit conversion, reviewed atomic receipt import, rollback on total/review failure, idempotency replay/conflict, aggregate cooking consumption, insufficient-stock rejection, and bounded assistant proposal schemas.
- Three native-notification lifecycle tests pass: replacement cancellation, late scheduling after pause, and web permission suppression. Total automated tests: 12.
- Content checks pass: 88 ingredient IDs, 20 recipe references/units and image files, three receipt totals in integer minor units.
- Runtime dependency audit reports zero known vulnerabilities at preparation time (`npm audit --omit=dev`).
- Browser verified at 320 × 740, 390 × 843 and desktop 1280 × 900: four main tabs, manual custom ingredient, staged paper receipt, edited line price and revised total, atomic stock/spending update and duplicate receipt block.
- All five scan variants reach their editable review form: fridge, barcode, expiry, paper, digital. Native camera and OCR are not exercised by these web tests.
- Long receipt panel measured 1,249px content in a 772px scrollable body; Close stays available. Inventory has its own bounded scrolling region.
- Recipe list/details, three cooking steps, elapsed-time timer across routes, Zara current-step answer, sample transcript review and ingredient consumption verified in browser. Receipt/cooking changes survive reload in local storage. No console errors observed during those flows.
- Synthetic digital receipt PDF rendered and visually inspected; PNG included beside PDF. Fixture has no printed expiry and matches its JSON ground truth.

Android compilation status is recorded separately in `artifacts/build-status.json` after setup. Web build and Capacitor sync do not by themselves prove native runtime behavior. No physical device was connected. Live auth, database, OCR, LLM, voice, concurrent updates and production security remain implementation/validation work.

Java 21.0.10, Android API 36 and Gradle 8.14.3 verified locally. APK compilation and package verification passed in CI; physical-device QA has not been run. Gradle may download Maven dependencies during the first build.

## Android APK build

- GitHub Actions run 40206456176 passed from source commit 87d90f8ed91388f3a3e3677bd1d1a1425fea5880.
- Package com.nomli.mvp, version 0.1.0-demo, minimum API 26, target API 36.
- APK: 42,023,655 bytes. Signature v2 and 16 KB ZIP alignment verified both in CI and locally.
- Downloaded CI archive digest and APK SHA-256 match; ZIP CRC checks pass. Every bundled web asset matches the local production build. No environment or private-keystore files are packaged.
- Physical-device camera, barcode, permission and timer testing remains pending.
