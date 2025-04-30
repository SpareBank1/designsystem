import React from 'react';
import classNames from 'classnames';

export interface TextAreaProps
    extends React.ComponentPropsWithoutRef<'textarea'> {}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, ...rest }, ref) => {
        return (
            <textarea
                className={classNames(
                    'ffe-textarea',
                    'ffe-default-mode',
                    className,
                )}
                ref={ref}
                {...rest}
            />
        );
    },
);
