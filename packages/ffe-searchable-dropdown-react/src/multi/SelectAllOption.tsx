import React, { useId } from 'react';
import classNames from 'classnames';

interface SelectAllOptionProps {
    /** Text to show in the row, typically "Velg alle" or "Fjern alle" */
    label: string;
    /** True when every visible item is selected */
    isSelected: boolean;
    /** True when some, but not every, visible item is selected. Shows the
     * checkbox with a dash. Visual only — the row's `aria-selected` is still
     * false, and the label still reads "Velg alle", which is the correct action
     * label in this state. */
    isIndeterminate: boolean;
    isHighlighted: boolean;
    onClick: () => void;
}

export const SelectAllOption = React.forwardRef<
    HTMLDivElement,
    SelectAllOptionProps
>(({ label, isSelected, isIndeterminate, isHighlighted, onClick }, ref) => {
    const id = useId();

    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div
            id={id}
            role="option"
            aria-selected={isSelected}
            ref={ref}
            onClick={onClick}
            className="ffe-searchable-dropdown__list-item-container ffe-searchable-dropdown__select-all"
        >
            <div
                className={classNames(
                    'ffe-searchable-dropdown__list-item-body',
                    {
                        'ffe-searchable-dropdown__list-item-body--highlighted':
                            isHighlighted,
                    },
                )}
            >
                {/* Dekorativ boks: en ekte <input> er ikke lov inne i
                    role="option", som har presentasjonelle barn. */}
                <span
                    aria-hidden="true"
                    className={classNames(
                        'ffe-checkbox',
                        'ffe-checkbox--no-margin',
                        {
                            'ffe-checkbox--checked': isSelected,
                            'ffe-checkbox--indeterminate':
                                isIndeterminate && !isSelected,
                        },
                    )}
                />
                <div className="ffe-searchable-dropdown__list-item-body-content">
                    <span className="ffe-searchable-dropdown__list-item-title">
                        {label}
                    </span>
                </div>
            </div>
        </div>
    );
});
