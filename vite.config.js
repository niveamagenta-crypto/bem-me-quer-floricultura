import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    chunkSizeWarningLimit: 1100,
    rollupOptions: {
      output: {
        manualChunks: {
          gallery: [
            'react-photo-album',
            'yet-another-react-lightbox',
            'yet-another-react-lightbox/plugins/captions',
            'yet-another-react-lightbox/plugins/fullscreen',
            'yet-another-react-lightbox/plugins/slideshow',
            'yet-another-react-lightbox/plugins/thumbnails',
            'yet-another-react-lightbox/plugins/zoom',
          ],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          motion: ['framer-motion', '@react-spring/web', 'react-spring', '@use-gesture/react'],
          lottie: ['lottie-react'],
        },
      },
    },
  }
})

