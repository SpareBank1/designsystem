import icons from './temp/icons';
import fs from 'fs';
import mkdirp from 'mkdirp';

mkdirp.sync('jsx');

/**
 * Creates a new React component and a corresponding .jsx file for each icon. .
 * */
const createStandaloneJSX = icon => `
import React from 'react';
export default props => <svg className={props.className} {...${icons[icon]}.props}/>;
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