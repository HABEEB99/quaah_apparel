/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				body: '#FAF5E4',
				btn: '#F8CB2E',
				btnHov: '#F8B400',
				header: '#006E7F',
				footer: '#FF6363',
			},
		},
	},
	plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
};
