/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Редактирование тегов проектов */
        "Projects_2.Methods.Projects.Tags.Edit": {
            /**
             * enum(1..10) tags - теги проекта (по умолчанию - [1])
             * @default [
             *       1
             *     ]
             */
            tags: unknown[];
            /** ID проекта */
            id: number;
        };
        "Projects_2.Methods.Projects.Tags.Edit.Exec": number | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
