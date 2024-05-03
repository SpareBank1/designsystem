import React from 'react';
import Spinner from '.';
import { render, screen } from '@testing-library/react';

const renderSpinner = props => render(<Spinner {...props} />);

describe('<Spinner />', () => {
    it('renders classes correctly', () => {
        renderSpinner({ className: 'test-class' });
        const spinner = screen.getByRole('img');
        const spinnerContainer = screen.getByTestId('spinner-container');

        expect(spinnerContainer.classList.contains('test-class'));
        expect(spinner.classList.contains('ffe-loading-spinner')).toBeTruthy();
    });
    it('renders a large spinner', () => {
        renderSpinner({ large: true });
        const spinner = screen.getByRole('img');
        expect(
            spinner.classList.contains('ffe-loading-spinner--large'),
        ).toBeTruthy();
    });
    it('passes props correctly', () => {
        renderSpinner({ id: 'test-id' });
        const spinnerContainer = screen.getByTestId('spinner-container');
        expect(spinnerContainer.getAttribute('id')).toBe('test-id');
    });
    it('aria-hidden is set to false by default', () => {
        renderSpinner();
        const spinner = screen.getByRole('img');
        expect(spinner.getAttribute('aria-hidden')).toBe('false');
    });
    it('aria-hidden set to true when loadingText set', () => {
        renderSpinner({ loadingText: 'test' });
        expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });
    it('set loadingText correctly', () => {
        renderSpinner({ loadingText: <p>Text</p> });
        const p = screen.getByTestId('spinner-container').querySelector('p');
        expect(p.textContent).toBe('Text');
    });
});
