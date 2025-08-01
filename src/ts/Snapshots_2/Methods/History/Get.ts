/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение истории снимков выдачи
         *
         *     Метод базируется на объекте keywords (доступны только фильтры) */
        "Snapshots_2.Methods.History.Get": {
            /** Получение данных по всем запросам
             *
             *     Может быть 1 или Snapshots_2\Types\History\Export\Output */
            output?: unknown;
            /** Id проекта */
            project_id: number;
            /** Индекс региона
             *
             *     Если не задан нужно задать параметры searcher_key, region_key, region_lang, region_device */
            region_index?: number | null;
            /** Ключ региона */
            region_key?: number | null;
            /** Язык региона */
            region_lang?: string | null;
            region_device?: import('../../../Positions_2/Types/RegionDevice.ts').components['schemas']['Positions_2.Types.RegionDevice'] | null;
            /** Добавить ли в результат даты, в которых были проверки (existsDates) */
            show_exists_dates?: boolean;
            /** Добавить ли в результат показатель шторма между выбранными проверками */
            show_ams?: boolean;
            positions_fields?: import('../../Types/History/PositionsFields.ts').components['schemas']['Snapshots_2.Types.History.PositionsFields'] | null;
            searcher_key?: import('../../../Positions_2/Types/SearcherKey.ts').components['schemas']['Positions_2.Types.SearcherKey'] | null;
            /** Произвольные даты без использования диапазона
             *
             *     Если не задан нужно задать параметры date1, date2, type_range, count_dates */
            dates?: import('../../../TV/API/Types/DateArray.ts').components['schemas']['TV.API.Types.DateArray'] | null;
            /** Дата начала диапазона */
            date1?: import('../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
            /** Дата окончания диапазона */
            date2?: import('../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
            /**
             * Тип диапазона дат
             * @default 3
             */
            type_range: number;
            /**
             * Количество дней в диапазоне
             * @default 31
             */
            count_dates: number;
            /** Только запросы, присутствующие в первой проверке указанного периода
             *
             *     - 2 - только добавленные запросы за период, работает не корректно из-за ограничения JOIN CH */
            only_exists_first_date?: number | null;
            /** При фильтрации по ID папок также искать в подпапках */
            group_folder_id_depth?: boolean;
            /** Искать в корзине */
            show_trash?: boolean;
            fields?: import('../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            orders?: import('../../../TV/API/Params/OrdersTrait.ts').components['schemas']['TV.API.Params.OrdersTrait']['orders'];
            filters?: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
            limit?: import('../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            offset?: import('../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
            fetch_style?: import('../../../TV/API/Params/FetchStyleTrait.ts').components['schemas']['TV.API.Params.FetchStyleTrait']['fetch_style'];
        };
        "Snapshots_2.Methods.History.Get.Exec": (unknown[] | null | {
            competitors: {
                domain: string;
                protocol: string;
                summariesData: {
                    [key: string]: {
                        countUrls: number;
                        avg?: number;
                        median?: number;
                        tops?: {
                            "\"1_10\"": number;
                            "\"11_20\""?: number;
                            "\"11_30\""?: number;
                            "\"11_50\""?: number;
                            "\"31_50\"": number;
                            "\"51_100\"": number;
                            all: number;
                            absent: number;
                        };
                        visibility?: number;
                        volumes_no_collected?: "0" | "1" | "2";
                        urls?: string[];
                    };
                };
                url?: string;
            }[];
            dates: string[];
            depthPositions: number;
            countKeywords: number;
            volumes_no_collected?: "0" | "1" | "2";
            existsDates?: string[];
        }) | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
