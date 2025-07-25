/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение списка конкурентов */
        "Projects_2.Methods.Competitors.Get": {
            /** @default [
             *       "id",
             *       "name",
             *       "site",
             *       "on"
             *     ] */
            fields: unknown[];
            /** ID проекта */
            project_id: number;
            /** Вернуть ли в результате только включенных конкурентов */
            only_enabled?: boolean | null;
            /** Включить ли в результат основной проект */
            include_project?: boolean | null;
        };
        "Projects_2.Methods.Competitors.Get.Exec": unknown[];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
