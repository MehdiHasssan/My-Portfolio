import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will expose the server on all network interfaces
    port: 5173, // Specify the port, if necessary
  },
})
