import { fileURLToPath, URL } from 'node:url'

import Components from 'unplugin-vue-components/dist/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/dist/resolvers';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
    resolvers: [AntDesignVueResolver()],
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
