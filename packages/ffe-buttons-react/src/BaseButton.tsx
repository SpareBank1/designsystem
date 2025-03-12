import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { fixedForwardRef } from './fixedForwardRef';
import { ComponentAsPropParams } from './types';
import classNames from 'classnames';

export type BaseButtonProps<As extends ElementType = 'button'> =
    ComponentAsPropParams<As> & {
        ariaLoadingMessage?: string;
        buttonType: 'action' | 'primary' | 'secondary' | 'shortcut' | 'task';
        isDisabled?: boolean;
        isLoading?: boolean;
        leftIcon?: ReactElement;
        rightIcon?: ReactElement;
        /** Default md. */
        size?: 'sm' | 'md' | 'lg';
    };
/**
 * Internal component
 * @ignore
 */
function BaseButtonWithForwardRef<As extends ElementType>(
    props: BaseButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        as: Comp = 'button',
        buttonType,
        isLoading,
        isDisabled,
        className,
        onClick,
        leftIcon,
        rightIcon,
        size = 'md',
        ariaLoadingMessage,
        children,
        ...rest
    } = props;
    const supportsSpinner = ['action', 'primary', 'secondary'].includes(
        buttonType,
    );

    return (
        <Comp
            aria-busy={isLoading && supportsSpinner}
            aria-disabled={isDisabled || (isLoading && supportsSpinner)}
            className={classNames(
                'ffe-button',
                `ffe-button--${buttonType}`,
                `ffe-button--${size}`,
                { 'ffe-button--loading': isLoading && supportsSpinner },
                className,
            )}
            onClick={(event: React.MouseEvent) => {
                if (isLoading && supportsSpinner) {
                    event.preventDefault();
                    event.stopPropagation();
                } else if (onClick) {
                    onClick(event);
                }
            }}
            {...rest}
            ref={ref}
        >
            <span className="ffe-button__label">
                {leftIcon &&
                    React.cloneElement(leftIcon, {
                        className: 'ffe-button__icon ffe-button__icon--left',
                        size: 'md',
                    })}
                {children}
                {rightIcon &&
                    React.cloneElement(rightIcon, {
                        className: 'ffe-button__icon ffe-button__icon--right',
                        size: 'md',
                    })}
            </span>
            {supportsSpinner && isLoading && (
                <span
                    aria-label={ariaLoadingMessage}
                    role="img"
                    className="ffe-button__spinner"
                />
            )}
        </Comp>
    );
}

export const BaseButton = fixedForwardRef(BaseButtonWithForwardRef);
