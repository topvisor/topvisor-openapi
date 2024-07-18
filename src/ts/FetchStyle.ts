/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Формат результата, в основном используется для Get запросов, поддерживается не всеми запросами в полной мере
         * @description test
         *
         *     Указанием формата результата позволяет получать данные одного и того же метода в разном формате
         *
         *     Данный параметр влияет на тип вовзращаемого результата
         *
         *     Данные парметр помогает избежать ненужных преобразований результатов на клиенте
         *
         *     Напоминает логику работу PDO Fetch: https://www.php.net/manual/ru/pdostatement.fetch.php
         * @enum {string}
         */
        FetchStyle: "fetchAll" | "fetchAllNum" | "fetchAllColumn" | "fetch" | "fetchColumn" | "fetchGroup" | "fetchGroupColumn" | "fetchUnique" | "fetchUniqueNum" | "fetchUniqueColumn" | "selector";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
