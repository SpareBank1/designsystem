#!/bin/bash


source visual-tests/run_gemini_command.lib

rm -rf gemini-report/

run_gemini_command test  --reporter html --reporter flat
