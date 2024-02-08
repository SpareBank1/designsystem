import React from 'react';
import BaseMessage from './BaseMessage';
import { Icon } from '@sb1/ffe-icons-react';
const defaultProps = {
    type: 'info',
    icon: <Icon fileUrl="priority_high" />,
};
const getWrapper = props =>
    shallow(<BaseMessage {...defaultProps} {...props} />);

describe('<BaseMessage />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });
    it('renders the correct classes by default', () => {
        const wrapper = getWrapper({ title: 'test title' });
        expect(wrapper.hasClass('ffe-message-box')).toBe(true);

        ['info', 'error', 'success', 'tips'].forEach(type => {
            const typedWrapper = getWrapper({ type, title: 'test' });
            expect(
                typedWrapper.find(`.ffe-message-box--${type}`).exists(),
            ).toBe(true);
            expect(typedWrapper.find('.ffe-message-box__icon').exists()).toBe(
                true,
            );
        });
    });
    it('renders with correct title class', () => {
        const wrapper = getWrapper({ title: 'test title' });
        expect(wrapper.find(`.ffe-message-box__title`).exists()).toBe(true);
    });
    it('renders an icon by default', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.ffe-message-box__icon').exists()).toBe(true);
    });
    it('renders the container with role="group" by default', () => {
        const wrapper = getWrapper();
        expect(wrapper.prop('role')).toBe('group');
    });
    it('renders a title if specified', () => {
        const wrapper = getWrapper({ title: 'test title' });
        expect(wrapper.find('.ffe-message-box__title').text()).toBe(
            'test title',
        );
    });
    it('renders children if specified', () => {
        const wrapper = getWrapper({ children: <p>children</p> });
        expect(wrapper.text()).toContain('children');
    });
    it('renders onColoredBg styling if specified', () => {
        const wrapper = getWrapper({ onColoredBg: true });
        expect(wrapper.find('.ffe-message-box--coloredbg').exists()).toBe(true);
    });
});
