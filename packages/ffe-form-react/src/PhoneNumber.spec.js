import React from 'react';

import PhoneNumber from './PhoneNumber';

const getWrapper = props => shallow(<PhoneNumber {...props} />);

describe('renders correctly', () => {
    it('should exist', () => {
        const wrapper = getWrapper({});
        expect(wrapper.exists()).toBe(true);
    });

    it('should default to norwegian country code', function() {
        const wrapper = getWrapper({});
        const input = wrapper.find('input');
        expect(input.at(0).props().value).toEqual('47');
    });

    it('should default to nb locale', () => {
        const wrapper = getWrapper({});
        const countryCode = wrapper
            .find('label')
            .at(0)
            .props().children;
        expect(countryCode).toEqual('Landskode');
    });

    it('should render using locale prop', () => {
        const wrapper = getWrapper({ locale: 'en' });
        const countryCode = wrapper
            .find('label')
            .at(0)
            .props().children;
        expect(countryCode).toEqual('Country code');
    });

    it('should render using disabled prop', function() {
        const wrapper = getWrapper({ disabled: true });
        const inputs = wrapper.find('input');
        expect(inputs.at(0).props().disabled).toBe(true);
        expect(inputs.at(1).props().disabled).toBe(true);
    });

    it('should render using countryCodeFieldMessage prop', function() {
        const wrapper = getWrapper({
            countryCodeFieldMessage: 'Denne ble feil',
        });
        const inputs = wrapper.find('input');
        expect(inputs.at(0).prop('aria-invalid')).toBe(true);
        expect(inputs.at(1).prop('aria-invalid')).toBe(false);
    });

    it('should set label to phonenumber by default', function() {
        const wrapper = getWrapper({});
        const input = wrapper
            .find('label')
            .at(1)
            .props().children;
        expect(input).toEqual('Telefonnummer');
    });

    it('should set label to mobilenumber when isMobileNumber true', function() {
        const wrapper = getWrapper({
            isMobileNumber: true,
        });
        const input = wrapper
            .find('label')
            .at(1)
            .props().children;
        expect(input).toEqual('Mobilnummer');
    });

    it('should render using numberFieldMessage prop', function() {
        const wrapper = getWrapper({ numberFieldMessage: 'Denne ble feil' });
        const inputs = wrapper.find('input');
        expect(inputs.at(0).prop('aria-invalid')).toBe(false);
        expect(inputs.at(1).prop('aria-invalid')).toBe(true);
    });

    it('should render using countryCodeAndNumberFieldMessage prop', function() {
        const wrapper = getWrapper({
            countryCodeAndNumberFieldMessage: 'Denne ble feil',
        });
        const inputs = wrapper.find('input');
        expect(inputs.at(0).prop('aria-invalid')).toBe(true);
        expect(inputs.at(1).prop('aria-invalid')).toBe(true);
    });

    it('should render country code and number sent by prop', function() {
        const wrapper = getWrapper({ countryCode: '46', number: '92929292' });
        const input = wrapper.find('input');
        expect(input.at(0).props().value).toEqual('46');
        expect(input.at(1).props().value).toEqual('92929292');
    });

    it('should render class sent by prop', () => {
        const wrapper = getWrapper({ className: 'myClassName' });
        expect(wrapper.find('.myClassName').exists()).toBe(true);
    });

    it('should call change listeners on change', () => {
        const spyA = jest.fn();
        const spyB = jest.fn();
        const wrapper = getWrapper({
            onNumberChange: spyA,
            onCountryCodeChange: spyB,
        });

        wrapper
            .find('input')
            .at(0)
            .simulate('change');
        wrapper
            .find('input')
            .at(1)
            .simulate('change');

        expect(spyA).toHaveBeenCalledTimes(1);
        expect(spyB).toHaveBeenCalledTimes(1);
    });

    it('should call blur listeners on blur', () => {
        const spyA = jest.fn();
        const spyB = jest.fn();
        const wrapper = getWrapper({
            onNumberBlur: spyA,
            onCountryCodeBlur: spyB,
        });

        wrapper
            .find('input')
            .at(0)
            .simulate('blur');
        wrapper
            .find('input')
            .at(1)
            .simulate('blur');

        expect(spyA).toHaveBeenCalledTimes(1);
        expect(spyB).toHaveBeenCalledTimes(1);
    });
});
