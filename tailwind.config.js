/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				lightBg: '#FFFFFF',
				darkBg: '#37323E',
				btn: '#DEB841',
				btnHov: '#DE9E36',
				header: '#6D6A75',
				cart: '#34403A',
				desc: '#285238',
			},
		},
	},
	plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
};
