import { ComponentPropsWithRef, ElementType, ForwardedRef } from 'react';

export type DistributiveOmit<T, Omitted extends PropertyKey> = T extends any
    ? Omit<T, Omitted>
    : never;

export type ComponentAsPropParams<As extends ElementType> = {
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends As ? 'button' : As>,
    'as' & { ref: ForwardedRef<any> }
>;

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
