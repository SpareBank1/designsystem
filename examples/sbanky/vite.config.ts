import { defineConfig } from 'vite';
import type { UserConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { ffeLessPlugin } from '@sb1/ffe-vite-less';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import purgecss from '@fullhuman/postcss-purgecss';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(async () => {
    const config: UserConfig = {
        plugins: [
            react(),
            ffeLessPlugin({
                nodeModulesPath: resolve(__dirname, 'node_modules')
            }) as unknown as PluginOption,
            viteStaticCopy({
                targets: [
                    {
                        src: 'node_modules/@sb1/ffe-webfonts/fonts/*',
                        dest: 'fonts'
                    }
                ]
            }) as PluginOption,
        ],
        css: {
            postcss: {
                plugins: [
                    tailwindcss(),
                    autoprefixer(),
                    purgecss({
                        content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
                        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                        safelist: {
                            standard: [/^ffe-/, /^sb1-/],
                            deep: [/^ffe-/, /^sb1-/],
                            greedy: [/^ffe-/, /^sb1-/],
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
                '@components': resolve(__dirname, 'src/components'),
                '@styles': resolve(__dirname, 'src/styles'),
                '@affe': resolve(__dirname, 'src/alpha-ffe'),
                '@sb1': resolve(__dirname, 'node_modules/@sb1')
            }
        },
        build: {
            sourcemap: true,
            rollupOptions: {
                output: {
                    manualChunks: {
                        'react-vendor': ['react', 'react-dom'],
                        'sb1-core': ['@sb1/ffe-core', '@sb1/ffe-core-react'],
                    },
                },
            },
            cssCodeSplit: true,
        }
    };

    return config;
});
