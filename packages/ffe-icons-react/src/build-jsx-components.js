import caseUtil from 'case';
import fs from 'fs';
import mkdirp from 'mkdirp';
import icons from '../tmp/icons';

mkdirp.sync('./jsx');

/**
 * We have to expect dash-cased attributes in the SVG files from ffe-icons but React doesn't really
 * like those. A more solid approach to this would be preferable but on short term just handle the
 * three props we know exist in ffe-icons right now.
 *
 * Should this proplem (sic!) pop up more often, another solution should be sought
 * */
const camelCaseSVGProps = svgString =>
    svgString
        .replace(/fill-rule/g, 'fillRule')
        .replace(/stroke-width/g, 'strokeWidth')
        .replace(/stroke-miterlimit/g, 'strokeMiterlimit');

/**
 * Creates a new React component and a corresponding .jsx file for each icon
 * */
const createStandaloneJSX = iconName => `
import React from 'react';
import { bool, string } from 'prop-types';

const svg = ${camelCaseSVGProps(icons[iconName])};

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
Object.keys(icons).forEach((iconName) => fs.writeFileSync(`./jsx/${iconName}.js`, createStandaloneJSX(iconName)));

/**
 * Creates an index file that exports all icons
 */
const indexFileString = Object.keys(icons)
    .map(iconName => `export { default as ${caseUtil.pascal(iconName)} } from './${iconName}';`)
    .join('\n');

fs.writeFileSync('./jsx/index.js', indexFileString);
