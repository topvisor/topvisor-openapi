/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Скачивание реестра исходящих операций
         * @description @POST string month - месяц в формате: YYYY-mm
         *     столбцы CSV: 'Дата акта', 'Номер акта', 'Контрагент', 'ИНН', 'Товар/услуга', 'Номенклатура', 'Кол-во', 'Цена', 'НДС', 'Сумма', 'Способ оплаты'
         */
        "Admin_2.Methods.Accounting.Operations.Export.Get": {
            /** Месяц */
            month: string;
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
