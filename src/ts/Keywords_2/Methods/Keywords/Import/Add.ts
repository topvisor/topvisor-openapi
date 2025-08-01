/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Импорт запросов (по необходимости зависимых с ними групп и папок)
         *
         *     Доступные поля для импорта: group_folder_path|group_name|name|tags|target поля перекрывают аналогичные параметры в запросе
         * @description @see Keywords_2\Mods\Keywords\Import::fromHandle()
         */
        "Keywords_2.Methods.Keywords.Import.Add": {
            /** Id проекта */
            project_id: number;
            /** Массив ключевых запросов в формате CSV
             *
             *     - array keywords - массив ключевых запросов, допускается формат CSV
             *     - file(txt, csv) keywords - файл с содержимым для импорта, допускается формат CSV
             *     - resource keywords - указатель на файл с содержимым для импорта, допускается формат CSV
             *     - нельзя передавать keywords одновременно в виде массива, в виде файла или в виде ресурса */
            keywords?: unknown;
            /** Id папки, если папка не указана будет использована корневая папка проекта */
            folder_id?: number | null;
            /** Id группы, если не указан будет создана новая группа в указанной папке */
            group_id?: number | null;
            /** Имя группы, если не указан group_id, если группа с таким именем уже существует, то будет исползоваться она */
            group_name?: string | null;
            /**
             * Активность создаваемых групп (по умолчанию: 1 - активные)
             * @default true
             */
            group_on: boolean;
            /** Переносить ли дубли (по умолчанию: 0 - не переносить) */
            move_duplicate?: boolean | null;
            /** Id группы для переноса дублей, если не указана будет использован параметр move_duplicate_group_name */
            move_duplicate_group_id?: number | null;
            /** Имя группы для переноса дублей, если группы с таким именем в папке move_duplicate_folder_id нет, она будет создана */
            move_duplicate_group_name?: string | null;
            /** Id папки для переноса дублей, если не указана, то будет использоваться корневая папка проекта */
            move_duplicate_folder_id?: number | null;
            /** Вырезать ли плюсы, точки, запятые, апострофы, кавычки (по умолчанию: 0 - не вырезать) */
            remove_special_chars?: boolean | null;
            /** Массив номеров тегов */
            tags?: import('../../../../Tags_2/Types/TagsIds.ts').components['schemas']['Tags_2.Types.TagsIds'] | null;
        };
        "Keywords_2.Methods.Keywords.Import.Add.Exec": unknown[] | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
