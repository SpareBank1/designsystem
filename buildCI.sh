#!/bin/bash
# Runs build.sh before checking should_publish

function should_publish() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

source build.sh

if should_publish; then
    npm run has-published -s || npm publish
    bob ci job build --jobname ffe-design-system_build_deploy
fi
