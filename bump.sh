#!/usr/local/bin/bash
npm i monaco-editor@$1 && npm run build && rm 614.js
if [[ $? -eq 0 ]]
then
	sed -i '' -E "s/\"version\": \".+\"/\"version\": \"$1\"/" package.json
	git fetch
	git add -A
	git commit -m "$1"
	git push
	git tag $1
	git push origin $1
	npm publish --tag ${2-latest}
fi
