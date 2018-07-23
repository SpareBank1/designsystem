import React from 'react';
import { shallow } from 'enzyme';

import { TabButton, TabButtonGroup } from './';

describe('TabButtonGroup', () => {
    it('renders a tab group', () => {
        const wrapper = shallow(
            <TabButtonGroup>
                <TabButton>En tab</TabButton>
                <TabButton>En annen tab</TabButton>
            </TabButtonGroup>,
        );
        expect(wrapper.hasClass('ffe-tab-button-group')).toBe(true);
    });

    it('contains a tab button', () => {
        const wrapper = shallow(
            <TabButtonGroup>
                <TabButton>En tab</TabButton>
                <TabButton>En annen tab</TabButton>
            </TabButtonGroup>,
        );
        expect(wrapper.contains(<TabButton>En tab</TabButton>)).toBe(true);
        expect(wrapper.contains(<TabButton>En annen tab</TabButton>)).toBe(
            true,
        );
    });

    it('should apply thin modifier class when the thin prop is true', () => {
        const wrapper = shallow(
            <TabButtonGroup thin={true}>
                <TabButton>En tab</TabButton>
            </TabButtonGroup>,
        );
        expect(wrapper.hasClass('ffe-tab-button-group--thin')).toBe(true);
    });

    it('should accept custom classes', () => {
        const wrapper = shallow(
            <TabButtonGroup className="some-custom-class">
                <TabButton>En tab</TabButton>
            </TabButtonGroup>,
        );
        expect(wrapper.hasClass('some-custom-class')).toBe(true);
    });
});
