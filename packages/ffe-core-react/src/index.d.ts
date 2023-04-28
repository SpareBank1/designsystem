import * as React from 'react';

export interface DividerLineProps extends React.ComponentProps<'hr'> {
    className?: string;
}

export interface EmphasizedTextProps extends React.ComponentProps<'em'> {
    children: React.ReactNode;
    className?: string;
}

export interface HeadingProps extends React.ComponentProps<'header'> {
    children: React.ReactNode;
    className?: string;
    error?: boolean;
    inline?: boolean;
    lookLike?: 1 | 2 | 3 | 4 | 5 | 6;
    noMargin?: boolean;
    withBorder?: boolean;
    textCenter?: boolean;
}

export interface LinkTextProps extends React.ComponentProps<'a'> {
    children: React.ReactNode;
    className?: string;
    element?: HTMLElement | string | React.ElementType;
    underline?: boolean;
}

export interface LinkIconProps extends React.ComponentProps<'a'> {
    children: React.ReactNode;
    className?: string;
    element?: HTMLElement | string | React.ElementType;
}

export interface SimpleElementProps {
    children: React.ReactNode;
    className?: string;
}

export interface SmallTextProps {
    element?: HTMLElement | string | React.ElementType;
    className?: string;
}

export interface ParagraphProps extends React.ComponentProps<'p'> {
    children: React.ReactNode;
    className?: string;
    lead?: boolean;
    subLead?: boolean;
    textCenter?: boolean;
    textLeft?: boolean;
}

export interface WaveProps {
    className?: string;
    position?: string;
    flip?: boolean;
    color:
        | 'hvit'
        | 'frost-30'
        | 'sand-30'
        | 'sand-70'
        | 'syrin-30'
        | 'syrin-70'
        | 'vann'
        | 'vann-30'
        | 'fjell';
    bgColor?:
        | 'hvit'
        | 'frost-30'
        | 'sand-30'
        | 'sand-70'
        | 'syrin-30'
        | 'syrin-70'
        | 'vann'
        | 'vann-30'
        | 'fjell';
    darkmodeColor?: 'svart' | 'natt';
    bgDarkmodeColor?: 'svart' | 'natt';
    children?: React.ReactNode;
}

type NoInfer<T> = [T][T extends any ? 0 : never];

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
declare class LinkText<T = {}> extends React.Component<
    NoInfer<T> & LinkTextProps,
    any
> {}
declare class LinkIcon extends React.Component<LinkIconProps, any> {}
declare class MicroText extends React.Component<
    SimpleElementProps & React.ComponentProps<'span'>,
    any
> {}
declare class Paragraph extends React.Component<ParagraphProps, any> {}
declare class PreformattedText extends React.Component<
    SimpleElementProps & React.ComponentProps<'pre'>,
    any
> {}
declare class SmallText extends React.Component<
    SmallTextProps & React.ComponentProps<'span'>,
    any
> {}
declare class StrongText extends React.Component<
    SimpleElementProps & React.ComponentProps<'strong'>,
    any
> {}
declare class Wave extends React.Component<WaveProps, any> {}
