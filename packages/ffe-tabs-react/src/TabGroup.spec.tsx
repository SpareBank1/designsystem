import React from 'react';
import { TabGroup } from './TabGroup';
import { Tab } from './Tab';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<TabGroup/>', () => {
    it('renders a tab group', () => {
        render(
            <TabGroup>
                <Tab aria-controls="div1">En tab</Tab>
                <Tab aria-controls="div2">En annen tab</Tab>
            </TabGroup>,
        );
        const tabGroup = screen.getByRole('tablist');

        expect(tabGroup.classList.contains('ffe-tab-group')).toBe(true);
    });

    it('contains a tab button', () => {
        render(
            <TabGroup>
                <Tab aria-controls="div1">En tab</Tab>
                <Tab aria-controls="div2">En annen tab</Tab>
            </TabGroup>,
        );

        const [tab1, tab2] = screen.getAllByRole('tab');

        expect(tab1.textContent).toBe('En tab');
        expect(tab2.textContent).toBe('En annen tab');
    });

    it('should apply noBreak modifier class when the noBreak prop is true', () => {
        render(
            <TabGroup noBreak={true}>
                <Tab aria-controls="div3">En tab</Tab>
                <Tab aria-controls="div4">En tab til</Tab>
            </TabGroup>,
        );
        const tabGroup = screen.getByRole('tablist');
        expect(tabGroup.classList.contains('ffe-tab-group--no-break')).toBe(
            true,
        );
    });

    it('should accept custom classes', () => {
        render(
            <TabGroup className="some-custom-class">
                <Tab aria-controls="div5">En tab</Tab>
                <Tab aria-controls="div6">En tab til </Tab>
            </TabGroup>,
        );
        const tabGroup = screen.getByRole('tablist');

        expect(tabGroup.classList.contains('ffe-tab-group')).toBe(true);
        expect(tabGroup.classList.contains('some-custom-class')).toBe(true);
    });

    it('should set tabindex of selected tab to 0 and others to -1', () => {
        render(
            <TabGroup>
                <Tab aria-controls="div7" selected={true}>
                    Tab 1
                </Tab>
                <Tab aria-controls="div8">Tab 2</Tab>
            </TabGroup>,
        );

        const tabGroup = screen.getByRole('tablist');
        tabGroup.focus();

        const [selectedTab, otherTab] = screen.getAllByRole('tab');

        expect(selectedTab.getAttribute('aria-selected')).toBe('true');
        expect(selectedTab.getAttribute('tabindex')).toBe('0');
        expect(otherTab.getAttribute('aria-selected')).toBe('false');
        expect(otherTab.getAttribute('tabindex')).toBe('-1');
    });

    it('should navigate left and right with arrow keys', () => {
        render(
            <TabGroup>
                <Tab aria-controls="div9" selected={true}>
                    Tab 1
                </Tab>
                <Tab aria-controls="div10">Tab 2</Tab>
                <Tab aria-controls="div11">Tab 3</Tab>
            </TabGroup>,
        );

        const tabGroup = screen.getByRole('tablist');
        const tabs = screen.getAllByRole('tab');

        fireEvent.keyDown(tabGroup, { key: 'ArrowRight' });
        expect(tabs[1]).toHaveFocus();

        fireEvent.keyDown(tabGroup, { key: 'ArrowRight' });
        expect(tabs[2]).toHaveFocus();

        fireEvent.keyDown(tabGroup, { key: 'ArrowRight' });
        expect(tabs[0]).toHaveFocus();

        fireEvent.keyDown(tabGroup, { key: 'ArrowLeft' });
        expect(tabs[2]).toHaveFocus();
    });
});
