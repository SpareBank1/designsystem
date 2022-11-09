import React from 'react';

import BaseRadioButton from './BaseRadioButton';

const defaultProps = {
    children: 'Some choice',
    name: 'choice',
    value: 'value',
};

const getWrapper = props =>
    shallow(<BaseRadioButton {...defaultProps} {...props} />);

describe('<BaseRadioButton />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });
    it('is checked undefined if checked prop is undefined and selectedValue is undefined', () => {
        const wrapper = getWrapper({});

        expect(wrapper.find('input').props()).toHaveProperty(
            'checked',
            undefined,
        );
        wrapper.setProps({ checked: true });

        expect(wrapper.find('input').props()).toHaveProperty('checked', true);
    });
    it('is checked if checked prop is true', () => {
        const wrapper = getWrapper({ checked: false });

        expect(wrapper.find('input').props()).toHaveProperty('checked', false);
        wrapper.setProps({ checked: true });

        expect(wrapper.find('input').props()).toHaveProperty('checked', true);
    });
    it('is checked if selectedValue equals value', () => {
        const wrapper = getWrapper({ selectedValue: 'other_value' });
        expect(wrapper.find('input').props()).toHaveProperty('checked', false);

        wrapper.setProps({ selectedValue: 'value' });
        expect(wrapper.find('input').props()).toHaveProperty('checked', true);
    });
    it('is not checked if not checked and selectedValue !== value', () => {
        const wrapper = getWrapper({ checked: false, selectedValue: 'nope' });
        expect(wrapper.find('input').props()).toHaveProperty('checked', false);
    });
    it('is not checked if checked === undefined and selectedValue is falsy, but not undefined', () => {
        const wrapperWithNull = getWrapper({ selectedValue: null });
        expect(wrapperWithNull.find('input').props()).toHaveProperty(
            'checked',
            false,
        );

        const wrapperWithEmptyString = getWrapper({ selectedValue: '' });
        expect(wrapperWithEmptyString.find('input').props()).toHaveProperty(
            'checked',
            false,
        );
    });
    it('accepts boolean values and checks the input if it is selected', () => {
        const wrapper = getWrapper({ selectedValue: true, value: true });
        expect(wrapper.find('input').props()).toHaveProperty('checked', true);
    });
    it('accepts boolean values and does not check the input if it is not selected', () => {
        const wrapper = getWrapper({ selectedValue: 'false', value: true });
        expect(wrapper.find('input').props()).toHaveProperty('checked', false);
    });

    describe('id', () => {
        it('is unique across instances', () => {
            const oneId = getWrapper()
                .find('input')
                .prop('id');
            const anotherId = getWrapper()
                .find('input')
                .prop('id');

            expect(oneId).not.toBe(anotherId);
        });
        it('is stable per instance', () => {
            const wrapper = getWrapper();
            const idBeforeUpdate = wrapper.find('input').prop('id');

            wrapper.setProps({ selectedValue: 'red' });
            const idAfterUpdate = wrapper.find('input').prop('id');
            expect(idBeforeUpdate).toBe(idAfterUpdate);
        });
    });
    describe('tooltip', () => {
        it('does not render if not present', () => {
            const wrapper = getWrapper({ tooltip: undefined });
            expect(
                wrapper
                    .find('ForwardRef[aria-label="Vis hjelpetekst"]')
                    .exists(),
            ).toBe(false);
        });
        it('renders if present', () => {
            const wrapper = getWrapper({ tooltip: 'Tip generously' });
            expect(
                wrapper
                    .find('ForwardRef[aria-label="Vis hjelpetekst"]')
                    .exists(),
            ).toBe(true);
        });
        it('does not add the correct class if not present', () => {
            const wrapper = getWrapper({ tooltip: undefined });
            expect(
                wrapper.find('.ffe-radio-button--with-tooltip').exists(),
            ).toBe(false);
        });
        it('adds the correct class if present', () => {
            const wrapper = getWrapper({ tooltip: 'Tip generously' });
            expect(
                wrapper.find('.ffe-radio-button--with-tooltip').exists(),
            ).toBe(true);
        });
    });
});
