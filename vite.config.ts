import { defineConfig } from 'vite';
import path from 'path';
// import importToCDN from 'vite-plugin-cdn-import';

export default defineConfig({
  base: './',
  plugins: [
    // importToCDN({
    //   modules: [
    //     {
    //       name: 'react',
    //       var: 'React',
    //       path: 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js'
    //     },
    //     {
    //       name: 'react-dom',
    //       var: 'ReactDOM',
    //       path: 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/index.min.js'
    //     },
    //     {
    //       name: 'react-router-dom',
    //       var: 'ReactRouterDom',
    //       path: 'https://cdn.jsdelivr.net/npm/react-router-dom@6.8.2/dist/umd/react-router-dom.production.min.js'
    //     },
    //   ],
    // }),
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
