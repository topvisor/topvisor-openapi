/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Добавить реквизиты */
        "Bank_2.Methods.Requisites.Add": {
            data: (string | number)[];
            type: import('../../Types/Requisites/Type.ts').components['schemas']['Bank_2.Types.Requisites.Type'];
            /** Id тарифа, для договоров, ассоциируемых с тарифом (например fl223) */
            tariff_id?: number | null;
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
