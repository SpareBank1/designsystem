import icons from './temp/icons';
import fs from 'fs';
import mkdirp from 'mkdirp';

mkdirp.sync('jsx');

/**
 * Creates a new React component and a corresponding .jsx file for each icon. .
 * */
const createStandaloneJSX = icon => `
import React from 'react';
const svg = ${icons[icon]};
const createTitle = title => title ? <title>{title}</title> : null;
const createDesc = desc => desc ? <desc>{desc}</desc> : null;
const icon = ({className = '',
              style = {},
              focusable = false,
              title = '',
              desc = '',
              tabindex}) => <svg className={className} style={style} focusable={focusable} tabIndex={tabindex} {...svg.props}>
    {createTitle(title)}
    {createDesc(desc)}
    {svg.props.children}
</svg>;
icon.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    focusable: React.PropTypes.bool,
    title: React.PropTypes.string,
    desc: React.PropTypes.string,
    tabindex: React.PropTypes.number
};
export default icon;
`;
Object.keys(icons).map((icon) => fs.writeFileSync(`./jsx/${icon}.jsx`, createStandaloneJSX(icon)));


/**
 * Creates a list of strings on the form ['bil-ikon': require('./bil-ikon')',] from icons.
 * The list is then interpolated with surrounding brackets to create a js object in the outputted file.
 * */
const createAllJSX = iconsObjectString => `
const icons = {${iconsObjectString}};
export default props => icons[props.iconName].default(props);
`;
const iconsObjectString = Object.keys(icons).map(iconname => `'${iconname}': require('./${iconname}')`);
fs.writeFileSync('./jsx/ffe-icons-react.jsx', createAllJSX(iconsObjectString));