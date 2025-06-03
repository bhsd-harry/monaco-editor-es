# Monaco-Editor-ES

[![npm version](https://badge.fury.io/js/@bhsd%2Fmonaco-editor-es.svg)](https://www.npmjs.com/package/@bhsd/monaco-editor-es)
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/bc35dcab287b4cdf80ca077942264f58)](https://app.codacy.com/gh/bhsd-harry/monaco-editor-es/dashboard)

# Usage

```js
self.MonacoEnvironment = {
	getWorker(_, label) {
		const paths = {
				css: 'css',
				less: 'css',
				scss: 'css',
				javascript: 'ts',
				typescript: 'ts',
				json: 'json',
				html: 'html',
				handlebars: 'html',
				razor: 'html',
			},
			path = paths[label] ?? 'editor',
			blob = new Blob(
				[`importScripts('https://cdn.jsdelivr.net/npm/@bhsd/monaco-editor-es/workers/${path}.worker.js')`],
				{type: 'text/javascript'},
			),
			url = URL.createObjectURL(blob),
			worker = new Worker(url); // same-origin policy
		URL.revokeObjectURL(url);
		return worker;
	},
};
```
