import React, {
    useCallback,
    useContext,
    useEffect,
    useId,
    useRef,
    useState,
} from 'react';
import { DatepickerContext } from './DatepickerContext';
import { SpinButton } from './SpinButton';
import { PadZero } from './PadZero';
import { Button } from '../button';
import { Calendar } from '../calendar';
import { isDateInputWithTwoDigitYear, validateDate } from '../util/dateUtil';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { getSimpleDateFromString } from '../datelogic/simpledate';
import { ErrorFieldMessage } from '@sb1/ffe-form-react/src/message';
import i18n from '../i18n/i18n';
import { isMonth } from '../types';

export interface DatepickerCompProps {
    'aria-invalid'?: React.ComponentProps<'input'>['aria-invalid'];
    ariaInvalid?: React.ComponentProps<'input'>['aria-invalid'];
    'aria-describedby'?: React.ComponentProps<'input'>['aria-describedby'];
    ariaDescribedby?: React.ComponentProps<'input'>['aria-describedby'];
    /** Blur used for e.g. validating the date. Triggered on blur of the last field, i.e. year. */
    onBlur?: (evt: React.FocusEvent) => void;
    calendarAbove?: boolean;
    id?: string;
    maxDate?: string | null;
    minDate?: string | null;
    onChange: (date: string) => void;
    fullWidth?: boolean;
    fieldMessage?: string | null;
    /** Id of the label describing the datepicker. Required for UU-compatibility */
    labelId: string;
}

