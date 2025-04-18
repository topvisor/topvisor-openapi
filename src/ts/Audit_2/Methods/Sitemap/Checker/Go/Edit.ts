/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Отправка проектов на проверку карты сайта */
        "Audit_2.Methods.Sitemap.Checker.Go.Edit": {
            max_pages: components["schemas"]["Audit_2.Types.Sitemap.MaxPages"];
            /** Запуск в режиме отладки */
            debug?: boolean;
            filters: components["schemas"]["filters"];
            id?: components["schemas"]["id"];
        };
        /**
         * Максимальное количество страниц для генерации карты сайта
         * @enum {string}
         */
        "Audit_2.Types.Sitemap.MaxPages": "100" | "1000" | "10000" | "100000" | "150000" | "300000";
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
