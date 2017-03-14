#!/bin/bash -e

npm install
npm run examples
npm run lint && npm run test