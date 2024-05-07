import React, { ElementType } from 'react';
import classNames from 'classnames';

import { ComponentBase, ComponentBaseProps } from './ComponentBase';

export type TextProps<As extends ElementType = 'p'> = ComponentBaseProps<As>;

export function Text<As extends ElementType>(props: TextProps<As>) {
    const { className, ...rest } = props;

    return (
        <ComponentBase
            className={classNames('ffe-card-body__text', className)}
            {...rest}
        />
    );
}
