import * as React from 'react';
import { useState } from 'react';
import { array, object, string, func } from 'prop-types';

const HorizontalSelector = ({
    options,
    selected,
    label,
    description,
    onChange,
    field,
}) => {
    const [selectedValue, setSelectedValue] = useState(Number(selected.value));

    const optionSelected = value => {
        setSelectedValue(value);
        onChange(field, value);
    };

    return (
        <div className={'ffe-input-group'}>
            {label && <label className={'ffe-form-label'}>{label}</label>}
            {description && (
                <div className={'ffe-small-text'}>{description}</div>
            )}
            <div className={'horizontal-selector'}>
                {options.map(option => {
                    const isSelected = option.value === selectedValue;
                    const optionClassName = `horizontal-selector-option ${
                        isSelected ? 'horizontal-selector-selected' : ''
                    }`;
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
    /** Selected is the option selected, and set the initial selected option. */
    selected: object.isRequired,
    /** This is the label for the selector component as a whole */
    label: string.isRequired,
    /** This is an optional for the selector component as a whole */
    description: string,
    field: string.isRequired,
    onChange: func.isRequired,
};

export default HorizontalSelector;
