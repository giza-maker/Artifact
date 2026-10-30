# M12 kitchen, cooking and connection phone check

Install M12 over Nomli Test without clearing inventory, cooking links, meals, calorie diary, chat or private connection. Browser checks may cover layout and controlled transport. Physical Android keyboard, Back, camera/QR, file picker, lifecycle and update acceptance remain pending until tested on a phone.

1. Start with an empty Kitchen. Confirm one primary Scan action, a secondary manual-add action and collapsed utilities. At 320px width and with large text, check for horizontal overflow, clipped labels and unreachable actions.
2. Add stock manually. The initial form must show Name, Amount, Unit and Location, with Add reachable above the keyboard. Test English, Arabic and Persian decimal digits. Open More details and exercise expiry, category, cooking link, measured weight and photo add/change/remove. Long pickers and the full form must scroll without hiding Save.
3. Enter a clear retail or bilingual name. Confirm inferred category, storage and cooking identity where matching is strict. Change category or storage manually, reopen the item and verify the manual choice remains. Edit the item and verify its original retail name remains editable even when inventory also uses a canonical cooking name. Explicitly opt out of cooking matching, reload and confirm it stays unlinked.
4. Review count and bunch stock with no measured mass. Recipe readiness must report weight needed instead of assuming grams. Enter a measured weight, then confirm quantity and finance data remain unchanged.
5. Import a receipt card through Scan. Review quantity, unit, storage, category, cooking link, crop and finance choice before saving. Confirm one atomic import, retained retail names, distinct local photos where selected and no ingredient photo sourced from the receipt itself.
6. In Cook, test search and All, Ready and Near. Ready must contain only `stockReady` recipes. Search must show matching result content without unrelated sections. Open a recipe and verify readiness and Prepare appear before calories. Browse all read-only step posters; none may start cooking, advance a step or change stock.
7. On a fresh test profile, select a Scan source before connecting. Scan and Zara must expose the same Connect Nomli flow. Test QR cancellation/denial, manual code and advanced service address. A bad endpoint or code must fail within the 10-second health-validation window without replacing a working connection. Valid setup must return to chat or open camera/file choices for the selected Scan source type. No image is selected or sent before connecting.
8. Verify connection privacy: only the selected scan source is sent, ingredient photos remain local, credentials stay out of exported inventory backup and Zara shows its data disclosure before explicit Send.
9. Open Zara from Kitchen and during an active cooking phase. Check contextual local actions, editable question suggestions and explicit Send. Type a draft, open cooking chat as an overlay, use device/browser Back and reopen it. Preserve the draft, route, preparation checks, timer state and edited actual-use values.
10. Complete one cooking session with reviewed actual use. Confirm stock deducts once, reload, then undo once. Later top-ups must remain. Search, posters, setup and Zara suggestions must never deduct stock or create calorie entries. Calorie summary and diary controls must remain keyboard and screen-reader accessible after the UI changes.

Record device, Android version, installed build and pass/fail evidence for each physical check. Do not mark native behavior complete from browser simulation.

# Historical M11.2 cooking chat sheet phone check

Install M11.2 over Nomli Test. No reset, rescan or new API key.

1. In preparation, cooking and actual-use review, open Zara. The current screen must remain visible behind a sheet; URL and step must stay unchanged. Close with Back to cooking, backdrop, Escape or device Back, then reopen the same conversation.
2. Keep two preparation selections or an edited actual-use quantity before opening chat. Send a question, close while pending, reopen after completion: those edits and the conversation must remain intact.
3. Open Zara settings above the sheet. Back closes settings first, retaining the sheet and typed draft. Full Zara navigation must close/remove the sheet without duplicate textareas or labels.
4. Start a timer, open chat, and type while it expires. Timer completion must appear inside the sheet without losing focus or text. Closing chat restores correct Start/Pause controls.
5. Start voice capture in the sheet, close it, and reopen voice: capture must have stopped and typed text must remain. Test real microphone permissions and keyboard layout on the phone.
6. Verify narrow and short viewports, independently scrolling conversation/voice controls, reachable Send/Back actions, focus restoration and reduced motion. Cooking media should pause under chat and preserve manual pause.

Browser checks use controlled native transport and assistant responses. Physical Android keyboard, Back and update acceptance remain device checks.

## Historical M11.1 cooking and Zara phone check

Install M11.1 over Nomli Test. No reset, rescan or new API key.

1. During preparation, cooking and final review, open Zara. Use the explicit Resume button to return to the same phase and step. Use Continue chat to reopen the same conversation.
2. Type a question, return to cooking, then reopen chat. The draft must stay intact. Send a question, return while Zara is thinking, and reopen after the reply: the response must be saved. Browser Back must work too.
3. While a reply is pending, edit a timer field without saving. Reply completion must preserve the field value and keyboard focus. A running timer must continue through a chat round trip.
4. Move to another cooking step while advice is pending. The old request must be cancelled; no stale reply or stock mutation may be applied. Cooking completion/undo and calorie diary behavior remain unchanged.
5. At 320px width, Resume and Continue chat controls must remain readable and reachable. Reading a new reply must clear its ready indicator.

