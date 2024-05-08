import React, { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import texts from './texts';

export interface SpinnerProps extends ComponentPropsWithoutRef<'div'> {
    immediate?: boolean;
    large?: boolean;
    loadingText?: React.ReactNode;
    /** 'nb', 'nn', or 'en' */
    locale?: 'nb' | 'nn' | 'en';
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
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
