/* Because we are missing aria-controls (http://www.heydonworks.com/article/aria-controls-is-poop): */
/* eslint jsx-a11y/role-has-required-aria-props:0 */
import React from 'react';
import { func, string, bool, number } from 'prop-types';
import { Icon } from '@sb1/ffe-icons-react';
import classNames from 'classnames';
import txt from '../../i18n/i18n';
import { Locale } from '../../util/types';

const closeIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDQyLjg0NyAzMDkuMDc2LTI3MS45MjRxLTguMzA3IDguMzA4LTE3Ljg4NCA4LTkuNTc2LS4zMDctMTguMjY4LTktOC42OTMtOC42OTItOC42OTMtMTguNTc2dDguNjkzLTE4LjU3Nkw0NDIuODQ3LTQ4MCAyNzEuOTI0LTY1MC45MjRxLTguMzA4LTguMzA3LTgtMTguMzg0LjMwNy0xMC4wNzYgOS0xOC43NjggOC42OTItOC42OTMgMTguNTc2LTguNjkzdDE4LjU3NiA4LjY5M0w0ODAtNTE3LjE1M2wxNzAuOTI0LTE3MC45MjNxOC4zMDctOC4zMDggMTguMzg0LTguNSAxMC4wNzYtLjE5MyAxOC43NjggOC41IDguNjkzIDguNjkyIDguNjkzIDE4LjU3NnQtOC42OTMgMTguNTc2TDUxNy4xNTMtNDgwbDE3MC45MjMgMTcwLjkyNHE4LjMwOCA4LjMwNyA4LjUgMTcuODg0LjE5MyA5LjU3Ni04LjUgMTguMjY4LTguNjkyIDguNjkzLTE4LjU3NiA4LjY5M3QtMTguNTc2LTguNjkzTDQ4MC00NDIuODQ3WiIvPjwvc3ZnPg==';
const expandMoreIcon =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+';

const InputField = props => {
    const {
        onKeyDown,
        id,
        placeholder,
        isSuggestionsShowing,
        ariaInvalid,
        onClick,
        inputFieldRef,
        highlightedIndex,
        suggestionListId,
        name,
        readOnly,
        locale,
        value,
        onBlur,
        onFocus,
        onChange,
        onReset,
    } = props;
    const handleChange = ({ target: { value: newValue } }) =>
        onChange(newValue);

    const handleReset = e => {
        e.preventDefault();
        onReset();
    };

    const onExpandOrCollapse = e => {
        e.preventDefault();
        if (isSuggestionsShowing) {
            onBlur();
        } else {
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
                    : null
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
                    aria-label={txt[locale].RESET_SEARCH}
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
                        ? txt[locale].ACCOUNTSLIST_CLOSE
                        : txt[locale].ACCOUNTSLIST_OPEN
                }
            >
                <Icon
                    fileUrl={expandMoreIcon}
                    size="md"
                    weight={300}
                    className={classNames(
                        'ffe-base-selector__expand-button-icon',
                        {
                            'ffe-base-selector__expand-button-icon--invalid': ariaInvalid,
                        },
                    )}
                />
            </button>
        </div>
    );
};

InputField.propTypes = {
    onChange: func.isRequired,
    onKeyDown: func.isRequired,
    value: string.isRequired,
    onReset: func.isRequired,
    isSuggestionsShowing: bool.isRequired,
    id: string.isRequired,
    readOnly: bool,
    placeholder: string,
    onBlur: func,
    onFocus: func,
    onClick: func,
    ariaInvalid: bool,
    inputFieldRef: func,
    highlightedIndex: number,
    suggestionListId: string,
    name: string,
    locale: Locale.isRequired,
};

InputField.defaultProps = {
    onBlur: () => {},
    onFocus: () => {},
    inputFieldRef: () => {},
    ariaInvalid: false,
    readOnly: false,
};

export default InputField;
