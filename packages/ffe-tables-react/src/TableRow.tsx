import React from 'react';
import classNames from 'classnames';

export interface TableRowProps extends React.ComponentPropsWithoutRef<'tr'> {}

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
    ({ className, ...rest }, ref) => {
        return (
            <tr
                className={classNames('ffe-table__tr', className)}
                ref={ref}
                {...rest}
            />
        );
    },
);
