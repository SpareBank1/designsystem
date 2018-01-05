import React from 'react';
import { shallow } from 'enzyme';

import ProductCard from './ProductCard';

const getWrapper = props => shallow(<ProductCard {...props} />);

describe('<ProductCard />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.length).toBe(1);
    });
    it('renders status if provided', () => {
        const wrapper = getWrapper({ status: 'Fornyelse' });
        expect(wrapper.find('.ffe-product-card__status').length).toBe(1);
        expect(wrapper.find('.ffe-product-card__status').text()).toBe(
            'Fornyelse',
        );
    });
    it('renders icon if provided', () => {
        const wrapper = getWrapper({ icon: <svg className="some-icon" /> });
        expect(wrapper.find('.ffe-product-card__icon').length).toBe(1);
        expect(
            wrapper.find('.ffe-product-card__icon').hasClass('some-icon'),
        ).toBe(true);
    });
    it('renders heading if provided', () => {
        const wrapper = getWrapper({ heading: 'Heading' });
        expect(wrapper.find('.ffe-product-card__heading').length).toBe(1);
        expect(wrapper.find('.ffe-product-card__heading').text()).toBe(
            'Heading',
        );
    });
    it('renders details if provided', () => {
        const wrapper = getWrapper({ details: 'Details' });
        expect(wrapper.find('.ffe-product-card__details').length).toBe(1);
        expect(wrapper.find('.ffe-product-card__details').text()).toBe(
            'Details',
        );
    });
    it('passes props as expected', () => {
        const wrapper = getWrapper({ role: 'button', className: 'kerfuffle' });
        expect(wrapper.find('.ffe-product-card').hasClass('kerfuffle')).toBe(
            true,
        );
        expect(wrapper.find('.ffe-product-card').prop('role')).toBe('button');
    });
    it('overrides the element if provided', () => {
        const buttonWrapper = getWrapper({ elementType: 'button' });
        expect(buttonWrapper.is('button')).toBe(true);

        const SampleComponent = props => <a {...props} />;
        const componentWrapper = getWrapper({ elementType: SampleComponent });
        expect(componentWrapper.is('SampleComponent')).toBe(true);
    });
});
