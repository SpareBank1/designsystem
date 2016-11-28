import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import TableRowExpandable from './table-row-expandable.jsx';

const props = {
    cells: ['Banana', '12kr/kg'],
    expanded: false,
    handleKeyPress: () => null,
    onClick: () => null,
    expandableContent: <div>
        <h4>nutrition facts</h4>
        <p>Cholesterol: 0 mg, Sodium: 1 mg</p>
    </div>
};

describe('<TableRowExpandable>', () => {

    it('should only show one tr if content is not expanded', () => {
        const wrapper = shallow(<TableRowExpandable { ...props }/>);
        assert.equal(wrapper.find('tbody tr').length, 1);
    });

    it('should show two tr if content is expanded', () => {
        const wrapper = shallow(<TableRowExpandable { ...props } expanded={ true }/>);
        assert.equal(wrapper.find('tbody tr').length, 2);
    });

    it('should add class `--open` to expand-icon if expanded', () => {
        const wrapper = shallow(<TableRowExpandable { ...props } expanded={ true }/>);
        assert.equal(wrapper.find('.expand-icon').hasClass('expand-icon--open'), true);
    });

});
