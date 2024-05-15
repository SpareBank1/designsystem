import React from 'react';
import classNames from 'classnames';

export interface InputTextLikeProps
    extends React.ComponentPropsWithoutRef<'input'> {
    ariaLabel: string;
}

export const InputTextLike = React.forwardRef<
    HTMLInputElement,
    InputTextLikeProps
>(({ className, ariaLabel, ...rest }, ref) => {
    return (
        <input
            className={classNames(
                'ffe-input-field',
                'ffe-input-field--text-like',
                className,
            )}
            aria-label={ariaLabel}
            ref={ref}
            {...rest}
        />
    );
});
