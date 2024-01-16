import React from 'react';
import classNames from 'classnames';
import { string, oneOf } from 'prop-types';

const Icon = props => {
    const { filePath, className, ariaLabel, size, ...rest } = props;

    return (
        <span
            role="img"
            aria-label={ariaLabel}
            aria-hidden={!ariaLabel}
            className={classNames('ffe-icons', `ffe-icons--${size}`, className)}
            style={{ maskImage: `url(${filePath})` }}
            {...rest}
        />
    );
};

Icon.defaultProps = {
    size: 'md',
};

Icon.propTypes = {
    /** The path to the svg-file */
    filePath: string.isRequired,
    /** Additional classnames */
    className: string,
    /** Aria label, if ariaLabel is hull it'll sett aria-hidden to true */
    ariaLabel: string,
    /** Size of the container around the icon */
    size: oneOf(['sm', 'md', 'lg', 'xl']),
};

export default Icon;
