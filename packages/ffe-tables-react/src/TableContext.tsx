import React, { useState } from 'react';
import { SortOrder, ariaSortOrders } from './types';

export interface TableContextInterFace {
    activeSortOrder?: SortOrder;
    activeSortKey?: string;
    updateSort: (sortKey: string) => void;
    getSort: (sortKey: string) => SortOrder;
}

export const TableContext = React.createContext<TableContextInterFace>({
    updateSort: () => null,
    getSort: () => 'none',
});

const getNextSort = (sort: SortOrder = 'none'): SortOrder => {
    return sort
        ? ariaSortOrders[
              (ariaSortOrders.indexOf(sort) + 1) % ariaSortOrders.length
          ]
        : 'none';
};

export const TableProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [activeSortOrder, setActiveSortOrder] = useState<SortOrder>('none');
    const [activeSortKey, setActiveSortKey] = useState<string>();

    const updateSort = (sortKey: string) => {
        if (sortKey === activeSortKey) {
            setActiveSortOrder(getNextSort(activeSortOrder));
        } else {
            setActiveSortKey(sortKey);
            setActiveSortOrder(getNextSort('none'));
        }
    };

    const getSort = (sortKey: string): SortOrder => {
        if (sortKey === activeSortKey) {
            return activeSortOrder;
        }
        return 'none';
    };

    return (
        <TableContext.Provider
            value={{ activeSortOrder, activeSortKey, updateSort, getSort }}
        >
            {children}
        </TableContext.Provider>
    );
};
