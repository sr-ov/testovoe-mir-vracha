/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'c-prim': '#223867',
				'c-sec': '#028ca6',
			},
		},
	},
	plugins: [],
}
