const Svgo = require('svgo');
const convertDimensions = require('./plugins/convert-dimensions');
const removePrefixedAttributes = require('./plugins/remove-prefixed-attributes');

const svgo = new Svgo({
    plugins: [
        {
            removeAttrs: {
                attrs: ['*:fill:#002776', '*:fill:none', '*:fill-rule:*'],
            },
        }, //get rid off fill attributes. svgo will remove empty <g> elements
        { convertDimensions: convertDimensions }, //move from height, width to viewbox
        { removePrefixedAttributes: removePrefixedAttributes }, //remove attribute prefixes (e.g xmlns:link etc)
    ],
});

module.exports = svgo;
