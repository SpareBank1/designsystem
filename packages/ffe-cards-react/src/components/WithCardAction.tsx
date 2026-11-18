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

/** Klikk som nettleseren normalt åpner i ny fane eller nytt vindu når de treffer en lenke */
const opensInNewContext = (e: React.MouseEvent) =>
    e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1;

function WithCardActionForwardRef<As extends ElementType>(
    props: WithCardActionProps<As>,
    ref: ForwardedRef<any>,
) {
    const {
        children,
        as: Comp = 'div',
        onClick,
        onAuxClick,
        className,
        baseClassName,
        ...rest
    } = props;
    const cardActionInnerRef = useRef<HTMLElement>(null);
    const forwardedEventRef = useRef<Event | null>(null);

    /** Videresender klikk på kortet til CardAction. Vanlige klikk sendes med .click().
     * Klikk med Cmd, Ctrl, Shift eller midtknapp sendes som et nytt event med samme
     * taster, slik at onClick på CardAction (f.eks. router-lenker) ser hva brukeren gjorde. */
    const forwardToCardAction = (
        e: React.MouseEvent<HTMLElement>,
        type: 'click' | 'auxclick',
    ) => {
        const cardAction = cardActionInnerRef.current;
        const hasSelectedText = !!window.getSelection()?.toString().length;
        if (
            !cardAction ||
            hasSelectedText ||
            cardAction.contains(e.target as Node)
        ) {
            return;
        }
        if (!opensInNewContext(e)) {
            if (type === 'click') {
                cardAction.click();
            }
            return;
        }
        const forwarded = new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            view: window,
            ctrlKey: e.ctrlKey,
            metaKey: e.metaKey,
            shiftKey: e.shiftKey,
            altKey: e.altKey,
            button: e.button,
            buttons: e.buttons,
            clientX: e.clientX,
            clientY: e.clientY,
            screenX: e.screenX,
            screenY: e.screenY,
        });
        forwardedEventRef.current = forwarded;
        try {
            cardAction.dispatchEvent(forwarded);
        } finally {
            forwardedEventRef.current = null;
        }
    };

    /** Nettlesere er ikke enige om hva de gjør med syntetiske klikk med modifikatortaster
     * (Safari åpner i samme fane, midtklikk ignoreres), så for lenker åpner vi ny fane selv
     * når det videresendte klikket bobler tilbake til kortet. */
    const openForwardedInNewContext = (e: React.MouseEvent<HTMLElement>) => {
        const cardAction = cardActionInnerRef.current;
        if (
            e.nativeEvent !== forwardedEventRef.current ||
            e.defaultPrevented ||
            !(cardAction instanceof HTMLAnchorElement) ||
            !cardAction.href
        ) {
            return;
        }
        e.preventDefault();
        window.open(cardAction.href, '_blank', 'noopener');
    };

    const handleCardClick = (
        e: React.MouseEvent<HTMLElement>,
        type: 'click' | 'auxclick',
    ) => {
        if (e.nativeEvent === forwardedEventRef.current) {
            openForwardedInNewContext(e);
        } else if (type === 'click' || e.button === 1) {
            forwardToCardAction(e, type);
        }
    };
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
                handleCardClick(e, 'click');
                onClick?.(e);
            }}
            onAuxClick={(e: React.MouseEvent<HTMLElement>) => {
                handleCardClick(e, 'auxclick');
                onAuxClick?.(e);
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
