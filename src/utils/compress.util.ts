import { fromByteArray, toByteArray } from 'base64-js';
import { deflate, inflate } from 'pako';

/**
 * Convert an Uint8Array into a string.
 *
 * @returns {String}
 *
 * @example
 * ```ts
 * const string = decodeuint8arr(uint8array);
 * ```
 */
function decodeuint8arr(uint8array: Uint8Array): string {
    return new TextDecoder('utf-8').decode(uint8array);
}

/**
 * Convert a string into a Uint8Array.
 *
 * @returns {Uint8Array}
 *
 * @example
 * ```ts
 * const uint8array = encodeuint8arr(string);
 * ```
 *
 */
function encodeuint8arr(myString: string): Uint8Array {
    return new TextEncoder().encode(myString);
}

/**
 * This function is used to compress state, using pako(gzip) and base64-js
 *
 * @param object Payload to compress, must be JSON.stringify-able
 * @returns compressed state as base64 string
 *
 * @error return null if error
 *
 * @example
 * ```ts
 * const compressedState = compressState(state);
 * ```
 */
function compressObject(object: any, compress = true): string | null {
    if (!object) return null;

    try {
        const text = JSON.stringify(object);

        if (!compress) return text;

        const unit8Array = encodeuint8arr(text);

        const compressedData = deflate(unit8Array);
        const base64Data = fromByteArray(compressedData);

        return base64Data;
    } catch (_) {
        console.error('compressObject - error', _);
        return null;
    }
}

/**
 * This function is used to uncompress state, using pako(gzip) and base64-js
 *
 * @param compressed Payload to uncompress, must be JSON.stringify-able
 * @returns uncompressed state as JSON object
 *
 * @error return null if error
 *
 * @example
 * ```ts
 * const uncompressedState = uncompressState(state);
 * ```
 */
function uncompressObject(compressed: string, compress = true): any | null {
    if (compressed.length === 0) return null;

    try {
        if (!compress) return compressed;

        const compressDate = toByteArray(compressed);
        const decodedData = inflate(compressDate);

        const fromUint8Array = decodeuint8arr(decodedData);

        return JSON.parse(fromUint8Array);
    } catch (_) {
        console.error('uncompressObject - error', _);

        return null;
    }
}

export { compressObject, decodeuint8arr, encodeuint8arr, uncompressObject };
