import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        children: resolve(__dirname, 'src/WujieReactChildren/index.html'),
      },
    },
  },
  server: {
    cors: true
  }
})
