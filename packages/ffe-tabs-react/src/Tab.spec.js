import React from 'react';

import { Tab } from './';

describe('Tab', () => {
    it('should render a tab', () => {
        const wrapper = shallow(<Tab aria-controls="div1">En tab</Tab>);
        expect(wrapper.hasClass('ffe-tab')).toBe(true);
    });

    it('should render a selected tab', () => {
        const wrapper = shallow(
            <Tab aria-controls="div1" selected={true}>
                En tab
            </Tab>,
        );
        expect(wrapper.hasClass('ffe-tab--selected')).toBe(true);
    });

    it('should have aria-selected to be true when tab is selected', () => {
        const wrapper = shallow(
            <Tab aria-controls="div1" selected={true}>
                En tab
            </Tab>,
        );
        expect(wrapper.prop('aria-selected')).toBe(true);
    });

    it('should have aria-selected to be false when tab is not selected', () => {
        const wrapper = shallow(
            <Tab aria-controls="div1" selected={false}>
                En tab
            </Tab>,
        );
        expect(wrapper.prop('aria-selected')).toBe(false);
    });

    it('should have aria-controls attribute when passed to it', () => {
        const controlId = 'controlId';
        const wrapper = shallow(<Tab aria-controls={controlId}>En tab</Tab>);
        expect(wrapper.prop('aria-controls')).toBe(controlId);
    });

    it('passes any prop on to a tab', () => {
        const tab = shallow(
            <Tab aria-controls="div1" data-analytics-track="logMe">
                En tab
            </Tab>,
        );
        expect(tab.prop('data-analytics-track')).toBe('logMe');
    });
});
