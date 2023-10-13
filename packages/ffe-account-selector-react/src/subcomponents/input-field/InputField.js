/* Because we are missing aria-controls (http://www.heydonworks.com/article/aria-controls-is-poop): */
/* eslint jsx-a11y/role-has-required-aria-props:0 */
import React from 'react';
import { func, string, bool, number } from 'prop-types';
import Symbol from '@sb1/ffe-symbols-react';
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
                    <Symbol
                        ariaLabel=""
                        size="sm"
                        weight="300"
                        className="ffe-base-selector__reset-button-icon"
                    >
                        close
                    </Symbol>
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
                <Symbol
                    ariaLabel=""
                    size="md"
                    weight="300"
                    className={classNames(
                        'ffe-base-selector__expand-button-icon',
                        {
                            'ffe-base-selector__expand-button-icon--invalid': ariaInvalid,
                        },
                    )}
                >
                    expand_more
                </Symbol>
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
