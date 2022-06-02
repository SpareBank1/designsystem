import React from 'react';
import { bool, node, string, oneOf } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import i18n from './i18n/i18n';

class ToggleSwitch extends React.Component {
    id = `toggle-${uuidv4()}`;

    render() {
        const {
            children,
            className,
            description,
            hideOnOff,
            onText,
            offText,
            id,
            ...rest
        } = this.props;

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
                    'ffe-toggle-switch',
                    { 'ffe-toggle-switch--hide-on-off': hideOnOff },
                    className,
                )}
            >
                <input
                    className="ffe-toggle-switch__input"
                    type="checkbox"
                    id={id || this.id}
                    {...rest}
                />
                <label
                    className="ffe-toggle-switch__label"
                    htmlFor={id || this.id}
                >
                    <span className="ffe-toggle-switch__label-text">
                        {children}
                        {description && (
                            <span className="ffe-toggle-switch__label-description">
                                {description}
                            </span>
                        )}
                    </span>
                    {!hideOnOff && (
                        <span
                            className="ffe-toggle-switch__label-off"
                            aria-hidden="true"
                        >
                            {offText ? offText : text.OFF}
                        </span>
                    )}
                    <span
                        className="ffe-toggle-switch__switch"
                        aria-hidden="true"
                    />
                    {!hideOnOff && (
                        <span
                            className="ffe-toggle-switch__label-on"
                            id="test"
                            aria-hidden="true"
                        >
                            {onText ? onText : text.ON}
                        </span>
                    )}
                </label>
            </div>
        );
    }
}

ToggleSwitch.propTypes = {
    /** The label text */
    children: node.isRequired,
    /** Any extra classes */
    className: string,
    /** A second line of text in the label */
    locale: oneOf(['nb', 'nn', 'en']),
    /** On/Off text language */
    description: string,
    /** Custom text to specify the on-option */
    onText: string,
    /** Custom text to specify the off-option */
    offText: string,
    /** Hide On & Off labels next to switch */
    hideOnOff: bool,
    /** Override the generated id with a custom one */
    id: string,
    /** Override the value attribute of the input with a custom one */
    value: string,
};

ToggleSwitch.defaultProps = {
    value: 'on',
    locale: 'nb',
    hideOnOff: false,
};

export default ToggleSwitch;
