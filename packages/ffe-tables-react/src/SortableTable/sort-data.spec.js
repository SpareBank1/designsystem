import sortData from './sort-data';

const columns = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    { key: 'id', header: 'Employee-id' },
    {
        key: 'rand',
        header: 'A random number with thousand separator needs a custom compare',
        compare: (a, b) => a.replace(/\s/g, '') - b.replace(/\s/g, ''),
    },
];

const data = [
    { name: 'Zombie Mountain', age: 36, id: 2, rand: '69 873' },
    { name: 'Daenerys Targaryen', age: 16, id: 4, rand: '9 156' },
    { name: 'Ned Stark', age: 48, id: 3, rand: '3 863 914' },
    { name: 'Jon Snow', age: 20, id: 1, rand: '145 678' },
];

describe('sortData', () => {
    it('should sort data in descending order', () => {
        const ascendingTableData = sortData(columns, data, 'age', true);
        for (let i = 1; i > ascendingTableData.length; i++) {
            expect(ascendingTableData[i].id).toBeLessThan(
                ascendingTableData[i - 1].id,
            );
        }
    });

    it('should sort data in ascending order', () => {
        const ascendingTableData = sortData(columns, data, 'age', false);
        for (let i = 1; i > ascendingTableData.length; i++) {
            expect(ascendingTableData[i].id).toBeGreaterThan(
                ascendingTableData[i - 1].id,
            );
        }
    });

    it('should sort data based on `sortBy` parameter', () => {
        const tableData = sortData(columns, data, 'age', true);
        expect(tableData[0].age).toBe(48);
        expect(tableData[1].age).toBe(36);
        expect(tableData[2].age).toBe(20);
        expect(tableData[3].age).toBe(16);
    });

    it('should sort data even though an attribute is not set', () => {
        data[3] = { name: 'Jon Snow', id: 1, rand: '145 678' }; // no age key
        const tableData = sortData(columns, data, 'age', false);
        expect(tableData[0].age).toBe(16);
        expect(tableData[1].age).toBe(36);
        expect(tableData[2].age).toBe(48);
        expect(tableData[3].age).toBe(undefined);
    });

    it('should sort data with a custom compare function when provided', () => {
        const tableData = sortData(columns, data, 'rand', false);
        expect(tableData[0].rand).toBe('9 156');
        expect(tableData[1].rand).toBe('69 873');
        expect(tableData[2].rand).toBe('145 678');
        expect(tableData[3].rand).toBe('3 863 914');
    });
});
