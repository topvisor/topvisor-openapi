/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Создание гостевой ссылки на просмотр позиций
         * @description Необходимо указать либо date1 и date2, либо dates (вместе указывать нельзя)
         */
        "Audit_2.Methods.Indexing.Links.Get": {
            /** Диапазон значений шаблона */
            template_date_range: string;
            /** Произвольные даты без использования диапазона */
            dates?: (string | number)[] | null;
            /** Дата начала диапазона */
            date1?: string | null;
            /** Дата окончания диапазона */
            date2?: string | null;
            /**
             * Тип диапазона дат
             * @default 7
             */
            type_range: components["schemas"]["Audit_2.Types.Indexing.Export.TypeRange"];
            /** Количество дней в диапазоне */
            count_dates?: number | null;
            /** Ппоисковые ключи */
            searchers_keys?: (string | number)[] | null;
            /** Теги */
            tags?: (string | number)[] | null;
            /** Динамический */
            dynamic?: (string | number)[] | null;
            /** Динаамические данные */
            data_dynamic?: (string | number)[] | null;
            /** Сортировка данных */
            data_sort?: (string | number)[] | null;
            project_id: components["schemas"]["project_id"];
        };
        /**
         * Тип диапазона индексации
         * @enum {integer}
         */
        "Audit_2.Types.Indexing.Export.TypeRange": 0 | 2 | 3 | 4 | 7 | 100;
        /** ID проекта */
        project_id: number;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
