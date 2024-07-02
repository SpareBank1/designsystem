import React, { ForwardedRef } from 'react';
import classNames from 'classnames';
import { fixedForwardRef } from '../fixedForwardRef';
import { mergeRefs } from '@sb1/ffe-cards-react/src/mergeRefs';

export interface CardGroupProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    /** The children of the CardGroup component */
    children: React.ReactNode;
}

function CardGroupWithForwardRef(
    props: CardGroupProps,
    ref: ForwardedRef<any>,
) {
    const { className, children, ...rest } = props;

    return (
        <div
            className={classNames('ffe-card-group', className)}
            {...(rest as Record<string, unknown>)}
            ref={ref}
        >
            {React.Children.map(
                children,
                (child, index) =>
                    React.isValidElement(child) &&
                    React.cloneElement(child, {
                        ...child.props,
                        ref: mergeRefs([child.props.ref]),
                    }),
            )}
        </div>
    );
}
export const CardGroup = fixedForwardRef(CardGroupWithForwardRef);
