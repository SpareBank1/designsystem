import React from 'react';
import { ActionButton, ActionButtonProps } from './ActionButton';
import { render, screen } from '@testing-library/react';

const defaultProps = { children: 'Click me' };
const renderActionButton = (props?: ActionButtonProps) =>
    render(<ActionButton {...defaultProps} {...props} />);

describe('<ActionButton />', () => {
    it('renders without exploding', () => {
        renderActionButton();
        const button = screen.getByRole('button');
        expect(button.classList.contains('ffe-button')).toBeTruthy();
        expect(button.classList.contains('ffe-button--action')).toBeTruthy();
    });

    it('passes on any prop', () => {
        renderActionButton({
            'aria-label': 'some label',
        });
        const button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toEqual('some label');
    });

    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderActionButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });
});
