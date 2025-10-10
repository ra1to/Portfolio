import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', 
  esbuild: {
    // .jsファイルの中身を強制的に 'jsx' として解析させる
    loader: {
      '.js': 'jsx',
    },
  },
});