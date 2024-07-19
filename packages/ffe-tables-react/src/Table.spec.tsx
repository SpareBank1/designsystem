import React from 'react';
import { Table } from './Table';
import { TableRow } from './TableRow';
import { TableDataCell } from './TableDataCell';
import { TableBody } from './TableBody';
import { TableHeaderCell } from './TableHeaderCell';
import { TableHead } from './TableHead';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TableCaption } from './TableCaption';

describe('<Table />', () => {
    it('should use correct classes', () => {
        render(
            <Table className="my-class">
                <TableCaption className="my-class">caption</TableCaption>
                <TableBody>
                    <TableRow>
                        <TableDataCell>cell</TableDataCell>
                    </TableRow>
                </TableBody>
            </Table>,
        );
        const table = screen.getByRole('table', { name: 'caption' });
        expect(table.classList).toContain('my-class');
        expect(table.classList).toContain('ffe-table');
    });

    it('should be sortable', async () => {
        const user = userEvent.setup({ delay: null });
        type SortKey = 'name' | 'age';
        type SortOrder = 'ascending' | 'descending' | 'none';

        render(
            <Table initialSort={{ sortKey: 'name', sortOrder: 'ascending' }}>
                {({ activeSortOrder, activeSortKey }) => (
                    <>
                        <TableHead>
                            <TableRow
                                data-sort-order={activeSortOrder}
                                data-sort-key={activeSortKey}
                            >
                                <TableHeaderCell sortKey="name">
                                    name
                                </TableHeaderCell>
                                <TableHeaderCell sortKey="age">
                                    age
                                </TableHeaderCell>
                            </TableRow>
                        </TableHead>
                    </>
                )}
            </Table>,
        );

        const row = screen.getByRole('row');
        const verifySort = ({
            sortOrder,
            sortKey,
        }: {
            sortOrder: SortOrder;
            sortKey: SortKey;
        }) => {
            expect(row.getAttribute('data-sort-order')).toBe(sortOrder);
            expect(row.getAttribute('data-sort-key')).toBe(sortKey);
        };

        const nameSortButton = screen.getByRole('button', { name: 'name' });
        const ageSortButton = screen.getByRole('button', { name: 'age' });

        verifySort({ sortOrder: 'ascending', sortKey: 'name' });

        await user.click(nameSortButton);
        verifySort({ sortOrder: 'descending', sortKey: 'name' });

        await user.click(nameSortButton);
        verifySort({ sortOrder: 'none', sortKey: 'name' });

        await user.click(nameSortButton);
        verifySort({ sortOrder: 'ascending', sortKey: 'name' });

        await user.click(ageSortButton);
        verifySort({ sortOrder: 'ascending', sortKey: 'age' });

        await user.click(ageSortButton);
        verifySort({ sortOrder: 'descending', sortKey: 'age' });

        await user.click(ageSortButton);
        verifySort({ sortOrder: 'none', sortKey: 'age' });
    });
});
