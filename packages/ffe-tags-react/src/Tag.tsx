import classNames from 'classnames';
import React from 'react';

export type TagProps = {
    /** Bestemmer taggens uttrykk, om den skal være fremhevet eller subtil */
    type?: 'emphasis' | 'subtle';
    className?: string;
    /** Fargen på taggen. Info, suksess, advarsel, kritisk, nøytral eller tips */
    variant?: 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'tip';
    /** Størrelsen på taggen, standard er md */
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
};

export function Tag({
    className,
    type = 'emphasis',
    variant = 'neutral',
    size = 'md',
    children,
    ...rest
}: TagProps) {
    return (
        <span
            className={classNames(
                'ffe-tag',
                `ffe-tag--${variant}-${type}`,
                { [`ffe-tag--${size}`]: size !== 'md' },
                className,
            )}
            {...rest}
        >
            {children}
        </span>
    );
}
