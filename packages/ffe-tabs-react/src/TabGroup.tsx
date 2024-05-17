import React from 'react';
import classNames from 'classnames';

export interface TabGroupProps extends React.ComponentPropsWithoutRef<'div'> {
    /** Applies the noBreak modifier to avoid it collapsing over multiple lines */
    noBreak?: boolean;
}

export const TabGroup: React.FC<TabGroupProps> = ({
    className,
    noBreak,
    ...rest
}) => {
    return (
        <div
            className={classNames(
                'ffe-tab-group',
                { 'ffe-tab-group--no-break': noBreak },
                className,
            )}
            role="tablist"
            {...rest}
        />
    );
};
