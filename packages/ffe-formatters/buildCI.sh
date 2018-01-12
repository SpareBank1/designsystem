#!/bin/bash -e

main() {
    npm install
    npm run lint
    npm test
    npm run build

    if should_publish; then
        npm run has-published -s || npm publish
    fi
}

function should_publish() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

main "$@"
