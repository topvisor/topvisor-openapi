/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Изменение комментария
         *
         *     Изменять комментарий можно только в течение ограниченного времени */
        "Comments_2.Methods.Edit": {
            /** ID комментария */
            id: number;
            /** Текст комментария, не может быть пустой строкой */
            text: string;
        };
        "Comments_2.Methods.Edit.Exec": number | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
