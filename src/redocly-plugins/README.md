# Plugins for redocly

docs redocly: https://redocly.com/docs/cli/custom-plugins

## multiScheme for openapi-typescript

Plagin for replaces inline types with imports types for multiple schemas.

List of multiple schemas settings by redocly config file.

openapi-typescript: https://github.com/openapi-ts/openapi-typescript

supported openapi-typescript version: 7

### Problem

Similary issue https://github.com/openapi-ts/openapi-typescript/issues/1274

Answer: `However there’s not a way to generate multiple files from this library; it will always yield one output.`

openapi-typescript supports multiple-schemas, but only combine one in one: https://openapi-ts.dev/cli#multiple-schemas

Output each file schema will contain inline types all dependencies from othere schemas.

It works this way because all schemas in redocly config file are **isolated**.

### Solution

We will **not isolate** schemas in redocly config file.

Plugin will remove \$ref for schemas listed in redocly config file, then it will set imports from that schemas instead of the removed $ref.