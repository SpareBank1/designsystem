import React from 'react';
import { shallow } from 'enzyme';

import { Tab, TabGroup } from './';

describe('TabGroup', () => {
    it('renders a tab group', () => {
        const wrapper = shallow(
            <TabGroup>
                <Tab>En tab</Tab>
                <Tab>En annen tab</Tab>
            </TabGroup>,
        );
        expect(wrapper.hasClass('ffe-tab-button-group')).toBe(true);
    });

    it('contains a tab button', () => {
        const wrapper = shallow(
            <TabGroup>
                <Tab>En tab</Tab>
                <Tab>En annen tab</Tab>
            </TabGroup>,
        );
        expect(wrapper.contains(<Tab>En tab</Tab>)).toBe(true);
        expect(wrapper.contains(<Tab>En annen tab</Tab>)).toBe(true);
    });

    it('should apply thin modifier class when the thin prop is true', () => {
        const wrapper = shallow(
            <TabGroup thin={true}>
                <Tab>En tab</Tab>
            </TabGroup>,
        );
        expect(wrapper.hasClass('ffe-tab-button-group--thin')).toBe(true);
    });

    it('should accept custom classes', () => {
        const wrapper = shallow(
            <TabGroup className="some-custom-class">
                <Tab>En tab</Tab>
            </TabGroup>,
        );
        expect(wrapper.hasClass('some-custom-class')).toBe(true);
    });
});
