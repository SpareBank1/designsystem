import React from 'react';
import { GridRow, GridRowProps } from './GridRow';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const TEST_ID = 'test-id';

const defaultProps = {
    children: <p>blah</p>,
};

const renderGridRow = (props?: Partial<GridRowProps>) =>
    render(<GridRow {...defaultProps} {...props} data-testid={TEST_ID} />);

describe('<GridRow/>', () => {
    it('renders with default class and element', () => {
        renderGridRow();
        const gridRow = screen.getByTestId(TEST_ID);
        expect(gridRow.classList.contains('ffe-grid__row')).toBeTruthy();
        expect(gridRow.tagName).toBe('DIV');
    });

    it('renders with custom class', () => {
        renderGridRow({ className: 'custom-class' });
        const gridRow = screen.getByTestId(TEST_ID);
        expect(gridRow.classList.contains('custom-class')).toBeTruthy();
    });

    it('renders provided children node', () => {
        renderGridRow();
        const gridRow = screen.getByTestId(TEST_ID);

        expect(gridRow.innerHTML).toBe('<p>blah</p>');
    });

    it('adds correct class for all valid background colors', () => {
        renderGridRow({ background: 'sand' });
        const gridRow = screen.getByTestId(TEST_ID);

        expect(gridRow.classList.contains(`ffe-grid__row--bg-sand`)).toBe(true);
    });

    it('adds correct class for all valid dark background colors', () => {
        renderGridRow({ backgroundDark: 'natt' });
        const gridRow = screen.getByTestId(TEST_ID);
        expect(gridRow.classList.contains(`ffe-grid__row--bg-dark-natt`)).toBe(
            true,
        );
    });

    it('renders rows with extra wrappers when background is set', () => {
        renderGridRow({ background: 'sand' });
        const gridRow = screen.getByTestId(TEST_ID);
        expect(gridRow.querySelector('.ffe-grid__row-wrapper')).toBeTruthy();
    });

    it('renders rows with extra wrappers when dark background is set', () => {
        renderGridRow({ backgroundDark: 'koksgraa' });
        const gridRow = screen.getByTestId(TEST_ID);
        expect(gridRow.querySelector('.ffe-grid__row-wrapper')).toBeTruthy();
    });

    it('preserves other attributes that are passed to it', async () => {
        const user = userEvent.setup();
        const handler = jest.fn();
        renderGridRow({ onClick: handler });
        const gridRow = screen.getByTestId(TEST_ID);
        await user.click(gridRow);

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('can render a custom root element', () => {
        renderGridRow({ as: 'section' });
        const gridRow = screen.getByTestId(TEST_ID);

        expect(gridRow.tagName).toBe('SECTION');
    });
});
