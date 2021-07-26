import path from 'path'
import { defineConfig } from 'vite'

import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'
import ViteRadar from 'vite-plugin-radar'
import { config } from 'dotenv'

config()

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    reactRefresh(),
    WindiCSS({
      config: {
        darkMode: 'class',
      }
    }),
    // !!Analytics!!
    ViteRadar({
      // enableDev: true,
      analytics: {
        id: process.env.GTAG
      }
    }),
  ],
  base: './'
})
