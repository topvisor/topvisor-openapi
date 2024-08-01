/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Добавление комментария */
        "Comments_2.Methods.Add": {
            subdomain: import('../../TV/API/Types/Topvisor/Subdomain.ts').components['schemas']['TV.API.Types.Topvisor.Subdomain'];
            /** Текст комментария */
            text: string;
            /** Адрес страницы (нельзя указывать совместно с reply_id) */
            page_url?: string | null;
            /** Привязать к комментарию с id = reply_id  (нельзя указывать совместно с page_url) */
            reply_id?: number | null;
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