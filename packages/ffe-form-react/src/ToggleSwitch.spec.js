import React from 'react';
import { shallow } from 'enzyme';

import ToggleSwitch from './ToggleSwitch';

const getWrapper = props =>
    shallow(<ToggleSwitch {...props}>Hello world</ToggleSwitch>);

describe('<ToggleSwitch />', () => {
    it('should render a checkbox', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
    });

    it('should render a default value if passed', () => {
        let wrapper = getWrapper();

        expect(wrapper.find('input').prop('checked')).toBe(undefined);

        wrapper = getWrapper({ checked: true });

        expect(wrapper.find('input').prop('checked')).toBe(true);
    });

    it('should apply the same id to <label> and <input>', () => {
        const wrapper = getWrapper({ name: 'Some text goes here' });

        expect(wrapper.find('label').prop('htmlFor')).toBe(
            wrapper.find('input').prop('id'),
        );
    });

    it('should apply an unique id for each instance', () => {
        const wrapper1 = getWrapper({ name: 'Some text goes here' });
        const wrapper2 = getWrapper({ name: 'Some other text goes here' });

        expect(wrapper1.find('input').prop('id')).not.toBe(
            wrapper2.find('input').prop('id'),
        );
    });

    it('should not change id when re-rendering an instance', () => {
        const wrapper = getWrapper({ name: 'Some text goes here' });
        const id = wrapper.find('input').prop('id');

        // ShallowWrapper.update() alone does not force a re-render, it seems.
        wrapper.instance().forceUpdate();
        wrapper.update();
        wrapper.setProps({});

        expect(wrapper.find('input').prop('id')).toBe(id);
    });

    it('should allow to override the id', () => {
        const id = 'this-is-not-a-generated-id';
        const wrapper = getWrapper({ id, name: 'Some text goes here' });

        expect(wrapper.find('label').prop('htmlFor')).toBe(id);
        expect(wrapper.find('input').prop('id')).toBe(id);
    });

    it('should set arbitrary props (rest) on input', () => {
        const wrapper = getWrapper({
            name: 'toggle',
            randomProp: 'false',
            tabIndex: -1,
        });

        expect(wrapper.find('input').prop('name')).toBe('toggle');
        expect(wrapper.find('input').prop('randomProp')).toBe('false');
        expect(wrapper.find('input').prop('tabIndex')).toBe(-1);
    });

    it('should render children', () => {
        const wrapper = getWrapper();

        expect(wrapper.find('label').prop('children')).toBe('Hello world');
    });
});
