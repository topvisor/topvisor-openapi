/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Изменение состояния подписки на рассылку журнала */
        "Content_2.Methods.Journal.Subscribe.Edit": {
            /** Подписаться/отписаться
             *     * 1: подписаться
             *     * 0: отписаться */
            subscribe: boolean;
            filters: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
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
