import classNames from 'classnames';
import React from 'react';

export type TagProps = {
    /** Decides the emphasis of the tag, whether it has a strong or subtle look */
    type?: 'emphasis' | 'subtle';
    className?: string;
    /** the color of the tag. Info, success, warning, critical, neutral or tip */
    variant?: 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'tip';
    children: React.ReactNode;
};

export function Tag({
    className,
    type = 'emphasis',
    variant = 'neutral',
    children,
    ...rest
}: TagProps) {
    return (
        <span
            className={classNames(
                'ffe-tag',
                `ffe-tag--${variant}-${type}`,
                className,
            )}
            {...rest}
        >
            {children}
        </span>
    );
}
