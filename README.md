# xmldom_worker

Check [xmldom issues/316](https://github.com/xmldom/xmldom/issues/316)

Hi,

I am using [Vite](https://www.npmjs.com/package/vite/) for development.
Using DOMParser in Worker, I also get the same issue.
After enabling [optimizeDeps](https://vite.dev/config/dep-optimization-options.html) option in vite.config.js, everything is fine:

```
import { defineConfig } from 'vite'

export default defineConfig({
    optimizeDeps: {
		esbuildOptions: {
		  define: {
			global: 'globalThis'
		  }
		}
	},
})
```
[Demo](https://originalsin.github.io/xmldom/index.html)
