import React from 'react';
import classNames from 'classnames';

export interface EmphasizedTextProps
    extends React.ComponentPropsWithoutRef<'em'> {}

export function EmphasizedText({
    children,
    className,
    ...rest
}: EmphasizedTextProps) {
    return (
        <em className={classNames('ffe-em-text', className)} {...rest}>
            {children}
        </em>
    );
}
