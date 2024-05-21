import { ComponentPropsWithoutRef, ElementType } from 'react';

export type DistributiveOmit<T, Omitted extends PropertyKey> = T extends any
    ? Omit<T, Omitted>
    : never;

export type ComponentWithoutRefAsPropParams<As extends ElementType = any> = {
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithoutRef<ElementType extends As ? 'div' : As>,
    'as'
>;

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Margin =
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl';

export type Padding =
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl';

export type BackgroundColor =
    | 'frost-30'
    | 'sand'
    | 'sand-70'
    | 'sand-30'
    | 'syrin-70'
    | 'syrin-30'
    | 'vann'
    | 'vann-30'
    | 'fjell'
    | 'hvit';

export type BackgroundColorDark = 'svart' | 'natt' | 'koksgraa';
