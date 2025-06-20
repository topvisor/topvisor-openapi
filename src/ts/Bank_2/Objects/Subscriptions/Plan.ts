/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Класс настройки плана подписки
         *
         *     Используйте этот класс для описания настроек в namespace `Config\Sites\Common\Subscriptions\Plan`
         *
         *     В плане нужно указать его имя, стоимость и лимиты
         *
         *     Планы можно группировать:
         *
         *     - в одном и том же плане может быть разное количество запросов и других лимитов
         *     - в этом случае для каждого варианта создается отдельный класс с добавлением порядкового номера в имени файла
         *     - все вариации такого плана должны иметь одно и то же имя
         *     - это делается для визуального упрощения работы с планами, на самом деле каждая вариация плана, это уникальный план со своими настройками
         *
         *     В примерах указаны примерные соотношения между лимитами:
         *
         *     - для удобства можно использовать математическими выражения
         *     - для гибкости можно указывать произвольные значения
         *
         *     Рекомендация по названию классов, для удобства настройки:
         *      - `A_{{ PlanName }}{{ Number }}`
         *      - `B_{{ PlanName }}{{ Number }}`
         *      - `C_{{ PlanName }}{{ Number }}`
         *
         *     Префикс имени класса будет определять id группы, который можно использовать для оформления групп планов
         *
         *     Пример имени класса, оно же id плана: `A_StarterPack1`
         *
         *     При выводе на сайте тарифы выводятся в нужном порядке, например с сортировкой по стоимости */
        "Bank_2.Objects.Subscriptions.Plan": {
            id: string;
            name: string;
            priceUSD: number;
            /** Скидка за годовую подписку в процентах от 0 до 1
             *
             *     При расчете финальной стоимости может использоваться округление */
            annualDiscount: number;
            /** Выдаваемые лимиты */
            maxByName: unknown[];
            /** Суффикс, характеризующий настройки тарифа */
            suffixName: string;
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
