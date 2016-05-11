import sinon from 'sinon';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import React from 'react';
import Dropdown from './dropdown';
import createDropdown, { Example } from '../docs/example-component';

describe('<Dropdown />', () => {

    it('should render a select', () => {
        const wrapper = shallow(Example);
        assert.equal(wrapper.find('select').length, 1);
    });

    it('should render a label tag with correct content if passed', () => {
        const wrapper = shallow(Example);
        assert.equal(wrapper.find('label').text(), 'Velg måned');
    });


    it('should render the given options', () => {
        const wrapper = shallow(Example);

        assert.equal(wrapper.find('option').length, 4);
        assert.equal(wrapper.find('option').at(0).text(), 'Januar');
        assert.equal(wrapper.find('option').at(1).text(), 'Februar');
        assert.equal(wrapper.find('option').at(2).text(), 'Mars');
    });

    it('should call the passed function on change', () => {
        const spy = sinon.spy();
        const wrapper = shallow(createDropdown({ onChange: spy }));
        wrapper.find('select').simulate('change');
        assert.equal(spy.calledOnce, true);
    });

    it('should apply the same id to <label> and <select>', () => {
        const wrapper = shallow(Example);

        assert.equal(
            wrapper.find('label').prop('htmlFor'),
            wrapper.find('select').prop('id')
        );
    });
});


describe('<Dropdown /> with externally rendered label and id', () => {

    const externallyGeneratedDropdownId = 'Dropdown--123456789';
    const dropdown = <Dropdown id={ externallyGeneratedDropdownId }>
        <option value="steve">Steve Vai</option>
        <option value="guthrie">Guthrie Govan</option>
        <option value="mateus">Mateus Asato</option>
    </Dropdown>;


    it('should not render its own label if not ', () => {
        const wrapper = shallow(dropdown);
        assert.equal(wrapper.find('label').length, 0);
    });


    it('should apply the externally generated id to select', () => {
        const wrapper = shallow(dropdown);

        assert.equal(
            externallyGeneratedDropdownId,
            wrapper.find('select').prop('id')
        );
    });
});
