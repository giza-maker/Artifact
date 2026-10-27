# M7.1 hang regression

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
