/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Создание и проведение транзакции */
        "Admin_2.Methods.Actions.Bank.Edit": {
            /**
             * Операция
             * @description - 2: бонусное пополнение
             *     - 1: пополнение
             *     - -1: списание
             */
            action: number;
            /** ID пользователя */
            userId: number;
            /** Сумма */
            sum: number;
            /** Причина */
            purpose: string;
            /** Являеется ли запуск - тестом */
            test: boolean;
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
