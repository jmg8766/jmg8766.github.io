/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts,svelte}'],
	theme: {
		extend: {
			keyframes: {
				typing: {
					'0%': { width: '0' },
					'100%': { width: '1rem' }
				}
			},
			animation: {
				typing: 'typing 2s steps(4) infinite'
			}
		}
	}
};
