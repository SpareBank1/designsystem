import * as React from 'react';

export type ComponentBaseProps =
    | ({
          className?: string;
          element?: HTMLElement | string | React.ElementType;
          children?: React.ReactNode;
      } & React.ComponentProps<'button'>)
    | React.ComponentProps<'a'>;

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

type NoInfer<T> = [T][T extends any ? 0 : never];

export interface ImageCardProps<T = {}>
    extends Omit<ComponentBaseProps, 'children'> {
    imageSrc: string;
    imageAltText: string;
    children?: React.ReactNode | ((props: CardRenderProps) => React.ReactNode);
}

export interface IconCardProps<T = {}>
    extends Omit<ComponentBaseProps, 'children'> {
    icon: React.ReactNode;
    condensed?: boolean;
    greyCharcoal?: boolean;
    children?: React.ReactNode | ((props: CardRenderProps) => React.ReactNode);
}

export interface TextCardProps extends Omit<ComponentBaseProps, 'children'> {
    leftAlign?: boolean;
    children: React.ReactNode | ((props: CardRenderProps) => React.ReactNode);
}

declare class CardBase<T = {}> extends React.Component<
    NoInfer<T> & ComponentBaseProps,
    any
> {}
declare class IconCard<T = {}> extends React.Component<
    NoInfer<T> & IconCardProps,
    any
> {}
declare class ImageCard<T = {}> extends React.Component<
    NoInfer<T> & ImageCardProps,
    any
> {}
declare class TextCard<T = {}> extends React.Component<
    NoInfer<T> & TextCardProps,
    any
> {}
declare class ComponentBase<T = {}> extends React.Component<
    NoInfer<T> & ComponentBaseProps,
    any
> {}
