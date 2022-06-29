import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({ postcss: true }),
	kit: {
		adapter: adapter(),
		// disable js, not needed at this time
		...(process.env.NODE_ENV === 'production'
			? {
					browser: {
						hydrate: false,
						router: false
					}
			  }
			: {}),
		inlineStyleThreshold: Infinity
	}
};

export default config;
