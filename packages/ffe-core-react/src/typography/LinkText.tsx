import React, { ComponentProps, ElementType } from 'react';
import classNames from 'classnames';
import { DistributiveOmit } from './types';

export type LinkTextProp<As extends ElementType = 'a'> = {
    as?: As;
} & DistributiveOmit<
    ComponentProps<ElementType extends As ? 'a' : As>,
    'as' | 'ref'
> & { underline?: boolean };

export function LinkText<As extends ElementType>(props: LinkTextProp<As>) {
    const { as: Comp = 'a', className, underline = true, ...rest } = props;
    return (
        <Comp
            className={classNames(
                'ffe-link-text',
                { 'ffe-link-text--no-underline': !underline },
                className,
            )}
            {...rest}
        />
    );
}
