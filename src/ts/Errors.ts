/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Список ошибок */
        Errors: components["schemas"]["Error"][];
        stdClass: Record<string, never>;
        /** Информация об ошибке */
        Error: {
            /**
             * Код ошибки
             * @description Код ошибки 0 - deprecated
             */
            code: number;
            /** Описание ошибки */
            string: string;
            /** Объект с дополнительной информацией */
            detail: components["schemas"]["stdClass"];
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
