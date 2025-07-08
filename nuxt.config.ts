// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	eslint: {
		config: { standalone: false },
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@nuxt/ui',
		'@nuxt/eslint',
		'@nuxt/icon',
	],
	css: ['~/assets/css/main.css'],
	icon: {
		mode: 'css',
		cssLayer: 'base',
	},
	// ui: {
	// 	colorMode: true,
	// },
	// colorMode: {
	// 	preference: 'system',
	// 	fallback: 'dark',
	// 	classSuffix: '',
	// },
})
