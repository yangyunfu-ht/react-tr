import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';

export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log(command)
  return {
    root: process.cwd(),
    base: command === 'serve' ? '/' : '/react-r/',
    plugins: [
      react(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.json', '.jsx', '.tsx'],
    },
    css: {
      // 全局注入scss变量（可以引入多个文件），每个scss文件可以直接使用,最后面的“;”号一定要加上，不然vite css报错  vite使用sass 报错：[plugin:vite:css] expected “；“.
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/style/variable.scss"; @import "@/style/globalVariable.scss";`,
        },
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
            return url.replace('/getList', '');
          },
        },
      },
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
  };
});
