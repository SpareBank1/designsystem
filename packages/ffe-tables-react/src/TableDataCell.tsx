import React from 'react';
import classNames from 'classnames';
import { CellContent } from './CellContent';

export interface TableDataCellProps
    extends React.ComponentPropsWithoutRef<'td'> {}

export const TableDataCell = React.forwardRef<
    HTMLTableCellElement,
    TableDataCellProps
>(({ className, children, ...rest }, ref) => {
    return (
        <td
            className={classNames('ffe-table__td', className)}
            ref={ref}
            {...rest}
        >
            <CellContent>{children}</CellContent>
        </td>
    );
});
