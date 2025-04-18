/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение статистики по среднему времени ожидания ответа на вопросы в тикетах */
        "Admin_2.Methods.Analytics.Tickets.ChartByWaitTime.Get": {
            period: components["schemas"]["Admin_2.Types.Analytics.Segment"];
            /** Длина периода */
            limit: number;
            /** Максимальная дата отчета */
            date?: components["schemas"]["TV.API.Types.Date"] | null;
        };
        /**
         * Имя сегмента, на которые делится период отчета
         *
         *     Отчет делится на равные части - сегменты, за каждый сегмент выводится сводка с агрегацией по этому сегменту
         *
         *     Пример: вывод количества регистраций за каждый **месяц** в отчете
         * @enum {string}
         */
        "Admin_2.Types.Analytics.Segment": "day" | "month" | "year";
        /**
         * Дата
         * @example 2000-01-01
         */
        "TV.API.Types.Date": string;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
