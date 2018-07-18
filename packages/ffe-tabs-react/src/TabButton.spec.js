import React from 'react';
import { shallow } from 'enzyme';

import { TabButton } from './';

describe('TabButton', () => {
    it('should render a tab button', () => {
        const wrapper = shallow(<TabButton>En tab</TabButton>);
        expect(wrapper.hasClass('ffe-tab-button')).toBe(true);
    });

    it('should render a condensed tab button', () => {
        const wrapper = shallow(<TabButton condensed={true}>En tab</TabButton>);
        expect(wrapper.hasClass('ffe-tab-button--condensed')).toBe(true);
    });

    it('should render a ghost tab button', () => {
        const wrapper = shallow(<TabButton ghost={true}>En tab</TabButton>);
        expect(wrapper.hasClass('ffe-tab-button--ghost')).toBe(true);
    });

    it('should render a selected tab button', () => {
        const wrapper = shallow(<TabButton selected={true}>En tab</TabButton>);
        expect(wrapper.hasClass('ffe-tab-button--selected')).toBe(true);
    });

    it('passes any prop on to a tab button', () => {
        const tab = shallow(
            <TabButton data-analytics-track="logMe">En tab</TabButton>,
        );
        expect(tab.prop('data-analytics-track')).toBe('logMe');
    });
});
