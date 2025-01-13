import { defineConfig } from 'vite';
import type { UserConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { glob } from 'glob';
import purgecss from '@fullhuman/postcss-purgecss';

async function collectFfeImports() {
    const nodeModulesPath = resolve(__dirname, 'node_modules/@sb1');
    const lessFiles = await glob('**/less/*.less', {
        cwd: nodeModulesPath,
        ignore: ['**/node_modules/**'],
    });
    const imports = ['@import "@sb1/ffe-core/less/colors";'];
    for (const file of lessFiles) {
        if (!file.includes('ffe-core/less/variables.less')) {
            const importPath = file.replace('.less', '');
            imports.push(`@import "@sb1/${importPath}";`);
        }
    }
    return imports.join('\n');
}

export default defineConfig(async () => {
    const { viteStaticCopy } = await import('vite-plugin-static-copy');
    const config: UserConfig = {
        plugins: [
            react() as PluginOption,
            viteStaticCopy({
                targets: [
                    {
                        src: 'node_modules/@sb1/**/fonts/*',
                        dest: 'assets/fonts',
                    },
                ],
            }) as PluginOption,
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    math: 'always',
                    additionalData: await collectFfeImports(),
                    paths: [resolve(__dirname, 'node_modules')],
                },
            },
            postcss: {
                plugins: [
                    purgecss({
                        content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
                        defaultExtractor: content =>
                            content.match(/[\w-/:]+(?<!:)/g) || [],
                        safelist: {
                            standard: [
                                /^ffe-/,
                                /^sb1-/,
                                'js-focus-visible',
                                /^data-/,
                                /^aria-/,
                            ],
                            deep: [/ffe-.+$/, /sb1-.+$/],
                            greedy: [/^ffe-.*$/, /^sb1-.*$/, /^js-.*$/],
                            keyframes: [/^ffe-/, /^sb1-/],
                            variables: [/^--ffe-/, /^--sb1-/],
                        },
                    }),
                ],
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
                '@src': resolve(__dirname, 'src'),
                '@affe': resolve(__dirname, 'src/alpha-ffe'),
                '@components': resolve(__dirname, 'src/components'),
                '@styles': resolve(__dirname, 'src/styles'),
            },
        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        'react-vendor': ['react', 'react-dom'],
                        'sb1-core': ['@sb1/ffe-core', '@sb1/ffe-core-react'],
                    },
                },
            },
            cssCodeSplit: true,
        },
    };
    return config;
});
