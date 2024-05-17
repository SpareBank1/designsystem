import React from 'react';
import classNames from 'classnames';

export interface DescriptionListTermProps
    extends React.ComponentPropsWithoutRef<'dt'> {}

export const DescriptionListTerm: React.FC<DescriptionListTermProps> = ({
    className,
    ...rest
}) => {
    return (
        <dt
            className={classNames('ffe-description-list__term', className)}
            {...rest}
        />
    );
};
