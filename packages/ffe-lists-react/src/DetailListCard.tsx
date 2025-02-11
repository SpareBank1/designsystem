import React from 'react';
import classNames from 'classnames';

export interface DetailListCardProps
    extends React.ComponentPropsWithoutRef<'dl'> {
    bgColor?: 'primary' | 'secondary' | 'tertiary';
}

export const DetailListCard: React.FC<DetailListCardProps> = ({
    className,
    bgColor,
    children,
    ...rest
}) => {
    return (
        <dl
            className={classNames('ffe-detail-list-card', className, {
                [`ffe-detail-list-card--bg-${bgColor}`]: bgColor,
            })}
            {...rest}
        >
            {children}
        </dl>
    );
};
