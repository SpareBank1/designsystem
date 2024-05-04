import React from 'react';
import classNames from 'classnames';

export interface ButtonGroupProps extends React.ComponentProps<'div'> {
    /** Applies the thin modifier to remove margins */
    thin?: boolean;
    /** Applies the inline modifier to make all child buttons inline */
    inline?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    className,
    thin,
    inline,
    ...rest
}) => (
    <div
        data-testid="button-group"
        className={classNames(
            'ffe-button-group',
            { 'ffe-button-group--thin': thin },
            { 'ffe-button-group--inline': inline },
            className,
        )}
        {...rest}
    />
);
