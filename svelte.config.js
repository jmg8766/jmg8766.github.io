import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ postcss: true }),
	kit: {
		adapter: adapter(),
		inlineStyleThreshold: Infinity
		// paths: {
		// 	base: process.env.NODE_ENV === 'production' ? '/personal-site' : ''
		// }
	}
};

export default config;
