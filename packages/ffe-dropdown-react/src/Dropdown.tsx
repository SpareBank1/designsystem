import React, { useState } from 'react';
import classNames from 'classnames';
import { useTabPressed } from './useTabPressed';

export interface DropdownProps
    extends React.ComponentPropsWithoutRef<'select'> {
    inline?: boolean;
}

export const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(
    ({ className, inline, ...rest }, ref) => {
        const tabPressed = useTabPressed();
        const [isFocused, setFocus] = useState(false);
        return (
            <select
                className={classNames(
                    'ffe-dropdown',
                    'ffe-default-mode',
                    {
                        'ffe-dropdown--inline': inline,
                        'ffe-dropdown--focus': isFocused,
                    },
                    className,
                )}
                ref={ref}
                onFocus={() => setFocus(tabPressed)}
                onBlur={() => setFocus(false)}
                {...rest}
            />
        );
    },
);
