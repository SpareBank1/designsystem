import React from 'react';
import classNames from 'classnames';

export interface DividerLineProps
    extends React.ComponentPropsWithoutRef<'hr'> {}

export function DividerLine({ className, ...rest }: DividerLineProps) {
    return (
        <hr
            className={classNames('ffe-divider-line', className)}
            aria-hidden="true"
            role="presentation"
            {...rest}
        />
    );
}
