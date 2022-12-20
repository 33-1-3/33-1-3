import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  plugins: [
    react(),
    svgr(),
    checker({
      typescript: true,
    }),
  ],
  logLevel: 'error',
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
});
