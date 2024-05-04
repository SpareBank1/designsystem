import React from 'react';
import { render, screen } from '@testing-library/react';
import { PrimaryButton, PrimaryButtonProps } from './PrimaryButton';

const defaultProps = { children: 'Click me' };
const renderPrimaryButton = (props?: PrimaryButtonProps) =>
    render(<PrimaryButton {...defaultProps} {...props} />);

describe('<PrimaryButton />', () => {
    it('renders without exploding', () => {
        renderPrimaryButton();
        const button = screen.getByRole('button');
        expect(button.classList.contains('ffe-button')).toBeTruthy();
        expect(button.classList.contains('ffe-button--primary')).toBeTruthy();
    });
    it('passes on any prop', () => {
        renderPrimaryButton({
            'aria-label': 'some label',
        });
        const button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toEqual('some label');
    });

    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderPrimaryButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });
});
