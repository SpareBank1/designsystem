import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

const Spinner = ({ className, large, ...rest }) => (
    <span
        className={classNames(
            'ffe-loading-spinner',
            { 'ffe-loading-spinner--large': large },
            className,
        )}
        {...rest}
    />
);

Spinner.propTypes = {
    className: string,
    large: bool,
};

Spinner.defaultProps = {
    large: false,
};

export default Spinner;
