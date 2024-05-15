import React from 'react';
import { ErrorFieldMessage } from './ErrorFieldMessage';
import { render, screen } from '@testing-library/react';

const renderErrorFieldMessage = () =>
    render(<ErrorFieldMessage>Field message</ErrorFieldMessage>);

describe('<ErrorFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        renderErrorFieldMessage();
        const alert = screen.getByRole('alert');
        expect(
            alert.classList.contains('ffe-field-message--error'),
        ).toBeTruthy();
    });
});
