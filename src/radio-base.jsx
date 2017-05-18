import React, { Component, PropTypes } from 'react';
import hash from 'nfe-hash';

const inlineStyles = {
    display: 'inline-block'
};

const createId = values => `radio-button-${ hash(values) }`;

class RadioBase extends Component {

    constructor(props) {
        super(props);
        this.state = { closed: true };
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
            tooltip,
            style,
            ...rest
        } = this.props;

        let styles = style;
        if (inline) {
            styles = Object.assign({}, inlineStyles, style);
        }
        let labelClassNames = labelClasses;
        if (tooltip) {
            labelClassNames = `${labelClasses} ffe-radio-button--with-tooltip`;
        }

        const domId = id || createId({ name, value, label, inline });

        const radioButton = (
            <div style={ styles }>
                <input
                    type="radio"
                    className="ffe-radio-input"
                    name={ name }
                    value={ value }
                    id={ domId }
                    {...rest}
                />
                <label className={ labelClassNames } htmlFor={ domId }>
                    { label || children }
                </label>
                { tooltip &&
                <div className="ffe-radio-button__tooltip-icon">
                    <button
                        className="ffe-tooltip__icon"
                        onClick={() => this.setState(Object.assign({}, this.state, {closed: !this.state.closed}))}
                    >
                        ?
                    </button>
                </div>
                }
            </div>
        );

        if (tooltip) {
            return (
                <div>
                    { radioButton }
                    { !this.state.closed &&
                    <p className="ffe-radio-button__tooltip-text">{tooltip}</p>
                    }
                </div>
            );
        }
        return radioButton;

    }
}

RadioBase.propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    inline: PropTypes.bool,
    label: PropTypes.string,
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
