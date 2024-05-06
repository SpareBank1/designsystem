import React, { ComponentProps, ElementType } from 'react';
import classNames from 'classnames';
import { DistributiveOmit } from './types';

export type LinkIconProp<As extends ElementType = 'a'> = {
    as?: As;
} & DistributiveOmit<
    ComponentProps<ElementType extends As ? 'a' : As>,
    'as' | 'ref'
>;
export function LinkIcon<As extends ElementType>(props: LinkIconProp<As>) {
    const { as: Comp = 'a', className, ...rest } = props;
    return (
        <Comp className={classNames('ffe-link-icon', className)} {...rest} />
    );
}
