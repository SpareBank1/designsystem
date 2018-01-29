import React from 'react';
import { shallow } from 'enzyme';

import { Tab } from './';

describe('Tab', () => {
    it('should render a tab button', () => {
        const wrapper = shallow(<Tab>En tab</Tab>);
        expect(wrapper.hasClass('ffe-tab-button')).toBe(true);
    });

    it('should render a condensed tab button', () => {
        const wrapper = shallow(<Tab condensed={true}>En tab</Tab>);
        expect(wrapper.hasClass('ffe-tab-button--condensed')).toBe(true);
    });

    it('should render a ghost tab button', () => {
        const wrapper = shallow(<Tab ghost={true}>En tab</Tab>);
        expect(wrapper.hasClass('ffe-tab-button--ghost')).toBe(true);
    });

    it('should render a selected tab button', () => {
        const wrapper = shallow(<Tab selected={true}>En tab</Tab>);
        expect(wrapper.hasClass('ffe-tab-button--selected')).toBe(true);
    });

    it('passes any prop on to a tab button', () => {
        const tab = shallow(<Tab data-analytics-track="logMe">En tab</Tab>);
        expect(tab.prop('data-analytics-track')).toBe('logMe');
    });
});
