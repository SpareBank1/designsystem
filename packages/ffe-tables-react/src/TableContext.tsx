import React, { useState } from 'react';
import { SortOrder, ariaSortOrders, InitialSort } from './types.js';

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

interface Props {
    initialSort?: InitialSort;
    children: React.ReactNode;
}

export const TableProvider: React.FC<Props> = ({ initialSort, children }) => {
    const [activeSortOrder, setActiveSortOrder] = useState<SortOrder>(
        initialSort?.sortOrder ?? 'none',
    );
    const [activeSortKey, setActiveSortKey] = useState(initialSort?.sortKey);

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
