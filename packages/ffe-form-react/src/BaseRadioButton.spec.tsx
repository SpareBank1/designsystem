import React from 'react';
import { BaseRadioButton, BaseRadioButtonProps } from './BaseRadioButton';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    children: 'Some choice',
    name: 'choice',
    value: 'value',
    onChange: () => {},
};

const renderBaseRadioButton = (props?: Partial<BaseRadioButtonProps>) =>
    render(<BaseRadioButton {...defaultProps} {...props} />);

describe('<BaseRadioButton />', () => {
    it('is not checked when selected value does not match', async () => {
        const { rerender } = render(
            <BaseRadioButton {...defaultProps} selectedValue="" />,
        );
        const radio = screen.getByRole('radio');
        expect(radio).not.toBeChecked();
        rerender(<BaseRadioButton {...defaultProps} selectedValue="value" />);
        expect(radio).toBeChecked();
    });

    it('is checked if selectedValue equals value', () => {
        const { rerender } = render(
            <BaseRadioButton {...defaultProps} selectedValue="other_value" />,
        );
        const radio = screen.getByRole('radio');

        expect(radio).not.toBeChecked();
        rerender(<BaseRadioButton {...defaultProps} selectedValue="value" />);
        expect(radio).toBeChecked();
    });

    it('is not checked if not checked and selectedValue !== value', () => {
        renderBaseRadioButton({ checked: false, selectedValue: 'nope' });
        const radio = screen.getByRole('radio');
        expect(radio).not.toBeChecked();
    });

    it('is not checked if checked === undefined and selectedValue is falsy, but not undefined', () => {
        const { rerender } = render(
            <BaseRadioButton {...defaultProps} selectedValue={null} />,
        );
        const radio = screen.getByRole('radio');
        expect(radio).not.toBeChecked();

        rerender(<BaseRadioButton {...defaultProps} selectedValue="" />);
        expect(radio).not.toBeChecked();
    });

    describe('id', () => {
        it('is unique across instances', () => {
            renderBaseRadioButton();
            renderBaseRadioButton();
            const [oneId, anotherId] = screen
                .getAllByRole('radio')
                .map(it => it.getAttribute('id'));
            expect(oneId).not.toBe(anotherId);
        });
        it('is stable per instance', () => {
            const { rerender } = render(<BaseRadioButton {...defaultProps} />);
            const idBeforeUpdate = screen.getByRole('radio').getAttribute('id');

            rerender(<BaseRadioButton {...defaultProps} />);
            const idAfterUpdate = screen.getByRole('radio').getAttribute('id');

            expect(idBeforeUpdate).toBe(idAfterUpdate);
        });
    });
    describe('tooltip', () => {
        it('renders if present', () => {
            const { rerender } = render(
                <BaseRadioButton {...defaultProps} tooltip={undefined} />,
            );
            expect(screen.queryByRole('button')).not.toBeInTheDocument();
            rerender(
                <BaseRadioButton {...defaultProps} tooltip="Tip generously" />,
            );
            const button = screen.getByRole('button', {
                name: 'Vis hjelpetekst',
            });
            expect(button.getAttribute('aria-label')).toBe('Vis hjelpetekst');
        });
        it('add the correct class if present', () => {
            const { rerender, container } = render(
                <BaseRadioButton {...defaultProps} tooltip={undefined} />,
            );
            const label = container.querySelector('label');
            expect(
                label?.classList.contains('ffe-radio-button--with-tooltip'),
            ).toBeFalsy();
            rerender(
                <BaseRadioButton {...defaultProps} tooltip="Tip generously" />,
            );
            expect(
                label?.classList.contains('ffe-radio-button--with-tooltip'),
            ).toBeTruthy();
        });
    });
});
