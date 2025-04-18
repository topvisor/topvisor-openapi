/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Изменение региона */
        "Positions_2.Methods.Searchers.Regions.Edit": {
            /** Id проекта */
            project_id: number;
            /** Регион, который требуется изменить */
            region_index: number;
            /** Язык региона
             *
             *     Для разных ПС список языков разный */
            region_lang?: string | null;
            /** Устройство региона */
            region_device?: components["schemas"]["Positions_2.Types.RegionDevice"] | null;
            /** Глубина региона
             *
             *     - 1-3 для Яндекса (ПК)
             *     - 1-10 для Google
             *     - 1-3 для GooglePlay */
            region_depth?: number | null;
            /** Включен */
            enabled?: boolean | null;
            filters: components["schemas"]["filters"];
            id?: components["schemas"]["id"];
        };
        /**
         * Устройство региона
         * @enum {integer}
         */
        "Positions_2.Types.RegionDevice": 0 | 1 | 2;
        /**
         * Список фильтров по полям объекта
         *
         *     {name: string, operator: Field::AVAILABLE_OPERATORS, values: array}
         *
         *     Использует поля модели
         *
         *     Поля обязатлеьное, если $id не указан
         * @description @see AbstractMethod::MODEL
         *     @see Field::AVAILABLE_OPERATORS
         */
        filters: (string | number)[];
        /** Id объекта, для фильтрации объектов по id
         *
         *     Только для моделей с полем id */
        id: number | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
