/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "Keywords_2.Methods.Collect.AbstractRegular": {
            /** ID проекта */
            project_id: number;
            /** Список исходных запросов */
            keywords: (string | number)[];
            /**
             * Объекты определителей настроек ПС и регионов
             * @description @var array<int, array{region_key: int, searcher_key: (0 | 1 | 5 | 100 | 101 | 102 | 104 | 105 | 106), region_lang?: (string | null), also_searched?: (int | null), depth?: (int | null), hint_depth: (1 | 2 | 3), hint_generators: array<('letter' | 'letter_ru' | 'number' | 'space')>}>
             */
            qualifiers: (string | number)[];
            /** Минус фразы (только для searcher_key = 0 и searcher_key = 1) */
            keywords_minus?: (string | number)[];
            /** Id группы для размещения подобранных запросов */
            to_group_id?: number | null;
            /** Id папки для новых групп */
            to_id?: number;
            /** @default in_folder_last */
            to_type: import('../../Types/Collect/ToType.ts').components['schemas']['Keywords_2.Types.Collect.ToType'];
            /** Собирать все запросы в одну группу (не несет смысл, если указан to_group_id) */
            in_one_group?: boolean;
            currency?: import('../../../TV/API/Types/Currency.ts').components['schemas']['TV.API.Types.Currency'] | null;
            debug?: string | null;
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
