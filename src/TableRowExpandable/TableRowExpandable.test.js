import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import TableRowExpandable from './TableRowExpandable';

const props = {};

describe('<TableRowExpandable>', () => {

    it('should toggle expand', () => {
        const wrapper = shallow(<TableRowExpandable { ...props }/>);
    });

});
