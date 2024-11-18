/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Экспорт результатов проверки файла */
        "Audit_2.Methods.Audit.Export.Get": {
            target_type: import('../../../Types/Audit/TargetType.ts').components['schemas']['Audit_2.Types.Audit.TargetType'];
            /** Формат экспортируемого файла */
            output: import('../../../../TV/API/Types/ExportFormat.ts').components['schemas']['TV.API.Types.ExportFormat'];
            project_id: import('../../../../TV/API/Params/ProjectIdTrait.ts').components['schemas']['TV.API.Params.ProjectIdTrait']['project_id'];
            fields?: import('../../../../TV/API/Params/FieldsTrait.ts').components['schemas']['TV.API.Params.FieldsTrait']['fields'];
            check_id: import('../../../Params/Audit/CheckIdTrait.ts').components['schemas']['Audit_2.Params.Audit.CheckIdTrait']['check_id'];
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
