/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * @stable
 **/
export interface HttpParameterCodec {
    encodeKey(key: string): string;
    encodeValue(value: string): string;

    decodeKey(key: string): string;
    decodeValue(value: string): string;
}
/** Options used to construct an `HttpParams` instance. */
export interface HttpParamsOptions {
    /**
     * String representation of the HTTP params in URL-query-string format. Mutually exclusive with
     * `fromObject`.
     */
    fromString?: string;

    /** Object map of the HTTP params. Mutually exclusive with `fromString`. */
    fromObject?: {
        [param: string]: string | string[];
    };

    /** Encoding codec used to parse and serialize the params. */
    encoder?: HttpParameterCodec;
}