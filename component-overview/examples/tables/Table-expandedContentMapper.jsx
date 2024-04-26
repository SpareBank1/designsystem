import Table from '@sb1/ffe-tables-react';

() => {
    const data = [
        {
            id: 0,
            name: 'Ola Normann',
            email: 'ola@normann.no',
            info: 'mer spennende info',
        },
        {
            id: 1,
            name: 'Sivert Svensk',
            email: 'sivert@svenska.se',
            info: 'mer spennende info',
            defaultExpanded: true,
        },
        {
            id: 2,
            name: 'Daniel Dansk',
            email: 'daniel@dansk.dk',
        },
        {
            id: 3,
            name: 'Lille Ole',
            email: 'lilleole@gmail.com',
            info: 'mer spennende info',
        },
    ];

    const columns = [
        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },
        {
            key: 'email',
            header: 'E-post',
            hideOnTablet: true,
            hideOnMobile: true,
        },
    ];

    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy
    const expandedContentMapper = row =>
        row.info && <span>Info: {row.info}</span>;

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
            caption="Masse spennende data, med en rad som er ekspandert"
        />
    );
}
