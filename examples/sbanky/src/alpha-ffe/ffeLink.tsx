import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

export type LinkVariant = 'primary' | 'secondary' | 'tertiary';

export interface FFELinkBaseProps {
    underline?: boolean;
    inline?: boolean;
    variant?: LinkVariant;
    children: React.ReactNode;
    className?: string;
}

export type FFELinkProps<C extends React.ElementType = 'a'> =
    FFELinkBaseProps & {
        as?: C;
    } & Omit<React.ComponentPropsWithoutRef<C>, keyof FFELinkBaseProps>;

export const FFELink = forwardRef(
    (
        {
            as,
            className,
            underline = true,
            inline = false,
            variant = 'primary',
            children,
            ...rest
        }: FFELinkProps<'a'>,
        ref: React.ForwardedRef<HTMLAnchorElement>,
    ) => {
        const Component = as || 'a';

        return (
            <Component
                {...rest}
                ref={ref}
                className={clsx(
                    'ffe-link',
                    `ffe-link--${variant}`,
                    underline
                        ? 'ffe-link--underline'
                        : 'ffe-link--no-underline',
                    inline ? 'ffe-link--inline' : 'ffe-link--inline-flex',
                    className,
                )}
            >
                {children}
            </Component>
        );
    },
);

FFELink.displayName = 'FFELink';

export default FFELink;
