import React from 'react';
import { Tab } from './Tab';
import { render, screen } from '@testing-library/react';

describe('<Tab/>', () => {
    it('should render a tab', () => {
        render(<Tab aria-controls="div1">En tab</Tab>);
        const tab = screen.getByRole('tab');
        expect(tab.classList.contains('ffe-tab')).toBeTruthy();
    });

    it('should render a selected tab', () => {
        render(
            <Tab aria-controls="div1" selected={true}>
                En tab
            </Tab>,
        );
        const tab = screen.getByRole('tab');
        expect(tab.classList.contains('ffe-tab')).toBeTruthy();
        expect(tab.classList.contains('ffe-tab--selected')).toBeTruthy();
    });

    it('should have aria-selected to be true when tab is selected', () => {
        render(
            <Tab aria-controls="div1" selected={true}>
                En tab
            </Tab>,
        );
        const tab = screen.getByRole('tab');
        expect(tab.getAttribute('aria-selected')).toBe('true');
    });

    it('should have aria-selected to be false when tab is not selected', () => {
        render(
            <Tab aria-controls="div1" selected={false}>
                En tab
            </Tab>,
        );
        const tab = screen.getByRole('tab');
        expect(tab.getAttribute('aria-selected')).toBe('false');
    });

    it('should have aria-controls attribute when passed to it', () => {
        const controlId = 'controlId';
        render(<Tab aria-controls={controlId}>En tab</Tab>);
        const tab = screen.getByRole('tab');
        expect(tab.getAttribute('aria-controls')).toBe(controlId);
    });

    it('passes any prop on to a tab', () => {
        render(
            <Tab aria-controls="div1" data-analytics-track="logMe">
                En tab
            </Tab>,
        );
        const tab = screen.getByRole('tab');
        expect(tab.getAttribute('data-analytics-track')).toBe('logMe');
    });
});
