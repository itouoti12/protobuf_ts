import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'
/// <reference types="vitest" />
// import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: [],
  },
  test: {
    globals: true,
    //導入できるならhappy-domを入れたい
    // environment: 'happy-dom',
    environment: 'jsdom',
    setupFiles: ['./setup.ts'],
    // deps: { inline: ['jquery'] },
  },
});
