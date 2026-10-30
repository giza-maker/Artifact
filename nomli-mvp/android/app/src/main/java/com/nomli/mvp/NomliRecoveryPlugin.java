package com.nomli.mvp;

import android.util.AtomicFile;
import android.util.Base64;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.regex.Pattern;
import org.json.JSONException;

@CapacitorPlugin(name = "NomliRecovery")
public class NomliRecoveryPlugin extends Plugin {
    private static final int MAX_SNAPSHOT_BYTES = 1024 * 1024;
    private static final int MAX_IMAGE_BYTES = 4 * 1024 * 1024;
    private static final int MAX_PDF_BYTES = 2 * 1024 * 1024;
    private static final Pattern SAFE_ID = Pattern.compile("r_[a-f0-9]{32}");
    private final ExecutorService fileWorker = Executors.newSingleThreadExecutor();

    @Override
    protected void handleOnDestroy() {
        fileWorker.shutdown();
        super.handleOnDestroy();
    }

    @PluginMethod
    public void loadSnapshot(PluginCall call) {
        fileWorker.execute(() -> {
            try {
                File file = snapshotFile();
                JSObject result = new JSObject();
                byte[] bytes = atomicRead(file, MAX_SNAPSHOT_BYTES);
                result.put("text", bytes == null ? null : new String(bytes, StandardCharsets.UTF_8));
                call.resolve(result);
            } catch (IOException | SecurityException e) {
                call.reject("Could not read recovery snapshot.");
            }
        });
    }

    @PluginMethod
    public void saveSnapshot(PluginCall call) {
        fileWorker.execute(() -> {
            try {
                String text = call.getString("text");
                if (text == null) throw new IOException("Missing snapshot");
                byte[] bytes = text.getBytes(StandardCharsets.UTF_8);
                if (bytes.length > MAX_SNAPSHOT_BYTES) throw new IOException("Snapshot too large");
                atomicWrite(snapshotFile(), bytes);
                call.resolve();
            } catch (IOException | SecurityException e) {
                call.reject("Could not save recovery snapshot.");
            }
        });
    }

    @PluginMethod
    public void saveAsset(PluginCall call) {
        fileWorker.execute(() -> {
            try {
                File file = assetFile(requireId(call));
                if (atomicOwnedExists(file)) throw new IOException("Asset already exists");
                String encoded = call.getString("data");
                String claimedType = call.getString("mimeType");
                if (encoded == null || encoded.length() > ((MAX_IMAGE_BYTES + 2) / 3) * 4 + 4)
                    throw new IOException("Invalid asset data");
                byte[] bytes = Base64.decode(encoded, Base64.NO_WRAP);
                String mimeType = detectType(bytes);
                if (mimeType == null || !mimeType.equals(claimedType)) throw new IOException("Invalid asset type");
                int limit = "application/pdf".equals(mimeType) ? MAX_PDF_BYTES : MAX_IMAGE_BYTES;
                if (bytes.length == 0 || bytes.length > limit) throw new IOException("Asset too large");
                byte[] header = (mimeType + "\n").getBytes(StandardCharsets.US_ASCII);
                byte[] record = new byte[header.length + bytes.length];
                System.arraycopy(header, 0, record, 0, header.length);
                System.arraycopy(bytes, 0, record, header.length, bytes.length);
                atomicWrite(file, record);
                call.resolve();
            } catch (IOException | IllegalArgumentException | SecurityException e) {
                call.reject("Could not save recovery asset.");
            }
        });
    }

    @PluginMethod
    public void loadAsset(PluginCall call) {
        fileWorker.execute(() -> {
            try {
                File file = assetFile(requireId(call));
                JSObject result = new JSObject();
                byte[] record = atomicRead(file, MAX_IMAGE_BYTES + 64);
                if (record == null) {
                    call.resolve(result);
                    return;
                }
                int newline = indexOf(record, (byte) '\n');
                if (newline < 1 || newline > 32) throw new IOException("Invalid asset record");
                String mimeType = new String(record, 0, newline, StandardCharsets.US_ASCII);
                byte[] bytes = new byte[record.length - newline - 1];
                System.arraycopy(record, newline + 1, bytes, 0, bytes.length);
                String actual = detectType(bytes);
                int limit = "application/pdf".equals(actual) ? MAX_PDF_BYTES : MAX_IMAGE_BYTES;
                if (actual == null || !actual.equals(mimeType) || bytes.length == 0 || bytes.length > limit)
                    throw new IOException("Invalid asset record");
                result.put("data", Base64.encodeToString(bytes, Base64.NO_WRAP));
                result.put("mimeType", mimeType);
                call.resolve(result);
            } catch (IOException | SecurityException e) {
                call.reject("Could not read recovery asset.");
            }
        });
    }

    @PluginMethod
    public void removeAsset(PluginCall call) {
        fileWorker.execute(() -> {
            try {
                File file = assetFile(requireId(call));
                new AtomicFile(file).delete();
                call.resolve();
            } catch (IOException | SecurityException e) {
                call.reject("Could not remove recovery asset.");
            }
        });
    }

