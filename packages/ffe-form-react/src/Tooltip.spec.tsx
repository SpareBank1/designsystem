import React from 'react';
import { Tooltip, TooltipProps } from './Tooltip';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const defaultProps = { children: 'Tooltip text', 'aria-label': 'button-label' };
const renderTooltip = (props?: Partial<TooltipProps>) =>
    render(<Tooltip {...defaultProps} {...props} />);

describe('<Tooltip>', () => {
    it('renders a "?" button', async () => {
        const user = userEvent.setup();

        const onClick = jest.fn();
        renderTooltip({ 'aria-label': 'button-label', onClick });
        const button = screen.getByRole('button', { name: 'button-label' });

        expect(button.textContent).toBe('?');
        expect(button.classList.contains('ffe-tooltip__icon')).toBeTruthy();

        await user.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('renders Collapse', () => {
        const { container } = renderTooltip();
        expect(container.querySelector('.ffe-collapse')).toBeTruthy();
    });

    it('toggles collapse if button is clicked', async () => {
        const user = userEvent.setup();

        const { container } = renderTooltip();
        const button = screen.getByRole('button', { name: 'button-label' });

        expect(
            container.querySelector('.ffe-collapse.ffe-collapse--hidden'),
        ).toBeTruthy();
        expect(button.getAttribute('aria-expanded')).toBe('false');

        await user.click(button);

        expect(
            container.querySelector('.ffe-collapse.ffe-collapse--open'),
        ).toBeTruthy();
        expect(button.getAttribute('aria-expanded')).toBe('true');
    });

    it('toggles active state if button is clicked', async () => {
        const user = userEvent.setup();

        const { container } = renderTooltip();
        const tooltip = container.querySelector('.ffe-tooltip');
        expect(tooltip?.classList.contains('ffe-tooltip--open')).toBe(false);

        const button = screen.getByRole('button', { name: 'button-label' });
        await user.click(button);

        expect(tooltip?.classList.contains('ffe-tooltip--open')).toBe(true);
    });

    it('does not have a tabIndex unless otherwise specified', () => {
        renderTooltip();
        const button = screen.getByRole('button', { name: 'button-label' });

        expect(button.getAttribute('tabindex')).toBeNull();
    });

    it('connects the toggle button to the correct element', () => {
        const { container } = renderTooltip();
        const button = screen.getByRole('button', { name: 'button-label' });
        const tipId = container
            .querySelector('.ffe-collapse')
            ?.getAttribute('id');

        expect(button.getAttribute('aria-controls')).toBe(tipId);
    });
});
