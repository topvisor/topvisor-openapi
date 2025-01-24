/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Включение/выключение конкурентов */
        "Projects_2.Methods.Competitors.On.Edit": {
            /** ID проекта */
            project_id: number;
            /** ID конкурентов */
            ids: import('../../../../TV/API/Types/IntArray.ts').components['schemas']['TV.API.Types.IntArray'];
            /**
             * Активность проекта
             * @description - -1 - выключен
             *     - 0 - включен
             */
            on: number;
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
