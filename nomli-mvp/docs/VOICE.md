# M5 Android voice

M5 adds optional speech-to-text for Zara questions. Inventory, scan, cooking, Gemini 3.5 Flash-Lite and M4 reviewed proposals remain unchanged. Version: `0.6.0-m5` / code `6`; validation package: `com.nomli.mvp.validation`, using the retained validation signing certificate. M5 APK compilation, signing and package verification pass; published checksum matches. [Download APK](https://github.com/giza-maker/Artifact/releases/download/nomli-m5-v0.6.0/Nomli-M5.apk).

## Flow and privacy

Select English (US), Arabic (Saudi Arabia) or Arabic (Egypt), then tap **Speak**. Android asks for runtime microphone permission when needed. Tap **Finish** to request the final transcript, or **Cancel voice** to discard capture. Review and edit the transcript, then choose **Use transcript** to append it to the question or **Replace question with transcript** to replace an existing draft. Transcript and final question must contain 1–2,000 characters. Tap **Send question** only after reviewing the question. Capture and transcript review block Send. No voice result sends automatically, executes a command or changes inventory.

Nomli uses the default Android system `SpeechRecognizer` service and native Android classes. No extra speech SDK, API key or audio media file is added. The manifest declares microphone permission and speech-service visibility. The selected locales (`en-US`, `ar-SA`, `ar-EG`) are requests; provider support and installed packs vary. A device speech provider may stream audio online and require network access. Offline recognition is not guaranteed. Provider retention follows that provider's terms.

Nomli does not persist audio or raw capture/review transcripts. Cancel, discard, navigation, dialog opening or backgrounding clear pending voice text. Once inserted and sent, question text becomes normal M4 local conversation data: up to 20 exchanges stored locally and included in inventory backups. Send shares reviewed text plus inventory, profile, tools, recipe/current step, frozen allocations and recent history through Cloudflare to Google under the M4 contract.

## Bounds and cleanup

Native deadline is 35 seconds including permission. Capture stops after 20 seconds; final-result wait is bounded to eight seconds. JavaScript watchdog is 40 seconds. Request IDs reject stale results and isolate repeat turns. Cancellation invalidates ownership before native cancel/destroy and removes bridge listeners. Native pause during capture, stop and destroy release recognition; the permission prompt's own pause is handled separately. Cancelled or late permission callbacks must never restart capture.

Errors cover denied permission, unavailable service or language, no match, network failure, busy microphone, timeout and excessive transcript length. Typing remains available. Static microphone state, accessible status text, 44px voice controls and automatic Arabic/text direction preserve the orange visual system. Keyboard scrolling and focus require physical-device verification.

## Verification

All 161 JavaScript tests pass, including 13 controller and six native-bridge tests. Coverage includes mocked lifecycle cancellation, late callbacks, listener cleanup, malformed results, errors and maximum length. Android CI compilation and package/signature checks pass. Browser simulation verified reviewed Arabic text reaching live Zara only after Send. No actual Android audio or physical-phone QA has been completed. See the [verification record](VERIFICATION.md) for evidence and limits. APK compilation cannot establish microphone behavior, recognition quality or privacy of the device's chosen speech service.

## Pending phone checklist

Run on the validation package and record device, Android version, speech provider, requested locale, network state and result. Every item below remains pending.

- [ ] Speak, Finish, edit, Use transcript and Send in English and both requested Arabic locales. Check readable RTL text and mixed Arabic/numbers.
- [ ] Deny microphone permission, recover through typing, then regrant in settings and retry. Check permanent denial guidance.
- [ ] Cancel while permission prompt is open; grant late. Confirm no capture, stale transcript or stuck busy state. Repeat after timeout.
- [ ] Test missing recognition service and unavailable language pack. Error stays clear and typing works.
- [ ] Finish, cancel and immediately repeat capture; reject callbacks from earlier request IDs. Test silence, network loss, busy microphone and recognition errors.
- [ ] Navigate away, open a dialog, background/lock app and return during capture and review. Confirm microphone release, transcript discard and intact question draft. Test Bluetooth headset and incoming call interruptions.
- [ ] Append to existing draft, explicitly replace draft, discard transcript and edit empty/long text. Combined text over 2,000 characters must fail without silently replacing or truncating draft.
- [ ] Confirm capture/review never auto-sends, applies proposals or writes stock. Send only after reviewed text; verify regular M4 context and separate proposal confirmation.
- [ ] Ask about current cooking step with active timer. Confirm timer/session survives voice cancellation and answers remain text; substitutions do not change frozen allocations. Test reviewed final cooking confirmation and undo.
- [ ] Test offline with and without installed language packs. Record actual provider behavior; do not infer an offline guarantee from one device.
- [ ] Check keyboard scroll/focus, large text, screen reader labels/status, 44px controls and Arabic layout on phone.
- [ ] Recheck camera/document picker permissions, notifications, force-stop persistence and installation over previous validation build with retained data and certificate.

## Android references

- [SpeechRecognizer](https://developer.android.com/reference/android/speech/SpeechRecognizer)
- [RecognizerIntent](https://developer.android.com/reference/android/speech/RecognizerIntent)

See [integration boundaries](INTEGRATION.md), [M4 assistant checklist](ASSISTANT.md) and [release verification](VERIFICATION.md). Historical M4 records remain historical.
