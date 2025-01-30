import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(
    
  )],
  server: {
    proxy: {
      "/api": {
        target: process.env.LOCAL_API_ORIGIN ?? process.env.API_ORIGIN,
        changeOrigin: true,
      },
    },
  },

});
