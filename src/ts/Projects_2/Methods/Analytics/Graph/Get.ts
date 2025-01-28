/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение данных графика */
        "Projects_2.Methods.Analytics.Graph.Get": {
            /** ID проекта */
            project_id: number;
            /** Номер метрики */
            axe: import('../../../Types/Analytics/Axe.ts').components['schemas']['Projects_2.Types.Analytics.Axe'];
            /** Данные графика */
            data: (string | number)[];
            /** Сравнение метрики */
            compare_axe?: number | null;
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
