import React from 'react';
import classNames from 'classnames';

export interface NumberedListItemProps
    extends React.ComponentPropsWithoutRef<'li'> {}

export const NumberedListItem: React.FC<NumberedListItemProps> = ({
    className,
    ...rest
}) => {
    return (
        <li
            className={classNames('ffe-numbered-list__item', className)}
            {...rest}
        />
    );
};
