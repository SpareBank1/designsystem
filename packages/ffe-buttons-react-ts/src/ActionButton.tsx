import React, { ElementType, ForwardedRef, useRef } from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';

export type ActionButtonProps<As extends ElementType> = Omit<
    BaseButtonProps<As>,
    'buttonType'
>;

export function ActionButton<As extends ElementType>(
    props: ActionButtonProps<As>,
    ref: ForwardedRef<any>,
): React.JSX.Element {
    // eslint-disable-next-line no-unused-vars
    const { ref: _, ...rest } = props;
    return <BaseButton buttonType="action" {...rest} ref={ref} />;
}

export function App() {
    const ref = useRef<HTMLAnchorElement>(null);

    return <ActionButton as="a" ref={ref} leftIcon={<div>icon her</div>} />;
}
