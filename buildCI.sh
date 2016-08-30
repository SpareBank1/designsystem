#!/bin/bash -e

main() {
    npm install
    npm run compile

    ./run_visual-tests.sh

    if should_publish; then
        npm publish
    fi
}

function should_publish() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

main "$@"