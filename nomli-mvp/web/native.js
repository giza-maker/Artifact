// Capture only. Recognition/lookup must run server-side and return an editable draft.
// These methods never change inventory or claim that OCR/AI is connected.
window.NomliNative = Object.freeze({
  isNative: window.Capacitor?.isNativePlatform?.() ?? false,
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
  async barcode() {
    const { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } =
      await import("@capacitor/barcode-scanner");
    return CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL,
      scanInstructions: "Center a grocery barcode",
      scanButton: false,
    });
  },
  async scheduleTimer(seconds, title = "Nomli cooking timer") {
    const { LocalNotifications } = await import(
      "@capacitor/local-notifications"
    );
    if (!Number.isInteger(seconds) || seconds < 1 || seconds > 86400)
      throw new Error("Timer must be 1–86400 seconds.");
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
          schedule: { at: new Date(Date.now() + seconds * 1000) },
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
});
