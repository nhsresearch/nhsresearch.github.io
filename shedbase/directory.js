import { get, set } from 'https://unpkg.com/idb-keyval@5.0.2/dist/esm/index.js';

// Provide a clickable element with ID "directory-button". This can be used to select a directory
// whose handle will be stored for later use.
// When a directory is available, "data-directory-available" will be added to the document's body
// and a "directory-available" event will be dispatched to the document's body.

const eventKey = "directory-available";
const dataKey = "directory-handle";
const selector = `#directory-button`;

let directory_;

async function verifyPermission(fileHandle, readWrite) {
    const options = {};
    if (readWrite) {
        options.mode = 'readwrite';
    }

    // Check if permission was already granted. If so, return true.
    // if ((await fileHandle.queryPermission(options)) === 'granted') {
    //     return true;
    // }

    // Request permission. If the user grants permission, return true.
    if ((await fileHandle.requestPermission(options)) === 'granted') {
        return true;
    }

    // The user didn't grant permission, so return false.
    return false;
}

async function isReadable(directory) {
    if (directory === undefined) {
        return false;
    }

    const granted = await verifyPermission(directory, true);
    if (!granted) {
        return false;
    }

    try {
        for await (const entry of directory.values()) {
            // console.log(entry.kind, entry.name);
            return true;
        }
        return true;
    } catch (e) {
    }

    return false;
}

async function init() {
    if (!('showOpenFilePicker' in self)) {
        return;
    }

    const context = document.body;

    let handle = await get(dataKey);

    const btn = document.querySelector(selector) ?? undefined;

    if (btn !== undefined) {
        btn.addEventListener("click", async () => {

            const name = context.dataset.appName ?? globalThis.appName ?? document.location.hostname ?? "unnamed";

            handle = await self.showDirectoryPicker({
                id: name,
                suggestedName: name,
                startIn: "documents",
            });

            if (await isReadable(handle)) {
                await set(dataKey, handle);
                directory_ = handle;
                context.dataset.directoryAvailable = handle.name;
                context.dispatchEvent(new Event(eventKey));
            }
        });
    }

    if (await isReadable(handle)) {
        directory_ = handle;
        context.dataset.directoryAvailable = handle.name;
        context.dispatchEvent(new Event(eventKey));
    }
}

await init();

export function directory() {
    return directory_;
}