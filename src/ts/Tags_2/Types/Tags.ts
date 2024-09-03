/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Массив номеров тегов
         * @description Тип массива Tags[]
         *
         *     @see Tags_2\Types\Tag
         */
        "Tags_2.Types.Tags": components["schemas"]["Tags_2.Types.Tag"][];
        /**
         * Доступные теги
         * @description Значение должно находится в диапазоне от 1 до 20 включительно
         */
        "Tags_2.Types.Tag": string;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;