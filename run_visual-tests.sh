#!/bin/bash -e

source node_modules/ffe-visual-tests-support/run_gemini_command.lib

rm -rf gemini-report/

run_gemini_command test  --reporter html --reporter flat
