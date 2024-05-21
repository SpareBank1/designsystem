import React from 'react';
import classNames from 'classnames';

export interface DetailListCardProps
    extends React.ComponentPropsWithoutRef<'dl'> {}

export const DetailListCard: React.FC<DetailListCardProps> = ({
    className,
    children,
    ...rest
}) => {
    return (
        <dl className={classNames('ffe-detail-list-card', className)} {...rest}>
            {children}
        </dl>
    );
};
