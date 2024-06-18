import React, { ElementType, ForwardedRef, useCallback, useRef } from 'react';
import classNames from 'classnames';
import { mergeRefs } from '../mergeRefs';
import { CardAction, CardActionProps } from './CardAction';
import { fixedForwardRef } from '../fixedForwardRef';
import { ComponentAsPropParams } from '../types';

export type WithCardActionProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    children: (props: { CardAction: typeof CardAction }) => React.ReactNode;
};

function WithCardActionForwardRef<As extends ElementType>(
    props: WithCardActionProps<As>,
    ref: ForwardedRef<any>,
) {
    const { children, as: Comp = 'div', onClick, ...rest } = props;
    const actionInnerRef = useRef<HTMLAnchorElement>(null);

    const PartialAppliedCardAction = useCallback(
        <CardActionAs extends ElementType = 'a'>(
            { className, ...restCardAction }: CardActionProps<CardActionAs>,
            actionRef?: ForwardedRef<any>,
        ) => {
            return (
                <CardAction
                    className={classNames(className, 'ffe-card__action', {
                        'ffe-card__action--raw': !className,
                    })}
                    ref={
                        actionRef
                            ? mergeRefs([actionRef, actionInnerRef])
                            : actionInnerRef
                    }
                    {...restCardAction}
                />
            );
        },
        [],
    );

    return (
        <Comp
            {...rest}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                if (!actionInnerRef.current?.contains(e.target as Node)) {
                    actionInnerRef.current?.click();
                }
                onClick?.(e);
            }}
            ref={ref}
        >
            {children({
                CardAction: fixedForwardRef(PartialAppliedCardAction),
            })}
        </Comp>
    );
}

export const WithCardAction = fixedForwardRef(WithCardActionForwardRef);
