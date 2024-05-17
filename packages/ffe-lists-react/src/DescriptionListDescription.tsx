import React from 'react';
import classNames from 'classnames';

export interface DescriptionListDescriptionProps
    extends React.ComponentPropsWithoutRef<'dt'> {}

export const DescriptionListDescription: React.FC<
    DescriptionListDescriptionProps
> = ({ className, ...rest }) => {
    return (
        <dd
            className={classNames(
                'ffe-description-list__description',
                className,
            )}
            {...rest}
        />
    );
};
