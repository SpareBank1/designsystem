import React, { ElementType, ForwardedRef } from 'react';
import classNames from 'classnames';
import { Icon } from '@sb1/ffe-icons-react';
import { ComponentAsPropParams } from './types';
import { fixedForwardRef } from './fixedForwardRef';

export type ExpandButtonProps<As extends ElementType = 'button'> =
    ComponentAsPropParams<As> & {
        /** An accessible label for the close-button, only shown in the "isExpanded" state  */
        closeLabel?: string;
        /** When true the component will render a circle with an X indicating whatever is controlled is in an expanded state. */
        isExpanded: boolean;
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
        ...rest
    } = props;

    const closeIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtNDM3Ljg0NyAyNzcuMDc2LTIzNC45MjRxLTguMzA3IDguMzA4LTIwLjg4NCA4LjUtMTIuNTc2LjE5My0yMS4yNjgtOC41LTguNjkzLTguNjkyLTguNjkzLTIxLjA3NnQ4LjY5My0yMS4wNzZMNDM3Ljg0Ny00ODAgMjM0LjkyNC02ODIuOTI0cS04LjMwOC04LjMwNy04LjUtMjAuODg0LS4xOTMtMTIuNTc2IDguNS0yMS4yNjggOC42OTItOC42OTMgMjEuMDc2LTguNjkzdDIxLjA3NiA4LjY5M0w0ODAtNTIyLjE1M2wyMDIuOTI0LTIwMi45MjNxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDUyMi4xNTMtNDgwbDIwMi45MjMgMjAyLjkyNHE4LjMwOCA4LjMwNyA4LjUgMjAuODg0LjE5MyAxMi41NzYtOC41IDIxLjI2OC04LjY5MiA4LjY5My0yMS4wNzYgOC42OTN0LTIxLjA3Ni04LjY5M0w0ODAtNDM3Ljg0N1oiLz48L3N2Zz4=';
    return (
        <Comp
            aria-expanded={isExpanded}
            aria-label={isExpanded ? closeLabel : undefined}
            className={classNames(
                'ffe-button',
                'ffe-button--expand',
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
                    size="md"
                />
            )}
            {!isExpanded && <span>{children}</span>}
        </Comp>
    );
}

export const ExpandButton = fixedForwardRef(ExpandButtonWithForwardRef);
