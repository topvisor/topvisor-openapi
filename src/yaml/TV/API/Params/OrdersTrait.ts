/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "TV.API.Params.OrdersTrait": {
            /**
             * Список полей объекта, по которым необходимо выполнить сортировку
             * @description Поля могут быть строками или объектом: {name: string, direction: 'ASC' | 'DESC', orderValues: array}
             *
             *     Использует поля модели
             *     @see AbstractMethod::MODEL
             */
            orders?: (string | number)[] | null;
        };
    };
    responses: never;
    parameters: {
        /** @description Список полей объекта, по которым необходимо выполнить сортировку
         *
         *     Поля могут быть строками или объектом: {name: string, direction: 'ASC' | 'DESC', orderValues: array}
         *
         *     Использует поля модели
         *     @see AbstractMethod::MODEL */
        orders: (string | number)[];
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
