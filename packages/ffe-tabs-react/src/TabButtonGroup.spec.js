import React from 'react';

import { TabButton, TabButtonGroup } from './';

describe('TabButtonGroup', () => {
    it('renders a tab group', () => {
        const wrapper = shallow(
            <TabButtonGroup>
                <TabButton aria-controls="div1">En tab</TabButton>
                <TabButton aria-controls="div2">En annen tab</TabButton>
            </TabButtonGroup>,
        );
        expect(wrapper.hasClass('ffe-tab-button-group')).toBe(true);
    });

    it('contains a tab button', () => {
        const wrapper = shallow(
            <TabButtonGroup>
                <TabButton aria-controls="div1">En tab</TabButton>
                <TabButton aria-controls="div2">En annen tab</TabButton>
            </TabButtonGroup>,
        );
        expect(
            wrapper.contains(
                <TabButton aria-controls="div1">En tab</TabButton>,
            ),
        ).toBe(true);
        expect(
            wrapper.contains(
                <TabButton aria-controls="div2">En annen tab</TabButton>,
            ),
        ).toBe(true);
    });

    it('should apply thin modifier class when the thin prop is true', () => {
        const wrapper = shallow(
            <TabButtonGroup thin={true}>
                <TabButton aria-controls="div1">En tab</TabButton>
            </TabButtonGroup>,
        );
        expect(wrapper.hasClass('ffe-tab-button-group--thin')).toBe(true);
    });

    it('should accept custom classes', () => {
        const wrapper = shallow(
            <TabButtonGroup className="some-custom-class">
                <TabButton aria-controls="div1">En tab</TabButton>
            </TabButtonGroup>,
        );
        expect(wrapper.hasClass('some-custom-class')).toBe(true);
    });
});
