import React from 'react';
import classNames from 'classnames';

interface Props
    extends Omit<
        React.ComponentProps<'span'>,
        'tabIndex' | 'role' | 'className'
    > {
    isSelected: boolean;
    children: number;
}

export const Day = React.forwardRef<HTMLSpanElement, Props>(
    ({ children, isSelected, ...rest }, ref) => {
        return (
            <span
                ref={ref}
                role="gridcell"
                data-date={children}
                className={classNames(
                    'ffe-calendar__day-number',
                    isSelected && 'ffe-calendar__day-number--selected',
                )}
                {...rest}
                tabIndex={isSelected ? 0 : -1}
            >
                {children}
            </span>
        );
    },
);
