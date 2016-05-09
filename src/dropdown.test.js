import sinon from 'sinon';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import React from 'react';
import Dropdown from './dropdown';



describe('<Dropdown />', () => {

    const spy = sinon.spy();
    const dropdown = <Dropdown label="Favorite guitarist?" onChange={ spy }>
        <option value="steve">Steve Vai</option>
        <option value="guthrie">Guthrie Govan</option>
        <option value="mateus">Mateus Asato</option>
    </Dropdown>;

    it('should render a select', () => {
        const wrapper = shallow(dropdown);
        assert.equal(wrapper.find('select').length, 1);
    });

    it('should use the passed label', () => {
        const wrapper = shallow(dropdown);
        assert.equal(wrapper.find('label').text(), 'Favorite guitarist?');
    });

    it('should render the given options', () => {
        const wrapper = shallow(dropdown);

        assert.equal(wrapper.find('option').length, 3);
        assert.equal(wrapper.find('option').at(0).text(), 'Steve Vai');
        assert.equal(wrapper.find('option').at(1).text(), 'Guthrie Govan');
        assert.equal(wrapper.find('option').at(2).text(), 'Mateus Asato');
    });

    it('should call the passed function on change', () => {
        const wrapper = shallow(dropdown);
        wrapper.find('select').simulate('change');
        assert.equal(spy.calledOnce, true);
    });

    it('should apply the same id to <label> and <select>', () => {
        const wrapper = shallow(dropdown);

        assert.equal(
            wrapper.find('label').prop('htmlFor'),
            wrapper.find('select').prop('id')
        );
    });
});


describe('<Dropdown /> with externally rendered label and id', () => {

    const spy = sinon.spy();
    const externallyGeneratedDropdownId = 'Dropdown--123456789';
    const dropdown = <Dropdown id={ externallyGeneratedDropdownId } onChange={ spy }>
        <option value="steve">Steve Vai</option>
        <option value="guthrie">Guthrie Govan</option>
        <option value="mateus">Mateus Asato</option>
    </Dropdown>;



    it('should render a select', () => {
        const wrapper = shallow(dropdown);
        assert.equal(wrapper.find('select').length, 1);
    });

    it('should not render its own label', () => {
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
