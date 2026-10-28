# Nomli M8.1 supermarket artwork APK

[Download Nomli-M8.1.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m8.1-v0.9.1/Nomli-M8.1.apk). Install over existing Nomli Test. Package com.nomli.mvp.validation; version 0.9.1-m8.1, code 12; minimum API 26, target API 36. Same signing key; inventory, photos and connection remain. No new account, key or reset required.

272 specific food illustrations in 17 lossless transparent atlases cover common supermarket types, including fresh produce, meat, dairy, grains, bakery, canned/frozen foods, snacks, drinks, baking supplies and MENA staples. Thirty-two editable categories use matching representative artwork. Arabic/English whole-phrase aliases distinguish rice varieties, pasta shapes, prepared food and common drink brands. Unmatched brands use food-type/category artwork; this is not an exhaustive SKU database. Local photos take priority.

Source ed456aefcbb4588292d37ecde0b442b7fec8a504; successful CI 40628893894 (3m 45s). All 268 JavaScript tests, content and food-art validation, Vite build, Capacitor sync and Android compilation pass. APK 70,382,512 bytes; SHA-256 eae8f012157cbbfc71d2de6fd975ce774ae591702e10e5ec2db98c0752d6799b. Retained validation certificate, v2/v3 signatures, 16 KB alignment and ZIP CRC pass. All 111 production web assets match local dist; two empty Cordova placeholders expected. Configured secrets and QA harness absent. Published asset size/digest match local APK.

390 × 844 browser QA used production Capacitor/native wrapper with actual Android native-bridge.js and synthetic Android transport. Five Arabic receipt cards resolved distinct rice, vermicelli, orzo, cola and lemon-lime soda art. Review saved five items and exact EGP 109.00; artwork persisted after reload. A confirmed local photo took priority after reload; removing it restored food artwork. All 32 category icons rendered in a searchable sheet with independent scrolling (514 px viewport, 1722 px content). No horizontal overflow or console errors. Camera, storage and file selection were simulated; physical Android acceptance remains pending.

Live OCR regression fixtures passed: Arabic receipt SAR 23.00, English PDF AED 39.62 with AED 1.89 additional tax, and a two-product grocery photo with separate crop regions. Observed times 3.15 s, 3.64 s, 23.89 s; final deployed-service Arabic receipt replay 28.35 s. These observations are not latency or accuracy guarantees. Worker d3b10002-0f5c-45f7-ae0f-afe19040bd65 keeps receipt/grocery model separation, bounded fallback and the 32-category server allowlist. Gemini rejected the expanded nested enum with HTTP 400; its provider schema now accepts nullable text while the prompt lists choices and runtime validation converts unknown IDs to null. OpenAI strict schema retains the enum.

## Historical M8 card review APK

[Download Nomli-M8.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m8-v0.9.0/Nomli-M8.apk). Install over existing Nomli Test. Package com.nomli.mvp.validation; version 0.9.0-m8, code 11; minimum API 26, target API 36. Same signing key; existing inventory, photos and connection remain. No new account, key or reset required.

One food item per review card, with Back/Next and an All items jump list. Category/storage suggestions are prefilled and editable. Expiry, cooking links, measured weights, costs, crop tools and merge choices sit under More details. Final Add stays in the footer and requires confirmation. Unknown quantities still need correction; missing finance can be explicitly excluded.

Sixteen realistic category images appear in inventory and category pickers. Legacy item names receive fallback art without rescanning; uploaded local photos take priority. Categories remain broad display metadata, not canonical cooking identities or allergen/weight facts.

Source 6dcfa83eaf9c91ef5580b9fc170dd83d56aad669; successful CI 40620367726 (4m 42s). All 248 JavaScript checks, content validation, Vite build, Capacitor sync and Android compilation pass. APK 46,025,882 bytes; SHA-256 634296f40af4c298e482043afa62c66135cd33bbecf2151bb31b0f245fcdbfca. Retained validation certificate, v2/v3 signatures, 16 KB alignment and ZIP CRC pass. All 92 production web assets match local dist; two empty Cordova placeholders expected. Configured secrets and QA harness absent. Published asset size/digest match local APK.

