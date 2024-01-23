import React from 'react';
import Icon from './Icon';

const getWrapper = props => shallow(<Icon {...props} />);

describe('Icon', () => {
    it('renders without crashing and with right class', () => {
        const wrapper = getWrapper({ fileUrl: '<svg></svg>' });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.hasClass('ffe-icons')).toBe(true);
    });
    it('renders with role="img', () => {
        const wrapper = getWrapper({ filePath: '<svg></svg>' });
        expect(wrapper.props()).toHaveProperty('role', 'img');
    });
    it('renders correct classname based on size-prop', () => {
        const wrapper = getWrapper({ filePath: '<svg></svg>', size: 'sm' });
        expect(wrapper.hasClass('ffe-icons--sm')).toBe(true);
    });
    it('applies additional CSS classes when provided', () => {
        const wrapper = getWrapper({
            fileUrl: '<svg></svg>',
            size: 'md',
            className: 'my-class',
        });
        expect(wrapper.hasClass('ffe-icons ffe-icons--md my-class')).toBe(true);
    });
});
