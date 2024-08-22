/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Background colors
				bg: {
					dark: "#111827",
					light: "#1a1a1a",
				},
				// Text colors
				text: {
					primary: "#f5f5f5",
					secondary: "#dcdcdc",
				},
				// Additional colors
				primary: "#111827",
				secondary: "#333333",
				success: "#28a745",
				warning: "#ffc107",
			},
		},
	},
	plugins: [],
};
