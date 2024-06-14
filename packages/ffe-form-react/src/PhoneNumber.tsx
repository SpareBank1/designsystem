import React, { useRef, useImperativeHandle } from 'react';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';
import i18n from './i18n/i18n';
import { ErrorFieldMessage } from './message';

export interface PhoneNumberProps {
    numberInputProps?: React.ComponentPropsWithoutRef<'input'>;
    countryCodeInputProps?: React.ComponentPropsWithoutRef<'input'>;
    locale?: 'nn' | 'nb' | 'en';
    /** String or ErrorFieldMessage component with message */
    countryCodeFieldMessage?: string | React.ReactElement<{ id: string }>;
    /** String or ErrorFieldMessage component with message */
    numberFieldMessage?: string | React.ReactElement<{ id: string }>;
    /** String or ErrorFieldMessage component with message,
     * this should be set when both countryCode and number is in an invalid state.
     * If both countryCodeFieldMessage and numberFieldMessage is set and not this prop,
     * the component will throw an Error.
     */
    countryCodeAndNumberFieldMessage?:
        | string
        | React.ReactElement<{ id: string }>;
    className?: string;
    /** Reserve space for showing `fieldMessage`s so content below don't move
     *  vertically if an errormessage shows up. Note that this will only reserve
     *  space for one line of content, so keep messages short.
     */
    extraMargin?: boolean;
    /** If True label is changed from "Phone number" to "Mobile number" */
    isMobileNumber?: boolean;
}

const getFieldMessage = (
    countryCodeAndNumberFieldMessage?: PhoneNumberProps['countryCodeAndNumberFieldMessage'],
    countryCodeFieldMessage?: PhoneNumberProps['countryCodeFieldMessage'],
    numberFieldMessage?: PhoneNumberProps['numberFieldMessage'],
) => {
    let fieldMessage;
    if (countryCodeAndNumberFieldMessage) {
        fieldMessage = countryCodeAndNumberFieldMessage;
    } else if (countryCodeFieldMessage && numberFieldMessage) {
        console.error(
            'You should use countryCodeAndNumberFieldMessage when both countryCode and number contains an error',
        );
    } else if (countryCodeFieldMessage) {
        fieldMessage = countryCodeFieldMessage;
    } else if (numberFieldMessage) {
        fieldMessage = numberFieldMessage;
    }
    return fieldMessage;
};

export type PhoneNumberHandle = {
    readonly country: HTMLInputElement | null;
    readonly number: HTMLInputElement | null;
};

export const PhoneNumber = React.forwardRef<
    PhoneNumberHandle,
    PhoneNumberProps
>(
    (
        {
            numberInputProps,
            countryCodeInputProps,
            countryCodeFieldMessage,
            numberFieldMessage,
            countryCodeAndNumberFieldMessage,
            className,
            extraMargin,
            isMobileNumber,
            locale = 'nb',
        },
        ref,
    ) => {
        const countryRef = useRef<HTMLInputElement>(null);
        const numberRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => ({
            get country() {
                return countryRef.current;
            },
            get number() {
                return numberRef.current;
            },
        }));

        const fieldMessage = getFieldMessage(
            countryCodeAndNumberFieldMessage,
            countryCodeFieldMessage,
            numberFieldMessage,
        );

        const numberId = useRef(uuid()).current;
        const countryCodeId = useRef(uuid()).current;
        const fieldMessageId = useRef(
            React.isValidElement(fieldMessage)
                ? fieldMessage?.props?.id
                : uuid(),
        ).current;

        const supportedLocales = ['nb', 'nn', 'en'];
        const text =
            i18n[supportedLocales.indexOf(locale) !== -1 ? locale : 'nb'];

        return (
            <div
                className={classNames(
                    'ffe-phone-number',
                    'ffe-input-group',
                    { 'ffe-input-group--message': fieldMessage },
                    { 'ffe-input-group--no-extra-margin': !extraMargin },
                    className,
                )}
            >
                <div className="ffe-phone-number__input-group">
                    <div className="ffe-phone-number__country-code">
                        <label
                            className="ffe-form-label"
                            htmlFor={countryCodeId}
                        >
                            {text.COUNTRY_CODE}
                        </label>
                        <div className="ffe-phone-number__input-group">
                            <span className="ffe-phone-number__plus">+</span>
                            <input
                                ref={countryRef}
                                id={countryCodeId}
                                value={countryCodeInputProps?.value ?? '47'}
                                className={classNames(
                                    'ffe-input-field',
                                    'ffe-phone-number__country-code-input',
                                )}
                                type="tel"
                                aria-invalid={
                                    !!(
                                        countryCodeFieldMessage ||
                                        countryCodeAndNumberFieldMessage
                                    )
                                }
                                aria-describedby={
                                    !!(
                                        countryCodeFieldMessage ||
                                        countryCodeAndNumberFieldMessage
                                    )
                                        ? fieldMessageId
                                        : undefined
                                }
                                {...countryCodeInputProps}
                            />
                        </div>
                    </div>
                    <div className="ffe-phone-number__number">
                        <label className="ffe-form-label" htmlFor={numberId}>
                            {isMobileNumber
                                ? text.MOBILE_NUMBER
                                : text.PHONE_NUMBER}
                        </label>
                        <input
                            ref={numberRef}
                            id={numberId}
                            type="tel"
                            className={classNames(
                                'ffe-input-field',
                                'ffe-phone-number__phone-input',
                            )}
                            aria-invalid={
                                !!(
                                    numberFieldMessage ||
                                    countryCodeAndNumberFieldMessage
                                )
                            }
                            aria-describedby={
                                !!(
                                    numberFieldMessage ||
                                    countryCodeAndNumberFieldMessage
                                )
                                    ? fieldMessageId
                                    : undefined
                            }
                            {...numberInputProps}
                        />
                    </div>
                </div>
                {typeof fieldMessage === 'string' && (
                    <ErrorFieldMessage as="p" id={fieldMessageId}>
                        {fieldMessage}
                    </ErrorFieldMessage>
                )}
                {React.isValidElement(fieldMessage) &&
                    React.cloneElement(fieldMessage, {
                        id: fieldMessageId,
                    })}
            </div>
        );
    },
);
