import React from 'react';
import { shallow } from 'enzyme';

import { Tab } from './';

describe('Tab', () => {
    it('should render a tab', () => {
        const wrapper = shallow(<Tab>En tab</Tab>);
        expect(wrapper.hasClass('ffe-tab')).toBe(true);
    });

    it('should render a condensed tab', () => {
        const wrapper = shallow(<Tab condensed={true}>En tab</Tab>);
        expect(wrapper.hasClass('ffe-tab--condensed')).toBe(true);
    });

    it('should render a selected tab', () => {
        const wrapper = shallow(<Tab selected={true}>En tab</Tab>);
        expect(wrapper.hasClass('ffe-tab--selected')).toBe(true);
    });

    it('passes any prop on to a tab', () => {
        const tab = shallow(<Tab data-analytics-track="logMe">En tab</Tab>);
        expect(tab.prop('data-analytics-track')).toBe('logMe');
    });
});
