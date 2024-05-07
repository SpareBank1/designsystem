import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { fixedForwardRef } from '../fixedForwardRef';
import { ComponentAsPropParams, CardRenderProps } from '../types';
import classNames from 'classnames';
import { Text, Subtext, Title, CardName } from '../components';

export type StippledCardProps<As extends ElementType = 'a'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** Smaller icon and less space */
    condensed?: boolean;
    /** Image to be rendered*/
    img: {
        element: ReactElement;
        type: 'icon' | 'custom';
    };
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function StippledCardWithForwardRef<As extends ElementType>(
    props: StippledCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        as: Comp = 'a',
        className,
        condensed,
        img,
        children,
        ...rest
    } = props;

    return (
        <Comp
            className={classNames(
                'ffe-stippled-card',
                { 'ffe-stippled-card--condensed': condensed },
                className,
            )}
            {...rest}
            ref={ref}
        >
            <div
                className={classNames('ffe-stippled-card__img', {
                    'ffe-stippled-card__img--icon': img?.type === 'icon',
                })}
                aria-hidden={img?.type === 'icon'}
            >
                {img?.element}
            </div>
            <div>
                {typeof children === 'function'
                    ? children({ CardName, Title, Text, Subtext })
                    : children}
            </div>
        </Comp>
    );
}

export const StippledCard = fixedForwardRef(StippledCardWithForwardRef);
