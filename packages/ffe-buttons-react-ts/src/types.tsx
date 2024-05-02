import React, {
    ComponentPropsWithRef,
    ElementType,
    ForwardedRef,
    forwardRef,
} from 'react';

type FixedForwardRef = <T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.JSX.Element,
) => (props: P & React.RefAttributes<T>) => React.JSX.Element;

export const fixedForwardRef = forwardRef as FixedForwardRef;

export type DistributiveOmit<T, Omitted extends PropertyKey> = T extends any
    ? Omit<T, Omitted>
    : never;

const UnwrappedAnyComponent = <As extends ElementType>(
    props: {
        as?: As;
    } & DistributiveOmit<
        ComponentPropsWithRef<ElementType extends As ? 'button' : As>,
        'as'
    >,
    ref: ForwardedRef<any>,
): React.JSX.Element => {
    const { as: Comp = 'button', ...rest } = props;
    return <Comp {...rest} ref={ref} />;
};

export const AnyComponent = fixedForwardRef(UnwrappedAnyComponent);
