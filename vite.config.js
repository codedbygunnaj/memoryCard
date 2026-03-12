import { defineConfig } from 'vitest/config';
import { describe, it, expect } from 'vitest';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',   // fake browser
    // globals: true,          // lets you use describe/it/expect without imports
    setupFiles: './tests/setup.js'
  },
});
