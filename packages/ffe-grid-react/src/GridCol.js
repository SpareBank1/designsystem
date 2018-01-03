import React, { Component } from 'react';
import { bool, node, number, oneOfType, shape, string } from 'prop-types';
import classNames from 'classnames';

import { checkForDeprecatedModifiers, checkForNestedComponent, checkValidColumnCount } from './utils';

function camelCaseToDashCase(str) {
    if (!str) {
        return str;
    }
    return str.split('').reduce((previous, current) => (
        /[A-Z]/.test(current) ?
            `${previous}-${current.toLowerCase()}` :
            `${previous}${current}`
    ));
}

const MODIFIER_LIST = [
    'around',
    'between',
    'bottom',
    'center',
    'end',
    'horizontal',
    'middle',
    'noBottomPadding',
    'reverse',
    'start',
    'top',
];
const SIZE_LIST = [
    'sm',
    'md',
    'lg',
];

const sizeClasses = (size, def) => {
    switch (typeof def) {
        case 'undefined': return '';
        case 'object':
            return classNames({
                [`ffe-grid__col--${size}-${def.cols}`]: def.cols || def.cols === 0,
                [`ffe-grid__col--${size}-offset-${def.offset}`]: def.offset || def.offset === 0,
            });
        default: return `ffe-grid__col--${size}-${def}`;
    }
};

const modifiers = props => Object.keys(props)
        .filter(key => MODIFIER_LIST.indexOf(key) !== -1 && !!props[key])
        .map(key => `ffe-grid__col--${camelCaseToDashCase(key)}`)
        .join(' ');

export default class GridCol extends Component {

    componentDidMount() {
        if (process.env.NODE_ENV !== 'production') {
            checkForDeprecatedModifiers(this.props);
            checkForNestedComponent(this.props.children, GridCol);
            checkValidColumnCount(this.props);
        }
    }

    render() {
        const {
            children,
            className,
            element,
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
            sizeClasses('sm', !sm && !lg && !md ? 12: sm),
            modifiers(this.props),
        ].filter(x => x).join(' ');

        const Element = element || 'div';

        return (
            <Element className={classes} {...rest}>
                {children}
            </Element>
        );
    }
}

GridCol.propTypes = {
    /** Any extra classes are attached to the root node, in addition to ffe-grid__col classes */
    className: string,
    /** Specify the DOM element being used to create the GridCol */
    element: node,
    ...MODIFIER_LIST.reduce((props, mod) => ({
        ...props,
        [mod]: oneOfType([bool, string]),
    }), {}),
    ...SIZE_LIST.reduce((props, size) => ({
        ...props,
        [size]: oneOfType([
            number,
            string,
            shape({
                cols: oneOfType([number, string]),
                offset: oneOfType([number, string]),
            }),
        ]),
    }), {}),
};
