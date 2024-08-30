import React from 'react';
import classNames from 'classnames';
import { CellContent } from './CellContent';
import { StrongText } from '@sb1/ffe-core-react';

export interface TableDataCellProps
    extends React.ComponentPropsWithoutRef<'td'> {
    columnHeader: React.ReactNode;
}

export const TableDataCell = React.forwardRef<
    HTMLTableCellElement,
    TableDataCellProps
>(({ className, columnHeader, children, ...rest }, ref) => {
    return (
        <td
            className={classNames('ffe-table__td', className)}
            ref={ref}
            {...rest}
        >
            <CellContent>
                {columnHeader && (
                    <StrongText
                        className="ffe-table__column-header"
                        aria-hidden={true}
                    >
                        {columnHeader}
                        {':'}
                    </StrongText>
                )}
                {children}
            </CellContent>
        </td>
    );
});
