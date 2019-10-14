import React from 'react';
import { shallow } from 'enzyme';

import Paragraph from './Paragraph';

const defaultProps = { children: 'Test!' };

const getWrapper = (props = {}) =>
    shallow(<Paragraph {...defaultProps} {...props} />);

describe('<Paragraph />', () => {
    test('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.length).toBe(1);
    });

    test('adds ffe-body-paragraph class if lead and subLead props are false (or not set)', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-body-paragraph')).toBe(true);
    });

    test('adds --text-center modifier if textCenter prop is true', () => {
        const wrapper = getWrapper({ textCenter: true });
        expect(wrapper.hasClass('ffe-body-paragraph--text-center')).toBe(true);
    });

    test('adds --text-left modifier if textLeft prop is true', () => {
        const wrapper = getWrapper({ textLeft: true });
        expect(wrapper.hasClass('ffe-body-paragraph--text-left')).toBe(true);
    });

    test('adds ffe-lead-paragraph class if lead prop is true', () => {
        const wrapper = getWrapper({ lead: true });
        expect(wrapper.hasClass('ffe-lead-paragraph')).toBe(true);
    });

    test('adds ffe-sub-lead-paragraph class if lead prop is true', () => {
        const wrapper = getWrapper({ subLead: true });
        expect(wrapper.hasClass('ffe-sub-lead-paragraph')).toBe(true);
    });
});
