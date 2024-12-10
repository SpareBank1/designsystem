import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { DatepickerContext } from '../datelogic/DatepickerContext';
import { SpinButton } from './SpinButton';
import { PadZero } from './PadZero';
import { Button } from '../button';
import { v4 as uuid } from 'uuid';
import { Calendar } from '../calendar';
import { isDateInputWithTwoDigitYear, validateDate } from '../util/dateUtil';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { getSimpleDateFromString } from '../datelogic/simpledate';
import { ErrorFieldMessage } from '@sb1/ffe-form-react/src/message';
import i18n from '../i18n/i18n';

export interface DatepickerProps {
    'aria-invalid'?: React.ComponentProps<'input'>['aria-invalid'];
    ariaInvalid?: string | boolean;
    calendarAbove?: boolean;
    id?: string;
    inputProps?: Omit<
        React.ComponentPropsWithRef<'input'>,
        'aria-invalid' | 'value' | 'id'
    >;
    maxDate?: string | null;
    minDate?: string | null;
    onChange: (date: string) => void;
    fullWidth?: boolean;
    fieldMessage?: string | null;
}

export const DatepickerComp: React.FC<DatepickerProps> = ({
    'aria-invalid': ariaInvalidProp,
    ariaInvalid: ariaInvalidState,
    calendarAbove,
    maxDate: maxDateProp,
    minDate: minDateProp,
    onChange,
    fullWidth,
    fieldMessage,
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
    const datepickerId = useRef(uuid());
    const buttonRef = useRef<HTMLButtonElement>(null);
    const monthRef = useRef<HTMLSpanElement>(null);
    const yearRef = useRef<HTMLSpanElement>(null);

    const getFieldMessageId = () => {
        return fieldMessage
            ? `${datepickerId.current}-fieldmessage`
            : undefined;
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

    /**
     * Adds a flag on the click event so that the globalClickHandler()
     * can determine whether the ID matches. Makes it so that only one datepicker can be open at the same time
     */
    const addFlagOnClickEventClickHandler = (evt: React.MouseEvent) => {
        const nativeEvent = evt.nativeEvent as any;
        nativeEvent.__datepickerID = datepickerId.current;
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

        return ariaInvalidTotal ? 'true' : undefined;
    };
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions
        <div
            className={classNames('ffe-datepicker', {
                'ffe-datepicker--full-width': fullWidth,
                'ffe-input-group--message': hasMessage,
            })}
            data-testid="date-picker"
            onClick={addFlagOnClickEventClickHandler}
            tabIndex={-1}
            role={'group'}
        >
            <div className="ffe-input-field ffe-dateinput">
                <SpinButton
                    onSpinButtonChange={(newValue, allowFocusNext = true) => {
                        return allowFocusNext
                            ? setDay(newValue, () =>
                                  monthRef.current?.focus({
                                      preventScroll: true,
                                  }),
                              )
                            : setDay(newValue);
                    }}
                    maxLength={2}
                    aria-invalid={
                        ariaInvalid() as unknown as React.ComponentPropsWithRef<'span'>['aria-invalid']
                    }
                    value={day ?? undefined}
                    min={1}
                    max={31}
                    // @ts-ignore
                    aria-valuetext={`${day}`}
                    aria-label={i18n[locale].DAY}
                >
                    {day ? <PadZero value={day} /> : 'dd'}
                </SpinButton>
                .
                <SpinButton
                    ref={monthRef}
                    onSpinButtonChange={(newValue, allowFocusNext = true) => {
                        return allowFocusNext
                            ? setMonth(newValue, () =>
                                  yearRef.current?.focus({
                                      preventScroll: true,
                                  }),
                              )
                            : setMonth(newValue);
                    }}
                    aria-invalid={
                        ariaInvalid() as unknown as React.ComponentPropsWithRef<'span'>['aria-invalid']
                    }
                    maxLength={2}
                    value={month ?? undefined}
                    min={1}
                    max={12}
                    // @ts-ignore
                    aria-valuetext={`${month} - ${i18n[locale][`MONTH_${month}`]}`}
                    aria-label={i18n[locale].MONTH}
                >
                    {month ? <PadZero value={month} /> : 'mm'}
                </SpinButton>
                .
                <SpinButton
                    ref={yearRef}
                    onSpinButtonChange={newValue => {
                        setYear(newValue);
                    }}
                    aria-invalid={
                        ariaInvalid() as unknown as React.ComponentPropsWithRef<'span'>['aria-invalid']
                    }
                    aria-valuenow={year ?? undefined}
                    maxLength={4}
                    value={year ?? undefined}
                    min={1}
                    max={9999}
                    aria-label={i18n[locale].YEAR}
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
