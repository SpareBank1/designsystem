import React, { ElementType, ForwardedRef, ReactElement } from 'react';
import { CardRenderProps, ComponentAsPropParams } from '../types';
import classNames from 'classnames';
import { WithCardAction, Text, Subtext, Title, CardName } from '../components';
import { fixedForwardRef } from '../fixedForwardRef';

export type IconCardProps<As extends ElementType = 'div'> = Omit<
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
    const { className, condensed, icon, children, ...rest } = props;
    const withCardActionProps: React.ComponentProps<typeof WithCardAction> = {
        ...rest,
    };
    return (
        <WithCardAction
            className={classNames(
                'ffe-icon-card',
                { 'ffe-icon-card--condensed': condensed },
                className,
            )}
            {...withCardActionProps}
            ref={ref}
        >
            {({ CardAction }) => (
                <>
                    {React.cloneElement(icon, {
                        ...icon.props,
                        className: classNames(
                            'ffe-icon-card__icon',
                            icon.props.className,
                        ),
                    })}
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
                </>
            )}
        </WithCardAction>
    );
}

export const IconCard = fixedForwardRef(IconCardWithForwardRef);
