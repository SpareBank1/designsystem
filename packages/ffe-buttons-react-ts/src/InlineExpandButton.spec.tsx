import React from 'react';
import {
    InlineExpandButton,
    InlineExpandButtonProps,
} from './InlineExpandButton';
import { render, screen } from '@testing-library/react';
import { Optional } from './types';

const defaultProps = {
    children: 'Click me',
    isExpanded: false,
};
const renderInlineExpandButton = (
    props?: Optional<InlineExpandButtonProps, 'isExpanded'>,
) => render(<InlineExpandButton {...defaultProps} {...props} />);

describe('<InlineExpandButton />', () => {
    it('passes on any prop', () => {
        renderInlineExpandButton({
            'aria-label': 'some label',
        });
        const button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toEqual('some label');
    });

    it('add ffe-inline-button--expanded class when expanded', () => {
        renderInlineExpandButton({
            isExpanded: true,
            className: 'extra-class',
        });
        const button = screen.getByRole('button');
        expect(button.classList.contains('ffe-inline-button')).toBeTruthy();
        expect(
            button.classList.contains('ffe-inline-button--expand'),
        ).toBeTruthy();
        expect(button.classList.contains('extra-class')).toBeTruthy();
    });

    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderInlineExpandButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });
});
