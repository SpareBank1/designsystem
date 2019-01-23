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

import {
    checkForDeprecatedModifiers,
    checkForNestedComponent,
    checkValidColumnCount,
} from './utils';

function camelCaseToDashCase(str) {
    return str
        .split('')
        .reduce((previous, current) =>
            /[A-Z]/.test(current)
                ? `${previous}-${current.toLowerCase()}`
                : `${previous}${current}`,
        );
}

const MODIFIER_LIST = [
    'around',
    'background',
    'between',
    'bottom',
    'center',
    'end',
    'horizontal',
    'middle',
    'reverse',
    'start',
    'centerText',
    'top',
];

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

    componentDidMount() {
        /* istanbul ignore else: there is no else  */
        if (process.env.NODE_ENV !== 'production') {
            checkForDeprecatedModifiers(this.props);
            checkForNestedComponent(this.props.children, GridCol);
            checkValidColumnCount(this.props, this.ref.current);
        }
    }

    render() {
        const {
            bottomPadding,
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
            !bottomPadding ? 'ffe-grid__col--no-bottom-padding' : null,
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
    bottomPadding: true,
    element: 'div',
};

GridCol.propTypes = {
    /** Supported background colors */
    background: oneOf([
        'blue-ice',
        'blue-pale',
        'green-mint',
        'grey-cloud',
        'sand',
        'grey-warm',
        'orange-salmon',
        'red',
        'blue-sky',
    ]),
    /** Any extra classes are attached to the root node, in addition to ffe-grid__col classes */
    className: string,
    /** Specify the DOM element being used to create the GridCol */
    element: node,
    /** Distribute remaining space around the content elements */
    around: bool,
    /** Distribute remaining space between the content elements */
    between: bool,
    /** Place content elements at the bottom of the column */
    bottom: bool,
    /** Center content horizontally */
    center: bool,
    /** Center text content horizontally */
    centerText: bool,
    /** The content of the column */
    children: node,
    /** Place content elements to the right of the column */
    end: bool,
    /** Layout column content horizontally and flip flex direction */
    horizontal: bool,
    /** Center content vertically */
    middle: bool,
    /** Add bottom padding */
    bottomPadding: bool,
    /** Reverse layout direction */
    reverse: bool,
    /** Place content elements to the left of the column */
    start: bool,
    /** Place content elements at the top of the column */
    top: bool,
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
