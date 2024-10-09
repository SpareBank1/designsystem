import React, { useId, ForwardedRef } from 'react';
import { fixedForwardRef } from '../fixedForwardRef';

interface MultiselectResultContainerProps<Item extends Record<string, any>> {
    item: Item;
    isHighlighted: boolean;
    isSelected: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    onChange: (option: Item) => void;
    children: ({
        item,
        isHighlighted,
        isSelected,
        onClick,
        onChange,
    }: {
        item: Item;
        isHighlighted: boolean;
        isSelected: boolean;
        onClick: React.MouseEventHandler<HTMLDivElement>;
        onChange: (option: Item) => void;
    }) => React.ReactNode;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
}

function MultiselectResultContainerWithForwardRef<
    Item extends Record<string, any>,
>(
    {
        item,
        isHighlighted,
        isSelected,
        children,
        onMouseEnter,
        onClick,
        onChange,
    }: MultiselectResultContainerProps<Item>,
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
                isSelected,
                onClick,
                onChange,
            })}
        </div>
    );
}

export const MultiselectResultContainer = fixedForwardRef(
    MultiselectResultContainerWithForwardRef,
);
