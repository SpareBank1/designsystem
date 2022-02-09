import React from 'react';

import { Tab, TabGroup } from './';

describe('TabGroup', () => {
    it('renders a tab group', () => {
        const wrapper = shallow(
            <TabGroup>
                <Tab aria-controls="div1">En tab</Tab>
                <Tab aria-controls="div2">En annen tab</Tab>
            </TabGroup>,
        );
        expect(wrapper.hasClass('ffe-tab-group')).toBe(true);
    });

    it('contains a tab button', () => {
        const wrapper = shallow(
            <TabGroup>
                <Tab aria-controls="div1">En tab</Tab>
                <Tab aria-controls="div2">En annen tab</Tab>
            </TabGroup>,
        );
        expect(wrapper.contains(<Tab aria-controls="div1">En tab</Tab>)).toBe(
            true,
        );
        expect(
            wrapper.contains(<Tab aria-controls="div2">En annen tab</Tab>),
        ).toBe(true);
    });

    it('should apply thin modifier class when the thin prop is true', () => {
        const wrapper = shallow(
            <TabGroup thin={true}>
                <Tab aria-controls="div">En tab</Tab>
            </TabGroup>,
        );
        expect(wrapper.hasClass('ffe-tab-group--thin')).toBe(true);
    });

    it('should accept custom classes', () => {
        const wrapper = shallow(
            <TabGroup className="some-custom-class">
                <Tab aria-controls="div">En tab</Tab>
            </TabGroup>,
        );
        expect(wrapper.hasClass('some-custom-class')).toBe(true);
    });
});
