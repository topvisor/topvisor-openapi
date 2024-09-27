/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Получение гостевой ссылки на просмотр индексации
         * @description Необходимо указать либо date1 и date2, либо dates (вместе указывать нельзя)
         */
        "Audit_2.Methods.Indexing.Export.Links.Get": {
            /** Поисковые ключи */
            searchers_keys?: (string | number)[] | null;
            /** Диапозон значений шаблона */
            template_date_range?: string | null;
            /** Произвольные даты без использования диапазона */
            dates?: (string | number)[] | null;
            /** Дата начала диапазона */
            date1?: string | null;
            /** Дата окончания диапазона */
            date2?: string | null;
            /** Тип диапазона дат */
            type_range?: components["schemas"]["Audit_2.Types.Indexing.Export.TypeRange"] | null;
            /** Сравнение диапазонов типов */
            type_range_compare?: string | null;
            /** Количество дней в диапазоне */
            count_dates?: string | null;
            /** ID тегов */
            tags_ids?: (string | number)[] | null;
            /** Сортировка данных */
            data_sort?: (string | number)[] | null;
            /** Применение изменений только для */
            only_changed_for?: string | null;
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