390 × 844 browser QA used actual Capacitor core/Android native-bridge.js and production native wrapper with synthetic Android transport. Back preserved Arabic quantity edits; skip saved four selected items with spending excluded; full review saved five items and exact EGP 109.00. Repeating that source was a no-op. Categories and an uploaded local photo survived reload; the photo hid category artwork. Category picker displayed all 16 food icons and scrolled. Grocery crop selection updated the card photo immediately; removing it restored the category icon. Advanced card content scrolled (622 px viewport, 1488 px content) without horizontal overflow. No console errors. Camera, plugin storage and file selection were simulated.

Live production OCR returned editable categories for an Arabic receipt PNG (SAR 23.00), an English PDF (AED 39.62 with AED 1.89 additional tax) and a two-product grocery image with individual crop regions. Categories included vegetables, dairy, legumes, condiments and oil. Observed times: 17.33 s, 6.89 s, 4.34 s. These are fixture observations, not latency or accuracy guarantees. Worker c5dfb215-9db7-4761-ab67-a369d62f9234 retains receipt/grocery model separation and bounded fallback.

Physical installation, permissions, keyboard and hardware remain phone checks.

## Historical M7.2 receipt APK

[Download Nomli-M7.2.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m7.2-v0.8.2/Nomli-M7.2.apk). Update existing Nomli Test. Package com.nomli.mvp.validation, version 0.8.2-m7.2, code 10, minimum API 26, target API 36. Same signing key and inventory schema; no reset or new account/API key needed.

Receipt text follows Arabic/English direction automatically. Quantities, prices and optional unit weights accept Arabic-Indic, Persian and ASCII digits with unambiguous decimal/grouping separators. Monetary arithmetic stays exact in integer minor units.

Receipt recognition uses the faster primary model checked against these fixtures. One fallback attempt is allowed for timeout or upstream 502/503/504, within the original 60-second deadline. Auth, quota, schema and cancellation errors do not retry. Upstream inference may still incur cost after cancellation. Manual retry reuses the selected source. Every result remains a draft until reviewed.

APK source bd68c5fb2ec1b82ba03ccb8206a0b3363adbc65b; CI 40604058146 (3m 53s), including 218 JavaScript checks. Final scanner source bb7e473361ce39e9dec7595d093823254e6bfd2d; 225 JavaScript checks pass locally after routing/fallback changes. Content validation, Vite build, Capacitor sync and Android compilation pass. APK 43,891,693 bytes; SHA-256 e4c41e43f66046e835b9be923e43ed6a957018ddba8664b77836995b71eced50. Retained signing certificate, v2/v3 signatures, 16 KB alignment and ZIP CRC pass. All 90 production web assets match local dist; two empty Cordova placeholders expected. Configured secrets and QA harness absent. Published asset size/digest match local APK. Server-only routing/fallback changes do not alter bundled client assets.

Four synthetic bilingual receipts passed production OCR: Arabic/English labels and Arabic/Persian/ASCII numerals, in PNG and one-page PDF. All returned SAR 2300 minor units, zero additional tax/discount, 1.5 kg tomatoes and 2 L/2000 ml milk, with the printed date. Observed times: 3.83 s, 3.78 s, 13.64 s, 3.50 s. Two existing AED receipt fixtures and grocery image regions also passed via the real scan client with exact-file fingerprint validation. These are fixture observations, not latency guarantees or proof for the user's original receipt.

390 × 844 browser QA used actual Capacitor core/Android native-bridge.js and production native wrapper with synthetic Android transport. Arabic/Persian receipt edits saved exact SAR 23.00 and two inventory lines, retained after reload. Malformed grouping blocked with field focus; retry reused the same source; cancel left saved inventory unchanged. Long review panel scrolled (622 px viewport, 3229 px content), with no horizontal overflow or console errors. Device picker, camera, storage and speech were simulated.

Physical microphone, camera, filesystem, permission prompts and update installation remain phone checks. User supplied an error screenshot, so the specific original receipt has not been retested.

## Historical M7.1 APK

[Download Nomli-M7.1.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m7.1-v0.8.1/Nomli-M7.1.apk). Install over existing Nomli Test. Package com.nomli.mvp.validation, version 0.8.1-m7.1, code 9, minimum API 26, target API 36. Same signing key and inventory schema; no reset or new account/API key needed.

Fixes the loader deadlock blocking photo saves, voice startup, file picking and backups. Loaders resolve plain handles instead of Capacitor proxies.

