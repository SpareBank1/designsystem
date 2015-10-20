#!/bin/bash

set -e


npm install
npm run examples

rm -rf target/
mkdir -p target/archive
cp -R examples target/archive

