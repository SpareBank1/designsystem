import React from 'react';

import RadioBlock from './RadioBlock';

const defaultProps = {
    children: 'Some choice',
    label: 'Label',
    name: 'choice',
    value: 'value',
};

const getWrapper = props =>
    shallow(<RadioBlock {...defaultProps} {...props} />);

describe('<RadioBlock />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });
    describe('id', () => {
        it('is unique across instances', () => {
            const oneId = getWrapper().find('input').prop('id');
            const anotherId = getWrapper().find('input').prop('id');

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
    describe('children', () => {
        it('does not add a class if present', () => {
            const wrapper = getWrapper({ children: 'hi there' });
            expect(
                wrapper.find('.ffe-radio-block__wrapper--empty').exists(),
            ).toBe(false);
        });
        it('adds a class if not present', () => {
            const wrapper = getWrapper({ children: undefined, checked: true });
            expect(
                wrapper.find('.ffe-radio-block__wrapper--empty').exists(),
            ).toBe(true);
        });
        it('does not render if not selected', () => {
            const wrapper = getWrapper({
                children: 'sample children',
                checked: false,
            });
            expect(wrapper.text()).not.toContain('sample children');
        });
        it('is rendered if selected', () => {
            const wrapper = getWrapper({
                children: 'sample children',
                checked: true,
            });
            expect(wrapper.text()).toContain('sample children');
        });
        it('is rendered if showChildren is true', () => {
            const wrapper = getWrapper({
                children: 'sample children',
                showChildren: true,
            });
            expect(wrapper.text()).toContain('sample children');
        });
    });
});
