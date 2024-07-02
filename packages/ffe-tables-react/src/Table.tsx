import React from 'react';
import classNames from 'classnames';
import {
    TableProvider,
    TableContext,
    TableContextInterFace,
} from './TableContext';

export interface TableProps
    extends Omit<React.ComponentPropsWithoutRef<'table'>, 'children'> {
    children:
        | React.ReactNode
        | (({
              activeSortOrder,
              activeSortKey,
          }: {
              activeSortOrder?: TableContextInterFace['activeSortOrder'];
              activeSortKey?: TableContextInterFace['activeSortKey'];
          }) => React.ReactNode);
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className, children, ...rest }, ref) => {
        return (
            <TableProvider>
                <TableContext.Consumer>
                    {({ activeSortOrder, activeSortKey }) => (
                        <table
                            className={classNames('ffe-table', className)}
                            ref={ref}
                            {...rest}
                        >
                            {typeof children === 'function'
                                ? children({ activeSortOrder, activeSortKey })
                                : children}
                        </table>
                    )}
                </TableContext.Consumer>
            </TableProvider>
        );
    },
);
