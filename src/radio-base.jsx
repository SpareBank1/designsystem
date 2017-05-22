import React, { Component, PropTypes } from 'react';
import hash from 'nfe-hash';
import classnames from 'classnames';

const inlineStyles = {
    display: 'inline-block'
};

const createId = values => `radio-button-${ hash(values) }`;

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
            children,
            id,
            inline,
            label,
            labelClasses,
            name,
            value,
            invalid,
            tooltip,
            style,
            ...rest
        } = this.props;

        const domId = id || createId({ name, value, label, inline });

        return (
            <div style={ inline ? { ...inlineStyles, ...style } : style }>
                <div>
                    <input
                        type="radio"
                        className="ffe-radio-input"
                        name={ name }
                        value={ value }
                        id={ domId }
                        {...rest}
                    />
                    <label
                        className={ classnames(
                            labelClasses,
                            { 'ffe-radio-button--invalid': invalid },
                            { 'ffe-radio-button--with-tooltip': tooltip }) }
                        htmlFor={ domId }
                    >
                        { label || children }
                    </label>
                    { tooltip &&
                        <div className="ffe-radio-button__tooltip-icon">
                            <button
                                className={ classnames(
                                    'ffe-tooltip__icon',
                                    { 'ffe-tooltip__icon--active': !this.state.closed }
                                ) }
                                onClick={ this.onClick }
                            >
                                ?
                            </button>
                        </div>
                    }
                </div>
                { tooltip &&
                    <p
                        ref={ input => {
                            this.tooltipText = input;
                        }}
                        style={{maxHeight: this.state.closed ? '0' : this.tooltipText.scrollHeight}}
                        className={ classnames(
                            'ffe-tooltip__text',
                            'ffe-radio-button__tooltip-text',
                            {'ffe-tooltip__text--active': !this.state.closed }) }
                    >
                        {tooltip}
                    </p>
                }
            </div>
        );
    }
}

RadioBase.propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    inline: PropTypes.bool,
    label: PropTypes.string,
    invalid: PropTypes.bool,
    tooltip: PropTypes.string,
    labelClasses: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]).isRequired,
};

export default RadioBase;
