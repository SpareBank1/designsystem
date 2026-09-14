import React, { useId } from 'react';
import classNames from 'classnames';

interface SelectAllOptionProps {
    /** Text to show in the row, typically "Velg alle" or "Fjern alle" */
    label: string;
    /** True when every visible item is selected */
    isSelected: boolean;
    isHighlighted: boolean;
    onClick: () => void;
}

export const SelectAllOption = React.forwardRef<
    HTMLDivElement,
    SelectAllOptionProps
>(({ label, isSelected, isHighlighted, onClick }, ref) => {
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
                <div className="ffe-searchable-dropdown__list-item-body-content">
                    {label}
                </div>
            </div>
        </div>
    );
});
