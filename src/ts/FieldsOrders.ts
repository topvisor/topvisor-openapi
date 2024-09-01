/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Список полей сортировки */
        FieldsOrders: components["schemas"]["FieldOrder"][];
        /**
         * Направление сортировки
         * @enum {string}
         */
        FieldDirection: "ASC" | "DESC";
        /**
         * Операторы сравнения с полем
         * @enum {string}
         */
        FieldOperator: "EQUALS" | "NOT_EQUALS" | "IN" | "NOT_IN" | "GREATER_THAN" | "GREATER_THAN_EQUALS" | "LESS_THAN" | "LESS_THAN_EQUALS" | "BETWEEN" | "STARTS_WITH" | "CONTAINS" | "DOES_NOT_CONTAIN" | "REGEXP" | "NOT_REGEXP" | "IS_NULL" | "IS_NOT_NULL";
        /** Поле сортировки */
        FieldOrder: {
            /** Имя поля */
            name: string;
            /**
             * Оператор сравнения
             * @default ASC
             */
            direction: components["schemas"]["FieldDirection"];
            /** Список значений поля, для ручной сортировки */
            orderValues: (string | number)[];
            /** Оператор сравнения */
            operator: components["schemas"]["FieldOperator"];
            /**
             * Значения для сравенния
             * @description В зависимости от типа условия оно может иметь разное количество значений
             *
             *     Обычно оно имеет только одно значение
             */
            values: (string | number)[];
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
