/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение статистики тикетов по миграциям */
        "Admin_2.Methods.Analytics.Tickets.ChartByMigrations.Get": {
            period: import('../../../../Types/Analytics/Segment.ts').components['schemas']['Admin_2.Types.Analytics.Segment'];
            /** Длина периода */
            limit: number;
            /** Максимальная дата отчета */
            date?: import('../../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
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
