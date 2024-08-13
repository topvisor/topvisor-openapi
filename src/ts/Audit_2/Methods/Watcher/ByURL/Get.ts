/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Построить отчет по одному URL
         * @description Отличия от get/audit_2/watcher:
         *     - отчет генерируется на основе объекта watcher_results, а не urls
         *     - параметры выбора периода отчета игнорируются
         *     - выбор прверок регулируется параметрами запроса filters, limit и offset
         */
        "Audit_2.Methods.Watcher.ByURL.Get": {
            /** ID URL */
            url_id: number;
            /** Включать ли в результат названия столбцов */
            show_headers: boolean;
            /**
             * Выбор столбцов данных с результатами проверки
             * @default [
             *       "http_codes",
             *       "redirects"
             *     ]
             */
            watcher_fields: (string | number)[];
            show_diff: import('../../../Types/Watcher/ShowDiff.ts').components['schemas']['Audit_2.Types.Watcher.ShowDiff'];
            watcher_type: import('../../../Types/Watcher/Type.ts').components['schemas']['Audit_2.Types.Watcher.Type'];
            fields?: import('../../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            orders: import('../../../../TV/API/Params/OrdersTrait.ts').components['schemas']['TV.API.Params.OrdersTrait']['orders'];
            filters: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
            limit?: import('../../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            offset: import('../../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
            fetch_style?: import('../../../../TV/API/Params/FetchStyleTrait.ts').components['schemas']['TV.API.Params.FetchStyleTrait']['fetch_style'];
            project_id: import('../../../../TV/API/Params/ProjectIdTrait.ts').components['schemas']['TV.API.Params.ProjectIdTrait']['project_id'];
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
