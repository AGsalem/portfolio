 import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
base:'/portfolio',
build:{
  rollupOptions:{
    input:{
    main:resolve(__dirname,'index.html'),
    certification:resolve(__dirname,'certification.html'),    
    schema:resolve(__dirname,'schema.html'),
    diagram:resolve(__dirname,'diagram.html')
    },
    output:{assetFileNames: 'assets/[name].[ext]'}
  }
}
})