Source 7c7e3fd27a79525b29815877f0deb49dc815018d; successful CI 40597589060 (4m 19s). 204 JavaScript tests, content validation, build, Capacitor sync and Android compilation pass. APK 43,891,693 bytes; SHA-256 ae8a476b2c2c82061d65e2153851c0fa84a4a13dc2c7b1eb0c3e5c276fcb3d10. Retained signing certificate, v2/v3 signatures, 16 KB alignment and ZIP CRC pass. All 90 production web assets match; two empty Cordova placeholders expected. Configured secrets and QA harness absent. Published size/digest match local APK.

Real SDK browser regression used synthetic Android transport. Camera/crop/photo save/reload, voice callbacks and backup callbacks completed. Physical microphone, camera, filesystem, permissions and update installation remain phone checks.

## Historical M7 release — known loader defect, use M7.1

[Download Nomli-M7.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m7-v0.8.0/Nomli-M7.apk). Install over existing **Nomli Test**. Package `com.nomli.mvp.validation`, version **0.8.0-m7**, versionCode **8**, minimum API **26**, target API **36**. Same retained signing certificate; actual update installation remains a phone check.

M7 adds persistent individually cropped ingredient photos, complete recipe artwork, chronological Zara chat with bottom composer and voice drawer, searchable mobile selectors and compact cooking/inventory layouts. Scanning and live Zara reuse existing private connection. Old discarded captures cannot be recovered. Receipt/PDF/expiry scans never become ingredient photos. JSON backups contain photo reference IDs, not media bytes.

