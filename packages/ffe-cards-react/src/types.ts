import { ComponentPropsWithRef, ElementType, ForwardedRef } from 'react';
import { CardName, Subtext, Text, Title, CardAction } from './components';

export type DistributiveOmit<T, Omitted extends PropertyKey> = T extends any
    ? Omit<T, Omitted>
    : never;

export type ComponentAsPropParams<As extends ElementType> = {
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends As ? 'a' : As>,
    'as' & { ref: ForwardedRef<any> }
>;

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface CardRenderProps {
    CardName: typeof CardName;
    Title: typeof Title;
    Subtext: typeof Subtext;
    Text: typeof Text;
    CardAction: typeof CardAction;
}

export interface CardActionRenderProps {
    CardAction: typeof CardAction;
}

export type BgColor =
    | 'sand-30'
    | 'sand-70'
    | 'frost-30'
    | 'syrin-30'
    | 'syrin-70';

export type BgColorDarkmode = 'natt' | 'svart' | 'koksgraa';
