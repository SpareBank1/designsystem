#!/bin/bash -e

git clean -f -x -d
npm install
npm run build
npm test
./node_modules/.bin/lerna publish --yes \
	--registry ***REMOVED***
