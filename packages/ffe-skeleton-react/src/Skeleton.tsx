import React from 'react';
import classNames from 'classnames';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
    height?: string;
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width,
    height,
    className,
    ...props
}) => {
    return (
        <div
            style={
                {
                    '--ffe-skeleton-box-width': width,
                    '--ffe-skeleton-box-height': height,
                } as React.CSSProperties
            }
            className={classNames('ffe-skeleton ffe-skeleton__box', className)}
            aria-hidden={true}
            {...props}
        ></div>
    );
};
