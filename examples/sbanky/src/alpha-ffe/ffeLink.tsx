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

        const baseStyles =
            'relative flex items-center gap-2 transition-all duration-200';
        const variantStyles = {
            primary:
                'text-blue-600 hover:text-blue-800 visited:text-purple-600 dark:text-blue-400 dark:hover:text-blue-300',
            secondary:
                'text-gray-700 hover:text-blue-800 dark:text-gray-300 dark:hover:text-blue-300',
            tertiary:
                'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200',
        };
        const underlineStyles = underline
            ? 'underline hover:no-underline'
            : 'no-underline hover:underline';
        const inlineStyles = inline ? 'inline' : 'inline-flex';
        const focusStyles =
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:bg-blue-50 dark:focus-visible:ring-blue-400 dark:focus-visible:bg-blue-900/20';

        return (
            <Component
                {...rest}
                ref={ref}
                className={clsx(
                    baseStyles,
                    variantStyles[variant],
                    underlineStyles,
                    inlineStyles,
                    focusStyles,
                    'active:ring-2 active:ring-blue-700 active:bg-blue-100 dark:active:ring-blue-300 dark:active:bg-blue-900/30',
                    className,
                )}
            >
                {children}
            </Component>
        );
    },
);

FFELink.displayName = 'FFELink';
