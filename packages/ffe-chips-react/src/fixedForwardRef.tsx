import React, { forwardRef } from 'react';

type FixedForwardRef = <T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.JSX.Element,
) => (props: P & React.RefAttributes<T>) => React.JSX.Element;

export const fixedForwardRef = forwardRef as FixedForwardRef;
