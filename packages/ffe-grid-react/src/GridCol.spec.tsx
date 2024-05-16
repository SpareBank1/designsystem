import React from 'react';
import { GridCol, GridColProps } from './GridCol';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const TEST_ID = 'test-id';

const defaultProps = {
    children: <p>blah</p>,
};

const renderGridCol = (props?: Partial<GridColProps>) =>
    render(<GridCol {...defaultProps} {...props} data-testid={TEST_ID} />);

describe('<GridCol/>', () => {
    it('renders with custom class', () => {
        renderGridCol({ className: 'custom-class' });
        const gridCol = screen.getByTestId(TEST_ID);

        expect(gridCol.classList.contains('custom-class')).toBeTruthy();
    });

    it('renders provided children node', () => {
        renderGridCol();
        const gridCol = screen.getByTestId(TEST_ID);

        expect(gridCol.innerHTML).toBe('<p>blah</p>');
    });

    it('supports setting cols as a number', () => {
        renderGridCol({ lg: 10 });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(gridCol.classList.contains('ffe-grid__col--lg-10')).toBeTruthy();
    });

    it('supports setting cols as a string', () => {
        renderGridCol({ sm: '1' });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(gridCol.classList.contains('ffe-grid__col--sm-1')).toBeTruthy();
    });

    it('supports setting cols as an object', () => {
        renderGridCol({ md: { cols: 4 } });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(gridCol.classList.contains('ffe-grid__col--md-4')).toBeTruthy();
    });

    it('supports setting cols and offset', () => {
        renderGridCol({ sm: { cols: 4, offset: '2' } });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(gridCol.classList.contains('ffe-grid__col--sm-4')).toBeTruthy();
        expect(
            gridCol.classList.contains('ffe-grid__col--sm-offset-2'),
        ).toBeTruthy();
    });

    it('does not set an offset class if no offset is provided', () => {
        renderGridCol({ lg: { cols: 7 } });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(gridCol.getAttribute('class')).not.toContain('offset');
    });

    it('sets the center modifier if the value is boolean true', () => {
        renderGridCol({ centerText: true });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(
            gridCol.classList.contains('ffe-grid__col--center-text'),
        ).toBeTruthy();
    });

    it('sets background color class if valid', () => {
        renderGridCol({ background: 'frost-30' });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(
            gridCol.classList.contains(`ffe-grid__col--bg-frost-30`),
        ).toBeTruthy();
    });

    it('sets background color class if valid', () => {
        renderGridCol({ backgroundDark: 'koksgraa' });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(
            gridCol.classList.contains(`ffe-grid__col--bg-dark-koksgraa`),
        ).toBeTruthy();
    });

    it('sets all the things o/', () => {
        renderGridCol({
            sm: { cols: '6', offset: 2 },
            md: 8,
            lg: { cols: 2 },
            centerText: true,
        });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(gridCol.classList.contains('ffe-grid__col--sm-6')).toBeTruthy();
        expect(
            gridCol.classList.contains('ffe-grid__col--sm-offset-2'),
        ).toBeTruthy();
        expect(gridCol.classList.contains('ffe-grid__col--md-8')).toBeTruthy();
        expect(gridCol.classList.contains('ffe-grid__col--lg-2')).toBeTruthy();
        expect(
            gridCol.classList.contains('ffe-grid__col--center-text'),
        ).toBeTruthy();
    });

    it('preserves other attributes that are passed to it', async () => {
        const user = userEvent.setup();

        const handler = jest.fn();
        renderGridCol({ onClick: handler });
        const gridCol = screen.getByTestId(TEST_ID);

        await user.click(gridCol);

        expect(handler).toHaveBeenCalledTimes(1);
    });

    it('can render a custom root element', () => {
        renderGridCol({ as: 'section' });
        const gridCol = screen.getByTestId(TEST_ID);
        expect(gridCol.tagName).toBe('SECTION');
    });

    it('can render with offset 0 and columns 0', () => {
        renderGridCol({ md: { cols: 0, offset: 0 } });
        const gridCol = screen.getByTestId(TEST_ID);

        expect(
            gridCol.classList.contains('ffe-grid__col--md-offset-0'),
        ).toBeTruthy();
        expect(gridCol.classList.contains('ffe-grid__col--md-0')).toBeTruthy();
    });

    it('can render with offset 1 and columns 1', () => {
        renderGridCol({ md: { cols: 1, offset: 1 } });
        const gridCol = screen.getByTestId(TEST_ID);

        expect(
            gridCol.classList.contains('ffe-grid__col--md-offset-1'),
        ).toBeTruthy();
        expect(gridCol.classList.contains('ffe-grid__col--md-1')).toBeTruthy();
    });

    it('defaults to sm={12} if no dimensions are provided', () => {
        renderGridCol();
        const gridCol = screen.getByTestId(TEST_ID);

        expect(gridCol.classList.contains('ffe-grid__col--sm-12')).toBeTruthy();
    });
});
