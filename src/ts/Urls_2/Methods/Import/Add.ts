/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Импортирование urls
         *
         *     Доступные поля для импорта:
         *     - url
         *     - sitemap
         *     - audit
         *     - indexing
         *     - watcher
         *     - tags */
        "Urls_2.Methods.Import.Add": {
            /** Список URL соответствующих домену проекта, допускается формат CSV
             *
             *     Можно передать в виде файла с именем urls, допускаются форматы CSV и XML (допустимы сжатые XML в .gz)
             *
             *     Нельзя передавать одновременно в виде массива и в виде файла или использовать совместно с link_sitemap_xml */
            urls?: components["schemas"]["TV.API.Types.UrlArray"] | null;
            /** Файл с содержимым для импорта, допускается формат XML (допустимы сжатые XML в .gz) */
            link_sitemap_xml?: components["schemas"]["TV.API.Types.Url"] | null;
            tags?: components["schemas"]["Tags_2.Types.TagsIds"] | null;
            /** Очистить список URL перед импортом */
            reset?: boolean;
            /** Недокументириуемый параметр
             *
             *     set(Audit_2\Types\Type => regexp) */
            setActiveByRegexpByType?: (string | number)[];
            /** Флаг активности в карте сайта
             *     - 1 - присутствовал в прошлых версиях карты сайта */
            sitemap?: components["schemas"]["Urls_2.Types.Flag"] | null;
            /** Флаг активности в аудите */
            audit?: components["schemas"]["Urls_2.Types.Flag"] | null;
            /** Флаг активности в радаре */
            indexing?: components["schemas"]["Urls_2.Types.Flag"] | null;
            /** Флаг активности в индексации */
            watcher?: components["schemas"]["Urls_2.Types.Flag"] | null;
            debug?: boolean | null;
            project_id: components["schemas"]["project_id"];
        };
        /** Краткий URL в punycode, не может содержать UTF-символы:
         *     - без схемы
         *     - без "www." в домене
         *     - без слешей на конце
         *     - без "<" и ">"
         *
         *     Будет проивзедено автоматическое приведение к формату
         *
         *     Разрешен ввод пустой строки, для удаления значения url */
        "TV.API.Types.Url": string;
        /**
         * Тип массива: Url[]
         * @description @see Url
         */
        "TV.API.Types.UrlArray": components["schemas"]["TV.API.Types.Url"][];
        /**
         * Id тега
         * @enum {string}
         */
        "Tags_2.Types.TagId": "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20";
        /**
         * Список id тегов
         *
         *     Тип массива: TagId[]
         * @description @see Tags_2\Types\TagId
         */
        "Tags_2.Types.TagsIds": components["schemas"]["Tags_2.Types.TagId"][];
        /**
         * Флаг активности
         * @enum {integer}
         */
        "Urls_2.Types.Flag": -1 | 0 | 1 | 2;
        /** ID проекта */
        project_id: number;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
