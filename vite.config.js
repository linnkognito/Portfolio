import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react(), eslint()],

  // Enables single startup command //
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },

  // Disables browser warning overlay //
  server: {
    hmr: {
      overlay: false,
    },
  },
});
