import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 新增的关键配置：指定GitHub Pages的基础路径
  base: '/TodoList_Minecraft_Style/',
  // 打包输出目录（默认就是dist，加不加都可以，写出来更清晰）
  build: {
    outDir: 'dist',
  },
})
