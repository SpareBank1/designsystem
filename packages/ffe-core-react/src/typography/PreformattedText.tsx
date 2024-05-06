import React from 'react';
import classNames from 'classnames';

export interface PreformattedTextProps
    extends React.ComponentPropsWithoutRef<'pre'> {}

export function PreformattedText(props: PreformattedTextProps) {
    const { children, className, ...rest } = props;

    return (
        <pre className={classNames('ffe-pre-text', className)} {...rest}>
            {children}
        </pre>
    );
}
