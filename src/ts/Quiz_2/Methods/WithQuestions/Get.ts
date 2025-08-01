/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение теста с вопросами */
        "Quiz_2.Methods.WithQuestions.Get": {
            /** ID теста */
            quiz_id: string;
            /** ID пользователя, ответы которого нужно вернуть (только для админов) */
            user_id?: number | null;
            fields: import('../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            orders: import('../../../TV/API/Params/OrdersTrait.ts').components['schemas']['TV.API.Params.OrdersTrait']['orders'];
            filters: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
            limit?: import('../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            offset: import('../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
            fetch_style?: import('../../../TV/API/Params/FetchStyleTrait.ts').components['schemas']['TV.API.Params.FetchStyleTrait']['fetch_style'];
        };
        "Quiz_2.Methods.WithQuestions.Get.Exec": unknown[] | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
