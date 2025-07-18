/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "Admin_2.Methods.Staff.Edit": {
            /** Номер договора */
            id: number;
            /** Корпоративный e-mail */
            email: import('../../../TV/API/Types/Email.ts').components['schemas']['TV.API.Types.Email'];
            /** Личный e-mail */
            staff_email: import('../../../TV/API/Types/Email.ts').components['schemas']['TV.API.Types.Email'];
            /** Должность */
            post: string;
            /** Фамилия */
            surname: string;
            /** Имя */
            name: string;
            /** Отчество */
            patronymic: string;
            /** Должность (родительный падеж) */
            post_2: string;
            /** Фамилия (родительный падеж) */
            surname_2: string;
            /** Имя (родительный падеж) */
            name_2: string;
            /** Отчество (родительный падеж) */
            patronymic_2: string;
            /** Название отдела */
            department: string;
            /** Привелегии */
            posts: unknown[];
            /** Группа */
            group?: number | null;
        };
        "Admin_2.Methods.Staff.Edit.Exec": number | null;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
