import React from 'react';
import { bool, func, oneOfType, string, shape, oneOf } from 'prop-types';
import classNames from 'classnames';
import i18n from '../i18n/i18n';

const Input = React.forwardRef((props, ref) => {
    const {
        ariaInvalid,
        inputProps = {},
        onBlur,
        onChange,
        onKeyDown,
        value,
        language = 'nb',
    } = props;

    return (
        <input
            aria-invalid={String(props['aria-invalid'] || ariaInvalid)}
            maxLength="10"
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={ref}
            aria-placeholder={i18n[language].DATE_FORMAT}
            value={value}
            {...inputProps}
            className={classNames(
                'ffe-input-field ffe-dateinput__field',
                inputProps.className,
            )}
        />
    );
});

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

export default Input;
