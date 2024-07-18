/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Получение данных подтверждения
         * @description Возвращает результат подтверждения в виде
         *     массива с сообщением (acceptAction),
         *     логической переменной (acceptEmail),
         *     null при неправильно введенном типе
         */
        "App_2.Methods.Actions.Get": {
            /** Email пользователя */
            email?: string;
            /** Код для генерации ссылки подтверждения */
            code?: string;
            /**
             * Тип подтверждения
             * @default acceptAction
             */
            type_action: string;
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
