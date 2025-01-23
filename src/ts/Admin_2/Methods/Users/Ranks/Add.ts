/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Добавление достижение */
        "Admin_2.Methods.Users.Ranks.Add": {
            name_id?: string | null;
            category?: import('../../../Types/Users/Ranks/Category.ts').components['schemas']['Admin_2.Types.Users.Ranks.Category'] | null;
            name_ru?: string | null;
            name_en?: string | null;
            descr_ru?: string | null;
            descr_en?: string | null;
            descr_how_to_use_ru?: string | null;
            descr_how_to_use_en?: string | null;
            bonus_RUB?: number | null;
            bonus_USD?: number | null;
            cashback_expenses?: number | null;
            cashback_first_payment?: number | null;
            discount?: number | null;
            referrer_id?: number | null;
            from_date?: string | null;
            to_date?: string | null;
            max_count_usage?: number | null;
            currency?: string | null;
            only_new_users?: boolean | null;
            color?: string | null;
            always_visible?: boolean | null;
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
