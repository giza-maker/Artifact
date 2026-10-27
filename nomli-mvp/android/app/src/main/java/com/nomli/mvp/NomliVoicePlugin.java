package com.nomli.mvp;

import android.Manifest;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;
import java.util.ArrayList;

/** Short, explicit speech turns. System recognition service may use network processing. */
@CapacitorPlugin(name = "NomliVoice", permissions = {
    @Permission(alias = "microphone", strings = { Manifest.permission.RECORD_AUDIO })
})
public class NomliVoicePlugin extends Plugin {
    private final Handler main = new Handler(Looper.getMainLooper());
    private Session active;
    private PluginCall permissionCall;
    private boolean resumed = true;
    private static final class Session {
        final PluginCall call;
        final String id, language;
        SpeechRecognizer recognizer;
        boolean permissionPending, stopping;
        Runnable deadline, captureDeadline, stopDeadline;
        Session(PluginCall call, String id, String language) {
            this.call = call; this.id = id; this.language = language;
        }
    }

    @PluginMethod public void status(PluginCall call) {
        main.post(() -> {
            JSObject result = new JSObject();
            boolean available;
            try { available = SpeechRecognizer.isRecognitionAvailable(getContext()); }
            catch (RuntimeException e) { available = false; }
            result.put("available", available);
            call.resolve(result);
        });
    }

    @PluginMethod public void start(PluginCall call) {
        main.post(() -> {
            if (active != null || permissionCall != null) { call.reject("Voice turn already active.", "busy"); return; }
            String id = call.getString("requestId", "");
            String language = call.getString("language", "");
            if (id.isEmpty() || id.length() > 128) { call.reject("Invalid voice request.", "internal"); return; }
            if (!language.equals("en-US") && !language.equals("ar-SA") && !language.equals("ar-EG")) {
                call.reject("Unsupported requested locale.", "language_unavailable"); return;
            }
            boolean available;
            try { available = SpeechRecognizer.isRecognitionAvailable(getContext()); }
            catch (RuntimeException e) { available = false; }
            if (!resumed || !available) {
                call.reject("Speech recognition unavailable.", "unavailable"); return;
            }
            Session s = new Session(call, id, language);
            active = s;
            s.deadline = () -> fail(s, "timeout");
            main.postDelayed(s.deadline, 35000);
            if (getPermissionState("microphone") != PermissionState.GRANTED) {
                s.permissionPending = true;
                permissionCall = call;
                try { requestPermissionForAlias("microphone", call, "microphoneResult"); }
                catch (RuntimeException e) { permissionCall = null; fail(s, "internal"); }
            } else begin(s);
        });
    }

    @PermissionCallback private void microphoneResult(PluginCall call) {
        main.post(() -> {
            // Resolved cancellation can release Capacitor saved call before permission returns.
            if (permissionCall == null || (call != null && permissionCall != call)) return;
            PluginCall requested = permissionCall;
            permissionCall = null;
            Session s = active;
            if (s == null || s.call != requested) return;
            s.permissionPending = false;
            if (getPermissionState("microphone") != PermissionState.GRANTED) fail(s, "permission_denied");
            else if (resumed) begin(s);
            // Android may deliver permission callback before Activity.onResume.
        });
    }

