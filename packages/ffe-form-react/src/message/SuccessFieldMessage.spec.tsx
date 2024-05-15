import React from 'react';
import { SuccessFieldMessage } from './SuccessFieldMessage';
import { render, screen } from '@testing-library/react';

const renderSuccessFieldMessage = () =>
    render(
        <SuccessFieldMessage role="alert">Field message</SuccessFieldMessage>,
    );

describe('<SuccessFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        renderSuccessFieldMessage();
        const alert = screen.getByRole('alert');
        expect(
            alert.classList.contains('ffe-field-message--success'),
        ).toBeTruthy();
    });
});
