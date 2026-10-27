# Nomli milestone 4 APK

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
