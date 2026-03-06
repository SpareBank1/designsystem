import React from 'react';
import { DateInput, DateInputProps } from './DateInput';
import { render, screen } from '@testing-library/react';
import * as isIOSSafariUtil from '../util/isIOSSafari';

const noop = () => {};

const defaultProps = {
    className: 'given-class-name',
    placeholder: 'Given placeholder',
    onChange: noop,
    onFocus: noop,
    onKeyDown: noop,
    value: '2016-03-07',
    ariaInvalid: 'false',
    locale: 'nb' as const,
};

const renderInput = (props?: Partial<DateInputProps>) =>
    render(<DateInput {...defaultProps} {...props} />);

const getInput = () => screen.getByDisplayValue('2016-03-07');

describe('<Input />', () => {
    describe('nested input field', () => {
        it('should be a single input field', () => {
            renderInput();
            expect(getInput()).toBeInTheDocument();
        });

        it('should have BEM element class name', () => {
            renderInput();
            expect(
                getInput().classList.contains('ffe-dateinput__field'),
            ).toBeTruthy();
        });

        it('should have given value', () => {
            renderInput();
            expect(getInput().getAttribute('value')).toBe('2016-03-07');
        });

        it('should have given aria-invalid', () => {
            renderInput();
            expect(getInput().getAttribute('aria-invalid')).toBe('false');
        });

        it('should have class name from input props', () => {
            renderInput();
            expect(
                getInput().classList.contains('given-class-name'),
            ).toBeTruthy();
        });
    });

    describe('iOS Safari VoiceOver workaround', () => {
        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('should add role="textbox" on iOS Safari', () => {
            jest.spyOn(isIOSSafariUtil, 'isIOSSafari').mockReturnValue(true);
            renderInput();
            expect(getInput().getAttribute('role')).toBe('textbox');
        });

        it('should not add role attribute on other platforms', () => {
            jest.spyOn(isIOSSafariUtil, 'isIOSSafari').mockReturnValue(false);
            renderInput();
            expect(getInput().hasAttribute('role')).toBe(false);
        });
    });
});
