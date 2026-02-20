import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from "path"

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ['src/components/navyaui', 'src/lib', 'src/index.ts', 'src/types'],
            insertTypesEntry: true,
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: 'dist-lib', // Separate directory from the website build
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'NavyaUI',
            formats: ['es', 'cjs'],
            fileName: (format) => `navyaui.${format === 'es' ? 'es.js' : 'cjs'}`,
        },
        rollupOptions: {
            // Make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react', 'react-dom', 'framer-motion', 'clsx', 'tailwind-merge', 'lucide-react', '@tsparticles/engine', '@tsparticles/react', '@tsparticles/slim', '@tsparticles/plugin-polygon-mask', '@react-spring/web', 'webgl-fluid'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
})
