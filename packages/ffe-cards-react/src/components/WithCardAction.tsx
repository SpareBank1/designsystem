import React, { ElementType, ForwardedRef, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { mergeRefs } from '../mergeRefs';
import { CardAction, CardActionProps } from './CardAction';
import { fixedForwardRef } from '../fixedForwardRef';

export interface WithCardActionProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    children: (props: { CardAction: typeof CardAction }) => React.ReactNode;
}

export const WithCardAction: React.FC<WithCardActionProps> = ({
    children,
    onClick,
    ...rest
}) => {
    const actionRef = useRef<HTMLAnchorElement>(null);

    const PartialAppliedCardAction = useCallback(
        <As extends ElementType = 'a'>(
            { className, ...restCardAction }: CardActionProps<As>,
            ref?: ForwardedRef<any>,
        ) => {
            return (
                <CardAction
                    className={classNames(className, 'ffe-card__action', {
                        'ffe-card__action--raw': !className,
                    })}
                    ref={ref ? mergeRefs([ref, actionRef]) : actionRef}
                    {...restCardAction}
                />
            );
        },
        [],
    );

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            {...rest}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                if (!actionRef.current?.contains(e.target as Node)) {
                    actionRef.current?.click();
                }
                onClick?.(e);
            }}
        >
            {children({
                CardAction: fixedForwardRef(PartialAppliedCardAction),
            })}
        </div>
    );
};
