import React, { Component } from 'react';
import {
    bool,
    func,
    node,
    number,
    object,
    oneOf,
    oneOfType,
    string
} from 'prop-types';
import hash from 'nfe-hash';
import classnames from 'classnames';

const inlineStyles = {
    display: 'inline-block'
};

const createId = values => `radio-button-${hash(values)}`;

class RadioBase extends Component {

    constructor(props) {
        super(props);
        this.state = { closed: true };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ closed: !this.state.closed });
    }

    render() {
        const {
            'aria-invalid': ariaInvalid = false,
            children,
            id,
            inline,
            invalid = false,
            label,
            labelClasses,
            name,
            style,
            tooltip,
            value,
            ...rest
        } = this.props;

        const domId = id || createId({ name, value, label, inline });
        const invalidAsString = String(ariaInvalid ? ariaInvalid : invalid);

        return (
            <div style={inline ? { ...inlineStyles, ...style } : style} >
                <div>
                    <input
                        aria-invalid={invalidAsString}
                        className="ffe-radio-input"
                        id={domId}
                        name={name}
                        type="radio"
                        value={value}
                        {...rest}
                    />
                    <label
                        className={classnames(
                            labelClasses,
                            { 'ffe-radio-button--invalid': invalidAsString === 'true' },
                            { 'ffe-radio-button--with-tooltip': tooltip })}
                        htmlFor={domId}
                    >
                        {label || children}
                    </label>
                    {tooltip &&
                        <div className="ffe-radio-button__tooltip-icon" >
                            <button
                                className={classnames(
                                    'ffe-tooltip__icon',
                                    { 'ffe-tooltip__icon--active': !this.state.closed }
                                )}
                                onClick={this.onClick}
                            >
                                ?
                            </button>
                        </div>
                    }
                </div>
                {tooltip &&
                    <p
                        ref={input => {
                            this.tooltipText = input;
                        }}
                        style={{ maxHeight: this.state.closed ? '0' : this.tooltipText.scrollHeight }}
                        className={classnames(
                            'ffe-tooltip__text',
                            'ffe-radio-button__tooltip-text',
                            { 'ffe-tooltip__text--active': !this.state.closed })}
                    >
                        {tooltip}
                    </p>
                }
            </div>
        );
    }
}

RadioBase.propTypes = {
    'aria-invalid': oneOf(['true', 'false', true, false]),
    checked: bool,
    children: node,
    disabled: bool,
    id: string,
    inline: bool,
    invalid: oneOf(['true', 'false', true, false]),
    label: string,
    labelClasses: string.isRequired,
    name: string,
    onChange: func,
    style: object,
    tooltip: string,
    value: oneOfType([
        string,
        number,
        bool
    ]).isRequired,
};

export default RadioBase;
