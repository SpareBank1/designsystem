/* Because we are missing aria-controls (http://www.heydonworks.com/article/aria-controls-is-poop): */
/* eslint jsx-a11y/role-has-required-aria-props:0 */
import React from 'react';
import { func, string, bool, number } from 'prop-types';
import classNames from 'classnames';
import txt from '../../i18n/i18n';
import { Locale } from '../../util/types';

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
            e.currentTarget.previousElementSibling.focus();
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
                    <svg
                        className="ffe-base-selector__reset-button-icon"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 -960 960 960"
                        width="20"
                    >
                        <path d="M480-442.847 309.076-271.924q-8.307 8.308-17.884 8-9.576-.307-18.268-9-8.693-8.692-8.693-18.576t8.693-18.576L442.847-480 271.924-650.924q-8.308-8.307-8-18.384.307-10.076 9-18.768 8.692-8.693 18.576-8.693t18.576 8.693L480-517.153l170.924-170.923q8.307-8.308 18.384-8.5 10.076-.193 18.768 8.5 8.693 8.692 8.693 18.576t-8.693 18.576L517.153-480l170.923 170.924q8.308 8.307 8.5 17.884.193 9.576-8.5 18.268-8.692 8.693-18.576 8.693t-18.576-8.693L480-442.847Z" />
                    </svg>
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
                <svg
                    className={classNames(
                        'ffe-base-selector__expand-button-icon',
                        {
                            'ffe-base-selector__expand-button-icon--invalid': ariaInvalid,
                        },
                    )}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                >
                    <path d="M480-373.539q-7.231 0-13.461-2.308-6.231-2.308-11.846-7.923L274.924-563.539q-8.308-8.307-8.5-20.884-.193-12.577 8.5-21.269 8.692-8.692 21.076-8.692t21.076 8.692L480-442.768l162.924-162.924q8.307-8.307 20.884-8.5 12.576-.192 21.268 8.5 8.693 8.692 8.693 21.077 0 12.384-8.693 21.076L505.307-383.77q-5.615 5.615-11.846 7.923-6.23 2.308-13.461 2.308Z" />
                </svg>
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
