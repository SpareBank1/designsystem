import React, { Component } from 'react';
import { bool, node, string } from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid';

class RadioBlock extends Component {
    id = `radio-block-${uuid.v4()}`;

    render() {
        const {
            checked,
            children,
            className,
            label,
            name,
            selectedValue,
            value,
            ...inputProps
        } = this.props;

        const isSelected = checked || selectedValue === value;

        return (
            <div className={classNames('ffe-radio-block', className)}>
                <input
                    checked={isSelected}
                    className="ffe-radio-input"
                    id={this.id}
                    type="radio"
                    name={name}
                    value={value}
                    {...inputProps}
                />
                <div className="ffe-radio-block__content">
                    <label
                        className="ffe-radio-block__header"
                        htmlFor={this.id}
                    >
                        {label}
                    </label>
                    {isSelected && (
                        <div
                            className={classNames('ffe-radio-block__wrapper', {
                                'ffe-radio-block__wrapper--empty': !children,
                            })}
                        >
                            {children}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

RadioBlock.propTypes = {
    /** Whether or not the radio block is selected */
    checked: bool,
    /** The content rendered when choice is selected */
    children: node,
    /** Additional class names applied to the outer div */
    className: string,
    /** The always visible label of the radio block */
    label: string.isRequired,
    /** The name of the radio button set */
    name: string.isRequired,
    /** The selected value of the radio button set */
    selectedValue: string,
    /** The value of the radio block */
    value: string.isRequired,
};

export default RadioBlock;
