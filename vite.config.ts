import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-fast-app/', // ← ここを追加！必ずリポジトリ名と一致させてください
  plugins: [
    react(),
    tailwindcss(),
  ],
})