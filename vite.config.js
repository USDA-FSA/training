import { defineConfig } from 'vite'
//import { viteStaticCopy } from 'vite-plugin-static-copy'
import copy from 'rollup-plugin-copy'
import path from 'path';
import vue from '@vitejs/plugin-vue'
//import path from 'path'

// FSA Style path to allow for usage of SCSS variables
//const fsaScssPath = path.resolve(__dirname, "./node_modules/fsa-style/src/stylesheets/fsa-style.scss")
const fsaScssPath = './node_modules/fsa-style/src/stylesheets/fsa-style.scss';
const fsaFontsPath = './node_modules/fsa-style/src/fonts/';
const fsaImagesPath = './node_modules/fsa-style/src/img/';

const config = {
  server: { port: 3000 },
  base: '/training/',
  plugins: [
    copy({
      targets: [
        { src: fsaFontsPath, dest: 'public' },
        { src: fsaImagesPath, dest: 'public' }
      ]
    }),
    vue()
  ],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${fsaScssPath}";`
      }
    }
  }
}

export default defineConfig(config);
