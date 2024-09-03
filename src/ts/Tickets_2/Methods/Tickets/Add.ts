/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Создание тикета */
        "Tickets_2.Methods.Tickets.Add": {
            /** Текст тикета */
            text: string;
            /** @default system */
            type: components["schemas"]["Tickets_2.Types.Tickets.Type"];
            /** Язык тикета, нужен для подгрузки правильного языка в ответных письмах через почту */
            lang?: components["schemas"]["TV.API.Types.Lang"] | null;
            /** Данные среды пользователя */
            user_data?: (string | number)[] | null;
            /** Не проводить рассылку уведомлений */
            is_silent: boolean;
            /** Необходим только для незарегистрированных пользователей */
            email?: components["schemas"]["TV.API.Types.Email"] | null;
            /**
             * Id пользователя внутри социальной сети, из которой был отправлен тикет
             * @description Может быть в любом виде
             */
            social_user_id: string;
            /**
             * Данные для авторизации в сервисе-конкуренте для переноса проектов
             * @description Недокументированный параметр
             */
            secret?: string | null;
            /**
             * Номер задачи redmine, связанной с тикетом
             * @description Недокументированный параметр
             */
            task_id: number;
        };
        /**
         * Откуда поступил тикет
         * @enum {string}
         */
        "Tickets_2.Types.Tickets.Type": "system" | "other" | "email" | "ios" | "vk" | "chrome" | "twitter" | "facebook" | "telegram" | "android" | "guest";
        /** @enum {string} */
        "TV.API.Types.Lang": "ru" | "en";
        /**
         * E-mail
         * @example name@example.com
         */
        "TV.API.Types.Email": string;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
