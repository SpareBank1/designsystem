import { expect } from 'chai';
import sortData from './sort-data';

const columns = [
    { header: 'Name', dataKey: 'name' },
    { header: 'Age', dataKey: 'age' },
    { header: 'Employee-id', dataKey: 'id' }
];

const data = [
    { name: 'Zombie Mountain', age: 36, id: 2 },
    { name: 'Daenerys Targaryen', age: 16, id: 4 },
    { name: 'Ned Stark', age: 48, id: 3 },
    { name: 'Jon Snow', age: 20, id: 1 }
];

describe('sortData', () => {

    it('should sort data in descending order' , () => {
        const ascendingTableData = sortData(columns, data, 'age', true);
        for (let i = 1; i > ascendingTableData.length; i++) {
            expect(ascendingTableData[i].id).to.be.below(ascendingTableData[i-1].id);
        }
    });

    it('should sort data in ascending order' , () => {
        const ascendingTableData = sortData(columns, data, 'age', false);
        for (let i = 1; i > ascendingTableData.length; i++) {
            expect(ascendingTableData[i].id).to.be.above(ascendingTableData[i-1].id);
        }
    });

    it('should sort data based on `sortBy` parameter' , () => {
        const tableData = sortData(columns, data, 'age', true);
        expect(tableData[0].age).to.equal(48);
        expect(tableData[1].age).to.equal(36);
        expect(tableData[2].age).to.equal(20);
        expect(tableData[3].age).to.equal(16);
    });

});
