import React from 'react';
import { bool, string, node } from 'prop-types';
import classNames from 'classnames';

const Spinner = ({ className, immediate, large, loadingText, ...rest }) => (
    <div aria-live="assertive" className={className} {...rest}>
        <span
            className={classNames(
                'ffe-loading-spinner',
                { 'ffe-loading-spinner--immediate': immediate },
                { 'ffe-loading-spinner--large': large },
            )}
            role="img"
            aria-label="Vennligst vent"
            aria-hidden={!!loadingText}
        />
        {loadingText}
    </div>
);

Spinner.propTypes = {
    className: string,
    immediate: bool,
    large: bool,
    loadingText: node,
};

Spinner.defaultProps = {
    immediate: false,
    large: false,
};

export default Spinner;
