import React from 'react';
import { shallow } from 'enzyme';
import DescriptionListMultiCol from './DescriptionListMultiCol';

const getWrapper = props =>
    shallow(
        <DescriptionListMultiCol {...props}>
            <dt>Porsche</dt>
            <dd>German car maker</dd>
            <dt>Toyota</dt>
            <dd>Japanese toy maker</dd>
        </DescriptionListMultiCol>,
    );

describe('<DescriptionListMultiCol>', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('div')).toBe(true);
    });
    it('has the correct class', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.hasClass('ffe-description-list-multicol')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
    it('passes props', () => {
        const wrapper = getWrapper({ id: 'that-id' });
        expect(wrapper.prop('id')).toBe('that-id');
        expect(wrapper.text()).toContain('Porsche');
    });
    it('wraps pairs in `dl`', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.ffe-description-list-multicol__avoid-break').every('dl')).toBe(true);
    });
    it('supports several columns', () => {
        const wrapper = getWrapper();
        expect(
            wrapper.find('.ffe-description-list-multicol__avoid-break'),
        ).toHaveLength(2);
    });
});
