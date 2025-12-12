import React from 'react';
import classNames from 'classnames';

export interface SkeletonCircleProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SkeletonCircle: React.FC<SkeletonCircleProps> = ({
    size = 'lg',
    className,
    ...props
}) => {
    return (
        <div
            className={classNames(
                'ffe-skeleton ffe-skeleton__circle',
                `ffe-skeleton__circle--${size}`,
                className,
            )}
            aria-hidden={true}
            {...props}
        ></div>
    );
};
