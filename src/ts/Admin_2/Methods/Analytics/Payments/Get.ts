/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение суммы оплат за период */
        "Admin_2.Methods.Analytics.Payments.Get": {
            period: components["schemas"]["Admin_2.Types.Analytics.Segment"];
            /** Длина периода */
            limit: number;
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
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
