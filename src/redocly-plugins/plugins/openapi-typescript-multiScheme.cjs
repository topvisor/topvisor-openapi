const fs = require('fs');
const path = require('path');
const normalize = require('path-normalize');
const YAML = require('yaml');

/**
 * Список файлов, в которых проивзедена замена $ref
 */
const outputFixedFiles = new Set();

let timer;
const callbacksOnFinish = new Set();

/**
 * The hook will be launched after executing redocly and openapi-typescript
 *
 * Run by predicted: wait 1 sec and run
 *
 * Don't worry openapi-typescript will not end until the hook is executed
 */
function registerOnFinishHook(callback) {
	clearTimeout(timer);

	callbacksOnFinish.add(callback);

	timer = setTimeout(() => {
		runOnFinishHooks();
	}, 500);
}

function runOnFinishHooks() {
	callbacksOnFinish.forEach((callback) => callback());
}

let redoclyConfig;
let redoclyOutpuFileNameBySourceFileName = new Map();

/**
 * Firest step: replace relative $ref to "feautere path"
 */
function replace$refToImportType() {
	setRedoclyOutpuFileNameBySourceFileName();

	return {
		ref: {
			enter(node, ctx) {
				if (node.$ref) {
					const importString = genImport(node.$ref, ctx);
					if (!importString) return;

					// Only in query supported
					if (node.$ref.indexOf('#/components/parameters/') !== -1) {
						node.name = node.$ref.split('/').at(-1);
						node.in = 'query';
						node.description = importString;
						node.schema = {
							type: 'null',
						};
					}

					if (node.$ref.indexOf('#/components/schemas/') !== -1) {
						node.type = 'object';
						node.properties = {
							ref: {
								type: 'null',
								description: importString,
							},
						};
					}

					delete node.$ref;

					outputFixedFiles.add(genOutputFileName(ctx.location.source.absoluteRef));

					registerOnFinishHook(replace$refToImportType2);
				}
			},
		},
	};
}

/**
 * Second step: replace "feautere path" to import type
 */
function replace$refToImportType2() {
	outputFixedFiles.forEach(async (fileName) => {
		console.info('🔗 ' + fileName);

		const tsContent = fs.readFileSync(fileName).toString();

		// Schemas
		let tsContentFixed = tsContent.replace(/\{\s*\/\*\* @description (.*?) \*\/\s*(readonly )?ref\?: null;\s*}/g, '$1');

		// Parameters
		tsContentFixed = tsContentFixed.replace(/\/\*\* @description (.*?) \*\/\s*(\w+)\?: null;/g, '$2: $1');

		fs.writeFileSync(fileName, tsContentFixed);
	});
}

function setRedoclyOutpuFileNameBySourceFileName() {
	const redoclyFileName = process.cwd() + '/redocly.yaml';
	redoclyConfig = YAML.parse(fs.readFileSync(redoclyFileName, 'utf8'));

	for (const schemaName in redoclyConfig.apis) {
		const sourceFileName = redoclyConfig.apis[schemaName].root;
		const outputFileName = redoclyConfig.apis[schemaName]['x-openapi-ts'].output;

		redoclyOutpuFileNameBySourceFileName.set(sourceFileName, outputFileName);
	}
}

/**
 * Генерация строки импорта типа из другого файла
 *
 * Если $ref ссылается на текущий файл, ничего не вернет
 */
function genImport($ref, ctx) {
	// Is external source
	if (ctx.location.source.absoluteRef.match(/^https?:\/\//)) return;

	// Local schema
	if ($ref.startsWith('#')) return;

	let $refSchemaFileName = $ref.split('#')[0];

	if ($ref.match(/^https?:\/\//)) {
		// Is external $ref

		return;
	} else {
		if ($refSchemaFileName[0] !== '.') $refSchemaFileName = './' + $refSchemaFileName;
	}

	// In redocly path format
	const currentSchemaFileName = ctx.location.source.absoluteRef.replace(process.cwd(), '.').replaceAll('\\', '/');
	const currentSchemaDirName = currentSchemaFileName.replace(/\/[^/]*$/, '');

	if ($refSchemaFileName[0] === '.') {
		$refSchemaFileName = currentSchemaDirName + '/' + $refSchemaFileName;
		$refSchemaFileName = './' + normalize($refSchemaFileName);
	}

	if ($refSchemaFileName === currentSchemaFileName) return;

	const currentSchemaOutputFileName = redoclyOutpuFileNameBySourceFileName.get(currentSchemaFileName);
	const $refSchemaOutputFileName = redoclyOutpuFileNameBySourceFileName.get($refSchemaFileName);

	// Not in redocly.yaml
	if (!currentSchemaOutputFileName) return;
	if (!$refSchemaOutputFileName) return;

	// In module format
	const currentSchemaOutputDirName = path.dirname(currentSchemaOutputFileName);
	const $refSchemaOutputDirName = path.dirname($refSchemaOutputFileName);

	let relativeDir = path.relative(currentSchemaOutputDirName, $refSchemaOutputDirName);
	if (!relativeDir) relativeDir = '.';
	if (relativeDir && relativeDir[0] !== '.') relativeDir = './' + relativeDir;

	let $refModuleFileName = relativeDir + '/' + path.basename($refSchemaOutputFileName);
	$refModuleFileName = $refModuleFileName.replaceAll('\\', '/');

	const $refSchemaPath = pathToTypeName($ref.split('#')[1]);

	return `import('${$refModuleFileName}').${$refSchemaPath}`;
}

/**
 * Преобразовать $ref со ссылкой на схему на имя типа
 */
function pathToTypeName(schemaPath) {
	const partsToType = schemaPath.split('/').map((part, index) => {
		if (index === 0) return;

		if (index === 1) {
			// Путь всегда начинается с интерфейса components
			return part;
		}

		// Обращение к типу интерфейса
		return `['${part}']`;
	});

	return partsToType.join('');
}

/**
 * Work with only run openapi-typescript with default path to redocly.yaml in dir with redocly.yaml
 */
function genOutputFileName(sourceFileName) {
	let sourceDir = process.cwd().replaceAll('\\', '/');
	sourceFileName = sourceFileName.replaceAll('\\', '/');
	const sourceRelativeFileName = sourceFileName.replaceAll(sourceDir + '/', './');

	const outputRelativeFileName = redoclyOutpuFileNameBySourceFileName.get(sourceRelativeFileName);
	const outputFileName = normalize(sourceDir + '/' + outputRelativeFileName);

	return outputFileName;
}

module.exports = {
	id: 'openapi-typescript-multiScheme',
	decorators: {
		oas3: {
			'replace$refToImportType': replace$refToImportType,
		},
	},
};