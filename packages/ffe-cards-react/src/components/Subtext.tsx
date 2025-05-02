import React, { ElementType } from 'react';
import classNames from 'classnames';

import { ComponentBase, ComponentBaseProps } from './ComponentBase.js';

export type SubtextProps<As extends ElementType = 'p'> = ComponentBaseProps<As>;

export function Subtext<As extends ElementType>(props: SubtextProps<As>) {
    const { className, ...rest } = props;

    return (
        <ComponentBase
            className={classNames('ffe-card-body__subtext', className)}
            {...rest}
        />
    );
}
