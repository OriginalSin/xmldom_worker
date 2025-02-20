import { defineConfig, loadEnv } from 'vite'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
		esbuildOptions: {
		  define: {
			global: 'globalThis'
		  }
		}
	},
	plugins: [
		mkcert(),
	],
	build: {
		outDir: 'dist/assets',
		manifest: true,
		// ssrManifest: true,
		emptyOutDir: false,
		sourcemap: false,
		minify: false
	},

 	server: {
		host: '127.0.0.1',
		port: 8080,
		https: true,
		open: true,
	},
})
