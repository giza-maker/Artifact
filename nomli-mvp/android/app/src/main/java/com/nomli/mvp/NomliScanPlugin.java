package com.nomli.mvp;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.provider.OpenableColumns;
import android.util.Base64;
import androidx.activity.result.ActivityResult;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;
import java.util.concurrent.atomic.AtomicBoolean;

@CapacitorPlugin(name = "NomliScan")
public class NomliScanPlugin extends Plugin {
    private static final int MAX_IMAGE_BYTES = 4 * 1024 * 1024;
    private static final int MAX_PDF_BYTES = 2 * 1024 * 1024;
    private final AtomicBoolean pickerActive = new AtomicBoolean(false);

    @PluginMethod
    public void pickScanFile(PluginCall call) {
        if (!pickerActive.compareAndSet(false, true)) {
            call.reject("Another scan file picker is already open.");
            return;
        }

        boolean allowPdf = Boolean.TRUE.equals(call.getBoolean("allowPdf", false));
        String[] types = allowPdf
            ? new String[] { "image/jpeg", "image/png", "image/webp", "application/pdf" }
            : new String[] { "image/jpeg", "image/png", "image/webp" };
        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT)
            .addCategory(Intent.CATEGORY_OPENABLE)
            .setType("*/*")
            .putExtra(Intent.EXTRA_MIME_TYPES, types);
        try {
            startActivityForResult(call, intent, "pickResult");
        } catch (RuntimeException e) {
            pickerActive.set(false);
            call.reject("No document provider is available to open scan files.");
        }
    }

    @ActivityCallback
    private void pickResult(PluginCall call, ActivityResult result) {
        pickerActive.set(false);
        if (call == null) return;
        if (result.getResultCode() != Activity.RESULT_OK) {
            JSObject cancelled = new JSObject();
            cancelled.put("cancelled", true);
            call.resolve(cancelled);
            return;
        }

        Uri uri = result.getData() == null ? null : result.getData().getData();
        if (uri == null) {
            call.reject("Scan file request returned no usable file.");
            return;
        }

        boolean allowPdf = Boolean.TRUE.equals(call.getBoolean("allowPdf", false));
        try (InputStream input = getContext().getContentResolver().openInputStream(uri)) {
            if (input == null) throw new IOException("Missing input stream");
            byte[] bytes = readBounded(input, MAX_IMAGE_BYTES);
            FileType type = detectType(bytes);
            if (type == null) {
                call.reject("Selected file is not a supported JPEG, PNG, WebP, or PDF file.");
                return;
            }
            if (type == FileType.PDF && !allowPdf) {
                call.reject("PDF files are not allowed for this scan.");
                return;
            }
            if (type == FileType.PDF && bytes.length > MAX_PDF_BYTES) {
                call.reject("PDF exceeds 2 MiB limit.");
                return;
            }

            JSObject data = new JSObject();
            data.put("data", Base64.encodeToString(bytes, Base64.NO_WRAP));
            data.put("mimeType", type.mimeType);
            data.put("fileName", sanitizeFileName(queryDisplayName(uri), type.extension));
            call.resolve(data);
        } catch (FileTooLargeException e) {
            call.reject("Image exceeds 4 MiB limit.");
        } catch (IOException | SecurityException | IllegalArgumentException e) {
            call.reject("Could not read selected scan file.");
        }
    }

    private String queryDisplayName(Uri uri) {
        try (Cursor cursor = getContext().getContentResolver().query(
            uri, new String[] { OpenableColumns.DISPLAY_NAME }, null, null, null
        )) {
            if (cursor != null && cursor.moveToFirst()) {
                int index = cursor.getColumnIndex(OpenableColumns.DISPLAY_NAME);
                if (index >= 0) return cursor.getString(index);
            }
        } catch (RuntimeException ignored) {
            // Filename is optional metadata. File content remains usable.
        }
        return null;
    }

    private static byte[] readBounded(InputStream input, int maxBytes) throws IOException {
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        byte[] buffer = new byte[8192];
        int total = 0;
        int read;
        while ((read = input.read(buffer)) != -1) {
            total += read;
            if (total > maxBytes) throw new FileTooLargeException();
            output.write(buffer, 0, read);
        }
        return output.toByteArray();
    }

    private static FileType detectType(byte[] bytes) {
        if (startsWith(bytes, new int[] { 0xff, 0xd8, 0xff })) return FileType.JPEG;
        if (startsWith(bytes, new int[] { 0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a })) return FileType.PNG;
        if (bytes.length >= 12
            && asciiAt(bytes, 0, "RIFF")
            && asciiAt(bytes, 8, "WEBP")) return FileType.WEBP;
        if (asciiAt(bytes, 0, "%PDF-")) return FileType.PDF;
        return null;
    }

    private static boolean startsWith(byte[] bytes, int[] signature) {
        if (bytes.length < signature.length) return false;
        for (int i = 0; i < signature.length; i++) {
            if ((bytes[i] & 0xff) != signature[i]) return false;
        }
        return true;
    }

    private static boolean asciiAt(byte[] bytes, int offset, String signature) {
        if (bytes.length < offset + signature.length()) return false;
        for (int i = 0; i < signature.length(); i++) {
            if ((bytes[offset + i] & 0xff) != signature.charAt(i)) return false;
        }
        return true;
    }

    private static String sanitizeFileName(String requested, String extension) {
        String name = requested == null ? "scan" : requested.trim();
        name = name.replaceAll("[\\\\/:*?\"<>|\\p{Cntrl}]", "-");
        name = name.replaceAll("\\s+", " ").replaceAll("^[. ]+|[. ]+$", "");
        int dot = name.lastIndexOf('.');
        if (dot > 0) name = name.substring(0, dot);
        name = name.replaceAll("[. ]+$", "");
        if (name.isEmpty()) name = "scan";
        int maxStem = 120 - extension.length() - 1;
        if (name.length() > maxStem) name = name.substring(0, maxStem).trim();
        return name + "." + extension.toLowerCase(Locale.ROOT);
    }

    private enum FileType {
        JPEG("image/jpeg", "jpg"),
        PNG("image/png", "png"),
        WEBP("image/webp", "webp"),
        PDF("application/pdf", "pdf");

        final String mimeType;
        final String extension;

        FileType(String mimeType, String extension) {
            this.mimeType = mimeType;
            this.extension = extension;
        }
    }

    private static final class FileTooLargeException extends IOException {}
}
