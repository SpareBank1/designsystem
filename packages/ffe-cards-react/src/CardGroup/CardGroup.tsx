import React, { ForwardedRef } from 'react';
import classNames from 'classnames';
import { fixedForwardRef } from '../fixedForwardRef';
import { mergeRefs } from '@sb1/ffe-cards-react/src/mergeRefs';

export interface CardGroupProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    shadow?: boolean;
    /** The children of the CardGroup component */
    children: React.ReactNode;
}

function CardGroupWithForwardRef(
    { shadow = true, className, children, ...rest }: CardGroupProps,
    ref: ForwardedRef<any>,
) {
    return (
        <div
            className={classNames(
                'ffe-card-group',
                { 'ffe-card-group--box-shadow': shadow },
                className,
            )}
            {...rest}
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