Built from `5e3fc5751c8d7e886d3c326956e62c38225df382` in successful [CI run 40591130479](https://github.com/giza-maker/Artifact/actions/runs/40591130479); Android job took 1m 42s. All **200 JavaScript tests**, content validation, production build, Capacitor sync and Android compilation pass. APK: **43,891,693 bytes**. SHA-256:

```text
67f155a30b769e17747ae4c170b1fb97f627969a68d7dbae9705c3e637e606bb
```

APK Signature Schemes v2/v3, 16 KB alignment and ZIP CRC pass. Certificate SHA-256: `8c02c3045c97327f5415451feb9ccb0db326322b90d460dde9f28a7c0b559ef0`, matching prior validation releases. All 90 production web assets match byte-for-byte; two empty Cordova placeholders are expected. Configured provider key/device code, private files and QA harness are absent. GitHub asset size/digest match local APK.

Browser checked photo save/reload, grocery review, nested selectors, focus, live search, all 20 recipe mappings and detail art, live Zara reply and synthetic speech review at 390×844 and 320×640. Voice permission handoff and error reporting were hardened after an installed-APK silent Speak report. No physical phone/emulator QA ran; that phone’s root cause remains unconfirmed. Actual capture/storage, microphone/provider/language support, keyboard/accessibility, background notifications and update installation remain pending in [TESTING.md](TESTING.md).

## Historical M6 release

[Download Nomli-M6.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m6-v0.7.0/Nomli-M6.apk). Install over existing **Nomli Test**. Package `com.nomli.mvp.validation`, version **0.7.0-m6**, versionCode **7**, minimum API **26**, target API **36**. Retained signing certificate matches M1–M5. Actual update installation remains a phone check.

M6 fixes scan merge-target ownership, repeated/overflowing scan warnings, timer cancellation ownership across saved transitions and backup export success before stream closure. Existing scanning, linked inventory, preparation, cooking, reviewed actual-use deduction/undo, live Zara and reviewed Arabic/English voice remain available. Use the existing private Scan connection; no new account or Nomli API key is required.

Built from `d30cd583d40ccdb1c5ce6656d46a888d18f453f4` in successful [CI run 40549447675](https://github.com/giza-maker/Artifact/actions/runs/40549447675); Android job took 2m 34s. All **171 JavaScript tests**, content checks, production build, Capacitor sync and Android compilation pass. APK: **42,091,800 bytes**. SHA-256:

```text
2afe8e7eb19a4dd458b3a8396b9b2f22bb24985b91b919c290c5256a6325c2d8
```

APK Signature Schemes v2/v3, 16 KB alignment and ZIP CRC pass. Certificate SHA-256: `8c02c3045c97327f5415451feb9ccb0db326322b90d460dde9f28a7c0b559ef0`. All 72 packaged production web assets match byte-for-byte; two empty Cordova placeholders are expected. Configured provider key/device code and test harness are absent. GitHub asset size and SHA-256 match the local APK.

Live synthetic PNG/PDF scans returned expected quantities and AED 39.62 total. Direct production Zara calls returned a reviewed quantity correction and an Arabic step-2 answer with 200 g oats and no active-session proposals. Browser checks covered stock conversion, preparation/reload, timer cancellation rollback/retry, voice review, deduction/undo, receipt/spending and backup restore. Browser native features were simulated; a local Zara relay failed safely while direct production calls passed. These checks are not general accuracy or availability benchmarks.

No physical-phone or emulator QA ran. Actual microphone/permissions, language support, camera/QR/SAF, background notifications, keyboard/accessibility, force-stop persistence and installation remain pending in the [M6 acceptance checklist](TESTING.md).

## Historical M5 release

[Download Nomli-M5.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m5-v0.6.0/Nomli-M5.apk). Install over existing **Nomli Test** using the retained validation update channel. Package `com.nomli.mvp.validation`, version **0.6.0-m5**, versionCode **6**, minimum API **26**, target API **36**. Package metadata and signing certificate match were verified; actual update installation remains a phone check.

M5 adds optional Android voice input for Zara. Choose English (US), Arabic (Saudi Arabia) or Arabic (Egypt), then **Speak → Finish → edit transcript → Use transcript → Send question**. Use appends to the existing draft; a separate Replace action replaces it. Transcript review blocks Send. Voice results never execute commands, send automatically or change stock.

Android's default speech service may process audio online. Requested locale support and installed language packs vary; offline recognition is not guaranteed. Nomli stores no audio and keeps capture/review text in memory only. Once sent, question text follows the existing local conversation/backup behavior. No extra Nomli speech API key is required. Scanning and live Zara reuse the existing private Scan connection and unchanged M4 protected Gemini service.

Built from `aae7375b35563ba5dbc5945dca84e599333f1b36` in successful [CI run 40542738894](https://github.com/giza-maker/Artifact/actions/runs/40542738894); Android job took 4m 08s. All **161 JavaScript tests**, content checks, production build, Capacitor sync and Android compilation pass. APK: **42,091,800 bytes**. SHA-256:

```text
03a453d141a837c868b4cde1567a984cb166f8bbeb341901e24acc53f1926716
```

APK Signature Schemes v2/v3, 16 KB alignment and ZIP CRC checks pass. Certificate SHA-256: `8c02c3045c97327f5415451feb9ccb0db326322b90d460dde9f28a7c0b559ef0`. All 72 packaged production web assets match byte-for-byte; two generated Cordova placeholders are empty. Configured provider key and device code are absent. GitHub's uploaded asset size and SHA-256 match the local APK. Merged manifest includes runtime microphone permission, optional microphone hardware and speech-service visibility.

Browser QA used synthetic microphone results, then a real Zara request after explicit Send. Arabic editing, append/replace, blank/overflow guards, denied/unavailable errors, cancellation and unchanged inventory passed. This does not establish actual microphone recognition. No physical-phone QA has run. Follow the [M5 voice acceptance checklist](VOICE.md), including permission handling, language availability, noisy-kitchen recognition, interruption/background cleanup, keyboard and update installation. Existing camera/QR/SAF, notification and persistence device checks remain pending.

## Historical M4 release

[Download Nomli-M4.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m4-v0.5.0/Nomli-M4.apk). Install over M1/M2/M3 **Nomli Test** using the retained validation update channel. Package `com.nomli.mvp.validation`, version **0.5.0-m4**, versionCode **5**, minimum API **26**, target API **36**. Package metadata and certificate match were verified; actual update installation remains a phone check.

M4 adds live Zara grounded in inventory, curated recipes and the current cooking step with its frozen preparation plan. Quantity corrections and recipe/serving proposals require separate review and confirmation. Active cooking blocks proposals. Substitution advice does not rewrite recipes or allocated stock. Voice input remains future work.

Use the existing private Scan connection for Zara. Both scanning and Zara now use Gemini 3.5 Flash-Lite through the protected Worker. Google receives kitchen context only on an explicit Send; the latest six exchanges travel with the request. Up to 20 exchanges stay locally and appear in backups; private connection credentials stay outside backups.

Built from `533ae81a1c8cfe75b843e8469b9fb884d69f6e7a` in successful [CI run 40534182533](https://github.com/giza-maker/Artifact/actions/runs/40534182533); Android job took 3m 48s. All **142 automated tests**, content checks, production build and Capacitor sync pass. APK: **42,067,224 bytes**. SHA-256:

```text
60ab9d70541ac11d7ddb395b9b456e22548af08230041636af8b057536b67943
```

APK Signature Schemes v2/v3, 16 KB alignment and ZIP CRC checks pass. Certificate SHA-256: `8c02c3045c97327f5415451feb9ccb0db326322b90d460dde9f28a7c0b559ef0`. All 72 packaged production web assets match byte-for-byte; two generated Cordova placeholder files are empty. Configured provider key and device code are absent. Published GitHub asset size and SHA-256 match the local APK.

Phone test: Scan connection → Zara → ask about current inventory → review a proposed correction → confirm → verify Kitchen. Then start cooking, ask about the current step, return to cooking and test background timer behavior. See the [full M4 checklist](ASSISTANT.md).

No physical-phone QA has run. Native camera/QR/SAF permissions, notifications, keyboard, force-stop persistence and update installation remain unverified.

## Historical M3 release

M3 provides **Nomli Test** on Android 8 or later: version **0.4.0-m3**, versionCode **4**, minimum API **26**, target API **36**. Package `com.nomli.mvp.validation` and the retained validation signing certificate support M1/M2 updates. Package, version and API levels were verified with `aapt`. Actual update installation remains a phone check.

M3 adds explicitly linked kitchen stock, a static catalog of 20 curated recipes, measured count-to-mass conversions, preparation and tool confirmation, resumable timers, reviewed actual-use deduction and undo. Inventory and cooking work locally. Receipt recognition continues through the unchanged protected M2 Gemini service; live Zara and voice remain M4 work.

Built from source commit `08c8c47a300239e90f7b0c14ed077772246f34ea` in successful [CI run 40516558999](https://github.com/giza-maker/Artifact/actions/runs/40516558999). All 110 automated tests, content checks, production build and Capacitor sync pass. Verified APK: **42,063,128 bytes**. SHA-256:

```text
d0fb13d2a1c2cf5c954dd035cff22fc07a0cab700bfa1d802940fc7b49d0f1fe
```

APK Signature Schemes v2/v3, 16 KB alignment and ZIP CRC checks pass. Signing certificate SHA-256 is `8c02c3045c97327f5415451feb9ccb0db326322b90d460dde9f28a7c0b559ef0`, matching the retained validation certificate. All 72 packaged production web assets match byte-for-byte; two generated Cordova placeholder files are empty as expected. The configured provider key and device access code are absent from the APK.

Release asset: [Nomli-M3.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m3-v0.4.0/Nomli-M3.apk). Published GitHub asset size and SHA-256 match the verified local APK.

## M3 phone acceptance checklist

No physical-phone QA has been completed. Test these behaviors before wider distribution:

1. Install M3 over the M1/M2 validation app. Confirm inventory remains and version reports `0.4.0-m3`.
2. In **Kitchen**, add or edit stock and explicitly choose each cooking ingredient. For count-to-mass use, enter measured or printed grams per current unit. Confirm links survive force-close and reopen.
3. Open **Cook**, choose a recipe and servings, then check linked-stock availability. Confirm recorded past-date lots are excluded and missing or incompatible stock is explained.
4. Start cooking. In **Prepare**, check ingredients and confirm tools. Measure ingredients as needed; confirm partial preparation survives reopening and the active session keeps its original servings.
5. Advance through steps, start a timer, then background and force-close the app. Reopen and confirm the timer follows its saved deadline. Check native notification permission, delivery and cancellation behavior.
6. Review actual quantities used, including zero use where appropriate. Use the system keyboard, scroll to the final controls and save. Confirm stock and the meal persist together after reopening, with no second deduction from repeated save.
7. Add a stock top-up, then open **Recent meals** and choose **Undo**. Confirm only recorded use is restored and the top-up remains. Confirm deleted stock or changed cooking identity, unit or conversion blocks undo.
8. Reuse the private scan setup below. Test QR permission, connection test/save, native SAF receipt selection and camera capture. Review and save scanned items, optionally linking new stock or compatible merges for cooking. Confirm exact-file replay does not relink stock.
9. Export and restore a validated backup. Confirm cooking metadata persists and scan access credentials remain outside inventory backups. Check keyboard access and lower Save/Undo controls on the physical screen.

Camera, QR, SAF, notifications, keyboard, update installation and force-stop persistence remain unverified on a phone. See [M3 browser and domain evidence](VERIFICATION.md).

## Historical M2 release

Install **Nomli Test** on Android 8 or later. M2 updates the M1 validation app because it keeps package `com.nomli.mvp.validation` and the same signing certificate. It remains separate from the earlier Nomli demo.

Version: **0.3.0-m2**, versionCode **3**. Minimum API **26**, target API **36**.

M2 adds reviewed receipt image/PDF recognition, editable quantity and receipt fields, atomic local inventory updates, exact-file deduplication, separate scan configuration and native Android QR/file-picking bridges. Inventory works offline; recognition needs internet.

Built from commit `2f3a51bc3e1634fca2c73c55613ceb977d5c1a6f` in [CI run 40361683245](https://github.com/giza-maker/Artifact/actions/runs/40361683245), which passed in 4m 14s with all 69 automated tests. Local output: `artifacts/Nomli-M2.apk`, **42,046,744 bytes**. SHA-256:

```text
5f288d5e016253a7302b4d6b444ec1a4a27c40250cf2f251186ccf20ee75c9e5
```

APK Signature Schemes v2 and v3 and 16 KB alignment pass. Signing certificate SHA-256 remains `8c02c3045c97327f5415451feb9ccb0db326322b90d460dde9f28a7c0b559ef0`. All 72 packaged production web assets match the build byte-for-byte. Two generated Cordova placeholder files are empty as expected. The configured provider key and device access code are absent from the APK.

[Download M2 APK](https://github.com/giza-maker/Artifact/releases/download/nomli-m2-v0.3.0/Nomli-M2.apk). GitHub's uploaded asset size and SHA-256 match the verified local APK.

### M2 private scan setup

The setup QR is local at `.tools/pairing/nomli-scan-setup.png`. It contains private connection details. Never publish or attach it to a release.

1. Open the QR on a computer.
2. On Android, open **Scan**, then **Connection**.
3. Choose **Scan setup QR** and scan the code.
4. Choose **Test**, confirm the connection succeeds, then choose **Save**.

The live service uses Gemini 3.1 Flash-Lite through `https://nomli-scan-proxy.ahmed-aljazayeerly.workers.dev`. Its provider key is an encrypted server-side secret.

### Historical M2 phone acceptance checklist

No physical-phone QA has been completed. Test these behaviors before wider distribution:

1. Install M2 over M1. Confirm existing inventory remains and app reports version `0.3.0-m2`.
2. Complete private QR setup, connection test and save.
3. Pick a receipt through the native Storage Access Framework picker, then repeat with camera capture.
4. Review extracted package quantities, units, storage, merchant, currency, tax, discount and total. Correct anything wrong before saving.
5. Save, reload and confirm inventory and receipt state persist together.
6. Scan the exact same file under the same kind and confirm duplicate handling. A different photo of the same document is not an exact-file duplicate.
7. Run grocery and expiry scans against an existing item. Confirm grocery does not create a phantom receipt and expiry does not change existing quantity.
8. Export an inventory backup and confirm it contains no scan access code.
9. Force-close and reopen. Confirm inventory and scan connection behavior, then verify an M1-to-M2 update install.

Native QR scanning, SAF picker, camera permissions, Preferences across force-stop and update installation remain unverified until this checklist runs on a phone.

## Historical M1 release

M1 provided fresh local inventory, explicit quantities and units, storage and optional expiry provenance, native Preferences persistence and validated JSON backup/restore. Synthetic scan imports were disabled; OCR, product lookup, voice, live Zara and cloud sync were not connected.

M1 was version `0.2.0-m1`, versionCode 2, built from commit `3c0c0dc1f02bfc5287174143fcf9ad66ab0cffa9` in [CI run 40342137040](https://github.com/giza-maker/Artifact/actions/runs/40342137040). All 24 automated tests and Android compilation passed. Its APK was 42,034,456 bytes with SHA-256 `7a98c4895459b57a8b95fc22f73656fd27dce9d3e74167cadfd77c20d520d546`. Signature Schemes v2/v3, 16 KB alignment and all 72 packaged web assets were verified. [Download M1 APK](https://github.com/giza-maker/Artifact/releases/download/nomli-m1-v0.2.0/Nomli-M1.apk).

Windows verification helper: `docs/verify-apk.ps1`; requires Java on PATH (or JAVA_HOME) and a complete installed Android build-tools version.
