import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShortcutButton, ShortcutButtonProps } from './ShortcutButton';

const defaultProps = { children: 'Click me' };
const renderShortcutButton = (props?: ShortcutButtonProps) =>
    render(<ShortcutButton {...defaultProps} {...props} />);

describe('<ShortcutButton />', () => {
    it('passes on any prop', () => {
        renderShortcutButton({
            'aria-label': 'some label',
        });
        const button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toEqual('some label');
    });

    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderShortcutButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });

    it('sends a chevron_right as a default rightIcon prop', () => {
        renderShortcutButton();
        const button = screen.getByRole('button');
        const icon = button.querySelector('.ffe-icons');
        expect(icon?.getAttribute('style')).toContain(
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik01MTcuODQ3LTQ4MCAzNTQuOTI0LTY0Mi45MjRxLTguMzA4LTguMzA3LTguNS0yMC44ODQtLjE5My0xMi41NzYgOC41LTIxLjI2OCA4LjY5Mi04LjY5MyAyMS4wNzYtOC42OTN0MjEuMDc2IDguNjkzbDE3OS43NjkgMTc5Ljc2OXE1LjYxNiA1LjYxNSA3LjkyMyAxMS44NDYgMi4zMDggNi4yMyAyLjMwOCAxMy40NjF0LTIuMzA4IDEzLjQ2MXEtMi4zMDcgNi4yMzEtNy45MjMgMTEuODQ2TDM5Ny4wNzYtMjc0LjkyNHEtOC4zMDcgOC4zMDgtMjAuODg0IDguNS0xMi41NzYuMTkzLTIxLjI2OC04LjUtOC42OTMtOC42OTItOC42OTMtMjEuMDc2dDguNjkzLTIxLjA3Nkw1MTcuODQ3LTQ4MFoiLz48L3N2Zz4=',
        );
    });
});
