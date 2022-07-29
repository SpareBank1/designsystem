import React from 'react';
import DescriptionListMultiCol from './DescriptionListMultiCol';
import DescriptionListTerm from './DescriptionListTerm';
import DescriptionListDescription from './DescriptionListDescription';

const getWrapper = props =>
    shallow(
        <DescriptionListMultiCol {...props}>
            <DescriptionListTerm>Porsche</DescriptionListTerm>
            <DescriptionListDescription>
                German car maker
            </DescriptionListDescription>
            <DescriptionListTerm>Toyota</DescriptionListTerm>
            <DescriptionListDescription>
                Japanese toy maker
            </DescriptionListDescription>
        </DescriptionListMultiCol>,
    );

describe('<DescriptionListMultiCol>', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('dl')).toBe(true);
    });
    it('has the correct class', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.hasClass('ffe-description-list-multicol')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
    it('passes props', () => {
        const wrapper = getWrapper({ id: 'that-id' });
        expect(wrapper.prop('id')).toBe('that-id');
        expect(wrapper.html()).toContain('Porsche');
    });
    it('wraps pairs in `div`', () => {
        const wrapper = getWrapper();
        expect(
            wrapper
                .find('.ffe-description-list-multicol__avoid-break')
                .every('div'),
        ).toBe(true);
    });
    it('supports several columns', () => {
        const wrapper = getWrapper();
        expect(
            wrapper.find('.ffe-description-list-multicol__avoid-break'),
        ).toHaveLength(2);
    });
});
