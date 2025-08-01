/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Изменения подписки сейчас
         *
         *     Реализует две взаимоисключающие стратегии:
         *
         *     - Проведение доплаты по текущей подписке
         *     - Остановка текущей подписки и создание новой
         *        - Новая подписка получит скидку на первый платеж с учетом амортизации оплаты на действующую подписку
         *        - После оплаты новой подписки действующая подписка будет досрочно завершена
         *
         *     Выбор стратегии зависит от типа управления подпиской
         * @description @see Bank_2\Types\Subscriptions\Manager
         */
        "Payments_2.Methods.Subscriptions.Edit": {
            /** Id нового плана подписки */
            subscription_plan_id: string;
            /** Значение цикла новой подписки */
            subscription_cycle: import('../../../Bank_2/Types/Subscriptions/Cycle.ts').components['schemas']['Bank_2.Types.Subscriptions.Cycle'];
        };
        /** Пустая строка в случае успешной автоматической оплаты
         *
         *     Ссылка на оплату, в случае успешного выставления счета, если требуется участие пользователя */
        "Payments_2.Methods.Subscriptions.Edit.Exec": string | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
