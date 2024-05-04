import React, { ElementType, ForwardedRef } from 'react';
import { InlineBaseButton, InlineBaseButtonProps } from './InlineBaseButton';
import { Icon } from '@sb1/ffe-icons-react';
import { fixedForwardRef } from './fixedForwardRef';

export type BackButtonProps<As extends ElementType = 'button'> = Omit<
    InlineBaseButtonProps<As>,
    'buttonType' | 'leftIcon'
>;

function BackButtonWithForwardRef<As extends ElementType>(
    props: BackButtonProps<As>,
    ref: ForwardedRef<any>,
) {
    const chevronLeftIcon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Im00MTguMTUzLTQ4MCAxNjIuOTIzIDE2Mi45MjRxOC4zMDggOC4zMDcgOC41IDIwLjg4NC4xOTMgMTIuNTc2LTguNSAyMS4yNjgtOC42OTIgOC42OTMtMjEuMDc2IDguNjkzdC0yMS4wNzYtOC42OTNMMzU5LjE1NS00NTQuNjkzcS01LjYxNi01LjYxNS03LjkyMy0xMS44NDYtMi4zMDgtNi4yMy0yLjMwOC0xMy40NjF0Mi4zMDgtMTMuNDYxcTIuMzA3LTYuMjMxIDcuOTIzLTExLjg0NmwxNzkuNzY5LTE3OS43NjlxOC4zMDctOC4zMDggMjAuODg0LTguNSAxMi41NzYtLjE5MyAyMS4yNjggOC41IDguNjkzIDguNjkyIDguNjkzIDIxLjA3NnQtOC42OTMgMjEuMDc2TDQxOC4xNTMtNDgwWiIvPjwvc3ZnPg==';
    return (
        <InlineBaseButton
            {...props}
            buttonType="back"
            leftIcon={<Icon fileUrl={chevronLeftIcon} size="md" />}
            ref={ref}
        />
    );
}

export const BackButton = fixedForwardRef(BackButtonWithForwardRef);
