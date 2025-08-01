/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Информация о стоимости запуска индексации по проектам */
        "Audit_2.Methods.Watcher.Checker.Price.Get": {
            /**
             * Запуск в режиме отладки
             *
             *      Только для админов
             * @description @private
             */
            debug?: boolean;
            filters: import('../../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
        };
        "Audit_2.Methods.Watcher.Checker.Price.Get.Exec": Record<string, never>;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
