import React, { PropTypes } from 'react';
import classNames from 'classnames';

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
    'middle',
    'noBottomPadding',
    'top',
    'start',
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
                [`ffe-grid__col--${size}-${def.cols}`]: def.cols,
                [`ffe-grid__col--${size}-offset-${def.offset}`]: def.offset,
            });
        default: return `ffe-grid__col--${size}-${def}`;
    }
};

const modifiers = props => Object.keys(props)
        .filter(key => MODIFIER_LIST.indexOf(key) !== -1 && !!props[key])
        .map(key => `ffe-grid__col--${camelCaseToDashCase(key)}`)
        .join(' ');

export default function GridCol(props) {
    const {
        children,
        className,
        lg,
        md,
        sm,
    } = props;

    const classes = [
        className,
        'ffe-grid__col',
        sizeClasses('lg', lg),
        sizeClasses('md', md),
        sizeClasses('sm', sm),
        modifiers(props),
    ].filter(x => x).join(' ');

    return (
        <div className={classes}>
            {children}
        </div>
    );
}

GridCol.propTypes = {
    className: PropTypes.string,
    ...MODIFIER_LIST.reduce((props, mod) => ({
        ...props,
        [mod]: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }), {}),
    ...SIZE_LIST.reduce((props, size) => ({
        ...props,
        [size]: PropTypes.oneOfType([
            PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            PropTypes.shape({
                cols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
                offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            }),
        ]),
    }), {}),
};
