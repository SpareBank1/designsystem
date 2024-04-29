import React from 'react';
import classNames from 'classnames';
import { string, oneOf } from 'prop-types';

const Icon = props => {
    const { fileUrl, className, ariaLabel, size = 'md', ...rest } = props;

    return (
        <span
            role="img"
            aria-label={ariaLabel}
            aria-hidden={!ariaLabel}
            className={classNames('ffe-icons', `ffe-icons--${size}`, className)}
            style={{
                maskImage: `url(${fileUrl})`,
                WebkitMaskImage: `url(${fileUrl})`,
            }}
            {...rest}
        />
    );
};

Icon.propTypes = {
    /** The path to the svg-file og base64 string */
    fileUrl: string.isRequired,
    /** Additional classnames */
    className: string,
    /** Aria label, if ariaLabel is hull it'll sett aria-hidden to true */
    ariaLabel: string,
    /** Size of the container around the icon */
    size: oneOf(['sm', 'md', 'lg', 'xl']),
};

export default Icon;
