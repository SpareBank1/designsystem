// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { glob } from 'glob';

// Function to collect all FFE LESS imports
async function collectFfeImports() {
    try {
        const nodeModulesPath = resolve(__dirname, 'node_modules/@sb1');
        console.log('Searching for LESS files in:', nodeModulesPath);

        const lessFiles = await glob('**/less/*.less', {
            cwd: nodeModulesPath,
            ignore: ['**/node_modules/**'],
            absolute: false,
        });

        console.log('Found LESS files:', lessFiles);

        // Start with core colors as it's a dependency for other components
        const imports = ['@import "@sb1/ffe-core/less/colors";'];

        // Add all other FFE imports, excluding core colors
        for (const file of lessFiles) {
            // Skip if it's colors.less since we already imported it
            if (!file.includes('ffe-core/less/colors.less')) {
                // Remove the .less extension for the import
                const importPath = file.replace('.less', '');
                imports.push(`@import "@sb1/${importPath}";`);
            }
        }

        const finalImports = imports.join('\n');
        console.log('Generated imports:', finalImports);

        return finalImports;
    } catch (error) {
        console.error('Error collecting FFE imports:', error);
        // Return just the core colors import as fallback
        return '@import "@sb1/ffe-core/less/colors";';
    }
}

export default defineConfig(async () => ({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                math: 'always',
                additionalData: await collectFfeImports(),
            },
        },
    },
    resolve: {
        alias: {
            '@src': resolve(__dirname, './src'),
            '@components': resolve(__dirname, './src/components'),
            '@styles': resolve(__dirname, './src/styles'),
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'sb1-core': ['@sb1/ffe-core', '@sb1/ffe-core-react'],
                },
            },
        },
    },
}));
