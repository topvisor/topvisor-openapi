/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "Models.Audit.Links": {
            "COUNT(*)"?: any;
            search?: any;
            "HTTP_CODES_HUNDREDS()"?: (string | number)[] | null;
            check_id?: any;
            project_id?: any;
            url_id?: any;
            url_ids?: any;
            url?: any;
            type?: any;
            content?: string | null;
            time_parse?: any;
            http_codes?: (string | number)[] | null;
            last_http_code?: any;
            count?: any;
            title?: any;
            redirects?: (string | number)[] | null;
            nofollow?: any;
            sponsored?: any;
            ugc?: any;
            external?: any;
            broken?: any;
            ttfb?: any;
            count_pages?: any;
            cacheable?: any;
            cache_type?: any;
            cache_time?: any;
            cache_validator?: any;
            check_http_code_200?: any;
            check_redirects_not_exists?: any;
            check_redirects_many_not_exists?: any;
            check_ttfb_max?: any;
            check_url_slash_unique?: any;
            check_url_format_good?: any;
            check_title_or_content_exists?: any;
            check_nofollow_off?: any;
            notice?: any;
            error?: any;
            warning_all?: any;
            count_errors?: any;
            count_warnings?: any;
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
