import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { fixedForwardRef } from '../fixedForwardRef';
import { ComponentAsPropParams, CardRenderProps } from '../types';
import classNames from 'classnames';
import { Text, Subtext, Title, CardName } from '../components';

export type IconCardProps<As extends ElementType = 'a'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** Element of icon */
    icon: ReactElement;
    /** Smaller icon and less space */
    condensed?: boolean;
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function IconCardWithForwardRef<As extends ElementType>(
    props: IconCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        as: Comp = 'a',
        className,
        condensed,
        icon,
        children,
        ...rest
    } = props;

    return (
        <Comp
            className={classNames(
                'ffe-icon-card',
                { 'ffe-icon-card--condensed': condensed },
                className,
            )}
            {...rest}
            ref={ref}
        >
            {React.cloneElement(icon, {
                ...icon.props,
                className: classNames(
                    'ffe-icon-card__icon',
                    icon.props.className,
                ),
            })}
            <div className="ffe-icon-card__body">
                {typeof children === 'function'
                    ? children({ Text, Subtext, Title, CardName })
                    : children}
            </div>
        </Comp>
    );
}

export const IconCard = fixedForwardRef(IconCardWithForwardRef);
