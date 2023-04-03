import React from 'react';
import Tooltip from './Tooltip';
import { spy } from 'sinon';

const defaultProps = { children: 'Tooltip text' };
const getWrapper = props => shallow(<Tooltip {...defaultProps} {...props} />);

describe('<Tooltip>', () => {
    it('renders a div', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('div')).toBe(true);
    });

    it('renders a "?" button', () => {
        const onClick = spy();
        const wrapper = getWrapper({ 'aria-label': 'button-label', onClick });

        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('button').text()).toBe('?');
        expect(wrapper.find('button').hasClass('ffe-tooltip__icon')).toBe(true);
        expect(wrapper.find('button').prop('aria-label')).toBe('button-label');
        expect(wrapper.find('button').prop('type')).toBe('button');

        wrapper.find('button').simulate('click');
        expect(onClick.calledOnce).toBe(true);
    });

    it('renders Collapse', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('Collapse').exists()).toBe(true);
    });

    it('toggles collapse if button is clicked', () => {
        const wrapper = getWrapper();

        expect(wrapper.find('Collapse').prop('isOpen')).toBe(false);
        expect(wrapper.find('button').prop('aria-expanded')).toBe(false);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('Collapse').prop('isOpen')).toBe(true);
        expect(wrapper.find('button').prop('aria-expanded')).toBe(true);
    });

    it('toggles active state if button is clicked', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-tooltip--open')).toBe(false);
        wrapper.find('button').simulate('click');
        expect(wrapper.hasClass('ffe-tooltip--open')).toBe(true);
    });

    it('does not have a tabIndex unless otherwise specified', () => {
        const wrapper = shallow(<Tooltip>Tooltip text</Tooltip>);
        expect(wrapper.find('button').prop('tabIndex')).toBeUndefined();
    });

    it('haves a tabIndex if specified', () => {
        const wrapper = getWrapper({ tabIndex: -1 });
        expect(wrapper.find('button').prop('tabIndex')).toBe(-1);
    });

    it('connects the toggle button to the correct element', () => {
        const wrapper = getWrapper();
        const tipId = wrapper.find('Collapse').prop('id');
        expect(wrapper.find('button').prop('aria-controls')).toBe(tipId);
    });
});
