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
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL;
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
            alias: isProduction ? {
                // Kun grunnleggende aliaser for produksjon
                '@': resolve(__dirname, 'src'),
                '@src': resolve(__dirname, 'src'),
                '@components': resolve(__dirname, 'src/components'),
                '@styles': resolve(__dirname, 'src/styles'),
            } : {
                // Full alias-oppsett for utvikling
                '@': resolve(__dirname, 'src'),
                '@src': resolve(__dirname, 'src'),
                '@components': resolve(__dirname, 'src/components'),
                '@styles': resolve(__dirname, 'src/styles'),
                '@affe': resolve(__dirname, 'src/alpha-ffe'),
                '@sb1': resolve(__dirname, 'node_modules/@sb1'),
                '@sb1/ffe-cards-react': resolve(__dirname, '../../packages/ffe-cards-react/src/index.ts'),
                '@sb1/ffe-form-react': resolve(__dirname, '../../packages/ffe-form-react/src/index.ts'),
                '@sb1/ffe-tables-react': resolve(__dirname, '../../packages/ffe-tables-react/src/index.ts'),
                '@sb1/ffe-modals-react': resolve(__dirname, '../../packages/ffe-modals-react/src/index.ts'),
                '@sb1/ffe-grid-react': resolve(__dirname, '../../packages/ffe-grid-react/src/index.ts'),
                '@sb1/ffe-core-react': resolve(__dirname, '../../packages/ffe-core-react/src/index.ts'),
                '@sb1/ffe-buttons-react': resolve(__dirname, '../../packages/ffe-buttons-react/src/index.ts'),
                '@sb1/ffe-datepicker-react': resolve(__dirname, '../../packages/ffe-datepicker-react/src/index.ts'),
                '@sb1/ffe-dropdown-react': resolve(__dirname, '../../packages/ffe-dropdown-react/src/index.ts'),
                '@sb1/ffe-formatters': resolve(__dirname, '../../packages/ffe-formatters/src/index.ts'),
                '@sb1/ffe-icons-react': resolve(__dirname, '../../packages/ffe-icons-react/src/index.tsx'),
                '@sb1/ffe-message-box-react': resolve(__dirname, '../../packages/ffe-message-box-react/src/index.ts'),
                '@sb1/ffe-account-selector-react': resolve(__dirname, '../../packages/ffe-account-selector-react/src/index.ts'),
                '@sb1/ffe-accordion-react': resolve(__dirname, '../../packages/ffe-accordion-react/src/index.ts'),
                '@sb1/ffe-chart-donut-react': resolve(__dirname, '../../packages/ffe-chart-donut-react/src/index.ts'),
                '@sb1/ffe-chips-react': resolve(__dirname, '../../packages/ffe-chips-react/src/index.ts'),
                '@sb1/ffe-collapse-react': resolve(__dirname, '../../packages/ffe-collapse-react/src/index.ts'),
                '@sb1/ffe-context-message-react': resolve(__dirname, '../../packages/ffe-context-message-react/src/index.ts'),
                '@sb1/ffe-feedback-react': resolve(__dirname, '../../packages/ffe-feedback-react/src/index.ts'),
                '@sb1/ffe-file-upload-react': resolve(__dirname, '../../packages/ffe-file-upload-react/src/index.ts'),
                '@sb1/ffe-lists-react': resolve(__dirname, '../../packages/ffe-lists-react/src/index.ts'),
                '@sb1/ffe-messages-react': resolve(__dirname, '../../packages/ffe-messages-react/src/index.ts'),
                '@sb1/ffe-pagination-react': resolve(__dirname, '../../packages/ffe-pagination-react/src/index.ts'),
                '@sb1/ffe-searchable-dropdown-react': resolve(__dirname, '../../packages/ffe-searchable-dropdown-react/src/index.ts'),
                '@sb1/ffe-spinner-react': resolve(__dirname, '../../packages/ffe-spinner-react/src/index.ts'),
                '@sb1/ffe-symbols-react': resolve(__dirname, '../../packages/ffe-symbols-react/src/index.ts'),
                '@sb1/ffe-system-message-react': resolve(__dirname, '../../packages/ffe-system-message-react/src/index.ts'),
                '@sb1/ffe-tabs-react': resolve(__dirname, '../../packages/ffe-tabs-react/src/index.ts'),
                'react': resolve(__dirname, 'node_modules/react'),
                'react-dom': resolve(__dirname, 'node_modules/react-dom'),
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
            assetsInlineLimit: 0,
        }
    };

    return config;
});
