import React from 'react';
import Spinner from '.';

const getWrapper = props => shallow(<Spinner {...props} />);

describe('<Spinner />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('span')).toBe(true);
    });
    it('renders classes correctly', () => {
        const wrapper = getWrapper({ className: 'test-class' });
        expect(wrapper.hasClass('ffe-loading-spinner')).toBe(true);
        expect(wrapper.hasClass('test-class')).toBe(true);
    });
    it('renders a large spinner', () => {
        const wrapper = getWrapper({ large: true });

        expect(wrapper.hasClass('ffe-loading-spinner--large')).toBe(true);
    });
    it('passes props correctly', () => {
        const wrapper = getWrapper({ id: 'test-id' });
        expect(wrapper.prop('id')).toBe('test-id');
    });
});
