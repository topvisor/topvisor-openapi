/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение отчета по проверке индексации
         *
         *     Необходимо указать либо date1 и date2, либо dates (вместе указывать нельзя) */
        "Audit_2.Methods.Indexing.Get": {
            searchers_keys: import('../../Types/Indexing/SearcherKeys.ts').components['schemas']['Audit_2.Types.Indexing.SearcherKeys'];
            /**
             * Список полей индексации, которые необъодимо получить
             *
             *     См. поля indexing_* в объекте Urls
             * @default [
             *       "data"
             *     ]
             */
            indexing_fields: (string | number)[];
            /** Вернуть ли заголовки отчета */
            show_headers?: boolean;
            /** Вернуть ли суммарное количество страниц в индексе по URL */
            show_counts_indexing?: boolean;
            /** Вернуть ли даты проверок */
            show_exists_dates?: boolean;
            /** Фильтр по изменениям в указанной ПС в указанную дату
             *
             *     Формат записи: `{{ date }}:{{ searcher_key }}` */
            filter_by_alert?: string;
            /** Произвольные даты без использования диапазона */
            dates?: (string | number)[] | null;
            /** Дата начала диапазона */
            date1?: import('../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
            /** Дата окончания диапазона */
            date2?: import('../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
            /**
             * Период в днях
             * @default 7
             */
            period_days: number;
            /**
             * Тип диапазона дат
             * @default 7
             */
            type_range: import('../../Types/Indexing/TypeRange.ts').components['schemas']['Audit_2.Types.Indexing.TypeRange'];
            /**
             * Количество дней в диапазоне
             * @default 60
             */
            count_dates: number;
            fields: import('../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            orders: import('../../../TV/API/Params/OrdersTrait.ts').components['schemas']['TV.API.Params.OrdersTrait']['orders'];
            filters: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
            limit?: import('../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            offset: import('../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
            fetch_style?: import('../../../TV/API/Params/FetchStyleTrait.ts').components['schemas']['TV.API.Params.FetchStyleTrait']['fetch_style'];
            project_id: import('../../../TV/API/Params/ProjectIdTrait.ts').components['schemas']['TV.API.Params.ProjectIdTrait']['project_id'];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
