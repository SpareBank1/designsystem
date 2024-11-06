import React from 'react';
import './main.less';
import './preview.less';
import type { Preview } from '@storybook/react';
import {
    Paragraph,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    LinkText,
    StrongText,
    EmphasizedText,
} from '@sb1/ffe-core-react';
import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';

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
            const { scheme } = context.globals;
            if (scheme === 'both') {
                return (
                    <>
                        <div className="ffe-docs-content-container">
                            <Story />
                        </div>
                        <div className="ffe-docs-content-container ffe-docs-content-container--dark-mode regard-color-scheme-preference">
                            <Story />
                        </div>
                    </>
                );
            }
            if (scheme === 'dark') {
                return (
                    <div className="ffe-docs-content-container ffe-docs-content-container--dark-mode regard-color-scheme-preference">
                        <Story />
                    </div>
                );
            }

            return (
                <div className="ffe-docs-content-container">
                    <Story />
                </div>
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
            toolbar: {
                icon: 'mirror',
                items: ['light', 'dark', 'both'],
                dynamicTitle: true,
            },
        },
    },
};

export default preview;
