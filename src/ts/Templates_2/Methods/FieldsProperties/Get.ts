/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение дополнительных параметров к списку столбцов */
        "Templates_2.Methods.FieldsProperties.Get": {
            target_type: import('../../Types/TargetType.ts').components['schemas']['Templates_2.Types.TargetType'];
            /** Подтип данных (место использования) */
            target_subtype?: number;
            /** Id целевого проекта */
            target_id?: number | null;
        };
        "Templates_2.Methods.FieldsProperties.Get.Exec": unknown;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
