import React, { cloneElement } from 'react';
import { bool, func, node, oneOf, string } from 'prop-types';
import classNames from 'classnames';

const decorate = (icon, buttonType) =>
    cloneElement(icon, { className: `ffe-${buttonType}-button__label-icon` });

/**
 * Base component, should *not* be used directly by consumers.
 */
export default function Button(props) {
    const {
        action,
        ariaLoadingMessage = 'Vennligst vent',
        buttonRef,
        buttonType = 'primary',
        children,
        className = '',
        condensed = false,
        disableButton,
        isLoading,
        isTabbable = true,
        label,
        leftIcon,
        rightIcon,
        simpleContent = false,
        ...rest
    } = props;

    const isTertiary = buttonType === 'tertiary';

    return (
        <button
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
            {simpleContent &&
                (label || children)
            }
            {!simpleContent &&
                <span className={`ffe-${buttonType}-button__label`}>
                    <span
                        className={classNames(
                            `ffe-${buttonType}-button__label-text`,
                            { [`ffe-${buttonType}-button__label-text--loading`]: isLoading },
                        )}
                    >
                        {leftIcon &&
                            decorate(leftIcon, buttonType)
                        }

                        {label || children}

                        {rightIcon &&
                            rightIcon
                        }
                    </span>

                    {!isTertiary &&
                        <span
                            className={`ffe-${buttonType}-button__label-spinner`}
                            aria-hidden={!isLoading}
                        >
                            {ariaLoadingMessage}
                        </span>
                    }
                </span>
            }
        </button>
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