    @PluginMethod
    public void pruneAssets(PluginCall call) {
        fileWorker.execute(() -> {
            try {
                JSArray requested = call.getArray("keepIds");
                if (requested == null || requested.length() > 2000) throw new IOException("Invalid keep list");
                Set<String> keep = new HashSet<>();
                for (int index = 0; index < requested.length(); index++) {
                    String id = requested.getString(index);
                    if (id == null || !SAFE_ID.matcher(id).matches() || !keep.add(id)) throw new IOException("Invalid keep list");
                }
                File directory = recoveryDirectory();
                File[] files = directory.listFiles();
                if (files == null) throw new IOException("Could not list assets");
                Set<String> remove = new HashSet<>();
                for (File file : files) {
                    String name = file.getName();
                    String id = name.replaceFirst("\\.(?:bak|new)$", "");
                    if (!SAFE_ID.matcher(id).matches() || keep.contains(id)) continue;
                    if (!contained(file, directory) || !file.isFile()) throw new IOException("Invalid asset file");
                    remove.add(id);
                }
                for (String id : remove) new AtomicFile(assetFile(id)).delete();
                call.resolve();
            } catch (IOException | JSONException | SecurityException e) {
                call.reject("Could not prune recovery assets.");
            }
        });
    }

    private File recoveryDirectory() throws IOException {
        File directory = new File(getContext().getFilesDir(), "recovery-v1");
        if (!directory.isDirectory() && !directory.mkdirs()) throw new IOException("Recovery directory unavailable");
        if (!contained(directory, getContext().getFilesDir())) throw new IOException("Invalid recovery directory");
        return directory;
    }

    private File snapshotFile() throws IOException {
        File file = new File(recoveryDirectory(), "snapshot.json");
        if (!contained(file, recoveryDirectory())) throw new IOException("Invalid snapshot path");
        return file;
    }

    private File assetFile(String id) throws IOException {
        File directory = recoveryDirectory();
        File file = new File(directory, id);
        if (!contained(file, directory)) throw new IOException("Invalid asset path");
        return file;
    }

    private static String requireId(PluginCall call) throws IOException {
        String id = call.getString("id");
        if (id == null || !SAFE_ID.matcher(id).matches()) throw new IOException("Invalid asset ID");
        return id;
    }

    private static boolean contained(File file, File parent) throws IOException {
        return file.getCanonicalFile().getParentFile().equals(parent.getCanonicalFile());
    }

    private static void atomicWrite(File target, byte[] bytes) throws IOException {
        AtomicFile atomic = new AtomicFile(target);
        FileOutputStream output = null;
        try {
            output = atomic.startWrite();
            output.write(bytes);
            output.getFD().sync();
            atomic.finishWrite(output);
        } catch (IOException | RuntimeException e) {
            if (output != null) atomic.failWrite(output);
            if (e instanceof IOException) throw (IOException) e;
            throw new IOException("Atomic write failed", e);
        }
    }

    private static boolean atomicOwnedExists(File file) {
        return file.exists()
            || new File(file.getPath() + ".bak").exists()
            || new File(file.getPath() + ".new").exists();
    }

    private static byte[] atomicRead(File file, int maxBytes) throws IOException {
        File backup = new File(file.getPath() + ".bak");
        if (!file.exists() && !backup.exists()) return null;
        AtomicFile atomic = new AtomicFile(file);
        try (FileInputStream input = atomic.openRead(); ByteArrayOutputStream output = new ByteArrayOutputStream()) {
            byte[] buffer = new byte[8192];
            int total = 0;
            int read;
            while ((read = input.read(buffer)) != -1) {
                total += read;
                if (total > maxBytes) throw new IOException("File too large");
                output.write(buffer, 0, read);
            }
            return output.toByteArray();
        }
    }

    private static int indexOf(byte[] bytes, byte target) {
        for (int index = 0; index < bytes.length; index++) if (bytes[index] == target) return index;
        return -1;
    }

    private static String detectType(byte[] bytes) {
        if (startsWith(bytes, new int[] { 0xff, 0xd8, 0xff })) return "image/jpeg";
        if (startsWith(bytes, new int[] { 0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a })) return "image/png";
        if (asciiAt(bytes, 0, "RIFF") && asciiAt(bytes, 8, "WEBP")) return "image/webp";
        if (asciiAt(bytes, 0, "%PDF-")) return "application/pdf";
        return null;
    }

    private static boolean startsWith(byte[] bytes, int[] signature) {
        if (bytes.length < signature.length) return false;
        for (int index = 0; index < signature.length; index++)
            if ((bytes[index] & 0xff) != signature[index]) return false;
        return true;
    }

    private static boolean asciiAt(byte[] bytes, int offset, String signature) {
        if (bytes.length < offset + signature.length()) return false;
        for (int index = 0; index < signature.length(); index++)
            if ((bytes[offset + index] & 0xff) != signature.charAt(index)) return false;
        return true;
    }
}
