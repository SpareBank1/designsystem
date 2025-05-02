import React, { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import texts from './texts.js';

export interface SpinnerProps extends ComponentPropsWithoutRef<'div'> {
    immediate?: boolean;
    large?: boolean;
    loadingText?: React.ReactNode;
    /** 'nb', 'nn', or 'en' */
    locale?: 'nb' | 'nn' | 'en';
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}

export const Spinner: React.FC<SpinnerProps> = ({
    className,
    immediate = false,
    large = false,
    loadingText,
    locale = 'nb',
    ...rest
}) => (
    <div
        aria-live="assertive"
        className={classNames('ffe-loading-spinner-container', className)}
        {...rest}
        data-testid="spinner-container"
    >
        <span
            className={classNames(
                'ffe-loading-spinner',
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
