import React from 'react';
import classNames from 'classnames';

export interface StylizedNumberedListItemProps
    extends React.ComponentPropsWithoutRef<'li'> {}

export const StylizedNumberedListItem: React.FC<
    StylizedNumberedListItemProps
> = ({ className, children, ...rest }) => {
    return (
        <li
            className={classNames(
                'ffe-stylized-numbered-list__item',
                className,
            )}
            {...rest}
        >
            <div className="ffe-stylized-numbered-list__item-content">
                {children}
            </div>
        </li>
    );
};
