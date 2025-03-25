import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/gemini',  // Set to the path where your app will be hosted, if necessary
  plugins: [
    tailwindcss(),
    react()
  ],
});
