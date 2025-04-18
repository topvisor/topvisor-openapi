/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение активности пользователей в формате для графика */
        "Admin_2.Methods.Analytics.Activity.ChartByPeriod.Get": {
            currency: components["schemas"]["TV.API.Types.Currency"];
            /** Валюта */
            limit: number;
            /** Дата */
            date: components["schemas"]["TV.API.Types.Date"];
        };
        /**
         * Валюта
         *
         *     Этот общий тип, не зависящий от контекста
         *
         *     Дополниетольно нужно проверять в API методах через site()->checkAllowCurrency() в функции check()
         * @enum {string}
         */
        "TV.API.Types.Currency": "RUB" | "USD";
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
