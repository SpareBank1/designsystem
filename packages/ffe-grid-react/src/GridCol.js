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
import {
    backgroundColors,
    backgroundDarkColors,
    removedColors,
} from './background-colors';

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

const centerTextClass = centerText =>
    centerText ? 'ffe-grid__col--center-text' : null;

const centerClass = center => (center ? 'ffe-grid__col--center' : null);

const backgroundClass = background => {
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

const backgroundDarkClass = backgroundDark =>
    backgroundDarkColors.includes(backgroundDark)
        ? `ffe-grid__col--bg-dark-${backgroundDark}`
        : null;

export default class GridCol extends Component {
    constructor() {
        super();

        this.ref = createRef();
    }

    render() {
        const {
            background,
            backgroundDark,
            className,
            element: Element,
            centerText,
            center,
            children,
            sm,
            md,
            lg,
            ...rest
        } = this.props;

        const classes = [
            'ffe-grid__col',
            className,
            sizeClasses('lg', lg),
            sizeClasses('md', md),
            sizeClasses('sm', !sm && !lg && !md ? 12 : sm),
            centerTextClass(centerText),
            centerClass(center),
            backgroundClass(background),
            backgroundDarkClass(backgroundDark),
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
    background: oneOf(backgroundColors),
    /** Supported dark background colors */
    backgroundDark: oneOf(backgroundDarkColors),
    /** Any extra classes are attached to the root node, in addition to ffe-grid__col classes */
    className: string,
    /** Specify the DOM element being used to create the GridCol */
    element: node,
    /** Center text content horizontally */
    centerText: bool,
    /** Center content vertically */
    center: bool,
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
