import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineNuxtConfig({
	telemetry: false,
	build: {
		transpile: ['@appbaseio/reactivesearch-vue'],
	},
	css: ['@/assets/css/airbnb.css'],
	modules: ['@nuxtjs/emotion'],
	vite: {
		optimizeDeps: {
			include: [
				'@appbaseio/reactivecore',
				'@appbaseio/reactivesearch-vue',
				'fast-deep-equal',
			],
			esbuildOptions:{
				plugins:[
				  esbuildCommonjs(['@appbaseio/reactivesearch-vue'])
				]
			  }
		},
		build: {
			commonjsOptions: {
				include: [/reactivecore/, /reactivesearch/, /node_modules/],
			},
		},
		
	},
});
