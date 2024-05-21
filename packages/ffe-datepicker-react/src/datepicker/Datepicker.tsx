import React, { Component } from 'react';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import { Calendar } from '../calendar';
import { DateInput } from '../input';
import { Button } from '../button';
import { getSimpleDateFromString } from '../datelogic/simpledate';
import { validateDate, isDateInputWithTwoDigitYear } from '../util/dateUtil';
import debounce from 'lodash.debounce';

export interface DatepickerProps {
    'aria-invalid'?: React.ComponentProps<'input'>['aria-invalid'];
    ariaInvalid?: string | boolean;
    calendarAbove?: boolean;
    id?: string;
    inputProps?: Pick<
        React.ComponentPropsWithRef<'input'>,
        'ref' | 'className' | 'id' | 'aria-describedby'
    >;
    locale?: 'nb' | 'nn' | 'en';
    maxDate?: string;
    minDate?: string;
    onChange: (date: string) => void;
    value: string;
    fullWidth?: boolean;
}

interface DatepickerState {
    lastValidDate: string;
    displayDatePicker: boolean;
    minDate?: string;
    maxDate?: string;
    calendarActiveDate: string;
    ariaInvalid?: boolean;
}

export class Datepicker extends Component<DatepickerProps, DatepickerState> {
    private readonly datepickerId: string;

    constructor(props: DatepickerProps) {
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
        this.closeCalendarSetInputFocus =
            this.closeCalendarSetInputFocus.bind(this);
        this.calendarButtonClickHandler =
            this.calendarButtonClickHandler.bind(this);
        this.addFlagOnClickEventClickHandler =
            this.addFlagOnClickEventClickHandler.bind(this);
        this.globalClickHandler = this.globalClickHandler.bind(this);
        this.escKeyHandler = this.escKeyHandler.bind(this);
        this.datePickedHandler = this.datePickedHandler.bind(this);
        this.onInputKeydown = this.onInputKeydown.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
    }

    locale = this.props.locale ?? 'nb';
    buttonRef = React.createRef<HTMLButtonElement>();
    dateInputRef = this.props.inputProps?.ref ?? React.createRef();

    debounceCalendar = debounce((value: any) => {
        if (value !== this.state.lastValidDate && validateDate(value)) {
            this.setState({ calendarActiveDate: value, lastValidDate: value });
        }
    }, 250);

    componentWillUnmount() {
        this.removeGlobalEventListeners();
        this.debounceCalendar.cancel();
    }

    /* eslint-disable react/no-did-update-set-state */
    componentDidUpdate(prevProps: DatepickerProps, prevState: DatepickerState) {
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

    validateDateIntervals() {
        this.setState((prevState, props) => {
            let nextState = {};
            const { onChange, value } = props;

            getSimpleDateFromString(value, date => {
                nextState = {
                    ariaInvalid: false,
                };

                const maxDate = prevState.maxDate
                    ? getSimpleDateFromString(prevState.maxDate)
                    : null;

                // SimpleDate.fromString assumes years written as two digits
                // are in the 20th century.  This can be unwanted behaviour
                // when asking for dates in the past, like birth dates.
                // This little hack should catch most of these cases.
                if (
                    maxDate?.isBefore(date) &&
                    isDateInputWithTwoDigitYear(value)
                ) {
                    date.adjust({ period: 'Y', offset: -100 });
                }

                const formattedDate = date.format();

                if (formattedDate !== value) {
                    onChange(formattedDate);
                }

                nextState = {
                    ...nextState,
                    lastValidDate: formattedDate,
                };
            });

            return nextState;
        });
    }

    onInputBlur() {
        this.validateDateIntervals();
    }

    onInputKeydown(evt: React.KeyboardEvent<HTMLInputElement>) {
        if (evt.key === 'Enter') {
            evt.preventDefault();
            this.validateDateIntervals();
        }
    }

    escKeyHandler(evt: KeyboardEvent) {
        if (evt.key === 'Escape') {
            this.closeCalendarSetInputFocus();
        }
    }

    globalClickHandler(evt: MouseEvent) {
        if (
            this.state.displayDatePicker &&
            // @ts-ignore
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
    addFlagOnClickEventClickHandler(evt: React.MouseEvent) {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        evt.nativeEvent.__datepickerID = this.datepickerId;
    }

    datePickedHandler(date: string) {
        this.props.onChange(date);
        this.removeGlobalEventListeners();
        this.setState(
            {
                displayDatePicker: false,
                calendarActiveDate: date,
            },
            () => this.buttonRef.current?.focus(),
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
            () => this.buttonRef.current?.focus(),
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
        const { inputProps = {}, onChange, value, fullWidth } = this.props;

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
                {/*
                 * This element is not an actual button, but the onClick is something that happens under the hood,
                 * that the user is not aware of. So it is not a semantic button for the user.
                 * Thus we do not want to add a role, so we suppress the linting rule.
                 */}
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div
                    className={datepickerClassName}
                    data-testid="date-picker"
                    onClick={this.addFlagOnClickEventClickHandler}
                    tabIndex={-1}
                >
                    <div className="ffe-datepicker--wrapper">
                        <DateInput
                            id={this.props.id}
                            {...this.props.inputProps}
                            ariaInvalid={this.ariaInvalid()}
                            onBlur={this.onInputBlur}
                            onChange={evt => onChange(evt.target.value)}
                            onKeyDown={this.onInputKeydown}
                            ref={this.dateInputRef}
                            value={value}
                            locale={this.locale}
                        />
                        <Button
                            onClick={this.calendarButtonClickHandler}
                            value={value}
                            locale={this.locale}
                            ref={this.buttonRef}
                        />
                    </div>
                    {this.state.displayDatePicker && (
                        <Calendar
                            calendarClassName={calendarClassName}
                            escKeyHandler={evt => {
                                if (evt.key === 'Escape') {
                                    this.closeCalendarSetInputFocus();
                                }
                            }}
                            locale={this.locale}
                            maxDate={maxDate}
                            minDate={minDate}
                            onDatePicked={this.datePickedHandler}
                            selectedDate={this.state.calendarActiveDate}
                            focusOnMount={true}
                        />
                    )}
                </div>
            </div>
        );
    }
}
