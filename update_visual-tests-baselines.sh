#!/bin/bash

npm install
npm run compile

source node_modules/ffe-visual-tests-support/run_gemini_command.lib

run_gemini_command update
