# Sparebank1 Designsystem Example App

## About

This example app is meant to help you see how the designssystem components can be used in a React app.
Do not copy this and assume it is ready for production in your Sparebank1 project, but use it as a starting
point. Only the actual components imported from the designsystem have gone through the processes that ensure it is
up to our standards when it comes to accessibility, performance, and design.

## How this app was setup

```bash
# Create project directory
mkdir sbanky
cd sbanky
```

### Initialize project with npm

```bash
npm init -y
```

### Install core dependencies for React + TypeScript + Vite
```bash

npm install react react-dom
npm install -D @vitejs/plugin-react vite typescript @types/react @types/react-dom
```

### Install SB1/FFE design system components
```bash
npm install @sb1/ffe-account-selector-react @sb1/ffe-buttons-react @sb1/ffe-cards-react @sb1/ffe-chart-donut-react @sb1/ffe-collapse-react @sb1/ffe-context-message-react @sb1/ffe-core-react @sb1/ffe-datepicker-react @sb1/ffe-dropdown-react @sb1/ffe-feedback-react @sb1/ffe-file-upload-react @sb1/ffe-form-react @sb1/ffe-grid-react @sb1/ffe-icons-react @sb1/ffe-lists-react @sb1/ffe-message-box-react @sb1/ffe-messages-react @sb1/ffe-modals-react @sb1/ffe-chips-react @sb1/ffe-pagination-react @sb1/ffe-searchable-dropdown-react @sb1/ffe-spinner-react @sb1/ffe-symbols-react @sb1/ffe-system-message-react @sb1/ffe-tables-react @sb1/ffe-tabs-react```

### Install LESS support
```bash
npm install -D less
```

### Create basic project structure
```bash
mkdir -p src/components src/styles
touch src/main.tsx src/App.tsx src/styles/main.less
```

### Create TypeScript configuration
```bash
cat > tsconfig.json << EOF
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF
```

### Create Vite configuration
```bash
cat > vite.config.ts << EOF
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        math: 'always',
        additionalData: '@import "@sb1/ffe-core/less/ffe.less";'
      }
    }
  }
})
EOF
```

### Create index.html
```bash

cat > index.html << EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SBanky</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF
```

### Add scripts to package.json
```bash
npm pkg set scripts.dev="vite"
npm pkg set scripts.build="tsc && vite build"
npm pkg set scripts.preview="vite preview"
```

### Vite config file with .less imports automated

```ts
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
            '@': resolve(__dirname, './src'),
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

```


### Start development server
```bash
npm run dev
```bash
