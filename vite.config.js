import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lodash.isempty', '@primer/react'],
  },
  build: {
    commonjsOptions: {
      include: [/lodash.isempty/, /node_modules/],
    },
  },
})