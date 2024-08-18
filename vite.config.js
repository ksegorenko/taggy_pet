import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      watch: {
          usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 5173,
  },
  resolve : {
    alias: {
        assets: '/src/assets',
        components: '/src/components',
        containers: '/src/containers',
        services: '/src/services',
        pages: '/src/pages',
        context: '/src/context',
        hooks: '/src/hooks',
        utils: '/src/utils'
      }
  }
})
