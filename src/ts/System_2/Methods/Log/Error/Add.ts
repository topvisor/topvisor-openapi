/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Логирование ошибки js и отправка в канал slack */
        "System_2.Methods.Log.Error.Add": {
            /** Строка лога с данными ошибки */
            log: string;
            /** На какой странице произошла ошибка */
            from: string;
        };
        "System_2.Methods.Log.Error.Add.Exec": number;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
