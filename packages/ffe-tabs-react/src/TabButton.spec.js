import React from 'react';

import { TabButton } from './';

describe('TabButton', () => {
    it('should render a tab button', () => {
        const wrapper = shallow(
            <TabButton aria-controls="div">En tab</TabButton>,
        );
        expect(wrapper.hasClass('ffe-tab-button')).toBe(true);
    });

    it('should render a condensed tab button', () => {
        const wrapper = shallow(
            <TabButton aria-controls="div" condensed={true}>
                En tab
            </TabButton>,
        );
        expect(wrapper.hasClass('ffe-tab-button--condensed')).toBe(true);
    });

    it('should render a ghost tab button', () => {
        const wrapper = shallow(
            <TabButton aria-controls="div" ghost={true}>
                En tab
            </TabButton>,
        );
        expect(wrapper.hasClass('ffe-tab-button--ghost')).toBe(true);
    });

    it('should render a selected tab button', () => {
        const wrapper = shallow(
            <TabButton aria-controls="div" selected={true}>
                En tab
            </TabButton>,
        );
        expect(wrapper.hasClass('ffe-tab-button--selected')).toBe(true);
    });

    it('should have aria-selected to be true when tab button is selected', () => {
        const wrapper = shallow(
            <TabButton aria-controls="div" selected={true}>
                En tab
            </TabButton>,
        );
        expect(wrapper.prop('aria-selected')).toBe(true);
    });

    it('should have aria-selected to be false when tab button is not selected', () => {
        const wrapper = shallow(
            <TabButton aria-controls="div" selected={false}>
                En tab
            </TabButton>,
        );
        expect(wrapper.prop('aria-selected')).toBe(false);
    });

    it('should have aria-controls attribute when passed to it', () => {
        const controldId = 'controlId';
        const wrapper = shallow(
            <TabButton aria-controls={controldId}>En tab</TabButton>,
        );
        expect(wrapper.prop('aria-controls')).toBe(controldId);
    });

    it('passes any prop on to a tab button', () => {
        const tab = shallow(
            <TabButton aria-controls="div" data-analytics-track="logMe">
                En tab
            </TabButton>,
        );
        expect(tab.prop('data-analytics-track')).toBe('logMe');
    });
});
