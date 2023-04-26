import * as React from 'react';

type ComponentBaseProps =
    | ({
          className?: string;
          element?: HTMLElement | string | React.ElementType;
          children?: React.ReactNode;
      } & React.ComponentProps<'html'>)
    | React.ComponentProps<'button'>
    | React.ComponentProps<'a'>;

type CardBaseProps = {
    to?: string;
} & ComponentBaseProps;

type TitleProps = {
    overflowEllipsis?: boolean;
} & ComponentBaseProps;

type SubtextProps = ComponentBaseProps;
type TextProps = ComponentBaseProps;
type CardNameProps = ComponentBaseProps;

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
