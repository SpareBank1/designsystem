import { ComponentPropsWithoutRef, ElementType } from 'react';

export type MessageType = 'info' | 'error' | 'success' | 'tips' | 'news';
export type Locale = 'nb' | 'nn' | 'en';

export type DistributiveOmit<T, Omitted extends PropertyKey> = T extends any
    ? Omit<T, Omitted>
    : never;

export type ComponentWithoutRefAsPropParams<As extends ElementType = any> = {
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithoutRef<ElementType extends As ? 'div' : As>,
    'as'
>;
