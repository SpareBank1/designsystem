import icons from './../tmp/icons';
import fs from 'fs';
import mkdirp from 'mkdirp';

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
 * Creates a new React component and a corresponding .jsx file for each icon. .
 * */
const createStandaloneJSX = iconName => `
import React from 'react';
import { bool, func, number, object, string } from 'prop-types';

const svg = ${camelCaseSVGProps(icons[iconName])};

const Icon = ({
    desc = '',
    focusable = false,
    title = '',
    iconName,
    ...rest
    }) =>
        <svg focusable={String(focusable)} {...rest} {...svg.props}>
            {title &&
                <title>{title}</title>
            }
            {desc &&
                <desc>{desc}</desc>
            }
            {svg.props.children}
        </svg>;

Icon.propTypes = {
    className: string,
    desc: string,
    focusable: bool,
    onClick: func,
    style: object,
    tabIndex: number,
    title: string,
    iconName: string,
};

export default Icon;
`;
Object.keys(icons).map((iconName) => fs.writeFileSync(`./jsx/${iconName}.jsx`, createStandaloneJSX(iconName)));

/**
 * Creates a list of strings on the form ['bil-ikon': require('./bil-ikon')',] from icons.
 * The list is then interpolated with surrounding brackets to create a js object in the outputted file.
 * */
const createAllJSX = iconsObjectString => `
const icons = {${iconsObjectString}};
export default props => icons[props.iconName] ? icons[props.iconName].default(props) : null;
`;
const iconsObjectString = Object.keys(icons)
    .map(iconname => `'${iconname}': require('./${iconname}')`);

fs.writeFileSync('./jsx/ffe-icons-react.jsx', createAllJSX(iconsObjectString));
