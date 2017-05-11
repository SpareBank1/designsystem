import React from 'react';
import { shallow } from 'enzyme';

import Paragraph from './Paragraph';

const defaultProps = { children: 'Test!' };

const getWrapper = (props = {}) => shallow(<Paragraph {...defaultProps} {...props} />);

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

    test('does not add --text-left or --text-center modifiers if lead or subLead props are true', () => {
        const leftLeadWrapper = getWrapper({ textLeft: true, lead: true });
        expect(leftLeadWrapper.hasClass('ffe-body-paragraph--text-left')).toBe(false);

        const centerLeadWrapper = getWrapper({ textCenter: true, lead: true });
        expect(centerLeadWrapper.hasClass('ffe-body-paragraph--text-center')).toBe(false);

        const leftSubLeadWrapper = getWrapper({ textLeft: true, subLead: true });
        expect(leftSubLeadWrapper.hasClass('ffe-body-paragraph--text-left')).toBe(false);

        const centerSubLeadWrapper = getWrapper({ textCenter: true, subLead: true });
        expect(centerSubLeadWrapper.hasClass('ffe-body-paragraph--text-center')).toBe(false);
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
