import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';
import i18n from './i18n/i18n';
import { ErrorFieldMessage } from './message';

export interface PhoneNumberProps {
    number?: string;
    countryCode?: string;
    onCountryCodeChange?: React.ChangeEventHandler<HTMLInputElement>;
    onNumberChange?: React.ChangeEventHandler<HTMLInputElement>;
    onCountryCodeBlur?: React.FocusEventHandler<HTMLInputElement>;
    onNumberBlur?: React.FocusEventHandler<HTMLInputElement>;
    locale?: 'nn' | 'nb' | 'en';
    disabled?: boolean;
    /** String or ErrorFieldMessage component with message */
    countryCodeFieldMessage?: string | React.ReactElement<{ id: string }>;
    /** String or ErrorFieldMessage component with message */
    numberFieldMessage?: string | React.ReactElement<{ id: string }>;
    /** String or ErrorFieldMessage component with message,
     * this should should be set when both countryCode and number is in an invalid state.
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
    /** Ref-setting function, or ref created by useRef, passed to the country code input element */
    countryCodeRef?: React.Ref<HTMLInputElement>;
    /** Ref-setting function, or ref created by useRef, passed to the number input element */
    numberRef?: React.Ref<HTMLInputElement>;
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

export const PhoneNumber: React.FC<PhoneNumberProps> = ({
    number,
    countryCode = '47',
    onCountryCodeChange = () => {},
    onNumberChange = () => {},
    onCountryCodeBlur = () => {},
    onNumberBlur = () => {},
    disabled,
    countryCodeFieldMessage,
    numberFieldMessage,
    countryCodeAndNumberFieldMessage,
    className,
    extraMargin = true,
    countryCodeRef,
    numberRef,
    isMobileNumber = false,
    locale = 'nb',
}) => {
    const fieldMessage = getFieldMessage(
        countryCodeAndNumberFieldMessage,
        countryCodeFieldMessage,
        numberFieldMessage,
    );

    const numberId = useRef(uuid()).current;
    const countryCodeId = useRef(uuid()).current;
    const fieldMessageId = useRef(
        React.isValidElement(fieldMessage) ? fieldMessage?.props?.id : uuid(),
    ).current;

    const supportedLocales = ['nb', 'nn', 'en'];
    const text = i18n[supportedLocales.indexOf(locale) !== -1 ? locale : 'nb'];

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
                    <label className="ffe-form-label" htmlFor={countryCodeId}>
                        {text.COUNTRY_CODE}
                    </label>
                    <div className="ffe-phone-number__input-group">
                        <span className="ffe-phone-number__plus">+</span>
                        <input
                            id={countryCodeId}
                            className={classNames(
                                'ffe-input-field',
                                'ffe-phone-number__country-code-input',
                            )}
                            type="tel"
                            disabled={disabled}
                            value={countryCode}
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
                            onChange={onCountryCodeChange}
                            onBlur={onCountryCodeBlur}
                            ref={countryCodeRef}
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
                        id={numberId}
                        type="tel"
                        className={classNames(
                            'ffe-input-field',
                            'ffe-phone-number__phone-input',
                        )}
                        onChange={onNumberChange}
                        onBlur={onNumberBlur}
                        value={number}
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
                        disabled={disabled}
                        ref={numberRef}
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
};
