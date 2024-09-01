/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Метод с примерами параметров типа Enum */
        "Example_2.Methods.Enum.Get": {
            number?: components["schemas"]["Example_2.Types.Number"] | null;
            number2: components["schemas"]["Example_2.Types.Number"];
            letter: components["schemas"]["Example_2.Types.Letter"];
        };
        /** @enum {integer} */
        "Example_2.Types.Number": 1 | 2 | 3;
        /** @enum {string} */
        "Example_2.Types.Letter": "a" | "b" | "c";
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
