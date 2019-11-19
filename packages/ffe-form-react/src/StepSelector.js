import React, { useState } from 'react';
import classNames from 'classnames';

import RadioButtonInputGroup from './RadioButtonInputGroup';
import RadioButton from './RadioButton';
import { arrayOf, string, shape, func, number } from 'prop-types';

const StepSelector = ({
    name,
    options,
    initialSelected,
    label,
    description,
    onChange,
}) => {
    const initialValue = initialSelected ? Number(initialSelected.value) : null;
    const [selectedValue, setSelectedValue] = useState(initialValue);

    const optionSelected = value => {
        const formattedValue = Number(value);
        setSelectedValue(formattedValue);
        onChange(formattedValue);
    };

    return (
        <RadioButtonInputGroup
            inline={true}
            label={label}
            description={description}
            name={name}
            onChange={e => optionSelected(e.target.value)}
            selectedValue={selectedValue}
        >
            {inputProps => (
                <div
                    className="ffe-step-selector"
                    id="ffe-step-selector-container"
                    role="ffe-step-selector-container"
                >
                    {options.map((option, i) => {
                        const isSelected = option.value === selectedValue;
                        const optionClassName = classNames(
                            'ffe-step-selector-option',
                            'ffe-step-selector-option--text-center',
                            { 'ffe-step-selector-option-selected': isSelected },
                        );
                        return (
                            <RadioButton
                                {...inputProps}
                                name={name}
                                key={option.value}
                                value={option.value}
                                className={optionClassName}
                                tabIndex={i}
                            >
                                {option.label}
                            </RadioButton>
                        );
                    })}
                </div>
            )}
        </RadioButtonInputGroup>
    );
};

const optionsPropType = shape({
    value: number,
    label: string,
});

StepSelector.propTypes = {
    /** This is the name the radio group and each radio input will get */
    name: string.isRequired,
    /** Options are select options available. It expects a label and a value string. */
    options: arrayOf(optionsPropType).isRequired,
    /** initialSelected is the starting selected option. */
    initialSelected: optionsPropType,
    /** This is the label for the selector component as a whole */
    label: string.isRequired,
    /** This is the description beneath the header explaining choice the user has */
    description: string,
    /** This is the handler that captures the onChange event and it receives only the value selected option. */
    onChange: func.isRequired,
};

export default StepSelector;
