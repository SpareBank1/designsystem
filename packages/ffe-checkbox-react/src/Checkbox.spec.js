import React from 'react';
import { shallow, mount } from 'enzyme';

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

    it('should stop event propagation when stopPropagation is true', () => {
        const onClickOfWrapper = jest.fn();
        const onClickOfCheckbox = jest.fn();
        const wrapper = mount(
            <div onClick={onClickOfWrapper} role="presentation">
                <Checkbox
                    onClick={onClickOfCheckbox}
                    stopPropagation={true}
                />
            </div>
        );

        wrapper.find('div').find('input').simulate('click');

        expect(onClickOfWrapper).toHaveBeenCalledTimes(0);
        expect(onClickOfCheckbox).toHaveBeenCalled();
    });
});
