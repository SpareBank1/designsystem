/* Because we are missing aria-controls (http://www.heydonworks.com/article/aria-controls-is-poop): */
/* eslint jsx-a11y/role-has-required-aria-props:0 */
import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import classNames from 'classnames';
import { texts } from '../i18n/texts';
import { Locale } from '../types';

const closeIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDQyLjg0NyAzMDkuMDc2LTI3MS45MjRxLTguMzA3IDguMzA4LTE3Ljg4NCA4LTkuNTc2LS4zMDctMTguMjY4LTktOC42OTMtOC42OTItOC42OTMtMTguNTc2dDguNjkzLTE4LjU3Nkw0NDIuODQ3LTQ4MCAyNzEuOTI0LTY1MC45MjRxLTguMzA4LTguMzA3LTgtMTguMzg0LjMwNy0xMC4wNzYgOS0xOC43NjggOC42OTItOC42OTMgMTguNTc2LTguNjkzdDE4LjU3NiA4LjY5M0w0ODAtNTE3LjE1M2wxNzAuOTI0LTE3MC45MjNxOC4zMDctOC4zMDggMTguMzg0LTguNSAxMC4wNzYtLjE5MyAxOC43NjggOC41IDguNjkzIDguNjkyIDguNjkzIDE4LjU3NnQtOC42OTMgMTguNTc2TDUxNy4xNTMtNDgwbDE3MC45MjMgMTcwLjkyNHE4LjMwOCA4LjMwNyA4LjUgMTcuODg0LjE5MyA5LjU3Ni04LjUgMTguMjY4LTguNjkyIDguNjkzLTE4LjU3NiA4LjY5M3QtMTguNTc2LTguNjkzTDQ4MC00NDIuODQ3WiIvPjwvc3ZnPg==';
const expandMoreIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+';

interface InputFieldProps {
    onChange: (newValue: string) => void;
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
    value: string;
    onReset: () => void;
    isSuggestionsShowing: boolean;
    id?: string;
    readOnly?: boolean;
    placeholder?: string;
    onBlur: () => void;
    onFocus: () => void;
    onClick: React.MouseEventHandler<HTMLInputElement>;
    ariaInvalid: boolean;
    inputFieldRef: React.Ref<HTMLInputElement>;
    highlightedIndex: number;
    suggestionListId?: string;
    name?: string;
    locale: Locale;
}

export const InputField = (props: InputFieldProps) => {
    const {
        onKeyDown,
        id,
        placeholder,
        isSuggestionsShowing,
        ariaInvalid = false,
        onClick,
        inputFieldRef = () => {},
        highlightedIndex,
        suggestionListId,
        name,
        readOnly = false,
        locale,
        value,
        onBlur = () => {},
        onFocus = () => {},
        onChange,
        onReset,
    } = props;
    const handleChange = ({
        target: { value: newValue },
    }: React.ChangeEvent<HTMLInputElement>) => onChange(newValue);

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onReset();
    };

    const onExpandOrCollapse = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isSuggestionsShowing) {
            onBlur();
        } else {
            // @ts-ignore
            e.currentTarget.parentNode.firstElementChild.focus();
            onFocus();
        }
    };

    const showReset = !readOnly && value.length > 0;

    return (
        <div
            role="combobox"
            aria-expanded={isSuggestionsShowing}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-activedescendant={
                highlightedIndex > -1
                    ? `suggestion-item-${highlightedIndex}`
                    : undefined
            }
            aria-owns={suggestionListId}
        >
            <input
                className="ffe-input-field ffe-base-selector__input-field"
                onKeyDown={onKeyDown}
                autoComplete="off"
                value={value}
                id={id}
                placeholder={placeholder}
                ref={inputFieldRef}
                aria-invalid={ariaInvalid}
                aria-autocomplete="list"
                name={name}
                onClick={onClick}
                onChange={handleChange}
                readOnly={readOnly}
            />
            {showReset && (
                <button
                    className="ffe-base-selector__reset-button"
                    onMouseDown={handleReset}
                    tabIndex={-1}
                    type="button"
                    aria-label={texts[locale].RESET_SEARCH}
                >
                    <Icon
                        fileUrl={closeIcon}
                        size="sm"
                        weight={300}
                        className="ffe-base-selector__reset-button-icon"
                    />
                </button>
            )}
            <button
                className="ffe-base-selector__expand-button"
                onMouseDown={onExpandOrCollapse}
                tabIndex={-1}
                type="button"
                aria-label={
                    isSuggestionsShowing
                        ? texts[locale].ACCOUNTSLIST_CLOSE
                        : texts[locale].ACCOUNTSLIST_OPEN
                }
            >
                <Icon
                    fileUrl={expandMoreIcon}
                    size="md"
                    weight={300}
                    className={classNames(
                        'ffe-base-selector__expand-button-icon',
                        {
                            'ffe-base-selector__expand-button-icon--invalid':
                                ariaInvalid,
                        },
                    )}
                />
            </button>
        </div>
    );
};
