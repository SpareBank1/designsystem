import React from 'react';
import classNames from 'classnames';

export interface DropdownProps
    extends React.ComponentPropsWithoutRef<'select'> {
    inline?: boolean;
}

export const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(
    ({ className, inline, ...rest }, ref) => {
        return (
            <select
                className={classNames(
                    'ffe-dropdown',
                    'ffe-default-mode',
                    { 'ffe-dropdown--inline': inline },
                    className,
                )}
                ref={ref}
                {...rest}
            />
        );
    },
);
