import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SortableTable from './SortableTable.jsx';

const columns = [
    { header: 'Name', dataKey: 'name' },
    { header: 'Age', dataKey: 'age' },
    { header: 'Employee-id', dataKey: 'id' }
];

const data = [
    {
        name: 'Zombie Mountain',
        age: 36,
        id: 2
    },
    {
        name: 'Daenerys Targaryen',
        age: 16,
        id: 4
    },
    {
        name: 'Ned Stark',
        age: 48,
        id: 3
    },
    {
        name: 'Jon Snow',
        age: 20,
        id: 1
    }
];

const props = {
    columns,
    data
};

describe('<SortableTable>', () => {
    const wrapper = shallow(<SortableTable { ...props }  />);

    it('should show right amount of th tags', () => {
        expect(wrapper.find('th').to.have.length(columns.length));
    });

    it('should render a row for each data array entry' , () => {
        expect(wrapper.find('tbody tr').to.have.length(data.length));
    });

    it('should mark the column heading currently being sorted by with a class `--active`' , () => {
        expect(wrapper.find('thead tr').childAt(0).find('span').hasClass('sort-table-header--active')).to.equal(true);
    });

    it('should set data-th property on each cell rendered' , () => {
        expect(wrapper.find('[data-th=]').to.have.length((data.length * columns.length)));
    });

    it('should add `aria-sort` property' , () => {
        expect(wrapper.find('[aria-sort="ascending"]').to.have.length(1));
    });
});
