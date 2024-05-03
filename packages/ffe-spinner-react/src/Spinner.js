import React from 'react';
import { bool, string, node, oneOf } from 'prop-types';
import classNames from 'classnames';
import texts from './texts';

const Spinner = ({
    className,
    immediate = false,
    large = false,
    loadingText,
    locale = 'nb',
    onColoredBg,
    ...rest
}) => (
    <div
        aria-live="assertive"
        className={className}
        {...rest}
        data-testid="spinner-container"
    >
        <span
            className={classNames(
                'ffe-loading-spinner',
                { 'ffe-loading-spinner--on-colored-bg': onColoredBg },
                { 'ffe-loading-spinner--immediate': immediate },
                { 'ffe-loading-spinner--large': large },
            )}
            role="img"
            aria-label={texts[locale].ariaLabel}
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
    /** 'nb', 'nn', or 'en' */
    locale: oneOf(['en', 'nb', 'nn']),
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg: bool,
};

export default Spinner;
