import React from 'react';
import { shallow } from 'enzyme';
import MessageBox from './MessageBox';

const defaultProps = { type: 'info', icon: <svg id="icon" /> };
const getWrapper = props =>
    shallow(<MessageBox {...defaultProps} {...props} />);

describe('<MessageBox />', () => {
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
                typedWrapper.find(`.ffe-message-box__box--${type}`).exists(),
            ).toBe(true);
            expect(
                typedWrapper.find(`.ffe-message-box__icon--${type}`).exists(),
            ).toBe(true);
            expect(
                typedWrapper.find(`.ffe-message-box__title--${type}`).exists(),
            ).toBe(true);
        });
    });
    it('renders an icon by default', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.ffe-message-box__icon').exists()).toBe(true);
    });
    it('renders a title if specified', () => {
        const wrapper = getWrapper({ title: 'test title' });
        expect(wrapper.find('.ffe-h4').text()).toBe('test title');
    });
    it('renders children if specified', () => {
        const wrapper = getWrapper({ children: <p>children</p> });
        expect(wrapper.text()).toContain('children');
    });
});
