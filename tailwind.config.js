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
					dark: "#111827", // Black background for the main layout
					light: "#1a1a1a", // Slightly lighter background for sections
				},
				// Text colors
				text: {
					primary: "#f5f5f5", // Light text color for readability on dark background
					secondary: "#dcdcdc", // Slightly darker text for secondary elements
					// Accent color for highlights and important text
				},
				// Additional colors
				primary: "#111827", // Primary color for buttons, links, etc.
				secondary: "#333333", // Secondary color for less prominent elements
				success: "#28a745", // Green for success messages or notifications
				error: "#dc3545", // Red for error messages or notifications
				warning: "#ffc107", // Yellow for warnings or alerts
			},
		},
	},
	plugins: [],
};
