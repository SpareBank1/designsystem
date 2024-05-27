import React from 'react';
import classNames from 'classnames';

export interface TabProps extends React.ComponentPropsWithoutRef<'button'> {
    selected?: boolean;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
    ({ className, selected, ...rest }, ref) => {
        return (
            <button
                type="button"
                role="tab"
                aria-selected={selected ? 'true' : 'false'}
                ref={ref}
                tabIndex={selected ? 0 : -1}
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
