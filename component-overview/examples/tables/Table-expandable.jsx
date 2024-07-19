import {
    Table,
    TableHead,
    TableBody,
    TableHeaderCell,
    TableRow,
    TableDataCell,
    TableCaption,
    TableRowExpandable,
} from '@sb1/ffe-tables-react';

() => {
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

    return (
        <div style={{ overflowX: 'auto ' }}>
            <Table>
                <TableCaption>Tabel utvidbare rader</TableCaption>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell scope="col">Navn</TableHeaderCell>
                        <TableHeaderCell scope="col">Epost</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(it => (
                        <TableRowExpandable
                            key={it.email}
                            expandContent={it.expand}
                        >
                            <TableDataCell>{it.name}</TableDataCell>
                            <TableDataCell>{it.email}</TableDataCell>
                        </TableRowExpandable>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
