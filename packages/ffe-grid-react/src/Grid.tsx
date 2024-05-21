import React, { ElementType } from 'react';
import classNames from 'classnames';
import { ComponentWithoutRefAsPropParams } from './types';

export type GridProps<As extends ElementType = any> =
    ComponentWithoutRefAsPropParams<As> & {
        /** Specify the internal gutter of the grid */
        gap?: 'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg';
    };

export const Grid: React.FC<GridProps> = ({
    children,
    className,
    gap,
    as: Comp = 'div',
    ...rest
}) => {
    return (
        <Comp
            className={classNames(className, 'ffe-grid', {
                [`ffe-grid--gap-${gap}`]: gap,
            })}
            {...rest}
        >
            {children}
        </Comp>
    );
};
