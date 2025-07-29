import React from 'react';
import classNames from 'classnames';

export interface DescriptionListTermProps
    extends React.ComponentPropsWithoutRef<'div'> {}

export const DescriptionListTerm: React.FC<DescriptionListTermProps> = ({
    className,
    ...rest
}) => {
    return (
        <div 
            role="term"
            className={classNames('ffe-description-list__term', className)}
            {...rest}
        />
    );
};
