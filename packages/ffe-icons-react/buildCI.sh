#!/bin/bash -e

main() {
    npm install

    npm run test:nsp
    npm run build

    if should_publish; then
        npm run has-published -s || npm publish
    fi
    npm run clean
}

function should_publish() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

main "$@"