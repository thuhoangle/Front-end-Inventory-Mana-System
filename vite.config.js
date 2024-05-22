import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from 'vite-plugin-require';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      'api': 'https://luoi-lot-ca-pf3yfmx32q-de.a.run.app/'
    }
  },
  plugins: [
		//vitePluginRequire.default()
    react()
  ],
})