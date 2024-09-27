/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Экспорт результатов индексации
         * @description Необходимо указать либо date1 и date2, либо dates (вместе указывать нельзя)
         */
        "Audit_2.Methods.Indexing.Export.Get": {
            /** Поисковые системы */
            searchers_keys: import('../../../Types/Indexing/SearcherKeys.ts').components['schemas']['Audit_2.Types.Indexing.SearcherKeys'];
            /**
             * Если указан, файл будет сохранен в указанной папке и будет возвращен путь к файлу
             * @description Для внутреннего использования
             *
             *     @private
             */
            returnFilenameFromFolder?: string | null;
            /** Формат экспортируемого файла */
            output: import('../../../../TV/API/Types/ExportFormat.ts').components['schemas']['TV.API.Types.ExportFormat'];
            /** Настройки экспорта */
            properties: (string | number)[];
            /** Произвольные даты без использования диапазона */
            dates?: (string | number)[] | null;
            /** Дата начала диапазона */
            date1?: import('../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
            /** Дата окончания диапазона */
            date2?: import('../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
            /**
             * Период в днях
             * @default 7
             */
            periodDays: number;
            /** @default 7 */
            type_range: import('../../../Types/Indexing/Export/TypeRange.ts').components['schemas']['Audit_2.Types.Indexing.Export.TypeRange'];
            /**
             * Количество дней в диапазоне
             * @default 60
             */
            count_dates: number;
            project_id: import('../../../../TV/API/Params/ProjectIdTrait.ts').components['schemas']['TV.API.Params.ProjectIdTrait']['project_id'];
            fields: import('../../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
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
