import React, { ComponentProps, ElementType } from 'react';
import classNames from 'classnames';
import { DistributiveOmit } from './types';

export type SmallTextProps<As extends ElementType = 'span'> = {
    as?: As;
    // ComponentPropsWithoutProps was missing class for some reason
} & DistributiveOmit<
    ComponentProps<ElementType extends As ? 'span' : As>,
    'as' | 'ref'
> & { underline?: boolean };

export function SmallText<As extends ElementType>(props: SmallTextProps<As>) {
    const { as: Comp = 'span', className, underline = false, ...rest } = props;
    return (
        <Comp
            className={classNames(
                'ffe-small-text',
                { 'ffe-small-text--underline': underline },
                className,
            )}
            {...rest}
        />
    );
}
