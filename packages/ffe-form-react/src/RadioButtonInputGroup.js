import React from 'react';
import { bool, func, oneOfType, oneOf, node, string, number } from 'prop-types';
import classNames from 'classnames';
import ErrorFieldMessage from './ErrorFieldMessage';
import Tooltip from './Tooltip';

const RadioButtonInputGroup = props => {
    const {
        children,
        className,
        extraMargin = true,
        description,
        fieldMessage,
        inline,
        label,
        name,
        selectedValue,
        tooltip,
        ...rest
    } = props;

    if (tooltip && description) {
        throw new Error(
            'Don\'t use both "tooltip" and "description" on an <RadioButtonInputGroup />, pick one of them',
        );
    }

    const buttonProps = {
        inline,
        name,
        onChange: /* istanbul ignore next */ f => f,
        selectedValue,
    };

    return (
        <fieldset
            className={classNames(
                'ffe-input-group',
                { 'ffe-input-group--no-extra-margin': !extraMargin },
                { 'ffe-input-group--message': !!fieldMessage },
                className,
            )}
            {...rest}
        >
            {label && (
                <legend
                    className={classNames(
                        'ffe-form-label',
                        'ffe-form-label--block',
                    )}
                >
                    {label}
                    {typeof tooltip === 'string' && (
                        <Tooltip>{tooltip}</Tooltip>
                    )}
                    {React.isValidElement(tooltip) && tooltip}
                </legend>
            )}

            {typeof description === 'string' && (
                <div className="ffe-small-text">{description}</div>
            )}
            {React.isValidElement(description) && description}

            {children({ ...buttonProps })}

            {typeof fieldMessage === 'string' && (
                <ErrorFieldMessage element="p">
                    {fieldMessage}
                </ErrorFieldMessage>
            )}
            {React.isValidElement(fieldMessage) && fieldMessage}
        </fieldset>
    );
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
    /** To just render a static, always visible tooltip, use this. */
    description: oneOfType([node, string]),
    /** Reserve space for showing `fieldMessage`s so content below don't move
     *  vertically if an errormessage shows up. Note that this will only reserve
     *  space for one line of content, so keep messages short.
     */
    extraMargin: bool,
    /** String or ErrorFieldMessage component with message */
    fieldMessage: oneOfType([node, string]),
    /**
     * Indicates whether the radio buttons inside this radio button group is
     * rendered inline or as a block.
     * */
    inline: bool,
    /**
     * The text describing the radio button set. Note that if you don't use this
     * prop but provide your own label you should make sure your solution passes
     * acessibility validation using a tool such as aXe DevTools.
     */
    label: oneOfType([node, string]),
    /** The name of the radio button, required to avoid missing name */
    name: string.isRequired,
    /** Change handler, receives value of selected radio button */
    onChange: func,
    /** The currently selected value */
    selectedValue: oneOfType([bool, string, number]),
    /**
     * String or Tooltip component with further detail about the radio button
     * set
     * */
    tooltip: oneOfType([node, string]),
};

export default RadioButtonInputGroup;
