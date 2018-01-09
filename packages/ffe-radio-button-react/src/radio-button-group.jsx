import React, { Children } from 'react';
import {
    arrayOf,
    bool,
    func,
    number,
    oneOf,
    oneOfType,
    shape,
    string
} from 'prop-types';
import RadioBase from './radio-base';
import RadioButton from './radio-button';

const nil = () => {
};
const defaultBoolean = (lhs, rhs) => lhs || (rhs && typeof lhs === 'undefined');
const isChecked = (groupValue, radioValue, radioChecked) => groupValue ? groupValue === radioValue : radioChecked;

// This little construct might need a bit of explaining. Whenever we set an explicit value on a form field (in this specific case,
// a checked property on the radio buttons), it becomes a controlled component and React expects us to set an onChange listener on
// the same field, otherwise it'll become read-only. If we don't set the listener, React will display an annoying warning in the console
// informing us that we've probably done something stupid (a good thing).
//     In many cases using the RadioButtonGroup we're actually listening for the onChange using the fieldset element, rather than the
// input (where we're actually setting the value), correctly handling the controlled component feedback loop, but in a way that React
// can't figure out so it keeps outputting the aforementioned warning. In order to silence that warning we're just setting an empty function
// as the listener IFF we already haven't specified a field level listener AND we have an onChange listener on the RadioButtonGroup.
// Also, in order to keep it lean 'n' mean, we're only doing this stunt if we're NOT in production...
//     This Github issue pretty much sums it up: https://github.com/facebook/react/issues/1118
const listenToChange = (process.env.NODE_ENV !== 'production') ? (groupOnChange, fieldOnChange) => fieldOnChange || (groupOnChange && nil)
    : (groupOnChange, fieldOnChange) => fieldOnChange;

const RadioButtonGroup = (props) => {
    const {
        'aria-invalid': ariaInvalid,
        children,
        buttons,
        disabled,
        inline,
        invalid,
        label,
        name,
        onChange,
        value,
        ...rest
    } = props;

    let overridden;
    if (buttons) {
        // If a buttons config array is present, it takes precedent and the replaces any passed children.
        overridden = buttons.map(c =>
            <RadioButton
                aria-invalid={c['aria-invalid'] || ariaInvalid}
                checked={isChecked(value, c.value, c.checked)}
                disabled={c.disabled || disabled}
                inline={defaultBoolean(c.inline, inline)}
                invalid={c.invalid || invalid}
                key={c.value}
                label={c.label}
                name={c.name || name}
                onChange={listenToChange(onChange, c.onChange)}
                value={c.value}
            />);
    } else if (name || inline || value || disabled) {
        // Allow to default name & inline values for all children, as those are most often shared.
        overridden = Children.map(children, child => React.cloneElement(child, {
                'aria-invalid': child.props['aria-invalid'] || ariaInvalid,
                checked: isChecked(value, child.props.value, child.props.checked),
                disabled: child.props.disabled || disabled,
                inline: defaultBoolean(child.props.inline, inline),
                invalid: child.props.invalid || invalid,
                name: child.props.name || name,
                onChange: listenToChange(onChange, child.props.onChange)
            })
        );
    }

    const labelStyle = inline ? { display: 'block' } : {};

    return (
        <div className="ffe-input-group">
            <fieldset
                className="ffe-fieldset"
                value={value}
                onChange={onChange}
                {...rest}
            >
                {label &&
                <legend className="ffe-form-label" style={labelStyle}>
                    {label}
                </legend>
                }
                {overridden || children}
            </fieldset>
        </div>
    );
};

RadioButtonGroup.propTypes = {
    'aria-invalid': oneOf(['true', 'false', true, false]),
    children: (props, name) => {
        const children = Children.toArray(props[name]);
        const allowedTypes = [RadioButton, RadioBase];
        if (children.some(child => !allowedTypes.includes(child.type))) {
            return new Error(
                'Children of `RadioButtonGroup` is invalid as only `RadioBase`s and `RadioButton`s are allowed.'
            );
        }
    },
    buttons: arrayOf(shape({
        value: oneOfType([
            string,
            number,
            bool
        ]).isRequired,
        label: string.isRequired,
        name: string,
        inline: bool,
        checked: bool,
        disabled: bool,
        onChange: func
    })),
    disabled: bool,
    invalid: oneOf(['true', 'false', true, false]),
    label: string,
    name: string,
    onChange: func,
    value: oneOfType([
        string,
        number,
        bool
    ]),
};

export default RadioButtonGroup;
