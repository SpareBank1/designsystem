#!/bin/bash -e

main() {
    npm install
    npm run start

    rm -rf target/
    mkdir -p target/archive

    ./run_visual-tests.sh

    cp -R dist target/archive

    if should_publish; then
        npm run has-published -s || npm publish
    fi
}

function should_publish() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

_move_gemini_files() {
    testRes=$?

    cp -R gemini-report/ target/archive

    exit ${testRes}
}

trap "_move_gemini_files" INT TERM EXIT

main "$@"
