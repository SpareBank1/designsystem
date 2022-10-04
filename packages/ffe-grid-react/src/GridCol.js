import React, { Component, createRef } from 'react';
import {
    bool,
    node,
    number,
    oneOf,
    oneOfType,
    shape,
    string,
} from 'prop-types';
import classNames from 'classnames';
import backgroundColors, { removedColors } from './background-colors';

function camelCaseToDashCase(str) {
    return str
        .split('')
        .reduce((previous, current) =>
            /[A-Z]/.test(current)
                ? `${previous}-${current.toLowerCase()}`
                : `${previous}${current}`,
        );
}

const MODIFIER_LIST = ['background', 'centerText'];

const sizeClasses = (size, def) => {
    switch (typeof def) {
        case 'undefined':
            return '';
        case 'object':
            return classNames({
                [`ffe-grid__col--${size}-${def.cols}`]:
                    def.cols || def.cols === 0,
                [`ffe-grid__col--${size}-offset-${def.offset}`]:
                    def.offset || def.offset === 0,
            });
        default:
            return `ffe-grid__col--${size}-${def}`;
    }
};

const modifiers = props =>
    Object.keys(props)
        .filter(key => MODIFIER_LIST.indexOf(key) !== -1 && !!props[key])
        .map(key => `ffe-grid__col--${camelCaseToDashCase(key)}`)
        .join(' ');

const backgroundClass = ({ background }) => {
    if (!background) {
        return null;
    }

    if (removedColors.includes(background)) {
        throw new Error(
            `Support for the ${background} background on <GridCol> has been removed, please see the CHANGELOG`,
        );
    }

    return backgroundColors.includes(background)
        ? `ffe-grid__col--bg-${background}`
        : null;
};

export default class GridCol extends Component {
    constructor() {
        super();

        this.ref = createRef();
    }

    render() {
        const {
            children,
            className,
            element: Element,
            lg,
            md,
            sm,
            ...rest
        } = this.props;

        Object.keys(rest).forEach(key => {
            if (MODIFIER_LIST.includes(key)) {
                delete rest[key];
            }
        });

        const classes = [
            className,
            sizeClasses('lg', lg),
            sizeClasses('md', md),
            sizeClasses('sm', !sm && !lg && !md ? 12 : sm),
            modifiers(this.props),
            backgroundClass(this.props),
        ]
            .filter(x => x)
            .join(' ');

        return (
            <Element className={classes} ref={this.ref} {...rest}>
                {children}
            </Element>
        );
    }
}

GridCol.defaultProps = {
    element: 'div',
};

GridCol.propTypes = {
    /** Supported background colors */
    background: oneOf([
        'frost-30',
        'sand',
        'sand-70',
        'sand-30',
        'syrin-70',
        'syrin-30',
        'vann',
        'vann-30',
        'fjell',
        'hvit',
    ]),
    /** Any extra classes are attached to the root node, in addition to ffe-grid__col classes */
    className: string,
    /** Specify the DOM element being used to create the GridCol */
    element: node,
    /** Center text content horizontally */
    centerText: bool,
    /** The content of the column */
    children: node,
    /** Size modifiers for small screen sizes */
    sm: oneOfType([
        /** Number of columns, 0-12 */
        number,
        /** Number of columns, 0-12 */
        string,
        shape({
            /** Number of columns, 0-12 */
            cols: oneOfType([number, string]),
            /** Number of colums offset, 0-12 */
            offset: oneOfType([number, string]),
        }),
    ]),
    /** Size modifiers for medium screen sizes */
    md: oneOfType([
        /** Number of columns, 0-12 */
        number,
        /** Number of columns, 0-12 */
        string,
        shape({
            /** Number of columns, 0-12 */
            cols: oneOfType([number, string]),
            /** Number of colums offset, 0-12 */
            offset: oneOfType([number, string]),
        }),
    ]),
    /** Size modifiers for large screen sizes */
    lg: oneOfType([
        /** Number of columns, 0-12 */
        number,
        /** Number of columns, 0-12 */
        string,
        shape({
            /** Number of columns, 0-12 */
            cols: oneOfType([number, string]),
            /** Number of colums offset, 0-12 */
            offset: oneOfType([number, string]),
        }),
    ]),
};
