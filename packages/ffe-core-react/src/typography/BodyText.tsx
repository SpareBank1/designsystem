import React, { ComponentProps, ElementType } from 'react';
import classNames from 'classnames';
import { DistributiveOmit } from './types';

export type BodyTextProps<As extends ElementType = 'div'> = {
    as?: As;
    // ComponentPropsWithoutProps was missing class for some reason
} & DistributiveOmit<
    ComponentProps<ElementType extends As ? 'div' : As>,
    'as' | 'ref'
>;

export function BodyText<As extends ElementType>(props: BodyTextProps<As>) {
    const { as: Comp = 'div', className, ...rest } = props;

    return (
        <Comp className={classNames('ffe-body-text', className)} {...rest} />
    );
}
