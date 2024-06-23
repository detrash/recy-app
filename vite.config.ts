/* eslint-disable unicorn/prefer-module */
import react from '@vitejs/plugin-react';
// eslint-disable-next-line unicorn/import-style
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      app: resolve(__dirname, 'src', 'app'),
      components: resolve(__dirname, 'src', 'components'),
      hooks: resolve(__dirname, 'src', 'hooks'),
    },
  },
  server: {
    port: 3000,
  },
});
