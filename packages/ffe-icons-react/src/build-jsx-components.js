import caseUtil from 'case';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

mkdirp.sync('./jsx');

const createSvgMap = () => {
    const map = {};
    const iconsPath = path.join(__dirname, '..', 'node_modules', '@sb1', 'ffe-icons', 'icons');
    fs.readdirSync(iconsPath)
        .filter(fileName => fileName.match(/\.svg$/))
        .forEach((fileName) => {
            const iconPath = path.join(iconsPath, fileName);
            const iconName = fileName.split('.svg')[0];
            map[iconName] = String(fs.readFileSync(iconPath));
        });
    return map;
};

/**
 * We have to expect dash-cased attributes in the SVG files from ffe-icons but React doesn't really
 * like those. A more solid approach to this would be preferable but on short term just handle the
 * three props we know exist in ffe-icons right now.
 *
 * Should this proplem (sic!) pop up more often, another solution should be sought
 * */
const toJsx = svgString => {
    const $ = cheerio.load(svgString, {
        xmlMode: true
    });
    const svg = $('svg');
    // React does not support namespace definitions
    svg.attr('xmlns', null);
    svg.attr('xmlns:svg', null);
    
    svg.attr('height', 150);
    svg.attr('width', 150);
    
    return $.html()
        .replace(/fill-rule/g, 'fillRule')
        .replace(/stroke-width/g, 'strokeWidth')
        .replace(/stroke-miterlimit/g, 'strokeMiterlimit');
}

/**
 * Creates a new React component and a corresponding .jsx file for each icon
 * */
const createStandaloneJSX = (icons, iconName) => `
import React from 'react';
import { bool, string } from 'prop-types';

const svg = ${toJsx(icons[iconName])};

const Icon = ({
    desc,
    focusable = false,
    title,
    iconName,
    ...rest
    }) => (
        <svg focusable={String(focusable)} {...rest} {...svg.props}>
            {title &&
                <title>{title}</title>
            }
            {desc &&
                <desc>{desc}</desc>
            }
            {svg.props.children}
        </svg>
    );

Icon.propTypes = {
    desc: string,
    focusable: bool,
    title: string,
    iconName: string,
};

Icon.displayName = '${caseUtil.pascal(iconName)}';

export default Icon;
`;

const icons = createSvgMap();
Object.keys(icons).forEach(iconName =>
    fs.writeFileSync(`./jsx/${iconName}.js`, createStandaloneJSX(icons, iconName)),
);

/**
 * Creates an index file that exports all icons
 */
const indexFileString = Object.keys(icons)
    .map(
        iconName =>
            `export { default as ${caseUtil.pascal(
                iconName,
            )} } from './${iconName}';`,
    )
    .join('\n');

fs.writeFileSync('./jsx/index.js', indexFileString);
