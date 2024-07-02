import React from 'react';
import classNames from 'classnames';

export interface TableDataCellProps
    extends React.ComponentPropsWithoutRef<'td'> {}

export const TableDataCell = React.forwardRef<
    HTMLTableCellElement,
    TableDataCellProps
>(({ className, ...rest }, ref) => {
    return (
        <td
            className={classNames('ffe-table__td', className)}
            ref={ref}
            {...rest}
        />
    );
});
