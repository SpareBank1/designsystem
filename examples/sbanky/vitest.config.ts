import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react() as any],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
  optimizeDeps: {
    include: [
      '@sb1/ffe-tables-react',
      '@sb1/ffe-form-react',
      '@sb1/ffe-buttons-react',
      '@sb1/ffe-icons-react',
      '@sb1/ffe-cards-react',
      '@sb1/ffe-core-react',
      '@sb1/ffe-grid-react',
      '@sb1/ffe-modals-react',
      '@sb1/ffe-datepicker-react',
      '@sb1/ffe-dropdown-react',
      '@sb1/ffe-message-box-react'
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@sb1/ffe-cards-react': path.resolve(__dirname, '../../packages/ffe-cards-react/src/index.ts'),
      '@sb1/ffe-form-react': path.resolve(__dirname, '../../packages/ffe-form-react/src/index.ts'),
      '@sb1/ffe-tables-react': path.resolve(__dirname, '../../packages/ffe-tables-react/src/index.ts'),
      '@sb1/ffe-modals-react': path.resolve(__dirname, '../../packages/ffe-modals-react/src/index.ts'),
      '@sb1/ffe-grid-react': path.resolve(__dirname, '../../packages/ffe-grid-react/src/index.ts'),
      '@sb1/ffe-core-react': path.resolve(__dirname, '../../packages/ffe-core-react/src/index.ts'),
      '@sb1/ffe-buttons-react': path.resolve(__dirname, '../../packages/ffe-buttons-react/src/index.ts'),
      '@sb1/ffe-datepicker-react': path.resolve(__dirname, '../../packages/ffe-datepicker-react/src/index.ts'),
      '@sb1/ffe-dropdown-react': path.resolve(__dirname, '../../packages/ffe-dropdown-react/src/index.ts'),
      '@sb1/ffe-formatters': path.resolve(__dirname, '../../packages/ffe-formatters/src/index.ts'),
      '@sb1/ffe-icons-react': path.resolve(__dirname, '../../packages/ffe-icons-react/src/index.tsx'),
      '@sb1/ffe-message-box-react': path.resolve(__dirname, '../../packages/ffe-message-box-react/src/index.ts'),
      '@sb1/ffe-spinner-react': path.resolve(__dirname, '../../packages/ffe-spinner-react/src/index.ts'),
      '@sb1/ffe-account-selector-react': path.resolve(__dirname, '../../packages/ffe-account-selector-react/src/index.ts'),
      '@sb1/ffe-accordion-react': path.resolve(__dirname, '../../packages/ffe-accordion-react/src/index.ts'),
      '@sb1/ffe-chart-donut-react': path.resolve(__dirname, '../../packages/ffe-chart-donut-react/src/index.ts'),
      '@sb1/ffe-chips-react': path.resolve(__dirname, '../../packages/ffe-chips-react/src/index.ts'),
      '@sb1/ffe-collapse-react': path.resolve(__dirname, '../../packages/ffe-collapse-react/src/index.ts'),
      '@sb1/ffe-context-message-react': path.resolve(__dirname, '../../packages/ffe-context-message-react/src/index.ts'),
      '@sb1/ffe-feedback-react': path.resolve(__dirname, '../../packages/ffe-feedback-react/src/index.ts'),
      '@sb1/ffe-file-upload-react': path.resolve(__dirname, '../../packages/ffe-file-upload-react/src/index.ts'),
      '@sb1/ffe-lists-react': path.resolve(__dirname, '../../packages/ffe-lists-react/src/index.ts'),
      '@sb1/ffe-messages-react': path.resolve(__dirname, '../../packages/ffe-messages-react/src/index.ts'),
      '@sb1/ffe-pagination-react': path.resolve(__dirname, '../../packages/ffe-pagination-react/src/index.ts'),
      '@sb1/ffe-searchable-dropdown-react': path.resolve(__dirname, '../../packages/ffe-searchable-dropdown-react/src/index.ts'),
      '@sb1/ffe-symbols-react': path.resolve(__dirname, '../../packages/ffe-symbols-react/src/index.ts'),
      '@sb1/ffe-system-message-react': path.resolve(__dirname, '../../packages/ffe-system-message-react/src/index.ts'),
      '@sb1/ffe-tabs-react': path.resolve(__dirname, '../../packages/ffe-tabs-react/src/index.ts'),
      'react': path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
}); 