Automated and browser evidence is recorded in VERIFICATION.md. Physical phone update/hardware acceptance remains pending.

## Historical M11 calories phone check

Install M11 over Nomli Test. No reset, rescan or new API key. Calories and food logging work offline.

1. Kitchen → Calories → Add food. Enter a food name, label calories and portions. Try Arabic digits and 0.5 portions. Confirm the live total, save, close/reopen and verify the same dated entry.
2. Add a Nomli recipe. Confirm the per-serving estimate and enter only portions eaten. Change recipe servings: total energy scales, per-serving energy stays constant. Three recipes with missing blend/labneh references must stay incomplete and offer manual entry.
3. Edit an entry, move it to yesterday, view that date, then return to Today. Remove a test entry through confirmation. Set your own optional goal and remove it by saving a blank value.
4. Inventory and receipt spending must remain unchanged by food logging. Cooking and stock undo must leave the diary unchanged. Export/import a backup: entries and goal must round-trip.
5. At narrow phone widths, forms and recipe pickers must scroll, controls remain reachable and Arabic names must fit. Diary data must not appear in Zara context.

Automated and browser evidence is recorded in VERIFICATION.md. Physical Android update acceptance remains a device check.

## Historical M10 visual cooking phone check

Install M10 over Nomli Test. No reset, rescan or new API key. All 60 steps have bundled media; 374 automated tests and media validation passed.

1. Open a ready recipe. Confirm each step shows its own action, still and Look for cue. Play/pause a clip and an illustrated sequence; both should remain silent.
2. Pause a demonstration, open All steps, return, then start/pause the cooking timer. The demonstration should stay paused. Scrolling it off-screen or backgrounding Nomli should pause motion. Reduced-motion mode should show a still until explicit playback.
3. Complete the recipe, confirm actual use and save once. Check Kitchen and Recent meals undo. Media must never advance a recipe or deduct stock by itself.

Physical Android playback and update acceptance remain device checks. Browser QA covered 390×844 and 320×568 with synthetic native transport.

## Historical M9 cooking phone check

Install M9 over Nomli Test. No reset, rescan or new API key. Browser checks and 350 automated tests passed; these checks cover physical Android behavior.

1. Open a ready recipe. Prepare its visual ingredient cards and tools, then start. Confirm large instructions, working Previous/Next, scrolling and readable amounts with your phone's font size.
2. Start/pause a timer; background and reopen Nomli. Check the phone notification and resumed countdown. Timers never start automatically.
3. Tap Read step. Check the installed phone voice, Stop reading, step changes and background cleanup. Missing speech data should produce a visible error. Ask Zara should prepare an editable question without sending it.
4. Finish, review actual use and save once. Confirm Kitchen deductions and Recent meals undo. Existing receipt links, photos and measured herb weights remain.

## Historical M7.1 hang regression

1. Install M7.1 over Nomli Test; preserve existing inventory and private connection.
2. Add an ingredient without a photo; save and reopen.
3. Add an ingredient with a captured/cropped photo; save, reopen and verify thumbnail. Repeat edit/change photo and cancel.
4. Review grocery scan with two crops, save once and reopen. Verify independent thumbnails and quantities.
5. Zara → Voice message → Speak. Confirm permission/listening or a visible service error, then Finish, review and discard/use without automatic Send.
6. Export backup; choose a backup file and cancel restore. Keep photo bytes outside JSON backup.

Actual Capacitor proxy integration now has a regression test; prior direct mocks missed the deadlock. Phone capture, speech recognition, file provider and update installation remain device checks.

## Historical checks

# M7 mobile UI and media acceptance

Browser checks use synthetic camera/speech bridges; actual Android capture, storage, keyboard and update installation remain pending. 200 JavaScript tests and content checks pass.

1. Install M7 over Nomli Test. Confirm inventory, private connection and conversation remain.
2. Capture grocery photo → review each suggested product crop → optionally adjust/remove → choose location → save. Force-stop/reopen; photo remains. Change/remove photo from ingredient editor; cancel must preserve saved record.
3. Scan paper/digital receipts and expiry labels; these must never become ingredient thumbnails. Remove a product crop during review and verify that ingredient receives no thumbnail. Verify two products save distinct square thumbnails.
4. Search inventory while typing; focus stays in field. Open storage/unit/ingredient sheets, search long lists, select and dismiss with Android Back. Parent editor remains usable; lower controls scroll.
5. Cook → Any duration: all 20 recipes have card and detail artwork. Check stock toggle, servings and preparation/deduction/undo.
6. Zara: saved turns chronological, new question once, typing/cancel/retry, live reply appended once. Mic drawer → Speak/Finish → edit → Use/Replace → separate Send. Check Arabic, small screen and open keyboard.
7. Export/restore JSON backup: inventory remains valid; media bytes are not included. Missing local photos fall back gracefully.
8. Clear local data after exporting disposable test data. Confirm thumbnails are removed; controls stay locked until cleanup finishes.

