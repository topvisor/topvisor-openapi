/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение цены на расширение группы */
        "Keywords_2.Methods.Collect.Ext.Price.Get": {
            /** ID проекта */
            project_id: number;
            /** Минус фразы */
            keywords_minus?: (string | number)[] | null;
            /** Каким типом расширять группу */
            collection_type: import('../../../../Types/Collect/CollectionType.ts').components['schemas']['Keywords_2.Types.Collect.CollectionType'];
            /**
             * Объекты определителей настроек ПС и регионов
             * @description @var array<int, array{region_key: int, searcher_key: (0 | 1 | 5 | 100 | 101 | 102 | 104 | 105 | 106), region_lang?: (string | null), also_searched?: (int | null), depth?: (int | null), hint_depth: (1 | 2 | 3), hint_generators: array<('letter' | 'letter_ru' | 'number' | 'space')>}>
             */
            qualifiers: (string | number)[];
            filters?: import('../../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
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
