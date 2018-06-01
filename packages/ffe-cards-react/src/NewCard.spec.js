import React from 'react';
import { shallow } from 'enzyme';

import NewCard from './NewCard';
import SparegrisIkon from '@sb1/ffe-icons-react/lib/sparegris-ikon';

const getWrapper = props => shallow(
    <NewCard { ...props } />
);

describe('NewCard', () => {
    it('should render correct class and contain a div with body class', () => {
        const wrapper = getWrapper();

        expect(wrapper.hasClass('ffe-new-card')).toBe(true);
        expect(wrapper.find('div.ffe-new-card__body').exists()).toBe(true);
    });

    it('should render icon, heading and details', () => {
        const wrapper = getWrapper({
            icon: <SparegrisIkon />,
            heading: 'Card header',
            details: 'Card details',
        });

        expect(wrapper.find('.ffe-new-card__icon').exists()).toBe(true);
        expect(wrapper.find('.ffe-new-card__heading').text()).toBe('Card header');
        expect(wrapper.find('.ffe-new-card__details').text()).toBe('Card details');
    });

    it('should add modifying classes when modifiers are given', () => {
        const wrapper = getWrapper({
            condensed: true,
            greyCharcoal: true,
        });

        expect(wrapper.hasClass('ffe-new-card--condensed')).toBe(true);
        expect(wrapper.hasClass('ffe-new-card--grey-charcoal')).toBe(true);
    });

    it('should render my custom element and custom class', () => {
        const wrapper = getWrapper({
            className: 'my-custom-class',
            element: 'div',
        });

        expect(wrapper.find('div').exists()).toBe(true);
        expect(wrapper.hasClass('my-custom-class')).toBe(true);
    });
});
