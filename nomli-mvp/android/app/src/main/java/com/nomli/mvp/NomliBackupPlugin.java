package com.nomli.mvp;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import androidx.activity.result.ActivityResult;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.CharacterCodingException;
import java.nio.charset.CodingErrorAction;
import java.nio.charset.StandardCharsets;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.regex.Pattern;
import org.json.JSONException;
import org.json.JSONTokener;

@CapacitorPlugin(name = "NomliBackup")
public class NomliBackupPlugin extends Plugin {
    private static final int MAX_BYTES = 2 * 1024 * 1024;
    private static final Pattern SAFE_TOKEN = Pattern.compile("[0-9a-f-]{36}");
    private final AtomicBoolean pickerActive = new AtomicBoolean(false);

    @PluginMethod
    public void exportBackup(PluginCall call) {
        if (!pickerActive.compareAndSet(false, true)) {
            call.reject("Another backup file picker is already open.");
            return;
        }
        String text = call.getString("text");
        String fileName = sanitizeFileName(call.getString("fileName"));
        if (text == null) {
            pickerActive.set(false);
            call.reject("Backup text is required.");
            return;
        }

        final byte[] bytes;
        try {
            bytes = encodeUtf8(text);
            validateJson(text);
        } catch (CharacterCodingException e) {
            pickerActive.set(false);
            call.reject("Backup text contains invalid Unicode.");
            return;
        } catch (JSONException e) {
            pickerActive.set(false);
            call.reject("Backup text must be valid JSON.");
            return;
        }
        if (bytes.length > MAX_BYTES) {
            pickerActive.set(false);
            call.reject("Backup exceeds 2 MiB limit.");
            return;
        }

        String token = UUID.randomUUID().toString();
        File pending = pendingFile(token);
        try (OutputStream output = new FileOutputStream(pending)) {
            output.write(bytes);
        } catch (IOException | SecurityException e) {
            pickerActive.set(false);
            deleteQuietly(pending);
            call.reject("Could not prepare backup file.");
            return;
        }

        // Keep Android saved-state small. Token points to app-private staged bytes.
        call.getData().remove("text");
        call.getData().put("pendingToken", token);
        Intent intent = new Intent(Intent.ACTION_CREATE_DOCUMENT)
            .addCategory(Intent.CATEGORY_OPENABLE)
            .setType("application/json")
            .putExtra(Intent.EXTRA_TITLE, fileName);
        try {
            startActivityForResult(call, intent, "exportResult");
        } catch (RuntimeException e) {
            pickerActive.set(false);
            deleteQuietly(pending);
            call.reject("No document provider is available to save backup.");
        }
    }

