import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableHeaderCell } from './TableHeaderCell';
import { TableRow } from './TableRow';
import { TableDataCell } from './TableDataCell';
import { TableCaption } from './TableCaption';
import { TableFoot } from './TableFoot';
import { TableRowExpandable } from './TableRowExpandable';
import { formatNumber } from '@sb1/ffe-formatters';
import { TertiaryButton } from '@sb1/ffe-buttons-react';

const meta: Meta<typeof Table> = {
    title: 'components/table/Table',
    component: Table,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Standard: Story = {
    args: {},
    render: () => {
        const data = [
            { name: 'Anders', age: 32 },
            { name: 'Erik', age: 25 },
            { name: 'Gunn', age: 29 },
            { name: 'Safi', age: 42 },
            { name: 'Sandra', age: 42 },
        ];

        const navnHeader = 'Navn';
        const alderHeader = 'Alder';
        const gjenomsnittsalderHeader = ' Gjenomsnittsalder';

        return (
            <div style={{ overflowX: 'auto' }}>
                <Table>
                    <TableCaption>Utviklere</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">
                                {navnHeader}
                            </TableHeaderCell>
                            <TableHeaderCell scope="col">
                                {alderHeader}
                            </TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(it => (
                            <TableRow key={it.name}>
                                <TableDataCell columnHeader={navnHeader}>
                                    {it.name}
                                </TableDataCell>
                                <TableDataCell columnHeader={alderHeader}>
                                    {it.age}
                                </TableDataCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableHeaderCell scope="row">
                                {gjenomsnittsalderHeader}
                            </TableHeaderCell>
                            <TableDataCell
                                columnHeader={gjenomsnittsalderHeader}
                            >
                                {data.reduce((sum, curr) => sum + curr.age, 0) /
                                    data.length}
                            </TableDataCell>
                        </TableRow>
                    </TableFoot>
                </Table>
            </div>
        );
    },
};

export const Expandable: Story = {
    args: {},
    render: () => {
        const data = [
            {
                name: 'Ola Normann',
                email: 'ola@normann.no',
                expand: 'Info: mer spennende info om Ola',
            },
            {
                name: 'Sivert Svensk',
                email: 'sivert@svenska.se',
                expand: 'Info: mer spennende info om Sivert',
            },
            {
                name: 'Daniel Dansk',
                email: 'daniel@dansk.dk',
                expand: 'Info: mer spennende info om Daniel',
            },
        ];
        const navnHeader = 'Navn';
        const epostHeader = 'E-post';
        return (
            <div style={{ overflowX: 'auto' }}>
                <Table>
                    <TableCaption>Tabel utvidbare rader</TableCaption>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell scope="col">
                                {navnHeader}
                            </TableHeaderCell>
                            <TableHeaderCell scope="col">
                                {epostHeader}
                            </TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((it, index) => (
                            <TableRowExpandable
                                isDefaultOpen={index === 1}
                                key={it.email}
                                expandContent={it.expand}
                            >
                                <TableDataCell columnHeader={navnHeader}>
                                    {it.name}
                                </TableDataCell>
                                <TableDataCell columnHeader={epostHeader}>
                                    {it.email}
                                </TableDataCell>
                            </TableRowExpandable>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    },
};

export const Sortable: Story = {
    args: {},
    render: () => {
        type Data = {
            name: string;
            email: string;
            age: number;
            fortune: number;
            button: React.ReactNode;
            expand?: React.ReactNode;
        };

        const button = (
            <TertiaryButton
                as="button"
                type="button"
                onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                poke
            </TertiaryButton>
        );

        const data: Data[] = [
            {
                name: 'Ola Normann',
                email: 'ola@normann.no',
                age: 23,
                fortune: 12693005.93,
                button,
                expand: 'Info: mer spennende info om Ola',
            },
            {
                name: 'Sivert Svensk',
                email: 'sivert@svenska.se',
                age: 45,
                fortune: 9005.93,
                button,
            },
            {
                name: 'Daniel Dansk',
                email: 'daniel@dansk.dk',
                age: 39,
                fortune: 8693005.93,
                button,
            },
            {
                name: 'Lille Ole',
                email: 'lilleole@gmail.com',
                age: 9,
                fortune: 23.12,
                button,
            },
        ];

        function compareStringAsc<Item>(
            getField: (item: Item) => string | null | undefined,
        ) {
            return (itemA: Item, itemB: Item) => {
                const a = getField(itemA);
                const b = getField(itemB);
                if (!a) return 1;
                if (!b) return -1;
                if (a === b) return 0;
                return a.localeCompare(b);
            };
        }

        function compareStringDesc<Item>(
            getField: (item: Item) => string | null | undefined,
        ) {
            return (itemA: Item, itemB: Item) => {
                const a = getField(itemA);
                const b = getField(itemB);
                if (!a) return 1;
                if (!b) return -1;
                if (a === b) return 0;
                return b.localeCompare(a);
            };
        }

        function compareNumberAsc<Item>(
            getField: (item: Item) => number | null | undefined,
        ) {
            return (itemA: Item, itemB: Item) => {
                const a = getField(itemA);
                const b = getField(itemB);
                return (a != null ? a : Infinity) - (b != null ? b : Infinity);
            };
        }

        function compareNumberDesc<Item>(
            getField: (item: Item) => number | null | undefined,
        ) {
            return (itemA: Item, itemB: Item) => {
                const a = getField(itemA);
                const b = getField(itemB);
                return (
                    (b != null ? b : -Infinity) - (a != null ? a : -Infinity)
                );
            };
        }

        const sortFunctions = {
            name: {
                ascending: compareStringAsc<Data>(it => it.name),
                descending: compareStringDesc<Data>(it => it.name),
                none: null,
            },
            email: {
                ascending: compareStringAsc<Data>(it => it.email),
                descending: compareStringDesc<Data>(it => it.email),
                none: null,
            },
            age: {
                ascending: compareNumberAsc<Data>(it => it.age),
                descending: compareNumberDesc<Data>(it => it.age),
                none: null,
            },
            fortune: {
                ascending: compareNumberAsc<Data>(it => it.fortune),
                descending: compareNumberDesc<Data>(it => it.fortune),
                none: null,
            },
        };

        return (
            <div style={{ overflowX: 'auto' }}>
                <Table
                    initialSort={{ sortKey: 'email', sortOrder: 'descending' }}
                >
                    {({ activeSortKey, activeSortOrder }) => {
                        const sortFunc =
                            activeSortKey && activeSortOrder
                                ? sortFunctions[
                                      activeSortKey as keyof typeof sortFunctions
                                  ][activeSortOrder]
                                : null;

                        const sortedData = sortFunc
                            ? [...data.sort(sortFunc)]
                            : data;

                        const navnHeader = 'Navn';
                        const epostHeader = 'E-post';
                        const alderHeader = 'Alder';
                        const formueHeader = 'Formue';
                        const pokeHeader = 'Poke';

                        return (
                            <>
                                <TableCaption>
                                    Masse spennende data
                                </TableCaption>
                                <TableHead>
                                    <TableRow>
                                        <TableHeaderCell
                                            sortKey="name"
                                            scope="col"
                                        >
                                            {navnHeader}
                                        </TableHeaderCell>
                                        <TableHeaderCell
                                            sortKey="email"
                                            scope="col"
                                        >
                                            {epostHeader}
                                        </TableHeaderCell>
                                        <TableHeaderCell
                                            sortKey="age"
                                            scope="col"
                                        >
                                            {alderHeader}
                                        </TableHeaderCell>
                                        <TableHeaderCell
                                            sortKey="fortune"
                                            scope="col"
                                        >
                                            {formueHeader}
                                        </TableHeaderCell>
                                        <TableHeaderCell>
                                            {pokeHeader}
                                        </TableHeaderCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sortedData.map(it => {
                                        const rowContent = (
                                            <>
                                                <TableDataCell
                                                    columnHeader={navnHeader}
                                                >
                                                    {it.name}
                                                </TableDataCell>
                                                <TableDataCell
                                                    columnHeader={epostHeader}
                                                >
                                                    {it.email}
                                                </TableDataCell>
                                                <TableDataCell
                                                    columnHeader={alderHeader}
                                                >
                                                    {it.age}
                                                </TableDataCell>
                                                <TableDataCell
                                                    columnHeader={formueHeader}
                                                >
                                                    {formatNumber(it.fortune, {
                                                        decimals: 2,
                                                    })}
                                                </TableDataCell>
                                                <TableDataCell
                                                    columnHeader={pokeHeader}
                                                >
                                                    {it.button}
                                                </TableDataCell>
                                            </>
                                        );

                                        return it.expand ? (
                                            <TableRowExpandable
                                                key={it.email}
                                                expandContent={it.expand}
                                            >
                                                {rowContent}
                                            </TableRowExpandable>
                                        ) : (
                                            <TableRow key={it.email}>
                                                {rowContent}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </>
                        );
                    }}
                </Table>
            </div>
        );
    },
};
