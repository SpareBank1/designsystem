#!/bin/bash -e

main() {
    npm install
    npm run examples

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
