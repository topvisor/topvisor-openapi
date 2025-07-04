/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение результатов проверок радара
         *
         *     Отчет генерируется на основе объектов urls
         *
         *     Необходимо указать либо check_id1 и check_id2, либо checks_ids (вместе указывать нельзя) */
        "Audit_2.Methods.Watcher.Get": {
            /** ID проверок в произвольном порядке */
            checks_ids?: unknown[] | null;
            /** ID проверки начала диапазона */
            check_id1?: number | null;
            /** ID проверки конца диапазона */
            check_id2?: number | null;
            /** @default 7 */
            type_range: import('../../Types/Watcher/TypeRange.ts').components['schemas']['Audit_2.Types.Watcher.TypeRange'];
            /**
             * Максимальное число возвращаемых проверок (не более 60)
             * @default 60
             */
            count_ids: number;
            watcher_type: import('../../Types/Watcher/Type.ts').components['schemas']['Audit_2.Types.Watcher.Type'];
            /**
             * Выбор столбцов данных с результатами проверки
             * @default [
             *       "http_codes",
             *       "redirects"
             *     ]
             */
            watcher_fields: unknown[];
            /** Добавить в результат заголовки отчета */
            show_headers?: boolean;
            show_diff?: import('../../Types/Watcher/ShowDiff.ts').components['schemas']['Audit_2.Types.Watcher.ShowDiff'];
            /** Добавить в результат количество проверок */
            show_counts_watcher?: boolean;
            project_id: import('../../../TV/API/Params/ProjectIdTrait.ts').components['schemas']['TV.API.Params.ProjectIdTrait']['project_id'];
            fields?: import('../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            filters?: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
            limit?: import('../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            orders?: import('../../../TV/API/Params/OrdersTrait.ts').components['schemas']['TV.API.Params.OrdersTrait']['orders'];
            offset?: import('../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
        };
        /** Генерируемый на основе urls, список результатов проверок радара */
        "Audit_2.Methods.Watcher.Get.Exec": unknown[] | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
