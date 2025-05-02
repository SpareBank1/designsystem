import classNames from 'classnames';
import React from 'react';

export type BadgeProps = {
    className?: string;
    children: React.ReactNode;
};

export function Badge({ className, children, ...rest }: BadgeProps) {
    return (
        <span
            className={classNames(
                'ffe-badge',
                { 'ffe-badge--no-children': !children },
                className,
            )}
            {...rest}
        >
            {children}
        </span>
    );
}
