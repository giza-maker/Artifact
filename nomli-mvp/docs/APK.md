# Nomli milestone 1 APK

Install **Nomli Test** on Android 8 or later. It installs alongside the earlier Nomli demo. No account, OCR key or AI key is required for M1.

- Fresh empty inventory; add, edit and delete ingredients.
- Explicit quantities and units, storage locations and optional expiry provenance.
- Native Preferences storage; existing same-origin prototype state migrates when valid.
- JSON backup export and validated restore preview with typed `REPLACE` confirmation.
- Android file pickers require no broad storage permissions.
- Corrupt data requires explicit recovery; failed writes do not report successful inventory saves.

Version: **0.2.0-m1**, versionCode **2**. Package: **com.nomli.mvp.validation**. Minimum API **26**, target API **36**.

OCR, receipt recognition, product lookup, voice transcription, live Zara and cloud sync are not connected. Synthetic scan imports are disabled. Physical-phone storage/file-picker testing remains part of the acceptance checklist.

Built from commit `3c0c0dc1f02bfc5287174143fcf9ad66ab0cffa9` in [CI](https://github.com/giza-maker/Artifact/actions/runs/40342137040). All 24 automated tests and Android compilation pass. Published APK is signed locally with a retained validation key; the key/password never reach GitHub. Future milestone downloads must retain this certificate/package and increment versionCode for compatible updates.

Local output: `artifacts/Nomli-M1.apk`, **42,034,456 bytes**. SHA-256: `7a98c4895459b57a8b95fc22f73656fd27dce9d3e74167cadfd77c20d520d546`.

APK v2/v3 signatures and 16 KB alignment pass. Signing certificate SHA-256: `8c02c3045c97327f5415451feb9ccb0db326322b90d460dde9f28a7c0b559ef0`. All 72 packaged web assets match the production build. No private keys or environment files are packaged. GitHub's uploaded asset digest matches the local APK.

Windows verification helper: `docs/verify-apk.ps1`; requires Java on PATH (or JAVA_HOME) and a complete installed Android build-tools version.

[Download M1 APK](https://github.com/giza-maker/Artifact/releases/download/nomli-m1-v0.2.0/Nomli-M1.apk).

## Five-minute phone test

1. Add rice: 1.25 kg, Pantry, no expiry. Add two more ingredients.
2. Force-close and reopen; verify names, units, locations and quantities.
3. Edit rice to 0.75 kg and change location/expiry source. Reopen and verify.
4. Menu → Export backup. Save JSON through Android's file picker.
5. Delete an ingredient. Menu → Import backup → check preview → type `REPLACE`. Verify the ingredient and quantities return.