export const DatepickerComp: React.FC<DatepickerCompProps> = ({
    ariaInvalid: ariaInvalidState,
    'aria-invalid': ariaInvalidProp,
    ariaDescribedby: ariaDescribedbyState,
    'aria-describedby': ariaDescribedbyProp,
    onBlur,
    calendarAbove,
    id,
    maxDate: maxDateProp,
    minDate: minDateProp,
    onChange,
    fullWidth,
    fieldMessage,
    labelId,
}) => {
    const {
        day,
        setDay,
        year,
        setYear,
        month,
        setMonth,
        locale,
        calendarActiveDate,
        setCalendarActiveDate,
    } = useContext(DatepickerContext);

    const [displayDatePicker, setDisplayDatePicker] = useState(false);
    const [minDate, setMinDate] = useState(minDateProp);
    const [maxDate, setMaxDate] = useState(maxDateProp);
    const [lastValidDate, setLastValidDate] = useState('');
    const datepickerId = useId();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dayRef = useRef<HTMLSpanElement>(null);
    const monthRef = useRef<HTMLSpanElement>(null);
    const yearRef = useRef<HTMLSpanElement>(null);

    const getFieldMessageId = () => {
        return fieldMessage ? `${datepickerId}-fieldmessage` : undefined;
    };

    const fieldMessageId = getFieldMessageId();
    const debounceCalendar = useCallback(
        debounce((newValue: any) => {
            if (newValue !== lastValidDate && validateDate(newValue)) {
                setCalendarActiveDate(newValue);
                setLastValidDate(newValue);
            }
        }, 250),
        [lastValidDate],
    );

    const hasMessage = !!fieldMessage;

    useEffect(() => {
        return () => {
            debounceCalendar.cancel();
        };
    }, [debounceCalendar]);

    const validateDateIntervals = () => {
        const dateString = `${day}.${month}.${year}`;
        getSimpleDateFromString(dateString, date => {
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
        if (displayDatePicker && (evt as any).__datepickerID !== datepickerId) {
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

    /**
     * Adds a flag on the click event so that the globalClickHandler()
     * can determine whether the ID matches. Makes it so that only one datepicker can be open at the same time
     */
    const addFlagOnClickEventClickHandler = (evt: React.MouseEvent) => {
        const nativeEvent = evt.nativeEvent as any;
        nativeEvent.__datepickerID = datepickerId;
    };

    const focusSpinButton = (evt: React.MouseEvent) => {
        if (
            evt.target !== yearRef.current &&
            evt.target !== buttonRef.current &&
            evt.target !== dayRef.current &&
            evt.target !== monthRef.current
        ) {
            dayRef.current?.focus();
        }
    };

    const datePickedHandler = (date: string) => {
        const simpleDate = getSimpleDateFromString(date);
        if (simpleDate) {
            setDay([simpleDate.date]);
            setMonth([simpleDate.month + 1]);
            setYear([simpleDate.year]);
            onChange(date);
            setDisplayDatePicker(false);
            setCalendarActiveDate(date);
            buttonRef.current?.focus();
        }
    };

    const ariaInvalid = () => {
        const ariaInvalidTotal = ariaInvalidProp === 'true' || ariaInvalidState;
        const isAriaInvalid =
            ariaInvalidTotal === 'true' || ariaInvalidTotal === true
                ? 'true'
                : undefined;

        return isAriaInvalid as unknown as React.ComponentPropsWithRef<'span'>['aria-invalid'];
    };

    const ariaDescribedby = () => {
        const ariaDescribedbyTotal =
            ariaDescribedbyProp ?? ariaDescribedbyState;

        return ariaDescribedbyTotal as unknown as React.ComponentPropsWithRef<'span'>['aria-describedby'];
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions
        <div
            className={classNames('ffe-datepicker', {
                'ffe-datepicker--full-width': fullWidth,
                'ffe-input-group--message': hasMessage,
            })}
            data-testid="date-picker"
            onClick={e => {
                addFlagOnClickEventClickHandler(e);
                focusSpinButton(e);
            }}
            role={'group'}
            id={id}
        >
            <div
                className={classNames('ffe-input-field', 'ffe-dateinput', {
                    'ffe-input-field--invalid': ariaInvalid(),
                })}
            >
                <SpinButton
                    ref={dayRef}
                    value={day ?? undefined}
                    min={1}
                    max={31}
                    onSpinButtonChange={(newValue, allowFocusNext = true) => {
                        onChange(`${newValue}.${month}.${year}`);
                        return allowFocusNext
                            ? setDay(newValue, () =>
                                  monthRef.current?.focus({
                                      preventScroll: true,
                                  }),
                              )
                            : setDay(newValue);
                    }}
                    nextSpinButton={monthRef}
                    maxLength={2}
                    aria-invalid={ariaInvalid()}
                    aria-valuenow={typeof day === 'number' ? day : undefined}
                    aria-valuetext={`${day}`}
                    aria-label={i18n[locale].DAY}
                    aria-describedby={ariaDescribedby()}
                    aria-labelledby={labelId}
                >
                    {day ? <PadZero value={day} /> : 'dd'}
                </SpinButton>
                .
                <SpinButton
                    ref={monthRef}
                    value={month ?? undefined}
                    min={1}
                    max={12}
                    onSpinButtonChange={(newValue, allowFocusNext = true) => {
                        onChange(`${newValue}.${month}.${year}`);
                        return allowFocusNext
                            ? setMonth(newValue, () =>
                                  yearRef.current?.focus({
                                      preventScroll: true,
                                  }),
                              )
                            : setMonth(newValue);
                    }}
                    nextSpinButton={yearRef}
                    prevSpinButton={dayRef}
                    maxLength={2}
                    aria-invalid={ariaInvalid()}
                    aria-valuenow={
                        typeof month === 'number' ? month : undefined
                    }
                    aria-valuetext={
                        isMonth(month)
                            ? `${month} - ${i18n[locale][`MONTH_${month}`]}`
                            : undefined
                    }
                    aria-label={i18n[locale].MONTH}
                    aria-describedby={ariaDescribedby()}
                    aria-labelledby={labelId}
                >
                    {month ? <PadZero value={month} /> : 'mm'}
                </SpinButton>
                .
                <SpinButton
                    ref={yearRef}
                    className={'ffe-dateinput__field-year'}
                    value={year ?? undefined}
                    min={1}
                    max={9999}
                    onSpinButtonChange={newValue => {
                        onChange(`${newValue}.${month}.${year}`);
                        setYear(newValue);
                    }}
                    prevSpinButton={monthRef}
                    maxLength={4}
                    aria-invalid={ariaInvalid()}
                    aria-valuetext={`${year}`}
                    aria-valuenow={typeof year === 'number' ? year : undefined}
                    aria-label={i18n[locale].YEAR}
                    onBlur={onBlur}
                    aria-describedby={ariaDescribedby()}
                    aria-labelledby={labelId}
                >
                    {year ? year : 'yyyy'}
                </SpinButton>
            </div>
            <Button
                onClick={calendarButtonClickHandler}
                locale={locale}
                value={calendarActiveDate || ''}
                ref={buttonRef}
            />
            {displayDatePicker && (
                <Calendar
                    calendarClassName={classNames(
                        'ffe-calendar ffe-calendar--datepicker',
                        { 'ffe-calendar--datepicker--above': calendarAbove },
                    )}
                    locale={locale}
                    maxDate={maxDate}
                    minDate={minDate}
                    onDatePicked={datePickedHandler}
                    selectedDate={calendarActiveDate}
                    focusOnMount={true}
                />
            )}

            {!!fieldMessage && (
                <ErrorFieldMessage as="p" id={fieldMessageId}>
                    {fieldMessage}
                </ErrorFieldMessage>
            )}
        </div>
    );
};
