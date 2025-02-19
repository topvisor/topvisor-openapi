/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение стоимости проверки частоты проектов */
        "Keywords_2.Methods.Volumes.Price.Get": {
            /** Id проекта */
            project_id: number;
            /** Проверять ли запросы
             *
             *     - 0: проверять
             *     - 1: не проверять запросы с актуальной частотой
             *     - 2: не проверять запросы с частотой */
            no_recheck?: number | null;
            /**
             * Отображать ли сумму с учетом скидки
             * @default 1
             */
            apply_discount: number;
            /** Запустить проверку по всем регионам проекта (только Яндекс и Google) */
            check_all_regions?: boolean;
            /**
             * Тип объекта фильтрации
             * @default keywords
             */
            target_type: string;
            /** Объекты определителей частоты (параметр не обязатален, если check_all_regions = true)
             *
             *     - int qualifier.region_key - ключ региона
             *     - enum(0, 1) qualifier.searcher_key - ключ ПС
             *     - enum(1, 2, 3, 5, 6) qualifier.type - индекс тип частоты (для Яндекс 1, 2, 3, 5 или 6, для Google всегда 3) */
            qualifiers?: (string | number)[] | null;
            fields: import('../../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            orders: import('../../../../TV/API/Params/OrdersTrait.ts').components['schemas']['TV.API.Params.OrdersTrait']['orders'];
            filters: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
            limit?: import('../../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            offset: import('../../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
            fetch_style?: import('../../../../TV/API/Params/FetchStyleTrait.ts').components['schemas']['TV.API.Params.FetchStyleTrait']['fetch_style'];
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
