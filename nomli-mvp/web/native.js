import { createNativeVoiceBridge } from "./native-voice.js";
let voicePlugin;
const { startVoice, stopVoice, cancelVoice, voiceStatus } =
  createNativeVoiceBridge({
    isNative: () => window.Capacitor?.isNativePlatform?.() ?? false,
    loadPlugin: () => {
      voicePlugin ??= import("@capacitor/core").then(({ registerPlugin }) =>
        registerPlugin("NomliVoice"),
      );
      return voicePlugin;
    },
  });

let backupPlugin;
let scanPlugin;

async function getBackupPlugin() {
  if (!backupPlugin) {
    const { registerPlugin } = await import("@capacitor/core");
    backupPlugin = registerPlugin("NomliBackup");
  }
  return backupPlugin;
}

async function getScanPlugin() {
  if (!scanPlugin) {
    const { registerPlugin } = await import("@capacitor/core");
    scanPlugin = registerPlugin("NomliScan");
  }
  return scanPlugin;
}

// Capture only. Recognition/lookup must run server-side and return an editable draft.
// These methods never change inventory or claim that OCR/AI is connected.
window.NomliNative = Object.freeze({
  isNative: window.Capacitor?.isNativePlatform?.() ?? false,
  startVoice,
  stopVoice,
  cancelVoice,
  voiceStatus,
  async saveItemPhoto(options) {
    return (await getScanPlugin()).saveItemPhoto(options);
  },
  async getItemPhoto(options) {
    return (await getScanPlugin()).getItemPhoto(options);
  },
  async removeItemPhoto(options) {
    return (await getScanPlugin()).removeItemPhoto(options);
  },
  async clearItemPhotos() {
    return (await getScanPlugin()).clearItemPhotos();
  },
  async camera() {
    const { Camera, CameraResultType, CameraSource } = await import(
      "@capacitor/camera"
    );
    return Camera.getPhoto({
      quality: 85,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      correctOrientation: true,
      width: 2000,
      height: 2000,
      saveToGallery: false,
    });
  },
  async pickScanFile({ allowPdf = false } = {}) {
    const plugin = await getScanPlugin();
    return plugin.pickScanFile({ allowPdf: allowPdf === true });
  },
  async barcode({ instructions = "Center a grocery barcode" } = {}) {
    const { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } =
      await import("@capacitor/barcode-scanner");
    return CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL,
      scanInstructions:
        typeof instructions === "string" && instructions.trim()
          ? instructions.trim()
          : "Center a grocery barcode",
      scanButton: false,
    });
  },
  async scheduleTimer(seconds, title = "Nomli cooking timer") {
    const { LocalNotifications } = await import(
      "@capacitor/local-notifications"
    );
    if (!Number.isInteger(seconds) || seconds < 1 || seconds > 86400)
      throw new Error("Timer must be 1–86400 seconds.");
    const alertAt = Date.now() + seconds * 1000;
    const permission = await LocalNotifications.requestPermissions();
    if (permission.display !== "granted")
      throw new Error("Notification permission not granted.");
    const id = Math.floor(Date.now() % 2147483647);
    await LocalNotifications.schedule({
      notifications: [
        {
          id,
          title,
          body: "Time to check your cooking.",
          schedule: { at: new Date(alertAt) },
        },
      ],
    });
    return id;
  },
  async cancelTimer(id) {
    const { LocalNotifications } = await import(
      "@capacitor/local-notifications"
    );
    await LocalNotifications.cancel({ notifications: [{ id }] });
  },
  async saveDraft(key, value) {
    const { Preferences } = await import("@capacitor/preferences");
    await Preferences.set({
      key: `nomli:${key}`,
      value: JSON.stringify(value),
    });
  },
  async loadDraft(key) {
    const { Preferences } = await import("@capacitor/preferences");
    const result = await Preferences.get({ key: `nomli:${key}` });
    return result.value ? JSON.parse(result.value) : null;
  },
  async exportBackup(text, fileName) {
    const plugin = await getBackupPlugin();
    return plugin.exportBackup({ text, fileName });
  },
  async importBackup() {
    const plugin = await getBackupPlugin();
    return plugin.importBackup();
  },
});
if (window.NomliNative.isNative) document.body.classList.add("native-app");
