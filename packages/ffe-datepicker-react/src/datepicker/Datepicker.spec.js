import { shallow, mount } from 'enzyme';
import React from 'react';

import DateInput from '../input';
import Calendar from '../calendar';
import Datepicker from './Datepicker';
import i18n from '../i18n/i18n';
import ErrorTypes from '../datelogic/error-types';

const defaultProps = {
    value: '',
    onChange: () => {},
    language: 'nb',
};

const getShallowWrapper = props =>
    shallow(<Datepicker {...defaultProps} {...props} />);
const getMountedWrapper = props =>
    mount(<Datepicker {...defaultProps} {...props} />);

const ERROR_CLASS = '.ffe-field-error-message';

describe('<Datepicker />', () => {
    describe('with empty value', () => {
        it('renders a wrapper for the datepicker components', () => {
            const wrapper = getShallowWrapper();
            expect(wrapper.find('.ffe-datepicker').exists()).toBe(true);
        });

        it('contains a single DateInput component', () => {
            const wrapper = getShallowWrapper();
            expect(wrapper.find(DateInput)).toHaveLength(1);
        });

        it('does not contain a Calendar component', () => {
            const wrapper = getShallowWrapper();
            expect(wrapper.find(Calendar).exists()).toBe(false);
        });

        it('does not have an error message', () => {
            const wrapper = getShallowWrapper();
            expect(wrapper.find(ERROR_CLASS).exists()).toBe(false);
        });
    });

    describe('with focus on DateInput', () => {
        it('contains a Calendar', () => {
            const wrapper = getMountedWrapper();
            const input = wrapper.find('input');
            input.simulate('focus');

            expect(wrapper.find(Calendar)).toHaveLength(1);
        });
    });

    describe('with click on DateInput', () => {
        it('contains a Calendar', () => {
            const wrapper = getMountedWrapper();
            const input = wrapper.find('input');
            input.simulate('click');
            expect(wrapper.find(Calendar)).toHaveLength(1);
        });
    });

    describe('with click after errors', () => {
        it('works when field contains invalid input', () => {
            const wrapper = getMountedWrapper();
            const input = wrapper.find('input');
            wrapper.setProps({ value: 'invalid date' });

            input.simulate('blur');
            input.simulate('click');

            expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
            expect(wrapper.find(Calendar).exists()).toBe(true);
        });
    });

    describe('when input field changes', () => {
        it('calls onChange method', () => {
            const onChange = jest.fn();
            const wrapper = getMountedWrapper({ onChange });
            const input = wrapper.find('input');

            input.simulate('change', { target: { value: '14.03.2017' } });

            expect(onChange).toHaveBeenCalledTimes(1);
        });
    });

    describe('given prop', () => {
        describe('calendarAbove', () => {
            it('has correct calendar above class', () => {
                const wrapper = getMountedWrapper({ calendarAbove: true });
                wrapper.find('input').simulate('focus');

                expect(
                    wrapper
                        .find('.ffe-calendar--datepicker')
                        .hasClass('ffe-calendar--datepicker--above'),
                ).toBe(true);
            });
        });

        describe('onError', () => {
            it('runs the error callback', () => {
                const onError = jest.fn();
                const wrapper = getMountedWrapper({
                    value: 'iamturtles',
                    onError,
                });

                const input = wrapper.find('input');
                input.simulate('blur');

                expect(onError).toHaveBeenCalledWith(
                    ErrorTypes.INVALID_DATE_FORMAT,
                    i18n.nb[ErrorTypes.INVALID_DATE_FORMAT],
                );
            });
        });

        describe('ariaInvalid', () => {
            it('has correct aria-invalid value if given prop', () => {
                const wrapper = getMountedWrapper({ ariaInvalid: true });
                expect(wrapper.find('input').prop('aria-invalid')).toBe('true');
            });
        });

        describe('inputProps', () => {
            it('is passed on to input field', () => {
                const inputProps = {
                    className: 'customClass',
                    id: 'custom-input-id',
                };
                const wrapper = getMountedWrapper({ inputProps });

                expect(wrapper.find('input').hasClass('customClass')).toBe(
                    true,
                );
                expect(wrapper.find('input').prop('id')).toBe(
                    'custom-input-id',
                );
            });
        });

        describe('onValidationComplete', () => {
            it('runs onValidationComplete with formatted and validated value', () => {
                const onValidationComplete = jest.fn();
                const wrapper = getMountedWrapper({ onValidationComplete });

                wrapper.setProps({ value: '14317' });

                wrapper.find('input').simulate('blur');

                expect(onValidationComplete.mock.calls[0][0]).toBe(
                    '14.03.2017',
                );
            });
        });
    });

    describe('validating input on blur', () => {
        describe('with invalid value', () => {
            it('has an error message', () => {
                const wrapper = getMountedWrapper({ value: 'iamturtles' });

                wrapper.find('input').simulate('blur');

                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
            });

            it('hides error message if hideErrors prop is true', () => {
                const wrapper = getMountedWrapper({
                    value: 'iamturtles',
                    hideErrors: true,
                });

                wrapper.find('input').simulate('blur');

                expect(wrapper.find(ERROR_CLASS).exists()).toBe(false);
            });
        });

        describe('with date', () => {
            describe('below minimum date', () => {
                it('has correct error-class', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2014',
                        minDate: '01.01.2016',
                    });

                    wrapper.find('input').simulate('blur');

                    expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
                });

                it('has correct error-message', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2014',
                        minDate: '01.01.2016',
                    });

                    wrapper.find('input').simulate('blur');

                    expect(wrapper.find(ERROR_CLASS).text()).toBe(
                        i18n.nb.MIN_DATE,
                    );
                });
            });

            describe('above maximum date', () => {
                it('has correct error-class', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2016',
                        maxDate: '01.01.2016',
                    });

                    wrapper.find('input').simulate('blur');

                    expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
                });

                it('has correct error-message', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2016',
                        maxDate: '01.01.2016',
                    });

                    wrapper.find('input').simulate('blur');

                    expect(wrapper.find(ERROR_CLASS).text()).toBe(
                        i18n.nb.MAX_DATE,
                    );
                });
            });
        });
    });
    describe('validate input on minDate prop change', () => {
        describe('with minDate after maxDate', () => {
            const overrides = {
                value: '15.11.2014',
                minDate: '01.11.2014',
                maxDate: '01.12.2014',
            };

            it('has an error message', () => {
                const wrapper = getMountedWrapper(overrides);
                wrapper.setProps({ minDate: '01.01.2015' });
                wrapper.update();

                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
            });

            it('has correct error-message', () => {
                const wrapper = getMountedWrapper(overrides);
                wrapper.setProps({ minDate: '01.01.2015' });
                wrapper.update();
                expect(wrapper.find(ERROR_CLASS).text()).toBe(i18n.nb.MIN_DATE);
            });

            it('removes the error message', () => {
                const wrapper = getMountedWrapper(overrides);
                wrapper.setProps({ minDate: '01.01.2015' });
                wrapper.update();

                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);

                wrapper.setProps({ minDate: '01.01.2014' });
                wrapper.update();

                expect(wrapper.find(ERROR_CLASS).exists()).toBe(false);
            });
        });
    });

    describe('validate input on maxDate prop change', () => {
        describe('with maxDate before minDate', () => {
            const overrides = {
                value: '15.11.2014',
                minDate: '01.11.2014',
                maxDate: '01.12.2014',
            };

            it('has an error message', () => {
                const wrapper = getMountedWrapper(overrides);
                wrapper.setProps({ maxDate: '01.01.2014' });
                wrapper.update();

                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
            });

            it('has correct error-message', () => {
                const wrapper = getMountedWrapper(overrides);
                wrapper.setProps({ maxDate: '01.01.2014' });
                wrapper.update();

                expect(wrapper.find(ERROR_CLASS).text()).toBe(i18n.nb.MAX_DATE);
            });

            describe('setting valid maxDate', () => {
                it('removes the error message', () => {
                    const wrapper = getMountedWrapper(overrides);

                    wrapper.setProps({ maxDate: '01.01.2014' });
                    wrapper.update();
                    expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);

                    wrapper.setProps({ maxDate: '01.12.2014' });
                    wrapper.update();
                    expect(wrapper.find(ERROR_CLASS).exists()).toBe(false);
                });
            });
        });
    });

    describe('validate correct visibility of Calendar on DateInput blur', () => {
        const openCalendarAndBlurDateInput = wrapper => {
            const input = wrapper.find('input');
            input.simulate('click');
            input.simulate('blur');
        };

        describe('should not be visible on invalid date value', () => {
            it('has an error message', () => {
                const wrapper = getMountedWrapper({ value: 'iamturtles' });
                openCalendarAndBlurDateInput(wrapper);
                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
            });

            it('hides error message if hideErrors prop is true', () => {
                const wrapper = getMountedWrapper({
                    value: 'iamturtles',
                    hideErrors: true,
                });
                openCalendarAndBlurDateInput(wrapper);
                expect(wrapper.find(ERROR_CLASS).exists()).toBe(false);
            });

            it('hides calendar', () => {
                const wrapper = getMountedWrapper({ value: 'iamturtles' });
                openCalendarAndBlurDateInput(wrapper);
                expect(wrapper.find(Calendar).exists()).toBe(false);
            });
        });

        describe('should be visible with valid date value', () => {
            describe('when date is below minimum date', () => {
                it('has correct error-class', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2014',
                        minDate: '01.01.2016',
                    });
                    openCalendarAndBlurDateInput(wrapper);
                    expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
                });

                it('has correct error-message', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2014',
                        minDate: '01.01.2016',
                    });
                    openCalendarAndBlurDateInput(wrapper);
                    expect(wrapper.find(ERROR_CLASS).text()).toBe(
                        i18n.nb.MIN_DATE,
                    );
                });

                it('has calendar open', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2014',
                        minDate: '01.01.2016',
                    });
                    openCalendarAndBlurDateInput(wrapper);
                    expect(wrapper.find(Calendar)).toHaveLength(1);
                });
            });

            describe('when date is above maximum date', () => {
                it('has correct error-class', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2016',
                        maxDate: '01.01.2016',
                    });
                    openCalendarAndBlurDateInput(wrapper);
                    expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
                });

                it('has correct error-message', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2016',
                        maxDate: '01.01.2016',
                    });
                    openCalendarAndBlurDateInput(wrapper);
                    expect(wrapper.find(ERROR_CLASS).text()).toBe(
                        i18n.nb.MAX_DATE,
                    );
                });

                it('has calendar open', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2016',
                        maxDate: '01.01.2016',
                    });
                    openCalendarAndBlurDateInput(wrapper);
                    expect(wrapper.find(Calendar)).toHaveLength(1);
                });
            });
        });
    });
});
