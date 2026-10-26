# Verification record

## Milestone 1 — 26 October 2026

- 24 automated tests pass, including 12 storage tests covering empty state, migration, native Preferences precedence, failed writes, serialized saves, backup roundtrip, corruption recovery, unsafe fields, units and size limits. Content checks and production build pass; Capacitor sync includes four official plugins plus the custom registered Android backup plugin.
- Independent code review found and fixed restore/save ordering, failed-consumption success reporting, and malformed search backup fields. Controls lock while critical mutations persist; replacement joins the same save queue.
- Browser verified fresh empty state, ingredient creation, edit, 0.001 fractional display, optional expiry provenance and persistence after reload. Browser download automation stalled, so a completed backup download is not counted as verified.
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
