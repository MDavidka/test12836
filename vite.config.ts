import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    minify: 'esbuild',
    sourcemap: false,
  },
  plugins: [
    // Vite's default TS plugin handles type checking and transpilation
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  css: {
    postcss: {
      plugins: [
        // Tailwind CSS is typically configured via tailwind.config.js
        // and imported into style.css. Vite will process it.
      ],
    },
  },
});