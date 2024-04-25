import * as React from 'react';

export interface AccordionItemProps
    extends React.ComponentPropsWithoutRef<'div'> {
    heading: string | React.ReactElement;
    defaultOpen?: boolean;
    isOpen?: boolean;
    onToggleOpen?: (isOpen: boolean) => void;
    ariaLabel?: string;
}

export interface AccordionProps extends React.ComponentPropsWithoutRef<'div'> {
    children:
        | (React.ReactElement<AccordionItemProps> | null)[]
        | React.ReactElement<AccordionItemProps>;
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

declare class Accordion extends React.Component<AccordionProps, any> {}

declare class AccordionItem extends React.Component<AccordionItemProps, any> {}
