import React, { Component } from 'react';
import { bool, func, oneOfType, string, shape, oneOf } from 'prop-types';
import classNames from 'classnames';
import i18n from '../i18n/i18n';

export default class Input extends Component {
    focus() {
        this._input.focus();
    }

    inputClassNames(extraClassNames) {
        return classNames('ffe-dateinput__field', extraClassNames);
    }

    render() {
        const {
            ariaInvalid,
            inputProps = {},
            onBlur,
            onChange,
            onKeyDown,
            value,
            language = 'nb',
        } = this.props;

        return (
            <input
                aria-invalid={String(this.props['aria-invalid'] || ariaInvalid)}
                maxLength="10"
                onBlur={onBlur}
                onChange={onChange}
                onKeyDown={onKeyDown}
                ref={c => {
                    this._input = c;
                }}
                aria-placeholder={i18n[language].DATE_FORMAT}
                value={value}
                {...inputProps}
                className={this.inputClassNames(inputProps.className)}
            />
        );
    }
}

Input.propTypes = {
    'aria-invalid': string,
    ariaInvalid: oneOfType([bool, string]),
    inputProps: shape({
        className: string,
    }),
    onBlur: func,
    onChange: func.isRequired,
    onKeyDown: func,
    value: string.isRequired,
    fullWidth: bool,
    language: oneOf(['nb', 'nn', 'en']),
};
