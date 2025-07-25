/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Изменение фильтра группы */
        "Admin_2.Methods.Accounting.Group.Filter.Edit": {
            /** ID фильтра */
            filter_id: number;
            /** Тип
             *
             *     - plus
             *     - minus */
            type: string;
            /** Имя контрагента */
            counteragent_name: string;
            /** ИНН контрагента */
            counteragent_inn: string;
            /** Назначение операции */
            purpose?: string | null;
        };
        "Admin_2.Methods.Accounting.Group.Filter.Edit.Exec": unknown;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
