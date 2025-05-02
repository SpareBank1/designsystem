import React, { ElementType } from 'react';
import classNames from 'classnames';

import { ComponentBase, ComponentBaseProps } from './ComponentBase.js';

export type CardNameProps<As extends ElementType = 'p'> =
    ComponentBaseProps<As>;

export function CardName<As extends ElementType>(props: CardNameProps<As>) {
    const { className, ...rest } = props;

    return (
        <ComponentBase
            className={classNames('ffe-card-body__card-name', className)}
            {...rest}
        />
    );
}
