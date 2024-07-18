/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение списка проектов */
        "Example_2.Methods.Projects.Get": {
            /**
             * Имя проекта
             * @description Используется для фильтрации по имени проекта, см. self::exec()
             *
             *     Не обязательный параметр метода строкового типа
             */
            name?: string | null;
            /**
             * Список полей объекта, которые надо вернуть в результате
             * @description Если запрос поддерижвает параметр fetch_style, формат ответа может быть разным, fields будет влиять на содержание данных в этом ответе
             *
             *     Использует поля модели
             *     @see AbstractMethod::MODEL
             */
            fields?: (string | number)[] | null;
            /**
             * Список полей объекта, по которым необходимо выполнить сортировку
             * @description Поля могут быть строками или объектом: {name: string, direction: 'ASC' | 'DESC', orderValues: array}
             *
             *     Использует поля модели
             *     @see AbstractMethod::MODEL
             */
            orders?: (string | number)[] | null;
            /**
             * Список фильтров по полям объекта
             * @description {name: string, operator: Field::AVAILABLE_OPERATORS, values: array}
             *
             *     Использует поля модели
             *     @see AbstractMethod::MODEL
             *     @see Field::AVAILABLE_OPERATORS
             */
            filters?: (string | number)[] | null;
            /**
             * Id объекта, для фильтрации объектов по id
             * @description Только для моделей с полем id
             */
            id?: number | null;
            /**
             * Количество объектов, которые необходимо получить в результате
             * @description Используется в паре с offset
             */
            limit?: number | null;
            /**
             * Число объектов, которое необходимо пропустить при получении резальтата
             * @description Используется в паре с limit
             */
            offset?: number | null;
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
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
