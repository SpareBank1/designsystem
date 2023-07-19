import React from 'react';
import InputTextLike from './InputTextLike';

const getWrapper = props => shallow(<InputTextLike {...props} />);

describe('<InputTextLike />', () => {
    it('renders an input element', () => {
        const wrapper = getWrapper({
            ariaLabel: 'aria-label',
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('input')).toBe(true);
        expect(wrapper.hasClass('ffe-input-field')).toBe(true);
        expect(wrapper.hasClass('ffe-input-field--text-like')).toBe(true);
    });

    it('passes props', () => {
        const wrapper = getWrapper({
            ariaLabel: 'aria-label',
            className: 'app-input',
        });
        expect(wrapper.hasClass('app-input')).toBe(true);
        expect(wrapper.prop('aria-label')).toBe('aria-label');
    });
});
