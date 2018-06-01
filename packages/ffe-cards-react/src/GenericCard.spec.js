import React from 'react';
import { shallow } from 'enzyme';

import GenericCard from './GenericCard';

const getWrapper = props => shallow(
    <GenericCard { ...props }>
        Hello world
    </GenericCard>
);

describe('GenericCard', () => {
    it('should render a button element with correct class and children', () => {
        const wrapper = getWrapper();

        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.hasClass('ffe-generic-card')).toBe(true);
        expect(wrapper.text()).toBe('Hello world');
    });

    it('should render my custom element and custom class', () => {
        const wrapper = getWrapper({ className: 'my-custom-class', element: 'div' });

        expect(wrapper.find('div').exists()).toBe(true);
        expect(wrapper.hasClass('my-custom-class')).toBe(true);
    });
});
