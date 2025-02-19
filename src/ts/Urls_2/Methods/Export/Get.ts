/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Экспорт urls в определенном формате */
        "Urls_2.Methods.Export.Get": {
            output: import('../../Types/Export/Output.ts').components['schemas']['Urls_2.Types.Export.Output'];
            /** Вывести fieldName в заголовках столбцов (для CSV) */
            show_fields_names?: boolean;
            /** Вывести fieldLabel в заголовках столбцов (для CSV) */
            show_fields_labels?: boolean;
            /** Вернуть данные в формате для копироваиня в буфер обмена
             *
             *     Не более 2000 результатов */
            forClipboard?: boolean;
            fields: import('../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            orders: import('../../../TV/API/Params/OrdersTrait.ts').components['schemas']['TV.API.Params.OrdersTrait']['orders'];
            filters: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['filters'];
            id?: import('../../../TV/API/Params/FiltersTrait.ts').components['schemas']['TV.API.Params.FiltersTrait']['id'];
            limit?: import('../../../TV/API/Params/LimitTrait.ts').components['schemas']['TV.API.Params.LimitTrait']['limit'];
            offset: import('../../../TV/API/Params/OffsetTrait.ts').components['schemas']['TV.API.Params.OffsetTrait']['offset'];
            fetch_style?: import('../../../TV/API/Params/FetchStyleTrait.ts').components['schemas']['TV.API.Params.FetchStyleTrait']['fetch_style'];
            project_id: import('../../../TV/API/Params/ProjectIdTrait.ts').components['schemas']['TV.API.Params.ProjectIdTrait']['project_id'];
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
