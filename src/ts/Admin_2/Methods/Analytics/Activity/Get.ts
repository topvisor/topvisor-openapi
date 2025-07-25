/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение активности пользователей по статусам активности
         *     статусы активности:
         *            1. Активный - клиент, который пополнял баланс в сервисе хотя бы раз. При этом трата средств в течение месяца не мнее 100 рублей (или $5).
         *            2. Активный (новый) - в эту категорию попадают клиенты, которые первый раз перешли в статус "Активного клиента".
         *            3. Активный (постоянный) - в эту категорию попадют клиенты, которые не меняли свой статус активности за последний месяц
         *            4. Активный (вернувшийся) - в эту категорию попадют клиенты, которые вернули себе статус "Активный клиент".
         *            5. Стал не активным - в эту категорию попадют клиенты, которые потеряли статус "Активного клиента" и на протяжении 2 месяцев не возвращали
         *     себе этот статус. */
        "Admin_2.Methods.Analytics.Activity.Get": {
            currency: import('../../../../TV/API/Types/Currency.ts').components['schemas']['TV.API.Types.Currency'];
            /** Валюта */
            limit: number;
            /** Дата */
            date: import('../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'];
        };
        "Admin_2.Methods.Analytics.Activity.Get.Exec": unknown[] | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
