import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/3': 'https://luoi-lot-ca-pf3yfmx32q-de.a.run.app'
    }
  },
  plugins: [react()],
})