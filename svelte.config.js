import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$i18n: 'src/lib/i18n'
		}
	}
};
export default config;
