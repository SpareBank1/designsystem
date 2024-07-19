import React from 'react';
import { TableHeaderCell } from './TableHeaderCell';
import { screen, render } from '@testing-library/react';
import { TableProvider, TableContext } from './TableContext';
import userEvent from '@testing-library/user-event';

describe('<TableHeaderCell />', () => {
    it('classes', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <TableHeaderCell className="my-class" />
                    </tr>
                </thead>
            </table>,
        );
        const th = screen.getByRole('columnheader');
        expect(th.classList).toContain('my-class');
        expect(th.classList).toContain('ffe-table__th');
        expect(th.classList).not.toContain('ffe-table__th--sortable');
    });

    it('should not have button', () => {
        render(
            <table>
                <thead>
                    <tr>
                        <TableHeaderCell className="my-class" />
                    </tr>
                </thead>
            </table>,
        );
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    describe('sorting', () => {
        it('sortKey dont match', () => {
            render(
                <TableProvider
                    initialSort={{
                        sortKey: 'otherSortKey',
                        sortOrder: 'ascending',
                    }}
                >
                    <table>
                        <thead>
                            <tr>
                                <TableHeaderCell sortKey="sortKey" />
                            </tr>
                        </thead>
                    </table>
                </TableProvider>,
            );
            const th = screen.getByRole('columnheader');
            expect(th.classList).toContain('ffe-table__th');
            expect(th.classList).toContain('ffe-table__th--sortable');
            expect(th.getAttribute('aria-sort')).toBe('none');
        });

        it('sortKey match ascending', () => {
            const sortKey = 'sortKey';
            render(
                <TableProvider
                    initialSort={{ sortKey, sortOrder: 'ascending' }}
                >
                    <table>
                        <thead>
                            <tr>
                                <TableHeaderCell sortKey={sortKey} />
                            </tr>
                        </thead>
                    </table>
                </TableProvider>,
            );
            const th = screen.getByRole('columnheader');
            expect(th.classList).toContain('ffe-table__th');
            expect(th.classList).toContain('ffe-table__th--sortable');
            expect(th.classList).toContain('ffe-table__th--sortable-ascending');
            expect(th.getAttribute('aria-sort')).toBe('ascending');
        });

        it('sortKey match descending', () => {
            const sortKey = 'sortKey';
            render(
                <TableProvider
                    initialSort={{
                        sortKey,
                        sortOrder: 'descending',
                    }}
                >
                    <table>
                        <thead>
                            <tr>
                                <TableHeaderCell sortKey={sortKey} />
                            </tr>
                        </thead>
                    </table>
                </TableProvider>,
            );
            const th = screen.getByRole('columnheader');
            expect(th.classList).toContain('ffe-table__th');
            expect(th.classList).toContain('ffe-table__th--sortable');
            expect(th.classList).toContain(
                'ffe-table__th--sortable-descending',
            );
            expect(th.getAttribute('aria-sort')).toBe('descending');
        });

        it('should have sort button', () => {
            const sortKey = 'sortKey';
            render(
                <TableProvider
                    initialSort={{
                        sortKey,
                        sortOrder: 'descending',
                    }}
                >
                    <table>
                        <thead>
                            <tr>
                                <TableHeaderCell sortKey={sortKey}>
                                    th
                                </TableHeaderCell>
                            </tr>
                        </thead>
                    </table>
                </TableProvider>,
            );
            const sortButton = screen.getByRole('button', { name: 'th' });
            expect(
                sortButton.classList.contains('ffe-table__sort-button'),
            ).toBeTruthy();
        });

        it('should update sort when clicked', async () => {
            const user = userEvent.setup();

            const sortKey = 'sortKey';
            const updateSortMock = jest.fn();

            render(
                <TableContext.Provider
                    value={{
                        updateSort: updateSortMock,
                        activeSortKey: undefined,
                        getSort: () => 'none',
                        activeSortOrder: 'ascending',
                    }}
                >
                    <table>
                        <thead>
                            <tr>
                                <TableHeaderCell sortKey={sortKey}>
                                    th
                                </TableHeaderCell>
                            </tr>
                        </thead>
                    </table>
                </TableContext.Provider>,
            );
            const th = screen.getByRole('columnheader');
            await user.click(th);

            expect(updateSortMock).toHaveBeenCalledWith(sortKey);
            expect(updateSortMock).toHaveBeenCalledTimes(1);
        });
    });
});
