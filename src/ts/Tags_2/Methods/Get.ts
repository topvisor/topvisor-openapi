/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение списка тегов */
        "Tags_2.Methods.Get": {
            type: components["schemas"]["Tags_2.Types.Type"];
            project_id?: number | null;
        };
        /**
         * Тип тега, к каким объектам применяется
         * @enum {string}
         */
        "Tags_2.Types.Type": "tickets" | "projects" | "keywords" | "snippets" | "shortLinks" | "urls";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
