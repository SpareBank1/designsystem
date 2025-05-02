import classNames from 'classnames';
import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { CardName, Subtext, Text, Title, WithCardAction } from '../components/index.js';
import { fixedForwardRef } from '../fixedForwardRef.js';
import {
    CardActionRenderProps,
    CardRenderProps,
    ComponentAsPropParams,
} from '../types.js';

export type IconCardProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    /** Element of icon */
    icon?: ReactElement;
    rightIcon?: ReactElement;
    /** Smaller icon and less space */
    condensed?: boolean;
    /** No margin on card */
    noMargin?: boolean;
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
};

function IconCardWithForwardRef<As extends ElementType>(
    props: IconCardProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        className,
        condensed,
        icon,
        rightIcon,
        noMargin,
        children,
        ...rest
    } = props;

    return (
        <WithCardAction
            baseClassName="ffe-icon-card"
            className={classNames(
                'ffe-icon-card',
                { 'ffe-icon-card--condensed': condensed },
                { 'ffe-icon-card--no-margin': noMargin },
                className,
            )}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {({ CardAction }: CardActionRenderProps) => {
                const bodyElement = (
                    <div className="ffe-icon-card__body">
                        {typeof children === 'function'
                            ? children({
                                  Text,
                                  Subtext,
                                  Title,
                                  CardName,
                                  CardAction,
                              })
                            : children}
                    </div>
                );

                const iconElement =
                    icon &&
                    React.cloneElement(icon, {
                        ...icon.props,
                        className: classNames(
                            'ffe-icon-card__icon',
                            icon.props.className,
                        ),
                    });

                const rightIconElement =
                    rightIcon &&
                    React.cloneElement(rightIcon, {
                        ...rightIcon.props,
                        className: classNames(
                            'ffe-icon-card__icon',
                            rightIcon.props.className,
                        ),
                    });
                return (
                    <>
                        {iconElement}
                        {bodyElement}
                        {rightIconElement}
                    </>
                );
            }}
        </WithCardAction>
    );
}

export const IconCard = fixedForwardRef(IconCardWithForwardRef);
