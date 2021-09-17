const postcss = require('postcss');
const Case = require('case');

const genPropName = prop => Case.camel(prop.replace(/^--(ffe-)?/, ''));

/**
 * Extract all custom properties from a given stylesheet and create an object
 * mapping properties to thier value.
 */

module.exports = async css => {
    const { root } = await postcss().process(css, {
        from: false,
        hideNothingWarning: true,
    });

    const obj = {};

    root.walkDecls(decl => {
        obj[genPropName(decl.prop)] = decl.value;
    });

    return obj;
};
