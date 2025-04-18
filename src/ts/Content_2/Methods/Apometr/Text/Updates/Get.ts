/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение текстовых апдейтов */
        "Content_2.Methods.Apometr.Text.Updates.Get": {
            /** @default 100 */
            limit: number;
            searcher_key: components["schemas"]["Positions_2.Types.SearcherKey"];
            date?: components["schemas"]["TV.API.Types.Date"] | null;
        };
        /**
         * Id поисковой системы для проверки позиций
         * @enum {integer}
         */
        "Positions_2.Types.SearcherKey": 0 | 20 | 21 | 1 | 4 | 5 | 7 | 8 | 9;
        /**
         * Дата
         * @example 2000-01-01
         */
        "TV.API.Types.Date": string;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
