import React from 'react';

import DateInput from '../input';
import Calendar from '../calendar';
import Datepicker from './Datepicker';
import i18n from '../i18n/i18n';
import ErrorTypes from '../datelogic/error-types';
import KeyCode from '../util/keyCode';

const defaultProps = {
    value: '',
    onChange: () => {},
};

const getShallowWrapper = props =>
    shallow(<Datepicker {...defaultProps} {...props} />);
const getMountedWrapper = props =>
    mount(<Datepicker {...defaultProps} {...props} />);

const ERROR_CLASS = '.ffe-field-error-message';

describe('<Datepicker />', () => {
    describe('with empty value', () => {
        it('renders with language set to nb by default', () => {
            const wrapper = getMountedWrapper();
            expect(wrapper.prop('language')).toBe('nb');
        });

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

        it('renders a locale-respecting aria-label for the datepicker if no label is given', () => {
            let wrapper = getShallowWrapper();
            expect(wrapper.find('.ffe-datepicker').prop('aria-label')).toBe(
                i18n.nb.CHOOSE_DATE,
            );
            expect(
                wrapper.find('.ffe-datepicker').prop('aria-labelledby'),
            ).toBeUndefined();
            wrapper = getShallowWrapper({
                language: 'en',
            });
            expect(wrapper.find('.ffe-datepicker').prop('aria-label')).toBe(
                i18n.en.CHOOSE_DATE,
            );
            expect(
                wrapper.find('.ffe-datepicker').prop('aria-labelledby'),
            ).toBeUndefined();
        });

        it('renders aria-describedby if a label is given', () => {
            const wrapper = getShallowWrapper({
                label: 'Velg startdato',
            });
            expect(
                wrapper.find('.ffe-datepicker').prop('aria-label'),
            ).toBeUndefined();
            expect(
                wrapper.find('.ffe-datepicker').prop('aria-labelledby'),
            ).toBe(`ffe-datepicker-label-${wrapper.instance().datepickerId}`);
        });
    });

    describe('with click on button', () => {
        it('contains a Calendar', () => {
            const wrapper = getMountedWrapper();
            const input = wrapper.find('button');
            input.simulate('click');

            expect(wrapper.find(Calendar)).toHaveLength(1);
        });

        it('does not contain Calendar on two clicks', () => {
            const wrapper = getMountedWrapper();
            const input = wrapper.find('button');
            input.simulate('click');
            input.simulate('click');

            expect(wrapper.find(Calendar).exists()).toBe(false);
        });
    });

    describe('with click after errors', () => {
        it('works when field contains invalid input', () => {
            const wrapper = getMountedWrapper();
            const button = wrapper.find('button');
            wrapper.setProps({ value: 'invalid date' });

            button.simulate('click');

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
                wrapper.find('button').simulate('click');

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

            it('has correct aria-describedby if aria-describedby given as input prop', () => {
                const inputProps = {
                    'aria-describedby': 'test',
                };
                const wrapper = getMountedWrapper({
                    ariaInvalid: true,
                    inputProps,
                });
                expect(wrapper.find('input').prop('aria-describedby')).toBe(
                    'test',
                );
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

                wrapper.setProps({ value: '140317' });

                wrapper.find('input').simulate('blur');

                expect(onValidationComplete.mock.calls[0][0]).toBe(
                    '14.03.2017',
                );
            });
        });

        describe('fullWidth', () => {
            it('has correct full width class', () => {
                const wrapper = getMountedWrapper({ fullWidth: true });

                expect(
                    wrapper
                        .find('.ffe-datepicker')
                        .hasClass('ffe-datepicker--full-width'),
                ).toBe(true);
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

            it('keeps datepicker display state when keepDisplayStateOnError is true', () => {
                const wrapper = getMountedWrapper({
                    ...overrides,
                    keepDisplayStateOnError: true,
                });
                wrapper.setProps({ minDate: '01.01.2015' });
                wrapper.update();

                expect(wrapper.find(Calendar).exists()).toBe(false);
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

            it('keeps datepicker display state when keepDisplayStateOnError is true', () => {
                const wrapper = getMountedWrapper({
                    ...overrides,
                    keepDisplayStateOnError: true,
                });
                wrapper.setProps({ maxDate: '01.01.2014' });
                wrapper.update();

                expect(wrapper.find(Calendar).exists()).toBe(false);
            });
        });
    });

    describe('validate correct visibility of Calendar when calendar button clicked', () => {
        const openCalendar = wrapper => {
            wrapper.find('button').simulate('click');
        };

        describe('should not be visible on invalid date value', () => {
            it('has an error message', () => {
                const wrapper = getMountedWrapper({ value: 'iamturtles' });
                openCalendar(wrapper);
                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
            });

            it('hides error message if hideErrors prop is true', () => {
                const wrapper = getMountedWrapper({
                    value: 'iamturtles',
                    hideErrors: true,
                });
                openCalendar(wrapper);
                expect(wrapper.find(ERROR_CLASS).exists()).toBe(false);
            });

            it('stays open on input blur since calendar should handle own blur event', () => {
                const wrapper = getMountedWrapper({ value: 'iamturtles' });
                openCalendar(wrapper);
                expect(wrapper.find(Calendar).exists()).toBe(true);
            });
        });

        describe('should be visible with valid date value', () => {
            describe('when date is below minimum date', () => {
                it('has correct error-class', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2014',
                        minDate: '01.01.2016',
                    });
                    openCalendar(wrapper);
                    expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
                });

                it('has correct error-message', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2014',
                        minDate: '01.01.2016',
                    });
                    openCalendar(wrapper);
                    expect(wrapper.find(ERROR_CLASS).text()).toBe(
                        i18n.nb.MIN_DATE,
                    );
                });

                it('has calendar open', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2014',
                        minDate: '01.01.2016',
                    });
                    openCalendar(wrapper);
                    expect(wrapper.find(Calendar)).toHaveLength(1);
                });
            });

            describe('when date is above maximum date', () => {
                it('has correct error-class', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2016',
                        maxDate: '01.01.2016',
                    });
                    openCalendar(wrapper);
                    expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
                });

                it('has correct error-message', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2016',
                        maxDate: '01.01.2016',
                    });
                    openCalendar(wrapper);
                    expect(wrapper.find(ERROR_CLASS).text()).toBe(
                        i18n.nb.MAX_DATE,
                    );
                });

                it('has calendar open', () => {
                    const wrapper = getMountedWrapper({
                        value: '31.12.2016',
                        maxDate: '01.01.2016',
                    });
                    openCalendar(wrapper);
                    expect(wrapper.find(Calendar)).toHaveLength(1);
                });
            });
        });
    });

    describe('should have element references in rendered components', () => {
        it('it has all references when calendar is open', () => {
            const wrapper = getMountedWrapper({
                value: '01.01.2016',
                maxDate: '12.12.2016',
            });

            const renderedWrapper = wrapper.instance();
            expect(renderedWrapper.dateInputRef._input).toBeTruthy();
            expect(renderedWrapper._datepickerNode).toBeTruthy();
            expect(renderedWrapper.datepickerCalendar).toBeFalsy();
            renderedWrapper.openCalendar();
            expect(renderedWrapper.datepickerCalendar._wrapper).toBeTruthy();
        });
    });

    describe('validate correct visibility of Calendar on DateInput key press', () => {
        const toggleCalendar = wrapper => {
            const input = wrapper.find('.ffe-datepicker__button');
            input.simulate('click');
        };
        const keyDownInInput = (wrapper, keyCode, preventDefault = f => f) => {
            const input = wrapper.find('input');
            input.simulate('keydown', { which: keyCode, preventDefault });
        };

        describe('when pressing Enter', () => {
            it('calls to prevent default', () => {
                const spy = jest.fn();
                const wrapper = getMountedWrapper({
                    value: '31.12.2016',
                    maxDate: '01.01.2016',
                });
                keyDownInInput(wrapper, KeyCode.ENTER, spy);
                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('with invalid date it has correct error-class', () => {
                const wrapper = getMountedWrapper({
                    value: '31.12.2016',
                    maxDate: '01.01.2016',
                });
                toggleCalendar(wrapper);
                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
            });

            it('with invalid date it has correct error-class and opens on calendar on click', () => {
                const wrapper = getMountedWrapper({
                    value: '31.12.201',
                    maxDate: '01.01.2016',
                });

                expect(wrapper.find(ERROR_CLASS).exists()).toBe(false);
                keyDownInInput(wrapper, KeyCode.ENTER);
                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
                toggleCalendar(wrapper);
                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
                toggleCalendar(wrapper);
                expect(wrapper.find(ERROR_CLASS).exists()).toBe(true);
            });
        });

        describe('when pressing other key than Enter', () => {
            it('does not calls to prevent default', () => {
                const spy = jest.fn();
                const wrapper = getMountedWrapper({
                    value: '31.12.2016',
                    maxDate: '01.01.2016',
                });
                keyDownInInput(wrapper, KeyCode.SPACE, spy);
                expect(spy).toHaveBeenCalledTimes(0);
            });
        });
    });

    describe('try to be smart in which century to place an input of two digit years', () => {
        it('defaults to the 20th century', () => {
            const onChange = jest.fn();
            const wrapper = getMountedWrapper({ onChange });

            wrapper.setProps({ value: '101099' });
            wrapper.find('input').simulate('blur');

            expect(onChange).toHaveBeenCalledWith('10.10.2099');
        });

        it('assumes last century if maxDate is today-ish', () => {
            const onChange = jest.fn();
            const wrapper = getMountedWrapper({
                maxDate: '02.02.2022',
                onChange,
            });

            wrapper.setProps({ value: '111199' });
            wrapper.find('input').simulate('blur');

            expect(onChange).toHaveBeenCalledWith('11.11.1999');
        });

        it('assumes this century if maxDate is today-ish but input is rather close to it', () => {
            const onChange = jest.fn();
            const wrapper = getMountedWrapper({
                maxDate: '02.02.2022',
                onChange,
            });

            wrapper.setProps({ value: '121220' });
            wrapper.find('input').simulate('blur');

            expect(onChange).toHaveBeenCalledWith('12.12.2020');
        });
    });
});
