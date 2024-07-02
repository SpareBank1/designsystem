import React from 'react';
import classNames from 'classnames';

export interface DetailListCardProps
    extends React.ComponentPropsWithoutRef<'dl'> {
    bgColor?: 'sand-30' | 'sand-70' | 'frost-30' | 'syrin-30' | 'syrin-70';
    bgDarkmodeColor?: 'natt' | 'svart' | 'koksgraa' | 'grey-charcoal';
}

export const DetailListCard: React.FC<DetailListCardProps> = ({
    className,
    bgColor,
    bgDarkmodeColor,
    children,
    ...rest
}) => {
    return (
        <dl
            className={classNames('ffe-detail-list-card', className, {
                [`ffe-detail-list-card--bg-${bgColor}`]: bgColor,
                [`ffe-detail-list-card--dm-bg-${bgDarkmodeColor}`]:
                    bgDarkmodeColor,
            })}
            {...rest}
        >
            {children}
        </dl>
    );
};
