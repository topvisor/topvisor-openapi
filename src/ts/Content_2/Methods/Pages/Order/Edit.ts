/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Сортировка документов */
        "Content_2.Methods.Pages.Order.Edit": {
            /** Поддомен папки */
            subdomain: import('../../../Types/Subdomain.ts').components['schemas']['Content_2.Types.Subdomain'];
            /** Адрес папки с документами */
            parent_url: string;
            /** Адреса документов в нужном порядке */
            urls: unknown[];
        };
        "Content_2.Methods.Pages.Order.Edit.Exec": number | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
