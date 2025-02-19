/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Информация об ошибке */
        Error: {
            /** Код ошибки
             *
             *     Код ошибки 0 - deprecated */
            code: number;
            /** Описание ошибки */
            string: string;
            /** Объект с дополнительной информацией */
            detail: import('./stdClass.ts').components['schemas']['stdClass'];
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
