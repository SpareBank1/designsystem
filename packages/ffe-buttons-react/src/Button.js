import React, { cloneElement } from 'react';
import { bool, func, node, oneOf, oneOfType, string } from 'prop-types';
import classNames from 'classnames';

const decorate = (icon, buttonType) =>
    cloneElement(icon, { className: `ffe-${buttonType}-button__label-icon` });

/**
 * Base component, should *not* be used directly by consumers.
 */
export default function Button(props) {
    const {
        action,
        ariaLoadingMessage,
        element: Element,
        buttonRef,
        buttonType,
        children,
        className,
        condensed,
        disableButton,
        isLoading,
        isTabbable,
        label,
        leftIcon,
        rightIcon,
        simpleContent,
        ...rest
    } = props;

    const isTertiary = buttonType === 'tertiary';

    return (
        <Element
            aria-disabled={disableButton}
            aria-busy={isLoading}
            className={classNames(
                `ffe-${buttonType}-button`,
                { [`ffe-${buttonType}-button--loading`]: isLoading },
                { [`ffe-${buttonType}-button--condensed`]: condensed },
                className,
            )}
            data-action={action}
            disabled={disableButton || isLoading}
            ref={buttonRef}
            {...(isTabbable ? {} : { tabIndex: -1 })}
            {...rest}
        >
            {simpleContent && (label || children)}
            {!simpleContent && (
                <span className={`ffe-${buttonType}-button__label`}>
                    <span
                        className={classNames(
                            `ffe-${buttonType}-button__label-text`,
                            {
                                [`ffe-${buttonType}-button__label-text--loading`]: isLoading,
                            },
                        )}
                    >
                        {leftIcon && decorate(leftIcon, buttonType)}

                        {label || children}

                        {rightIcon && rightIcon}
                    </span>

                    {!isTertiary && (
                        <span
                            className={`ffe-${buttonType}-button__label-spinner`}
                            aria-hidden={!isLoading}
                        >
                            {ariaLoadingMessage}
                        </span>
                    )}
                </span>
            )}
        </Element>
    );
}

Button.propTypes = {
    /**
     * @deprecated
     * Set `data-action` directly instead.
     */
    action: string,
    ariaLoadingMessage: string,
    buttonRef: func,
    buttonType: oneOf([
        'action',
        'primary',
        'secondary',
        'shortcut',
        'tertiary',
        'back',
    ]),
    children: node,
    /** Class names set in addition to the ffe button classes. */
    className: string,
    condensed: bool,
    /** Sets the `disabled` and `aria-disabled` attributes. */
    disableButton: bool,
    /**
     * Override the rendered element, with a DOM node or a React component
     */
    element: oneOfType([string, node]),
    isLoading: bool,
    /**
     * @deprecated
     * A button should in almost all cases be tabbable.
     * If you for some reason need it not to be, set tabIndex={-1} yourself.
     */
    isTabbable: bool,
    /**
     * @deprecated
     * Use `children` instead (i.e. `<ActionButton>Boom</ActionButton>` instead of `<ActionButton label="Boom" />`).
     */
    label: string,
    /** Rendered to the left of the label. Use if want the component to add the correct class for you. */
    leftIcon: node,
    /**
     * @deprecated
     * Set the icon as a child after the label instead.
     */
    rightIcon: node,
    /**
     * @ignore
     * Used internally by the different components in order to not render needless stuff for e.g. tertiary button.
     */
    simpleContent: bool.isRequired,
    type: oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
    ariaLoadingMessage: 'Vennligst vent',
    buttonType: 'primary',
    condensed: false,
    element: 'button',
    isTabbable: true,
    simpleContent: false,
};
