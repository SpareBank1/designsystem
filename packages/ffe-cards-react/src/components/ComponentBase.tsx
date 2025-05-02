import React, { ComponentPropsWithRef, ElementType } from 'react';
import { DistributiveOmit } from '../types.js';

export type ComponentBaseProps<As extends ElementType = 'p'> = {
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends As ? 'p' : As>,
    'as'
>;

export function ComponentBase<As extends ElementType>(
    props: ComponentBaseProps<As>,
) {
    const { as: Comp = 'p', ...rest } = props;
    return <Comp {...rest} />;
}
