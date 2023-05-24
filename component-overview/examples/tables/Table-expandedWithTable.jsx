import Table from '@sb1/ffe-tables-react';

() => {
    const data = [
        {
            id: 0,
            year: '2022',
            sum: '13545',
            avdrag: '6570.50',
            renterGebyrer: '6973',
            restgjeld: '67812.72',
            expand: true,
        }
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
    ]

    subData = [
        {
            id: 0,
            month: 'Juni',
            sum: '1935',
            avdrag: '6570.50',
            renterGebyrer: '6973',
        },
        {
            id: 1,
            month: 'Juli',
            sum: '1935',
            avdrag: '6570.50',
            renterGebyrer: '6973',
        },
        {
            id: 2,
            month: 'August',
            sum: '1935',
            avdrag: '6570.50',
            renterGebyrer: '6973',
        }
    ]
    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy
    const expandedContentMapper = row =>
        row.expand && <Table columns={subColumns} data={subData}></Table>;

    return (
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
    );
}
