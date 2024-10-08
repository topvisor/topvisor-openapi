/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "Models.Keywords": {
            "COUNT(*)"?: any;
            "LENGTH(name)"?: any;
            "tagsNames()"?: any;
            id?: any;
            phrase_id?: any;
            project_id?: any;
            group_id?: any;
            tags?: any;
            target?: any;
            ord?: any;
            name?: any;
            group_name?: any;
            group_on?: any;
            group_ord?: any;
            group_folder_id?: any;
            group_folder_path?: any;
            group_folder_ord?: any;
            /** @example {
             *       "need set qualifiers": [
             *         "region_index"
             *       ]
             *     } */
            target_status?: any;
            /** @example {
             *       "need set qualifiers": [
             *         "date",
             *         "project_id",
             *         "region_index"
             *       ]
             *     } */
            position?: number | null;
            /** @example {
             *       "need set qualifiers": [
             *         "date",
             *         "project_id",
             *         "region_index"
             *       ]
             *     } */
            relevant_url?: string | null;
            /** @example {
             *       "need set qualifiers": [
             *         "date",
             *         "project_id",
             *         "region_index"
             *       ]
             *     } */
            snippet_title?: string | null;
            /** @example {
             *       "need set qualifiers": [
             *         "date",
             *         "project_id",
             *         "region_index"
             *       ]
             *     } */
            snippet_body?: string | null;
            /** @example {
             *       "need set qualifiers": [
             *         "date",
             *         "project_id",
             *         "region_index"
             *       ]
             *     } */
            snippet_ext?: string | null;
            /** @example {
             *       "need set qualifiers": [
             *         "date",
             *         "project_id",
             *         "region_index"
             *       ]
             *     } */
            visitors?: number | null;
            /** @example {
             *       "need set qualifiers": [
             *         "region_index"
             *       ]
             *     } */
            positionStatus?: any;
            /** @example {
             *       "need set qualifiers": [
             *         "region_key",
             *         "searcher_key",
             *         "type"
             *       ]
             *     } */
            volume?: any;
            /** @example {
             *       "need set qualifiers": [
             *         "position",
             *         "region_key",
             *         "searcher_key"
             *       ]
             *     } */
            cost_forecast?: any;
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
