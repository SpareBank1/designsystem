#!/bin/bash -ex

function should_publish() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

if should_publish; then
    npm run has-published -s || npm publish
fi
