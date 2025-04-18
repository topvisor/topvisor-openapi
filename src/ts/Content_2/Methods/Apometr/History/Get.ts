/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение истории шторма за период в 2 суток */
        "Content_2.Methods.Apometr.History.Get": {
            /** Индекс региона */
            region_index?: number | null;
            searcher_key?: components["schemas"]["Positions_2.Types.SearcherKey"];
            /** Ключ региона */
            region_key?: number;
            /**
             * Язык региона
             * @default ru
             */
            region_lang: string;
            region_device?: components["schemas"]["Positions_2.Types.RegionDevice"];
            /** Дата */
            date?: components["schemas"]["TV.API.Types.Date"] | null;
            /** Вернуть только средние значения по всем тематикам */
            avg?: boolean;
        };
        /**
         * Id поисковой системы для проверки позиций
         * @enum {integer}
         */
        "Positions_2.Types.SearcherKey": 0 | 20 | 21 | 1 | 4 | 5 | 7 | 8 | 9;
        /**
         * Устройство региона
         * @enum {integer}
         */
        "Positions_2.Types.RegionDevice": 0 | 1 | 2;
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
