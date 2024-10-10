/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /**
         * Отправка акта сверки в диадок
         * @description Параметры см. в bank_2_requisites::protected_get_printTotalReceipt();
         */
        "Bank_2.Methods.Diadoc.SendTotalReceipt.Get": {
            org_id: string;
            date1: import('../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'];
            date2: import('../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'];
            org_kpp: string;
            requisites_id?: string | null;
            signed?: boolean | null;
            fields: import('../../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            orders: import('../../../../TV/API/Params/OrdersTrait.ts').components['schemas']['TV.API.Params.OrdersTrait']['orders'];
            filters: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
            limit?: import('../../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            offset: import('../../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
            fetch_style?: import('../../../../TV/API/Params/FetchStyleTrait.ts').components['schemas']['TV.API.Params.FetchStyleTrait']['fetch_style'];
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