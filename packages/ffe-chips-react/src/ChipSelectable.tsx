import React, { ElementType, ForwardedRef } from 'react';
import { Chip, type ChipProps } from './Chip';
import { Icon } from '@sb1/ffe-icons-react';
import { fixedForwardRef } from './fixedForwardRef';
import classNames from 'classnames';

const checkOpen400Sm =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Im0zODktMzY5IDI5OS0yOTlxMTAuOTA5LTExIDI1LjQ1NS0xMVE3MjgtNjc5IDczOS02NjhxMTEgMTEgMTEgMjUuNTgyIDAgMTQuNTgzLTEwLjYwNyAyNS4xODhMNDE1LTI5MnEtMTAuOTA5IDExLTI1LjQ1NSAxMVEzNzUtMjgxIDM2NC0yOTJMMjIxLTQzNXEtMTEtMTEtMTEtMjUuNXQxMS0yNS41cTExLTExIDI1LjY2Ny0xMSAxNC42NjYgMCAyNS4zMzMgMTFsMTE3IDExN1oiLz48L3N2Zz4=';

export type ChipSelectableProps<As extends ElementType = 'button'> =
    ChipProps<As> & {
        /** Whether this chips is selected */
        isSelected?: boolean;
    };

function ChipSelectableForwardRef<As extends ElementType>(
    props: ChipSelectableProps<As>,
    ref: ForwardedRef<any>,
) {
    const { className, isSelected, ...rest } = props;

    return (
        <Chip
            ref={ref}
            leftIcon={
                isSelected ? <Icon size="sm" fileUrl={checkOpen400Sm} /> : null
            }
            className={classNames(className, {
                'ffe-chip--selected': isSelected,
            })}
            {...rest}
        />
    );
}

export const ChipSelectable = fixedForwardRef(ChipSelectableForwardRef);
