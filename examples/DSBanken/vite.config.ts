import { defineConfig } from 'vite';
import type { UserConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { ffeLessPlugin } from '@sb1/ffe-vite-less';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import purgecss from '@fullhuman/postcss-purgecss';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { typeExportsFixer } from './vite-plugins/type-exports-fixer';

const root = __dirname
const packagesDir = resolve(root, '../../packages')

export default defineConfig(async () => {
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL

  return {
    root,

    server: {
      fs: {
        // allow serving & watching both your app and your TSX packages
        allow: [root, packagesDir],
      },
    },

    resolve: {
      alias: [
        // 1) any @sb1/pkg/less/foo.less → packages/pkg/less/foo.less
        {
          find: /^@sb1\/([^/]+)\/less\/(.+)$/,
          replacement: `${packagesDir}/$1/less/$2`,
        },
        // 2) any @sb1/foo-react(/deep)? → packages/foo-react/src(/deep)
        {
          find: /^@sb1\/([^/]+-react)(\/.*)?$/,
          replacement: `${packagesDir}/$1/src$2`,
        },
        // 3) ffe-icons deep SVG imports
        {
          find: /^@sb1\/ffe-icons\/(.+)$/,
          replacement: `${packagesDir}/ffe-icons/$1`,
        },
        {
          find: /^@sb1\/ffe-icons$/,
          replacement: `${packagesDir}/ffe-icons/src`,
        },
        // 4) ffe-core package uses gen-src instead of src
        {
          find: /^@sb1\/ffe-core$/,
          replacement: `${packagesDir}/ffe-core/gen-src`,
        },
        // 5) any other @sb1/pkg → packages/pkg/src
        {
          find: /^@sb1\/([^/]+)$/,
          replacement: `${packagesDir}/$1/src`,
        },
        // 5) your app’s “@/…” → example/src/…
        {
          find: /^@\/(.*)$/,
          replacement: `${root}/src/$1`,
        },
        // 6) dedupe React/React‑DOM
        {
          find: 'react',
          replacement: resolve(root, 'node_modules/react'),
        },
        {
          find: 'react-dom',
          replacement: resolve(root, 'node_modules/react-dom'),
        },
      ],
    },

    optimizeDeps: {
      // empty so Vite treats all your local -react packages as app source (HMR)
      include: [],
    },

    css: {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer(),
          ...(
            isProduction
              ? [
                  purgecss({
                    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
                    defaultExtractor: (content) =>
                      content.match(/[A-Za-z0-9_/:.-]+/g) || [],
                  }),
                ]
              : []
          ),
        ],
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // allow Less’s own @import to find your packages
          paths: [packagesDir],
        },
      },
    },

    plugins: [
      // Inject all FFE Less styles automatically
      ffeLessPlugin({ nodeModulesPath: resolve(__dirname, 'node_modules') }) as unknown as PluginOption,
      // Our custom plugin to fix type exports from design system packages
      typeExportsFixer(),
      
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/@sb1/ffe-webfonts/fonts/*',
            dest: 'fonts',
          },
        ],
      }),
    ],

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
    },
  }
})
