import React from 'react';
import { string, bool, func, oneOfType, object, shape } from 'prop-types';
import uuid from 'uuid';
import classNames from 'classnames';

import i18n from './i18n/i18n';

export default class PhoneNumber extends React.Component {
    numberId = uuid.v4();
    countryCodeId = uuid.v4();

    render() {
        const {
            number,
            countryCode,
            onCountryCodeChange,
            onNumberChange,
            onCountryCodeBlur,
            onNumberBlur,
            disabled,
            countryCodeInvalid,
            numberInvalid,
            className,
            dark,
            countryCodeRef,
            numberRef,
        } = this.props;

        const supportedLocales = ['nb', 'nn', 'en'];
        const text =
            i18n[
                supportedLocales.indexOf(this.props.locale) !== -1
                    ? this.props.locale
                    : 'nb'
            ];

        return (
            <div className={`ffe-input-group ${className ? className : ''}`}>
                <div className="ffe-phone-number">
                    <div className="ffe-phone-number__country-code">
                        <label
                            className={classNames('ffe-form-label', {
                                'ffe-form-label--dark': dark,
                            })}
                            htmlFor={this.countryCodeId}
                        >
                            {text.COUNTRY_CODE}
                        </label>
                        <div className="ffe-phone-number__input-group">
                            <span
                                className={classNames(
                                    'ffe-phone-number__plus',
                                    { 'ffe-phone-number--dark__plus': dark },
                                )}
                            >
                                +
                            </span>
                            <input
                                id={this.countryCodeId}
                                className={classNames(
                                    'ffe-input-field',
                                    'ffe-phone-number__country-code-input',
                                    { 'ffe-input-field--dark': dark },
                                )}
                                type="tel"
                                disabled={disabled}
                                value={countryCode}
                                aria-invalid={countryCodeInvalid}
                                onChange={onCountryCodeChange}
                                onBlur={onCountryCodeBlur}
                                ref={countryCodeRef}
                            />
                        </div>
                    </div>
                    <div className="ffe-phone-number__number">
                        <label
                            className={classNames('ffe-form-label', {
                                'ffe-form-label--dark': dark,
                            })}
                            htmlFor={this.numberId}
                        >
                            {text.PHONE_NUMBER}
                        </label>
                        <input
                            id={this.numberId}
                            type="tel"
                            className={classNames(
                                'ffe-input-field',
                                'ffe-phone-number__phone-input',
                                { 'ffe-input-field--dark': dark },
                            )}
                            onChange={onNumberChange}
                            onBlur={onNumberBlur}
                            value={number}
                            aria-invalid={numberInvalid}
                            disabled={disabled}
                            ref={numberRef}
                        />
                    </div>
                </div>
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
    countryCodeInvalid: bool,
    numberInvalid: bool,
    className: string,
    /** Dark variant */
    dark: bool,
    /** Ref-setting function, or ref created by useRef, passed to the country code input element */
    countryCodeRef: oneOfType([func, shape({ current: object })]),
    /** Ref-setting function, or ref created by useRef, passed to the number input element */
    numberRef: oneOfType([func, shape({ current: object })]),
};

PhoneNumber.defaultProps = {
    countryCode: '47',
    locale: 'nb',
    onCountryCodeChange: noop,
    onNumberChange: noop,
    onCountryCodeBlur: noop,
    onNumberBlur: noop,
    dark: false,
};
