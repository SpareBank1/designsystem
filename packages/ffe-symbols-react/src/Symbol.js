import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import classNames from 'classnames';

const Symbol = props => {
    const {
        className,
        children,
        size,
        weight,
        fill,
        color,
        ariaLabel,
        ...rest
    } = props;
    return (
        <span
            className={classNames(
                'ffe-symbol',
                `ffe-symbol--${size}`,
                className,
            )}
            role="img"
            style={{
                fontVariationSettings: `'FILL' ${
                    fill ? 1 : 0
                }, 'GRAD' var(--ffe-v-symbol-grade), 'wght' ${weight}`,
                color: `var(--${color})`,
            }}
            aria-label={ariaLabel ? ariaLabel : null}
            aria-hidden={ariaLabel ? false : true}
            {...rest}
        >
            {children}
        </span>
    );
};

Symbol.defaultProps = {
    fill: false,
    size: 'md',
    weight: 400,
    color: 'ffe-v-symbol-default-color',
};

Symbol.propTypes = {
    /**  Fills the icon with color */
    fill: bool,
    /** The name of the icon that should be shown */
    children: string.isRequired,
    /** Size of the icon, medium is default */
    size: oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
    /** Symbols stroke weight. This can affect overall size of symbol, 400 is default */
    weight: oneOf([300, 400, 500, 600]),
    /** Color of the symbol, value should be name of FFE color variable example: ffe-farge-vann */
    color: string,
    /** Additional classnames */
    className: string,
    /** Aria label text. If empty aria-hidden is automatically set to true */
    ariaLabel: string.isRequired,
};

export default Symbol;
