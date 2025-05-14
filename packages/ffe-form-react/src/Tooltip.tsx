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
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIj48cGF0aCBkPSJNNDgwLTI0MHEyMCAwIDM0LTE0dDE0LTM0cTAtMjAtMTQtMzR0LTM0LTE0cS0yMCAwLTM0IDE0dC0xNCAzNHEwIDIwIDE0IDM0dDM0IDE0Wm0tMzYtMTUzaDczcTAtMzcgNi41LTUyLjVUNTU1LTQ4NXEzNS0zNCA0OC41LTU4dDEzLjUtNTNxMC01NS0zNy41LTg5LjVUNDg0LTcyMHEtNTEgMC04OC41IDI3VDM0My02MjBsNjUgMjdxOS0yOCAyOC41LTQzLjVUNDgyLTY1MnEyOCAwIDQ2IDE2dDE4IDQycTAgMjMtMTUuNSA0MVQ0OTYtNTE4cS0zNSAzMi00My41IDUyLjVUNDQ0LTM5M1ptMzYgMjk3cS03OSAwLTE0OS0zMHQtMTIyLjUtODIuNVExNTYtMjYxIDEyNi0zMzFUOTYtNDgwcTAtODAgMzAtMTQ5LjV0ODIuNS0xMjJRMjYxLTgwNCAzMzEtODM0dDE0OS0zMHE4MCAwIDE0OS41IDMwdDEyMiA4Mi41UTgwNC02OTkgODM0LTYyOS41VDg2NC00ODBxMCA3OS0zMCAxNDl0LTgyLjUgMTIyLjVRNjk5LTE1NiA2MjkuNS0xMjZUNDgwLTk2Wm0wLTcycTEzMCAwIDIyMS05MXQ5MS0yMjFxMC0xMzAtOTEtMjIxdC0yMjEtOTFxLTEzMCAwLTIyMSA5MXQtOTEgMjIxcTAgMTMwIDkxIDIyMXQyMjEgOTFabTAtMzEyWiIvPjwvc3ZnPg==';

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
                            size="sm"
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
