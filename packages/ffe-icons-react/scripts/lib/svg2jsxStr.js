const cheerio = require('cheerio');

/**
 * We have to expect dash-cased attributes in the SVG files from ffe-icons but React doesn't really
 * like those. A more solid approach to this would be preferable but on short term just handle the
 * three props we know exist in ffe-icons right now.
 *
 * Should this proplem (sic!) pop up more often, another solution should be sought
 */
module.exports = svgStr => {
    const $ = cheerio.load(svgStr, {
        xmlMode: true,
    });
    const svg = $('svg');

    // React does not support namespace definitions
    svg.attr('xmlns', null);
    svg.attr('xmlns:svg', null);

    return $.html()
        .replace(/clip-rule/g, 'clipRule')
        .replace(/fill-rule/g, 'fillRule')
        .replace(/stroke-width/g, 'strokeWidth')
        .replace(/stroke-miterlimit/g, 'strokeMiterlimit');
};
