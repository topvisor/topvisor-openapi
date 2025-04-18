/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Добавление региона */
        "Positions_2.Methods.Searchers.Regions.Add": {
            /** Id проекта */
            project_id: number;
            /** Ключ ПС */
            searcher_key: components["schemas"]["Positions_2.Types.SearcherKey"];
            /** Ключ региона
             *
             *     Для разных ПС список доступных регионов может быть разный */
            region_key: number;
            /** Язык региона
             *
             *     Для разных ПС список языков разный */
            region_lang?: string | null;
            /** Устройство региона */
            region_device?: components["schemas"]["Positions_2.Types.RegionDevice"];
            /**
             * Глубина региона
             *
             *     - 1-3 для Яндекса (ПК)
             *     - 1-10 для Google
             *     - 1-3 для GooglePlay
             * @default 1
             */
            region_depth: number;
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
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
