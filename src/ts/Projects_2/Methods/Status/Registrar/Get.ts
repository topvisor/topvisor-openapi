/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Получение информации о регистрации домена
         * @description Возвращает объект с параметрами:
         *     - wait_time, если данные не готовы
         *     - created, если данные готовы
         *     - paidtill, если данные готовы
         */
        "Projects_2.Methods.Status.Registrar.Get": {
            /** Домен */
            domain: import('../../../../TV/API/Types/Url.ts').components['schemas']['TV.API.Types.Url'];
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
