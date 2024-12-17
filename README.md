<h1 align="center">Monaco-Editor-ES</h1>

<div align="center">
  <a href="https://www.npmjs.com/package/@bhsd/monaco-editor-es"><img src="https://badgen.net/npm/v/@bhsd%2Fmonaco-editor-es" alt="NPM Version"></a>
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
      case 'less':
      case 'scss':
        return `${workersDir}css.worker.js`
      case 'html':
      case 'handlebars':
      case 'razor':
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
  language: 'javascript',
  theme: 'vs-dark'
})
```

For more info on Monaco Editor see the [Official Documentation](https://microsoft.github.io/monaco-editor/)
