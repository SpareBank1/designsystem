import React from 'react';
import { Pagination } from './Pagination';
import { usePagination } from './usePagination';
import type { StoryObj, Meta } from '@storybook/react';
import {
    Table,
    TableBody,
    TableCaption,
    TableDataCell,
    TableFoot,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@sb1/ffe-tables-react';

const meta: Meta<typeof Pagination> = {
    title: 'components/pagination/Pagination',
    component: Pagination,
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Standard: Story = {
    args: {
        ariaLabel: 'Paginering',
        rowsPerPageOptions: [10, 20, 50, 100],
    },
    render: function Render(args) {
        const paginationControls = usePagination(134, 10);

        return <Pagination {...args} paginationControls={paginationControls} />;
    },
};

export const WithTable: Story = {
    args: {
        ...Standard.args,
        navigationButtonText: false,
    },
    render: function Render(args) {
        const data = [
            { name: 'Anders', age: 32 },
            { name: 'Erik', age: 25 },
            { name: 'Gunn', age: 29 },
            { name: 'Safi', age: 42 },
            { name: 'Sandra', age: 42 },
            { name: 'Leif', age: 12 },
            { name: 'Gunnar', age: 2 },
            { name: 'Simen', age: 42 },
            { name: 'Andreas', age: 45 },
            { name: 'Mikkel', age: 23 },
            { name: 'Nissen', age: 100 },
            { name: 'Niklas', age: 35 },
            { name: 'Unn', age: 98 },
        ];
        const paginationControls = usePagination(data.length, 2);

        return (
            <>
                <Table>
                    <TableCaption>Utviklere</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">Navn</TableHeaderCell>
                            <TableHeaderCell scope="col">Alder</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(
                                paginationControls.pageStart,
                                paginationControls.pageStart +
                                    paginationControls.currentPageSize,
                            )
                            .map(it => (
                                <TableRow key={it.name}>
                                    <TableDataCell columnHeader="Navn">
                                        {it.name}
                                    </TableDataCell>
                                    <TableDataCell columnHeader="Alder">
                                        {it.age}
                                    </TableDataCell>
                                </TableRow>
                            ))}
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableHeaderCell scope="row">
                                Gjenomsnitts alder
                            </TableHeaderCell>
                            <TableDataCell columnHeader="Gjenomsnitts alder">
                                {data.reduce((sum, curr) => sum + curr.age, 0) /
                                    data.length}
                            </TableDataCell>
                        </TableRow>
                    </TableFoot>
                </Table>
                <Pagination {...args} paginationControls={paginationControls} />
            </>
        );
    },
};

export const NoNavigationText: Story = {
    args: { ...Standard.args, navigationButtonText: false },
    render: function Render(args) {
        const paginationControls = usePagination(134, 10);

        return <Pagination {...args} paginationControls={paginationControls} />;
    },
};

export const NoShowRowsPerPageText: Story = {
    args: {
        ...Standard.args,
        showRowsPerPageText: false,
        rowsPerPageOptions: undefined,
    },
    render: function Render(args) {
        const paginationControls = usePagination(134, 10);

        return <Pagination {...args} paginationControls={paginationControls} />;
    },
};
