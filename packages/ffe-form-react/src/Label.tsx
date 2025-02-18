import React from 'react';
import classNames from 'classnames';

export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
    /**
     * Labels default to `display: inline-block;` to have tooltips appear immediately to the right.
     * Set this to `true` if you don't use tooltips and need the label to be `display: block;`.
     */
    block?: boolean;
    /** @deprecated as part of update to Semantic Colors
     *
     * Use the `ffe-accent-color` class on the component or on the container of the component instead
     * [Read more in the upgrade guide](https://sparebank1.github.io/designsystem/?path=/docs/introduksjon-changelog--docs#2025---februar---semantiske-farger) */
    onColoredBg?: never;
}

export const Label: React.FC<LabelProps> = ({
    block,
    children,
    className,
    htmlFor,
    ...rest
}) => (
    <label
        className={classNames('ffe-form-label', className, {
            'ffe-form-label--block': block,
        })}
        htmlFor={htmlFor}
        {...rest}
    >
        {children}
    </label>
);
