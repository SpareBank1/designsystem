import React from 'react';
import classNames from 'classnames';

export interface TabProps extends React.ComponentPropsWithoutRef<'button'> {
    selected?: boolean;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
    ({ className, selected, ...rest }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                role="tab"
                aria-selected={selected}
                className={classNames(
                    'ffe-tab',
                    { 'ffe-tab--selected': selected },
                    className,
                )}
                {...rest}
            />
        );
    },
);
