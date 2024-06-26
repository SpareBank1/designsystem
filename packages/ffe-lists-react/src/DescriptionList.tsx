import React from 'react';
import classNames from 'classnames';

export interface DescriptionListProps
    extends React.ComponentPropsWithoutRef<'dl'> {
    size?: 'md' | 'lg';
    /** Displays dts and dds inline*/
    horizontal?: boolean;
}

export const DescriptionList: React.FC<DescriptionListProps> = ({
    size,
    className,
    horizontal,
    ...rest
}) => (
    <dl
        className={classNames(
            'ffe-description-list',
            { 'ffe-description-list--horizontal': horizontal },
            { 'ffe-description-list--md': size === 'md' },
            { 'ffe-description-list--lg': size === 'lg' },
            className,
        )}
        {...rest}
    />
);
