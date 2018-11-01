import React from 'react';
import { shallow } from 'enzyme';
import DescriptionList from './DescriptionList';
import DescriptionListTerm from './DescriptionListTerm';
import DescriptionListDescription from './DescriptionListDescription';

const getWrapper = props =>
    shallow(
        <DescriptionList {...props}>
            <DescriptionListTerm>Porsche</DescriptionListTerm>
            <DescriptionListDescription>
                German car maker
            </DescriptionListDescription>
            <DescriptionListTerm>Toyota</DescriptionListTerm>
            <DescriptionListDescription>
                Japanese toy maker
            </DescriptionListDescription>
        </DescriptionList>,
    );

describe('<DescriptionList>', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('dl')).toBe(true);
    });
    it('has the correct class', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.hasClass('ffe-description-list')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
    it('sets the correct class for modifier props', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-description-list--md')).toBe(false);
        expect(wrapper.hasClass('ffe-description-list--lg')).toBe(false);

        wrapper.setProps({ medium: true, large: false });
        expect(wrapper.hasClass('ffe-description-list--md')).toBe(true);
        expect(wrapper.hasClass('ffe-description-list--lg')).toBe(false);

        wrapper.setProps({ medium: false, large: true });
        expect(wrapper.hasClass('ffe-description-list--md')).toBe(false);
        expect(wrapper.hasClass('ffe-description-list--lg')).toBe(true);
    });
    it('passes props', () => {
        const wrapper = getWrapper({ id: 'that-id' });
        expect(wrapper.prop('id')).toBe('that-id');
        expect(wrapper.html()).toContain('Porsche');
    });
});