    @PluginMethod
    public void importBackup(PluginCall call) {
        if (!pickerActive.compareAndSet(false, true)) {
            call.reject("Another backup file picker is already open.");
            return;
        }
        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT)
            .addCategory(Intent.CATEGORY_OPENABLE)
            .setType("application/json");
        try {
            startActivityForResult(call, intent, "importResult");
        } catch (RuntimeException e) {
            pickerActive.set(false);
            call.reject("No document provider is available to open backup.");
        }
    }

    @ActivityCallback
    private void exportResult(PluginCall call, ActivityResult result) {
        pickerActive.set(false);
        if (call == null) return;
        File pending = getPendingFile(call);
        if (result.getResultCode() != Activity.RESULT_OK) {
            deleteQuietly(pending);
            resolveCancelled(call);
            return;
        }
        Uri uri = result.getData() == null ? null : result.getData().getData();
        if (uri == null || pending == null || !pending.isFile()) {
            deleteQuietly(pending);
            call.reject("Backup save request returned no usable file.");
            return;
        }

        try (
            InputStream input = new FileInputStream(pending);
            OutputStream output = getContext().getContentResolver().openOutputStream(uri, "wt")
        ) {
            if (output == null) throw new IOException("Missing output stream");
            byte[] buffer = new byte[8192];
            int read;
            while ((read = input.read(buffer)) != -1) output.write(buffer, 0, read);
            output.flush();
            call.resolve(new JSObject());
        } catch (IOException | SecurityException | IllegalArgumentException e) {
            call.reject("Could not write selected backup file.");
        } finally {
            deleteQuietly(pending);
        }
    }

    @ActivityCallback
    private void importResult(PluginCall call, ActivityResult result) {
        pickerActive.set(false);
        if (call == null) return;
        if (result.getResultCode() != Activity.RESULT_OK) {
            resolveCancelled(call);
            return;
        }
        Uri uri = result.getData() == null ? null : result.getData().getData();
        if (uri == null) {
            call.reject("Backup open request returned no usable file.");
            return;
        }

        try (InputStream input = getContext().getContentResolver().openInputStream(uri)) {
            if (input == null) throw new IOException("Missing input stream");
            byte[] bytes = readBounded(input);
            String text = decodeUtf8(bytes);
            validateJson(text);
            JSObject resultData = new JSObject();
            resultData.put("text", text);
            call.resolve(resultData);
        } catch (FileTooLargeException e) {
            call.reject("Backup exceeds 2 MiB limit.");
        } catch (CharacterCodingException e) {
            call.reject("Backup file is not valid UTF-8.");
        } catch (JSONException e) {
            call.reject("Backup file does not contain valid JSON.");
        } catch (IOException | SecurityException | IllegalArgumentException e) {
            call.reject("Could not read selected backup file.");
        }
    }

    private File getPendingFile(PluginCall call) {
        String token = call.getString("pendingToken");
        return token != null && SAFE_TOKEN.matcher(token).matches() ? pendingFile(token) : null;
    }

    private File pendingFile(String token) {
        return new File(getContext().getCacheDir(), "nomli-backup-" + token + ".json");
    }

    private static String sanitizeFileName(String requested) {
        String name = requested == null ? "nomli-backup.json" : requested.trim();
        name = name.replaceAll("[\\\\/:*?\"<>|\\p{Cntrl}]", "-");
        name = name.replaceAll("\\s+", " ").replaceAll("^[. ]+|[. ]+$", "");
        if (name.isEmpty()) name = "nomli-backup";
        if (name.length() > 120) name = name.substring(0, 120).trim();
        if (!name.toLowerCase(java.util.Locale.ROOT).endsWith(".json")) name += ".json";
        return name;
    }

    private static byte[] encodeUtf8(String text) throws CharacterCodingException {
        ByteBuffer buffer = StandardCharsets.UTF_8.newEncoder()
            .onMalformedInput(CodingErrorAction.REPORT)
            .onUnmappableCharacter(CodingErrorAction.REPORT)
            .encode(CharBuffer.wrap(text));
        byte[] bytes = new byte[buffer.remaining()];
        buffer.get(bytes);
        return bytes;
    }

    private static String decodeUtf8(byte[] bytes) throws CharacterCodingException {
        return StandardCharsets.UTF_8.newDecoder()
            .onMalformedInput(CodingErrorAction.REPORT)
            .onUnmappableCharacter(CodingErrorAction.REPORT)
            .decode(ByteBuffer.wrap(bytes)).toString();
    }

    private static byte[] readBounded(InputStream input) throws IOException {
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        byte[] buffer = new byte[8192];
        int total = 0;
        int read;
        while ((read = input.read(buffer)) != -1) {
            total += read;
            if (total > MAX_BYTES) throw new FileTooLargeException();
            output.write(buffer, 0, read);
        }
        return output.toByteArray();
    }

    private static void validateJson(String text) throws JSONException {
        JSONTokener tokener = new JSONTokener(text);
        tokener.nextValue();
        if (tokener.nextClean() != 0) throw new JSONException("Trailing data");
    }

    private static void resolveCancelled(PluginCall call) {
        JSObject data = new JSObject();
        data.put("cancelled", true);
        call.resolve(data);
    }

    private static void deleteQuietly(File file) {
        if (file != null && file.exists()) file.delete();
    }

    private static final class FileTooLargeException extends IOException {}
}
