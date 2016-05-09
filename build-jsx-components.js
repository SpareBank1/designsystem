import icons from './temp/icons';
import fs from 'fs';
import mkdirp from 'mkdirp';

mkdirp.sync('jsx');

/**
 * Creates a new React component and a corresponding .jsx file for each icon. .
 * */
const createStandaloneJSX = icon => `
import React from 'react';
const icon = props => <svg className={props.className} style={props.style} focusable="false" {...${icons[icon]}.props}/>;
icon.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object
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