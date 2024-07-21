/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Результат API запроса с ошибкой */
        ResponseError: {
            result?: unknown;
            /** Список ошибок, полученных при выполнении запроса */
            errors?: import('./Errors.ts').components['schemas']['Errors'] | null;
            /** Список ообщений, полученных при выполнении запроса */
            messages?: import('./TV/API/Types/StringArray.ts').components['schemas']['TV.API.Types.StringArray'];
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
