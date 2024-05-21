import React from 'react';
import { InfoFieldMessage } from './InfoFieldMessage';
import { render, screen } from '@testing-library/react';

const renderInfoFieldMessage = () =>
    render(<InfoFieldMessage role="alert">Field message</InfoFieldMessage>);

describe('<InfoFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        renderInfoFieldMessage();
        const alert = screen.getByRole('alert');
        expect(
            alert.classList.contains('ffe-field-message--info'),
        ).toBeTruthy();
    });
});
