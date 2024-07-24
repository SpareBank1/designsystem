import React, {
    ElementType,
    ForwardedRef,
    useCallback,
    useRef,
    useState,
    useEffect,
} from 'react';
import classNames from 'classnames';
import { mergeRefs } from '../mergeRefs';
import { CardAction, CardActionProps } from './CardAction';
import { fixedForwardRef } from '../fixedForwardRef';
import { ComponentAsPropParams } from '../types';

export type WithCardActionProps<As extends ElementType = 'div'> = Omit<
    ComponentAsPropParams<As>,
    'children'
> & {
    baseClassName: string;
    children: (props: { CardAction: typeof CardAction }) => React.ReactNode;
};

function WithCardActionForwardRef<As extends ElementType>(
    props: WithCardActionProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        children,
        as: Comp = 'div',
        onClick,
        className,
        baseClassName,
        ...rest
    } = props;
    const cardActionInnerRef = useRef<HTMLElement>(null);
    const [isUsingCardAction, setIsUsingCardAction] = useState<boolean>();

    /** Før att hover og focus skall fungera i browsers som ikke støtter :has.
     * Allt med klassen '--clickable' kan eftervart fjernes. */
    useEffect(() => {
        const isStillUsingCardAction = !!cardActionInnerRef.current;
        if (isUsingCardAction !== isStillUsingCardAction) {
            setIsUsingCardAction(isStillUsingCardAction);
        }
    }, [isUsingCardAction]);

    const PartialAppliedCardAction = useCallback(
        <CardActionAs extends ElementType = 'a'>(
            {
                className: cardActionClassName,
                ...restCardAction
            }: CardActionProps<CardActionAs>,
            cardActionRef?: ForwardedRef<any>,
        ) => {
            return (
                <CardAction
                    className={classNames(
                        cardActionClassName,
                        'ffe-card__action',
                        {
                            'ffe-card__action--raw': !cardActionClassName,
                        },
                    )}
                    ref={
                        cardActionRef
                            ? mergeRefs([cardActionRef, cardActionInnerRef])
                            : cardActionInnerRef
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
            className={classNames(
                className,
                isUsingCardAction && `${baseClassName}--clickable`,
            )}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
                if (!cardActionInnerRef.current?.contains(e.target as Node)) {
                    cardActionInnerRef.current?.click();
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
