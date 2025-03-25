import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vite's default output directory
  }
});
