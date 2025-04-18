/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Удаление конкурентов
         *
         *     Обязательный параметр или ids или urls */
        "Projects_2.Methods.Competitors.Del": {
            /** ID проекта */
            project_id: number;
            /** ID конкурентов */
            ids?: components["schemas"]["TV.API.Types.IntArray"] | null;
            /** Url конкурентов */
            urls?: components["schemas"]["TV.API.Types.UrlShortArray"] | null;
        };
        /** Тип массива: int
         *
         *     Принимает: Любые целые числа и числа в строках
         *
         *     Хранит: int */
        "TV.API.Types.IntArray": number[];
        /** Краткий URL в punycode, не может содержать UTF-символы:
         *     - без схемы
         *     - без "www." в домене
         *     - без слешей на конце
         *     - без "<" и ">"
         *
         *     Будет проивзедено автоматическое приведение к формату
         *
         *     Разрешен ввод пустой строки, для удаления значения url */
        "TV.API.Types.UrlShort": string;
        /**
         * Тип массива: UrlShort[]
         * @description @see UrlShort
         */
        "TV.API.Types.UrlShortArray": components["schemas"]["TV.API.Types.UrlShort"][];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
