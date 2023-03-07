import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import path from 'path';
// import VitePluginCdnOptions from 'vite-plugin-cdn';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    // VitePluginCdnOptions({
    //   esm: true,
    //   modules: [
    //     {
    //       name: 'react',
    //       url: 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js'
    //     },
    //     {
    //       name: 'react-dom',
    //       url: 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/index.min.js'
    //     },
    //     {
    //       name: 'react-router-dom',
    //       url: 'https://cdn.jsdelivr.net/npm/react-router-dom@6.8.2/dist/umd/react-router-dom.production.min.js'
    //     }
    //   ]
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/getList': {
        target: 'https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10',
        changeOrigin: true,
        rewrite: url => {
          console.log(url.replace('/getList', ''))
          return url.replace('/getList', '')
        }
      }
    }
  },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return 'vender';
          }
        },
      },
    },
  },
});
