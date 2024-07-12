import Table from '@sb1/ffe-tables-react';
import { formatNumber } from '@sb1/ffe-formatters';

() => {
    const data = [
        {
            id: 0,
            year: '2022',
            sum: formatNumber(13545, { decimals: 2 }),
            avdrag: formatNumber(6570.5, { decimals: 2 }),
            renterGebyrer: formatNumber(6973, { decimals: 2 }),
            restgjeld: formatNumber(67812.72, { decimals: 2 }),
            expand: true,
        },
    ];

    const columns = [
        { key: 'year', header: 'År' },
        { key: 'sum', header: 'Å betale' },
        { key: 'avdrag', header: 'Avdrag' },
        { key: 'renterGebyrer', header: 'Rente + gebyrer' },
        { key: 'restgjeld', header: 'Restgjeld' },
    ];

    const subColumns = [
        { key: 'month', header: 'Måned' },
        { key: 'sum', header: 'Å betale' },
        { key: 'avdrag', header: 'Avdrag' },
        { key: 'renterGebyrer', header: 'Rente + gebyrer' },
    ];

    const subData = [
        {
            id: 0,
            month: 'Juni',
            sum: formatNumber(1935, { decimals: 2 }),
            avdrag: formatNumber(6570.5, { decimals: 2 }),
            renterGebyrer: formatNumber(6973, { decimals: 2 }),
        },
        {
            id: 1,
            month: 'Juli',
            sum: formatNumber(1935, { decimals: 2 }),
            avdrag: formatNumber(6570.5, { decimals: 2 }),
            renterGebyrer: formatNumber(6973, { decimals: 2 }),
        },
        {
            id: 2,
            month: 'August',
            sum: formatNumber(1935, { decimals: 2 }),
            avdrag: formatNumber(6570.5, { decimals: 2 }),
            renterGebyrer: formatNumber(6973, { decimals: 2 }),
        },
    ];
    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy
    const expandedContentMapper = row =>
        row.expand && <Table columns={subColumns} data={subData}></Table>;

    return (
        <div style={{ overflowX: 'auto' }}>
            <Table
                columns={columns}
                data={data}
                expandedContentMapper={expandedContentMapper}
                descending={true}
                condensed={true}
                smallHeader={true}
                columnLayoutMobile={true}
                breakpoint={'none'}
                caption="Nedbetalingsplan"
            />
        </div>
    );
};
