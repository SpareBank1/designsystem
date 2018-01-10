#!/bin/bash -e

function is_master_branch() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

function is_uptodate() {
    git fetch --quiet
    ! [[ $(git log HEAD..origin/master --oneline) ]]
}

git clean -f -x -d
npm install
npm run build
npm test

if is_master_branch && is_uptodate; then
    ./node_modules/.bin/lerna publish --yes \
        --registry ***REMOVED***
fi
