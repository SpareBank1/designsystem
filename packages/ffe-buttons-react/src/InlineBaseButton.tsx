import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { fixedForwardRef } from './fixedForwardRef';
import { ComponentAsPropParams } from './types';
import classNames from 'classnames';

export type InlineBaseButtonProps<As extends ElementType = 'button'> =
    ComponentAsPropParams<As> & {
        /**
         * Enum of supported prop types. Used internally only.
         * @ignore
         */
        buttonType: 'tertiary' | 'back' | 'expand';
        /** Icon shown to the left of the label */
        leftIcon?: ReactElement;
        /** Icon shown to the right of the label */
        rightIcon?: ReactElement;
        /** Size of the button, default md. */
        size?: 'sm' | 'md' | 'lg';
        /** Using only an icon, no label */
        iconOnly?: boolean;
    };

/**
 * Internal component
 * @ignore
 */
function InlineBaseButtonWithForwardRef<As extends ElementType>(
    props: InlineBaseButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        as: Comp = 'button',
        buttonType,
        className,
        leftIcon,
        rightIcon,
        size = 'md',
        iconOnly = false,
        children,
        ...rest
    } = props;

    return (
        <Comp
            className={classNames(
                'ffe-inline-button',
                className,
                `ffe-inline-button--${size}`,
                `ffe-inline-button--${buttonType}`,
                { 'ffe-inline-button--icon-only': iconOnly },
            )}
            {...rest}
            ref={ref}
        >
            {leftIcon &&
                React.cloneElement(leftIcon, {
                    className:
                        'ffe-inline-button__icon ffe-inline-button__icon--left',
                    size: 'md',
                })}
            <span className="ffe-inline-button__label">{children}</span>
            {rightIcon &&
                React.cloneElement(rightIcon, {
                    className:
                        'ffe-inline-button__icon ffe-inline-button__icon--right',
                    size: 'md',
                })}
        </Comp>
    );
}

export const InlineBaseButton = fixedForwardRef(InlineBaseButtonWithForwardRef);
