import React from 'react';
import { Progressbar, ProgressbarProps } from './Progressbar';
import { render, screen } from '@testing-library/react';

const renderProgressbar = (props?: ProgressbarProps) =>
    render(<Progressbar {...props} />);

describe('<Progressbar />', () => {
    it('renders correctly', () => {
        renderProgressbar();
        const progressbar = screen.getByRole('progressbar');
        expect(progressbar.classList.contains('ffe-progressbar'));
    });
    it('set values correctly', () => {
        renderProgressbar({ max: 100, value: 50 });
        const progressbar = screen.getByRole('progressbar');
        expect(progressbar.getAttribute('max')).toBe('100');
        expect(progressbar.getAttribute('value')).toBe('50');
    });
    it('renders additional classes correctly', () => {
        renderProgressbar({ className: 'test-class' });
        const progressbar = screen.getByRole('progressbar');
        expect(progressbar.classList.contains('test-class'));
    });
    it('set theme correctly', () => {
        renderProgressbar({ success: true });
        const progressbar = screen.getByRole('progressbar');
        expect(progressbar.classList.contains('ffe-progressbar--theme-success'));
    });
});
