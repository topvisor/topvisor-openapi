/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Загрузить и разместить бекап в БД бекапов */
        "Admin_2.Methods.Actions.Backup.Loader.Add": {
            passAdminActions: string;
            /** Сервер, с которого делались бекапы */
            server_name: string;
            /** Тип БД */
            db_name: string;
            /** Имя таблицы */
            table_name: string;
            /** Дата бекапа чата для добавления */
            date: import('../../../../../TV/API/Types/Date.ts').components['schemas']['TV.API.Types.Date'];
            /** Регулярное выражение для импорта только нужных блоков INSERT
             *
             *     Бекапы хрянятся в .sql файлах с INSERT командами, в одном INSERT может быть много строк */
            regexp?: import('../../../../../TV/API/Types/RegExp.ts').components['schemas']['TV.API.Types.RegExp'] | null;
            /** Ключ задачи, участвует в генерации имени БД бекапа
             *
             *     Может потребоваться в случае выполнения одновременных бекапов одной и тоже же таблицы за одну и ту же дату */
            task_key?: string | null;
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
