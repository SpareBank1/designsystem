import React from 'react';
import { BaseFieldMessage, BaseFieldMessageProps } from './BaseFieldMessage';
import { render, screen } from '@testing-library/react';

const renderBassFieldMessage = (props: Partial<BaseFieldMessageProps>) =>
    render(
        <BaseFieldMessage type="error" role="alert" {...props}>
            Field message
        </BaseFieldMessage>,
    );

describe('<BaseFieldMessage>', () => {
    it('renders the correct class name based on type prop', () => {
        renderBassFieldMessage({ type: 'error' });
        const alert = screen.getByRole('alert');
        expect(
            alert.classList.contains('ffe-field-message--error'),
        ).toBeTruthy();
    });
    it('renders the correct class name based on type prop', () => {
        renderBassFieldMessage({ type: 'info' });
        const alert = screen.getByRole('alert');
        expect(
            alert.classList.contains('ffe-field-message--info'),
        ).toBeTruthy();
    });
    it('renders the correct class name based on type prop', () => {
        renderBassFieldMessage({ type: 'success' });
        const alert = screen.getByRole('alert');
        expect(
            alert.classList.contains('ffe-field-message--success'),
        ).toBeTruthy();
    });
    it('ads the on colored on-colored-bg modifier', () => {
        renderBassFieldMessage({ type: 'success', onColoredBg: true });
        const alert = screen.getByRole('alert');
        expect(alert.classList.contains('ffe-field-message')).toBeTruthy();
        expect(
            alert.classList.contains('ffe-field-message--success'),
        ).toBeTruthy();
        expect(
            alert.classList.contains('ffe-field-message--on-colored-bg'),
        ).toBeTruthy();
    });
});
