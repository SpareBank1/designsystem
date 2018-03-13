import React from 'react';
import { bool, func, oneOfType, oneOf, node, string } from 'prop-types';
import classNames from 'classnames';
import { ErrorFieldMessage, Tooltip } from '@sb1/ffe-form-react';

const ensureComponent = Comp => input => {
    if (input.type === Comp) {
        return input;
    }
    return <Comp>{input}</Comp>;
};

const ensureTooltip = ensureComponent(Tooltip);
const ensureFieldMessage = ensureComponent(ErrorFieldMessage);

const RadioButtonInputGroup = props => {
    const {
        'aria-invalid': ariaInvalid,
        children,
        className,
        fieldMessage,
        inline,
        label,
        name,
        onChange,
        selectedValue,
        tooltip,
        ...rest
    } = props;

    const buttonProps = {
        'aria-invalid': ariaInvalid || String(!!fieldMessage),
        inline,
        name,
        onChange,
        selectedValue,
    };

    const tooltipContent = tooltip && ensureTooltip(tooltip);
    const fieldMessageContent =
        fieldMessage && ensureFieldMessage(fieldMessage);

    return (
        <fieldset
            className={classNames('ffe-fieldset', 'ffe-input-group', className)}
            onChange={onChange}
            {...rest}
        >
            {label && (
                <legend className="ffe-form-label">
                    {label}
                    {tooltipContent}
                </legend>
            )}
            {children(buttonProps)}
            {fieldMessageContent}
        </fieldset>
    );
};

RadioButtonInputGroup.defaultProps = {
    onChange: f => f,
};

RadioButtonInputGroup.propTypes = {
    /**
     * Indicates whether the radio buttons inside this radio button group is
     * invalid or not. Propagated to all children.
     * */
    'aria-invalid': oneOf(['true', 'false']),
    /**
     * Function receiving props relevant to each radio button as an object
     * argument. Expected to return a set of radio buttons, which should get
     * these properties applied to them.
     * */
    children: func.isRequired,
    /** Additional class names applied to the fieldset */
    className: string,
    /** String or ErrorFieldMessage component with message */
    fieldMessage: oneOfType([node, string]),
    /**
     * Indicates whether the radio buttons inside this radio button group is
     * rendered inline or as a block.
     * */
    inline: bool,
    /** The text describing the radio button set */
    label: string,
    /** The name of the radio button */
    name: string,
    /** Change handler, receives value of selected radio button */
    onChange: func,
    /** The currently selected value */
    selectedValue: string,
    /**
     * String or Tooltip component with further detail about the radio button
     * set
     * */
    tooltip: oneOfType([node, string]),
};

export default RadioButtonInputGroup;
