# Nomli milestone 2 APK

Install **Nomli Test** on Android 8 or later. M2 updates the M1 validation app because it keeps package `com.nomli.mvp.validation` and the same signing certificate. It remains separate from the earlier Nomli demo.

Version: **0.3.0-m2**, versionCode **3**. Minimum API **26**, target API **36**.

M2 adds reviewed receipt image/PDF recognition, editable quantity and receipt fields, atomic local inventory updates, exact-file deduplication, separate scan configuration and native Android QR/file-picking bridges. Inventory works offline; recognition needs internet.

Built from commit `2f3a51bc3e1634fca2c73c55613ceb977d5c1a6f` in [CI run 40361683245](https://github.com/giza-maker/Artifact/actions/runs/40361683245), which passed in 4m 14s with all 69 automated tests. Local output: `artifacts/Nomli-M2.apk`, **42,046,744 bytes**. SHA-256:

```text
5f288d5e016253a7302b4d6b444ec1a4a27c40250cf2f251186ccf20ee75c9e5
```

APK Signature Schemes v2 and v3 and 16 KB alignment pass. Signing certificate SHA-256 remains `8c02c3045c97327f5415451feb9ccb0db326322b90d460dde9f28a7c0b559ef0`. All 72 packaged production web assets match the build byte-for-byte. Two generated Cordova placeholder files are empty as expected. The configured provider key and device access code are absent from the APK.

[Download M2 APK](https://github.com/giza-maker/Artifact/releases/download/nomli-m2-v0.3.0/Nomli-M2.apk). GitHub's uploaded asset size and SHA-256 match the verified local APK.

## Private scan setup

The setup QR is local at `.tools/pairing/nomli-scan-setup.png`. It contains private connection details. Never publish or attach it to a release.

1. Open the QR on a computer.
2. On Android, open **Scan**, then **Connection**.
3. Choose **Scan setup QR** and scan the code.
4. Choose **Test**, confirm the connection succeeds, then choose **Save**.

The live service uses Gemini 3.1 Flash-Lite through `https://nomli-scan-proxy.ahmed-aljazayeerly.workers.dev`. Its provider key is an encrypted server-side secret.

## Phone acceptance checklist

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
