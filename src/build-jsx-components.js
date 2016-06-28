import icons from './../temp/icons';
import fs from 'fs';
import mkdirp from 'mkdirp';

mkdirp.sync('./jsx');

/**
 * Creates a new React component and a corresponding .jsx file for each icon. .
 * */
const createStandaloneJSX = iconName => `
import React from 'react';

const svg = ${icons[iconName]};
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
    className: React.PropTypes.string,
    desc: React.PropTypes.string,
    focusable: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    style: React.PropTypes.object,
    tabIndex: React.PropTypes.number,
    title: React.PropTypes.string,
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
