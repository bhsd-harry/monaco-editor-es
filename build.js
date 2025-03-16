'use strict';

const esbuild = require('esbuild');

const entries = [
	'editor/editor.worker.js',
	'language/css/css.worker.js',
	'language/html/html.worker.js',
	'language/json/json.worker.js',
	'language/typescript/ts.worker.js',
];

for (const entry of entries) {
	esbuild.buildSync({
		entryPoints: [require.resolve(`monaco-editor/esm/vs/${entry}`)],
		charset: 'utf8',
		bundle: true,
		minify: true,
		target: 'es2019',
		outdir: 'workers',
	});
}
