import './main.less';
import { themes } from '@storybook/theming';
import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        darkMode: {
            dark: { ...themes.dark },
            light: { ...themes.normal },
            darkClass: 'regard-color-scheme-preference',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
