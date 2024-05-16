import React from 'react';
import { Grid, GridProps } from './Grid';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultProps = {
    children: <p>blah</p>,
};

const TEST_ID = 'test-id';

const renderGrid = (props?: Partial<GridProps>) =>
    render(<Grid {...defaultProps} {...props} data-testid={TEST_ID} />);

describe('<Grid/>', () => {
    it('renders with default class and element', () => {
        renderGrid();
        const grid = screen.getByTestId(TEST_ID);
        expect(grid.tagName).toBe('DIV');
        expect(grid.classList.contains('ffe-grid')).toBeTruthy();
    });

    it('renders with custom class', () => {
        renderGrid({ className: 'custom-class' });
        const grid = screen.getByTestId(TEST_ID);
        expect(grid.classList.contains('ffe-grid')).toBeTruthy();
        expect(grid.classList.contains('custom-class')).toBeTruthy();
    });

    it('renders provided children node', () => {
        renderGrid();
        const grid = screen.getByTestId(TEST_ID);

        expect(grid.innerHTML).toBe('<p>blah</p>');
    });

    it('sets the gap modifier', () => {
        renderGrid({ gap: 'xs' });

        const grid = screen.getByTestId(TEST_ID);
        expect(grid.classList.contains('ffe-grid')).toBeTruthy();
        expect(grid.classList.contains('ffe-grid--gap-xs')).toBeTruthy();
    });

    it('preserves other attributes that are passed to it', async () => {
        const user = userEvent.setup();

        const handler = jest.fn();
        renderGrid({ onClick: handler });
        const grid = screen.getByTestId(TEST_ID);
        await user.click(grid);

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('can render a custom root element', () => {
        renderGrid({ as: 'section' });
        const grid = screen.getByTestId(TEST_ID);
        expect(grid.tagName).toBe('SECTION');
    });
});
