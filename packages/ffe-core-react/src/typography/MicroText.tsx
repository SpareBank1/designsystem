import React, { ComponentProps, ElementType } from 'react';
import classNames from 'classnames';
import { DistributiveOmit } from './types.js';

export type MicroTextProps<As extends ElementType = 'span'> = {
    as?: As;
    // ComponentPropsWithoutProps was missing class for some reason
} & DistributiveOmit<
    ComponentProps<ElementType extends As ? 'span' : As>,
    'as' | 'ref'
> & { underline?: boolean; strong?: boolean };

export function MicroText<As extends ElementType>(props: MicroTextProps<As>) {
    const { as: Comp = 'span', strong = false, className, ...rest } = props;

    return (
        <Comp
            className={classNames(
                'ffe-micro-text',
                { 'ffe-micro-text--strong': strong },
                className,
            )}
            {...rest}
        />
    );
}
