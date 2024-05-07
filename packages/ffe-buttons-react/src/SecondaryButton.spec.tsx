import React from 'react';
import { render, screen } from '@testing-library/react';
import { SecondaryButton, SecondaryButtonProps } from './SecondaryButton';

const defaultProps = { children: 'Click me' };
const renderSecondaryButton = (props?: SecondaryButtonProps) =>
    render(<SecondaryButton {...defaultProps} {...props} />);

describe('<PrimaryButton />', () => {
    it('renders without exploding', () => {
        renderSecondaryButton();
        const button = screen.getByRole('button');
        expect(button.classList.contains('ffe-button')).toBeTruthy();
        expect(button.classList.contains('ffe-button--secondary')).toBeTruthy();
    });
    it('passes on any prop', () => {
        renderSecondaryButton({
            'aria-label': 'some label',
        });
        const button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toEqual('some label');
    });

    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderSecondaryButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });
});
