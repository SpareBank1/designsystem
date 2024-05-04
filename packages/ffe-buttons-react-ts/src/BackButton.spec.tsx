import React from 'react';
import { render, screen } from '@testing-library/react';
import { BackButton, BackButtonProps } from './BackButton';

const defaultProps = { children: 'Click me' };
const renderBackButton = (props?: BackButtonProps) =>
    render(<BackButton {...defaultProps} {...props} />);

describe('<BackButton />', () => {
    it('renders without exploding', () => {
        renderBackButton();
        const button = screen.getByRole('button');
        expect(button.classList.contains('ffe-inline-button')).toBeTruthy();
        expect(
            button.classList.contains('ffe-inline-button--back'),
        ).toBeTruthy();
    });

    it('passes on any prop', () => {
        renderBackButton({
            'aria-label': 'some label',
        });
        const button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toEqual('some label');
    });
    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderBackButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });
});
