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
});
