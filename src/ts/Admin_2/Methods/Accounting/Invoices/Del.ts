/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Отмена отправки счета. Разрешено только для счетов со статусом pending или sending */
        "Admin_2.Methods.Accounting.Invoices.Del": {
            filters: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
        };
        "Admin_2.Methods.Accounting.Invoices.Del.Exec": number | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
