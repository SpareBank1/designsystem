import icons from './../temp/icons';
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
import { string, bool, func, object, number } from 'prop-types';

const svg = ${camelCaseSVGProps(icons[iconName])};
const createTitle = title => title ? <title>{title}</title> : null;
const createDesc = desc => desc ? <desc>{desc}</desc> : null;

const Icon = (
    {className = '',
    style = {},
    focusable = false,
    title = '',
    desc = '',
    onClick = f => f,
    tabIndex}) =>
        <svg className={className} style={style} focusable={focusable} tabIndex={tabIndex} onClick={onClick} {...svg.props}>
            {createTitle(title)}
            {createDesc(desc)}
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
const iconsObjectString = Object.keys(icons).map(iconname => `'${iconname}': require('./${iconname}')`);
fs.writeFileSync('./jsx/ffe-icons-react.jsx', createAllJSX(iconsObjectString));
