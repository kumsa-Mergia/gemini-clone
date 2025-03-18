import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default {
  plugins: [
    tailwindcss(),
    react()
  ],
}

