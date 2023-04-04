import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, './src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    }
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4000, // 端口号
    open: false, // 是否自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        //rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
