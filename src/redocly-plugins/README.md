# Plugins for redocly

docs redocly: https://redocly.com/docs/cli/custom-plugins

## Plugin: openapi-typescript-multiScheme

Plagin for replaces inline types with imports types for multiple schemas.

List of multiple schemas settings by redocly config file.

openapi-typescript: https://github.com/openapi-ts/openapi-typescript

supported openapi-typescript version: 7

### 🚀 Example

Download current dir and go to it.

Run openapi-typescript in dir containing [redocly.yaml](redocly.yaml): `npx openapi-typescript`

View results in dir: ./ts

### ❓ Problem

Similary issue: https://github.com/openapi-ts/openapi-typescript/issues/1274.

Answer: `However there’s not a way to generate multiple files from this library; it will always yield one output.`

openapi-typescript supports multiple-schemas, but only combine one in one: https://openapi-ts.dev/cli#multiple-schemas

Output each file schema will contain inline types all dependencies from othere schemas.

It works this way because all schemas in redocly config file are **isolated**.

### ✔️ Solution

We will **not isolate** schemas in redocly config file.

Plugin will remove \$ref for schemas listed in redocly config file, then it will set imports from that schemas instead of the removed $ref.

### 💡 Ideas

This plugin does not support working with redocly split: https://redocly.com/docs/cli/commands/split

It's a good idea to implement this. Feel free to share your results if you implement it.