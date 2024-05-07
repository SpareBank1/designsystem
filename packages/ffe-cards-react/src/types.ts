import React, { ComponentPropsWithRef, ElementType, ForwardedRef } from 'react';
import {
    CardNameProps,
    SubtextProps,
    TextProps,
    TitleProps,
} from './components';

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
    CardName: React.ElementType<CardNameProps<React.ElementType>>;
    Title: React.ElementType<TitleProps<React.ElementType>>;
    Subtext: React.ElementType<SubtextProps<React.ElementType>>;
    Text: React.ElementType<TextProps<React.ElementType>>;
}
