import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      exclude: [
        'src/config/**',
        '**/schemas/**',
        '**/*.d.ts',
        'tests/__mocks__/**/*.ts',
      ],
      include: ['src/**/*'],
      reporter: ['html', 'json-summary', 'json', 'text'],
    },
    environment: 'jsdom',
    env: loadEnv('', process.cwd(), ''),
    clearMocks: true,
    restoreMocks: true,
    mockReset: true,
    globals: true,
    // This is needed by @testing-library to be cleaned up after each test
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['./tests/setup.ts', './tests/automocks.tsx'],
    name: 'browser',
    browser: {
      enabled: true,
      name: 'chrome',
    },
  },
});
