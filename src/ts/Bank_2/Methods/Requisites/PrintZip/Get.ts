/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Скачивание архива документов в формате PDF */
        "Bank_2.Methods.Requisites.PrintZip.Get": {
            /** Список id документов
             *
             *     Вместо targets_ids можно указывать набор параметров org_id, date1 и date2 */
            targets_ids?: import('../../../../TV/API/Types/IntArray.ts').components['schemas']['TV.API.Types.IntArray'] | null;
            /** Id организации */
            org_id?: string | null;
            /** Дата начала диапазона */
            date1?: import('../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
            /** Дата конца диапазона */
            date2?: import('../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'] | null;
            /** Тип документа enum(RequisitesDocuments::$availableDocumentsTypes) */
            type: string;
            /** Использовать подпись
             *
             *     Если true, то документ с подписью (не распространяется на договоры) */
            signed?: boolean;
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
