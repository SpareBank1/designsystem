import React, { Component } from 'react';
import { bool, func, oneOfType, shape, string, PropTypes } from 'prop-types';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import Calendar from '../calendar';
import KeyCode from '../util/keyCode';
import DateInput from '../input';
import CalendarButton from '../button';
import SimpleDate from '../datelogic/simpledate';
import dateErrorTypes from '../datelogic/error-types';
import i18n from '../i18n/i18n';
import { validateDate, isDateInputWithTwoDigitYear } from '../util/dateUtil';
import debounce from 'lodash.debounce';

export default class Datepicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayDatePicker: false,
            minDate: props.minDate,
            maxDate: props.maxDate,
            lastValidDate: '',
            calendarActiveDate: validateDate(props.value) ? props.value : '',
        };

        this.datepickerId = uuid();

        this.openCalendar = this.openCalendar.bind(this);
        this.closeCalendar = this.closeCalendar.bind(this);
        this.closeCalendarSetInputFocus = this.closeCalendarSetInputFocus.bind(
            this,
        );
        this.calendarButtonClickHandler = this.calendarButtonClickHandler.bind(
            this,
        );
        this.addFlagOnClickEventClickHandler = this.addFlagOnClickEventClickHandler.bind(
            this,
        );
        this.globalClickHandler = this.globalClickHandler.bind(this);
        this.escKeyHandler = this.escKeyHandler.bind(this);
        this.datePickedHandler = this.datePickedHandler.bind(this);
        this.divBlurHandler = this.divBlurHandler.bind(this);
        this.onInputKeydown = this.onInputKeydown.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onError = this.onError.bind(this);
    }

    buttonRef = React.createRef();

    debounceCalendar = debounce(value => {
        if (value !== this.state.lastValidDate && validateDate(value)) {
            this.setState({ calendarActiveDate: value, lastValidDate: value });
        }
    }, 250);

    componentWillUnmount() {
        this.removeGlobalEventListeners();
        this.debounceCalendar.cancel();
    }

    /* eslint-disable react/no-did-update-set-state */
    componentDidUpdate(prevProps, prevState) {
        const valueChangedAndDatepickerIsToggled =
            prevProps.value !== this.props.value &&
            prevState.displayDatePicker &&
            !this.state.displayDatePicker;
        if (
            (this.props.minDate && this.props.minDate !== this.state.minDate) ||
            (this.props.maxDate && this.props.maxDate !== this.state.maxDate)
        ) {
            this.setState(
                { minDate: this.props.minDate, maxDate: this.props.maxDate },
                this.validateDateIntervals,
            );
        }

        if (valueChangedAndDatepickerIsToggled) {
            this.validateDateIntervals();
        }

        this.debounceCalendar(this.props.value);
    }

    onError(type) {
        const { language, onError } = this.props;

        const errorText = i18n[language][type];
        return onError ? onError(type, errorText) : errorText;
    }

    validateDateIntervals() {
        this.setState((prevState, props) => {
            let nextState = {};
            const { onChange, value, onValidationComplete } = props;

            const error = type => {
                const errorMessage = this.onError(type);

                nextState = {
                    errorMessage,
                    ariaInvalid: true,
                };
            };

            SimpleDate.fromString(
                value,
                date => {
                    nextState = {
                        ariaInvalid: false,
                    };

                    const maxDate = SimpleDate.fromString(prevState.maxDate);

                    // SimpleDate.fromString assumes years written as two digits
                    // are in the 20th century.  This can be unwanted behaviour
                    // when asking for dates in the past, like birth dates.
                    // This little hack should catch most of these cases.
                    if (
                        maxDate?.isBefore(date) &&
                        isDateInputWithTwoDigitYear(value)
                    ) {
                        date.adjust('Y', -100);
                    }

                    const formattedDate = date.format();

                    if (formattedDate !== value) {
                        onChange(formattedDate);
                    }

                    if (
                        SimpleDate.fromString(prevState.minDate)?.isAfter(date)
                    ) {
                        error(dateErrorTypes.MIN_DATE);
                    } else if (maxDate?.isBefore(date)) {
                        error(dateErrorTypes.MAX_DATE);
                    }

                    nextState = {
                        ...nextState,
                        lastValidDate: formattedDate,
                    };

                    onValidationComplete(formattedDate);
                },
                errorType => {
                    const emptyValue = value === '';

                    if (emptyValue && prevState.errorMessage) {
                        nextState = {
                            ariaInvalid: false,
                            errorMessage: null,
                        };
                        onValidationComplete(value);
                        return;
                    } else if (emptyValue) {
                        nextState = {
                            ...prevState,
                        };
                        onValidationComplete(value);
                        return;
                    }
                    error(errorType);

                    onValidationComplete(value);
                },
            );

            return nextState;
        });
    }

    onInputBlur() {
        this.validateDateIntervals();
    }

    onInputKeydown(evt) {
        if (evt.which === KeyCode.ENTER) {
            evt.preventDefault();
            this.validateDateIntervals();
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
            evt.__datepickerID !== this.datepickerId
        ) {
            this.closeCalendar();
        }
    }

    calendarButtonClickHandler() {
        this.validateDateIntervals();

        if (!this.state.displayDatePicker) {
            this.openCalendar();
        } else {
            this.closeCalendar();
        }
    }

    /**
     * Adds a flag on the click event so that the globalClickHandler()
     * can determine whether or not the ID matches. Makes it so that only one datepicker can be open at the same time
     */
    addFlagOnClickEventClickHandler(evt) {
        // eslint-disable-next-line no-param-reassign
        evt.nativeEvent.__datepickerID = this.datepickerId;
    }

    divBlurHandler(evt) {
        const isBluringWithDisplayDatePickerFalse =
            evt.target === this.dateInputRef._input &&
            evt.currentTarget === this._datepickerNode &&
            !this.state.displayDatePicker;
        if (isBluringWithDisplayDatePickerFalse) {
            this.removeGlobalEventListeners();
        }
    }

    datePickedHandler(date) {
        this.props.onChange(date);
        this.props.onValidationComplete(date);
        this.removeGlobalEventListeners();
        this.setState(
            {
                displayDatePicker: false,
                calendarActiveDate: date,
            },
            () => this.buttonRef.current.focus(),
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
        this.validateDateIntervals();
    }

    closeCalendarSetInputFocus() {
        this.removeGlobalEventListeners();
        this.setState(
            {
                displayDatePicker: false,
            },
            () => this.buttonRef.current.focus(),
        );
        this.validateDateIntervals();
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
            fullWidth,
            innerRef,
        } = this.props;
        const { minDate, maxDate } = this.state;

        if (this.state.ariaInvalid && !inputProps['aria-describedby']) {
            inputProps[
                'aria-describedby'
            ] = `date-input-validation-${this.datepickerId}`;
        }

        const calendarClassName = classNames(
            'ffe-calendar ffe-calendar--datepicker',
            { 'ffe-calendar--datepicker--above': this.props.calendarAbove },
        );

        const datepickerClassName = classNames('ffe-datepicker', {
            'ffe-datepicker--full-width': fullWidth,
        });

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
                {/*
                 * This element is not an actual button, but the onClick is something that happens under the hood,
                 * that the user is not aware of. So it is not a semantic button for the user.
                 * Thus we do not want to add a role, so we suppress the linting rule.
                 */}
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div
                    aria-labelledby={
                        label
                            ? `ffe-datepicker-label-${this.datepickerId}`
                            : undefined
                    }
                    aria-label={label ? undefined : i18n[language].CHOOSE_DATE}
                    className={datepickerClassName}
                    onClick={this.addFlagOnClickEventClickHandler}
                    ref={c => {
                        this._datepickerNode = c;
                    }}
                    tabIndex={-1}
                >
                    <div className="ffe-datepicker--wrapper">
                        <DateInput
                            aria-invalid={this.ariaInvalid()}
                            inputProps={inputProps}
                            onBlur={this.onInputBlur}
                            onChange={evt => onChange(evt.target.value)}
                            onKeyDown={this.onInputKeydown}
                            ref={c => {
                                if (innerRef) {
                                    innerRef.current = c;
                                }

                                this.dateInputRef = c;
                            }}
                            value={value}
                            fullWidth={fullWidth}
                            language={language}
                        />
                        <CalendarButton
                            onClick={this.calendarButtonClickHandler}
                            value={value}
                            language={language}
                            buttonRef={this.buttonRef}
                        />
                    </div>

                    {this.state.displayDatePicker && (
                        <Calendar
                            calendarClassName={calendarClassName}
                            escKeyHandler={this.escKeyHandler}
                            language={language}
                            maxDate={maxDate}
                            minDate={minDate}
                            onDatePicked={this.datePickedHandler}
                            selectedDate={this.state.calendarActiveDate}
                            onBlurHandler={this.blurHandler}
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
    fullWidth: false,
    innerRef: undefined,
};

Datepicker.propTypes = {
    'aria-invalid': string,
    ariaInvalid: oneOfType([bool, string]),
    calendarAbove: bool,
    hideErrors: bool,
    onValidationComplete: func,
    innerRef:
        PropTypes.oneOfType([func, shape({ current: PropTypes.any })]) ||
        undefined,
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
    keepDisplayStateOnError: bool,
    fullWidth: bool,
};
