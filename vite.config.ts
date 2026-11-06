 import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
// import { resolve } from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
base:'/portfolio',
build:{ target: 'es2015',
  // rollupOptions:{
  //   input:{
  //   main:resolve(import.meta.dirname,'index.html'),
  //   certification:resolve(import.meta.dirname,'certification.html'),    
  //   schema:resolve(import.meta.dirname,'schema.html'),
  //   diagram:resolve(import.meta.dirname,'diagram.html')
  //   },
  // }
}
})