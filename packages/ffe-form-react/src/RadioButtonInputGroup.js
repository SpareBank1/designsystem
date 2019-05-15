import React from 'react';
import { bool, func, oneOfType, oneOf, node, string } from 'prop-types';
import classNames from 'classnames';
import ErrorFieldMessage from './ErrorFieldMessage';
import Tooltip from './Tooltip';

const ensureComponent = Comp => (input, dark) => {
    if (input.type === Comp) {
        return input;
    }
    return <Comp dark={dark}>{input}</Comp>;
};

const ensureTooltip = ensureComponent(Tooltip);

const RadioButtonInputGroup = props => {
    const {
        'aria-invalid': ariaInvalid,
        children,
        className,
        extraMargin,
        fieldMessage,
        inline,
        label,
        name,
        selectedValue,
        tooltip,
        dark,
        ...rest
    } = props;

    const buttonProps = {
        'aria-invalid': ariaInvalid || String(!!fieldMessage),
        inline,
        name,
        onChange: /* istanbul ignore next */ f => f,
        selectedValue,
    };

    const tooltipContent = tooltip && ensureTooltip(tooltip, dark);

    return (
        <fieldset
            className={classNames(
                'ffe-fieldset',
                'ffe-input-group',
                { 'ffe-fieldset--no-extra-margin': !extraMargin },
                { 'ffe-fieldset--error': !!fieldMessage },
                className,
            )}
            {...rest}
        >
            {label && (
                <legend
                    className={classNames(
                        'ffe-form-label',
                        'ffe-form-label--block',
                        { 'ffe-form-label--dark': dark },
                    )}
                >
                    {label}
                    {tooltipContent}
                </legend>
            )}
            {children({ ...buttonProps, dark })}

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
    /** The name of the radio button */
    name: string,
    /** Change handler, receives value of selected radio button */
    onChange: func,
    /** The currently selected value */
    selectedValue: oneOfType([bool, string]),
    /**
     * String or Tooltip component with further detail about the radio button
     * set
     * */
    tooltip: oneOfType([node, string]),
    /** Dark variant */
    dark: bool,
};

RadioButtonInputGroup.defaultProps = {
    extraMargin: true,
    dark: false,
};

export default RadioButtonInputGroup;
