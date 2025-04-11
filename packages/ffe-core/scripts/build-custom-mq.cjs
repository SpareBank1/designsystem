#!/usr/bin/env node
const path = require('path');
const postcss = require('postcss');

const renderLessVarsToCSSProps = require('./lib/renderLessVarsToCSSProps.cjs');
const writeToFile = require('./lib/writeToFile.cjs');

const lessFile = process.argv[2];
const customMqFile = process.argv[3];

if (!customMqFile) {
    console.error('Usage: build-custom-mq.js input.less output.css');
    process.exit(1);
}

/**
 * convert css custom props. to css custom media queries
 *
 * input:  @breakpoint-sm: 480px;
 * result: @custom-media --ffe-breakpoint-sm screen and (min-width: 480px);
 */
renderLessVarsToCSSProps(path.resolve(lessFile))
    .then(css =>
        postcss().process(css, {
            from: false,
            hideNothingWarning: true,
        }),
    )
    .then(({ root }) => {
        let str = '';

        root.walkDecls(decl => {
            str += `@custom-media ${decl.prop.replace(
                /^--(ffe-)?/,
                '--ffe-',
            )} screen and (min-width: ${decl.value});\n`;
        });

        return str;
    })
    .then(writeToFile(customMqFile))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
