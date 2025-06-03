'use strict';

const fs = require('fs'),
	esbuild = require('esbuild');

const entries = [
		'editor/editor.worker.js',
		'language/css/css.worker.js',
		'language/html/html.worker.js',
		'language/json/json.worker.js',
		'language/typescript/ts.worker.js',
	],
	/** @type {esbuild.BuildOptions} */ commonOptions = {
		charset: 'utf8',
		bundle: true,
		minify: true,
		target: 'es2019',
		outdir: 'workers',
		logLevel: 'info',
	};

for (const entry of entries) {
	const /** @type {esbuild.BuildOptions} */ options = {
		...commonOptions,
		entryPoints: [require.resolve(`monaco-editor/esm/vs/${entry}`)],
	};
	esbuild.buildSync(options);
}

fs.copyFileSync(require.resolve('monaco-editor/ThirdPartyNotices.txt'), 'ThirdPartyNotices.txt');
