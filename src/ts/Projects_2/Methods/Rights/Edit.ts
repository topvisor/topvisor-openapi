/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Изменение прав на проект */
        "Projects_2.Methods.Rights.Edit": {
            /** Вместо project_ids можно укзывать project_id */
            projects_ids?: (string | number)[] | null;
            /** Email пользователя (если пользователь не зарегистрирован будет выслано приглашение) */
            email: import('../../../TV/API/Types/Email.ts').components['schemas']['TV.API.Types.Email'];
            /** Побитовая маска прав */
            rights?: import('../../../TV/API/Types/BoolArray.ts').components['schemas']['TV.API.Types.BoolArray'] | null;
            /**
             * ID проекта
             * @description Вместо project_id можно укзывать projects_ids
             */
            project_id?: number | null;
            /** Имя гостевого пользователя, назначаемое хозяином проекта */
            user_name?: string | null;
            /** Лимит трат пользователем в месяц */
            limit?: number | null;
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
