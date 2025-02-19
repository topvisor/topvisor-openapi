/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение списка проектов */
        "Projects_2.Methods.Projects.Get": {
            /** Добавить ли в результаты баланс владельца для гостевых проектов */
            show_owner_balance?: boolean | null;
            /** Добавить ли в результат дополнительно собираемую инфомрацию (Яндекс ИКС) */
            show_site_stat?: boolean | null;
            /** Добавить в результат список ПС и Регионов, привязанных к проекту
             *
             *     - 1 - включенные
             *     - 2 - все */
            show_searchers_and_regions?: number;
            /** Добавить в результат сводку с указанными параметрами
             *
             *     Параметры см. positions_2::get/summary */
            include_positions_summary_params?: (string | number)[] | null;
            fields: import('../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            orders: import('../../../TV/API/Params/OrdersTrait.ts').components['schemas']['TV.API.Params.OrdersTrait']['orders'];
            filters: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
            limit?: import('../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            offset: import('../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
            fetch_style?: import('../../../TV/API/Params/FetchStyleTrait.ts').components['schemas']['TV.API.Params.FetchStyleTrait']['fetch_style'];
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
