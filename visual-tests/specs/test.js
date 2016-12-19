const fs = require('fs');

const HTML_PATTERN = /\.html$/;

const ANIMATED_CLASSES = [
    '.ffe-loading-spinner',
    '.ffe-action-button__label-spinner',
    '.ffe-primary-button__label-spinner',
    '.ffe-secondary-button__label-spinner',
].join(', ');

fs.readdirSync('./examples')
    .filter(file => file.match(HTML_PATTERN) && file !== 'index.html')
    .forEach(file => {
        gemini.suite(file.replace(HTML_PATTERN, ''), suite => {
            suite.setUrl(`/${file}`)
                .setCaptureElements('body')
                .before((actions, find) => {
                    actions.executeJS(window =>
                        Array.from(document.querySelectorAll(ANIMATED_CLASSES))
                            .forEach(el => el && el.parentNode.removeChild(el))
                    )
                    .wait(500);  // for checkbox animations to reach a steady state
                })
                .capture('plain');
            });
        });
