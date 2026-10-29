package com.nomli.mvp;

import android.os.Handler;
import android.os.Looper;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.util.Locale;

/** Explicit cooking-step read-aloud through the phone's configured speech service. */
@CapacitorPlugin(name = "NomliDevice")
public class NomliDevicePlugin extends Plugin {
    private static final int MAX_TEXT_LENGTH = 3000;
    private static final long INIT_TIMEOUT_MS = 5000;
    private static final long PLAYBACK_TIMEOUT_MS = 120000;
    private final Handler main = new Handler(Looper.getMainLooper());
    private long generation;
    private boolean resumed = true;
    private Session active;

    private static final class Session {
        final long generation;
        final PluginCall call;
        final String utteranceId;
        TextToSpeech engine;
        Runnable initDeadline;
        Runnable playbackDeadline;

        Session(long generation, PluginCall call) {
            this.generation = generation;
            this.call = call;
            this.utteranceId = "nomli-cooking-" + generation;
        }
    }

    @PluginMethod
    public void speakCookingStep(PluginCall call) {
        main.post(() -> beginSpeech(call));
    }

    private void beginSpeech(PluginCall call) {
        if (!resumed) {
            call.reject("Cooking speech is unavailable while Nomli is in the background.", "unavailable");
            return;
        }
        if (active != null) {
            call.reject("A cooking step is already being read.", "busy");
            return;
        }
        String text = call.getString("text", "").trim();
        if (text.isEmpty()) {
            call.reject("Cooking step text is required.", "invalid_text");
            return;
        }
        if (text.length() > MAX_TEXT_LENGTH) {
            call.reject("Cooking step text must be 3000 characters or fewer.", "too_long");
            return;
        }
        String language = call.getString("language", "en-US");
        if (language == null || language.trim().isEmpty()) language = "en-US";
        final Locale locale = Locale.forLanguageTag(language.trim());
        if (locale.getLanguage().isEmpty()) {
            call.reject("Requested cooking speech language is invalid.", "language_unavailable");
            return;
        }

        Session session = new Session(++generation, call);
        active = session;
        session.initDeadline = () -> fail(session, "Text-to-speech did not become ready.", "init_timeout");
        main.postDelayed(session.initDeadline, INIT_TIMEOUT_MS);
        try {
            session.engine = new TextToSpeech(getContext(), status ->
                main.post(() -> onInitialized(session, status, text, locale)));
        } catch (RuntimeException error) {
            fail(session, "Text-to-speech is unavailable on this device.", "unavailable");
        }
    }

    private void onInitialized(Session session, int status, String text, Locale locale) {
        if (!isActive(session)) {
            shutdown(session.engine);
            return;
        }
        main.removeCallbacks(session.initDeadline);
        session.initDeadline = null;
        if (status != TextToSpeech.SUCCESS) {
            fail(session, "Text-to-speech could not start.", "unavailable");
            return;
        }
        int languageResult;
        try {
            languageResult = session.engine.setLanguage(locale);
        } catch (RuntimeException error) {
            fail(session, "Requested cooking speech language is unavailable.", "language_unavailable");
            return;
        }
        if (languageResult == TextToSpeech.LANG_MISSING_DATA) {
            fail(session, "Speech data for this language is not installed.", "language_missing_data");
            return;
        }
        if (languageResult == TextToSpeech.LANG_NOT_SUPPORTED) {
            fail(session, "Requested cooking speech language is not supported.", "language_unavailable");
            return;
        }
        session.engine.setOnUtteranceProgressListener(new UtteranceProgressListener() {
            @Override public void onStart(String id) {}
            @Override public void onDone(String id) {
                if (session.utteranceId.equals(id)) main.post(() -> finish(session, false));
            }
            @Override public void onError(String id) {
                if (session.utteranceId.equals(id))
                    main.post(() -> fail(session, "Text-to-speech playback failed.", "playback_error"));
            }
            @Override public void onError(String id, int errorCode) { onError(id); }
        });
        try {
            int result = session.engine.speak(text, TextToSpeech.QUEUE_FLUSH, null, session.utteranceId);
            if (result != TextToSpeech.SUCCESS) {
                fail(session, "Text-to-speech playback could not start.", "playback_error");
                return;
            }
            session.playbackDeadline = () ->
                fail(session, "Text-to-speech playback timed out.", "playback_timeout");
            main.postDelayed(session.playbackDeadline, PLAYBACK_TIMEOUT_MS);
        } catch (RuntimeException error) {
            fail(session, "Text-to-speech playback could not start.", "playback_error");
        }
    }

    @PluginMethod
    public void stopCookingSpeech(PluginCall call) {
        main.post(() -> {
            Session session = active;
            if (session != null) finish(session, true);
            call.resolve();
        });
    }

    private boolean isActive(Session session) {
        return active == session && generation == session.generation;
    }

    private void finish(Session session, boolean stopped) {
        if (!release(session)) return;
        JSObject result = new JSObject();
        result.put("stopped", stopped);
        session.call.resolve(result);
    }

    private void fail(Session session, String message, String code) {
        if (!release(session)) return;
        session.call.reject(message, code);
    }

    private boolean release(Session session) {
        if (!isActive(session)) return false;
        active = null;
        generation++;
        if (session.initDeadline != null) {
            main.removeCallbacks(session.initDeadline);
            session.initDeadline = null;
        }
        if (session.playbackDeadline != null) {
            main.removeCallbacks(session.playbackDeadline);
            session.playbackDeadline = null;
        }
        TextToSpeech engine = session.engine;
        session.engine = null;
        if (engine != null) {
            try { engine.setOnUtteranceProgressListener(null); } catch (RuntimeException ignored) {}
            try { engine.stop(); } catch (RuntimeException ignored) {}
            shutdown(engine);
        }
        return true;
    }

    private static void shutdown(TextToSpeech engine) {
        if (engine == null) return;
        try { engine.shutdown(); } catch (RuntimeException ignored) {}
    }

    private void stopForLifecycle(Session session) {
        if (session != null) finish(session, true);
    }

    @Override protected void handleOnPause() {
        resumed = false;
        Session session = active;
        main.post(() -> stopForLifecycle(session));
    }

    @Override protected void handleOnResume() { resumed = true; }

    @Override protected void handleOnDestroy() {
        resumed = false;
        Session session = active;
        main.post(() -> stopForLifecycle(session));
    }
}
