import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

const getWrapper = props => shallow(<Checkbox {...props} />);

describe('<Checkbox />', () => {
    it('should render a input', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it('should call onChange when clicked', () => {
        const spy = jest.fn();
        const wrapper = getWrapper({ onChange: spy });

        wrapper.find('input').simulate('change');

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call onChange with the correct parameter', () => {
        const mockEvent = { target: { value: true } };
        const spy = jest.fn();

        const wrapper = getWrapper({ onChange: spy });

        wrapper.find('input').simulate('change', mockEvent);

        expect(spy.mock.calls[0][0]).toBe(mockEvent);
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

    it('should support noMargins', () => {
        const wrapper = getWrapper({ noMargins: false });

        expect(wrapper.find('.ffe-checkbox--no-margin').exists()).toBe(false);

        wrapper.setProps({ noMargins: true });

        expect(wrapper.find('.ffe-checkbox--no-margin').exists()).toBe(true);
    });

    it('should support inline', () => {
        const wrapper = getWrapper();

        expect(wrapper.find('.ffe-checkbox--inline').exists()).toBe(true);

        wrapper.setProps({ inline: false });

        expect(wrapper.find('.ffe-checkbox--inline').exists()).toBe(false);

        wrapper.setProps({ inline: true });

        expect(wrapper.find('.ffe-checkbox--inline').exists()).toBe(true);
    });

    it('should support invalid', () => {
        const wrapper = getWrapper({ invalid: false });

        expect(wrapper.find('input').prop('aria-invalid')).toBe('false');

        wrapper.setProps({ invalid: true });

        expect(wrapper.find('input').prop('aria-invalid')).toBe('true');
    });

    it('setting "aria-invalid" should override "invalid"', () => {
        const wrapper = getWrapper({ invalid: true, 'aria-invalid': 'false' });

        expect(wrapper.find('input').prop('aria-invalid')).toBe('false');

        wrapper.setProps({ invalid: false, 'aria-invalid': 'true' });

        expect(wrapper.find('input').prop('aria-invalid')).toBe('true');
    });

    it('should set arbitrary props (rest) on input', () => {
        const wrapper = getWrapper({
            name: 'checkbox',
            iDontReallyDoAnything: 'false',
            tabIndex: -1,
        });

        expect(wrapper.find('input').prop('name')).toBe('checkbox');
        expect(wrapper.find('input').prop('iDontReallyDoAnything')).toBe(
            'false',
        );
        expect(wrapper.find('input').prop('tabIndex')).toBe(-1);
    });

    it('should render children if it is a function', () => {
        const wrapper = shallow(
            <Checkbox>
                { labelProps => (
// eslint-disable-next-line jsx-a11y/label-has-for
                    <label {...labelProps}>Hello world</label>
                ) }
            </Checkbox>
        );

        expect(wrapper.find('label').prop('children')).toBe('Hello world');
    });

    it('should render with a hidden label', () => {
        const wrapper = getWrapper({ 'aria-label': 'I am label', hiddenLabel: true });

        const label = wrapper.find('.ffe-checkbox--hidden-label');
        const input = wrapper.find('.ffe-hidden-checkbox');

        expect(label.exists()).toBe(true);
        expect(label.children()).toHaveLength(0);
        expect(input.exists()).toBe(true);
        expect(input.prop('aria-label')).toBe('I am label');
    });
});
