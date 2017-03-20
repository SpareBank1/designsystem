#!/bin/bash

# Makes functions inherit trap ERR
set -E


trap 'executionFailed ${LINENO}' ERR

function main() {
    ./build.sh

    if should_publish; then
        yarn run has-published -s || yarn publish
    fi
}

function should_publish() {
    [[ $GIT_BRANCH =~ ^(origin/)?master$ ]]
}

# Fail the build if someone tries to send it parameters since script doesn't handle params at the moment.
if [ $# -ne 0 ] ; then
    echo "Failed the build. flow.sh does not support input parameters. Input parameters were '$@'"
    exit 1;
fi

function executionFailed() {
   # Called when some command fail execution
   local self=$(basename "$0")
   local parent_lineno="$1"
   local message="$2"
   local resultCode="${3:-1}"
   if [[ -n "$message" ]]; then
       echo "${self}: Error on or near line ${parent_lineno}: ${message}; exiting with status ${resultCode}"
   else
       echo "${self}: Error on or near line ${parent_lineno}; exiting with status ${resultCode}"
   fi
   exit "${resultCode}"
}

main
