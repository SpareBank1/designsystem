import React, { Component } from 'react';
import { bool, func, oneOfType, shape, string } from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid';
import Calendar from '../calendar';
import KeyCode from '../util/keyCode';
import DateInput from '../input';
import SimpleDate from '../datelogic/simpledate';
import dateErrorTypes from '../datelogic/error-types';
import i18n from '../i18n/i18n';
import { validateDate } from '../util/dateUtil';

export default class Datepicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            closeAfter: false,
            displayDatePicker: false,
            focusOnCalendarOpen: false,
            openOnFocus: true,
            minDate: props.minDate,
            maxDate: props.maxDate,
            lastValidDate: '',
        };

        this.datepickerId = uuid.v4();

        this.openCalendar = this.openCalendar.bind(this);
        this.closeCalendar = this.closeCalendar.bind(this);
        this.closeCalendarSetInputFocus = this.closeCalendarSetInputFocus.bind(
            this,
        );
        this.clickHandler = this.clickHandler.bind(this);
        this.globalClickHandler = this.globalClickHandler.bind(this);
        this.escKeyHandler = this.escKeyHandler.bind(this);
        this.datePickedHandler = this.datePickedHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        this.divBlurHandler = this.divBlurHandler.bind(this);
        this.onInputKeydown = this.onInputKeydown.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onError = this.onError.bind(this);
    }

    componentWillUnmount() {
        this.removeGlobalEventListeners();
    }

    /* eslint-disable react/no-did-update-set-state */
    componentDidUpdate() {
        if (
            (this.props.minDate && this.props.minDate !== this.state.minDate) ||
            (this.props.maxDate && this.props.maxDate !== this.state.maxDate)
        ) {
            this.setState(
                { minDate: this.props.minDate, maxDate: this.props.maxDate },
                this.validateDateIntervals,
            );
        }
    }

    onInputFocus() {
        this.setState({
            focusOnCalendarOpen: false,
        });
        if (this.state.closeAfter === true) {
            this.setState({
                closeAfter: false,
                openOnFocus: true,
            });
            return;
        }
        this.validateDateIntervals();
        if (this.state.openOnFocus) {
            this.openCalendar();
            this._datepickerNode.click();
        }
    }

    onError(type) {
        const { language, onError } = this.props;

        const errorText = i18n[language][type];
        return onError ? onError(type, errorText) : errorText;
    }

    validateDateIntervals() {
        let nextState = {};
        const {
            onChange,
            value,
            onValidationComplete,
            keepDisplayStateOnError,
        } = this.props;

        const error = type => {
            const errorMessage = this.onError(type);

            nextState = {
                errorMessage,
                openOnFocus: true,
                ariaInvalid: true,
                displayDatePicker: keepDisplayStateOnError
                    ? this.state.displayDatePicker
                    : true,
            };
        };

        SimpleDate.fromString(
            value,
            date => {
                nextState = {
                    openOnFocus: true,
                    ariaInvalid: false,
                };

                const formattedDate = date.format();

                if (formattedDate !== value) {
                    onChange(formattedDate);
                }

                const minDate = SimpleDate.fromString(this.state.minDate);
                const maxDate = SimpleDate.fromString(this.state.maxDate);
                if (this.state.minDate && minDate && date.isBefore(minDate)) {
                    error(dateErrorTypes.MIN_DATE);
                } else if (
                    this.state.maxDate &&
                    maxDate &&
                    date.isAfter(maxDate)
                ) {
                    error(dateErrorTypes.MAX_DATE);
                }
                this.setState({
                    lastValidDate: formattedDate,
                });

                onValidationComplete(formattedDate);
            },
            errorType => {
                const emptyValue = value === '';

                if (emptyValue && this.state.errorMessage) {
                    nextState = {
                        openOnFocus: true,
                        ariaInvalid: false,
                        errorMessage: null,
                        displayDatePicker: false,
                    };
                    onValidationComplete(value);
                    return;
                } else if (emptyValue) {
                    nextState = {
                        ...this.state,
                        openOnFocus: true,
                    };
                    onValidationComplete(value);
                    return;
                }
                error(errorType);

                onValidationComplete(value);
            },
        );
        this.setState(nextState);
    }

    onInputBlur() {
        this.validateDateIntervals();
    }

    onInputKeydown(evt) {
        if (evt.which === KeyCode.ENTER) {
            evt.preventDefault();

            if (!this.state.displayDatePicker) {
                this.setState({
                    focusOnCalendarOpen: true,
                });
                this.openCalendar();
            } else {
                this.validateDateIntervals();
                this.closeCalendar();
            }
        } else if (evt.shiftKey && evt.which === KeyCode.TAB) {
            this.closeCalendarSetInputFocus();
        }
    }

    escKeyHandler(evt) {
        if (evt.which === KeyCode.ESC) {
            this.closeCalendarSetInputFocus();
        }
    }

    globalClickHandler(evt) {
        if (
            this.state.displayDatePicker &&
            !this._datepickerNode.contains(evt.target)
        ) {
            this.closeCalendar();
        }
    }

    clickHandler() {
        if (!this.state.displayDatePicker && this.state.openOnFocus) {
            this.openCalendar();
        }
    }

    blurHandler(evt) {
        if (evt.shiftKey && evt.which === KeyCode.TAB) {
            this.setState({
                openOnFocus: false,
            });
        } else if (evt.which === KeyCode.TAB) {
            this.closeCalendarSetInputFocus();
        }
    }

    divBlurHandler(evt) {
        const isBluringWithDisplayDatePickerFalse =
            evt.target === this.dateInputRef._input &&
            evt.currentTarget === this._datepickerNode &&
            !this.state.displayDatePicker;
        if (isBluringWithDisplayDatePickerFalse) {
            this.removeGlobalEventListeners();
            this.setState({
                openOnFocus: true,
                displayDatePicker: false,
                closeAfter: false,
            });
        }
    }

    datePickedHandler(date) {
        this.props.onChange(date);
        this.props.onValidationComplete(date);
        this.removeGlobalEventListeners();
        this.setState(
            {
                openOnFocus: false,
                displayDatePicker: false,
            },
            () => this.dateInputRef.focus(),
        );
    }

    openCalendar() {
        this.setState({
            displayDatePicker: true,
        });
        this.removeGlobalEventListeners();
        this.addGlobalEventListeners();
    }

    closeCalendar() {
        this.removeGlobalEventListeners();
        this.setState({ displayDatePicker: false });
    }

    closeCalendarSetInputFocus() {
        this.removeGlobalEventListeners();
        this.setState(
            {
                openOnFocus: true,
                displayDatePicker: false,
                closeAfter: true,
            },
            () => this.dateInputRef._input.focus(),
        );
    }

    addGlobalEventListeners() {
        window.addEventListener('click', this.globalClickHandler);
        window.addEventListener('keyup', this.escKeyHandler);
    }

    removeGlobalEventListeners() {
        window.removeEventListener('click', this.globalClickHandler);
        window.removeEventListener('keyup', this.escKeyHandler);
    }

    ariaInvalid() {
        const ariaInvalid =
            this.props['aria-invalid'] || this.props.ariaInvalid;

        return [null, undefined].every(val => val !== ariaInvalid)
            ? String(ariaInvalid)
            : String(this.state.ariaInvalid);
    }

    render() {
        const {
            hideErrors,
            inputProps = {},
            label,
            language,
            onChange,
            value,
        } = this.props;
        const {
            focusOnCalendarOpen,
            minDate,
            maxDate,
            lastValidDate,
        } = this.state;
        const latestValue = validateDate(value) ? value : lastValidDate;

        if (this.state.ariaInvalid && !inputProps['aria-describedby']) {
            inputProps['aria-describedby'] = `date-input-validation-${
                this.datepickerId
            }`;
        }

        const calendarClassName = classNames(
            'ffe-calendar ffe-calendar--datepicker',
            { 'ffe-calendar--datepicker--above': this.props.calendarAbove },
        );

        return (
            <div>
                {label && (
                    <label
                        className="ffe-form-label ffe-form-label--block"
                        htmlFor={inputProps.id}
                        id={`ffe-datepicker-label-${this.datepickerId}`}
                    >
                        {label}
                    </label>
                )}
                <div
                    aria-labelledby={
                        label
                            ? `ffe-datepicker-label-${this.datepickerId}`
                            : undefined
                    }
                    aria-label={label ? undefined : i18n[language].CHOOSE_DATE}
                    className="ffe-datepicker"
                    onClick={this.clickHandler}
                    ref={c => {
                        this._datepickerNode = c;
                    }}
                    role="button"
                    tabIndex={-1}
                    onBlur={this.divBlurHandler}
                >
                    <DateInput
                        aria-invalid={this.ariaInvalid()}
                        inputProps={inputProps}
                        onBlur={this.onInputBlur}
                        onChange={evt => onChange(evt.target.value)}
                        onFocus={this.onInputFocus}
                        onKeyDown={this.onInputKeydown}
                        ref={c => {
                            this.dateInputRef = c;
                        }}
                        value={value}
                    />

                    {this.state.displayDatePicker && (
                        <Calendar
                            calendarClassName={calendarClassName}
                            escKeyHandler={this.escKeyHandler}
                            language={language}
                            maxDate={maxDate}
                            minDate={minDate}
                            onDatePicked={this.datePickedHandler}
                            selectedDate={latestValue}
                            onBlurHandler={this.blurHandler}
                            focusOnOpen={focusOnCalendarOpen}
                            ref={c => {
                                this.datepickerCalendar = c;
                            }}
                        />
                    )}
                </div>

                {this.state.ariaInvalid && !hideErrors && (
                    <div
                        id={`date-input-validation-${this.datepickerId}`}
                        className="ffe-body-text ffe-field-error-message"
                        role="alert"
                    >
                        {this.state.errorMessage}
                    </div>
                )}
            </div>
        );
    }
}

Datepicker.defaultProps = {
    language: 'nb',
    keepDisplayStateOnError: false,
    onValidationComplete: () => {},
};

Datepicker.propTypes = {
    'aria-invalid': string,
    ariaInvalid: oneOfType([bool, string]),
    calendarAbove: bool,
    hideErrors: bool,
    onValidationComplete: func,
    inputProps: shape({
        className: string,
        id: string,
    }),
    label: string,
    language: string,
    maxDate: string,
    minDate: string,
    onChange: func.isRequired,
    onError: func,
    value: string.isRequired,
    keepDisplayStateOnError: bool.isRequired,
};
