import React, { useId, ForwardedRef } from 'react';
import { fixedForwardRef } from './fixedForwardRef';

interface OptionProps<Item extends Record<string, any>>
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    item: Item;
    isHighlighted: boolean;
    isSelected: boolean;
    children: ({
        item,
        isHighlighted,
        isSelected,
    }: {
        item: Item;
        isHighlighted: boolean;
        isSelected: boolean;
    }) => React.ReactNode;
}

function OptionWithForwardRef<Item extends Record<string, any>>(
    {
        item,
        isHighlighted,
        isSelected,
        children,
        onMouseEnter,
        onClick,
        ...rest
    }: OptionProps<Item>,
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
            {...rest}
        >
            {children({
                item,
                isHighlighted,
                isSelected,
            })}
        </div>
    );
}

export const Option = fixedForwardRef(OptionWithForwardRef);
