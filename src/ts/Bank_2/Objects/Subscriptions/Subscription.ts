/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Информация о текущей подписки пользователя и ее лимитах */
        "Bank_2.Objects.Subscriptions.Subscription": {
            /** id платежа, подписки */
            paymentId: number;
            /** Платежная система */
            paymentSystem: string;
            /** Id платежа в платежной системе */
            externalPaymentId: string;
            /** Id реквизитов юр. лица, указанные при оплате */
            paymentRequisitesId: string;
            /** Стоимость амортизации
             *
             *     Используется для расчета первого платежа при переподписки на другой план
             *
             *     Указывается в валюте подписки */
            depreciationCost: number;
            /** Текущий план подписки */
            plan: import('./Plan.ts').components['schemas']['Bank_2.Objects.Subscriptions.Plan'];
            /** Следующий план подписки */
            nextPlan?: import('./Plan.ts').components['schemas']['Bank_2.Objects.Subscriptions.Plan'] | null;
            /** Состояние подписки */
            recurrentState: import('../Requisites/Payment/RecurrentState.ts').components['schemas']['Bank_2.Objects.Requisites.Payment.RecurrentState'];
            /** Текущий цикл для подписки */
            cycle: import('../../Types/Subscriptions/Cycle.ts').components['schemas']['Bank_2.Types.Subscriptions.Cycle'];
            /** Цикл для следующей подписки */
            nextCycle: import('../../Types/Subscriptions/Cycle.ts').components['schemas']['Bank_2.Types.Subscriptions.Cycle'];
            /** Стоимость текущей подписки */
            price: number;
            /** Стоимость продления подписки */
            renewPrice: number;
            /**
             * Использованные лимиты
             *
             *     Доступные лимиты см. в `plan`
             *
             *     Для нетарифицируемых лимитов значение всегда `null`
             * @description @type Array<Bank_2\Types\Subscriptions\Limit\Name, int>
             */
            limitUsedByName: unknown[];
            /** Типы лимитов */
            limitTypeByName: unknown[];
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
