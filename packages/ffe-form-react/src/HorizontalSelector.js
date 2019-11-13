import * as React from 'react';
import { useState } from 'react';
import { array, object, string, func } from 'prop-types';

const HorizontalSelector = ({
    options,
    initialSelected,
    label,
    description,
    onChange,
    field,
    ...rest
}) => {
    const [selectedValue, setSelectedValue] = useState(
        Number(initialSelected.value),
    );

    const optionSelected = value => {
        setSelectedValue(value);
        onChange(field, value);
    };

    return (
        <div className={'ffe-input-group'} {...rest}>
            {label && <label className={'ffe-form-label'}>{label}</label>}
            {description && (
                <div className={'ffe-small-text'}>{description}</div>
            )}
            <div className={'horizontal-selector'}>
                {options.map(option => {
                    const isSelected = option.value === selectedValue;
                    const optionClassName = `horizontal-selector-option ${
                        isSelected ? 'horizontal-selector-selected' : ''
                    } horizontal-selector-option--text-center`;
                    return (
                        <label key={option.value} className={optionClassName}>
                            <input
                                type="radio"
                                name={'selector'}
                                value={option.value}
                                defaultChecked={isSelected}
                                onClick={() => optionSelected(option.value)}
                            />
                            <span>{option.label}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

HorizontalSelector.propTypes = {
    /** Options are select options available. It expects a label and a value string. */
    options: array.isRequired,
    /** initialSelected is the starting selected option. */
    initialSelected: object.isRequired,
    /** This is the label for the selector component as a whole */
    label: string.isRequired,
    /** This is an optional for the selector component as a whole */
    description: string,
    field: string.isRequired,
    onChange: func.isRequired,
};

export default HorizontalSelector;
