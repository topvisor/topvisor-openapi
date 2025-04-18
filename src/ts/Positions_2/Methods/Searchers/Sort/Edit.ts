/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Настройка сортировки ПС */
        "Positions_2.Methods.Searchers.Sort.Edit": {
            /** Id проекта */
            project_id: number;
            /** Ключи ПС */
            searchers_keys?: components["schemas"]["Positions_2.Types.SearchersKeys"] | null;
            filters: components["schemas"]["filters"];
            id?: components["schemas"]["id"];
        };
        /**
         * Id поисковой системы для проверки позиций
         * @enum {integer}
         */
        "Positions_2.Types.SearcherKey": 0 | 20 | 21 | 1 | 4 | 5 | 7 | 8 | 9;
        /** Id поисковых системы для проверки позиций */
        "Positions_2.Types.SearchersKeys": components["schemas"]["Positions_2.Types.SearcherKey"][];
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
