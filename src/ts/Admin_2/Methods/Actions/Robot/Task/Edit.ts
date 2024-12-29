/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Снятие задачи с дэбага */
        "Admin_2.Methods.Actions.Robot.Task.Edit": {
            /** ID проекта */
            projectId: number;
            /** ID задачи */
            taskId?: number | null;
            /** Откуда снять задачу */
            type: string;
            /** Являеется ли запуск - тестом */
            test: boolean;
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
