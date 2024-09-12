import React from 'react';
import './main.less';
import './preview.less';

import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
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
