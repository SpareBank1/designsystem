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

export interface IconCardProps extends CardBaseProps {
    icon: React.ReactNode;
    condensed?: boolean;
    greyCharcoal?: boolean;
}

export interface ImageCardProps extends CardBaseProps {
    image: React.ReactNode;
}

export interface TitleProps extends ComponentBaseProps {
    overflowEllipsis?: boolean;
}

export interface SubtextProps extends ComponentBaseProps {}

export interface TextProps extends ComponentBaseProps {}

export interface CardNameProps extends ComponentBaseProps {}

export interface TextCardRenderProps {
    Title: typeof TitleProps;
    Subtext: typeof SubtextProps;
    Text: typeof TextProps;
}

export interface TextCardProps extends CardBaseProps {
    leftAlign?: boolean;
    children: React.ReactNode | Function<TextCardRenderProps>;
}

declare class CardBase extends React.Component<CardBaseProps, any> {}
declare class IconCard extends React.Component<IconCardProps, any> {}
declare class ImageCard extends React.Component<ImageCardProps, any> {}
declare class TextCard extends React.Component<TextCardProps, any> {}
declare class ComponentBase extends React.Component<ComponentBaseProps, any> {}
