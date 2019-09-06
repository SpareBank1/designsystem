import * as React from 'react';

export interface DividerLineProps extends React.HTMLAttributes<HTMLHRElement> {
    className?: string;
}

export interface EmphasizedTextProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
}

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    className?: string;
    error?: boolean;
    inline?: boolean;
    lookLike?: 1 | 2 | 3 | 4 | 5 | 6;
    noMargin?: boolean;
    withBorder?: boolean;
}

export interface LinkTextProps extends React.AnchorHTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    element?: HTMLElement | string;
    underline?: boolean;
}

export interface SimpleElementProps {
    children: React.ReactNode;
    className?: string;
}

export interface ParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    className?: string;
    lead?: boolean;
    subLead?: boolean;
    textCenter?: boolean;
    textLeft?: boolean;
}

declare class DividerLine extends React.Component<DividerLineProps, any> {}
declare class EmphasizedText extends React.Component<
    EmphasizedTextProps,
    any
> {}
declare class Heading1 extends React.Component<HeadingProps, any> {}
declare class Heading2 extends React.Component<HeadingProps, any> {}
declare class Heading3 extends React.Component<HeadingProps, any> {}
declare class Heading4 extends React.Component<HeadingProps, any> {}
declare class Heading5 extends React.Component<HeadingProps, any> {}
declare class Heading6 extends React.Component<HeadingProps, any> {}
declare class LinkText extends React.Component<LinkTextProps, any> {}
declare class MicroText extends React.Component<
    SimpleElementProps & React.HTMLAttributes<HTMLSpanElement>,
    any
> {}
declare class Paragraph extends React.Component<ParagraphProps, any> {}
declare class PreformattedText extends React.Component<
    SimpleElementProps & React.HTMLAttributes<HTMLPreElement>,
    any
> {}
declare class SmallText extends React.Component<
    SimpleElementProps & React.HTMLAttributes<HTMLSpanElement>,
    any
> {}
declare class StrongText extends React.Component<
    SimpleElementProps & React.HTMLAttributes<HTMLElement>,
    any
> {}
