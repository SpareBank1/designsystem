import React from 'react';
import { TabGroup } from './TabGroup';
import { Tab } from './Tab';
import { render, screen } from '@testing-library/react';

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
                <Tab aria-controls="div">En tab</Tab>
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
                <Tab aria-controls="div">En tab</Tab>
            </TabGroup>,
        );
        const tabGroup = screen.getByRole('tablist');

        expect(tabGroup.classList.contains('ffe-tab-group')).toBe(true);
        expect(tabGroup.classList.contains('some-custom-class')).toBe(true);
    });
});
