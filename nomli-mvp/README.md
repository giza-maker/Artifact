# Nomli kitchen MVP — milestone 1

Single-user local inventory: fresh empty kitchen, add/edit/delete quantities and units, storage locations, optional expiry provenance, native Preferences persistence and validated JSON backup export/restore. Android document pickers save/open backups without broad storage permissions. Restore requires preview and typed `REPLACE`; corrupt saved data stays locked until explicit recovery.

Validation package: `com.nomli.mvp.validation`, app label **Nomli Test**, version **0.2.0-m1**. It installs alongside the earlier demo. Published milestone APKs are signed locally with one retained private validation key; GitHub Actions never receives that key. Keep the ignored `.tools/signing` directory safe for future update signing.

Scan recognition and live Zara remain future milestones. M1 disables sample scanning writes so synthetic results cannot enter real inventory. Cooking screens remain available from the prototype; recipes currently require the catalog's exact units and linked IDs.

Focused mobile prototype: **Kitchen · Scan · Cook · Zara**. Original full-vision mockup remains in `kitchenaut-landing/app/`.

## Start

```powershell
cd nomli-mvp
npm ci --legacy-peer-deps
npm run dev
```

Open the local URL Vite prints. `npm run build` produces a static `dist/` folder with relative asset paths. Serve over HTTP; opening HTML directly with `file://` will not run ES modules reliably.

```powershell
npm run check
npm run android:debug
```

Android build needs Java 21, Android API 36 and build tools 36. Existing host Java/SDK can be reused; see [setup](docs/SETUP.md). First Gradle/Maven build needs network access. `android:debug` syncs web assets, then writes `artifacts/Nomli-MVP-debug.apk` when compilation succeeds.

## Included

- Original Nomli mark, Android launcher/splash assets, food/kitchen/Zara imagery, local fonts and Phosphor icons with provenance/licenses.
- Inventory add/edit, storage/sort, shopping list and grocery budget/receipt utilities.
- Scan is reserved for M2. Native camera/barcode previews work independently of inventory; sample scanning imports are disabled in M1.
- Four sample recipes in the mockup: matching by stock, tools, exclusions, servings and swaps; cooking steps, timer, session resume and reviewed consumption.
- Contextual scripted Zara, current-step help and editable sample voice transcript.
- Independent local persistence. No learning, quests, XP, community or investor-tour routes.
- Starter content: 88 bilingual ingredients, 20 structured recipes, 24 Arabic/English voice cases, three receipt fixtures, six synthetic barcode records and a synthetic digital receipt PDF/image.
- Capacitor Android shell and official camera, barcode, notifications and preferences plugins. Camera/barcode capture tools appear on native Android; recognition and product lookup remain unconnected.
- Pure server domain functions, bounded tool schemas, assistant policy, configuration templates and integration contract.

## What is simulated

Zara replies are scripted and labeled as a demo. The app does not access the microphone, live OCR, LLMs or a remote database. Native capture returns a real device photo/barcode for preview only; it does not perform recognition or alter stock. Backup import reads only a JSON file explicitly selected by the user. No cloud project or provider key has been configured.

The UI uses the original four count-based demo recipes. The separate 20-recipe catalog uses explicit canonical units for implementation; it is not automatically imported into the demo. Map `piece` to a product-specific count, preserve `clove`/`slice`/`bunch` identity and require reviewed package sizes. Do not convert those counts to grams by assumption.

Synthetic fixtures test parsing/review contracts. They do not measure OCR or speech-recognition accuracy. Seventeen catalog recipes intentionally have no image yet; the four demo dishes have matching local imagery.

Next milestones: real reviewed scanning; preparation/cooking and robust consumption; live Zara; physical-device validation. Accounts and cloud inventory sync are deferred. See [integration boundaries](docs/INTEGRATION.md), [content details](docs/CONTENT.md), [verification](docs/VERIFICATION.md), and [design contract](DESIGN.md).
