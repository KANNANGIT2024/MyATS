import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    proxy: {
      // Anything starting with /api will be forwarded to arbeitnow.com
      '/api': {
        target: 'https://arbeitnow.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'), // keep the path same
      },
    },
  },
})