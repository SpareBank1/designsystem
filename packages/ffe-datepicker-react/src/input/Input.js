import React, { Component } from 'react';
import { bool, func, oneOfType, string, shape } from 'prop-types';
import classNames from 'classnames';
import KalenderIkon from '@sb1/ffe-icons-react/lib/kalender-ikon';

export default class Input extends Component {
    focus() {
        this._input.focus();
    }

    inputClassNames(extraClassNames) {
        return classNames(
            'ffe-dateinput__field',
            'ffe-input-field',
            extraClassNames,
        );
    }

    render() {
        const {
            ariaInvalid,
            inputProps = {},
            onBlur,
            onChange,
            onFocus,
            onKeyDown,
            value,
        } = this.props;

        return (
            <div className="ffe-dateinput">
                <input
                    aria-invalid={String(
                        this.props['aria-invalid'] || ariaInvalid,
                    )}
                    maxLength="10"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    ref={c => {
                        this._input = c;
                    }}
                    value={value}
                    {...inputProps}
                    className={this.inputClassNames(inputProps.className)}
                />
                <KalenderIkon className="ffe-dateinput__icon" />
            </div>
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
    onFocus: func,
    onKeyDown: func,
    value: string.isRequired,
};
