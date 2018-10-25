import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';
import classNames from 'classnames';
import KryssIkon from '@sb1/ffe-icons-react/lib/kryss-ikon';

class Input extends Component {
    constructor(props) {
        super(props);
        this.displayReset = this.displayReset.bind(this);
    }

    displayReset() {
        if (this.props.searchTerm) {
            return true;
        } else if (this.props.displayResetWhenInputHasValue) {
            return !!this.props.inputValue;
        }
        return false;
    }

    render() {
        const {
            ariaInvalid,
            inputId,
            inputValue,
            onInputChange,
            onReset,
            dark,
            // eslint-disable-next-line no-unused-vars
            searchTerm,
            // eslint-disable-next-line no-unused-vars
            displayResetWhenInputHasValue,
            ...rest
        } = this.props;
        return (
            <div>
                <input
                    className={classNames('ffe-dropdown', {
                        'ffe-searchable-dropdown__display-reset': this.displayReset(),
                        'ffe-dropdown--dark': dark,
                    })}
                    aria-invalid={String(ariaInvalid)}
                    id={inputId}
                    onChange={onInputChange}
                    value={inputValue}
                    autoComplete="off"
                    {...rest}
                />
                {this.displayReset() && (
                    <button
                        className={classNames(
                            'ffe-searchable-dropdown__reset-button',
                            {
                                'ffe-searchable-dropdown--dark__reset-button': dark,
                            },
                        )}
                        onMouseDown={onReset}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                onReset();
                            }
                        }}
                        type="button"
                    >
                        <KryssIkon className="ffe-searchable-dropdown__reset-button-icon" />
                    </button>
                )}
            </div>
        );
    }
}

Input.propTypes = {
    ariaInvalid: bool,
    inputId: string,
    inputValue: string,
    onBlur: func.isRequired,
    onInputChange: func.isRequired,
    onClick: func.isRequired,
    onFocus: func.isRequired,
    onKeyDown: func.isRequired,
    placeholder: string,
    onReset: func.isRequired,
    searchTerm: string,
    displayResetWhenInputHasValue: bool,
    /** Dark variant */
    dark: bool,
};

Input.defaultProps = {
    dark: false,
};

export default Input;
