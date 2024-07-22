/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "TV.API.Params.FetchStyleTrait": {
            /**
             * Определяет формат результата: коллекция, объект, значение
             * @description Примеры:
             *     - fetchAll - получить коллекцию объектов
             *     - fetch - получить один объект
             *     - fetchColumn - получить свойсвто объекта
             *
             *     @see Selector::AVAILABLE_FETCH_STYLES
             *     @see Selector::execFetch() - см. реализацию
             */
            fetch_style?: string | null;
        };
    };
    responses: never;
    parameters: {
        /** @description Определяет формат результата: коллекция, объект, значение
         *
         *     Примеры:
         *     - fetchAll - получить коллекцию объектов
         *     - fetch - получить один объект
         *     - fetchColumn - получить свойсвто объекта
         *
         *     @see Selector::AVAILABLE_FETCH_STYLES
         *     @see Selector::execFetch() - см. реализацию */
        fetch_style: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;