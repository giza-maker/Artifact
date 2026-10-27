# Zara M4: use and phone checks

M4 adds live text assistance through the existing paired Scan connection. Validation build: `com.nomli.mvp.validation`, version `0.5.0-m4`, code 5, retained validation certificate/update channel. M4 APK build verification and physical-phone testing remain pending. Planned APK: [Nomli-M4.apk](https://github.com/giza-maker/Artifact/releases/download/nomli-m4-v0.5.0/Nomli-M4.apk).

## Connection and data

Open **Scan connection**, test the saved endpoint/device code and save. Existing paired setup works for Zara; do not enter a Gemini key on the phone. Scanning retains Gemini 3.1 Flash-Lite; Zara uses Gemini 3.5 Flash-Lite with the existing encrypted server key.

Open **Zara** and inspect its disclosure. Only **Send question** sends data. Suggestions fill the question field. Each Send shares the question, last six exchanges, inventory, profile, tool preferences, requested servings, selected/current recipe and active cooking phase/step with its frozen allocation plan. Cloudflare forwards this to Google with curated catalog and stock assessments. Worker stores no chats. Provider retention is governed separately.

Up to 20 question/answer exchanges remain on device and are included in inventory backups. Private connection configuration is excluded. Treat exported backups as personal kitchen and conversation data.

## Phone checklist

Run these checks on a test inventory. Record device, Android version, installed app version and observed result. These are instructions, not completed QA evidence.

1. **Connection reuse and explicit Send:** update the validation package when an APK has passed build verification. Open Zara using the saved Scan connection. Tap a suggestion; confirm it only fills the question. Send “What can I cook for four people?” Check quantities, missing ingredients and tools against inventory and the curated recipe screen.
2. **Cancel:** send a question, then tap **Cancel request** while pending. Confirm the question stays editable and no late answer or proposal changes inventory. Send again explicitly when ready.
3. **Quantity review:** create or edit linked oats to 500 g outside any cooking session. Ask “Set my oats quantity to 350 g.” Confirm the answer offers a proposal without changing stock. Open **Review proposed change**; verify 500 → 350 g. Cancel and check stock remains 500 g. Ask again, review, tick confirmation and apply; verify 350 g after reopening Kitchen.
4. **Recipe proposal:** ask to open a known curated recipe for four servings. Review recipe and servings, cancel once, then request again and confirm. Confirm recipe opens at four servings and stock remains unchanged. Preparation, tools and final consumption still require their normal reviews.
5. **Current step and restart:** begin a cooking session, advance a step and ask Zara about that step, including an Arabic question. Confirm answer follows the current recipe, servings and frozen plan, with no change proposals. Force-close and reopen the app. Check saved cooking step, timer deadline behavior and local conversation. Ask again to confirm context reflects the restored session.
6. **Stale review:** obtain a quantity proposal, then change inventory or profile before attempting to review/apply it. Confirm old proposal cannot apply. Obtain a fresh reply. Also begin cooking after obtaining a proposal and confirm the old proposal cannot alter stock or recipe.
7. **Substitutions:** during cooking, ask for a substitution. Confirm advice stays textual and frozen deductions remain unchanged. Cancel and replan the cooking session before using a substitution that changes quantities or ingredients.
8. **Offline/errors:** disable connectivity and send. Confirm a visible error, retained draft and unchanged stock. Restore connectivity and retry explicitly. In a disposable connection setup, test an invalid code and then restore the working configuration. Confirm rejected connection does not save a reply or apply proposals.
9. **Local history and backups:** reopen Zara after restart; verify saved exchanges remain. Export a backup and check questions/answers are present and connection credentials absent. Test restore only against disposable state using the existing preview and typed `REPLACE` flow. **Clear conversation** should clear local conversation.

## Bounds and evidence

Questions allow 2,000 characters. Requests allow 192 KiB; replies allow 64 KiB. Worker timeout is 45 seconds; client timeout is 50 seconds. Scan and Zara share approximate protection of 10 requests per 60 seconds per Cloudflare location; this is not a hard billing cap.

Only `set_quantity` and `open_recipe` plus servings proposals are supported. Known IDs, numeric bounds and catalog allergen exclusions are checked; exclusions do not guarantee allergen-free food. A separate review and confirmation are required. Stale context and active cooking block proposal application. Zara does not rewrite recipes, generate a catalog or provide live voice capture.

Four synthetic live checks passed with Gemini 3.5: exact four-serving readiness; oats 500 → 350 g proposal and confirmed pure-domain application; a four-serving recipe proposal; Arabic active-step reply with zero proposals. Calls took about 2.8, 5.5, 20.1 and 5.1 seconds. These are small fixture checks, not benchmarks or physical-device evidence. Gemini 3.1 had returned repeated 503 responses for assistant checks; scanner model remains unchanged. Automated suite had 140 passing tests at this documentation checkpoint. See [verification record](VERIFICATION.md) for final build/test evidence.
