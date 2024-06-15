import React, { ReactElement } from 'react';
import { CardRenderProps } from '../types';
import classNames from 'classnames';
import { WithCardAction, Text, Subtext, Title, CardName } from '../components';

export interface IconCardProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** Element of icon */
    icon: ReactElement;
    /** Smaller icon and less space */
    condensed?: boolean;
    children:
        | React.ReactNode
        | ((cardRenderProps: CardRenderProps) => React.ReactNode);
}

export const IconCard: React.FC<IconCardProps> = ({
    className,
    condensed,
    icon,
    children,
    ...rest
}) => {
    return (
        <WithCardAction
            className={classNames(
                'ffe-icon-card',
                { 'ffe-icon-card--condensed': condensed },
                className,
            )}
            {...rest}
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
};
