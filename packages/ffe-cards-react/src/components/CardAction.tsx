import React, { ElementType, ForwardedRef } from 'react';
import { fixedForwardRef } from '../fixedForwardRef.js';
import { ComponentAsPropParams } from '../types.js';

export type CardActionProps<As extends ElementType = 'a'> =
    ComponentAsPropParams<As>;

function CardActionWithRef<As extends ElementType>(
    props: CardActionProps<As>,
    ref: ForwardedRef<any>,
) {
    const { as: Comp = 'a', ...rest } = props;

    return <Comp {...rest} ref={ref} />;
}

export const CardAction = fixedForwardRef(CardActionWithRef);
