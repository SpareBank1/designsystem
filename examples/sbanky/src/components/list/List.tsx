import React from 'react';

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    // Adding pl-0 based on existing usage in SidebarMenu for consistency,
    // can be overridden by className.
    <li className={`pl-0 ${className}`} {...rest}>
      {children}
    </li>
  );
};

interface ListRootProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  as?: 'ul' | 'ol';
  children: React.ReactNode;
  className?: string;
  /**
   * Defines vertical space between list items using Tailwind's space-y utilities.
   * Accepts a suffix for the 'space-y-' Tailwind class from your config's \`theme.spacing\` 
   * (e.g., '1' for 0.5rem, '2' for 1rem, 'sm' for 1rem etc., based on your project's Tailwind config).
   * Example: \`itemSpacing="1"\` would apply \`space-y-1\`.
   * Defaults to no added space utility if not provided.
   */
  itemSpacing?: string;
}

const ListRoot: React.FC<ListRootProps> = ({
  as = 'ul',
  children,
  className = '',
  itemSpacing,
  ...rest
}) => {
  const Tag = as;
  const spacingClass = itemSpacing ? `space-y-${itemSpacing}` : '';

  return (
    <Tag
      // Applying base list-none, m-0, p-0 for a clean slate, similar to common resets.
      className={`list-none m-0 p-0 ${spacingClass} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const List = Object.assign(ListRoot, { Item: ListItem }); 