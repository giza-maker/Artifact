import test from "node:test";
import assert from "node:assert/strict";
import {
  isPhotoId,
  validatePhotoBlob,
  createItemPhotoStore,
  prepareItemPhoto,
} from "../web/item-photos.js";
const jpeg = () =>
  new Blob([new Uint8Array([255, 216, 255, 217])], { type: "image/jpeg" });

test("clear removes all browser media and waits for transaction completion", async () => {
  let cleared = false;
  const indexedDB = {
    open() {
      const request = {};
      queueMicrotask(() => {
        request.result = {
          transaction(name, mode) {
            assert.equal(name, "photos");
            assert.equal(mode, "readwrite");
            const tx = {
              objectStore: () => ({
                clear: () => {
                  const result = {};
                  queueMicrotask(() => {
                    cleared = true;
                    tx.oncomplete();
                  });
                  return result;
                },
              }),
            };
            return tx;
          },
        };
        request.onsuccess();
      });
      return request;
    },
  };
  await createItemPhotoStore({ indexedDB }).clear();
  assert.equal(cleared, true);
});

test("native clear invokes only photo cleanup and propagates failure for retry", async () => {
  let count = 0;
  const store = createItemPhotoStore({
    native: {
      isNative: true,
      clearItemPhotos: async () => {
        count++;
        if (count === 1) throw Error("disk unavailable");
      },
    },
  });
  await assert.rejects(store.clear(), /disk unavailable/);
  await store.clear();
  assert.equal(count, 2);
});
test("photo IDs exclude filenames, URLs and traversal", () => {
  assert.equal(isPhotoId("p_" + "ab".repeat(16)), true);
  for (const id of [
    "../photo",
    "https://example.com",
    "p_123",
    "p_" + "AB".repeat(16),
    null,
  ])
    assert.equal(isPhotoId(id), false);
});
test("photo validation checks type, signatures and byte limits", async () => {
  await validatePhotoBlob(jpeg(), true);
  await assert.rejects(
    validatePhotoBlob(new Blob(["fake"], { type: "image/jpeg" })),
  );
  await assert.rejects(
    validatePhotoBlob(new Blob(["%PDF"], { type: "application/pdf" })),
  );
  await assert.rejects(
    validatePhotoBlob(
      new Blob([new Uint8Array(32769)], { type: "image/jpeg" }),
      true,
    ),
  );
  await assert.rejects(validatePhotoBlob(new Blob([], { type: "image/jpeg" })));
});
test("remote and malformed native sources rejected before decoding", async () => {
  await assert.rejects(
    prepareItemPhoto({ webPath: "https://example.com/picture.jpg" }),
  );
  await assert.rejects(
    prepareItemPhoto({ webPath: "http://localhost:3000/_capacitor_file_/x" }),
  );
  await assert.rejects(
    prepareItemPhoto({ data: "%%%", mimeType: "image/jpeg" }),
  );
  await assert.rejects(
    prepareItemPhoto({ data: "JVBERg==", mimeType: "application/pdf" }),
  );
});
test("missing browser store is graceful for reads, explicit for saves", async () => {
  const store = createItemPhotoStore({
    indexedDB: null,
    prepare: async () => jpeg(),
  });
  assert.equal(await store.getSource("p_" + "ab".repeat(16)), null);
  assert.equal(await store.getSource("../photo"), null);
  await assert.rejects(store.save(jpeg()), /storage unavailable/);
  await assert.rejects(store.remove("../photo"), /Invalid photo ID/);
});
test("native missing media and read failures fall back; save failure surfaces", async () => {
  const id = "p_" + "ab".repeat(16);
  assert.equal(
    await createItemPhotoStore({
      native: { isNative: true, getItemPhoto: async () => ({}) },
    }).getSource(id),
    null,
  );
  assert.equal(
    await createItemPhotoStore({
      native: {
        isNative: true,
        getItemPhoto: async () => {
          throw Error("disk");
        },
      },
    }).getSource(id),
    null,
  );
  const original = globalThis.FileReader;
  globalThis.FileReader = class {
    readAsDataURL() {
      this.result = "data:image/jpeg;base64,/9j/2Q==";
      this.onload();
    }
  };
  try {
    let called = false;
    const store = createItemPhotoStore({
      prepare: async () => jpeg(),
      native: {
        isNative: true,
        saveItemPhoto: async ({ photoId, data }) => {
          called = true;
          assert.ok(isPhotoId(photoId));
          assert.equal(data, "/9j/2Q==");
          throw new Error("disk full");
        },
      },
    });
    await assert.rejects(store.save(jpeg()), /disk full/);
    assert.ok(called);
  } finally {
    globalThis.FileReader = original;
  }
});
