import Table from '@sb1/ffe-tables-react';

() => {
    const columns = [
        { key: 'name', header: 'Navn' },
        { key: 'age', header: 'Alder' },
    ];
    const data = [
        { name: 'Anders', age: 32 },
        { name: 'Erik', age: 25 },
        { name: 'Gunn', age: 29 },
        { name: 'Safi', age: 42 },
        { name: 'Sandra', age: 42 },
    ];

    return <Table caption="Utviklere" columns={columns} data={data} />;
}
