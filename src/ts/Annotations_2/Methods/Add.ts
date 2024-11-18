/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Добавление примечания */
        "Annotations_2.Methods.Add": {
            /** ID проекта */
            project_id: number;
            /** Имя сервиса */
            service: import('../Types/ServiceName.ts').components['schemas']['Annotations_2.Types.ServiceName'];
            /** Идентификатор отчета в сервисе */
            target_id: string;
            /** Комментарий, если не указан, комментарий добавлен не будет */
            text?: string;
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
