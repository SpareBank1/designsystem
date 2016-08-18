import React, { Component, PropTypes } from 'react';
import hash from 'nfe-hash';

const inlined = {
    display: 'inline-block'
};

class RadioBase extends Component {

    constructor(props) {
        super(props);

        let styles = props.style;
        if(props.inline) {
            styles = Object.assign({}, inlined, styles);
        }
        this.state = { styles };
    }

    render() {
        const {
            checked,
            children,
            disabled,
            inline,
            label,
            labelClasses,
            name,
            onChange,
            value,
        } = this.props;

        const id = `radio-button-${ hash({ name, value, label, inline }) }`;

        return (
            <div style={ this.state.styles }>
                <input type="radio"
                       className="ffe-radio-input"
                       name={ name }
                       value={ value }
                       id={ id }
                       checked={ checked }
                       disabled={ disabled }
                       onChange={ onChange }
                />
                <label className={ labelClasses } htmlFor={ id }>
                    { label || children }
                </label>
            </div>
        );
    }
}

RadioBase.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    inline: PropTypes.bool,
    label: PropTypes.string,
    labelClasses: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object,
    value: PropTypes.string.isRequired,
};

export default RadioBase;
