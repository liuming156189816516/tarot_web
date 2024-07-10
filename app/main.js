import App from './App'
import yxHfPlugin from '@/common/yx-plugin.js';
import en from './locale/en.json'
import th from './locale/th.json'
import vn from './locale/vn.json'
const messages = {'en': en,'th': th,'vn': vn}
let i18nConfig = {locale:uni.getStorageSync("language"),messages}

// #ifndef VUE3
	import Vue from 'vue'
	import VueI18n from 'vue-i18n'
	Vue.use(VueI18n)
	const i18n = new VueI18n(i18nConfig)
	Vue.config.productionTip = false
	App.mpType = 'app'
	const app = new Vue({
		i18n,
		...App
	})
	app.$mount()
// #endif

// #ifdef VUE3
	import { createSSRApp } from 'vue'
	import { createI18n } from 'vue-i18n'
	const i18n = createI18n(i18nConfig)
	export function createApp() {
		const app = createSSRApp(App)
		app.use(i18n)
		app.use(yxHfPlugin); // 鎴戠殑鎻掍欢
		return {
			app
		}
	}
// #endif