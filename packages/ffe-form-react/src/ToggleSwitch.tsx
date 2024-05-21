import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import i18n from './i18n/i18n';

export interface ToggleSwitchProps
    extends React.ComponentPropsWithoutRef<'input'> {
    /** A second line of text in the label */
    locale?: 'nb' | 'nn' | 'en';
    /** On/Off text language */
    description?: string;
    /** Custom text to specify the on-option */
    onText?: string;
    /** Custom text to specify the off-option */
    offText?: string;
    /** Hide On & Off labels next to switch */
    hideOnOff?: boolean;
    /** Override the value attribute of the input with a custom one */
    value?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
    children,
    className,
    description,
    hideOnOff,
    onText,
    offText,
    id,
    value = 'on',
    locale = 'nb',
    ...rest
}) => {
    const generatedId = useRef(id ?? `toggle-${uuidv4()}`).current;

    const text = i18n[locale];

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
                id={generatedId}
                value={value}
                {...rest}
            />
            <label className="ffe-toggle-switch__label" htmlFor={generatedId}>
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
};
