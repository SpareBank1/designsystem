import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { AnyComponent } from './types';
import classNames from 'classnames';

export type BaseButtonProps<As extends ElementType> = React.ComponentProps<
    typeof AnyComponent<As>
> & {
    ariaLoadingMessage?: string;
    buttonType: 'action' | 'primary' | 'secondary' | 'shortcut' | 'task';
    isDisabled?: boolean;
    isLoading?: boolean;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    onClick?: (event: React.SyntheticEvent) => void;
};

export type Instance<TInstance extends {}> = TInstance & {
    save(fn: (err: Error) => void): void;
};

export function BaseButton<As extends ElementType>(
    props: BaseButtonProps<As>,
    ref: ForwardedRef<any>,
): React.JSX.Element {
    const {
        as: Comp = 'button',
        buttonType,
        isLoading,
        isDisabled,
        className,
        onClick,
        leftIcon,
        rightIcon,
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
                { 'ffe-button--loading': isLoading && supportsSpinner },
                className,
            )}
            ref={ref}
            onClick={event => {
                if (isLoading && supportsSpinner) {
                    event.preventDefault();
                    event.stopPropagation();
                } else if (onClick) {
                    onClick(event);
                }
            }}
            {...rest}
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
