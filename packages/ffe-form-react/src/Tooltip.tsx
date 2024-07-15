import React, { useState, useId } from 'react';
import classNames from 'classnames';
import { Collapse } from '@sb1/ffe-collapse-react';

export interface TooltipProps
    extends Pick<
        React.ComponentProps<'button'>,
        | 'aria-controls'
        | 'aria-label'
        | 'children'
        | 'className'
        | 'onClick'
        | 'tabIndex'
    > {
    containerProps?: React.ComponentPropsWithoutRef<'div'>;
    isOpen?: boolean;
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
}

export const Tooltip = React.forwardRef<HTMLButtonElement, TooltipProps>(
    (
        {
            isOpen: initialIsOpen,
            'aria-controls': ariaControls,
            'aria-label': ariaLabel = 'Vis hjelpetekst',
            children,
            className,
            onClick,
            tabIndex,
            containerProps,
            onColoredBg,
        },
        ref,
    ) => {
        const tooltipButtonId = useId();
        const tooltipId = useId();

        const [isOpen, setIsOpen] = useState(!!initialIsOpen);

        const handleClick = (
            evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        ) => {
            setIsOpen(prev => !prev);
            if (onClick) {
                onClick(evt);
            }
        };

        return (
            <div
                {...containerProps}
                className={classNames('ffe-tooltip', {
                    'ffe-tooltip--open': isOpen,
                    'ffe-tooltip--on-colored-bg': onColoredBg,
                })}
            >
                <button
                    ref={ref}
                    aria-expanded={isOpen}
                    aria-controls={children ? tooltipId : ariaControls}
                    aria-label={ariaLabel}
                    className="ffe-tooltip__icon"
                    onClick={handleClick}
                    type="button"
                    tabIndex={tabIndex}
                    id={tooltipButtonId}
                >
                    <span aria-hidden={true}>?</span>
                </button>
                {children && (
                    <Collapse
                        className="ffe-tooltip__text"
                        id={tooltipId}
                        isOpen={isOpen}
                    >
                        <span
                            className={classNames('ffe-small-text', className)}
                            role={isOpen ? 'status' : 'none'}
                        >
                            {children}
                        </span>
                    </Collapse>
                )}
            </div>
        );
    },
);
