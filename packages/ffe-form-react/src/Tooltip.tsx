import React, { useState, useId } from 'react';
import classNames from 'classnames';
import { Collapse } from '@sb1/ffe-collapse-react';
import { Icon } from '@sb1/ffe-icons-react';

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
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
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

        const helpIcon =
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4Ij48cGF0aCBkPSJNNDc4LTI0MHEyMSAwIDM1LjUtMTQuNVQ1MjgtMjkwcTAtMjEtMTQuNS0zNS41VDQ3OC0zNDBxLTIxIDAtMzUuNSAxNC41VDQyOC0yOTBxMCAyMSAxNC41IDM1LjVUNDc4LTI0MFptLTM2LTE1NGg3NHEwLTMzIDcuNS01MnQ0Mi41LTUycTI2LTI2IDQxLTQ5LjV0MTUtNTYuNXEwLTU2LTQxLTg2dC05Ny0zMHEtNTcgMC05Mi41IDMwVDM0Mi02MThsNjYgMjZxNS0xOCAyMi41LTM5dDUzLjUtMjFxMzIgMCA0OCAxNy41dDE2IDM4LjVxMCAyMC0xMiAzNy41VDUwNi01MjZxLTQ0IDM5LTU0IDU5dC0xMCA3M1ptMzggMzE0cS04MyAwLTE1Ni0zMS41VDE5Ny0xOTdxLTU0LTU0LTg1LjUtMTI3VDgwLTQ4MHEwLTgzIDMxLjUtMTU2VDE5Ny03NjNxNTQtNTQgMTI3LTg1LjVUNDgwLTg4MHE4MyAwIDE1NiAzMS41VDc2My03NjNxNTQgNTQgODUuNSAxMjdUODgwLTQ4MHEwIDgzLTMxLjUgMTU2VDc2My0xOTdxLTU0IDU0LTEyNyA4NS41VDQ4MC04MFptMC04MHExMzQgMCAyMjctOTN0OTMtMjI3cTAtMTM0LTkzLTIyN3QtMjI3LTkzcS0xMzQgMC0yMjcgOTN0LTkzIDIyN3EwIDEzNCA5MyAyMjd0MjI3IDkzWm0wLTMyMFoiLz48L3N2Zz4=';

        return (
            <div
                {...containerProps}
                className={classNames('ffe-tooltip', {
                    'ffe-tooltip--open': isOpen,
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
                    <span aria-hidden={true}>
                        <Icon
                            className="ffe-button__icon"
                            fileUrl={helpIcon}
                            size="md"
                            ariaLabel="?"
                        />
                    </span>
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
