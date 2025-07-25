/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "Models.Urls": {
            "COUNT(*)"?: any;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            "WATCHER_HTTP_CODES_HUNDREDS()"?: unknown[] | null;
            id?: number;
            url?: string | null;
            project_id?: number | null;
            sitemap?: any;
            audit?: any;
            watcher?: any;
            indexing?: any;
            tags?: any;
            sitemap_lastmod?: any;
            sitemap_changefreq?: any;
            sitemap_priority?: any;
            /** @example {
             *       "need set qualifiers": [
             *         "date",
             *         "searcher_key"
             *       ]
             *     } */
            indexing_data?: number | null;
            /** @example {
             *       "need set qualifiers": [
             *         "date",
             *         "searcher_key"
             *       ]
             *     } */
            indexing_alert?: number | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_http_codes?: unknown[] | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_http_codes_changed?: number | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_redirects?: unknown[] | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_h1?: string | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_h1_changed?: number | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_title?: string | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_title_changed?: number | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_description?: string | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_description_changed?: number | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_content?: string | null;
            /** @example {
             *       "need set qualifiers": [
             *         "check_id"
             *       ]
             *     } */
            watcher_content_changed?: number | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
