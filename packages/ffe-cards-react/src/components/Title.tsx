import React, { ElementType } from 'react';
import classNames from 'classnames';

import { ComponentBase, ComponentBaseProps } from './ComponentBase.js';

export type TitleProps<As extends ElementType = 'p'> =
    ComponentBaseProps<As> & {
        /** Disable wrapping and hide overflow with ellipsis */
        overflowEllipsis?: boolean;
    };

export function Title<As extends ElementType>(props: TitleProps<As>) {
    const { className, overflowEllipsis, ...rest } = props;

    return (
        <ComponentBase
            className={classNames(
                'ffe-card-body__title',
                {
                    'ffe-card-body__title--overflow-ellipsis': overflowEllipsis,
                },
                className,
            )}
            {...rest}
        />
    );
}
