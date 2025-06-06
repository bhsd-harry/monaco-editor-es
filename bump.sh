#!/usr/local/bin/bash
npm run build
if [[ $? -eq 0 ]]
then
	sed -i '' -E "s/\"version\": \".+\"/\"version\": \"$1\"/" package.json
	git add -A
	git commit -m "$1"
	git push
	npm publish --tag "${2-latest}"
fi
