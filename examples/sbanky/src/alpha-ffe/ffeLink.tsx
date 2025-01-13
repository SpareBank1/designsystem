import cl from 'classnames';
import React, { forwardRef } from 'react';
import './ffeLink.less';

export type LinkVariant = 'primary' | 'secondary' | 'tertiary';

export interface FFELinkBaseProps {
    /**
     * Controls link underline behavior.
     * Defaults to true for accessibility, can only be disabled in clear navigation contexts
     * @default true
     */
    underline?: boolean;

    /**
     * Makes the link inline for better text flow
     * @default false
     */
    inline?: boolean;

    /**
     * Visual style variant of the link
     * @default "primary"
     */
    variant?: LinkVariant;

    /**
     * Link content
     */
    children: React.ReactNode;

    /**
     * Additional className
     */
    className?: string;
}

export type FFELinkProps<C extends React.ElementType = 'a'> =
    FFELinkBaseProps & {
        /**
         * Element or component to render as
         * @default 'a'
         */
        as?: C;
    } & Omit<React.ComponentPropsWithoutRef<C>, keyof FFELinkBaseProps>;

export type FFELinkComponent = <C extends React.ElementType = 'a'>(
    props: FFELinkProps<C>,
) => React.ReactElement | null;

/**
 * Link component following SpareBank1 design system.
 * Supports polymorphic "as" prop for rendering as different elements while maintaining proper typing.
 *
 * @example Basic usage
 * ```jsx
 * <FFELink href="#">Standard link</FFELink>
 * ```
 *
 * @example With variant and inline
 * ```jsx
 * <FFELink href="#" variant="secondary" inline>
 *   Inline secondary link
 * </FFELink>
 * ```
 *
 * @example As a different element
 * ```jsx
 * <FFELink as={RouterLink} to="/path">
 *   Router link
 * </FFELink>
 * ```
 */
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
                className={cl('ffe-link', className, `ffe-link--${variant}`, {
                    'ffe-link--no-underline': !underline,
                    'ffe-link--inline': inline,
                })}
            >
                {children}
            </Component>
        );
    },
);

FFELink.displayName = 'FFELink';

export default FFELink;
