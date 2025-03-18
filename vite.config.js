import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',  // Set the root directory explicitly
  build: {
    outDir: 'dist',  // Ensure the correct output directory
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/, // Allow JSX files
  },
})
