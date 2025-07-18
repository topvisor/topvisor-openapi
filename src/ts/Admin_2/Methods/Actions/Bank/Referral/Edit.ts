/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Оплата реферального счета */
        "Admin_2.Methods.Actions.Bank.Referral.Edit": {
            /** ID пользователя */
            userId: number;
            /** ID акта
             *
             *     Укажите `sum=`, если API не раблотает и данных акта нет */
            entityId?: string | null;
            /** Дата акта в формате d.m.Y */
            date: string;
            /** Пароль в диадоке */
            pass: string;
            /** Являеется ли запуск - тестом */
            test: boolean;
        };
        "Admin_2.Methods.Actions.Bank.Referral.Edit.Exec": import('../../../../Objects/Actions/Result.ts').components['schemas']['Admin_2.Objects.Actions.Result'];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
