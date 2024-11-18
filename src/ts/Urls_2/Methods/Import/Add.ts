/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Импортирование urls
         * @description Доступные поля для импорта:
         *     - url
         *     - sitemap
         *     - audit
         *     - indexing
         *     - watcher
         *     - tags
         */
        "Urls_2.Methods.Import.Add": {
            /**
             * Список URL соответствующих домену проекта, допускается формат CSV
             * @description Можно передать в виде файла с именем urls, допускаются форматы CSV и XML (допустимы сжатые XML в .gz)
             *
             *     Нельзя передавать одновременно в виде массива и в виде файла или использовать совместно с link_sitemap_xml
             */
            urls?: import('../../../TV/API/Types/UrlArray.ts').components['schemas']['TV.API.Types.UrlArray'] | null;
            /** Файл с содержимым для импорта, допускается формат XML (допустимы сжатые XML в .gz) */
            link_sitemap_xml?: import('../../../TV/API/Types/Url.ts').components['schemas']['TV.API.Types.Url'] | null;
            tags?: import('../../../Tags_2/Types/TagsIds.ts').components['schemas']['Tags_2.Types.TagsIds'] | null;
            /** Очистить список URL перед импортом */
            reset?: boolean;
            /**
             * Недокументириуемый параметр
             * @description set(Audit_2\Types\Type => regexp)
             */
            setActiveByRegexpByType?: (string | number)[];
            /** Флаг активности в карте сайта
             *     - 1 - присутствовал в прошлых версиях карты сайта */
            sitemap?: import('../../Types/Flag.ts').components['schemas']['Urls_2.Types.Flag'] | null;
            /** Флаг активности в аудите */
            audit?: import('../../Types/Flag.ts').components['schemas']['Urls_2.Types.Flag'] | null;
            /** Флаг активности в радаре */
            indexing?: import('../../Types/Flag.ts').components['schemas']['Urls_2.Types.Flag'] | null;
            /** Флаг активности в индексации */
            watcher?: import('../../Types/Flag.ts').components['schemas']['Urls_2.Types.Flag'] | null;
            debug?: boolean | null;
            project_id: import('../../../TV/API/Params/ProjectIdTrait.ts').components['schemas']['TV.API.Params.ProjectIdTrait']['project_id'];
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
