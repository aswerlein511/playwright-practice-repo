/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['pages/__tests__/**/*.spec.ts'],
    exclude: ['e2e', 'dist', 'node_modules']
  }
});
