import React from 'react';
import { Label, LabelProps } from './Label';
import { render, screen } from '@testing-library/react';

const defaultProps = { htmlFor: 'testId', children: 'label text' };
const renderLabel = (props?: Partial<LabelProps>) =>
    render(<Label {...defaultProps} {...props} />);

describe('<Label>', () => {
    it('renders a label ', () => {
        renderLabel();
        const label = screen.getByText('label text');
        expect(label.tagName).toBe('LABEL');
    });

    it('passes props correct', () => {
        renderLabel({
            className: 'app-label',
            children: 'test text',
            htmlFor: 'a-new-id',
        });

        const label = screen.getByText('test text');

        expect(label.tagName).toBe('LABEL');
        expect(label.classList.contains('app-label')).toBe(true);
        expect(label.getAttribute('for')).toBe('a-new-id');
    });

    it('sets correct className when block is passed', () => {
        const { rerender } = render(<Label {...defaultProps} block={false} />);
        const label = screen.getByText('label text');
        expect(label.classList.contains('ffe-form-label--block')).toBe(false);
        rerender(<Label {...defaultProps} block={true} />);
        expect(label.classList.contains('ffe-form-label--block')).toBe(true);
    });

    it('ads the on colored on-colored-bg modifier', () => {
        render(<Label {...defaultProps} block={false} onColoredBg={true} />);
        const label = screen.getByText('label text');
        expect(label.classList.contains('ffe-form-label')).toBe(true);
        expect(label.classList.contains('ffe-form-label--on-colored-bg')).toBe(
            true,
        );
    });
});
