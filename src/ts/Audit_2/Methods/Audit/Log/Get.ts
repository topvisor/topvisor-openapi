/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение данных проверенных ресурсов */
        "Audit_2.Methods.Audit.Log.Get": {
            /** Фильтр по периоду */
            time1?: components["schemas"]["TV.API.Types.Datetime"] | null;
            /** Фильтр по периоду */
            time2?: components["schemas"]["TV.API.Types.Datetime"] | null;
            /** Добавить url к записям */
            show_urls?: boolean;
            /** Добавить массив locations - адреса страницы и редиректы с HTTP кодами */
            show_locations?: boolean;
            /** Фильтр по категориям кодов */
            http_codes_hundreds?: components["schemas"]["TV.API.Types.IntArray"] | null;
            /**
             * Номер страницы (для использования в SQL)
             * @default 1
             */
            page: number;
            project_id: components["schemas"]["project_id"];
            limit?: components["schemas"]["limit"];
            offset?: components["schemas"]["offset"];
            check_id: components["schemas"]["check_id"];
        };
        /**
         * Дата с временем
         * @example 2000-01-01 00:00:00
         */
        "TV.API.Types.Datetime": string;
        /** Тип массива: int
         *
         *     Принимает: Любые целые числа и числа в строках
         *
         *     Хранит: int */
        "TV.API.Types.IntArray": number[];
        /** ID проекта */
        project_id: number;
        /** Количество объектов, которые необходимо получить в результате
         *
         *     Используется в паре с offset */
        limit: number | null;
        /** Число объектов, которое необходимо пропустить при получении резальтата
         *
         *     Используется в паре с limit */
        offset: number;
        /** ID проверки аудита */
        check_id: number;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
