import React, { Component } from 'react';
import { bool, node, oneOfType, string, func, object, shape } from 'prop-types';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';

class RadioBlock extends Component {
    id = `radio-block-${uuid()}`;

    render() {
        const {
            checked,
            children,
            className,
            innerRef,
            label,
            labelClass,
            name,
            selectedValue,
            showChildren,
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
                    ref={innerRef}
                    type="radio"
                    name={name}
                    value={value}
                    aria-describedby={
                        (children && showChildren) || (children && isSelected)
                            ? `${this.id}-described`
                            : undefined
                    }
                    {...inputProps}
                />
                <div className="ffe-radio-block__content">
                    <label
                        className={classNames(
                            'ffe-radio-block__header',
                            labelClass,
                        )}
                        htmlFor={this.id}
                    >
                        {label}
                    </label>
                    {(isSelected || showChildren) && (
                        <div
                            className={classNames('ffe-radio-block__wrapper', {
                                'ffe-radio-block__wrapper--empty': !children,
                            })}
                            id={`${this.id}-described`}
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
    /** Ref-setting function, or ref created by useRef, passed to the input element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** The always visible label of the radio block */
    label: oneOfType([node, string]).isRequired,
    /** Additional class names applied to the label element */
    labelClass: string,
    /** The name of the radio button set */
    name: string.isRequired,
    /** The selected value of the radio button set */
    selectedValue: string,
    /** Whether or not children are always visible */
    showChildren: bool,
    /** The value of the radio block */
    value: string.isRequired,
};

export default RadioBlock;
