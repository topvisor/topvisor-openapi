/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = Record<string, never>;
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Метод с примерами параметров типа Object */
        "Example_2.Methods.Object.Get": {
            user: components["schemas"]["Example_2.Objects.User"];
        };
        "Example_2.Objects.Address": {
            city: string;
            street?: string | null;
        };
        "Example_2.Objects.User": {
            name: string;
            age: number;
            address: components["schemas"]["Example_2.Objects.Address"];
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
