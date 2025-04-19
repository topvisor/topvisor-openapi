/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение календаря апдейтов */
        "Content_2.Methods.Apometr.Calendar.Get": {
            /** Индекс региона
             *
             *     Если не задан нужно задать параметры searcher_key, region_key, region_lang, region_device */
            region_index?: number | null;
            searcher_key?: import('../../../../Positions_2/Types/SearcherKey.ts').components['schemas']['Positions_2.Types.SearcherKey'] | null;
            /** Ключ региона */
            region_key?: number | null;
            /** Язык региона */
            region_lang?: string | null;
            region_device?: import('../../../../Positions_2/Types/RegionDevice.ts').components['schemas']['Positions_2.Types.RegionDevice'] | null;
            action?: import('../../../Types/Apometr/Action.ts').components['schemas']['Content_2.Types.Apometr.Action'];
            /** Дата, определяющая месяц, в формате YYYY-MM-01 */
            date_month?: import('../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
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