    private void begin(Session s) {
        if (active != s || s.recognizer != null || s.permissionPending || !resumed) return;
        try {
            s.recognizer = SpeechRecognizer.createSpeechRecognizer(getContext());
            s.recognizer.setRecognitionListener(new RecognitionListener() {
                public void onReadyForSpeech(Bundle b) { state(s, "listening"); }
                public void onBeginningOfSpeech() {}
                public void onRmsChanged(float v) {}
                public void onBufferReceived(byte[] b) {}
                public void onEndOfSpeech() { processing(s); }
                public void onError(int error) { fail(s, errorCode(error)); }
                public void onResults(Bundle b) {
                    if (active != s) return;
                    ArrayList<String> results = b == null ? null : b.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
                    String text = results == null || results.isEmpty() || results.get(0) == null ? "" : results.get(0).trim();
                    if (text.isEmpty()) { fail(s, "no_match"); return; }
                    if (text.length() > 2000) { fail(s, "too_long"); return; }
                    finish(s, text, false);
                }
                public void onPartialResults(Bundle b) {}
                public void onEvent(int type, Bundle b) {}
            });
            Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH)
                .putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
                .putExtra(RecognizerIntent.EXTRA_LANGUAGE, s.language)
                .putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, false)
                .putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1);
            s.recognizer.startListening(intent);
            s.captureDeadline = () -> stopSession(s);
            main.postDelayed(s.captureDeadline, 20000);
        } catch (SecurityException e) { fail(s, "permission_denied"); }
        catch (RuntimeException e) { fail(s, "unavailable"); }
    }

    @PluginMethod public void stop(PluginCall call) {
        main.post(() -> {
            Session s = matching(call);
            if (s != null) {
                if (s.recognizer == null) finish(s, "", true);
                else stopSession(s);
            }
            call.resolve();
        });
    }
    @PluginMethod public void cancel(PluginCall call) {
        main.post(() -> { Session s = matching(call); if (s != null) finish(s, "", true); call.resolve(); });
    }
    private Session matching(PluginCall call) {
        return active != null && active.id.equals(call.getString("requestId", "")) ? active : null;
    }
    private void stopSession(Session s) {
        if (active != s || s.stopping) return;
        processing(s);
        try { s.recognizer.stopListening(); }
        catch (RuntimeException e) { fail(s, "internal"); }
    }
    private void processing(Session s) {
        if (active != s || s.stopping) return;
        s.stopping = true;
        state(s, "processing");
        s.stopDeadline = () -> fail(s, "timeout");
        main.postDelayed(s.stopDeadline, 8000);
    }
    private void state(Session s, String state) {
        if (active != s) return;
        JSObject event = new JSObject(); event.put("requestId", s.id); event.put("state", state);
        notifyListeners("speechState", event);
    }
    private void fail(Session s, String code) {
        if (!release(s)) return;
        s.call.reject("Speech recognition failed: " + code, code);
    }
    private void finish(Session s, String transcript, boolean cancelled) {
        if (!release(s)) return;
        JSObject result = new JSObject(); result.put("requestId", s.id); result.put("language", s.language);
        result.put("transcript", transcript); result.put("cancelled", cancelled); s.call.resolve(result);
    }
    private boolean release(Session s) {
        if (active != s) return false;
        active = null; // Invalidate before cancel/destroy: services can invoke late callbacks.
        if (s.deadline != null) main.removeCallbacks(s.deadline);
        if (s.captureDeadline != null) main.removeCallbacks(s.captureDeadline);
        if (s.stopDeadline != null) main.removeCallbacks(s.stopDeadline);
        if (s.recognizer != null) {
            try { s.recognizer.cancel(); } catch (RuntimeException ignored) {}
            try { s.recognizer.destroy(); } catch (RuntimeException ignored) {}
        }
        return true;
    }
    private static String errorCode(int error) {
        switch (error) {
            case SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS: return "permission_denied";
            case SpeechRecognizer.ERROR_NO_MATCH: return "no_match";
            case SpeechRecognizer.ERROR_SPEECH_TIMEOUT: return "no_match";
            case SpeechRecognizer.ERROR_NETWORK:
            case SpeechRecognizer.ERROR_NETWORK_TIMEOUT:
            case SpeechRecognizer.ERROR_SERVER:
            case SpeechRecognizer.ERROR_SERVER_DISCONNECTED: return "network";
            case SpeechRecognizer.ERROR_LANGUAGE_NOT_SUPPORTED:
            case SpeechRecognizer.ERROR_LANGUAGE_UNAVAILABLE: return "language_unavailable";
            case SpeechRecognizer.ERROR_RECOGNIZER_BUSY: return "busy";
            case SpeechRecognizer.ERROR_TOO_MANY_REQUESTS: return "unavailable";
            default: return "internal";
        }
    }
    @Override protected void handleOnPause() {
        resumed = false;
        // Permission dialog itself pauses Activity; only capture cancels on this pause.
        if (active != null && !active.permissionPending) finish(active, "", true);
    }
    @Override protected void handleOnResume() {
        resumed = true;
        if (active != null && !active.permissionPending) begin(active);
    }
    @Override protected void handleOnStop() {
        // Permission UI can stop Activity. No microphone exists until permission
        // returns and onResume makes begin() eligible; the 35s deadline remains.
        if (active != null && !active.permissionPending) finish(active, "", true);
    }
    @Override protected void handleOnDestroy() {
        resumed = false;
        if (active != null) finish(active, "", true);
    }
}




