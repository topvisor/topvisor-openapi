/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Копирование проекта */
        "Projects_2.Methods.Projects.Copy.Add": {
            /** ID проекта */
            project_id: number;
            /** Копировать ли запросы проекта */
            copy_keywords?: boolean | null;
            /** Копировать ли позиции по запросам проекта (если copy_keywords = 1) */
            copy_positions?: boolean | null;
        };
        "Projects_2.Methods.Projects.Copy.Add.Exec": string | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
