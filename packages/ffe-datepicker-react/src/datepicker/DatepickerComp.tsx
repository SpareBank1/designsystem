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
import { padZero } from './padZero';
import { Button } from '../button';
import { Calendar } from '../calendar';
import {
    getPaddedDateString,
    isDateInputWithTwoDigitYear,
    validateDate,
} from '../util/dateUtil';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { getSimpleDateFromString } from '../datelogic/simpledate';
import { ErrorFieldMessage } from '@sb1/ffe-form-react';
import i18n from '../i18n/i18n';
import { isMonth } from '../types';

export interface DatepickerCompProps {
    'aria-invalid'?: React.ComponentProps<'input'>['aria-invalid'];
    ariaInvalid?: React.ComponentProps<'input'>['aria-invalid'];
    'aria-describedby'?: React.ComponentProps<'input'>['aria-describedby'];
    ariaDescribedby?: React.ComponentProps<'input'>['aria-describedby'];
    /** Trigges når fokus forlater et av feltene (dd, mm, yyyy), og neste fokuserte element ikke er et av disse feltene. */
    onBlur?: (evt: React.FocusEvent<HTMLElement>) => void;
    calendarAbove?: boolean;
    id?: string;
    /** 
     * Seneste tillatte dato. Format: 'dd.mm.yyyy'
     * 
     * Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
     * maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
     * tillater et bredere intervall.
     */
    maxDate?: string | null;
    /** 
     * Tidligste tillatte dato. Format: 'dd.mm.yyyy'
     * 
     * Merk: For å holde år-dropdownen håndterbar, begrenses årsintervallet automatisk til
     * maksimalt 10 år bakover eller fremover fra inneværende år, selv om minDate/maxDate
     * tillater et bredere intervall.
     */
    minDate?: string | null;
    onChange: (date: string) => void;
    fullWidth?: boolean;
    fieldMessage?: string | null;
    /** Id til labelen som beskriver datepicker. Påkrevd for UU-kompatibilitet */
    labelId: string;
    /** Om måned- og år-dropdown skal vises i kalenderen */
    dropdownCaption?: boolean;
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
    dropdownCaption,
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
        setLastChangedValue,
    } = useContext(DatepickerContext);

    const formatDate = useCallback(() => {
        return getPaddedDateString(day, month, year);
    }, [day, month, year]);

    const [displayDatePicker, setDisplayDatePicker] = useState(false);
    const [minDate, setMinDate] = useState(minDateProp);
    const [maxDate, setMaxDate] = useState(maxDateProp);
    const [lastValidDate, setLastValidDate] = useState(formatDate());
    const datepickerId = useId();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dayRef = useRef<HTMLSpanElement>(null);
    const monthRef = useRef<HTMLSpanElement>(null);
    const yearRef = useRef<HTMLSpanElement>(null);

    const getFieldMessageId = () => {
        return fieldMessage ? `${datepickerId}-fieldmessage` : undefined;
    };

    const _onChange = useCallback(
        (date: string) => {
            setLastChangedValue(date);
            onChange(date);
        },
        [onChange, setLastChangedValue],
    );

    const fieldMessageId = getFieldMessageId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const validateDateIntervals = useCallback(() => {
        const dateString = formatDate();
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
                setDay([date.date]);
                setMonth([date.month + 1]);
                setYear([date.year]);
            }
            setLastValidDate(formattedDate);
        });
    }, [formatDate, maxDateProp, setDay, setMonth, setYear]);

    useEffect(() => {
        if (minDateProp !== minDate || maxDateProp !== maxDate) {
            setMinDate(minDateProp);
            setMaxDate(maxDateProp);
            validateDateIntervals();
        }
        debounceCalendar(formatDate());
    }, [
        minDateProp,
        maxDateProp,
        formatDate,
        debounceCalendar,
        minDate,
        maxDate,
        validateDateIntervals,
    ]);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const handlePaste = (evt: React.ClipboardEvent) => {
        evt.preventDefault();

        const paste = (evt.clipboardData || window.Clipboard).getData('text');
        const date = getSimpleDateFromString(paste);
        if (date) {
            setDay([date.date]);
            setMonth([date.month + 1]);
            setYear([date.year]);
        }
    };

    const [init, setInit] = useState(true);

    useEffect(() => {
        if (init) {
            setInit(false);
            return;
        }
        const [day, month, year] = lastValidDate.split('.').map(Number);
        if (day * month * year > 0) {
            _onChange(lastValidDate);
            return;
        }
        _onChange('');
    }, [lastValidDate]);

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions
        <div
            className={classNames('ffe-datepicker', 'ffe-default-mode', {
                'ffe-datepicker--full-width': fullWidth,
                'ffe-input-group--message': hasMessage,
                'ffe-datepicker--invalid': ariaInvalid(),
            })}
            data-testid="date-picker"
            onClick={e => {
                addFlagOnClickEventClickHandler(e);
                focusSpinButton(e);
            }}
            role={'group'}
            id={id}
        >
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/no-noninteractive-element-interactions */}
            <div
                className={classNames('ffe-input-field', 'ffe-dateinput', {
                    'ffe-input-field--invalid': ariaInvalid(),
                })}
                onBlur={evt => {
                    const elementReceivingFocus = evt.relatedTarget;

                    if (
                        elementReceivingFocus !== yearRef.current &&
                        elementReceivingFocus !== dayRef.current &&
                        elementReceivingFocus !== monthRef.current
                    ) {
                        onBlur?.(evt);
                        validateDateIntervals();
                    }
                }}
            >
                <SpinButton
                    ref={dayRef}
                    value={day ?? undefined}
                    min={1}
                    max={31}
                    onPaste={handlePaste}
                    onSpinButtonChange={(newValue, allowFocusNext = true) => {
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
                    {day ? padZero(day) : 'dd'}
                </SpinButton>
                .
                <SpinButton
                    ref={monthRef}
                    value={month ?? undefined}
                    min={1}
                    max={12}
                    onPaste={handlePaste}
                    onSpinButtonChange={(newValue, allowFocusNext = true) => {
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
                    {month ? padZero(month) : 'mm'}
                </SpinButton>
                .
                <SpinButton
                    ref={yearRef}
                    className={'ffe-dateinput__field-year'}
                    value={year ?? undefined}
                    min={1}
                    max={9999}
                    onPaste={handlePaste}
                    onSpinButtonChange={newValue => {
                        setYear(newValue);
                    }}
                    prevSpinButton={monthRef}
                    maxLength={4}
                    aria-invalid={ariaInvalid()}
                    aria-valuetext={`${year}`}
                    aria-valuenow={typeof year === 'number' ? year : undefined}
                    aria-label={i18n[locale].YEAR}
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
                    onDatePicked={datePickedHandler}
                    selectedDate={calendarActiveDate}
                    focusOnMount={true}
                    dropdownCaption={dropdownCaption}
                    minDate={minDate}
                    maxDate={maxDate}
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
