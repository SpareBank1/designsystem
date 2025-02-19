import type { StorybookConfig } from '@storybook/react-vite';
import { createRequire } from 'module';
import { dirname, join } from 'path';
const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
    stories: [
        '../packages/ffe-core/documentation/Index.mdx',
        '../packages/**/*.@(mdx)',
        '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../documentation/**/*.@(mdx)',
    ],
    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-interactions'),
        {
            name: getAbsolutePath('@storybook/addon-storysource'),
            options: {
                loaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
    staticDirs: ['./public'],
    managerHead: head =>
        `${head}<link rel="shortcut icon" type="image/x-icon" href="./favicon.ico">`,
};
export default config;
