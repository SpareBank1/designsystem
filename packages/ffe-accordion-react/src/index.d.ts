import * as React from 'react';

export interface AccordionProps extends React.HTMLProps<HTMLUListElement> {
    children: React.ReactNode;
    isBlue?: boolean;
    className?: string;
}

export interface AccordionItemProps extends React.HTMLProps<HTMLLIElement> {
    ariaLabel?: string;
    children?: React.ReactNode;
    className?: string;
    ignoredNodeNames?: string[];
    index?: number;
    open?: boolean;
    defaultOpen?: boolean;
    onToggleOpen?: Function;
    accordionTitle?: React.ReactNode;
    uuid?: string;
    id?: string;
}

declare class Accordion extends React.Component<AccordionProps, any> {}
declare class BlueAccordion extends React.Component<AccordionProps, any> {}
declare class AccordionItem extends React.Component<AccordionItemProps, any> {}
