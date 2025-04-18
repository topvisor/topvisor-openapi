/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Создание гостевой ссылки на просмотр радара */
        "Audit_2.Methods.Watcher.Export.Links.Get": {
            /** Выбранный элемент в меню */
            view_name?: string;
            /** Выводить полные тексты (для вкладки контент) */
            fulltext: boolean;
            /** @default all */
            changed: components["schemas"]["Audit_2.Types.Audit.Summary.FilterCheckState"];
            /** Фильтр по тегам */
            tags_ids?: (string | number)[] | null;
            project_id: components["schemas"]["project_id"];
            check_id: components["schemas"]["check_id"];
        };
        /**
         * Фильтр по состоянию изменения в сводке
         * @enum {string}
         */
        "Audit_2.Types.Audit.Summary.FilterCheckState": "all" | "changed";
        /** ID проекта */
        project_id: number;
        /** ID проверки радара */
        check_id: number;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
