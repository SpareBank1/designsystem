import React from 'react';
import classNames from 'classnames';
import {
    TableProvider,
    TableContext,
    TableContextInterFace,
} from './TableContext';
import { InitialSort } from './types';

export interface TableProps
    extends Omit<React.ComponentPropsWithoutRef<'table'>, 'children'> {
    initialSort?: InitialSort;
    children:
        | React.ReactNode
        | (({
              activeSortOrder,
              activeSortKey,
          }: {
              activeSortOrder?: TableContextInterFace['activeSortOrder'];
              activeSortKey?: TableContextInterFace['activeSortKey'];
          }) => React.ReactNode);
    breakPoint?: 'none' | 'sm' | 'md';
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className, initialSort, children, breakPoint = 'sm', ...rest }, ref) => {
        return (
            <TableProvider initialSort={initialSort}>
                <TableContext.Consumer>
                    {({ activeSortOrder, activeSortKey }) => (
                        <table
                            className={classNames(
                                'ffe-table',
                                { 'ffe-table--break-sm': breakPoint === 'sm' },
                                { 'ffe-table--break-md': breakPoint === 'md' },
                                className,
                            )}
                            ref={ref}
                            {...rest}
                        >
                            {typeof children === 'function'
                                ? children({
                                      activeSortOrder,
                                      activeSortKey,
                                  })
                                : children}
                        </table>
                    )}
                </TableContext.Consumer>
            </TableProvider>
        );
    },
);
