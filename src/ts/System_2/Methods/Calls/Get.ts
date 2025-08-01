/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Вызов нескольких методов в одном вызове */
        "System_2.Methods.Calls.Get": {
            /** Методы */
            calls: import('../../Types/Calls/Calls.ts').components['schemas']['System_2.Types.Calls.Calls'];
            /** @default apiV2 */
            getFormat: import('../../Types/Calls/Format.ts').components['schemas']['System_2.Types.Calls.Format'];
            limit?: import('../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            offset?: import('../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
        };
        "System_2.Methods.Calls.Get.Exec": unknown[];
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
