/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Получение настроек аудита */
        "Audit_2.Methods.Settings.Get": {
            fields: import('../../Types/Settings/FieldNames.ts').components['schemas']['Audit_2.Types.Settings.FieldNames'];
            project_id: import('../../../TV/API/Params/ProjectIdTrait.ts').components['schemas']['TV.API.Params.ProjectIdTrait']['project_id'];
        };
        /** Настройки аудита */
        "Audit_2.Methods.Settings.Get.Exec": unknown[] | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
