import React, { ElementType, ForwardedRef } from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';
import { ComponentAsPropParams } from './types.js';
import { fixedForwardRef } from './fixedForwardRef.js';

export type ExpandButtonProps<As extends ElementType = 'button'> =
    ComponentAsPropParams<As> & {
        /** An accessible label for the close-button, only shown in the "isExpanded" state  */
        closeLabel?: string;
        /** When true the component will render a circle with an X indicating whatever is controlled is in an expanded state. */
        isExpanded: boolean;
        size?: 'sm' | 'md' | 'lg';
    };

function ExpandButtonWithForwardRef<As extends ElementType>(
    props: ExpandButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        children,
        className,
        closeLabel = 'Lukk',
        as: Comp = 'button',
        isExpanded,
        size = 'md',
        ...rest
    } = props;

    const closeIconMd =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNDM3Ljg0NyAyNzcuMDc2LTIzNC45MjRxLTguMzA3IDguMzA4LTIwLjg4NCA4LjUtMTIuNTc2LjE5My0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NnQ4LjY5My0yMS4wNzZMNDM3Ljg0Ny00ODAgMjM0LjkyNC02ODIuOTI0cS04LjMwOC04LjMwNy04LjUtMjAuODg0LS4xOTMtMTIuNTc2IDguNS0yMS4yNjggOC42OTItOC42OTMgMjEuMDc2LTguNjkzdDIxLjA3NiA4LjY5M0w0ODAtNTIyLjE1M2wyMDIuOTI0LTIwMi45MjNxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDUyMi4xNTMtNDgwbDIwMi45MjMgMjAyLjkyNHE4LjMwOCA4LjMwNyA4LjUgMjAuODg0LjE5MyAxMi41NzYtOC41IDIxLjI2OC04LjY5MiA4LjY5My0yMS4wNzYgOC42OTN0LTIxLjA3Ni04LjY5M0w0ODAtNDM3Ljg0N1oiLz48L3N2Zz4=';
    const closeIconSm =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDQyLjg1IDMwOS4wOC0yNzEuOTJxLTguMzEgOC4zLTE3Ljg5IDgtOS41Ny0uMzEtMTguMjctOS04LjY5LTguNy04LjY5LTE4LjU4IDAtOS44OCA4LjY5LTE4LjU4TDQ0Mi44NS00ODAgMjcxLjkyLTY1MC45MnEtOC4zLTguMzEtOC0xOC4zOS4zMS0xMC4wNyA5LTE4Ljc3IDguNy04LjY5IDE4LjU4LTguNjkgOS44OCAwIDE4LjU4IDguNjlMNDgwLTUxNy4xNWwxNzAuOTItMTcwLjkzcTguMzEtOC4zIDE4LjM5LTguNSAxMC4wNy0uMTkgMTguNzcgOC41IDguNjkgOC43IDguNjkgMTguNTggMCA5Ljg4LTguNjkgMTguNThMNTE3LjE1LTQ4MGwxNzAuOTMgMTcwLjkycTguMyA4LjMxIDguNSAxNy44OS4xOSA5LjU3LTguNSAxOC4yNy04LjcgOC42OS0xOC41OCA4LjY5LTkuODggMC0xOC41OC04LjY5TDQ4MC00NDIuODVaIi8+PC9zdmc+';

    const closeIcon = size === 'sm' ? closeIconSm : closeIconMd;

    return (
        <Comp
            aria-expanded={isExpanded}
            aria-label={isExpanded ? closeLabel : undefined}
            className={classNames(
                'ffe-button',
                'ffe-button--secondary',
                'ffe-button--expand',
                `ffe-button--${size}`,
                { 'ffe-button--expanded': isExpanded },
                className,
            )}
            {...rest}
            ref={ref}
        >
            {isExpanded && (
                <Icon
                    className="ffe-button__icon"
                    fileUrl={closeIcon}
                    size={size === 'sm' ? 'sm' : 'md'} //Det store ikonet er for stort, ikke behov for å bruke det
                />
            )}
            {!isExpanded && <span>{children}</span>}
        </Comp>
    );
}

export const ExpandButton = fixedForwardRef(ExpandButtonWithForwardRef);
