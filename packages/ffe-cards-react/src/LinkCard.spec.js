import React from 'react';
import { shallow } from 'enzyme';

import LinkCard from './LinkCard';

const getWrapper = (props) => shallow(<LinkCard {...props} />);

describe('<LinkCard />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.length).toBe(1);
    });
    it('renders correct size classes', () => {
        const mediumWrapper = getWrapper({ size: 'medium' });
        expect(mediumWrapper.hasClass('ffe-link-card--medium')).toBe(true);

        const largeWrapper = getWrapper({ size: 'large' });
        expect(largeWrapper.hasClass('ffe-link-card--large')).toBe(true);
    });
    it('renders correct modifier classes', () => {
        const wrapper = getWrapper({ center: true, plain: true });
        expect(wrapper.hasClass('ffe-link-card--center')).toBe(true);
        expect(wrapper.hasClass('ffe-link-card--plain')).toBe(true);
    });
    it('renders status if provided', () => {
        const wrapper = getWrapper({ status: 'Fornyelse' });
        expect(wrapper.find('.ffe-link-card__status').length).toBe(1);
        expect(wrapper.find('.ffe-link-card__status').text()).toBe('Fornyelse');
    });
    it('renders icon if provided', () => {
        const wrapper = getWrapper({ icon: <svg className="some-icon" /> });
        expect(wrapper.find('.ffe-link-card__icon').length).toBe(1);
        expect(wrapper.find('.ffe-link-card__icon').hasClass('some-icon')).toBe(true);
    });
    it('renders heading if provided', () => {
        const wrapper = getWrapper({ heading: 'Heading' });
        expect(wrapper.find('.ffe-link-card__heading').length).toBe(1);
        expect(wrapper.find('.ffe-link-card__heading').text()).toBe('Heading');
    });
    it('renders sub-heading if provided', () => {
        const wrapper = getWrapper({ subHeading: 'Sub-heading' });
        expect(wrapper.find('.ffe-link-card__sub-heading').length).toBe(1);
        expect(wrapper.find('.ffe-link-card__sub-heading').text()).toBe('Sub-heading');
    });
    it('renders details if provided', () => {
        const wrapper = getWrapper({ details: 'Details' });
        expect(wrapper.find('.ffe-link-card__details').length).toBe(1);
        expect(wrapper.find('.ffe-link-card__details').text()).toBe('Details');
    });
    it('renders number if provided', () => {
        const wrapper = getWrapper({ number: 1337 });
        expect(wrapper.find('.ffe-link-card__number').length).toBe(1);
        expect(wrapper.find('.ffe-link-card__number').text()).toBe('1337');
    });
    it('passes props as expected', () => {
        const wrapper = getWrapper({ role: 'button', className: 'kerfuffle' });
        expect(wrapper.find('.ffe-link-card').hasClass('kerfuffle')).toBe(true);
        expect(wrapper.find('.ffe-link-card').prop('role')).toBe('button');
    });
    it('overrides the element if provided', () => {
        const buttonWrapper = getWrapper({ elementType: 'button' });
        expect(buttonWrapper.is('button')).toBe(true);

        const SampleComponent = props => <a {...props} />;
        const componentWrapper = getWrapper({ elementType: SampleComponent });
        expect(componentWrapper.is('SampleComponent')).toBe(true);
    });
});