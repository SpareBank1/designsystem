import React from 'react';
import classNames from 'classnames';

export interface BulletListItemProps
    extends React.ComponentPropsWithoutRef<'li'> {}

export const BulletListItem: React.FC<BulletListItemProps> = ({
    className,
    ...rest
}) => {
    return (
        <li
            className={classNames('ffe-bullet-list__item', className)}
            {...rest}
        />
    );
};
