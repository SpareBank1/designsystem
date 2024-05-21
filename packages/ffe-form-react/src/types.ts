import {
    ComponentPropsWithRef,
    ComponentPropsWithoutRef,
    ElementType,
    ForwardedRef,
} from 'react';

export type DistributiveOmit<T, Omitted extends PropertyKey> = T extends any
    ? Omit<T, Omitted>
    : never;

export type ComponentWithoutRefAsPropParams<As extends ElementType = any> = {
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithoutRef<ElementType extends As ? 'div' : As>,
    'as'
>;

export type ComponentWithRefAsPropParams<As extends ElementType> = {
    as?: As;
} & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends As ? 'div' : As>,
    'as' & { ref: ForwardedRef<any> }
>;

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
