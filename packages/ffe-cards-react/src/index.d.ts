import * as React from 'react';

export interface ComponentBaseProps
    extends React.HtmlHTMLAttributes<
        HTMLElement | HTMLButtonElement | HTMLAnchorElement
    > {
    className?: string;
    element?: HTMLElement | string | React.ElementType;
    children?: React.ReactNode;
}

export interface CardBaseProps extends ComponentBaseProps {
    to?: string;
}

export interface TitleProps extends ComponentBaseProps {
    overflowEllipsis?: boolean;
}

export interface SubtextProps extends ComponentBaseProps {}

export interface TextProps extends ComponentBaseProps {}

export interface CardNameProps extends ComponentBaseProps {}

export interface CardRenderProps {
    CardName: React.FC<CardNameProps>;
    Title: React.FC<TitleProps>;
    Subtext: React.FC<SubtextProps>;
    Text: React.FC<TextProps>;
}

export interface ImageCardProps extends Omit<CardBaseProps, 'children'> {
    imageSrc: string;
    imageAltText: string;
    children?: React.ReactNode | ((props: CardRenderProps) => React.ReactNode);
}

export interface IconCardProps extends Omit<CardBaseProps, 'children'> {
    icon: React.ReactNode;
    condensed?: boolean;
    greyCharcoal?: boolean;
    children?: React.ReactNode | ((props: CardRenderProps) => React.ReactNode);
}

export interface TextCardProps extends Omit<CardBaseProps, 'children'> {
    leftAlign?: boolean;
    children: React.ReactNode | ((props: CardRenderProps) => React.ReactNode);
}

declare class CardBase extends React.Component<CardBaseProps, any> {}
declare class IconCard extends React.Component<IconCardProps, any> {}
declare class ImageCard extends React.Component<ImageCardProps, any> {}
declare class TextCard extends React.Component<TextCardProps, any> {}
declare class ComponentBase extends React.Component<ComponentBaseProps, any> {}
