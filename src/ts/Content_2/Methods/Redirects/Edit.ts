/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Изменение правила редиректа (для админов) */
        "Content_2.Methods.Redirects.Edit": {
            /** На путь */
            redirect_path: string;
            /** На поддомен */
            redirect_subdomain: import('../../Types/Subdomain.ts').components['schemas']['Content_2.Types.Subdomain'];
            /** Комментарий */
            comments: string;
            /** Сайт
             *
             *     - topvisor
             *     - thundo */
            site: string;
            /** С поддомена
             *
             *     - 'journal'
             *     - '' */
            subdomain: import('../../Types/Subdomain.ts').components['schemas']['Content_2.Types.Subdomain'];
            /** С пути (маска, * - любой символ) */
            path_mask: string;
        };
        "Content_2.Methods.Redirects.Edit.Exec": number | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
