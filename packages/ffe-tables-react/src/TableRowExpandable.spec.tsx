import React from 'react';
import { TableRowExpandable } from './TableRowExpandable';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<TableRowExpandable />', () => {
    it('should use correct classes', () => {
        render(
            <table>
                <tbody>
                    <TableRowExpandable
                        className="my-class"
                        expandContent={<div>expand</div>}
                    />
                </tbody>
            </table>,
        );
        const tr = screen.getByRole('row');
        expect(tr.classList).toContain('my-class');
        expect(tr.classList).toContain('ffe-table__tr');
        expect(tr.classList).toContain('ffe-table__tr--expand');
        expect(tr.classList).not.toContain('ffe-table__tr--expand-open');
    });

    it('should not render expandable content', () => {
        render(
            <table>
                <tbody>
                    <TableRowExpandable expandContent={<div>expand</div>} />
                </tbody>
            </table>,
        );
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(1);
    });

    it('should be expandable', async () => {
        const onClick = jest.fn();
        const user = userEvent.setup({ delay: null });
        jest.useFakeTimers();

        render(
            <table>
                <tbody>
                    <TableRowExpandable
                        onClick={onClick}
                        expandContent={<div>expand</div>}
                    />
                </tbody>
            </table>,
        );

        const [tr] = screen.getAllByRole('row');
        const expandButton = screen.getByRole('button', { name: 'Vis mer' });
        expect(expandButton.getAttribute('aria-expanded')).toBe('false');
        expect(
            expandButton.classList.contains('ffe-table__expand-button'),
        ).toBeTruthy();
        expect(
            expandButton.classList.contains('ffe-table__expand-button--open'),
        ).toBeFalsy();

        // make sure whole row is clickable
        await user.click(tr);

        expect(expandButton.getAttribute('aria-expanded')).toBe('true');
        expect(
            expandButton.classList.contains('ffe-table__expand-button'),
        ).toBeTruthy();
        expect(
            expandButton.classList.contains('ffe-table__expand-button--open'),
        ).toBeTruthy();
        expect(tr.classList).toContain('ffe-table__tr--expand-open');

        // expand content is now accessible
        const [, expand] = screen.getAllByRole('row');

        expect(expand.textContent).toBe('expand');
        expect(expand.getAttribute('id')).toBe(
            expandButton.getAttribute('aria-controls'),
        );

        expect(onClick).toHaveBeenCalledTimes(1);
        jest.useRealTimers();
    });
});
