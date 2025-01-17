import {
    EmphasizedText,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    LinkText,
    Paragraph,
    StrongText,
} from '@sb1/ffe-core-react';
import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';
import type { Preview } from '@storybook/react';
import React from 'react';
import './main.less';
import './preview.less';

type Props = Record<string, unknown>;

const components = {
    h1: (props: Props) => <Heading1 {...props} className="sb-unstyled" />,
    h2: (props: Props) => <Heading2 {...props} className="sb-unstyled" />,
    h3: (props: Props) => <Heading3 {...props} className="sb-unstyled" />,
    h4: (props: Props) => <Heading4 {...props} className="sb-unstyled" />,
    h5: (props: Props) => <Heading5 {...props} className="sb-unstyled" />,
    h6: (props: Props) => <Heading6 {...props} className="sb-unstyled" />,
    p: (props: Props) => <Paragraph {...props} className="sb-unstyled" />,
    ul: (props: Props) => <BulletList {...props} className="sb-unstyled" />,
    li: (props: Props) => <BulletListItem {...props} className="sb-unstyled" />,
    a: (props: Props) => <LinkText {...props} className="sb-unstyled" />,
    strong: (props: Props) => <StrongText {...props} className="sb-unstyled" />,
    em: (props: Props) => <EmphasizedText {...props} className="sb-unstyled" />,
};

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        viewMode: 'docs',
        docs: {
            components,
        },
        options: {
            storySort: {
                method: 'alphabetical',
            },
        },
    },
    decorators: [
        (Story, context) => {
            const { scheme, accent } = context.globals;

            return (
                <>
                    {(scheme === 'both' || scheme === 'light') &&
                        (accent === 'both' || accent === 'default') && (
                            <div className="ffe-docs-content-container ">
                                <Story />
                            </div>
                        )}
                    {(scheme === 'both' || scheme === 'light') &&
                        (accent === 'both' || accent === 'accent') && (
                            <div className="ffe-docs-content-container accent">
                                <Story />
                            </div>
                        )}
                    {(scheme === 'both' || scheme === 'dark') &&
                        (accent === 'both' || accent === 'default') && (
                            <div className="ffe-docs-content-container dark-mode regard-color-scheme-preference">
                                <Story />
                            </div>
                        )}
                    {(scheme === 'both' || scheme === 'dark') &&
                        (accent === 'both' || accent === 'accent') && (
                            <div className="ffe-docs-content-container dark-mode regard-color-scheme-preference accent">
                                <Story />
                            </div>
                        )}
                </>
            );
        },
    ],
    globalTypes: {
        scheme: {
            name: 'Scheme',
            description: 'Select light or dark theme',
            table: {
                defaultValue: {
                    detail: 'light',
                },
            },
            defaultValue: 'light',
            toolbar: {
                items: [
                    { icon: 'sun', value: 'light', title: 'Light' },
                    { icon: 'moon', value: 'dark', title: 'Dark' },
                    { icon: 'stacked', value: 'both', title: 'Both modes' },
                ],
                dynamicTitle: true,
            },
        },
        accent: {
            name: 'Accent',
            description: 'Select accent [WIP]',
            table: {
                defaultValue: {
                    detail: 'default',
                },
            },
            defaultValue: 'default',
            toolbar: {
                items: [
                    {
                        icon: 'lightningoff',
                        value: 'default',
                        title: 'Default',
                    },
                    { icon: 'lightning', value: 'accent', title: 'Accent' },
                    { icon: 'stacked', value: 'both', title: 'Both accents' },
                ],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
