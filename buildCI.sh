#!/bin/bash -e

function should_publish() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

main() {
    git clean -ff -x -d
    npm install
    npm run compile

    rm -rf target/
    mkdir -p target/archive

    ./run_visual-tests.sh

    cp -R examples target/archive
}

_move_gemini_files() {
    testRes=$?

    cp -R gemini-report/ target/archive

    exit ${testRes}
}

trap "_move_gemini_files" INT TERM EXIT

main "$@"

if should_publish; then
    npm run has-published -s || npm publish
    bob ci job build --jobname ffe-design-system_build_deploy
fi
