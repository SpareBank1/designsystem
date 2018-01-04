#!/bin/bash -e

function is_master_branch() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

git clean -f -x -d
npm install
npm run build
npm test

if is_master_branch; then
    ./node_modules/.bin/lerna publish --yes \
        --registry ***REMOVED***
fi
