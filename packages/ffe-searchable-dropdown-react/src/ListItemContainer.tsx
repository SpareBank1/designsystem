import React, { useRef, ForwardedRef } from 'react';
import { v4 as uuid } from 'uuid';
import { fixedForwardRef } from './fixedForwardRef';

interface ListItemContainerProps<Item extends Record<string, any>> {
    item: Item;
    isHighlighted: boolean;
    children: ({
        item,
        isHighlighted,
    }: {
        item: Item;
        isHighlighted: boolean;
    }) => React.ReactNode;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
}

function ListItemContainerWithForwardRef<Item extends Record<string, any>>(
    {
        item,
        isHighlighted,
        children,
        onMouseEnter,
        onClick,
    }: ListItemContainerProps<Item>,
    ref: ForwardedRef<any>,
) {
    const id = useRef(`ìtem-${uuid()}`).current;
    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div
            id={id}
            role="option"
            onMouseEnter={onMouseEnter}
            aria-selected={isHighlighted}
            ref={ref}
            onClick={onClick}
            className="ffe-searchable-dropdown__list-item-container"
        >
            {children({
                item,
                isHighlighted,
            })}
        </div>
    );
}

export const ListItemContainer = fixedForwardRef(
    ListItemContainerWithForwardRef,
);
