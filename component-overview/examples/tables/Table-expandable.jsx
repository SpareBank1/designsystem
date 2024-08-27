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

    const navnHeader = 'Navn';
    const epostHeader = 'E-post';

    return (
        <div style={{ overflowX: 'auto ' }}>
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
};
