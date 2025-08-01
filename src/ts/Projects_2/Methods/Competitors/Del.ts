/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Удаление конкурентов
         *
         *     Обязательный параметр или ids или urls */
        "Projects_2.Methods.Competitors.Del": {
            /** ID проекта */
            project_id: number;
            /** ID конкурентов */
            ids?: import('../../../TV/API/Types/IntArray.ts').components['schemas']['TV.API.Types.IntArray'] | null;
            /** Url конкурентов */
            urls?: import('../../../TV/API/Types/UrlShortArray.ts').components['schemas']['TV.API.Types.UrlShortArray'] | null;
        };
        "Projects_2.Methods.Competitors.Del.Exec": number;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
