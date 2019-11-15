import * as React from 'react';
import { useState } from 'react';
import { array, object, string, func } from 'prop-types';
import classNames from 'classnames';

const HorizontalSelector = ({
    options,
    initialSelected,
    label,
    description,
    onChange,
    ...rest
}) => {
    const initialValue = initialSelected ? Number(initialSelected.value) : null;
    const [selectedValue, setSelectedValue] = useState(initialValue);

    const optionSelected = value => {
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <div className="ffe-input-group" {...rest}>
            {label && <label className="ffe-form-label">{label}</label>}
            {description && <div className="ffe-small-text">{description}</div>}
            <div className="horizontal-selector">
                {options.map(option => {
                    const isSelected = option.value === selectedValue;
                    const optionClassName = classNames(
                        'horizontal-selector-option',
                        'horizontal-selector-option--text-center',
                        { 'horizontal-selector-selected': isSelected },
                    );
                    return (
                        <label key={option.value} className={optionClassName}>
                            <input
                                type="radio"
                                name={option.label}
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
    initialSelected: object,
    /** This is the label for the selector component as a whole */
    label: string.isRequired,
    /** This is the description beneath the header explaining choice the user has */
    description: string,
    /** This is the handler that captures the onChange event and it receives only the value selected option. */
    onChange: func.isRequired,
};

export default HorizontalSelector;
