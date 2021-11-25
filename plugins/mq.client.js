import { defineNuxtPlugin } from '#app'
import { Vue3Mq } from 'vue3-mq'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp
		.use(Vue3Mq, {
			breakpoints: {
				phone: 0,
				md: 768,
				air: 912,
				lg: 1152,
				xl: 1366,
				'2xl': 2560,
			},
		})
})
