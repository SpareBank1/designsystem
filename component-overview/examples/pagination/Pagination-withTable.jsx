import { Pagination, usePagination } from '@sb1/ffe-pagination-react';
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

() => {
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
                                <TableDataCell>{it.name}</TableDataCell>
                                <TableDataCell>{it.age}</TableDataCell>
                            </TableRow>
                        ))}
                </TableBody>
                <TableFoot>
                    <TableRow>
                        <TableHeaderCell scope="row">
                            Gjenomsnitts alder
                        </TableHeaderCell>
                        <TableDataCell>
                            {data.reduce((sum, curr) => sum + curr.age, 0) /
                                data.length}
                        </TableDataCell>
                    </TableRow>
                </TableFoot>
            </Table>
            <Pagination
                paginationControls={paginationControls}
                rowsPerPageOptions={[2, 5, 10, 20]}
                navigationButtonTexts={false}
            />
        </>
    );
};
