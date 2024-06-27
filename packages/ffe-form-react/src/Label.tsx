import React from 'react';
import classNames from 'classnames';

export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
    /**
     * Labels default to `display: inline-block;` to have tooltips appear immediately to the right.
     * Set this to `true` if you don't use tooltips and need the label to be `display: block;`.
     */
    block?: boolean;
    /** Adds alternative styling for better contrast on certain backgrounds */
    onColoredBg?: boolean;
}

export const Label: React.FC<LabelProps> = ({
    block,
    children,
    className,
    htmlFor,
    onColoredBg,
    ...rest
}) => (
    <label
        className={classNames('ffe-form-label', className, {
            'ffe-form-label--block': block,
            'ffe-form-label--on-colored-bg': onColoredBg,
        })}
        htmlFor={htmlFor}
        {...rest}
    >
        {children}
    </label>
);
