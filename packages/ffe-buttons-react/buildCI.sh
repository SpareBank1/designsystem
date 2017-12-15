#!/bin/bash -e

main() {
    git clean -f -x -d
    npm install
    npm run lint
    npm test

    if should_publish; then
        npm run has-published -s || npm publish
    fi
}

function should_publish() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

main "$@"
