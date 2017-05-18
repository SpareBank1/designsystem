import React, { Component, PropTypes } from 'react';
import hash from 'nfe-hash';

const inlineStyles = {
    display: 'inline-block'
};

const createId = values => `radio-button-${ hash(values) }`;

class RadioBase extends Component {

    constructor(props) {
        super(props);
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
            style,
            ...rest
        } = this.props;

        let styles = style;
        if (inline) {
            styles = Object.assign({}, inlineStyles, style);
        }
        const domId = id || createId({ name, value, label, inline });

        return (
            <div style={ styles }>
                <input
                    type="radio"
                    className="ffe-radio-input"
                    name={ name }
                    value={ value }
                    id={ domId }
                    {...rest}
                />
                <label className={ labelClasses } htmlFor={ domId }>
                    { label || children }
                </label>
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
