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
        /** Size of the button, default md. */
        size?: 'sm' | 'md' | 'lg';
        /** Using only an icon, no label */
        iconOnly?: boolean;
        /** Determinate progress as a percentage (0–100), shown as a fill bar. Use `isLoading` for unknown durations. No effect on shortcut/task. */
        progress?: number;
        /** Plays a single sweep each time the value changes, e.g. on a received poll. No effect on shortcut/task. */
        pulseKey?: string | number;
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
        iconOnly = false,
        ariaLoadingMessage,
        progress,
        pulseKey,
        style,
        children,
        ...rest
    } = props;
    // The filled/spinner variants share the same set of button types.
    const supportsSpinner = ['action', 'primary', 'secondary'].includes(
        buttonType,
    );
    const hasProgress = supportsSpinner && progress !== undefined;
    const clampedProgress =
        progress !== undefined
            ? Math.min(100, Math.max(0, progress))
            : undefined;
    const hasPulse = supportsSpinner && pulseKey !== undefined;

    return (
        <Comp
            aria-busy={(isLoading && supportsSpinner) || hasProgress}
            aria-disabled={isDisabled || (isLoading && supportsSpinner)}
            {...(hasProgress
                ? {
                      role: 'progressbar',
                      'aria-valuenow': Math.round(clampedProgress as number),
                      'aria-valuemin': 0,
                      'aria-valuemax': 100,
                  }
                : {})}
            style={
                hasProgress
                    ? ({
                          ...(style as React.CSSProperties),
                          '--progress-fill-width': `${clampedProgress}%`,
                      } as React.CSSProperties)
                    : style
            }
            className={classNames(
                'ffe-button',
                `ffe-button--${buttonType}`,
                `ffe-button--${size}`,
                { 'ffe-button--icon-only': iconOnly },
                { 'ffe-button--loading': isLoading && supportsSpinner },
                { 'ffe-button--progress': hasProgress },
                className,
            )}
            onClick={(event: React.MouseEvent) => {
                if ((isLoading && supportsSpinner) || hasProgress) {
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
                        size: leftIcon.props.size ?? size,
                    })}
                {children}
                {rightIcon &&
                    React.cloneElement(rightIcon, {
                        className: 'ffe-button__icon ffe-button__icon--right',
                        size: rightIcon.props.size ?? size,
                    })}
            </span>
            {supportsSpinner && isLoading && (
                <span
                    aria-label={ariaLoadingMessage}
                    role="img"
                    className="ffe-button__spinner"
                />
            )}
            {hasPulse && (
                // Remount on key change restarts the sweep animation.
                <span
                    key={pulseKey}
                    className="ffe-button__pulse"
                    aria-hidden="true"
                />
            )}
        </Comp>
    );
}

export const BaseButton = fixedForwardRef(BaseButtonWithForwardRef);
