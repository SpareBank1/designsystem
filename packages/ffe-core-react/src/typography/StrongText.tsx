import React from 'react';
import classNames from 'classnames';

export interface StrongTextProps extends React.ComponentProps<'strong'> {}

export function StrongText(props: StrongTextProps) {
    const { className, ...rest } = props;

    return (
        <strong
            className={classNames('ffe-strong-text', className)}
            {...rest}
        />
    );
}