## Historical M6 checklist

# M6 phone acceptance

M6 version: `0.7.0-m6`, versionCode `7`, package `com.nomli.mvp.validation`, with the retained validation signing certificate. Scope: single-user, local-first MVP. Use [APK evidence](APK.md), [integration contracts](INTEGRATION.md) and [voice behavior](VOICE.md) alongside this checklist.

No device or emulator is connected. Every phone check below is **pending**. M6 compilation, signature, package, bundled assets and published checksum pass; see the [verification record](VERIFICATION.md). Installation and native runtime checks below remain unverified.

## Evidence boundaries

- M5 baseline: 161 passing JavaScript tests. Current M6 suite: 171 JavaScript tests. Test counts describe automated JavaScript coverage, not Android device acceptance; attach the current run result in [VERIFICATION.md](VERIFICATION.md).
- Browser checks with a synthetic native bridge double can exercise app flow and injected native results. They cannot establish microphone capture, permission dialogs, camera/QR/SAF behavior, notifications or Android lifecycle cleanup.
- Record actual device results separately. Keep pending items unchecked until exercised on a physical phone.

## Run record

Record tester/date, device model, Android version, installed M5/M6 version, APK SHA-256, package/certificate evidence, speech provider and language packs. For each check, record pass/fail, network state, observed result and reproduction steps. Keep private connection codes out of screenshots and logs.

## Install and update

- [ ] Back up M5 data, then install M6 over `0.6.0-m5` / code `6` using the same validation package and certificate. Confirm Android accepts the update and reports `0.7.0-m6` / code `7`.
- [ ] Confirm inventory, cooking links/conversions, active session, recent meals, Zara history and saved connection survive update. Record any missing data before changing it.

## Scan → inventory → prepare → cook → actual use → reload → undo

- [ ] Pair through private setup QR. Test camera permission denial, cancellation and retry; review, test and explicitly save the connection. Confirm credentials remain outside inventory backups.
- [ ] Capture a receipt using native camera; select image and PDF through Android SAF. Cancel each picker, deny/regrant applicable permissions and retry. Confirm cancellation creates no inventory entries.
- [ ] Scan with network available. Review quantities, units and finance fields before confirming. Save once, reopen Kitchen and compare recorded stock with reviewed values. Replay the same file and confirm duplicate protection.
- [ ] Explicitly link stock to cooking ingredients; use measured/printed grams per unit where required. Choose recipe/servings and inspect expiry exclusions, shortages and compatible units.
- [ ] Start a session. Complete ingredient preparation and tool confirmation. Leave/reopen during partial preparation; confirm saved checks and frozen servings/allocations.
- [ ] Cook with Zara: ask about inventory, then current step. Review answer before continuing. Confirm advice/substitutions leave frozen allocations unchanged; active cooking blocks proposals. Outside cooking, review and separately confirm a permitted proposal, then check resulting stock.
- [ ] Start a timer, background/lock the phone and return. Force-stop/reopen separately. Check saved deadline, elapsed timer display, notification permission/delivery and cancellation; record actual background behavior.
- [ ] Review actual use, including a changed amount and zero where appropriate. Confirm once. Check stock deduction and meal record, then reload/force-stop/reopen. Repeated confirmation must not deduct twice.
- [ ] Add a stock top-up, then undo the meal. Confirm recorded use returns and top-up remains after reload. Repeated undo must not restore twice. Deleted stock or changed ingredient identity, normalized unit or grams-per-unit conversion must block undo. The consumed session must not deduct again after undo.

## Voice and network

- [ ] Test English (`en-US`), Arabic Saudi (`ar-SA`) and Arabic Egypt (`ar-EG`): Speak → Finish → edit → Use transcript → explicit Send. Check Arabic direction, mixed numbers and keyboard access. Record requested versus available provider language support.
- [ ] Deny microphone permission, continue by typing, regrant and retry. Cancel while permission is open, then grant late; confirm capture does not restart and no stale transcript appears.
- [ ] Cancel during capture, final-result wait and transcript review; repeat immediately. Navigate, open a dialog, background/lock, interrupt with call/Bluetooth and return. Confirm microphone release, discarded pending transcript and preserved question draft.
- [ ] Test append, explicit replace, discard, empty text and combined text over 2,000 characters. Capture/review must block Send; recognition must never auto-send, execute commands or change stock.
- [ ] Exercise silence, missing provider/language, busy microphone, timeout and network loss. Errors recover to typing/retry without inventory changes. Test offline with/without language packs; record behavior without assuming offline support.
- [ ] Disconnect during scan and Zara Send. Confirm useful error, unchanged inventory and explicit retry. Restore network and finish the flow.

## Backup and phone usability

- [ ] Export backup, restore it, reload and compare inventory, cooking links/conversions, sessions, meals and sent Zara history. Confirm private connection configuration is excluded. Invalid backup must leave existing state intact.
- [ ] Check keyboard scrolling, lower Save/Confirm/Undo controls, large text, screen reader labels/status and Arabic layout. Record blocked or clipped controls.
