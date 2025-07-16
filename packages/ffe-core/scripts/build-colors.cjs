#!/usr/bin/env node

const { getProcessArguments } = require('./utils.cjs');
const { buildColors } = require('./build-colors/build-colors.cjs');

const args = getProcessArguments();
buildColors(
    args.platform,
    args.iosPaths,
    args.androidPaths,
    args.jsonPaths,
    args.webPaths,
);
