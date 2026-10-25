# Local setup

Preparation date: 25 October 2026. Package versions are pinned in `package-lock.json`; use `npm ci --legacy-peer-deps` for the same dependency graph.

## Host tools verified

- Node 22.14.0, npm 11.1.0.
- Java 21.0.10 found inside the existing Antigravity Red Hat Java extension. It runs Gradle but lacks `jlink` and JDK modules, so it cannot compile Android. Local APK compilation requires a full JDK 21; the build script checks this before starting.
- Android SDK under `%LOCALAPPDATA%\Android\Sdk`; API 36 installed for Capacitor 8. Windows build tools 34.0.0 and 35.0.0 are complete; the local 36.0.0 folder is incomplete. CI provides complete 36.0.0 tools.
- Capacitor 8.5.3, Android target/compile API 36, minimum API 26 (Android 8) for barcode support.
- Official Gradle wrapper 8.14.3, binary distribution. Android Studio is optional for command-line builds and has not been installed.

## Build on another Windows machine

Install Node 22.12+ and JDK 21 from their official distributions. Install Android command-line tools or Android Studio, then API 36 and build tools 36.0.0. Review any new SDK license terms in the SDK manager.

Set process environment variables, adjusting paths for that machine:

```powershell
$env:JAVA_HOME = 'C:\path\to\jdk-21'
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:ANDROID_SDK_ROOT = $env:ANDROID_HOME
$env:PATH = "$env:JAVA_HOME\bin;$env:PATH"
npm ci --legacy-peer-deps
npm run android:debug
```

No Android device was connected during preparation. An emulator image is optional and has not been downloaded. Use a physical Android 8+ phone for camera, barcode, permission, keyboard, safe-area, background-timer and offline persistence tests before treating the APK as a functional MVP.

Debug APK builds use debug signing. Production release signing, Play Store submission, privacy policy and cloud credentials are separate setup work. No credentials or signing keystore are included.

## Android build in CI

`.github/workflows/nomli-android.yml` compiles on Ubuntu with a full Temurin JDK 21 and API 36. It runs the application checks, builds the APK, verifies its signature and ZIP alignment, then uploads `Nomli-MVP-debug` as a workflow artifact. Updates to the MVP on `gh-pages` trigger the build. It uses a read-only repository token and receives no application API keys.
