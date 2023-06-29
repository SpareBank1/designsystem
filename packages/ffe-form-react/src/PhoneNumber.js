import React from 'react';
import { string, bool, func, oneOfType, object, shape, node } from 'prop-types';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

import i18n from './i18n/i18n';
import ErrorFieldMessage from './ErrorFieldMessage';

export default class PhoneNumber extends React.Component {
    numberId = uuid();
    countryCodeId = uuid();
    fieldMessageId = `input-${uuid()}-fieldmessage`;

    render() {
        const {
            number,
            countryCode,
            onCountryCodeChange,
            onNumberChange,
            onCountryCodeBlur,
            onNumberBlur,
            disabled,
            countryCodeFieldMessage,
            numberFieldMessage,
            countryCodeAndNumberFieldMessage,
            className,
            extraMargin,
            countryCodeRef,
            numberRef,
            isMobileNumber,
        } = this.props;

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

        const fieldMessageId = fieldMessage?.props?.id || this.fieldMessageId;

        const supportedLocales = ['nb', 'nn', 'en'];
        const text =
            i18n[
                supportedLocales.indexOf(this.props.locale) !== -1
                    ? this.props.locale
                    : 'nb'
            ];

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
                            htmlFor={this.countryCodeId}
                        >
                            {text.COUNTRY_CODE}
                        </label>
                        <div className="ffe-phone-number__input-group">
                            <span className="ffe-phone-number__plus">+</span>
                            <input
                                id={this.countryCodeId}
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
                        <label
                            className="ffe-form-label"
                            htmlFor={this.numberId}
                        >
                            {isMobileNumber
                                ? text.MOBILE_NUMBER
                                : text.PHONE_NUMBER}
                        </label>
                        <input
                            id={this.numberId}
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
                    <ErrorFieldMessage element="p" id={fieldMessageId}>
                        {fieldMessage}
                    </ErrorFieldMessage>
                )}
                {React.isValidElement(fieldMessage) &&
                    React.cloneElement(fieldMessage, {
                        id: fieldMessageId,
                    })}
            </div>
        );
    }
}

const noop = () => {};

PhoneNumber.propTypes = {
    number: string,
    countryCode: string,
    onCountryCodeChange: func,
    onNumberChange: func,
    onCountryCodeBlur: func,
    onNumberBlur: func,
    locale: string,
    disabled: bool,
    /** String or ErrorFieldMessage component with message */
    countryCodeFieldMessage: oneOfType([string, node]),
    /** String or ErrorFieldMessage component with message */
    numberFieldMessage: oneOfType([string, node]),
    /** String or ErrorFieldMessage component with message,
     * this should should be set when both countryCode and number is in an invalid state.
     * If both countryCodeFieldMessage and numberFieldMessage is set and not this prop,
     * the component will throw an Error.
     */
    countryCodeAndNumberFieldMessage: oneOfType([string, node]),
    className: string,
    /** Reserve space for showing `fieldMessage`s so content below don't move
     *  vertically if an errormessage shows up. Note that this will only reserve
     *  space for one line of content, so keep messages short.
     */
    extraMargin: bool,
    /** Ref-setting function, or ref created by useRef, passed to the country code input element */
    countryCodeRef: oneOfType([func, shape({ current: object })]),
    /** Ref-setting function, or ref created by useRef, passed to the number input element */
    numberRef: oneOfType([func, shape({ current: object })]),
    /** If True label is changed from "Phone number" to "Mobile number" */
    isMobileNumber: bool,
};

PhoneNumber.defaultProps = {
    countryCode: '47',
    locale: 'nb',
    onCountryCodeChange: noop,
    onNumberChange: noop,
    onCountryCodeBlur: noop,
    onNumberBlur: noop,
    extraMargin: true,
    isMobileNumber: false,
};
