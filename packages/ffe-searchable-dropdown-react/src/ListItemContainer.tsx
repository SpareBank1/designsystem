import React, { useId, ForwardedRef } from 'react';
import { fixedForwardRef } from './fixedForwardRef';

interface ListItemContainerProps<Item extends Record<string, any>> {
    item: Item;
    isHighlighted: boolean;
    isSelected: boolean;
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
        isSelected,
        children,
        onMouseEnter,
        onClick,
    }: ListItemContainerProps<Item>,
    ref: ForwardedRef<any>,
) {
    const id = useId();
    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div
            id={id}
            role="option"
            onMouseEnter={onMouseEnter}
            aria-selected={isSelected}
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
