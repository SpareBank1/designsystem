import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import { Calendar } from '../calendar';
import { Button } from '../button';
import { getSimpleDateFromString } from '../datelogic/simpledate';
import { isDateInputWithTwoDigitYear, validateDate } from '../util/dateUtil';
import debounce from 'lodash.debounce';
import { useCalendar } from '../datelogic/CalendarContext';

export interface DatepickerProps {
    'aria-invalid'?: React.ComponentProps<'input'>['aria-invalid'];
    ariaInvalid?: string | boolean;
    calendarAbove?: boolean;
    id?: string;
    inputProps?: Omit<
        React.ComponentPropsWithRef<'input'>,
        'aria-invalid' | 'value' | 'id'
    >;
    locale?: 'nb' | 'nn' | 'en';
    maxDate?: string | null;
    minDate?: string | null;
    onChange: (date: string) => void;
    value: string;
    fullWidth?: boolean;
}

export const DatepickerInner: React.FC<DatepickerProps> = props => {
    const {
        'aria-invalid': ariaInvalidProp,
        calendarAbove,
        locale = 'nb',
        maxDate: maxDateProp,
        minDate: minDateProp,
        onChange,
        value,
        fullWidth,
    } = props;

    const [displayDatePicker, setDisplayDatePicker] = useState(false);
    const [minDate, setMinDate] = useState(minDateProp);
    const [maxDate, setMaxDate] = useState(maxDateProp);
    const [lastValidDate, setLastValidDate] = useState('');
    const [calendarActiveDate, setCalendarActiveDate] = useState(
        validateDate(value) ? value : '',
    );
    // const [ariaInvalidState, setAriaInvalidState] = useState<
    //     boolean | undefined
    // >(false);
    // const [day, setDay] = useState(
    //     getSimpleDateFromString(calendarActiveDate)?.day.toString() ?? 'dd',
    // );
    const { day, updateDay, month, updateMonth, year, setYear } = useCalendar();

    const datepickerId = useRef(uuid());
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dayRef = useRef<HTMLSpanElement>(null);
    const monthRef = useRef<HTMLSpanElement>(null);
    const yearRef = useRef<HTMLSpanElement>(null);

    const debounceCalendar = useCallback(
        debounce((newValue: any) => {
            if (newValue !== lastValidDate && validateDate(newValue)) {
                setCalendarActiveDate(newValue);
                setLastValidDate(newValue);
            }
        }, 250),
        [lastValidDate],
    );

    useEffect(() => {
        return () => {
            debounceCalendar.cancel();
        };
    }, [debounceCalendar]);

    const validateDateIntervals = () => {
        const dateString = `${day}.${month}.${year}`;
        getSimpleDateFromString(dateString, date => {
            //setAriaInvalidState(false);

            const maxDateValidated = maxDateProp
                ? getSimpleDateFromString(maxDateProp)
                : null;

            if (
                maxDateValidated?.isBefore(date) &&
                isDateInputWithTwoDigitYear(dateString)
            ) {
                date.adjust({ period: 'Y', offset: -100 });
            }

            const formattedDate = date.format();

            if (formattedDate !== dateString) {
                onChange(formattedDate);
            }
            setLastValidDate(formattedDate);
        });
    };

    useEffect(() => {
        if (minDateProp !== minDate || maxDateProp !== maxDate) {
            setMinDate(minDateProp);
            setMaxDate(maxDateProp);
            validateDateIntervals();
        }
        debounceCalendar(`${day}.${month}.${year}`);
    }, [minDateProp, maxDateProp, day, month, year, debounceCalendar]);

    const onInputBlur = () => {
        validateDateIntervals();
    };

    const handleKeyDown = (
        evt: React.KeyboardEvent<HTMLSpanElement>,
        field: 'day' | 'month' | 'year',
    ) => {
        if (evt.key === 'Enter') {
            evt.preventDefault();
            validateDateIntervals();
        } else if (/\d/.test(evt.key)) {
            evt.preventDefault();
            evt.stopPropagation();
            const keyValue = evt.key;
            if (field === 'day') {
                updateDay(parseInt(keyValue));
                const newValue: number = parseInt(keyValue);

                const shouldFocusYear =
                    (day === 'dd' && newValue >= 4) ||
                    (day === '00' && newValue >= 1) ||
                    (day === '03' && newValue <= 1) ||
                    newValue >= 4;
                if (shouldFocusYear) {
                    monthRef.current?.focus();
                    return;
                }
                //check if the user has typed two numbers? Or, if the user has typed a number and then a number that is greater than 3
            } else if (field === 'month') {
                const newValue: number = parseInt(keyValue);
                const shouldFocusYear =
                    (month === 'mm' && newValue >= 2) ||
                    (month === '0' && newValue >= 1) ||
                    newValue >= 3;
                updateMonth(newValue);
                if (shouldFocusYear || month === '12' || month === '11') { //month isn't updated yet
                    yearRef.current?.focus();
                }
            } else if (field === 'year') {
                // setYear(prev =>
                //     prev === 'yyyy' ? keyValue : (prev + keyValue).slice(-4),
                // );
                setYear('2021');
            }
        } else if (evt.key === 'Backspace') {
            evt.preventDefault();
            if (field === 'day') {
                //setDay(prev => (prev.length > 1 ? prev.slice(0, -1) : 'dd'));
            } else if (field === 'month') {
                updateMonth(2);
                //updateMonth(prev => (prev.length > 1 ? prev.slice(0, -1) : 'mm'));
            } else if (field === 'year') {
                setYear(202);
                //setYear(prev => (prev.length > 1 ? prev.slice(0, -1) : 'yyyy'));
            }
        }
    };

    const closeCalendarSetInputFocus = () => {
        setDisplayDatePicker(false);
        buttonRef.current?.focus();
        validateDateIntervals();
    };

    const escKeyHandler = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            closeCalendarSetInputFocus();
        }
    };

    const globalClickHandler = (evt: MouseEvent) => {
        if (
            displayDatePicker &&
            (evt as any).__datepickerID !== datepickerId.current
        ) {
            closeCalendarSetInputFocus();
        }
    };

    const addGlobalEventListeners = () => {
        window.addEventListener('click', globalClickHandler);
        window.addEventListener('keyup', escKeyHandler);
    };

    const removeGlobalEventListeners = () => {
        window.removeEventListener('click', globalClickHandler);
        window.removeEventListener('keyup', escKeyHandler);
    };

    useEffect(() => {
        if (displayDatePicker) {
            addGlobalEventListeners();
        } else {
            removeGlobalEventListeners();
        }
        return () => {
            removeGlobalEventListeners();
        };
    }, [displayDatePicker]);

    const calendarButtonClickHandler = () => {
        validateDateIntervals();
        setDisplayDatePicker(!displayDatePicker);
    };

    const addFlagOnClickEventClickHandler = (evt: React.MouseEvent) => {
        const nativeEvent = evt.nativeEvent as any;
        nativeEvent.__datepickerID = datepickerId.current;
    };

    const datePickedHandler = (date: string) => {
        onChange(date);
        setDisplayDatePicker(false);
        setCalendarActiveDate(date);
        buttonRef.current?.focus();
    };

    const calendarClassName = classNames(
        'ffe-calendar ffe-calendar--datepicker',
        { 'ffe-calendar--datepicker--above': calendarAbove },
    );

    const datepickerClassName = classNames('ffe-datepicker', {
        'ffe-datepicker--full-width': fullWidth,
    });

    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
                className={datepickerClassName}
                data-testid="date-picker"
                onClick={addFlagOnClickEventClickHandler}
                tabIndex={-1}
            >
                <div className="ffe-datepicker--wrapper">
                    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                    <div
                        className="ffe-input-field ffe-dateinput"
                        onBlur={onInputBlur}
                        tabIndex={0}
                    >
                        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                        <span
                            className="ffe-dateinput__field"
                            tabIndex={0}
                            onFocus={() => dayRef.current?.focus()}
                            onKeyDown={e => handleKeyDown(e, 'day')}
                            ref={dayRef}
                        >
                            {day.length === 1 ? `0${day}` : day}
                        </span>
                        .
                        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                        <span
                            className="ffe-dateinput__field"
                            tabIndex={0}
                            onFocus={() => monthRef.current?.focus()}
                            onKeyDown={e => handleKeyDown(e, 'month')}
                            ref={monthRef}
                        >
                            {month.length === 1 ? `0${month}` : month}
                        </span>
                        .
                        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                        <span
                            className="ffe-dateinput__field"
                            tabIndex={0}
                            onFocus={() => yearRef.current?.focus()}
                            onKeyDown={e => handleKeyDown(e, 'year')}
                            ref={yearRef}
                        >
                            {year}
                        </span>
                    </div>
                    <Button
                        onClick={calendarButtonClickHandler}
                        value={value}
                        locale={locale}
                        ref={buttonRef}
                    />
                </div>
                {displayDatePicker && (
                    <Calendar
                        calendarClassName={calendarClassName}
                        // escKeyHandler={(
                        //     evt: React.KeyboardEventHandler<HTMLDivElement>,
                        // ) => {
                        //     if (evt.key === 'Escape') {
                        //         closeCalendarSetInputFocus();
                        //     }
                        // }}
                        locale={locale}
                        maxDate={maxDate}
                        minDate={minDate}
                        onDatePicked={datePickedHandler}
                        selectedDate={calendarActiveDate}
                        focusOnMount={true}
                    />
                )}
            </div>
        </div>
    );
};
