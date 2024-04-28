<h1 align="center">Monaco-Editor-ES</h1>

<div align="center">
  <a href="https://github.com/bhsd-harry/monaco-editor-es/tags"><img src="https://badgen.net/github/tag/bhsd-harry/monaco-editor-es" alt="GitHub Tags"></a>
  <a href="https://www.npmjs.com/package/@bhsd/monaco-editor-es"><img src="https://badgen.net/npm/v/@bhsd/monaco-editor-es" alt="NPM Release"></a>
  <a href="https://github.com/bhsd-harry/monaco-editor-es/actions"><img src="https://github.com/bhsd-harry/monaco-editor-es/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/aSWYgtybzV"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
</div>

## Installation

```sh
npm i @bhsd/monaco-editor-es
```

## Usage

### Step 1 - Define where the workers are located

```javascript
const workersDir = new URL('../node_modules/@bhsd/monaco-editor-es/workers/', import.meta.url)
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    switch(label) {
      case 'json':
        return `${workersDir}json.worker.js`
      case 'css':
        return `${workersDir}css.worker.js`
      case 'html':
        return `${workersDir}html.worker.js`
      case 'typescript':
      case 'javascript':
        return `${workersDir}ts.worker.js`
      default:
        return `${workersDir}editor.worker.js`
    }
  }
}
```

### Step 2 - Create the MonacoEditor

```javascript
monaco.editor.create(document.getElementById('#editor'), {
  language: 'javascript,
  theme: 'vs-dark'
})
```

For more info on Monaco Editor see the [Official Documentation][]

[Official Documentation]: https://microsoft.github.io/monaco-editor/index.html
