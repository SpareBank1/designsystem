import {
    Table,
    TableHead,
    TableBody,
    TableHeaderCell,
    TableRow,
    TableDataCell,
    TableCaption,
    TableFoot,
} from '@sb1/ffe-tables-react';

() => {
    const data = [
        { name: 'Anders', age: 32 },
        { name: 'Erik', age: 25 },
        { name: 'Gunn', age: 29 },
        { name: 'Safi', age: 42 },
        { name: 'Sandra', age: 42 },
    ];

    return (
        <div style={{ overflowX: 'auto ' }}>
            <Table>
                <TableCaption>Utviklere</TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell scope="col">Navn</TableHeaderCell>
                        <TableHeaderCell scope="col">Alder</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(it => (
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
        </div>
    );
};
