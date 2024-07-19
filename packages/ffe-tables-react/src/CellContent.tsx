import React from 'react';
import classNames from 'classnames';

export const CellContent: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
    className,
    ...rest
}) => {
    return (
        <div
            className={classNames('ffe-table__cell-content', className)}
            {...rest}
        />
    );
};
