import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';

const Spinner = ({ className, immediate, large, ...rest }) => (
    <span
        aria-live="assertive"
        className={classNames(
            'ffe-loading-spinner',
            { 'ffe-loading-spinner--immediate': immediate },
            { 'ffe-loading-spinner--large': large },
            className,
        )}
        {...rest}
    />
);

Spinner.propTypes = {
    className: string,
    immediate: bool,
    large: bool,
};

Spinner.defaultProps = {
    immediate: false,
    large: false,
};

export default Spinner;
