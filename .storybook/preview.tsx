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
import { TabGroup, Tab } from '@sb1/ffe-tabs-react';
import type { Preview } from '@storybook/react';
import React, { useState } from 'react';
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
                order: [
                    'Introduksjon',
                    'Design',
                    'Utils',
                    'Komponenter',
                    'Sider',
                ],
            },
        },
    },
    decorators: [
        (Story, context) => {
            const { scheme, accent } = context.globals;
            const [activeTabId, setActiveTabId] = useState('defaultLight');
            return (
                <>
                    <TabGroup>
                        <Tab
                            selected={activeTabId === 'defaultLight'}
                            onClick={() => setActiveTabId('defaultLight')}
                        >
                            Default Light
                        </Tab>
                        <Tab
                            selected={activeTabId === 'accentLight'}
                            onClick={() => setActiveTabId('accentLight')}
                        >
                            Accent Light
                        </Tab>
                        <Tab
                            selected={activeTabId === 'defaultDark'}
                            onClick={() => setActiveTabId('defaultDark')}
                        >
                            Default Dark
                        </Tab>
                        <Tab
                            selected={activeTabId === 'accentDark'}
                            onClick={() => setActiveTabId('accentDark')}
                        >
                            Accent Dark
                        </Tab>
                    </TabGroup>
                    <div className="ffe-body-text">
                        {activeTabId === 'defaultLight' && (
                            <div className="ffe-docs-content-container ">
                                <Story />
                            </div>
                        )}
                        {activeTabId === 'accentLight' && (
                            <div className="ffe-docs-content-container ffe-accent-mode">
                                <Story />
                            </div>
                        )}
                        {activeTabId === 'defaultDark' && (
                            <div className="ffe-docs-content-container dark-mode regard-color-scheme-preference">
                                <Story />
                            </div>
                        )}
                        {activeTabId === 'accentDark' && (
                            <div className="ffe-docs-content-container dark-mode regard-color-scheme-preference ffe-accent-mode">
                                <Story />
                            </div>
                        )}
                    </div>
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
                    detail: 'both',
                },
            },
            defaultValue: 'both',
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
                    detail: 'both',
                },
            },
            defaultValue: 'both',
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
