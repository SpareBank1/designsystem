import React, { ElementType, ForwardedRef } from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { InlineBaseButton, InlineBaseButtonProps } from './InlineBaseButton.js';
import { fixedForwardRef } from './fixedForwardRef.js';
import classNames from 'classnames';

export type InlineExpandButtonProps<As extends ElementType = 'button'> = Omit<
    InlineBaseButtonProps<As>,
    'buttonType' | 'rightIcon'
> & {
    /** When true it will indicate the button is in its open state */
    isExpanded: boolean;
};

function InlineExpandButtonWithForwardRef<As extends ElementType>(
    props: InlineExpandButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    const expandMoreIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00ODAtMzczLjUzOXEtNy4yMzEgMC0xMy40NjEtMi4zMDgtNi4yMzEtMi4zMDgtMTEuODQ2LTcuOTIzTDI3NC45MjQtNTYzLjUzOXEtOC4zMDgtOC4zMDctOC41LTIwLjg4NC0uMTkzLTEyLjU3NyA4LjUtMjEuMjY5IDguNjkyLTguNjkyIDIxLjA3Ni04LjY5MnQyMS4wNzYgOC42OTJMNDgwLTQ0Mi43NjhsMTYyLjkyNC0xNjIuOTI0cTguMzA3LTguMzA3IDIwLjg4NC04LjUgMTIuNTc2LS4xOTIgMjEuMjY4IDguNSA4LjY5MyA4LjY5MiA4LjY5MyAyMS4wNzcgMCAxMi4zODQtOC42OTMgMjEuMDc2TDUwNS4zMDctMzgzLjc3cS01LjYxNSA1LjYxNS0xMS44NDYgNy45MjMtNi4yMyAyLjMwOC0xMy40NjEgMi4zMDhaIi8+PC9zdmc+';

    const propWithRef = { ...props, ref };
    const { isExpanded, className, ...rest } = propWithRef;

    return (
        <InlineBaseButton
            rightIcon={<Icon size="md" fileUrl={expandMoreIcon} />}
            buttonType="expand"
            type="button"
            {...rest}
            className={classNames(className, {
                'ffe-inline-button--expanded': isExpanded,
            })}
            ref={propWithRef.ref}
        />
    );
}

export const InlineExpandButton = fixedForwardRef(
    InlineExpandButtonWithForwardRef,
);
