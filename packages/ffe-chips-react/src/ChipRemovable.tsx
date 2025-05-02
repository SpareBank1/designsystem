import React, { ElementType, ForwardedRef } from 'react';
import { Chip, type ChipProps } from './Chip.js';
import { Icon } from '@sb1/ffe-icons-react';
import { fixedForwardRef } from './fixedForwardRef.js';

const closeOpen400Sm =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjAiPjxwYXRoIGQ9Ik00ODAtNDI5IDMxNi0yNjVxLTExIDExLTI1IDEwLjVUMjY2LTI2NnEtMTEtMTEtMTEtMjUuNXQxMS0yNS41bDE2My0xNjMtMTY0LTE2NHEtMTEtMTEtMTAuNS0yNS41VDI2Ni02OTVxMTEtMTEgMjUuNS0xMXQyNS41IDExbDE2MyAxNjQgMTY0LTE2NHExMS0xMSAyNS41LTExdDI1LjUgMTFxMTEgMTEgMTEgMjUuNVQ2OTUtNjQ0TDUzMS00ODBsMTY0IDE2NHExMSAxMSAxMSAyNXQtMTEgMjVxLTExIDExLTI1LjUgMTFUNjQ0LTI2Nkw0ODAtNDI5WiIvPjwvc3ZnPg==';

export type ChipRemovableProps<As extends ElementType = 'button'> =
    ChipProps<As>;

function ChipRemovableForwardRef<As extends ElementType>(
    props: ChipRemovableProps<As>,
    ref: ForwardedRef<any>,
) {
    return (
        <Chip
            ref={ref}
            rightIcon={<Icon size="sm" fileUrl={closeOpen400Sm} />}
            {...props}
        />
    );
}

export const ChipRemovable = fixedForwardRef(ChipRemovableForwardRef);
