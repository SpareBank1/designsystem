import React from 'react';
import classNames from 'classnames';

export interface DescriptionListDescriptionProps
    extends React.ComponentPropsWithoutRef<'div'> {}

export const DescriptionListDescription: React.FC<
    DescriptionListDescriptionProps
> = ({ className, ...rest }) => {
    return (
        <div
            role="definition"
            className={classNames(
                'ffe-description-list__description',
                className,
            )}
            {...rest}
        />
    );
};
