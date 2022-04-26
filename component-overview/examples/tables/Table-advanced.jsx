import Table from '@sb1/ffe-tables-react';
import { TertiaryButton } from '@sb1/ffe-buttons-react';

() => {
    const Button = ({ children }) => (
        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen
        <TertiaryButton onClick={e => e.stopPropagation()}>
            {children}
        </TertiaryButton>
    );

    const data = [
        {
            id: 0,
            name: 'Ola Normann',
            email: 'ola@normann.no',
            address: 'Gateveien 2',
            age: 23,
            networth: '12 693 005,93',
            button: <Button>poke</Button>,
        },
        {
            id: 1,
            name: 'Sivert Svenska',
            email: 'sivert@svenska.se',
            age: 45,
            networth: '9 005,93',
            button: <Button>poke</Button>,
        },
        {
            id: 2,
            name: 'Daniel Dansk',
            email: 'daniel@dansk.dk',
            address: <Button>legg til adresse</Button>,
            age: 39,
            networth: '8 693 005,93',
            button: <Button>poke</Button>,
        },
        {
            id: 3,
            name: 'Lille Ole',
            email: 'lilleole@gmail.com',
            address: <Button>legg til adresse</Button>,
            age: 9,
            networth: '23,12',
            button: <Button>poke</Button>,
        },
    ];

    const formatNumber = num =>
        Number(
            num
                .toString()
                .replace(/\s/g, '')
                .replace(/,/g, '.'),
        );
    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);

    const columns = [
        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },
        {
            key: 'email',
            header: 'E-post',
            hideOnTablet: true,
            hideOnMobile: true,
        },
        {
            key: 'age',
            header: 'Alder',
            footer: '29',
            alignRight: true,
            hideOnMobile: true,
        },
        {
            key: 'networth',
            header: 'Formue',
            footer: '5 348 760,23',
            alignRight: true,
            compare: currencyCompare,
        },
        { key: 'button', header: 'Poke', notSortable: true },
    ];

    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy
    const expandedContentMapper = row =>
        row.address && <span>Adresse: {row.address}</span>;

    // function is called when table sorting changes.
    const onSort = ({ sortBy, descending, tableData }) => {};

    return (
        <Table
            columns={columns}
            data={data}
            expandedContentMapper={expandedContentMapper}
            sortable={true}
            sortBy={'age'}
            descending={true}
            condensed={true}
            smallHeader={true}
            columnLayoutMobile={true}
            breakpoint={'none'}
            caption="Masse spennende data"
            onSort={onSort}
        />
    );
}
