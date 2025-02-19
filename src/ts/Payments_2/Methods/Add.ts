/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Создание платежки и переход к оплате
         *
         *     Возвращает id платежа, если указан параметр $return_id = true
         *
         *     Производит редирект, если настроена форма оплаты на стороне платежной системы
         *
         *     Возвращает информацию о платеже, если ожидается вывод формы оплаты на сайте
         *
         *     При ошибке производит редирект на страницу с инофрмацией об ошибке */
        "Payments_2.Methods.Add": {
            /** Платежная система */
            system: import('../Types/System.ts').components['schemas']['Payments_2.Types.System'];
            /** Сумма платежа */
            sum: number;
            /** Страна реквизитов */
            country: import('../Types/Country.ts').components['schemas']['Payments_2.Types.Country'];
            /** Номер договора/оферты для платежа */
            requisites_id?: string;
            /** ID тарифа (если указан, сумма будет переопределена) */
            tariff_id?: number;
            /** Число предоплаченных месяцев по тарифу
             *
             *     Примеры:
             *     - при оплате тарифа на 1 месяц должен быть равен 1
             *     - при оплате тарифа на 2 месяца должен быть равен 2 */
            tariff_count_month?: number;
            /** Комментарий */
            comment?: string;
            /** Комментарий */
            items?: (string | number)[];
            /** ID карты в системе оплаты для привязки */
            card_id?: string;
            /** Пробрасываемые данные в redirectToPay() для FinishAuthorize Tinkoff для Apple Pay и Google Pay */
            payment_data?: string;
            /** Email (указывается, если у пользователя не привязан email)
             *     TODO: Добавить тип Email */
            email?: string | null;
            /** Телефон (указывается для определенных систем оплаты) */
            phone?: string;
            /** Флаг - отменяемый платеж, используется для сохранения данных банковской карты пользователя, сумма платежа вернется пользователю после отмены */
            is_cancelable?: boolean;
            /** Возвратить id платежа, не выполняя redirectToPay() */
            return_id?: boolean;
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
