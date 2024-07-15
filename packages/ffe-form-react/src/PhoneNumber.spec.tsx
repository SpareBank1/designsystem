import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PhoneNumber, PhoneNumberProps } from './PhoneNumber';

const renderPhoneNumber = (props?: PhoneNumberProps) =>
    render(
        <PhoneNumber
            {...props}
            numberInputProps={{
                onChange: () => {},
                ...props?.numberInputProps,
            }}
            countryCodeInputProps={{
                onChange: () => {},
                ...props?.countryCodeInputProps,
            }}
        />,
    );

describe('<PhoneNumber/>', () => {
    it('should default to norwegian country code', () => {
        renderPhoneNumber();
        const [input] = screen.getAllByRole('textbox');
        expect(input.getAttribute('value')).toBe('47');
    });

    it('should default to nb locale', () => {
        renderPhoneNumber();
        expect(
            screen.getByRole('textbox', { name: 'Landskode' }),
        ).toBeInTheDocument();
    });

    it('should render using locale prop', () => {
        renderPhoneNumber({ locale: 'en' });
        expect(
            screen.getByRole('textbox', { name: 'Country code' }),
        ).toBeInTheDocument();
    });

    it('should render using disabled prop', function () {
        renderPhoneNumber({
            numberInputProps: { disabled: true },
            countryCodeInputProps: { disabled: true },
        });
        const [input1, input2] = screen.getAllByRole('textbox');
        expect(input1).toBeDisabled();
        expect(input2).toBeDisabled();
    });

    it('should render using countryCodeFieldMessage prop', function () {
        renderPhoneNumber({
            countryCodeFieldMessage: 'Denne ble feil',
        });

        const [input1, input2] = screen.getAllByRole('textbox');

        expect(input1.getAttribute('aria-invalid')).toBe('true');
        expect(input2.getAttribute('aria-invalid')).toBe('false');
    });

    it('should set label to phonenumber by default', function () {
        renderPhoneNumber({});
        expect(
            screen.getByRole('textbox', { name: 'Telefonnummer' }),
        ).toBeInTheDocument();
    });

    it('should set label to mobilenumber when isMobileNumber true', function () {
        renderPhoneNumber({
            isMobileNumber: true,
        });
        expect(
            screen.getByRole('textbox', { name: 'Mobilnummer' }),
        ).toBeInTheDocument();
    });

    it('should render using numberFieldMessage prop', function () {
        renderPhoneNumber({ numberFieldMessage: 'Denne ble feil' });

        const [input1, input2] = screen.getAllByRole('textbox');
        expect(input1.getAttribute('aria-invalid')).toBe('false');
        expect(input2.getAttribute('aria-invalid')).toBe('true');
    });

    it('should render using countryCodeAndNumberFieldMessage prop', function () {
        renderPhoneNumber({
            countryCodeAndNumberFieldMessage: 'Denne ble feil',
        });

        const [input1, input2] = screen.getAllByRole('textbox');
        expect(input1.getAttribute('aria-invalid')).toBe('true');
        expect(input2.getAttribute('aria-invalid')).toBe('true');
    });

    it('should render country code and number sent by prop', function () {
        renderPhoneNumber({
            countryCodeInputProps: { value: '46' },
            numberInputProps: { value: '92929292' },
        });

        const [input1, input2] = screen.getAllByRole('textbox');
        expect(input1.getAttribute('value')).toEqual('46');
        expect(input2.getAttribute('value')).toEqual('92929292');
    });

    it('should render class sent by prop', () => {
        const { container } = renderPhoneNumber({ className: 'myClassName' });
        expect(container.querySelector('.myClassName')).toBeTruthy();
    });

    it('should call change listeners on change', async () => {
        const user = userEvent.setup();

        const onNumberChangeSpy = jest.fn();
        const onCountryCodeChangeSpy = jest.fn();
        renderPhoneNumber({
            numberInputProps: { onChange: onNumberChangeSpy },
            countryCodeInputProps: { onChange: onCountryCodeChangeSpy },
        });

        const [input1, input2] = screen.getAllByRole('textbox');
        await user.type(input1, '1');
        await user.type(input2, '2');
        expect(onNumberChangeSpy).toHaveBeenCalledTimes(1);
        expect(onCountryCodeChangeSpy).toHaveBeenCalledTimes(1);
    });

    it('should call blur listeners on blur', async () => {
        const user = userEvent.setup();

        const onNumberChangeSpy = jest.fn();
        const onCountryCodeChangeSpy = jest.fn();
        renderPhoneNumber({
            numberInputProps: { onBlur: onNumberChangeSpy },
            countryCodeInputProps: { onBlur: onCountryCodeChangeSpy },
        });

        const [input1, input2] = screen.getAllByRole('textbox');
        await user.type(input1, '1{Tab}');
        await user.type(input2, '2{Tab}');

        expect(onNumberChangeSpy).toHaveBeenCalledTimes(1);
        expect(onCountryCodeChangeSpy).toHaveBeenCalledTimes(1);
    });
});
