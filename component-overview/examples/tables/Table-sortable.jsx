import {
    Table,
    TableHead,
    TableBody,
    TableHeaderCell,
    TableRow,
    TableDataCell,
    TableCaption,
} from '@sb1/ffe-tables-react';
import { formatNumber } from '@sb1/ffe-formatters';
import { TertiaryButton } from '@sb1/ffe-buttons-react';

() => {
    const data = [
        {
            name: 'Ola Normann',
            email: 'ola@normann.no',
            age: 23,
            fortune: 12693005.93,
            button: <TertiaryButton type="button">poke</TertiaryButton>,
        },
        {
            name: 'Sivert Svensk',
            email: 'sivert@svenska.se',
            age: 45,
            fortune: 9005.93,
            button: <TertiaryButton type="button">poke</TertiaryButton>,
        },
        {
            name: 'Daniel Dansk',
            email: 'daniel@dansk.dk',
            age: 39,
            fortune: 8693005.93,
            button: <TertiaryButton type="button">poke</TertiaryButton>,
        },
        {
            name: 'Lille Ole',
            email: 'lilleole@gmail.com',
            age: 9,
            fortune: 23.12,
            button: <TertiaryButton type="button">poke</TertiaryButton>,
        },
    ];

    const compareStringAsc = field => (itemA, itemB) =>
        itemA[field].localeCompare(itemB[field]);
    const compareStringDesc = field => (itemA, itemB) =>
        itemB[field].localeCompare(itemA[field]);
    const compareNumberAsc = field => (itemA, itemB) =>
        itemA[field] - itemB[field];
    const compareNumberDesc = field => (itemA, itemB) =>
        itemA[field] - itemB[field];

    const sortFunctions = {
        name: {
            ascending: compareStringAsc('name'),
            descending: compareStringDesc('name'),
        },
        email: {
            ascending: compareStringAsc('email'),
            descending: compareStringDesc('email'),
        },
        age: {
            ascending: compareNumberAsc('age'),
            descending: compareNumberDesc('age'),
        },
        fortune: {
            ascending: compareNumberAsc('fortune'),
            descending: compareNumberDesc('fortune'),
        },
    };

    return (
        <Table>
            {({ activeSortKey, activeSortOrder }) => {
                const sortFunc = activeSortKey
                    ? sortFunctions[activeSortKey][activeSortOrder]
                    : null;

                const sortedData = sortFunc ? data.toSorted(sortFunc) : data;

                return (
                    <>
                        <TableCaption>Masse spennende data</TableCaption>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell sortKey="name" scope="col">
                                    Navn
                                </TableHeaderCell>
                                <TableHeaderCell sortKey="email" scope="col">
                                    E-post
                                </TableHeaderCell>
                                <TableHeaderCell sortKey="age" scope="col">
                                    Alder
                                </TableHeaderCell>
                                <TableHeaderCell sortKey="fortune" scope="col">
                                    Formue
                                </TableHeaderCell>
                                <TableHeaderCell>Poke</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedData.map(it => (
                                <TableRow key={it.email}>
                                    <TableDataCell>{it.name}</TableDataCell>
                                    <TableDataCell>{it.email}</TableDataCell>
                                    <TableDataCell>{it.age}</TableDataCell>
                                    <TableDataCell>
                                        {formatNumber(it.fortune, {
                                            decimals: 2,
                                        })}
                                    </TableDataCell>
                                    <TableDataCell>{it.button}</TableDataCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </>
                );
            }}
        </Table>
    );
};
