import React from 'react';
import { TertiaryButton, TertiaryButtonProps } from './TertiaryButton';
import { render, screen } from '@testing-library/react';

const defaultProps = { children: 'Click me' };
const renderTertiaryButton = (props?: TertiaryButtonProps) =>
    render(<TertiaryButton {...defaultProps} {...props} />);

describe('TertiaryButton', () => {
    it('passes on any prop', () => {
        renderTertiaryButton({
            'aria-label': 'some label',
        });
        const button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toEqual('some label');
    });

    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderTertiaryButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });
});
